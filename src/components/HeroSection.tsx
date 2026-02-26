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
          Sharpen your interviewing skills with AI-powered mock interviews and
          comprehensive guides. Practice real scenarios, get instant feedback,
          and build confidence to find the best talent for your team.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => scrollTo('mock-interview')}>
            Start Mock Interview
          </button>
          <button className="btn btn-secondary" onClick={() => scrollTo('question-bank')}>
            Generate Questions
          </button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">4</span>
            <span className="hero-stat-label">Interview Scenarios</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">60+</span>
            <span className="hero-stat-label">Question Bank</span>
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
