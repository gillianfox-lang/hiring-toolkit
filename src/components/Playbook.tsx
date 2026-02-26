import { useState, useCallback } from 'react';
import {
  playbookIntro,
  recruitmentPillars,
  slaImpactAreas,
  industryBenchmarks,
  slaStages,
  slaTotals,
  slaKeyNotes,
  slaLegend,
  playbookResources,
} from '../data/playbook';
import './Playbook.css';

type Tab = 'philosophy' | 'sla' | 'benchmarks';

export default function Playbook() {
  const [activeTab, setActiveTab] = useState<Tab>('philosophy');

  return (
    <section id="playbook" className="playbook">
      <div className="playbook-inner">
        <h2 className="section-heading">Hiring Manager Playbook</h2>
        <p className="section-subheading">
          Your guide to mastering the recruitment process — from philosophy to
          SLA commitments and industry benchmarks.
        </p>

        {/* Welcome banner */}
        <div className="playbook-welcome">
          <div className="playbook-welcome-icon">📘</div>
          <div className="playbook-welcome-body">
            <p className="playbook-welcome-text">{playbookIntro.welcome}</p>
            <p className="playbook-welcome-cta">{playbookIntro.callToAction}</p>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="playbook-tabs">
          <button
            className={`playbook-tab ${activeTab === 'philosophy' ? 'playbook-tab--active' : ''}`}
            onClick={() => setActiveTab('philosophy')}
          >
            Philosophy
          </button>
          <button
            className={`playbook-tab ${activeTab === 'sla' ? 'playbook-tab--active' : ''}`}
            onClick={() => setActiveTab('sla')}
          >
            SLA Tracker
          </button>
          <button
            className={`playbook-tab ${activeTab === 'benchmarks' ? 'playbook-tab--active' : ''}`}
            onClick={() => setActiveTab('benchmarks')}
          >
            Industry Benchmarks
          </button>
        </div>

        {/* Tab content */}
        <div className="playbook-content">
          {activeTab === 'philosophy' && <PhilosophyTab />}
          {activeTab === 'sla' && <SLATab />}
          {activeTab === 'benchmarks' && <BenchmarksTab />}
        </div>
      </div>
    </section>
  );
}

function PhilosophyTab() {
  return (
    <div className="playbook-philosophy">
      {/* Three pillars */}
      <div className="playbook-pillars">
        {recruitmentPillars.map((pillar, i) => (
          <div key={i} className="playbook-pillar">
            <span className="playbook-pillar-icon">{pillar.icon}</span>
            <h4 className="playbook-pillar-title">{pillar.title}</h4>
            <p className="playbook-pillar-desc">{pillar.description}</p>
          </div>
        ))}
      </div>

      {/* SLA Impact Areas */}
      <div className="playbook-impact">
        <h4 className="playbook-impact-title">Why SLAs Matter</h4>
        <p className="playbook-impact-intro">
          Well-defined SLAs and metrics positively impact key recruitment outcomes:
        </p>
        <div className="playbook-impact-grid">
          {slaImpactAreas.map((area, i) => (
            <div key={i} className="playbook-impact-item">
              <span className="playbook-impact-metric">{area.metric}</span>
              <p className="playbook-impact-desc">{area.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="playbook-resources">
        <h4 className="playbook-resources-title">Resources at Your Disposal</h4>
        <div className="playbook-resources-grid">
          {playbookResources.map((r, i) =>
            r.link ? (
              <a key={i} className="playbook-resource-chip playbook-resource-chip--link" href={r.link} target="_blank" rel="noopener noreferrer">
                <span>{r.icon}</span>
                <span>{r.title}</span>
                <span className="playbook-resource-arrow">&rarr;</span>
              </a>
            ) : (
              <div key={i} className="playbook-resource-chip">
                <span>{r.icon}</span>
                <span>{r.title}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function SLATab() {
  const [expandedStage, setExpandedStage] = useState<number | null>(null);

  const toggleStage = useCallback((idx: number) => {
    setExpandedStage(prev => (prev === idx ? null : idx));
  }, []);

  const getResponsibleColor = (responsible: string) => {
    if (responsible.startsWith('Hiring Manager')) return 'sla-tag--hm';
    if (responsible.startsWith('Talent')) return 'sla-tag--talent';
    if (responsible.startsWith('HRBP')) return 'sla-tag--hrbp';
    if (responsible.includes('/')) return 'sla-tag--shared';
    return 'sla-tag--talent';
  };

  return (
    <div className="playbook-sla">
      {/* Legend */}
      <div className="sla-legend">
        {slaLegend.map((item, i) => (
          <span key={i} className="sla-legend-item">
            <strong>{item.abbr}</strong> = {item.full}
          </span>
        ))}
      </div>

      {/* Role type explanation */}
      <div className="sla-role-types">
        <div className="sla-role-type">
          <span className="sla-role-type-badge sla-role-type-badge--standard">Standard</span>
          <span className="sla-role-type-desc">
            Roles that follow standard procedure — target: {slaTotals.standard} days
          </span>
        </div>
        <div className="sla-role-type">
          <span className="sla-role-type-badge sla-role-type-badge--nonstandard">Non-Standard</span>
          <span className="sla-role-type-desc">
            More complex roles that are harder to fill — target: {slaTotals.nonStandard} days
          </span>
        </div>
      </div>

      {/* SLA stages */}
      <div className="sla-stages">
        {slaStages.map((stage, i) => (
          <div
            key={i}
            className={`sla-stage ${expandedStage === i ? 'sla-stage--open' : ''}`}
          >
            <button className="sla-stage-header" onClick={() => toggleStage(i)}>
              <span className="sla-stage-num">{i + 1}</span>
              <span className="sla-stage-name">{stage.stage}</span>
              <div className="sla-stage-days">
                <span className="sla-day-chip sla-day-chip--standard" title="Standard roles">
                  {stage.standardDays === 'N/A' ? '—' : `${stage.standardDays}d`}
                </span>
                <span className="sla-day-chip sla-day-chip--nonstandard" title="Non-standard roles">
                  {stage.nonStandardDays === 'N/A' ? '—' : `${stage.nonStandardDays}d`}
                </span>
              </div>
              <span className={`sla-tag ${getResponsibleColor(stage.responsible)}`}>
                {stage.responsible.length > 20
                  ? stage.responsible.split(' / ')[0] + '+'
                  : stage.responsible}
              </span>
              <span className={`module-arrow ${expandedStage === i ? 'open' : ''}`}>&#9662;</span>
            </button>
            {expandedStage === i && (
              <div className="sla-stage-detail">
                <p className="sla-stage-commitment">{stage.commitment}</p>
                <div className="sla-stage-meta">
                  <span className="sla-stage-meta-label">Responsible:</span>
                  <span>{stage.responsible}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Totals bar */}
      <div className="sla-totals">
        <div className="sla-total">
          <span className="sla-total-label">Standard Total</span>
          <span className="sla-total-num">{slaTotals.standard} days</span>
        </div>
        <div className="sla-total">
          <span className="sla-total-label">Non-Standard Total</span>
          <span className="sla-total-num">{slaTotals.nonStandard} days</span>
        </div>
      </div>

      {/* Key notes */}
      <div className="sla-notes">
        <h4 className="sla-notes-title">Important Notes</h4>
        <ul className="sla-notes-list">
          {slaKeyNotes.map((note, i) => (
            <li key={i} className="sla-notes-item">{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function BenchmarksTab() {
  return (
    <div className="playbook-benchmarks">
      <p className="playbook-benchmarks-intro">
        Industry benchmark data for each step in the recruitment process.
        Compare standard and non-standard role timelines:
      </p>

      <div className="benchmark-table-wrapper">
        <table className="benchmark-table">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Standard (days)</th>
              <th>Non-Standard (days)</th>
            </tr>
          </thead>
          <tbody>
            {industryBenchmarks.map((row, i) => {
              const isTotal = row.stage === 'Total days';
              const isIdeal = row.stage.includes('IDEAL');
              return (
                <tr
                  key={i}
                  className={
                    isTotal
                      ? 'benchmark-row--total'
                      : isIdeal
                        ? 'benchmark-row--ideal'
                        : ''
                  }
                >
                  <td>{row.stage}</td>
                  <td>{row.standardDays}</td>
                  <td>{row.nonStandardDays}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Visual bar chart comparison */}
      <div className="benchmark-visual">
        <h4 className="benchmark-visual-title">Timeline Comparison</h4>
        <div className="benchmark-bars">
          <div className="benchmark-bar-row">
            <span className="benchmark-bar-label">Standard</span>
            <div className="benchmark-bar-track">
              <div
                className="benchmark-bar-fill benchmark-bar-fill--standard"
                style={{ width: `${(62.5 / 80) * 100}%` }}
              >
                62.5 days
              </div>
            </div>
          </div>
          <div className="benchmark-bar-row">
            <span className="benchmark-bar-label">Non-Standard</span>
            <div className="benchmark-bar-track">
              <div
                className="benchmark-bar-fill benchmark-bar-fill--nonstandard"
                style={{ width: `${(76.5 / 80) * 100}%` }}
              >
                76.5 days
              </div>
            </div>
          </div>
          <div className="benchmark-bar-row">
            <span className="benchmark-bar-label">Ideal Standard</span>
            <div className="benchmark-bar-track">
              <div
                className="benchmark-bar-fill benchmark-bar-fill--ideal"
                style={{ width: `${(60 / 80) * 100}%` }}
              >
                60 days
              </div>
            </div>
          </div>
          <div className="benchmark-bar-row">
            <span className="benchmark-bar-label">Ideal Non-Std</span>
            <div className="benchmark-bar-track">
              <div
                className="benchmark-bar-fill benchmark-bar-fill--ideal"
                style={{ width: `${(75 / 80) * 100}%` }}
              >
                75 days
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
