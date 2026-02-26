import { useState, useCallback } from 'react';
import { trainingModules, wrapUp } from '../data/trainingProgram';
import type { TrainingModule } from '../data/trainingProgram';
import LegalSorter from './activities/LegalSorter';
import ScorecardActivity from './activities/ScorecardActivity';
import LazyQuestions from './activities/LazyQuestions';
import SimplicityChallenge from './activities/SimplicityChallenge';
import ResumeRoast from './activities/ResumeRoast';
import CalibrationExercise from './activities/CalibrationExercise';
import AwfulInterview from './activities/AwfulInterview';
import './TrainingProgram.css';
import './activities/Activities.css';

const moduleActivities: Record<string, React.ReactNode[]> = {
  'module-1': [<LegalSorter key="legal" />],
  'module-2': [<ScorecardActivity key="scorecard" />, <LazyQuestions key="lazy" />],
  'module-3': [<SimplicityChallenge key="simplicity" />, <ResumeRoast key="resume" />],
  'module-4': [<CalibrationExercise key="calibration" />],
  'module-5': [<AwfulInterview key="awful" />],
};

export default function TrainingProgram() {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const toggleModule = useCallback((id: string) => {
    setActiveModule(prev => prev === id ? null : id);
  }, []);

  return (
    <section id="training" className="training-program">
      <div className="training-inner">
        <h2 className="section-heading">Hiring Manager Bootcamp</h2>
        <p className="section-subheading">
          A structured training program covering legal foundations, structured
          interviewing, AI-era hiring, bias mitigation, and candidate experience.
        </p>

        {/* 5 C's banner */}
        <div className="training-five-cs">
          <span className="five-cs-label">The 5 C's of Interviewing</span>
          <div className="five-cs-list">
            {wrapUp.fiveCs.map((c, i) => (
              <span key={i} className="five-cs-item">{c}</span>
            ))}
          </div>
        </div>

        {/* Module timeline */}
        <div className="training-timeline">
          {trainingModules.map((mod) => (
            <ModuleCard
              key={mod.id}
              module={mod}
              isOpen={activeModule === mod.id}
              onToggle={() => toggleModule(mod.id)}
              activities={moduleActivities[mod.id]}
            />
          ))}
        </div>

        {/* Wrap-up section */}
        <div className="training-wrapup">
          <div className="wrapup-header">
            <span className="wrapup-icon">🎯</span>
            <div>
              <h3 className="wrapup-title">Action Planning</h3>
              <p className="wrapup-commitment">{wrapUp.commitmentPrompt}</p>
            </div>
          </div>

          <div className="wrapup-resources">
            <h4 className="wrapup-resources-title">Recommended Resources</h4>
            <div className="wrapup-resources-grid">
              {wrapUp.resources.map((r, i) => (
                <div key={i} className="resource-card">
                  <h5 className="resource-card-title">{r.title}</h5>
                  <span className="resource-card-source">{r.source}</span>
                  {r.description && (
                    <p className="resource-card-desc">{r.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModuleCard({
  module: mod,
  isOpen,
  onToggle,
  activities,
}: {
  module: TrainingModule;
  isOpen: boolean;
  onToggle: () => void;
  activities?: React.ReactNode[];
}) {
  return (
    <div className={`module-card ${isOpen ? 'module-card--open' : ''}`}>
      <button className="module-card-header" onClick={onToggle}>
        <span className="module-number">Module {mod.number}</span>
        <span className="module-icon">{mod.icon}</span>
        <div className="module-header-info">
          <h3 className="module-title">{mod.title}</h3>
          <p className="module-takeaway-preview">{mod.coreTakeaway}</p>
        </div>
        <span className={`module-arrow ${isOpen ? 'open' : ''}`}>&#9662;</span>
      </button>

      {isOpen && (
        <div className="module-content">
          {/* Key Topics */}
          <div className="module-section">
            <h4 className="module-section-title">
              <span className="module-section-icon">📌</span>
              Key Topics
            </h4>
            <ul className="module-topic-list">
              {mod.topicFocus.map((topic, i) => (
                <li key={i} className="module-topic-item">{topic}</li>
              ))}
            </ul>
          </div>

          {/* Interactive Activities */}
          {activities && activities.length > 0 && (
            <div className="module-section">
              <h4 className="module-section-title">
                <span className="module-section-icon">🏋️</span>
                Activities & Exercises
              </h4>
              <div className="module-activities-list">
                {activities.map((activity, i) => (
                  <div key={i}>{activity}</div>
                ))}
              </div>
            </div>
          )}

          {/* Core Takeaway */}
          <div className="module-takeaway-box">
            <span className="module-takeaway-label">Core Takeaway</span>
            <p className="module-takeaway-text">{mod.coreTakeaway}</p>
          </div>

          {/* Resources if any */}
          {mod.resources && mod.resources.length > 0 && (
            <div className="module-section">
              <h4 className="module-section-title">
                <span className="module-section-icon">📚</span>
                Recommended Resources
              </h4>
              <div className="module-resources">
                {mod.resources.map((r, i) => (
                  <div key={i} className="module-resource">
                    <strong>{r.title}</strong>
                    <span className="module-resource-source">{r.source}</span>
                    {r.description && <p>{r.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
