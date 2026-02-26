import { useState, useCallback } from 'react';

const projectDescription = `Our Q3 initiative involves deploying a Generative Synthetic Telemetry pipeline leveraging transformer-based architectures for Predictive Fleet Maintenance optimization. The system will ingest multi-modal IoT sensor streams, apply federated learning across edge nodes for anomaly detection, and synthesize augmented training datasets using diffusion models to address data scarcity in low-frequency failure modes. The pipeline interfaces with our existing Kubernetes-orchestrated microservices mesh and outputs actionable maintenance windows through a probabilistic scheduling algorithm with Bayesian optimization.`;

const exampleSimplicity = `"If you had to explain this project to a fleet manager with no technical background, how would you describe what it does and why it matters — in under 60 seconds?"`;
const examplePivot = `"Imagine your model is trained and deployed, but real-world failure rates are 3x higher than your synthetic data predicted. Walk me through exactly how you'd diagnose and fix the gap."`;
const exampleFollowUp = `"What data would you look at first, and who would you talk to before making a decision?"`;

export default function SimplicityChallenge() {
  const [simplicity, setSimplicity] = useState('');
  const [pivot, setPivot] = useState('');
  const [revealed, setRevealed] = useState(false);

  const handleReveal = useCallback(() => {
    setRevealed(true);
  }, []);

  const reset = useCallback(() => {
    setSimplicity('');
    setPivot('');
    setRevealed(false);
  }, []);

  return (
    <div className="activity-box">
      <div className="activity-header">
        <span className="activity-badge">Interactive Exercise</span>
        <h4 className="activity-title">The Simplicity Challenge</h4>
        <p className="activity-desc">
          Read this dense, jargon-heavy project description. Then write two interview
          questions to test the candidate's ability to think clearly.
        </p>
      </div>

      <div className="simplicity-brief">
        <span className="simplicity-brief-label">The Project Description</span>
        <p className="simplicity-brief-text">{projectDescription}</p>
      </div>

      <div className="simplicity-inputs">
        <div className="simplicity-input-block">
          <label className="simplicity-label">
            <span className="simplicity-label-icon">1</span>
            The "Keep It Simple" Question
          </label>
          <p className="simplicity-label-hint">
            Test if the candidate can strip away the buzzwords and explain this project to a non-technical person.
          </p>
          <textarea
            className="activity-textarea"
            placeholder="Write a question that tests clarity and simplification..."
            value={simplicity}
            onChange={e => setSimplicity(e.target.value)}
            rows={3}
            disabled={revealed}
          />
        </div>

        <div className="simplicity-input-block">
          <label className="simplicity-label">
            <span className="simplicity-label-icon">2</span>
            The "Pivot" Question
          </label>
          <p className="simplicity-label-hint">
            Test data-driven agility: "What if the data showed X instead of Y?" — can they adapt their thinking?
          </p>
          <textarea
            className="activity-textarea"
            placeholder="Write a 'what if' question that tests adaptability..."
            value={pivot}
            onChange={e => setPivot(e.target.value)}
            rows={3}
            disabled={revealed}
          />
        </div>
      </div>

      {!revealed && (
        <button
          className="btn btn-primary"
          onClick={handleReveal}
          disabled={!simplicity.trim() || !pivot.trim()}
          style={{ alignSelf: 'flex-start' }}
        >
          Show Example Questions
        </button>
      )}

      {revealed && (
        <div className="simplicity-examples">
          <div className="simplicity-example">
            <span className="simplicity-example-label">Example "Keep It Simple" Question</span>
            <p className="simplicity-example-text">{exampleSimplicity}</p>
            <span className="simplicity-listen-label">Listen for:</span>
            <p className="simplicity-listen-text">
              Can they distill complexity into a clear value proposition? Do they focus on outcomes (fewer breakdowns, lower costs) or get lost in technical details?
            </p>
          </div>

          <div className="simplicity-example">
            <span className="simplicity-example-label">Example "Pivot" Question</span>
            <p className="simplicity-example-text">{examplePivot}</p>
            <span className="simplicity-listen-label">Listen for:</span>
            <p className="simplicity-listen-text">
              Do they panic or get defensive? Do they have a systematic debugging approach? Do they question assumptions in their own model, or blame the data?
            </p>
          </div>

          <div className="simplicity-example">
            <span className="simplicity-example-label">Bonus Follow-Up</span>
            <p className="simplicity-example-text">{exampleFollowUp}</p>
            <span className="simplicity-listen-label">Listen for:</span>
            <p className="simplicity-listen-text">
              "Human-in-the-loop" critical thinking — do they combine data with domain expertise? Or do they just say "retrain the model"?
            </p>
          </div>

          <div className="activity-lesson-box">
            <span className="activity-lesson-label">The Innovation Mindset</span>
            <p className="activity-lesson-text">
              In 2026, technical skills have a shorter shelf life. Hire for <strong>Adaptability Quotient (AQ)</strong> and
              <strong> Data Literacy</strong>. The best candidates don't just use tools — they <strong>simplify complex
              systems</strong> and <strong>pivot when the data shifts</strong>.
            </p>
          </div>

          <button className="btn btn-primary activity-retry-btn" onClick={reset}>Try Again</button>
        </div>
      )}
    </div>
  );
}
