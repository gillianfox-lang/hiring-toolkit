import { useState, useCallback } from 'react';
import {
  campusTabs,
  campusOverview,
  campusEligibility,
  campusWhatToExpect,
  campusWhoYouAre,
  campusReferralSteps,
  hiringManagerPreHire,
  hiringManagerPostHire,
  hiringManagerFunding,
  campusPrograms,
  campusPartners,
  campusPartnersNote,
} from '../data/campus';
import type { CampusBlock } from '../data/campus';
import './Campus.css';

type TabId = 'overview' | 'hiring-manager' | 'programs' | 'partners';

function BlockRenderer({ block, index }: { block: CampusBlock; index: number }) {
  if (block.type === 'text') {
    return <p key={index} className="campus-block-text">{block.text}</p>;
  }
  if (block.type === 'note') {
    return (
      <div key={index} className="campus-block-note">
        <span className="campus-block-note-icon">💡</span>
        <p>{block.text}</p>
      </div>
    );
  }
  if (block.type === 'list') {
    return (
      <ul key={index} className="campus-block-list">
        {block.items!.map((item, j) => <li key={j}>{item}</li>)}
      </ul>
    );
  }
  return null;
}

function OverviewTab() {
  return (
    <div className="campus-tab-content">
      <div className="campus-intro">
        <div className="campus-intro-icon">🎓</div>
        <div className="campus-intro-body">
          <p className="campus-intro-text">{campusOverview}</p>
          <div className="campus-intro-meta">
            <span className="campus-tag">University & College Students</span>
            <span className="campus-tag">Start Dates: January, May & September</span>
            <span className="campus-tag">4, 8, 12, or 16 month terms</span>
          </div>
        </div>
      </div>

      <div className="campus-two-col">
        <div className="campus-col-card">
          <h4 className="campus-col-title">What to Expect</h4>
          <ul className="campus-expect-list">
            {campusWhatToExpect.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="campus-col-card">
          <h4 className="campus-col-title">Who You Are</h4>
          <ul className="campus-expect-list">
            {campusWhoYouAre.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="campus-eligibility">
        <h4 className="campus-group-title">Eligibility</h4>
        <p className="campus-eligibility-text">{campusEligibility}</p>
      </div>

      <div className="campus-referral">
        <h4 className="campus-group-title">Refer a Student</h4>
        <p className="campus-referral-desc">Interested in referring a student to an internship? You can do so via Greenhouse!</p>
        <ol className="campus-referral-steps">
          {campusReferralSteps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function HiringManagerTab() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = useCallback((id: string) => {
    setExpandedCard(prev => prev === id ? null : id);
  }, []);

  return (
    <div className="campus-tab-content">
      <div className="campus-lifecycle-banner">
        <span className="campus-lifecycle-icon">📋</span>
        <div>
          <p className="campus-lifecycle-title">Recruitment Lifecycle</p>
          <p className="campus-lifecycle-desc">
            Placements range from 4, 8, 12, or 16-month work-term lengths every Winter (January), Summer (May), and Fall (September).
          </p>
        </div>
      </div>

      <h3 className="campus-group-title">Pre-Hire Expectations</h3>
      <div className="campus-cards">
        {hiringManagerPreHire.map(card => {
          const isOpen = expandedCard === card.id;
          return (
            <div key={card.id} className={`campus-card ${isOpen ? 'campus-card--open' : ''}`}>
              <button className="campus-card-header" onClick={() => toggleCard(card.id)}>
                <span className="campus-card-icon">{card.icon}</span>
                <div className="campus-card-title-wrap">
                  <span className="campus-card-title">{card.title}</span>
                  {!isOpen && <span className="campus-card-hint">Click to view details</span>}
                </div>
                <span className={`campus-card-arrow ${isOpen ? 'open' : ''}`}>&#9662;</span>
              </button>
              {isOpen && (
                <div className="campus-card-body">
                  {card.content.map((block, i) => (
                    <BlockRenderer key={i} block={block} index={i} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <h3 className="campus-group-title">Post-Hire Expectations</h3>
      <p className="campus-posthire-intro">Your role is crucial in setting up interns for success by offering practical experience, mentorship, and a supportive work environment.</p>
      <ul className="campus-posthire-list">
        {hiringManagerPostHire.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3 className="campus-group-title">Student Funding Programs</h3>
      <div className="campus-funding">
        {hiringManagerFunding.map((item, i) => (
          <div key={i} className="campus-funding-item">
            <span className="campus-funding-icon">💰</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProgramsTab() {
  return (
    <div className="campus-tab-content">
      <p className="campus-programs-intro">
        Geotab is committed to nurturing the next generation of talent through impactful programs and initiatives. Our campus engagement efforts are designed to connect with students, foster innovation, and build a strong pipeline of future leaders in technology.
      </p>
      <div className="campus-programs-grid">
        {campusPrograms.map((program, i) => (
          <div key={i} className="campus-program-card">
            <span className="campus-program-icon">{program.icon}</span>
            <h4 className="campus-program-name">{program.name}</h4>
            <p className="campus-program-desc">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PartnersTab() {
  return (
    <div className="campus-tab-content">
      <p className="campus-partners-intro">
        Our academic partnerships are at the heart of fostering innovation, developing future leaders, and maintaining our position as a global technology leader. These collaborations connect us with top talent, enable cutting-edge research, and shape the next generation of technology professionals.
      </p>
      <div className="campus-partners-grid">
        {campusPartners.map((partner, i) => (
          <div key={i} className="campus-partner-card">
            <h4 className="campus-partner-name">{partner.name}</h4>
            <p className="campus-partner-desc">{partner.description}</p>
            {partner.awards && (
              <div className="campus-partner-awards">
                {partner.awards.map((award, j) => (
                  <span key={j} className="campus-award-badge">🏆 {award}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="campus-partners-note">
        <p>{campusPartnersNote}</p>
      </div>
    </div>
  );
}

export default function Campus() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  return (
    <section id="campus" className="campus">
      <div className="campus-inner">
        <h2 className="section-heading">Campus Program</h2>
        <p className="section-subheading">
          Everything you need to know about Geotab's co-op and internship program for hiring managers.
        </p>

        <div className="campus-tabs">
          {campusTabs.map(tab => (
            <button
              key={tab.id}
              className={`campus-tab ${activeTab === tab.id ? 'campus-tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id as TabId)}
            >
              <span className="campus-tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'hiring-manager' && <HiringManagerTab />}
        {activeTab === 'programs' && <ProgramsTab />}
        {activeTab === 'partners' && <PartnersTab />}
      </div>
    </section>
  );
}
