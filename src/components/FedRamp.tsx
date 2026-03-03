import { useState, useCallback } from 'react';
import { fedrampPurpose, fedrampAccess, fedrampSections, fedrampFaqs } from '../data/fedramp';
import './FedRamp.css';

export default function FedRamp() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const toggleSection = useCallback((id: string) => {
    setExpandedSection(prev => prev === id ? null : id);
  }, []);

  const toggleFaq = useCallback((id: string) => {
    setExpandedFaq(prev => prev === id ? null : id);
  }, []);

  return (
    <section id="fedramp" className="fedramp">
      <div className="fedramp-inner">
        <h2 className="section-heading">FedRAMP Background Check Guidelines</h2>
        <p className="section-subheading">
          Requirements and processes for requesting FedRAMP access for your team members.
        </p>

        <div className="fedramp-intro">
          <div className="fedramp-intro-icon">🔐</div>
          <div className="fedramp-intro-body">
            <p className="fedramp-intro-text">{fedrampPurpose}</p>
          </div>
        </div>

        <div className="fedramp-access-note">
          <p>{fedrampAccess}</p>
        </div>

        <h3 className="fedramp-group-title">Requirements by Access Level &amp; Location</h3>

        <div className="fedramp-sections">
          {fedrampSections.map(section => {
            const isOpen = expandedSection === section.id;
            return (
              <div key={section.id} className={`fedramp-card ${isOpen ? 'fedramp-card--open' : ''}`}>
                <button className="fedramp-card-header" onClick={() => toggleSection(section.id)}>
                  <span className="fedramp-card-icon">{section.icon}</span>
                  <div className="fedramp-card-title-wrap">
                    <span className="fedramp-card-title">{section.title}</span>
                    {!isOpen && <span className="fedramp-card-hint">Click to view requirements</span>}
                  </div>
                  <span className={`fedramp-card-arrow ${isOpen ? 'open' : ''}`}>&#9662;</span>
                </button>

                {isOpen && (
                  <div className="fedramp-card-body">
                    {section.content.map((block, i) => {
                      if (block.type === 'text') {
                        return <p key={i} className="fedramp-block-text">{block.text}</p>;
                      }
                      if (block.type === 'list') {
                        return (
                          <ul key={i} className="fedramp-block-list">
                            {block.items!.map((item, j) => (
                              <li key={j}>{item}</li>
                            ))}
                          </ul>
                        );
                      }
                      if (block.type === 'note') {
                        return (
                          <div key={i} className="fedramp-block-note">
                            <span className="fedramp-block-note-icon">⚠️</span>
                            <p>{block.text}</p>
                          </div>
                        );
                      }
                      if (block.type === 'timeline') {
                        return (
                          <div key={i} className="fedramp-block-timeline">
                            <span className="fedramp-block-timeline-icon">⏱️</span>
                            <p>{block.text}</p>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <h3 className="fedramp-group-title">Frequently Asked Questions</h3>

        <div className="fedramp-faqs">
          {fedrampFaqs.map((faq, i) => {
            const faqId = `faq-${i}`;
            const isOpen = expandedFaq === faqId;
            return (
              <div key={i} className={`fedramp-faq ${isOpen ? 'fedramp-faq--open' : ''}`}>
                <button className="fedramp-faq-header" onClick={() => toggleFaq(faqId)}>
                  <span className="fedramp-faq-q">Q</span>
                  <span className="fedramp-faq-question">{faq.question}</span>
                  <span className={`fedramp-faq-arrow ${isOpen ? 'open' : ''}`}>&#9662;</span>
                </button>
                {isOpen && (
                  <div className="fedramp-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
