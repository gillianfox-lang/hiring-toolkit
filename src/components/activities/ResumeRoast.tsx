import { useState, useCallback } from 'react';

const fakeResume = {
  name: "Taylor Morgan",
  title: "Senior Data Scientist",
  summary: "Results-driven data scientist with 7+ years of experience leveraging cutting-edge machine learning algorithms and advanced analytics to drive business outcomes. Proven track record of delivering impactful data-driven solutions across multiple industries.",
  experience: [
    {
      role: "Senior Data Scientist",
      company: "TechForward Solutions",
      period: "2021 – Present",
      bullets: [
        "Spearheaded the development of innovative ML pipelines that significantly improved operational efficiency across the organization.",
        "Led cross-functional collaboration with stakeholders to deliver data-driven strategic insights that transformed decision-making processes.",
        "Implemented state-of-the-art deep learning models that achieved breakthrough performance on key business metrics.",
      ],
    },
    {
      role: "Data Scientist",
      company: "DataSync Analytics",
      period: "2018 – 2021",
      bullets: [
        "Designed and deployed scalable machine learning solutions that generated substantial revenue impact.",
        "Pioneered the adoption of advanced NLP techniques that revolutionized customer feedback analysis.",
        "Mentored junior team members and fostered a culture of continuous learning and innovation.",
      ],
    },
  ],
  redFlags: [
    "No specific numbers, percentages, or measurable outcomes anywhere",
    "Vague buzzwords: 'innovative,' 'cutting-edge,' 'state-of-the-art,' 'breakthrough,' 'revolutionized'",
    "No mention of specific tools, frameworks, or technologies used",
    "Achievements described in general terms without context or scale",
    "Every bullet sounds impressive but says nothing concrete",
    "Company names and role descriptions feel generic",
  ],
};

const exampleProbes: { question: string; why: string }[] = [
  {
    question: "You mention 'significantly improved operational efficiency' — can you give me the exact metric, the baseline before your work, and the final number after?",
    why: "Forces specificity. An AI-generated persona or fraudulent candidate can't invent believable, internally consistent numbers on the spot.",
  },
  {
    question: "Walk me through the exact architecture of one of those 'state-of-the-art deep learning models.' What loss function did you use and why? What was your training data size?",
    why: "Tests technical depth. Vague resumes fall apart when you drill into implementation details that require real hands-on experience.",
  },
  {
    question: "Tell me about a specific time one of your ML models failed in production. What went wrong, how did you discover it, and what did you do in the first 24 hours?",
    why: "Tests authenticity. Real practitioners have vivid failure stories. Fabricated experience tends to only include successes.",
  },
  {
    question: "You 'pioneered NLP techniques' at DataSync — who were your key collaborators? What was their role, and where was the biggest friction in that project?",
    why: "Probes local context and interpersonal dynamics. AI-generated personas struggle with relational, contextual details about real human collaboration.",
  },
];

export default function ResumeRoast() {
  const [userQuestions, setUserQuestions] = useState(['', '', '']);
  const [revealed, setRevealed] = useState(false);

  const handleChange = useCallback((index: number, value: string) => {
    setUserQuestions(prev => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  }, []);

  const handleReveal = useCallback(() => {
    setRevealed(true);
  }, []);

  const reset = useCallback(() => {
    setUserQuestions(['', '', '']);
    setRevealed(false);
  }, []);

  return (
    <div className="activity-box">
      <div className="activity-header">
        <span className="activity-badge">Interactive Exercise</span>
        <h4 className="activity-title">The Resume Roast</h4>
        <p className="activity-desc">
          This resume looks impressive — but it's entirely AI-generated with vague achievements.
          Write 3 "deep-dive" questions that would expose a fake or exaggerated background.
        </p>
      </div>

      {/* Fake resume */}
      <div className="resume-card">
        <div className="resume-header">
          <h5 className="resume-name">{fakeResume.name}</h5>
          <span className="resume-title">{fakeResume.title}</span>
        </div>
        <p className="resume-summary">{fakeResume.summary}</p>
        {fakeResume.experience.map((exp, i) => (
          <div key={i} className="resume-exp">
            <div className="resume-exp-header">
              <strong>{exp.role}</strong>
              <span>{exp.company} | {exp.period}</span>
            </div>
            <ul className="resume-exp-bullets">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {!revealed && (
        <>
          <div className="activity-input-group">
            <span className="lazy-q-label lazy-q-label--you" style={{ marginBottom: 8 }}>
              Your 3 Deep-Dive Questions
            </span>
            {userQuestions.map((q, i) => (
              <div key={i} className="activity-input-row">
                <span className="activity-input-num">{i + 1}</span>
                <textarea
                  className="activity-textarea"
                  placeholder={`Deep-dive question ${i + 1}...`}
                  value={q}
                  onChange={e => handleChange(i, e.target.value)}
                  rows={2}
                />
              </div>
            ))}
          </div>
          <button
            className="btn btn-primary"
            onClick={handleReveal}
            disabled={!userQuestions.some(q => q.trim())}
            style={{ alignSelf: 'flex-start' }}
          >
            Show Red Flags & Example Questions
          </button>
        </>
      )}

      {revealed && (
        <div className="resume-reveal">
          <div className="resume-redflags">
            <h5 className="resume-redflags-title">Red Flags in This Resume</h5>
            <ul className="resume-redflag-list">
              {fakeResume.redFlags.map((flag, i) => (
                <li key={i} className="resume-redflag-item">{flag}</li>
              ))}
            </ul>
          </div>

          <div className="resume-probes">
            <h5 className="resume-probes-title">Example Deep-Dive Questions</h5>
            {exampleProbes.map((probe, i) => (
              <div key={i} className="resume-probe">
                <p className="resume-probe-q">"{probe.question}"</p>
                <p className="resume-probe-why"><strong>Why this works:</strong> {probe.why}</p>
              </div>
            ))}
          </div>

          <div className="activity-lesson-box">
            <span className="activity-lesson-label">Key Principle</span>
            <p className="activity-lesson-text">
              Move from <strong>Content Validation</strong> ("tell me about...") to <strong>Process Validation</strong>
              ("show me how you handled the friction in..."). <strong>Specificity is the enemy of AI fraud.</strong>
              Force candidates into hyper-specific, local context that can't be pre-generated.
            </p>
          </div>

          <button className="btn btn-primary activity-retry-btn" onClick={reset}>Try Again</button>
        </div>
      )}
    </div>
  );
}
