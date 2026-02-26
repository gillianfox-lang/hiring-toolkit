import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <button className="navbar-brand" onClick={() => handleNav('hero')}>
          <span className="navbar-logo">HM</span>
          <span className="navbar-title">Hiring Toolkit</span>
        </button>
        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><button onClick={() => handleNav('hero')}>Home</button></li>
          <li><button onClick={() => handleNav('mock-interview')}>Mock Interview</button></li>
          <li><button onClick={() => handleNav('question-bank')}>Question Bank</button></li>
          <li><button onClick={() => handleNav('training')}>Training</button></li>
          <li><button onClick={() => handleNav('playbook')}>Playbook</button></li>
          <li><button onClick={() => handleNav('guides')}>Guides</button></li>
        </ul>
      </div>
    </nav>
  );
}
