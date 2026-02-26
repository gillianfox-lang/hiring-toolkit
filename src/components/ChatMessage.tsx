import './ChatMessage.css';

interface Props {
  sender: 'ai' | 'user';
  name: string;
  message: string;
}

export default function ChatMessage({ sender, name, message }: Props) {
  return (
    <div className={`chat-message chat-message--${sender}`}>
      <div className="chat-avatar">
        {sender === 'ai' ? '🤖' : '👤'}
      </div>
      <div className="chat-bubble">
        <span className="chat-name">{name}</span>
        <p className="chat-text">{message}</p>
      </div>
    </div>
  );
}
