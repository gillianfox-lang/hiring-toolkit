import { useState } from 'react';
import './InterviewPrep.css';

const SLIDES_URL = 'https://docs.google.com/presentation/d/12VsM-oWX_SS5nw69QrrLuiOZ3h9W2qy5ktfHYlDtrF4/edit#slide=id.p2';

const trainingGuideTopics = [
  'Basic Navigation',
  'Managing Candidates',
  'Offers',
];

const jobCreationSteps = [
  {
    step: 1,
    title: 'Create a Job',
    details: [
      'Log in to Greenhouse via the Google App Tray (top-right of Gmail) if this is your first time — this authenticates your account.',
      'Click on "Create a Job".',
    ],
    note: 'Interns: New intern headcount should not be submitted outside of specific submission timeframes. Wait for company-wide communications from the Campus team before submitting.',
  },
  {
    step: 2,
    title: 'Copy an Existing Job',
    details: [
      'Select the "Generic" template with Status "Open".',
      'High-volume departments (e.g., Software Development, Support) have specific templates assigned.',
      'Always use Open templates to get the most up-to-date version — do not copy from closed jobs or closed templates.',
      'Ensure the template matches the job type (e.g., don\'t use an Intern template for a full-time role).',
    ],
    note: 'Interns: Select [TEMPLATE] Intern for all intern requests. Contact Annie Mathew if an open template is not assigned to you.',
  },
  {
    step: 3,
    title: 'Edit the Template',
    details: [
      'Provide the necessary information to customize the template.',
      'For Department, select your SubDepartment (Org 5) to ensure accurate approval flows.',
      'Click "Generate Requisition ID".',
      'Fill or edit the remaining fields.',
    ],
    note: 'Interns: Select "Intern/Student" under Employment Type (or "Intern Extension" to extend). Outline business need and desired duration (4, 8, or 12 months) in req justification.',
  },
  {
    step: 4,
    title: 'Configure Openings',
    details: [
      'For a single headcount, it will be automatically added.',
      'Click "Generate Opening ID".',
      'For multiple headcount: add the required number of openings and generate IDs for each.',
    ],
    note: 'Interns: Under "Posting approved for?", select "Student - Intern/Co-op (school job portal)".',
  },
  {
    step: 5,
    title: 'Create the Job',
    details: [
      'Click "Create job and continue".',
    ],
  },
  {
    step: 6,
    title: 'Verify Details',
    details: [
      'Review all details including the approval chain.',
      'Ensure the appropriate VP or AVP of the department is included.',
    ],
  },
  {
    step: 7,
    title: 'Request Approvals',
    details: [
      'If everything is accurate, click "Request approval".',
      'The job will appear under Drafts until fully approved.',
      'Once approved, do not edit openings or job details — contact your Talent representative for any changes.',
    ],
  },
];

const bestPractices = [
  'Submit your scorecard within 24 hours of the interview',
  'Add specific, evidence-based feedback in your scorecard — not just ratings',
  'To flag something for your recruiter, tag their name in the Notes section on the candidate profile',
  'Do not share your scores with other interviewers before calibration',
  'Review the candidate\'s resume and application in Greenhouse before the interview',
  'Talent is responsible for moving candidates into different stages — do not move candidates yourself',
];

export default function InterviewPrep() {
  const [jobCreationOpen, setJobCreationOpen] = useState(false);

  return (
    <section className="greenhouse" id="greenhouse">
      <h2 className="gh-title">Greenhouse Resources</h2>
      <p className="gh-subtitle">
        Guides and best practices for using Greenhouse as a hiring manager.
      </p>

      <div className="gh-content">
        {/* Job Creation guide */}
        <div className="gh-section">
          <h3 className="gh-section-title">Guides</h3>
          <div className="gh-topics">
            <div className="gh-topic">
              <button
                className={`gh-topic-header ${jobCreationOpen ? 'gh-topic-header--open' : ''}`}
                onClick={() => setJobCreationOpen(prev => !prev)}
              >
                <span className="gh-topic-icon">📝</span>
                <div className="gh-topic-info">
                  <span className="gh-topic-title">Creating & Posting Jobs</span>
                  <span className="gh-topic-desc">Step-by-step guide to creating a job requisition in Greenhouse</span>
                </div>
                <span className="gh-topic-chevron">{jobCreationOpen ? '−' : '+'}</span>
              </button>

              {jobCreationOpen && (
                <div className="gh-topic-body">
                  <div className="gh-steps">
                    {jobCreationSteps.map(s => (
                      <div key={s.step} className="gh-step">
                        <div className="gh-step-header">
                          <span className="gh-step-num">{s.step}</span>
                          <span className="gh-step-title">{s.title}</span>
                        </div>
                        <ul className="gh-step-details">
                          {s.details.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                        {s.note && (
                          <div className="gh-step-note">
                            <strong>Note:</strong> {s.note}
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="gh-step-footer">
                      <strong>Questions?</strong> Reach out to Annie Mathew (Talent Acquisition) or Tharsiga Selva (Campus Program).
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Training guide */}
            <a
              className="gh-topic-link"
              href={SLIDES_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="gh-topic-icon">📖</span>
              <div className="gh-topic-info">
                <span className="gh-topic-title">Hiring Manager Training Guide</span>
                <span className="gh-topic-desc">
                  {trainingGuideTopics.join(' · ')}
                </span>
              </div>
              <span className="gh-topic-chevron">↗</span>
            </a>
          </div>
        </div>

        {/* Best practices */}
        <div className="gh-section">
          <h3 className="gh-section-title">Best Practices</h3>
          <ul className="gh-practices">
            {bestPractices.map((practice, i) => (
              <li key={i} className="gh-practice-item">{practice}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
