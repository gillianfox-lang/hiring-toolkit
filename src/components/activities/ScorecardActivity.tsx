import { useState, useCallback } from 'react';

const simulatedOtherTraits = [
  "Empathetic", "Technical", "Organized", "Visionary", "Fast learner",
  "Accountable", "Kind", "Decisive", "Collaborative", "Creative",
  "Detail-oriented", "Resilient", "Data-driven", "Motivating", "Transparent",
  "Humble", "Strategic", "Proactive", "Communicative", "Trustworthy",
  "Patient", "Innovative", "Assertive", "Analytical", "Dependable",
  "Adaptable", "Energetic", "Inclusive", "Results-oriented", "Calm under pressure",
];

export default function ScorecardActivity() {
  const [traits, setTraits] = useState(['', '', '']);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((index: number, value: string) => {
    setTraits(prev => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  }, []);

  const handleSubmit = useCallback(() => {
    if (traits.every(t => t.trim())) {
      setSubmitted(true);
    }
  }, [traits]);

  const reset = useCallback(() => {
    setTraits(['', '', '']);
    setSubmitted(false);
  }, []);

  if (submitted) {
    // Combine user traits with simulated ones, then shuffle
    const allTraits = [...traits.filter(t => t.trim()), ...simulatedOtherTraits];
    // Assign pseudo-random sizes for word cloud effect
    const sizes = allTraits.map((_, i) => {
      if (i < 3) return 1.3; // user's traits are large
      const r = ((i * 7 + 13) % 10) / 10;
      return 0.7 + r * 0.7;
    });
    // Shuffle deterministically
    const indices = allTraits.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = (i * 7 + 3) % (i + 1);
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    return (
      <div className="activity-box">
        <div className="activity-header">
          <span className="activity-badge">The Reveal</span>
          <h4 className="activity-title">The Scorecard Word Cloud</h4>
        </div>

        <p className="activity-desc" style={{ marginBottom: 16 }}>
          Here's what happens when everyone picks their own 3 traits without alignment.
          <strong> Your traits are highlighted in blue.</strong> Everyone else picked something different.
        </p>

        <div className="wordcloud">
          {indices.map(idx => {
            const isUser = idx < 3;
            return (
              <span
                key={idx}
                className={`wordcloud-word ${isUser ? 'wordcloud-word--user' : ''}`}
                style={{ fontSize: `${sizes[idx]}rem` }}
              >
                {allTraits[idx]}
              </span>
            );
          })}
        </div>

        <div className="activity-lesson-box">
          <span className="activity-lesson-label">The Lesson</span>
          <p className="activity-lesson-text">
            If 10 managers interview the same candidate without a Scorecard, they're all
            looking for different things. Manager A hires for "Technical" and Manager B
            rejects for "Not Organized." <strong>Structured interviewing is agreeing on
            the 3 most important traits before the candidate walks in.</strong>
          </p>
        </div>

        <div className="activity-takeaway-steps">
          <h5>Build Your Scorecard Before Interviewing:</h5>
          <ol>
            <li><strong>Define 3-5 key competencies</strong> — What must this person be great at on Day 1?</li>
            <li><strong>Write behavioral indicators</strong> — What does "good" look like for each competency?</li>
            <li><strong>Align with all interviewers</strong> — Everyone evaluates the same competencies, same rubric.</li>
            <li><strong>Score independently</strong> — No comparing notes until everyone has submitted scores.</li>
          </ol>
        </div>

        <button className="btn btn-primary activity-retry-btn" onClick={reset}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="activity-box">
      <div className="activity-header">
        <span className="activity-badge">Interactive Exercise</span>
        <h4 className="activity-title">The Scorecard Activity</h4>
        <p className="activity-desc">
          <strong>Scenario:</strong> You're hiring a new Team Lead.
          Write down the 3 most important traits they need to succeed in this role.
        </p>
      </div>

      <div className="activity-input-group">
        {traits.map((trait, i) => (
          <div key={i} className="activity-input-row">
            <span className="activity-input-num">{i + 1}</span>
            <input
              type="text"
              className="activity-input"
              placeholder={`Trait ${i + 1} (e.g., ${['Decisive', 'Communicative', 'Technical'][i]})`}
              value={trait}
              onChange={e => handleChange(i, e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && traits.every(t => t.trim())) handleSubmit();
              }}
            />
          </div>
        ))}
      </div>

      <button
        className="btn btn-primary"
        onClick={handleSubmit}
        disabled={!traits.every(t => t.trim())}
        style={{ alignSelf: 'flex-start' }}
      >
        Submit & See the Word Cloud
      </button>
    </div>
  );
}
