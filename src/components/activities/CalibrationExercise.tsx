import { useState, useCallback } from 'react';

interface NoteItem {
  note: string;
  isObjective: boolean;
  explanation: string;
  betterVersion?: string;
}

const interviewNotes: NoteItem[] = [
  {
    note: "Candidate described leading a team of 6 engineers through a database migration that took 4 months and reduced query time by 40%.",
    isObjective: true,
    explanation: "This is factual and specific — it records what the candidate said with measurable details (team size, duration, metric).",
  },
  {
    note: "Seemed really smart and confident. Would probably be a great cultural fit.",
    isObjective: false,
    explanation: "'Smart,' 'confident,' and 'cultural fit' are subjective impressions, not evidence. Different interviewers would define these words differently.",
    betterVersion: "Candidate clearly articulated the trade-offs between three architectural approaches, asked clarifying questions about constraints, and proposed a phased solution.",
  },
  {
    note: "Candidate said: 'When the deployment failed, I rolled back within 15 minutes, identified the root cause in the config, and deployed the fix by end of day.'",
    isObjective: true,
    explanation: "Direct quote with specific actions and timeframe. This is exactly how notes should read — factual and verifiable.",
  },
  {
    note: "Not a strong leader. Didn't give off leadership vibes.",
    isObjective: false,
    explanation: "'Leadership vibes' is purely subjective and impossible to calibrate across interviewers. This note provides zero evidence.",
    betterVersion: "When asked about a time they led a difficult project, candidate gave a general answer about 'working together' but could not identify a specific situation, their actions, or measurable results.",
  },
  {
    note: "Took approximately 10 seconds to begin responding to the system design question. Drew a diagram with 4 components. Did not mention caching or rate limiting when asked about scaling.",
    isObjective: true,
    explanation: "Observable, factual notes. Records behavior (pause time), actions (drew diagram), and specific gaps — all without subjective judgment.",
  },
  {
    note: "I just didn't click with this person. Something felt off.",
    isObjective: false,
    explanation: "This is the textbook definition of gut feeling / affinity bias. No evidence, no competency assessed, not actionable or fair.",
    betterVersion: "Candidate's responses were brief (1-2 sentences) with limited detail when probed for specifics on three separate questions.",
  },
  {
    note: "Candidate mentioned they use Jira for project tracking, conduct daily standups of 15 minutes, and do retrospectives every 2 weeks.",
    isObjective: true,
    explanation: "Factual reporting of the candidate's stated practices — specific, verifiable, and free from interviewer opinion.",
  },
  {
    note: "Really impressive background — Stanford CS degree and worked at Google. Definitely qualified.",
    isObjective: false,
    explanation: "This is Halo Effect and Anchoring Bias in action. Prestigious credentials don't equal job performance. The note evaluates the resume, not the interview evidence.",
    betterVersion: "Candidate has relevant experience from a large-scale engineering environment. Evaluate based on interview responses against our scorecard competencies.",
  },
];

export default function CalibrationExercise() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(boolean | null)[]>(Array(interviewNotes.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleAnswer = useCallback((isObjective: boolean) => {
    const next = [...answers];
    next[current] = isObjective;
    setAnswers(next);
    setShowResult(true);
  }, [answers, current]);

  const handleNext = useCallback(() => {
    setShowResult(false);
    if (current < interviewNotes.length - 1) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  }, [current]);

  const reset = useCallback(() => {
    setCurrent(0);
    setAnswers(Array(interviewNotes.length).fill(null));
    setShowResult(false);
    setFinished(false);
  }, []);

  const score = answers.filter((a, i) => a === interviewNotes[i].isObjective).length;
  const n = interviewNotes[current];

  if (finished) {
    return (
      <div className="activity-box">
        <div className="activity-header">
          <span className="activity-badge">Results</span>
          <h4 className="activity-title">Calibration Exercise</h4>
        </div>
        <div className="activity-score-banner">
          <span className="activity-score-num">{score}/{interviewNotes.length}</span>
          <span className="activity-score-label">
            {score === interviewNotes.length ? 'Perfect — you know your evidence from your opinions!' : score >= 6 ? 'Good eye! Review the ones you missed.' : 'Practice distinguishing facts from feelings.'}
          </span>
        </div>
        <div className="activity-review-list">
          {interviewNotes.map((item, i) => (
            <div key={i} className={`activity-review-item ${answers[i] === item.isObjective ? 'activity-review-item--correct' : 'activity-review-item--wrong'}`}>
              <div className="activity-review-header">
                <span className="activity-review-icon">{answers[i] === item.isObjective ? '✓' : '✗'}</span>
                <span className="activity-review-q">{item.note}</span>
                <span className={`activity-tag ${item.isObjective ? 'activity-tag--green' : 'activity-tag--red'}`}>
                  {item.isObjective ? 'Objective' : 'Subjective'}
                </span>
              </div>
              {answers[i] !== item.isObjective && (
                <>
                  <p className="activity-review-explain">{item.explanation}</p>
                  {item.betterVersion && (
                    <p className="activity-review-alt"><strong>Better note:</strong> {item.betterVersion}</p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        <div className="activity-lesson-box">
          <span className="activity-lesson-label">Calibration Rules</span>
          <p className="activity-lesson-text">
            <strong>1.</strong> Notes must be factual quotes or observations, never subjective judgments.<br />
            <strong>2.</strong> The entire panel must score independently before comparing.<br />
            <strong>3.</strong> Debrief against the scorecard competencies, not gut feelings.<br />
            <strong>4.</strong> Ask yourself: "Would another interviewer interpret this note the same way I do?"
          </p>
        </div>

        <button className="btn btn-primary activity-retry-btn" onClick={reset}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="activity-box">
      <div className="activity-header">
        <span className="activity-badge">Interactive Exercise</span>
        <h4 className="activity-title">Calibration Exercise</h4>
        <p className="activity-desc">
          Read each interview note and classify it. Objective notes record facts, quotes, and
          observations. Subjective notes contain opinions, impressions, and bias.
        </p>
      </div>

      <div className="activity-progress">
        <div className="activity-progress-bar">
          <div className="activity-progress-fill" style={{ width: `${((current + (showResult ? 1 : 0)) / interviewNotes.length) * 100}%` }} />
        </div>
        <span className="activity-progress-text">{current + 1} of {interviewNotes.length}</span>
      </div>

      <div className="activity-question-card">
        <div className="calibration-note">
          <span className="calibration-note-label">Interview Note</span>
          <p className="calibration-note-text">"{n.note}"</p>
        </div>

        {!showResult && (
          <div className="activity-choice-row">
            <button className="activity-choice-btn activity-choice-btn--green" onClick={() => handleAnswer(true)}>
              Objective
            </button>
            <button className="activity-choice-btn activity-choice-btn--red" onClick={() => handleAnswer(false)}>
              Subjective
            </button>
          </div>
        )}

        {showResult && (
          <div className={`activity-feedback ${answers[current] === n.isObjective ? 'activity-feedback--correct' : 'activity-feedback--wrong'}`}>
            <span className="activity-feedback-icon">{answers[current] === n.isObjective ? '✓ Correct!' : '✗ Incorrect'}</span>
            <p className="activity-feedback-text">{n.explanation}</p>
            {n.betterVersion && answers[current] !== n.isObjective && (
              <p className="activity-feedback-alt"><strong>Better version:</strong> {n.betterVersion}</p>
            )}
            <button className="btn btn-primary activity-next-btn" onClick={handleNext}>
              {current < interviewNotes.length - 1 ? 'Next Note' : 'See Results'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
