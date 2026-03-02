import './HeroSection.css';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">
          Hiring Manager<br />Training Toolkit
        </h1>
        <p className="hero-description">
          Prepare for every interview with structured prep checklists,
          competency-based questions, and comprehensive guides. Walk into
          each interview confident, organized, and ready to find the best talent.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => scrollTo('greenhouse')}>
            Greenhouse Resources
          </button>
          <button className="btn btn-secondary" onClick={() => scrollTo('question-bank')}>
            Generate Questions
          </button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">140+</span>
            <span className="hero-stat-label">Roles Supported</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">75+</span>
            <span className="hero-stat-label">Interview Questions</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">100%</span>
            <span className="hero-stat-label">Free & Private</span>
          </div>
        </div>
      </div>
    </section>
  );
}
