import { useState, useCallback } from 'react';

interface SceneStep {
  narrator: string;
  dialogue?: string;
  speaker?: string;
  issues: string[];
}

const scene: SceneStep[] = [
  {
    narrator: "The candidate, Jamie, arrives on time for a 2:00 PM interview. The hiring manager, Pat, is 8 minutes late and rushes in looking at their phone.",
    dialogue: "Sorry about that, crazy day. So... remind me what role this is for again?",
    speaker: "Pat (Hiring Manager)",
    issues: [
      "Late to the interview without a proper apology — shows disrespect for the candidate's time",
      "Hasn't reviewed the role or the candidate's resume — signals the company doesn't care",
      "Looking at phone during the introduction — poor first impression",
    ],
  },
  {
    narrator: "Pat glances at Jamie's resume for the first time.",
    dialogue: "Oh, University of Michigan! My cousin went there. Great football team. So, you're not from around here originally — where are you from?",
    speaker: "Pat (Hiring Manager)",
    issues: [
      "Reading the resume for the first time during the interview — no preparation",
      "Affinity bias — bonding over a personal connection (school) rather than qualifications",
      "'Where are you from?' probes national origin — potentially illegal and irrelevant to the job",
    ],
  },
  {
    narrator: "Pat skips the interview structure and jumps to an unplanned question.",
    dialogue: "So, tell me about yourself. What do you like to do outside of work? Got any kids?",
    speaker: "Pat (Hiring Manager)",
    issues: [
      "'Tell me about yourself' is an unstructured, lazy question with no competency target",
      "Asking about family status (kids) is illegal in many jurisdictions",
      "No interview agenda shared with the candidate — they don't know what to expect",
    ],
  },
  {
    narrator: "Jamie starts explaining a complex project they led. Halfway through, Pat's phone buzzes and they glance at it. Then they interrupt.",
    dialogue: "Yeah that sounds good. Hey, quick question — are you OK working late? We're kind of always-on here. It's a grind but we're like a family.",
    speaker: "Pat (Hiring Manager)",
    issues: [
      "Interrupted the candidate mid-answer — shows they weren't listening",
      "Checked phone during the candidate's response — disrespectful",
      "'Are you OK working late?' can be a proxy for personal commitments / family status",
      "'We're like a family' is a culture-fit red flag — excludes people who don't want to blur work/life boundaries",
      "Didn't probe for STAR details — missed the Action and Result entirely",
    ],
  },
  {
    narrator: "Pat asks two more rapid-fire questions without following up on either answer.",
    dialogue: "What's your greatest weakness? And where do you see yourself in five years?",
    speaker: "Pat (Hiring Manager)",
    issues: [
      "Two classic lazy questions back-to-back — no behavioral evidence, no STAR, no competency assessed",
      "Rapid-fire pacing doesn't give the candidate time to provide thoughtful, detailed answers",
      "No follow-up probing on either response — surface-level interviewing",
    ],
  },
  {
    narrator: "At the 25-minute mark (of a scheduled 45-minute interview), Pat wraps up abruptly.",
    dialogue: "Great, I think I have a good sense of you. We'll be in touch. Someone from HR will email you... probably. Any questions? Actually, I have another meeting. Thanks for coming in.",
    speaker: "Pat (Hiring Manager)",
    issues: [
      "Cut the interview 20 minutes short — didn't respect the candidate's time or the process",
      "No time given for candidate to ask questions — the interview should be a two-way conversation",
      "'I have a good sense of you' after a few surface-level questions — overconfidence bias",
      "Vague next steps ('probably') — leaves the candidate in limbo, damages employer brand",
      "No effort to sell the role, team, or company mission — missed the Pitch",
    ],
  },
];

export default function AwfulInterview() {
  const [currentScene, setCurrentScene] = useState(0);
  const [userIssues, setUserIssues] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [completedScenes, setCompletedScenes] = useState<number[]>([]);

  const handleReveal = useCallback(() => {
    setRevealed(true);
    setCompletedScenes(prev => [...prev, currentScene]);
  }, [currentScene]);

  const handleNext = useCallback(() => {
    if (currentScene < scene.length - 1) {
      setCurrentScene(currentScene + 1);
      setUserIssues('');
      setRevealed(false);
    }
  }, [currentScene]);

  const reset = useCallback(() => {
    setCurrentScene(0);
    setUserIssues('');
    setRevealed(false);
    setCompletedScenes([]);
  }, []);

  const s = scene[currentScene];
  const allDone = completedScenes.length === scene.length;
  const totalIssues = scene.reduce((acc, sc) => acc + sc.issues.length, 0);

  return (
    <div className="activity-box">
      <div className="activity-header">
        <span className="activity-badge">Interactive Exercise</span>
        <h4 className="activity-title">The "Awful Interview" Role-Play</h4>
        <p className="activity-desc">
          Watch this interview go wrong scene by scene. For each moment,
          identify what the hiring manager did wrong before revealing the full list.
        </p>
      </div>

      <div className="activity-progress">
        <div className="activity-progress-bar">
          <div className="activity-progress-fill" style={{ width: `${((completedScenes.length) / scene.length) * 100}%` }} />
        </div>
        <span className="activity-progress-text">Scene {currentScene + 1} of {scene.length}</span>
      </div>

      <div className="awful-scene">
        <div className="awful-narration">
          <span className="awful-narration-label">Scene {currentScene + 1}</span>
          <p className="awful-narration-text">{s.narrator}</p>
        </div>

        {s.dialogue && (
          <div className="awful-dialogue">
            <span className="awful-speaker">{s.speaker}</span>
            <p className="awful-dialogue-text">"{s.dialogue}"</p>
          </div>
        )}

        {!revealed && (
          <>
            <div className="awful-your-turn">
              <label className="awful-your-label">What did Pat do wrong here?</label>
              <textarea
                className="activity-textarea"
                placeholder="List everything wrong with this scene..."
                value={userIssues}
                onChange={e => setUserIssues(e.target.value)}
                rows={3}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={handleReveal}
              style={{ alignSelf: 'flex-start' }}
            >
              Reveal Issues ({s.issues.length} found)
            </button>
          </>
        )}

        {revealed && (
          <div className="awful-issues">
            <span className="awful-issues-label">Issues Identified ({s.issues.length})</span>
            <ul className="awful-issues-list">
              {s.issues.map((issue, i) => (
                <li key={i} className="awful-issue-item">{issue}</li>
              ))}
            </ul>

            {!allDone && currentScene < scene.length - 1 && (
              <button className="btn btn-primary activity-next-btn" onClick={handleNext}>
                Next Scene
              </button>
            )}
          </div>
        )}
      </div>

      {allDone && (
        <div className="awful-summary">
          <div className="activity-score-banner">
            <span className="activity-score-num">{totalIssues}</span>
            <span className="activity-score-label">total issues across {scene.length} scenes</span>
          </div>

          <div className="activity-lesson-box">
            <span className="activity-lesson-label">How to Run a Great Interview Instead</span>
            <p className="activity-lesson-text">
              <strong>1. The Welcome:</strong> Be on time, introduce yourself clearly, outline the agenda.<br />
              <strong>2. Preparation:</strong> Review the resume and scorecard before the interview — never during.<br />
              <strong>3. Structure:</strong> Ask the same behavioral questions to every candidate, with STAR follow-ups.<br />
              <strong>4. Respect:</strong> Put your phone away, listen actively, give full time to the conversation.<br />
              <strong>5. The Pitch:</strong> Reserve time to sell the role, team, and company mission honestly.<br />
              <strong>6. The Close:</strong> Leave time for candidate questions, clearly state next steps and timeline.
            </p>
          </div>

          <button className="btn btn-primary activity-retry-btn" onClick={reset}>Try Again</button>
        </div>
      )}
    </div>
  );
}
