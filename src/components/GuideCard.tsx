import { useState } from 'react';
import type { Guide } from '../data/guides';
import './GuideCard.css';

interface Props {
  guide: Guide;
}

export default function GuideCard({ guide }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`guide-card ${expanded ? 'guide-card--expanded' : ''}`}>
      <button
        className="guide-card-header"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="guide-card-icon">{guide.icon}</span>
        <div className="guide-card-info">
          <h4 className="guide-card-title">{guide.title}</h4>
          <p className="guide-card-summary">{guide.summary}</p>
        </div>
        <span className={`guide-card-arrow ${expanded ? 'open' : ''}`}>
          &#9662;
        </span>
      </button>

      {expanded && (
        <div className="guide-card-content">
          {guide.content.map((block, i) => (
            <div key={i} className="guide-block">
              {block.split('\n').map((line, j) => {
                if (line.startsWith('**') && line.endsWith('**')) {
                  return (
                    <h5 key={j} className="guide-block-heading">
                      {line.replace(/\*\*/g, '')}
                    </h5>
                  );
                }
                if (line.startsWith('**') && line.includes(':**')) {
                  const parts = line.split(':**');
                  return (
                    <h5 key={j} className="guide-block-heading">
                      {parts[0].replace(/\*\*/g, '')}:
                      {parts[1] && (
                        <span className="guide-block-heading-sub">
                          {parts[1].replace(/\*\*/g, '')}
                        </span>
                      )}
                    </h5>
                  );
                }
                if (line.startsWith('• ')) {
                  const text = line.slice(2);
                  if (text.startsWith('**')) {
                    const match = text.match(/^\*\*(.+?)\*\*(.*)$/);
                    if (match) {
                      return (
                        <p key={j} className="guide-bullet">
                          <strong>{match[1]}</strong>{match[2]}
                        </p>
                      );
                    }
                  }
                  return (
                    <p key={j} className="guide-bullet">
                      {text}
                    </p>
                  );
                }
                if (line.trim() === '') return null;
                return (
                  <p key={j} className="guide-paragraph">
                    {line.replace(/\*\*/g, '')}
                  </p>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
