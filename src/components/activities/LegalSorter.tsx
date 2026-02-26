import { useState, useCallback } from 'react';

interface QuestionItem {
  question: string;
  isLegal: boolean;
  explanation: string;
  alternative?: string;
}

const questions: QuestionItem[] = [
  {
    question: "Do you have reliable transportation to get to work?",
    isLegal: true,
    explanation: "This is acceptable because it focuses on the candidate's ability to fulfill a job requirement (showing up), not on what kind of car they drive or where they live.",
  },
  {
    question: "How old are you?",
    isLegal: false,
    explanation: "Age is a protected category under the Age Discrimination in Employment Act (ADEA). You cannot ask about age, date of birth, or graduation year as a proxy.",
    alternative: "Are you legally authorized to work and over 18?",
  },
  {
    question: "Tell me about a time you managed a cross-functional project.",
    isLegal: true,
    explanation: "Behavioral questions about work experience are always appropriate when tied to the job requirements.",
  },
  {
    question: "Are you married? Do you have kids?",
    isLegal: false,
    explanation: "Marital and family status are protected. These questions can lead to discrimination based on gender or caregiving responsibilities.",
    alternative: "This role requires occasional travel. Are you able to meet this requirement?",
  },
  {
    question: "Where are you originally from?",
    isLegal: false,
    explanation: "This probes national origin, a protected category. Even if asked casually, it can expose the company to discrimination claims.",
    alternative: "Are you authorized to work in this country?",
  },
  {
    question: "Can you perform the essential functions of this role with or without accommodation?",
    isLegal: true,
    explanation: "This is the legally correct way to assess a candidate's ability to do the job. You may describe the requirements and ask if they can meet them.",
  },
  {
    question: "What church do you attend?",
    isLegal: false,
    explanation: "Religion is a protected category. You cannot ask about religious beliefs, practices, or affiliations.",
    alternative: "State the work schedule and ask: 'Are you able to work this schedule?'",
  },
  {
    question: "Have you ever been arrested?",
    isLegal: false,
    explanation: "Arrest records (without convictions) are generally off-limits. In many jurisdictions, even conviction history has restrictions on when it can be asked (Ban the Box laws).",
    alternative: "Some roles may ask about convictions after a conditional offer, depending on jurisdiction and job relevance.",
  },
  {
    question: "What's your approach to handling tight deadlines?",
    isLegal: true,
    explanation: "Situational and behavioral questions about work style are appropriate and help assess job-relevant competencies.",
  },
  {
    question: "When did you graduate from college?",
    isLegal: false,
    explanation: "Graduation year is a common proxy for age, which is a protected category. Ask about relevant qualifications instead.",
    alternative: "Do you have a degree in [relevant field], or equivalent experience?",
  },
];

export default function LegalSorter() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(boolean | null)[]>(Array(questions.length).fill(null));
  const [revealed, setRevealed] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = useCallback((isLegal: boolean) => {
    const next = [...answers];
    next[current] = isLegal;
    setAnswers(next);
    setShowResult(true);
  }, [answers, current]);

  const handleNext = useCallback(() => {
    setShowResult(false);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setRevealed(true);
    }
  }, [current]);

  const reset = useCallback(() => {
    setCurrent(0);
    setAnswers(Array(questions.length).fill(null));
    setRevealed(false);
    setShowResult(false);
  }, []);

  const score = answers.filter((a, i) => a === questions[i].isLegal).length;
  const q = questions[current];

  if (revealed) {
    return (
      <div className="activity-box">
        <div className="activity-header">
          <span className="activity-badge">Results</span>
          <h4 className="activity-title">Legal or Illegal?</h4>
        </div>
        <div className="activity-score-banner">
          <span className="activity-score-num">{score}/{questions.length}</span>
          <span className="activity-score-label">
            {score === questions.length ? 'Perfect score!' : score >= 8 ? 'Great job!' : score >= 6 ? 'Good, review the ones you missed.' : 'Review the explanations below carefully.'}
          </span>
        </div>
        <div className="activity-review-list">
          {questions.map((item, i) => (
            <div key={i} className={`activity-review-item ${answers[i] === item.isLegal ? 'activity-review-item--correct' : 'activity-review-item--wrong'}`}>
              <div className="activity-review-header">
                <span className="activity-review-icon">{answers[i] === item.isLegal ? '✓' : '✗'}</span>
                <span className="activity-review-q">{item.question}</span>
                <span className={`activity-tag ${item.isLegal ? 'activity-tag--green' : 'activity-tag--red'}`}>
                  {item.isLegal ? 'Legal' : 'Illegal'}
                </span>
              </div>
              {answers[i] !== item.isLegal && (
                <p className="activity-review-explain">{item.explanation}</p>
              )}
              {answers[i] !== item.isLegal && item.alternative && (
                <p className="activity-review-alt"><strong>Ask instead:</strong> {item.alternative}</p>
              )}
            </div>
          ))}
        </div>
        <button className="btn btn-primary activity-retry-btn" onClick={reset}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="activity-box">
      <div className="activity-header">
        <span className="activity-badge">Interactive Exercise</span>
        <h4 className="activity-title">Legal or Illegal?</h4>
        <p className="activity-desc">Classify each interview question. If it doesn't relate to the candidate's ability to do the job, it's likely off-limits.</p>
      </div>
      <div className="activity-progress">
        <div className="activity-progress-bar">
          <div className="activity-progress-fill" style={{ width: `${((current + (showResult ? 1 : 0)) / questions.length) * 100}%` }} />
        </div>
        <span className="activity-progress-text">{current + 1} of {questions.length}</span>
      </div>

      <div className="activity-question-card">
        <p className="activity-question-text">"{q.question}"</p>

        {!showResult && (
          <div className="activity-choice-row">
            <button className="activity-choice-btn activity-choice-btn--green" onClick={() => handleAnswer(true)}>Legal</button>
            <button className="activity-choice-btn activity-choice-btn--red" onClick={() => handleAnswer(false)}>Illegal</button>
          </div>
        )}

        {showResult && (
          <div className={`activity-feedback ${answers[current] === q.isLegal ? 'activity-feedback--correct' : 'activity-feedback--wrong'}`}>
            <span className="activity-feedback-icon">{answers[current] === q.isLegal ? '✓ Correct!' : '✗ Incorrect'}</span>
            <p className="activity-feedback-text">{q.explanation}</p>
            {q.alternative && answers[current] !== q.isLegal && (
              <p className="activity-feedback-alt"><strong>Ask instead:</strong> {q.alternative}</p>
            )}
            <button className="btn btn-primary activity-next-btn" onClick={handleNext}>
              {current < questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
