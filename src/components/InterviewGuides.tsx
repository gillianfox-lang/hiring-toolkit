import { guides } from '../data/guides';
import GuideCard from './GuideCard';
import './InterviewGuides.css';

export default function InterviewGuides() {
  return (
    <section id="guides" className="interview-guides">
      <div className="interview-guides-inner">
        <h2 className="section-heading">Interview Guides</h2>
        <p className="section-subheading">
          Essential resources to help you conduct fair, effective, and legally
          compliant interviews every time.
        </p>
        <div className="guides-grid">
          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </div>
    </section>
  );
}
