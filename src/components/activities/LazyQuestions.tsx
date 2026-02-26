import { useState, useCallback } from 'react';

interface LazyQ {
  lazy: string;
  whyBad: string;
  powerQuestion: string;
  hint: string;
}

const lazyQuestions: LazyQ[] = [
  {
    lazy: "What's your greatest weakness?",
    whyBad: "Candidates rehearse cliché answers ('I'm a perfectionist'). It reveals nothing about job performance and invites dishonesty.",
    powerQuestion: "Tell me about a skill gap you identified in yourself recently. What steps did you take to address it?",
    hint: "Ask about real self-improvement, not rehearsed deflections",
  },
  {
    lazy: "Where do you see yourself in 5 years?",
    whyBad: "Puts candidates on the spot to guess what you want to hear. Doesn't assess current competency or job fit.",
    powerQuestion: "What kind of work energizes you most, and how does this role align with that?",
    hint: "Focus on motivation and alignment with the actual role",
  },
  {
    lazy: "Why should we hire you?",
    whyBad: "Forces a sales pitch rather than evidence-based assessment. The interviewer should be evaluating — not asking the candidate to do it for them.",
    powerQuestion: "Based on what you know about this role, what's the first challenge you'd want to tackle and how would you approach it?",
    hint: "Test their understanding of the role and problem-solving approach",
  },
  {
    lazy: "Tell me about yourself.",
    whyBad: "Too open-ended with no structure. Candidates ramble, and every interviewer hears a different story. Doesn't assess any specific competency.",
    powerQuestion: "Walk me through a recent project where you had significant ownership. What was your specific role and what was the outcome?",
    hint: "Make it specific — tie it to ownership, action, and results (STAR)",
  },
  {
    lazy: "Are you a team player?",
    whyBad: "A yes/no question that everyone answers 'yes' to. No behavioral evidence, no way to differentiate candidates.",
    powerQuestion: "Tell me about a time you had to collaborate closely with someone whose working style was very different from yours. How did you make it work?",
    hint: "Turn it into a behavioral STAR question about real teamwork challenges",
  },
];

export default function LazyQuestions() {
  const [current, setCurrent] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  const handleReveal = useCallback(() => {
    setRevealed(true);
    setCompletedCount(prev => prev + 1);
  }, []);

  const handleNext = useCallback(() => {
    if (current < lazyQuestions.length - 1) {
      setCurrent(current + 1);
      setUserAnswer('');
      setRevealed(false);
    }
  }, [current]);

  const reset = useCallback(() => {
    setCurrent(0);
    setUserAnswer('');
    setRevealed(false);
    setCompletedCount(0);
  }, []);

  const q = lazyQuestions[current];
  const allDone = completedCount === lazyQuestions.length && revealed;

  return (
    <div className="activity-box">
      <div className="activity-header">
        <span className="activity-badge">Interactive Exercise</span>
        <h4 className="activity-title">Roast the Lazy Questions</h4>
        <p className="activity-desc">
          These common interview questions are weak and unstructured. For each one,
          understand why it fails, then try writing a "Power Question" to replace it.
        </p>
      </div>

      <div className="activity-progress">
        <div className="activity-progress-bar">
          <div className="activity-progress-fill" style={{ width: `${((current + (revealed ? 1 : 0)) / lazyQuestions.length) * 100}%` }} />
        </div>
        <span className="activity-progress-text">{current + 1} of {lazyQuestions.length}</span>
      </div>

      <div className="lazy-q-card">
        <div className="lazy-q-bad">
          <span className="lazy-q-label lazy-q-label--bad">The Lazy Question</span>
          <p className="lazy-q-text">"{q.lazy}"</p>
        </div>

        <div className="lazy-q-why">
          <span className="lazy-q-label lazy-q-label--why">Why It Fails</span>
          <p className="lazy-q-explain">{q.whyBad}</p>
        </div>

        {!revealed && (
          <>
            <div className="lazy-q-your-turn">
              <span className="lazy-q-label lazy-q-label--you">Your Power Question</span>
              <p className="lazy-q-hint">{q.hint}</p>
              <textarea
                className="activity-textarea"
                placeholder="Write a better, structured interview question..."
                value={userAnswer}
                onChange={e => setUserAnswer(e.target.value)}
                rows={3}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={handleReveal}
              style={{ alignSelf: 'flex-start' }}
            >
              Show Example Power Question
            </button>
          </>
        )}

        {revealed && (
          <>
            {userAnswer.trim() && (
              <div className="lazy-q-user-answer">
                <span className="lazy-q-label lazy-q-label--you">Your Answer</span>
                <p className="lazy-q-text">{userAnswer}</p>
              </div>
            )}
            <div className="lazy-q-power">
              <span className="lazy-q-label lazy-q-label--good">Example Power Question</span>
              <p className="lazy-q-text lazy-q-text--good">"{q.powerQuestion}"</p>
            </div>

            {!allDone && (
              <button className="btn btn-primary activity-next-btn" onClick={handleNext}>
                Next Lazy Question
              </button>
            )}
          </>
        )}
      </div>

      {allDone && (
        <div className="activity-lesson-box" style={{ marginTop: 20 }}>
          <span className="activity-lesson-label">Key Takeaway</span>
          <p className="activity-lesson-text">
            Every question you ask should be <strong>behavioral</strong> (past experience) or
            <strong> situational</strong> (hypothetical scenario), tied to a <strong>specific competency</strong>,
            and designed to elicit a <strong>STAR response</strong> (Situation, Task, Action, Result).
            Lazy questions waste everyone's time and fail to differentiate candidates.
          </p>
          <button className="btn btn-primary activity-retry-btn" onClick={reset}>Try Again</button>
        </div>
      )}
    </div>
  );
}
