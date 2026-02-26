import { useState, useRef, useEffect, useCallback } from 'react';
import ScenarioSelector from './ScenarioSelector';
import type { Scenario, DialogNode, DialogOption, ResponseQuality } from '../data/scenarios';
import './MockInterview.css';

// SpeechRecognition types for webkit
interface SpeechRecResult {
  transcript: string;
  confidence: number;
}

interface SpeechRecResultList {
  readonly length: number;
  item(index: number): { readonly length: number; item(index: number): SpeechRecResult; 0: SpeechRecResult; isFinal: boolean };
  [index: number]: { readonly length: number; item(index: number): SpeechRecResult; 0: SpeechRecResult; isFinal: boolean };
}

function getSpeechRecognition(): (new () => {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((event: { results: SpeechRecResultList; resultIndex: number }) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
}) | null {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as unknown as Record<string, any>;
  return (w.SpeechRecognition || w.webkitSpeechRecognition) as ReturnType<typeof getSpeechRecognition>;
}

// Character-specific TTS voice profiles
interface VoiceProfile {
  preferredVoices: string[];
  pitch: number;
  rate: number;
}

const voiceProfiles: Record<string, VoiceProfile> = {
  'Alex Chen': {
    preferredVoices: ['Daniel', 'Google UK English Male', 'Alex', 'Fred'],
    pitch: 0.88,
    rate: 0.92,
  },
  'Jordan Rivera': {
    preferredVoices: ['Samantha', 'Google UK English Female', 'Karen', 'Victoria'],
    pitch: 1.05,
    rate: 1.0,
  },
  'Sam Patel': {
    preferredVoices: ['Rishi', 'Google UK English Male', 'Moira', 'Tessa'],
    pitch: 1.1,
    rate: 0.95,
  },
  'Morgan Lee': {
    preferredVoices: ['Karen', 'Google US English', 'Samantha', 'Daniel'],
    pitch: 0.95,
    rate: 0.88,
  },
};

function selectVoice(name: string, voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined {
  const profile = voiceProfiles[name];
  if (profile) {
    for (const pref of profile.preferredVoices) {
      const match = voices.find(v => v.name.includes(pref));
      if (match) return match;
    }
  }
  return voices.find(v => v.lang.startsWith('en')) || voices[0];
}

// Natural speech patterns: adds filler words and pauses for more realistic TTS
function addNaturalSpeechPatterns(text: string): string {
  const fillers = ['um,', 'uh,', 'well,', 'so,', 'you know,'];
  // Split into sentences
  const sentences = text.split(/(?<=[.!?])\s+/);
  const processed = sentences.map((sentence, i) => {
    let s = sentence;
    // 40% chance of filler word at start of non-first sentences
    if (i > 0 && Math.random() < 0.4) {
      const filler = fillers[Math.floor(Math.random() * fillers.length)];
      s = filler.charAt(0).toUpperCase() + filler.slice(1) + ' ' + s.charAt(0).toLowerCase() + s.slice(1);
    }
    // Add pause commas before conjunctions
    s = s.replace(/\s+(but|however|because|although)\b/gi, ', $1');
    // Replace em-dashes with ellipses for hesitation
    s = s.replace(/—/g, '...');
    return s;
  });
  return processed.join(' ');
}

// Fetch dynamic AI response from OpenAI
async function fetchAiReply(
  userMessage: string,
  scenario: Scenario,
  apiKey: string,
): Promise<string> {
  const systemPrompt = `You are ${scenario.aiName}, a ${scenario.aiRole}. You are in a job interview for a ${scenario.title} position. ${scenario.description}. Respond naturally as the candidate would — stay in character, give thoughtful 2-4 sentence responses. Do not break character or mention that you are an AI.`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage },
      ],
      max_tokens: 200,
      temperature: 0.85,
    }),
  });

  if (!response.ok) throw new Error(`OpenAI API error: ${response.status}`);

  const data = await response.json();
  return data.choices[0].message.content.trim();
}

function matchResponseToOptions(input: string, options: DialogOption[]): number {
  const words = input.toLowerCase().split(/\s+/).filter(w => w.length > 3);
  if (words.length === 0) return 0;

  const scores = options.map(opt => {
    const optWords = opt.text.toLowerCase().split(/\s+/);
    let score = 0;
    for (const word of words) {
      for (const ow of optWords) {
        if (ow.includes(word) || word.includes(ow)) {
          score++;
          break;
        }
      }
    }
    return score;
  });

  const maxScore = Math.max(...scores);
  if (maxScore === 0) {
    let bestIdx = 0;
    let bestScore = -1;
    options.forEach((o, i) => {
      if (o.score > bestScore) {
        bestScore = o.score;
        bestIdx = i;
      }
    });
    return bestIdx;
  }

  return scores.indexOf(maxScore);
}

interface TranscriptEntry {
  speaker: 'ai' | 'user';
  name: string;
  text: string;
  quality?: ResponseQuality;
  coachingTip?: string;
}

interface CategoryScore {
  questioning: number;
  rapport: number;
  structure: number;
  'bias-awareness': number;
}

interface CategoryCount {
  questioning: number;
  rapport: number;
  structure: number;
  'bias-awareness': number;
}

const categoryLabels: Record<string, string> = {
  questioning: 'Question Quality',
  rapport: 'Rapport & Empathy',
  structure: 'Interview Structure',
  'bias-awareness': 'Bias Awareness',
};

const categoryIcons: Record<string, string> = {
  questioning: '?',
  rapport: '~',
  structure: '#',
  'bias-awareness': '!',
};

export default function MockInterview() {
  const [scenario, setScenario] = useState<Scenario | null>(null);
  const [currentNode, setCurrentNode] = useState<DialogNode | null>(null);
  const [totalScore, setTotalScore] = useState(0);
  const [turns, setTurns] = useState(0);
  const [finished, setFinished] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [muted, setMuted] = useState(false);
  const [showCaptions, setShowCaptions] = useState(true);
  const [userText, setUserText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [waitingForResponse, setWaitingForResponse] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([]);
  const [currentCoaching, setCurrentCoaching] = useState<string | null>(null);
  const [coachingQuality, setCoachingQuality] = useState<ResponseQuality | null>(null);
  const [categoryScores, setCategoryScores] = useState<CategoryScore>({ questioning: 0, rapport: 0, structure: 0, 'bias-awareness': 0 });
  const [categoryCounts, setCategoryCounts] = useState<CategoryCount>({ questioning: 0, rapport: 0, structure: 0, 'bias-awareness': 0 });
  const [showTranscript, setShowTranscript] = useState(false);
  const [fillerEnabled, setFillerEnabled] = useState(true);
  const [openAiKey, setOpenAiKey] = useState('');
  const [aiMode, setAiMode] = useState(false);
  const [webcamStream, setWebcamStream] = useState<MediaStream | null>(null);
  const [webcamDenied, setWebcamDenied] = useState(false);

  const timerRef = useRef<number | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const transcriptEndRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-scroll transcript
  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcript]);

  // Attach webcam stream to video element
  useEffect(() => {
    if (videoRef.current && webcamStream) {
      videoRef.current.srcObject = webcamStream;
    }
  }, [webcamStream]);

  // Timer
  useEffect(() => {
    if (scenario && !finished) {
      timerRef.current = window.setInterval(() => {
        setElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [scenario, finished]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const speak = useCallback((text: string, name: string) => {
    // Add to transcript
    setTranscript(prev => [...prev, { speaker: 'ai', name, text }]);

    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    // Apply natural speech patterns to spoken audio only (transcript stays clean)
    const spokenText = fillerEnabled ? addNaturalSpeechPatterns(text) : text;
    const utt = new SpeechSynthesisUtterance(spokenText);

    // Apply character-specific voice profile
    const profile = voiceProfiles[name];
    utt.rate = profile?.rate ?? 1.0;
    utt.pitch = profile?.pitch ?? 1.0;

    const voices = window.speechSynthesis.getVoices();
    const selectedVoice = selectVoice(name, voices);
    if (selectedVoice) utt.voice = selectedVoice;

    utt.onstart = () => {
      setIsSpeaking(true);
    };
    utt.onend = () => {
      setIsSpeaking(false);
      setWaitingForResponse(false);
    };
    utt.onerror = () => {
      setIsSpeaking(false);
      setWaitingForResponse(false);
    };

    if (muted) {
      utt.volume = 0;
    }

    window.speechSynthesis.speak(utt);
  }, [muted, fillerEnabled]);

  const startScenario = useCallback((s: Scenario) => {
    window.speechSynthesis?.cancel();
    const startNode = s.dialogTree.find(n => n.id === 'start')!;
    setScenario(s);
    setCurrentNode(startNode);
    setTotalScore(0);
    setTurns(0);
    setFinished(false);
    setElapsed(0);
    setUserText('');
    setShowSuggestions(false);
    setWaitingForResponse(true);
    setAvatarError(false);
    setTranscript([]);
    setCurrentCoaching(null);
    setCoachingQuality(null);
    setCategoryScores({ questioning: 0, rapport: 0, structure: 0, 'bias-awareness': 0 });
    setCategoryCounts({ questioning: 0, rapport: 0, structure: 0, 'bias-awareness': 0 });
    setIsThinking(false);
    setShowTranscript(false);
    setAiMode(openAiKey.trim().length > 0);

    // Request webcam
    if (navigator.mediaDevices?.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(stream => {
          setWebcamStream(stream);
          setWebcamDenied(false);
        })
        .catch(() => {
          setWebcamDenied(true);
        });
    }

    setTimeout(() => {
      speak(startNode.aiMessage, s.aiName);
    }, 800);
  }, [speak, openAiKey]);

  const processResponse = useCallback((option: DialogOption, displayText: string) => {
    if (!scenario || !currentNode) return;
    window.speechSynthesis?.cancel();

    const newScore = totalScore + option.score;
    const newTurns = turns + 1;

    // Add user message to transcript with coaching info
    setTranscript(prev => [...prev, {
      speaker: 'user',
      name: 'You',
      text: displayText,
      quality: option.quality,
      coachingTip: option.coachingTip,
    }]);

    // Show coaching tip
    setCurrentCoaching(option.coachingTip);
    setCoachingQuality(option.quality);

    // Update category scores
    setCategoryScores(prev => ({
      ...prev,
      [option.category]: prev[option.category] + option.score,
    }));
    setCategoryCounts(prev => ({
      ...prev,
      [option.category]: prev[option.category] + 1,
    }));

    setIsSpeaking(false);
    setUserText('');
    setShowSuggestions(false);
    setWaitingForResponse(true);
    setIsThinking(true);

    if (option.nextId === null) {
      setTotalScore(newScore);
      setTurns(newTurns);
      setCurrentNode(null);
      setTimeout(() => {
        setIsThinking(false);
        setFinished(true);
        setCurrentCoaching(null);
        setCoachingQuality(null);
      }, 2000);
      return;
    }

    const nextNode = scenario.dialogTree.find(n => n.id === option.nextId)!;

    // Realistic thinking delay (1.5-3s base, 30% chance of +4s "thoughtful pause" late in interview)
    let thinkDelay = 1500 + Math.random() * 1500;
    if (newTurns >= 3 && Math.random() < 0.3) {
      thinkDelay += 4000;
    }

    if (aiMode && openAiKey.trim()) {
      // AI mode: fetch dynamic response after thinking delay
      setTimeout(() => {
        fetchAiReply(displayText, scenario, openAiKey.trim())
          .then(aiText => {
            setIsThinking(false);
            setCurrentNode(nextNode);
            setTotalScore(newScore);
            setTurns(newTurns);
            speak(aiText, scenario.aiName);
          })
          .catch(() => {
            // Silently fall back to scripted dialog on error
            setIsThinking(false);
            setCurrentNode(nextNode);
            setTotalScore(newScore);
            setTurns(newTurns);
            speak(nextNode.aiMessage, scenario.aiName);
          });
      }, thinkDelay);
    } else {
      setTimeout(() => {
        setIsThinking(false);
        setCurrentNode(nextNode);
        setTotalScore(newScore);
        setTurns(newTurns);
        speak(nextNode.aiMessage, scenario.aiName);
      }, thinkDelay);
    }
  }, [scenario, currentNode, totalScore, turns, speak, aiMode, openAiKey]);

  const handleSuggestionClick = useCallback((option: DialogOption) => {
    processResponse(option, option.text);
  }, [processResponse]);

  const handleSendText = useCallback(() => {
    if (!userText.trim() || !currentNode?.options) return;
    const matchIdx = matchResponseToOptions(userText, currentNode.options);
    processResponse(currentNode.options[matchIdx], userText);
  }, [userText, currentNode, processResponse]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendText();
    }
  }, [handleSendText]);

  // Speech recognition
  const startListening = useCallback(() => {
    const SpeechRec = getSpeechRecognition();
    if (!SpeechRec) return;

    const recognition = new SpeechRec();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      let interim = '';
      let final = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          final += transcript;
        } else {
          interim += transcript;
        }
      }
      if (final) {
        setUserText(prev => prev + final);
        setInterimTranscript('');
      } else {
        setInterimTranscript(interim);
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
      setInterimTranscript('');
    };

    recognition.onend = () => {
      setIsListening(false);
      setInterimTranscript('');
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  }, []);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
    setInterimTranscript('');
  }, []);

  const toggleListening = useCallback(() => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }, [isListening, startListening, stopListening]);

  const reset = useCallback(() => {
    window.speechSynthesis?.cancel();
    recognitionRef.current?.abort();
    // Stop webcam tracks
    if (webcamStream) {
      webcamStream.getTracks().forEach(t => t.stop());
      setWebcamStream(null);
    }
    setWebcamDenied(false);
    setScenario(null);
    setCurrentNode(null);
    setTotalScore(0);
    setTurns(0);
    setFinished(false);
    setElapsed(0);
    setIsSpeaking(false);
    setUserText('');
    setIsListening(false);
    setInterimTranscript('');
    setShowSuggestions(false);
    setWaitingForResponse(false);
    setTranscript([]);
    setCurrentCoaching(null);
    setCoachingQuality(null);
    setIsThinking(false);
    setShowTranscript(false);
  }, [webcamStream]);

  const toggleMute = useCallback(() => {
    setMuted(prev => {
      const next = !prev;
      if (next) {
        window.speechSynthesis?.cancel();
        setIsSpeaking(false);
      }
      return next;
    });
  }, []);

  const maxScore = turns * 3;
  const scoreOutOfTen = maxScore > 0 ? Math.round((totalScore / maxScore) * 10) : 0;
  const hasSpeechRec = !!getSpeechRecognition();
  const canRespond = currentNode?.options && !isSpeaking && !waitingForResponse && !isThinking;
  const progress = scenario ? Math.round((turns / scenario.totalTurns) * 100) : 0;

  // Get dynamic feedback based on score
  const getDynamicFeedback = () => {
    if (!scenario?.dynamicFeedback) return null;
    return scenario.dynamicFeedback.find(
      fb => scoreOutOfTen >= fb.range[0] && scoreOutOfTen <= fb.range[1]
    ) || scenario.dynamicFeedback[scenario.dynamicFeedback.length - 1];
  };

  const dynamicFb = finished ? getDynamicFeedback() : null;

  // Get the current caption text from the last transcript entry
  const lastEntry = transcript.length > 0 ? transcript[transcript.length - 1] : null;

  return (
    <section id="mock-interview" className="mock-interview">
      <div className="mock-interview-inner">
        <h2 className="section-heading">Mock Interview Practice</h2>
        <p className="section-subheading">
          Practice your interviewing skills in a simulated video call. Speak or
          type your responses and get real-time feedback.
        </p>

        {!scenario && <ScenarioSelector onSelect={startScenario} apiKey={openAiKey} onApiKeyChange={setOpenAiKey} />}

        {scenario && !finished && (
          <div className="vc-layout">
            <div className="video-call">
              {/* Top bar */}
              <div className="vc-topbar">
                <div className="vc-topbar-left">
                  <span className="vc-rec-dot" />
                  <span className="vc-rec-text">REC</span>
                  <span className="vc-timer">{formatTime(elapsed)}</span>
                </div>
                <span className="vc-meeting-title">
                  {scenario.title}
                  {aiMode && <span className="vc-ai-mode-badge">AI Mode</span>}
                </span>
                <button className="vc-leave-btn" onClick={reset}>
                  Leave
                </button>
              </div>

              {/* Progress bar */}
              <div className="vc-progress-bar">
                <div className="vc-progress-fill" style={{ width: `${progress}%` }} />
                <span className="vc-progress-label">
                  Question {turns + 1} of {scenario.totalTurns}
                </span>
              </div>

              {/* Video grid */}
              <div className="vc-video-grid">
                {/* Candidate tile */}
                <div className={`vc-tile vc-tile--main ${isSpeaking ? 'vc-tile--speaking' : ''}`}>
                  <div className="vc-tile-video">
                    {!avatarError ? (
                      <>
                        <img
                          src={scenario.avatar}
                          alt={scenario.aiName}
                          className={`vc-avatar-photo ${isSpeaking ? 'vc-avatar-photo--talking' : ''}`}
                          onError={() => setAvatarError(true)}
                        />
                        {isSpeaking && (
                          <div className="vc-avatar-talking-overlay">
                            <div className="vc-avatar-mouth" />
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="vc-avatar-fallback">
                        <span className="vc-avatar-initials-lg">
                          {scenario.aiName.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    {isSpeaking && (
                      <div className="vc-speaking-indicator">
                        <span /><span /><span /><span /><span />
                      </div>
                    )}
                    {isThinking && (
                      <div className="vc-thinking-indicator">
                        <span /><span /><span />
                      </div>
                    )}
                    <div className="vc-tile-nameplate">
                      <span className="vc-tile-name">{scenario.aiName}</span>
                      <span className="vc-tile-role">{scenario.aiRole}</span>
                    </div>
                  </div>
                </div>

                {/* Self tile */}
                <div className={`vc-tile vc-tile--self ${isListening ? 'vc-tile--speaking' : ''}`}>
                  <div className="vc-tile-video vc-tile-video--self">
                    {webcamStream && !webcamDenied ? (
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="vc-webcam-video"
                      />
                    ) : (
                      <div className="vc-self-avatar">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                    )}
                    {isListening && (
                      <div className="vc-speaking-indicator vc-speaking-indicator--self">
                        <span /><span /><span />
                      </div>
                    )}
                    <div className="vc-tile-nameplate vc-tile-nameplate--self">
                      <span className="vc-tile-name">You (Interviewer)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Captions */}
              {showCaptions && lastEntry && (
                <div className="vc-captions">
                  <span className="vc-caption-speaker">{lastEntry.name}:</span>{' '}
                  {lastEntry.text}
                </div>
              )}

              {/* Coaching tip popup */}
              {currentCoaching && coachingQuality && (
                <div className={`vc-coaching vc-coaching--${coachingQuality}`}>
                  <div className="vc-coaching-badge">
                    {coachingQuality === 'excellent' ? 'Excellent' : coachingQuality === 'adequate' ? 'Adequate' : 'Needs Work'}
                  </div>
                  <span className="vc-coaching-text">{currentCoaching}</span>
                  <button className="vc-coaching-dismiss" onClick={() => { setCurrentCoaching(null); setCoachingQuality(null); }}>
                    &times;
                  </button>
                </div>
              )}

              {/* Thinking indicator */}
              {isThinking && (
                <div className="vc-status-bar">
                  <div className="vc-thinking-dots">
                    <span /><span /><span />
                  </div>
                  <span>{scenario.aiName} is thinking...</span>
                </div>
              )}

              {/* User input area */}
              {canRespond && (
                <div className="vc-input-area">
                  {/* Suggestions toggle */}
                  <div className="vc-suggestions-bar">
                    <button
                      className={`vc-suggestions-toggle ${showSuggestions ? 'vc-suggestions-toggle--active' : ''}`}
                      onClick={() => setShowSuggestions(prev => !prev)}
                    >
                      {showSuggestions ? 'Hide' : 'Show'} Suggested Responses
                    </button>
                  </div>

                  {/* Suggestion chips */}
                  {showSuggestions && currentNode.options && (
                    <div className="vc-suggestions">
                      {currentNode.options.map((option, i) => (
                        <button
                          key={i}
                          className={`vc-suggestion-chip vc-suggestion-chip--${option.quality}`}
                          onClick={() => handleSuggestionClick(option)}
                        >
                          <span className="vc-suggestion-quality">
                            {option.quality === 'excellent' ? '★' : option.quality === 'adequate' ? '●' : '○'}
                          </span>
                          {option.text}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Text + mic input */}
                  <div className="vc-input-row">
                    {hasSpeechRec && (
                      <button
                        className={`vc-mic-btn ${isListening ? 'vc-mic-btn--active' : ''}`}
                        onClick={toggleListening}
                        title={isListening ? 'Stop recording' : 'Start speaking'}
                      >
                        {isListening ? (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>
                        ) : (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                        )}
                      </button>
                    )}
                    <div className="vc-input-wrapper">
                      <input
                        ref={inputRef}
                        type="text"
                        className="vc-text-input"
                        placeholder={isListening ? 'Listening...' : 'Type your response...'}
                        value={userText + (interimTranscript ? ` ${interimTranscript}` : '')}
                        onChange={e => { setUserText(e.target.value); setInterimTranscript(''); }}
                        onKeyDown={handleKeyDown}
                        disabled={isSpeaking}
                      />
                      {interimTranscript && (
                        <span className="vc-interim-indicator" />
                      )}
                    </div>
                    <button
                      className="vc-send-btn"
                      onClick={handleSendText}
                      disabled={!userText.trim()}
                      title="Send response"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </button>
                  </div>
                </div>
              )}

              {/* Speaking indicator */}
              {isSpeaking && !isThinking && (
                <div className="vc-status-bar">
                  <span className="vc-status-dot" />
                  <span>{scenario.aiName} is speaking...</span>
                </div>
              )}

              {/* Bottom controls */}
              <div className="vc-controls">
                <button
                  className={`vc-control-btn ${muted ? 'vc-control-btn--off' : ''}`}
                  onClick={toggleMute}
                  title={muted ? 'Unmute audio' : 'Mute audio'}
                >
                  <span className="vc-control-icon">{muted ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                  )}</span>
                  <span className="vc-control-label">{muted ? 'Unmute' : 'Audio'}</span>
                </button>
                <button
                  className={`vc-control-btn ${!showCaptions ? 'vc-control-btn--off' : ''}`}
                  onClick={() => setShowCaptions(prev => !prev)}
                  title="Toggle captions"
                >
                  <span className="vc-control-icon">CC</span>
                  <span className="vc-control-label">Captions</span>
                </button>
                <button
                  className={`vc-control-btn ${fillerEnabled ? 'vc-control-btn--active' : ''}`}
                  onClick={() => setFillerEnabled(prev => !prev)}
                  title={fillerEnabled ? 'Switch to clean speech' : 'Switch to natural speech'}
                >
                  <span className="vc-control-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
                  </span>
                  <span className="vc-control-label">{fillerEnabled ? 'Natural' : 'Clean'}</span>
                </button>
                <button
                  className={`vc-control-btn ${showTranscript ? 'vc-control-btn--active' : ''}`}
                  onClick={() => setShowTranscript(prev => !prev)}
                  title="Toggle transcript"
                >
                  <span className="vc-control-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  </span>
                  <span className="vc-control-label">Chat</span>
                </button>
                <button className="vc-control-btn vc-control-btn--end" onClick={reset}>
                  <span className="vc-control-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </span>
                  <span className="vc-control-label">End</span>
                </button>
              </div>
            </div>

            {/* Transcript sidebar */}
            {showTranscript && (
              <div className="vc-transcript">
                <div className="vc-transcript-header">
                  <h4>Interview Transcript</h4>
                  <button className="vc-transcript-close" onClick={() => setShowTranscript(false)}>&times;</button>
                </div>
                <div className="vc-transcript-body">
                  {transcript.map((entry, i) => (
                    <div key={i} className={`vc-transcript-msg vc-transcript-msg--${entry.speaker}`}>
                      <span className="vc-transcript-name">{entry.name}</span>
                      <p className="vc-transcript-text">{entry.text}</p>
                      {entry.quality && (
                        <span className={`vc-transcript-quality vc-transcript-quality--${entry.quality}`}>
                          {entry.quality === 'excellent' ? 'Excellent' : entry.quality === 'adequate' ? 'Adequate' : 'Needs Work'}
                        </span>
                      )}
                    </div>
                  ))}
                  {isThinking && (
                    <div className="vc-transcript-msg vc-transcript-msg--ai">
                      <span className="vc-transcript-name">{scenario.aiName}</span>
                      <div className="vc-transcript-thinking">
                        <span /><span /><span />
                      </div>
                    </div>
                  )}
                  <div ref={transcriptEndRef} />
                </div>
              </div>
            )}
          </div>
        )}

        {scenario && finished && (
          <div className="feedback-panel">
            <h3 className="feedback-title">Interview Feedback</h3>

            <div className="feedback-meta">
              <span className="feedback-meta-item">Scenario: {scenario.title}</span>
              <span className="feedback-meta-item">Duration: {formatTime(elapsed)}</span>
              <span className="feedback-meta-item">Questions: {turns}</span>
            </div>

            <div className="feedback-score">
              <div className={`feedback-score-circle ${scoreOutOfTen >= 8 ? 'feedback-score--excellent' : scoreOutOfTen >= 5 ? 'feedback-score--good' : 'feedback-score--poor'}`}>
                <span className="feedback-score-num">{scoreOutOfTen}</span>
                <span className="feedback-score-den">/10</span>
              </div>
              <span className="feedback-score-label">
                {scoreOutOfTen >= 8
                  ? 'Excellent!'
                  : scoreOutOfTen >= 6
                    ? 'Good job!'
                    : scoreOutOfTen >= 4
                      ? 'Room for improvement'
                      : 'Needs work'}
              </span>
            </div>

            {/* Category breakdown */}
            <div className="feedback-categories">
              <h4 className="feedback-categories-title">Skill Breakdown</h4>
              <div className="feedback-category-grid">
                {Object.entries(categoryScores).map(([key, score]) => {
                  const count = categoryCounts[key as keyof CategoryCount];
                  if (count === 0) return null;
                  const avg = Math.round((score / (count * 3)) * 100);
                  return (
                    <div key={key} className="feedback-category-item">
                      <div className="feedback-category-header">
                        <span className="feedback-category-icon">{categoryIcons[key]}</span>
                        <span className="feedback-category-name">{categoryLabels[key]}</span>
                        <span className="feedback-category-pct">{avg}%</span>
                      </div>
                      <div className="feedback-category-bar">
                        <div
                          className={`feedback-category-fill ${avg >= 75 ? 'feedback-category-fill--good' : avg >= 50 ? 'feedback-category-fill--ok' : 'feedback-category-fill--poor'}`}
                          style={{ width: `${avg}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="feedback-sections">
              <div className="feedback-section feedback-section--good">
                <h4>Strengths</h4>
                <ul>
                  {(dynamicFb?.strengths || scenario.feedback.strengths).map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="feedback-section feedback-section--improve">
                <h4>Areas for Improvement</h4>
                <ul>
                  {(dynamicFb?.improvements || scenario.feedback.improvements).map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="feedback-section feedback-section--tips">
                <h4>Tips</h4>
                <ul>
                  {(dynamicFb?.tips || scenario.feedback.tips).map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Transcript review */}
            {transcript.length > 0 && (
              <div className="feedback-transcript">
                <h4 className="feedback-transcript-title">Interview Transcript Review</h4>
                <div className="feedback-transcript-list">
                  {transcript.map((entry, i) => (
                    <div key={i} className={`feedback-transcript-entry feedback-transcript-entry--${entry.speaker}`}>
                      <div className="feedback-transcript-entry-header">
                        <span className="feedback-transcript-name">{entry.name}</span>
                        {entry.quality && (
                          <span className={`feedback-transcript-badge feedback-transcript-badge--${entry.quality}`}>
                            {entry.quality === 'excellent' ? 'Excellent' : entry.quality === 'adequate' ? 'Adequate' : 'Needs Work'}
                          </span>
                        )}
                      </div>
                      <p className="feedback-transcript-text">{entry.text}</p>
                      {entry.coachingTip && (
                        <p className="feedback-transcript-tip">{entry.coachingTip}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="feedback-actions">
              <button className="btn btn-primary" onClick={() => startScenario(scenario)}>
                Retry This Scenario
              </button>
              <button className="btn btn-outline" onClick={reset}>
                Try Another Scenario
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
