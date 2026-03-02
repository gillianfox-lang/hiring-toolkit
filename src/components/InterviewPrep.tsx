import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import {
  categories,
  roleFamilies,
  geotabRoles,
  questionBank,
  type QuestionCategory,
  type BankQuestion,
  type GeotabRole,
} from '../data/questionBank';
import './InterviewPrep.css';

/* ─── Types ─── */
interface CompetencySection {
  category: QuestionCategory;
  questions: BankQuestion[];
}

/* ─── Content ─── */

const duringReminders = [
  '70/30 rule — the candidate should talk ~70% of the time',
  'Take evidence-based notes, not impressions',
  'Use STAR probes (Situation, Task, Action, Result) for depth',
  'Avoid leading questions — let the candidate share their story',
  'Note specific examples, not just "seemed good"',
  'Stay consistent — ask every candidate the same core questions',
];

const postChecklist = [
  'Submit your scorecard within 24 hours',
  'Do not share your scores with other interviewers before calibration',
  'Flag any potential concerns for the recruiter immediately',
  'Note areas that need further exploration in the next round',
  'Avoid recency bias — review your notes, not just memory',
];

/* ─── Component ─── */
export default function InterviewPrep() {
  /* Setup state */
  const [roleSearch, setRoleSearch] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedRole, setSelectedRole] = useState<GeotabRole | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* Plan state */
  const [plan, setPlan] = useState<{
    role: GeotabRole;
    competencies: CompetencySection[];
  } | null>(null);
  const [postChecked, setPostChecked] = useState<boolean[]>([]);
  const [copied, setCopied] = useState(false);

  /* Close dropdown on outside click */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  /* Filtered roles */
  const filteredRoles = useMemo(() => {
    if (!roleSearch.trim()) return geotabRoles.slice(0, 20);
    const lower = roleSearch.toLowerCase();
    return geotabRoles.filter(
      r => r.title.toLowerCase().includes(lower) || r.family.toLowerCase().includes(lower),
    ).slice(0, 20);
  }, [roleSearch]);

  /* Competency chips filtered to selected role's family */
  const availableCategories = useMemo(() => {
    if (!selectedRole) return [];
    const family = roleFamilies.find(f => f.id === selectedRole.family);
    if (!family) return categories;
    const familyCatIds = new Set(family.categories);
    // Show family-specific first, then universal categories
    return categories.filter(c => familyCatIds.has(c.id))
      .concat(categories.filter(c => !familyCatIds.has(c.id)));
  }, [selectedRole]);

  /* Handlers */
  const handleSelectRole = useCallback((role: GeotabRole) => {
    setSelectedRole(role);
    setRoleSearch('');
    setShowDropdown(false);
    setSelectedCategories([]);
  }, []);

  const toggleCategory = useCallback((catId: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(catId)) return prev.filter(c => c !== catId);
      if (prev.length >= 5) return prev;
      return [...prev, catId];
    });
  }, []);

  const handleGenerate = useCallback(() => {
    if (!selectedRole || selectedCategories.length < 3) return;

    const competencies: CompetencySection[] = selectedCategories.map(catId => {
      const cat = categories.find(c => c.id === catId)!;
      const matching = questionBank
        .filter(q => q.category === catId)
        .slice(0, 2);
      return { category: cat, questions: matching };
    });

    setPlan({
      role: selectedRole,
      competencies,
    });
    setPostChecked(new Array(postChecklist.length).fill(false));
    setCopied(false);
  }, [selectedRole, selectedCategories]);

  const handleStartOver = useCallback(() => {
    setPlan(null);
    setSelectedRole(null);
    setSelectedCategories([]);
    setRoleSearch('');
    setPostChecked([]);
    setCopied(false);
  }, []);

  /* Build markdown for copy */
  const buildMarkdown = useCallback(() => {
    if (!plan) return '';
    const lines: string[] = [];
    lines.push(`# Interview Plan — ${plan.role.title}`);
    lines.push(`**Type:** ${plan.role.type}`);
    lines.push('');

    lines.push('## Competency Questions');
    plan.competencies.forEach(section => {
      lines.push(`### ${section.category.icon} ${section.category.label}`);
      section.questions.forEach((q, i) => {
        lines.push(`**Q${i + 1}:** ${q.question}`);
        lines.push(`- *Listen for:* ${q.listenFor}`);
        lines.push(`- *STAR follow-up:* ${q.followUp}`);
        lines.push('');
      });
    });

    lines.push('## During-Interview Reminders');
    duringReminders.forEach(r => lines.push(`- ${r}`));
    lines.push('');

    lines.push('## Post-Interview Checklist');
    postChecklist.forEach((item, i) => {
      lines.push(`- [${postChecked[i] ? 'x' : ' '}] ${item}`);
    });

    return lines.join('\n');
  }, [plan, postChecked]);

  const handleCopy = useCallback(async () => {
    const md = buildMarkdown();
    await navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [buildMarkdown]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  /* ─── Render ─── */
  return (
    <section className="interview-prep" id="interview-prep">
      <h2 className="ip-title">Interview Prep Checklist</h2>
      <p className="ip-subtitle">
        Build a structured interview plan you can bring into your next interview.
      </p>

      {!plan ? (
        /* ─── Setup Phase ─── */
        <div className="ip-setup">
          {/* Step 1: Role search */}
          <div className="ip-step">
            <label className="ip-step-label">
              <span className="ip-step-num">1</span> Select the role
            </label>
            <div className="ip-role-search" ref={dropdownRef}>
              {selectedRole ? (
                <div className="ip-selected-role">
                  <span className="ip-selected-role-title">{selectedRole.title}</span>
                  <span className="ip-selected-role-type">{selectedRole.type}</span>
                  <button
                    className="ip-clear-btn"
                    onClick={() => { setSelectedRole(null); setSelectedCategories([]); }}
                    aria-label="Clear role"
                  >
                    ×
                  </button>
                </div>
              ) : (
                <>
                  <input
                    className="ip-role-input"
                    type="text"
                    placeholder="Search 140+ roles..."
                    value={roleSearch}
                    onChange={e => { setRoleSearch(e.target.value); setShowDropdown(true); }}
                    onFocus={() => setShowDropdown(true)}
                  />
                  {showDropdown && filteredRoles.length > 0 && (
                    <ul className="ip-role-dropdown">
                      {filteredRoles.map(role => (
                        <li key={role.title}>
                          <button
                            className="ip-role-option"
                            onClick={() => handleSelectRole(role)}
                          >
                            <span className="ip-role-option-title">{role.title}</span>
                            <span className="ip-role-option-type">{role.type}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Step 2: Competency chips */}
          {selectedRole && (
            <div className="ip-step">
              <label className="ip-step-label">
                <span className="ip-step-num">2</span> Pick 3–5 competencies
              </label>
              <p className="ip-step-hint">
                {selectedCategories.length}/5 selected
                {selectedCategories.length < 3 && ' (minimum 3)'}
              </p>
              <div className="ip-chips">
                {availableCategories.map(cat => {
                  const isSelected = selectedCategories.includes(cat.id);
                  const isDisabled = !isSelected && selectedCategories.length >= 5;
                  return (
                    <button
                      key={cat.id}
                      className={`ip-chip ${isSelected ? 'ip-chip--selected' : ''} ${isDisabled ? 'ip-chip--disabled' : ''}`}
                      onClick={() => toggleCategory(cat.id)}
                      disabled={isDisabled}
                    >
                      <span className="ip-chip-icon">{cat.icon}</span>
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Generate button */}
          {selectedRole && selectedCategories.length >= 3 && (
            <button className="ip-generate-btn" onClick={handleGenerate}>
              Generate Interview Plan
            </button>
          )}
        </div>
      ) : (
        /* ─── Plan Phase ─── */
        <div className="ip-plan">
          {/* Header with actions */}
          <div className="ip-plan-header">
            <div>
              <h3 className="ip-plan-role">{plan.role.title}</h3>
              <p className="ip-plan-meta">
                {plan.role.type} · {plan.competencies.length} competencies
              </p>
            </div>
            <div className="ip-plan-actions">
              <button className="ip-action-btn" onClick={handleCopy}>
                {copied ? '✓ Copied' : 'Copy as Markdown'}
              </button>
              <button className="ip-action-btn" onClick={handlePrint}>
                Print
              </button>
              <button className="ip-action-btn ip-action-btn--secondary" onClick={handleStartOver}>
                Start Over
              </button>
            </div>
          </div>

          {/* Competency questions */}
          <div className="ip-section">
            <h4 className="ip-section-title">Competency Questions</h4>
            {plan.competencies.map(section => (
              <div key={section.category.id} className="ip-competency">
                <h5 className="ip-competency-title">
                  <span className="ip-competency-icon">{section.category.icon}</span>
                  {section.category.label}
                </h5>
                {section.questions.map((q, qi) => (
                  <div key={qi} className="ip-question-card">
                    <p className="ip-question-text">
                      <strong>Q{qi + 1}:</strong> {q.question}
                    </p>
                    <div className="ip-question-detail">
                      <div className="ip-listen-for">
                        <span className="ip-detail-label">Listen for:</span>
                        <span>{q.listenFor}</span>
                      </div>
                      <div className="ip-follow-up">
                        <span className="ip-detail-label">STAR follow-up:</span>
                        <span>{q.followUp}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* During-interview reminders */}
          <div className="ip-section">
            <h4 className="ip-section-title">During-Interview Reminders</h4>
            <ul className="ip-reminder-list">
              {duringReminders.map((r, i) => (
                <li key={i} className="ip-reminder-item">{r}</li>
              ))}
            </ul>
          </div>

          {/* Post-interview checklist */}
          <div className="ip-section">
            <h4 className="ip-section-title">Post-Interview Checklist</h4>
            <ul className="ip-checklist">
              {postChecklist.map((item, i) => (
                <li key={i} className="ip-check-item">
                  <label className="ip-check-label">
                    <input
                      type="checkbox"
                      checked={postChecked[i] || false}
                      onChange={() => setPostChecked(prev => prev.map((v, idx) => idx === i ? !v : v))}
                    />
                    <span>{item}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom actions */}
          <div className="ip-plan-footer">
            <button className="ip-action-btn" onClick={handleCopy}>
              {copied ? '✓ Copied' : 'Copy as Markdown'}
            </button>
            <button className="ip-action-btn" onClick={handlePrint}>
              Print
            </button>
            <button className="ip-action-btn ip-action-btn--secondary" onClick={handleStartOver}>
              Start Over
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
