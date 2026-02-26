import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { generateQuestions, geotabRoles, roleFamilies, type QuestionCategory, type BankQuestion, type GeotabRole } from '../data/questionBank';
import './QuestionBank.css';

interface GeneratedGroup {
  category: QuestionCategory;
  questions: BankQuestion[];
}

export default function QuestionBank() {
  const [description, setDescription] = useState('');
  const [results, setResults] = useState<GeneratedGroup[]>([]);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [expandedQ, setExpandedQ] = useState<string | null>(null);
  const [roleSearch, setRoleSearch] = useState('');
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [selectedRole, setSelectedRole] = useState<GeotabRole | null>(null);
  const [selectedFamily, setSelectedFamily] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowRoleDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Filter roles for search
  const filteredRoles = useMemo(() => {
    if (!roleSearch.trim()) return geotabRoles.slice(0, 20);
    const lower = roleSearch.toLowerCase();
    return geotabRoles.filter(r =>
      r.title.toLowerCase().includes(lower) ||
      r.family.toLowerCase().includes(lower)
    ).slice(0, 20);
  }, [roleSearch]);

  const handleSelectRole = useCallback((role: GeotabRole) => {
    setSelectedRole(role);
    setRoleSearch('');
    setShowRoleDropdown(false);
    const family = roleFamilies.find(f => f.id === role.family);
    setSelectedFamily(role.family);
    const desc = `${role.title} — ${role.type}${family ? `, ${family.label}` : ''}`;
    setDescription(desc);
  }, []);

  const handleSelectFamily = useCallback((familyId: string) => {
    const family = roleFamilies.find(f => f.id === familyId);
    if (!family) return;
    setSelectedFamily(familyId);
    setSelectedRole(null);
    setDescription(`${family.label} roles`);
  }, []);

  const handleGenerate = useCallback(() => {
    if (!description.trim() && !selectedFamily) return;
    const generated = generateQuestions(description, selectedFamily || undefined);
    setResults(generated);
    setHasGenerated(true);
    setExpandedQ(null);
  }, [description, selectedFamily]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.metaKey) {
      handleGenerate();
    }
  }, [handleGenerate]);

  const toggleQuestion = useCallback((id: string) => {
    setExpandedQ(prev => prev === id ? null : id);
  }, []);

  const handleCopy = useCallback((text: string, id?: string) => {
    navigator.clipboard.writeText(text);
    if (id) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  }, []);

  const handleReset = useCallback(() => {
    setHasGenerated(false);
    setResults([]);
    setDescription('');
    setSelectedRole(null);
    setSelectedFamily(null);
    setRoleSearch('');
  }, []);

  return (
    <section id="question-bank" className="question-bank">
      <div className="question-bank-inner">
        <h2 className="section-heading">Interview Question Generator</h2>
        <p className="section-subheading">
          Select a Geotab role or describe the position you're hiring for to get
          tailored interview questions with scoring guidance.
        </p>

        {!hasGenerated && (
          <>
            {/* Role selector */}
            <div className="qb-role-selector">
              <div className="qb-role-search-wrapper" ref={dropdownRef}>
                <div className="qb-search-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                  </svg>
                </div>
                <input
                  className="qb-role-search"
                  type="text"
                  placeholder="Search Geotab roles (e.g. Software Developer, Product Manager, Sales...)"
                  value={roleSearch}
                  onChange={e => { setRoleSearch(e.target.value); setShowRoleDropdown(true); }}
                  onFocus={() => setShowRoleDropdown(true)}
                />
                {showRoleDropdown && filteredRoles.length > 0 && (
                  <div className="qb-role-dropdown">
                    {filteredRoles.map((role, i) => {
                      const family = roleFamilies.find(f => f.id === role.family);
                      return (
                        <button
                          key={`${role.title}-${i}`}
                          className="qb-role-option"
                          onClick={() => handleSelectRole(role)}
                        >
                          <span className="qb-role-option-icon">{family?.icon || '📄'}</span>
                          <div className="qb-role-option-info">
                            <span className="qb-role-option-title">{role.title}</span>
                            <span className="qb-role-option-meta">
                              {role.type} · {family?.label || role.family}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {selectedRole && (
                <div className="qb-selected-role">
                  <span className="qb-selected-role-icon">
                    {roleFamilies.find(f => f.id === selectedRole.family)?.icon || '📄'}
                  </span>
                  <div className="qb-selected-role-info">
                    <span className="qb-selected-role-title">{selectedRole.title}</span>
                    <span className="qb-selected-role-type">{selectedRole.type}</span>
                  </div>
                  <button className="qb-selected-role-clear" onClick={() => { setSelectedRole(null); setSelectedFamily(null); setDescription(''); }}>
                    &times;
                  </button>
                </div>
              )}
            </div>

            {/* Role family chips */}
            <div className="qb-families">
              <span className="qb-families-label">Or browse by role family:</span>
              <div className="qb-family-chips">
                {roleFamilies.map(fam => (
                  <button
                    key={fam.id}
                    className={`qb-family-chip ${selectedFamily === fam.id ? 'qb-family-chip--active' : ''}`}
                    onClick={() => handleSelectFamily(fam.id)}
                  >
                    <span className="qb-family-chip-icon">{fam.icon}</span>
                    {fam.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="qb-divider">
              <span>or describe the role manually</span>
            </div>

            {/* Free text input */}
            <div className="qb-input-area">
              <textarea
                className="qb-textarea"
                placeholder="Describe the role you're hiring for...&#10;&#10;Example: Senior Software Developer with 5+ years of experience in .NET and cloud services. Must have strong system design skills, experience leading technical projects, and excellent communication abilities."
                value={description}
                onChange={e => setDescription(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={4}
              />
            </div>

            {/* Generate button */}
            <button
              className="btn btn-primary qb-generate-btn"
              onClick={handleGenerate}
              disabled={!description.trim() && !selectedFamily}
            >
              Generate Interview Questions
            </button>
          </>
        )}

        {hasGenerated && results.length > 0 && (
          <div className="qb-results">
            <div className="qb-results-header">
              <div className="qb-results-header-left">
                <h3 className="qb-results-title">
                  {results.reduce((acc, g) => acc + g.questions.length, 0)} questions
                  across {results.length} categories
                </h3>
                {selectedRole && (
                  <span className="qb-results-role">
                    {roleFamilies.find(f => f.id === selectedRole.family)?.icon} {selectedRole.title}
                  </span>
                )}
                {!selectedRole && selectedFamily && (
                  <span className="qb-results-role">
                    {roleFamilies.find(f => f.id === selectedFamily)?.icon} {roleFamilies.find(f => f.id === selectedFamily)?.label}
                  </span>
                )}
              </div>
              <button className="qb-reset-btn" onClick={handleReset}>
                Start Over
              </button>
            </div>

            <div className="qb-categories">
              {results.map(group => (
                <div key={group.category.id} className="qb-category">
                  <div className="qb-category-header">
                    <span className="qb-category-icon">{group.category.icon}</span>
                    <h4 className="qb-category-title">{group.category.label}</h4>
                    <span className="qb-category-count">{group.questions.length} questions</span>
                  </div>

                  <div className="qb-questions-list">
                    {group.questions.map((q, qi) => {
                      const qId = `${group.category.id}-${qi}`;
                      const isOpen = expandedQ === qId;
                      return (
                        <div key={qi} className={`qb-question ${isOpen ? 'qb-question--open' : ''}`}>
                          <button className="qb-question-header" onClick={() => toggleQuestion(qId)}>
                            <span className="qb-question-num">{qi + 1}</span>
                            <span className="qb-question-text">{q.question}</span>
                            <span className={`qb-question-arrow ${isOpen ? 'open' : ''}`}>&#9662;</span>
                          </button>

                          {isOpen && (
                            <div className="qb-question-details">
                              <div className="qb-detail-row">
                                <span className="qb-detail-label">What to listen for:</span>
                                <p className="qb-detail-value">{q.listenFor}</p>
                              </div>
                              <div className="qb-detail-row">
                                <span className="qb-detail-label">Follow-up question:</span>
                                <p className="qb-detail-value qb-detail-followup">{q.followUp}</p>
                              </div>
                              <button
                                className={`qb-copy-btn ${copiedId === qId ? 'qb-copy-btn--copied' : ''}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCopy(
                                    `${q.question}\n\nWhat to listen for: ${q.listenFor}\n\nFollow-up: ${q.followUp}`,
                                    qId
                                  );
                                }}
                              >
                                {copiedId === qId ? 'Copied!' : 'Copy Question'}
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="qb-copy-all-btn"
              onClick={() => {
                const allText = results
                  .map(g => {
                    const header = `## ${g.category.label}`;
                    const qs = g.questions.map((q, i) =>
                      `${i + 1}. ${q.question}\n   Listen for: ${q.listenFor}\n   Follow-up: ${q.followUp}`
                    ).join('\n\n');
                    return `${header}\n\n${qs}`;
                  })
                  .join('\n\n---\n\n');
                handleCopy(allText, 'all');
              }}
            >
              {copiedId === 'all' ? 'Copied to Clipboard!' : 'Copy All Questions'}
            </button>
          </div>
        )}

        {hasGenerated && results.length === 0 && (
          <div className="qb-empty">
            <p>No matching questions found. Try selecting a different role or adding more detail about the position.</p>
            <button className="qb-reset-btn" onClick={handleReset}>Try Again</button>
          </div>
        )}
      </div>
    </section>
  );
}
