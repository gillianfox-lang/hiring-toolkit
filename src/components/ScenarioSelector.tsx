import { scenarios, type Scenario } from '../data/scenarios';
import './ScenarioSelector.css';

interface Props {
  onSelect: (scenario: Scenario) => void;
  apiKey: string;
  onApiKeyChange: (key: string) => void;
}

export default function ScenarioSelector({ onSelect, apiKey, onApiKeyChange }: Props) {
  return (
    <div className="scenario-selector">
      <h3 className="scenario-selector-title">Choose a Scenario</h3>
      <p className="scenario-selector-subtitle">
        Select an interview scenario to practice. Each session is 6-8 turns with
        branching dialogue and feedback at the end.
      </p>

      <div className="scenario-api-key">
        <label className="scenario-api-key-label" htmlFor="openai-key">
          OpenAI API Key
          <span className="scenario-api-key-badge">Optional</span>
        </label>
        <input
          id="openai-key"
          type="password"
          className="scenario-api-key-input"
          placeholder="sk-..."
          value={apiKey}
          onChange={e => onApiKeyChange(e.target.value)}
        />
        <p className="scenario-api-key-help">
          Paste a key from{' '}
          <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer">
            platform.openai.com/api-keys
          </a>{' '}
          to unlock dynamic AI-powered candidate responses instead of pre-scripted dialogue.
          Your key is never stored — it's only used during this session.
        </p>
      </div>

      <div className="scenario-grid">
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            className="scenario-card"
            onClick={() => onSelect(scenario)}
          >
            <span className="scenario-icon">{scenario.icon}</span>
            <h4 className="scenario-card-title">{scenario.title}</h4>
            <p className="scenario-card-desc">{scenario.description}</p>
            <span className="scenario-card-cta">Start Practice &rarr;</span>
          </button>
        ))}
      </div>
    </div>
  );
}
