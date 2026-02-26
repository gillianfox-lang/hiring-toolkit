export type ResponseQuality = 'excellent' | 'adequate' | 'poor';

export interface DialogOption {
  text: string;
  score: number;
  nextId: string | null;
  quality: ResponseQuality;
  coachingTip: string;
  category: 'questioning' | 'rapport' | 'structure' | 'bias-awareness';
}

export interface DialogNode {
  id: string;
  aiMessage: string;
  options?: DialogOption[];
}

export interface DynamicFeedback {
  range: [number, number]; // min/max score out of 10
  strengths: string[];
  improvements: string[];
  tips: string[];
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  icon: string;
  aiName: string;
  aiRole: string;
  avatar: string;
  totalTurns: number;
  dialogTree: DialogNode[];
  dynamicFeedback: DynamicFeedback[];
  feedback: {
    strengths: string[];
    improvements: string[];
    tips: string[];
  };
}

export const scenarios: Scenario[] = [
  {
    id: 'behavioral',
    title: 'Behavioral Interview',
    description: 'Practice evaluating leadership, teamwork, and conflict resolution through behavioral questions.',
    icon: '🗣️',
    aiName: 'Alex Chen',
    aiRole: 'Senior Software Engineer Candidate',
    avatar: '/avatars/alex-chen.svg',
    totalTurns: 6,
    dialogTree: [
      {
        id: 'start',
        aiMessage: "Hi! I'm Alex Chen, and I'm excited to interview for the Senior Software Engineer role. I've been in the industry for about 8 years. Ready to get started whenever you are!",
        options: [
          { text: "Welcome, Alex! Let's start. Tell me about a time you led a team through a difficult project.", score: 3, nextId: 'q1_good', quality: 'excellent', coachingTip: 'Great opening! You used a structured behavioral question that invites a STAR-format answer.', category: 'questioning' },
          { text: "So, what makes you think you're qualified for this role?", score: 1, nextId: 'q1_poor', quality: 'poor', coachingTip: 'This question puts the candidate on the defensive. Try starting with a specific behavioral question instead.', category: 'rapport' },
          { text: "Thanks for coming in. Can you walk me through a challenging leadership situation you've handled?", score: 2, nextId: 'q1_ok', quality: 'adequate', coachingTip: 'Good start, but this is a bit broad. Adding specifics like "team project" or "deadline pressure" helps focus the answer.', category: 'questioning' },
        ],
      },
      {
        id: 'q1_good',
        aiMessage: "Great question! At my last company, I led a team of 6 engineers to migrate our monolith to microservices. We had a tight 4-month deadline and some team members were resistant to the change. I held weekly 1-on-1s to understand their concerns and created a phased migration plan so nobody felt overwhelmed.",
        options: [
          { text: "That's interesting. Can you tell me specifically what the outcome was? How did you measure success?", score: 3, nextId: 'q2_good', quality: 'excellent', coachingTip: 'Excellent follow-up! Asking for measurable outcomes gets you concrete evidence of impact.', category: 'questioning' },
          { text: "Sounds good. What's your greatest weakness?", score: 1, nextId: 'q2_poor', quality: 'poor', coachingTip: 'Avoid cliché questions. Stay in the STAR flow — probe deeper into the situation they just described.', category: 'structure' },
          { text: "How did the resistant team members respond over time?", score: 2, nextId: 'q2_ok', quality: 'adequate', coachingTip: 'Good probing, but asking for quantifiable results would give you stronger evaluation data.', category: 'questioning' },
        ],
      },
      {
        id: 'q1_poor',
        aiMessage: "Oh, well... I have 8 years of experience in full-stack development. I've led multiple teams, worked on large-scale systems, and have strong problem-solving skills. I believe my track record speaks for itself.",
        options: [
          { text: "Let me rephrase — can you share a specific example of a challenging project you led?", score: 3, nextId: 'q2_good', quality: 'excellent', coachingTip: 'Good recovery! You redirected to a behavioral question. Nice course correction.', category: 'structure' },
          { text: "Right. And where do you see yourself in 5 years?", score: 1, nextId: 'q2_poor', quality: 'poor', coachingTip: 'This generic question won\'t reveal job-relevant information. Stick to behavioral evidence.', category: 'questioning' },
          { text: "Can you give me a concrete example of one of those team leadership experiences?", score: 2, nextId: 'q2_ok', quality: 'adequate', coachingTip: 'Decent follow-up. Being even more specific about what "challenging" means would help.', category: 'questioning' },
        ],
      },
      {
        id: 'q1_ok',
        aiMessage: "Sure! I once had to mediate between two senior engineers who disagreed on the architecture for a new feature. One wanted a microservices approach, the other preferred extending the monolith. I facilitated a design review session where both could present their cases with data.",
        options: [
          { text: "How did you ensure both felt heard? What was the final decision and its impact?", score: 3, nextId: 'q2_good', quality: 'excellent', coachingTip: 'Great multi-part follow-up! You\'re probing both the process and the outcome.', category: 'questioning' },
          { text: "OK, next question. Why are you leaving your current company?", score: 1, nextId: 'q2_poor', quality: 'poor', coachingTip: 'Don\'t abandon a rich behavioral response. Follow up before moving on.', category: 'structure' },
          { text: "What did you learn from that experience?", score: 2, nextId: 'q2_ok', quality: 'adequate', coachingTip: 'Good reflective question, but asking about concrete outcomes first would be stronger.', category: 'questioning' },
        ],
      },
      {
        id: 'q2_good',
        aiMessage: "We reduced deployment time by 60% and system downtime by 80%. I measured success through deployment frequency, error rates, and team satisfaction surveys. The team went from skeptical to fully bought in — two of them even presented our approach at a tech conference.",
        options: [
          { text: "Tell me about a time you had to give difficult feedback to a team member. How did you approach it?", score: 3, nextId: 'q3_good', quality: 'excellent', coachingTip: 'Strong transition to a new competency area (conflict management) using a clear behavioral prompt.', category: 'structure' },
          { text: "Nice. Do you have any questions for me?", score: 1, nextId: 'q3_poor', quality: 'poor', coachingTip: 'It\'s too early to end — you\'ve only covered one competency. Plan for 5-6 questions minimum.', category: 'structure' },
          { text: "Have you ever had a project that didn't go as planned? What happened?", score: 2, nextId: 'q3_ok', quality: 'adequate', coachingTip: 'Decent question but still in the "project" domain. Branch out to interpersonal or leadership topics.', category: 'structure' },
        ],
      },
      {
        id: 'q2_poor',
        aiMessage: "I'm looking for new challenges and growth opportunities. My current company is great, but I feel I've plateaued in my role and want to take on more responsibility.",
        options: [
          { text: "I appreciate that. Let's go back to behavioral questions — tell me about a time you gave someone difficult feedback.", score: 3, nextId: 'q3_good', quality: 'excellent', coachingTip: 'Good recovery bringing the interview back to structured behavioral questions.', category: 'structure' },
          { text: "What salary are you looking for?", score: 1, nextId: 'q3_poor', quality: 'poor', coachingTip: 'Compensation discussions should be handled by HR/recruiting, not during behavioral interviews.', category: 'structure' },
          { text: "Can you describe a conflict you had with a colleague and how you resolved it?", score: 2, nextId: 'q3_ok', quality: 'adequate', coachingTip: 'A solid behavioral question. Add context like "in a work setting" to keep it professional.', category: 'questioning' },
        ],
      },
      {
        id: 'q2_ok',
        aiMessage: "I learned that technical decisions are rarely just technical — they involve people's pride, expertise, and comfort zones. Now I always start architecture discussions by aligning on criteria before jumping to solutions. It makes the process much smoother.",
        options: [
          { text: "Great self-awareness. Can you share an example where you had to deliver constructive feedback to someone?", score: 3, nextId: 'q3_good', quality: 'excellent', coachingTip: 'Nice! You acknowledged their insight and transitioned to a new competency area.', category: 'rapport' },
          { text: "OK, let's move on. What's your favorite programming language?", score: 1, nextId: 'q3_poor', quality: 'poor', coachingTip: 'Preference questions don\'t assess competency. Stay focused on behavioral evidence.', category: 'questioning' },
          { text: "How do you handle situations where a project is falling behind schedule?", score: 2, nextId: 'q3_ok', quality: 'adequate', coachingTip: 'Good topic, but phrasing it as "tell me about a time when..." gets better behavioral data.', category: 'questioning' },
        ],
      },
      {
        id: 'q3_good',
        aiMessage: "I had a junior developer who was consistently missing code review standards. Rather than calling it out publicly, I scheduled a private 1-on-1. I started by acknowledging their strong work ethic, then shared specific examples of the issues. I offered to pair program to help them improve. Within a month, their code quality improved significantly.",
        options: [
          { text: "How do you handle disagreements with your own manager about technical direction?", score: 3, nextId: 'q4_good', quality: 'excellent', coachingTip: 'Great pivot to exploring upward management — this reveals maturity and communication skills.', category: 'questioning' },
          { text: "That's fine. We're running out of time — any questions?", score: 1, nextId: 'q4_poor', quality: 'poor', coachingTip: 'Rushing to close cuts short valuable insights. Plan your interview time better.', category: 'structure' },
          { text: "What would you do differently if the person hadn't been receptive to the feedback?", score: 2, nextId: 'q4_ok', quality: 'adequate', coachingTip: 'Good hypothetical follow-up, but asking for a real example would yield stronger evidence.', category: 'questioning' },
        ],
      },
      {
        id: 'q3_poor',
        aiMessage: "I really enjoy TypeScript and Go. TypeScript because of the type safety it brings to web development, and Go for its performance in backend services. But I'm adaptable — I've worked with Python, Java, and Rust too.",
        options: [
          { text: "Let me ask a behavioral question — how do you handle disagreements with stakeholders about project priorities?", score: 3, nextId: 'q4_good', quality: 'excellent', coachingTip: 'Great course correction — you recognized the tangent and redirected to behavioral evidence.', category: 'structure' },
          { text: "Cool. We use JavaScript here. Is that OK?", score: 1, nextId: 'q4_poor', quality: 'poor', coachingTip: 'This is a closed yes/no question that reveals nothing about competency.', category: 'questioning' },
          { text: "Tell me about a time you had to work with a technology you weren't familiar with.", score: 2, nextId: 'q4_ok', quality: 'adequate', coachingTip: 'Good behavioral framing. Adding context like "on a tight deadline" would sharpen it.', category: 'questioning' },
        ],
      },
      {
        id: 'q3_ok',
        aiMessage: "I prioritize transparency with stakeholders. In one case, we had a deadline we were going to miss. Instead of hiding it, I proactively communicated the delay, explained why, and proposed a revised timeline with a reduced MVP scope. The client appreciated the honesty and we delivered successfully.",
        options: [
          { text: "Excellent. Tell me about a time you disagreed with your manager's technical decision. How did you handle it?", score: 3, nextId: 'q4_good', quality: 'excellent', coachingTip: 'Positive acknowledgment plus a new behavioral question — smooth transition.', category: 'rapport' },
          { text: "OK. We're done. I'll let you know.", score: 1, nextId: 'q4_poor', quality: 'poor', coachingTip: 'Abrupt endings create a poor candidate experience and limit your evaluation data.', category: 'rapport' },
          { text: "How do you balance delivering quickly versus maintaining code quality?", score: 2, nextId: 'q4_ok', quality: 'adequate', coachingTip: 'Relevant topic, but framing as a hypothetical. "Tell me about a time..." is stronger.', category: 'questioning' },
        ],
      },
      {
        id: 'q4_good',
        aiMessage: "My manager once wanted to adopt a new framework mid-project. I thought it was risky. I put together a quick proof-of-concept showing the migration cost versus the benefit, and presented it respectfully. We agreed to use the new framework on the next project instead. It was a good exercise in backing up opinions with data.",
        options: [
          { text: "Great example. Finally, how do you approach building an inclusive team culture?", score: 3, nextId: 'q5_good', quality: 'excellent', coachingTip: 'Excellent! You\'re assessing values alignment and DEI awareness — critical for senior roles.', category: 'bias-awareness' },
          { text: "Alright, any questions for me?", score: 1, nextId: 'q5_poor', quality: 'poor', coachingTip: 'You\'ve only explored a few areas. Always include questions about values and teamwork.', category: 'structure' },
          { text: "What's your approach to mentoring more junior engineers?", score: 2, nextId: 'q5_ok', quality: 'adequate', coachingTip: 'Relevant for a senior role. Asking for a specific example would strengthen this.', category: 'questioning' },
        ],
      },
      {
        id: 'q4_poor',
        aiMessage: "Oh, already? I was hoping to share more about my experience. But sure — could you tell me about the team I'd be joining?",
        options: [
          { text: "Actually, let me ask one more — how do you foster a positive and inclusive team environment?", score: 3, nextId: 'q5_good', quality: 'excellent', coachingTip: 'Good save! The candidate flagged the abruptness and you adapted.', category: 'rapport' },
          { text: "It's a good team. HR will follow up. Thanks.", score: 1, nextId: 'q5_poor', quality: 'poor', coachingTip: 'Dismissive closing leaves a negative impression. Always end professionally.', category: 'rapport' },
          { text: "Sure, the team is great. But first, what's your approach to mentoring?", score: 2, nextId: 'q5_ok', quality: 'adequate', coachingTip: 'Decent recovery, though answering their question first would build better rapport.', category: 'rapport' },
        ],
      },
      {
        id: 'q4_ok',
        aiMessage: "I believe in sustainable pace. I've seen teams burn out from constant crunch. I advocate for realistic sprint planning, automated testing to catch regressions, and code review practices that balance thoroughness with speed. Technical debt should be addressed continuously, not in big bang rewrites.",
        options: [
          { text: "That's a mature perspective. Last question — how do you promote diversity and inclusion in your teams?", score: 3, nextId: 'q5_good', quality: 'excellent', coachingTip: 'You\'re covering DEI — essential for evaluating leadership candidates.', category: 'bias-awareness' },
          { text: "Great. We're out of time. Thanks for coming in.", score: 1, nextId: 'q5_poor', quality: 'poor', coachingTip: 'Skipping DEI-related questions misses a key competency area for senior roles.', category: 'structure' },
          { text: "How do you handle mentoring junior developers while balancing your own workload?", score: 2, nextId: 'q5_ok', quality: 'adequate', coachingTip: 'Good leadership question. A STAR-format prompt would yield richer answers.', category: 'questioning' },
        ],
      },
      {
        id: 'q5_good',
        aiMessage: "I actively work to create psychological safety. In my last team, I introduced anonymous feedback channels, ensured meeting facilitation rotated so quieter voices got heard, and championed diverse hiring panels. I believe diverse teams build better products. Thank you for asking such thoughtful questions today!",
        options: [
          { text: "Thank you, Alex. Those are excellent examples. I'll share my notes with the team and we'll be in touch about next steps. Do you have any questions for me?", score: 3, nextId: null, quality: 'excellent', coachingTip: 'Perfect closing — professional, warm, and gives the candidate time to ask questions.', category: 'rapport' },
          { text: "OK, that's it. We'll let you know.", score: 1, nextId: null, quality: 'poor', coachingTip: 'Always invite candidate questions — it\'s a two-way evaluation.', category: 'rapport' },
          { text: "Thanks for sharing. We'll follow up with next steps soon.", score: 2, nextId: null, quality: 'adequate', coachingTip: 'Decent close but invite their questions to improve candidate experience.', category: 'rapport' },
        ],
      },
      {
        id: 'q5_poor',
        aiMessage: "OK, thanks for the opportunity. I hope to hear from you soon.",
        options: [
          { text: "Actually, before you go — is there anything you'd like to share that we didn't cover? I want to make sure you have a complete experience.", score: 3, nextId: null, quality: 'excellent', coachingTip: 'Excellent recovery! Giving candidates a final chance shows respect and may reveal new insights.', category: 'rapport' },
          { text: "Bye!", score: 1, nextId: null, quality: 'poor', coachingTip: 'An abrupt goodbye damages employer brand. Always close professionally.', category: 'rapport' },
          { text: "Thanks, Alex. We'll reach out within a week.", score: 2, nextId: null, quality: 'adequate', coachingTip: 'Acceptable close. Offering a chance for their questions would be better.', category: 'rapport' },
        ],
      },
      {
        id: 'q5_ok',
        aiMessage: "I dedicate time each week for mentoring — usually 2-3 hours of pair programming or code reviews with detailed written feedback. I also create documentation and internal tech talks to scale knowledge sharing beyond 1-on-1 interactions. It's an investment that pays off in team velocity long-term.",
        options: [
          { text: "That's a thorough approach. Thank you for the great conversation, Alex. I'll discuss with the team and we'll be in touch. Any questions for me?", score: 3, nextId: null, quality: 'excellent', coachingTip: 'Strong closing — you summarized positively and invited their questions.', category: 'rapport' },
          { text: "Alright. Thanks for coming in.", score: 1, nextId: null, quality: 'poor', coachingTip: 'Too brief. A warm closing impacts candidate experience significantly.', category: 'rapport' },
          { text: "Good to hear. We'll follow up with you soon about next steps.", score: 2, nextId: null, quality: 'adequate', coachingTip: 'Fine close, but asking for their questions would round things out.', category: 'rapport' },
        ],
      },
    ],
    dynamicFeedback: [
      {
        range: [8, 10],
        strengths: ['Consistently used structured behavioral questions (STAR method)', 'Asked excellent probing follow-ups that revealed depth', 'Maintained professional rapport throughout', 'Covered multiple competency areas systematically'],
        improvements: ['Consider adding more situation-specific constraints to questions', 'Try varying question types between past behavior and situational'],
        tips: ['You\'re performing at a high level — focus on calibrating your scoring rubric', 'Consider recording interviews (with permission) for self-review'],
      },
      {
        range: [5, 7],
        strengths: ['Showed some good questioning instincts', 'Covered relevant competency areas'],
        improvements: ['Stay in the STAR framework longer before moving on', 'Avoid generic questions that don\'t reveal job-relevant evidence', 'Plan your question sequence to cover all key competencies'],
        tips: ['Prepare 6-8 behavioral questions in advance and practice transitions', 'Use the candidate\'s responses to guide natural follow-ups', 'Focus on "Tell me about a time when..." rather than hypotheticals'],
      },
      {
        range: [0, 4],
        strengths: ['You completed the interview — every practice session builds skill'],
        improvements: ['Avoid cliché questions (greatest weakness, 5-year plan, salary expectations)', 'Don\'t rush the interview — allow time for thorough responses', 'Stay focused on behavioral evidence rather than opinions or preferences', 'Close the interview professionally with time for candidate questions'],
        tips: ['Study the STAR method: Situation, Task, Action, Result', 'Prepare a structured interview guide before each interview', 'Focus on one competency per question and probe deeply', 'Practice active listening — the best follow-ups come from what the candidate says'],
      },
    ],
    feedback: {
      strengths: [
        'Used structured behavioral questions (STAR method)',
        'Asked probing follow-up questions for deeper insights',
        'Maintained professional and welcoming demeanor',
        'Evaluated both technical and interpersonal competencies',
      ],
      improvements: [
        'Avoid generic or cliché questions (greatest weakness, 5-year plan)',
        'Stay focused on behavioral evidence rather than hypotheticals',
        'Allow adequate time for candidate responses',
        'Ensure questions are job-relevant and structured',
      ],
      tips: [
        'Prepare a consistent set of behavioral questions for all candidates to ensure fair comparison',
        'Use the STAR method (Situation, Task, Action, Result) to guide follow-up probing',
        'Take notes during the interview to avoid recency bias when evaluating',
        'End on a positive note and give candidates time to ask their own questions',
      ],
    },
  },
  {
    id: 'technical',
    title: 'Technical Screen',
    description: 'Practice evaluating technical candidates with system design and problem-solving questions.',
    icon: '💻',
    aiName: 'Jordan Rivera',
    aiRole: 'Full-Stack Developer Candidate',
    avatar: '/avatars/jordan-rivera.svg',
    totalTurns: 6,
    dialogTree: [
      {
        id: 'start',
        aiMessage: "Hello! I'm Jordan Rivera. I'm interviewing for the Full-Stack Developer position. I have 5 years of experience working primarily with React, Node.js, and PostgreSQL. Looking forward to our conversation!",
        options: [
          { text: "Welcome, Jordan! Let's start with a technical question. Can you walk me through how you'd design a real-time notification system?", score: 3, nextId: 'q1_good', quality: 'excellent', coachingTip: 'Opening with a system design question immediately assesses architectural thinking and practical experience — far more revealing than asking about years of experience.', category: 'questioning' },
          { text: "Can you rate your skills from 1-10 in JavaScript, React, and Node?", score: 1, nextId: 'q1_poor', quality: 'poor', coachingTip: 'Self-ratings are unreliable and introduce self-assessment bias. Ask candidates to demonstrate skill through problem-solving, not self-grading.', category: 'questioning' },
          { text: "Hi Jordan! Tell me about the most complex technical system you've built.", score: 2, nextId: 'q1_ok', quality: 'adequate', coachingTip: 'This is a decent opener, but "most complex" is vague. A specific domain constraint (like "real-time" or "high-traffic") helps you compare candidates more consistently.', category: 'questioning' },
        ],
      },
      {
        id: 'q1_good',
        aiMessage: "I'd use WebSockets for real-time delivery — probably Socket.io on the Node backend. I'd have a notification service that publishes events to a message queue like Redis Pub/Sub. The frontend would maintain a persistent WebSocket connection. For offline users, I'd store notifications in PostgreSQL and deliver them when they reconnect. I'd also add a REST fallback for polling.",
        options: [
          { text: "Good foundation. How would you handle scaling this to 100,000 concurrent users? What bottlenecks would you anticipate?", score: 3, nextId: 'q2_good', quality: 'excellent', coachingTip: 'Excellent progressive difficulty — probing scalability reveals whether the candidate understands production constraints, not just theoretical design.', category: 'questioning' },
          { text: "OK sounds fine. Next — what's the difference between let and const?", score: 1, nextId: 'q2_poor', quality: 'poor', coachingTip: 'Jumping to trivia questions after a sophisticated answer signals poor interview planning. Build on what the candidate just said to go deeper.', category: 'structure' },
          { text: "How would you handle message ordering and guaranteed delivery?", score: 2, nextId: 'q2_ok', quality: 'adequate', coachingTip: 'Good follow-up into a specific technical concern. Asking about scalability trade-offs would reveal even more depth of thinking.', category: 'questioning' },
        ],
      },
      {
        id: 'q1_poor',
        aiMessage: "Hmm, I'd say JavaScript 8, React 9, Node 7. But I think skill ratings can be subjective — I'd rather demonstrate my abilities through problem-solving if that works for you?",
        options: [
          { text: "Fair point. Let's do that — how would you approach designing a real-time notification system?", score: 3, nextId: 'q2_good', quality: 'excellent', coachingTip: 'Great course correction — the candidate gave you a cue and you took it. Pivoting to a design problem is the right move after a weak opener.', category: 'structure' },
          { text: "What other languages do you know?", score: 1, nextId: 'q2_poor', quality: 'poor', coachingTip: 'Listing languages still does not reveal problem-solving ability. Shift to applied questions that require the candidate to think through a real challenge.', category: 'questioning' },
          { text: "Sure, tell me about a technically challenging problem you solved recently.", score: 2, nextId: 'q2_ok', quality: 'adequate', coachingTip: 'Better than another self-rating, but you\'re still letting the candidate choose the domain. A specific design problem gives you a more consistent data point.', category: 'questioning' },
        ],
      },
      {
        id: 'q1_ok',
        aiMessage: "I built an e-commerce platform that handled 50,000 daily transactions. The most complex part was the inventory management system — it needed real-time stock updates across multiple warehouses while preventing overselling. I used optimistic locking in PostgreSQL and event-driven architecture with message queues.",
        options: [
          { text: "Interesting. Can you explain the trade-offs of optimistic vs. pessimistic locking in this context? When would you choose one over the other?", score: 3, nextId: 'q2_good', quality: 'excellent', coachingTip: 'Perfect follow-up — asking for trade-offs tests conceptual depth rather than just knowledge recall, which is a hallmark of strong technical interviewing.', category: 'questioning' },
          { text: "Did you use any frameworks?", score: 1, nextId: 'q2_poor', quality: 'poor', coachingTip: 'Framework questions reveal tool familiarity, not problem-solving ability. Always probe the thinking behind technical choices, not just what tools were used.', category: 'questioning' },
          { text: "How did you test that system? What was your approach to ensuring data consistency?", score: 2, nextId: 'q2_ok', quality: 'adequate', coachingTip: 'Asking about testing shows engineering maturity. Going deeper into the locking trade-offs would reveal even stronger conceptual understanding.', category: 'questioning' },
        ],
      },
      {
        id: 'q2_good',
        aiMessage: "For scaling, the main bottleneck would be WebSocket connections per server. I'd use horizontal scaling with sticky sessions or a shared state store. Redis cluster for Pub/Sub would help distribute the message load. I'd also implement connection pooling and consider using a dedicated WebSocket gateway service separate from the API servers.",
        options: [
          { text: "Now let's switch gears. Can you write pseudocode for a function that finds the longest common subsequence of two strings?", score: 3, nextId: 'q3_good', quality: 'excellent', coachingTip: 'Moving from system design to a coding problem tests breadth and progressive difficulty — a strong structure for a full-stack technical screen.', category: 'structure' },
          { text: "What IDE do you use?", score: 1, nextId: 'q3_poor', quality: 'poor', coachingTip: 'IDE preference is irrelevant to competency. After a strong scaling answer, probe deeper into the engineering reasoning or move to a coding challenge.', category: 'questioning' },
          { text: "How would you monitor the health of this system in production?", score: 2, nextId: 'q3_ok', quality: 'adequate', coachingTip: 'Production observability is a great follow-up topic showing operational awareness. A shift to a coding challenge would round out your assessment.', category: 'questioning' },
        ],
      },
      {
        id: 'q2_poor',
        aiMessage: "I'm comfortable with Python, Go, and some Rust. I've also worked with Java in enterprise environments. I try to be language-agnostic and focus on fundamentals.",
        options: [
          { text: "Let me give you a design problem. How would you architect a URL shortener service?", score: 3, nextId: 'q3_good', quality: 'excellent', coachingTip: 'Smart pivot to a concrete design problem — URL shorteners are a classic system design question that reveals thinking around scalability, hashing, and storage trade-offs.', category: 'structure' },
          { text: "Which one is your favorite?", score: 1, nextId: 'q3_poor', quality: 'poor', coachingTip: 'Preference questions provide no signal about engineering ability. Every question should help you evaluate a specific technical competency.', category: 'questioning' },
          { text: "Can you describe a project where you had to learn a new technology quickly?", score: 2, nextId: 'q3_ok', quality: 'adequate', coachingTip: 'Adaptability is worth probing, but after a chain of non-technical questions you need to get back to applied problem-solving quickly.', category: 'structure' },
        ],
      },
      {
        id: 'q2_ok',
        aiMessage: "I wrote integration tests with testcontainers for the PostgreSQL interactions, and used property-based testing to generate random concurrent transaction scenarios. We caught several edge cases through chaos engineering — randomly introducing failures in the message queue to ensure the system recovered gracefully.",
        options: [
          { text: "Impressive testing strategy. Let's try a coding problem — can you walk me through how you'd implement an LRU cache?", score: 3, nextId: 'q3_good', quality: 'excellent', coachingTip: 'Acknowledging the answer and transitioning to a coding challenge is excellent structure — it tests both system thinking and algorithmic ability.', category: 'structure' },
          { text: "What code coverage percentage did you target?", score: 1, nextId: 'q3_poor', quality: 'poor', coachingTip: 'Coverage percentages are a poor proxy for test quality. Ask about testing strategy and decision-making instead of specific metrics.', category: 'questioning' },
          { text: "How do you decide what level of testing is appropriate for a given feature?", score: 2, nextId: 'q3_ok', quality: 'adequate', coachingTip: 'Good question about engineering judgment. Moving to an algorithmic or design challenge would give you a more comprehensive technical picture.', category: 'questioning' },
        ],
      },
      {
        id: 'q3_good',
        aiMessage: "For an LRU cache, I'd use a hash map for O(1) lookups combined with a doubly-linked list to track access order. The hash map stores key-to-node references, and the linked list maintains recency. On access, move the node to the head. On insertion when at capacity, evict the tail node. Both operations are O(1).",
        options: [
          { text: "Well explained. What if we needed this cache to be thread-safe? How would your implementation change?", score: 3, nextId: 'q4_good', quality: 'excellent', coachingTip: 'Adding a concurrency constraint is textbook progressive difficulty — it pushes beyond a memorized solution into applied problem-solving under new constraints.', category: 'questioning' },
          { text: "OK, sounds right. Moving on — tell me about yourself.", score: 1, nextId: 'q4_poor', quality: 'poor', coachingTip: 'Abandoning a rich technical answer for a generic question wastes evaluation time. Always probe the reasoning before moving on.', category: 'structure' },
          { text: "How would you decide on the eviction policy? Are there cases where LRU isn't the best choice?", score: 2, nextId: 'q4_ok', quality: 'adequate', coachingTip: 'Asking about eviction trade-offs shows good depth. Adding a concurrency or scaling constraint would push the candidate further and reveal more.', category: 'questioning' },
        ],
      },
      {
        id: 'q3_poor',
        aiMessage: "I mostly use VS Code with a bunch of extensions — ESLint, Prettier, GitLens. For backend work in Go, I sometimes use GoLand. I'm pretty productive in either environment.",
        options: [
          { text: "Let's focus on technical depth. Can you explain the trade-offs between SQL and NoSQL databases for a high-traffic application?", score: 3, nextId: 'q4_good', quality: 'excellent', coachingTip: 'Good recovery — database trade-off questions reveal system design maturity and the ability to reason about real architectural decisions.', category: 'structure' },
          { text: "Do you prefer tabs or spaces?", score: 1, nextId: 'q4_poor', quality: 'poor', coachingTip: 'This is the definition of a trivia question — it tells you nothing about a candidate\'s ability to write correct, maintainable, or scalable code.', category: 'questioning' },
          { text: "How do you approach debugging a performance issue in a production application?", score: 2, nextId: 'q4_ok', quality: 'adequate', coachingTip: 'Debugging methodology is a valid technical question. A system design or algorithmic challenge would round out a more complete assessment.', category: 'questioning' },
        ],
      },
      {
        id: 'q3_ok',
        aiMessage: "It depends on the risk and criticality. For payment processing, I'd aim for near-100% coverage with integration tests. For a marketing page, unit tests on business logic and E2E for critical paths is sufficient. I use the testing pyramid as a guide — lots of unit tests, fewer integration tests, minimal E2E tests.",
        options: [
          { text: "Practical approach. Let me give you a system design question — how would you design the backend for a collaborative document editor like Google Docs?", score: 3, nextId: 'q4_good', quality: 'excellent', coachingTip: 'Escalating to a complex system design problem like collaborative editing tests understanding of real-time sync, conflict resolution, and distributed data — excellent progression.', category: 'structure' },
          { text: "What testing framework do you use?", score: 1, nextId: 'q4_poor', quality: 'poor', coachingTip: 'Framework preference is trivia. The candidate just demonstrated solid reasoning — probe that thinking further rather than asking about tool names.', category: 'questioning' },
          { text: "How do you handle testing for microservices where you have cross-service dependencies?", score: 2, nextId: 'q4_ok', quality: 'adequate', coachingTip: 'Good extension of the testing topic into distributed systems. A pivot to a new design problem would round out your evaluation more effectively.', category: 'questioning' },
        ],
      },
      {
        id: 'q4_good',
        aiMessage: "For thread safety, I'd add a read-write lock — read lock for gets (allows concurrent reads), write lock for puts and evictions. Alternatively, I could use a concurrent hash map with segmented locking for better throughput. In Java, ConcurrentHashMap with a synchronized linked list, or in Go, sync.RWMutex. There's a trade-off between contention and consistency.",
        options: [
          { text: "Excellent. Last question — how do you stay current with evolving technologies and make decisions about adopting new tools?", score: 3, nextId: 'q5_good', quality: 'excellent', coachingTip: 'Closing with a question about technology evaluation assesses engineering judgment and intellectual curiosity — key traits for long-term team members.', category: 'questioning' },
          { text: "OK we're done. Thanks.", score: 1, nextId: 'q5_poor', quality: 'poor', coachingTip: 'Ending abruptly after a strong technical answer misses the opportunity to evaluate engineering culture and judgment. Always close with a wrap-up question.', category: 'structure' },
          { text: "What's your experience with distributed systems? Any specific challenges you've faced?", score: 2, nextId: 'q5_ok', quality: 'adequate', coachingTip: 'Distributed systems experience is relevant, but asking for a specific challenge would get you stronger, more comparable behavioral data.', category: 'questioning' },
        ],
      },
      {
        id: 'q4_poor',
        aiMessage: "Ha, spaces — 2-space indent. But I honestly don't mind as long as the team is consistent. I configure whatever the project's linting rules dictate.",
        options: [
          { text: "Let me ask a more technical question — how would you approach optimizing a slow database query?", score: 3, nextId: 'q5_good', quality: 'excellent', coachingTip: 'Good recovery with a practical, job-relevant technical question. Database query optimization is a core skill that reveals both debugging methodology and SQL knowledge.', category: 'structure' },
          { text: "Same here. OK, any questions for me?", score: 1, nextId: 'q5_poor', quality: 'poor', coachingTip: 'Closing after trivial questions means you\'ve collected almost no useful technical evaluation data. Redirect to substantive problems before ending.', category: 'structure' },
          { text: "Tell me about a time you had to optimize application performance. What was the situation?", score: 2, nextId: 'q5_ok', quality: 'adequate', coachingTip: 'Behavioral framing of a technical topic is useful. A direct applied question (like asking them to reason through an optimization approach) would yield more consistent data.', category: 'questioning' },
        ],
      },
      {
        id: 'q4_ok',
        aiMessage: "For cross-service testing, I use contract testing with tools like Pact. Each service defines contracts for its APIs, and consumers verify against those contracts. This catches breaking changes early without needing full end-to-end environments. I supplement with service virtualization for external dependencies.",
        options: [
          { text: "Smart approach. Final question: walk me through your decision-making process when choosing between building a feature from scratch vs. using a third-party library.", score: 3, nextId: 'q5_good', quality: 'excellent', coachingTip: 'Build vs. buy reasoning assesses engineering judgment and awareness of long-term maintainability, security risk, and team capability — exactly the kind of thinking senior engineers must exhibit.', category: 'questioning' },
          { text: "OK, that's all I had. Thanks.", score: 1, nextId: 'q5_poor', quality: 'poor', coachingTip: 'Ending without a closing question misses critical evaluation signal. Always conclude with a question about engineering values or decision-making.', category: 'structure' },
          { text: "How do you manage technical debt in a fast-moving team?", score: 2, nextId: 'q5_ok', quality: 'adequate', coachingTip: 'Technical debt strategy is a meaningful topic that reveals engineering maturity. Asking for a specific example would produce richer, more actionable evaluation data.', category: 'questioning' },
        ],
      },
      {
        id: 'q5_good',
        aiMessage: "I evaluate libraries on maintenance activity, community size, bundle size impact, and security track record. I prototype with new tech before committing. For adopting new tools, I follow a 'boring technology' principle — default to proven solutions unless there's a compelling reason for something new. When experimenting, I timebox it and document findings. Thanks for the great technical discussion today!",
        options: [
          { text: "Thank you, Jordan. You demonstrated strong technical depth and great problem-solving skills. I'll share my detailed notes with the team. Do you have any questions about our tech stack or team?", score: 3, nextId: null, quality: 'excellent', coachingTip: 'Excellent closing — you gave specific, evidence-based praise and invited their questions, which improves candidate experience and reveals genuine interest in the role.', category: 'rapport' },
          { text: "OK, bye.", score: 1, nextId: null, quality: 'poor', coachingTip: 'An abrupt close after a strong interview is jarring. Always provide a warm, specific close that gives the candidate confidence and a clear sense of next steps.', category: 'rapport' },
          { text: "Thanks Jordan, we'll be in touch.", score: 2, nextId: null, quality: 'adequate', coachingTip: 'Acceptable close. Adding specific praise or inviting their questions would improve the candidate experience significantly.', category: 'rapport' },
        ],
      },
      {
        id: 'q5_poor',
        aiMessage: "Sure. Can I ask what the team's tech stack looks like and what challenges you're currently facing?",
        options: [
          { text: "Great question! We use React and Go with PostgreSQL. Our biggest challenge is scaling our real-time features. I appreciate your interest — we'll follow up with next steps.", score: 3, nextId: null, quality: 'excellent', coachingTip: 'Excellent recovery — answering their question substantively demonstrates mutual respect and gives the candidate information they need to make an informed decision.', category: 'rapport' },
          { text: "HR will send that info. Bye.", score: 1, nextId: null, quality: 'poor', coachingTip: 'Dismissing a genuine question damages employer brand. Technical candidates share interview experiences widely — always close with care and respect.', category: 'rapport' },
          { text: "We use pretty standard stuff. Someone will reach out.", score: 2, nextId: null, quality: 'adequate', coachingTip: 'Vague answers to candidate questions feel dismissive. Sharing even basic stack details shows transparency and treats the candidate as a partner in the process.', category: 'rapport' },
        ],
      },
      {
        id: 'q5_ok',
        aiMessage: "I allocate 20% of sprint capacity to tech debt — it's a negotiation with product but I find framing it as risk reduction helps. I maintain a tech debt backlog with business impact scores so we can prioritize. Critical items (security, data integrity) get immediate attention regardless of sprint plans.",
        options: [
          { text: "That's a very pragmatic approach. Thank you for the thorough discussion, Jordan. I'll share my evaluation with the team. What questions do you have about the role?", score: 3, nextId: null, quality: 'excellent', coachingTip: 'Great close — you affirmed their answer and invited their questions, both of which signal professionalism and respect for the candidate\'s experience.', category: 'rapport' },
          { text: "OK. We're done here.", score: 1, nextId: null, quality: 'poor', coachingTip: 'Abrupt closings after strong answers are jarring. A warm, specific close leaves candidates with a positive impression regardless of the hiring outcome.', category: 'rapport' },
          { text: "Good answer. We'll follow up with next steps soon.", score: 2, nextId: null, quality: 'adequate', coachingTip: 'Decent close. Inviting their questions and providing a specific timeline would improve the candidate experience meaningfully.', category: 'rapport' },
        ],
      },
    ],
    dynamicFeedback: [
      {
        range: [8, 10],
        strengths: ['Asked system design questions that reveal architectural depth', 'Applied progressive difficulty — pushed beyond initial answers', 'Probed trade-offs rather than seeking a single "correct" answer', 'Avoided trivia and kept questions job-relevant throughout'],
        improvements: ['Consider varying question domains (design, coding, debugging) more explicitly', 'Try asking "how would you test this?" after every solution to assess engineering maturity'],
        tips: ['You\'re conducting strong technical interviews — focus on calibrating your scoring rubric across candidates', 'Document specific evidence from each answer to avoid recency bias during debrief'],
      },
      {
        range: [5, 7],
        strengths: ['Showed some good instincts for technical depth', 'Asked at least one substantive design or coding question'],
        improvements: ['Avoid trivia questions — syntax, tool preferences, and self-ratings reveal almost nothing', 'Build on candidate answers rather than jumping to new topics', 'Plan a mix of system design, coding, and trade-off questions before the interview'],
        tips: ['Prepare 3-4 system design questions and 2-3 coding problems before every technical screen', 'Always ask "what trade-offs did you consider?" to surface depth of thinking', 'Use progressive difficulty: start broad, then add constraints to test adaptability'],
      },
      {
        range: [0, 4],
        strengths: ['You completed the interview — every practice session builds skill'],
        improvements: ['Stop using self-rating, trivia, and preference questions — they do not predict job performance', 'Never abandon a rich technical answer to move to an unrelated question', 'Structure the interview with explicit competency areas: design, coding, debugging, architecture', 'Always give candidates time to ask questions at the end'],
        tips: ['Study system design interview patterns: caching, messaging, database selection, API design', 'Ask "walk me through your reasoning" to evaluate problem-solving process, not just outcomes', 'Focus on how candidates respond to constraints and follow-up challenges', 'Use a technical rubric with defined levels for each competency before the interview'],
      },
    ],
    feedback: {
      strengths: [
        'Asked system design questions that reveal depth of understanding',
        'Progressively increased question difficulty',
        'Evaluated problem-solving approach, not just correct answers',
        'Covered breadth of technical skills (design, coding, architecture)',
      ],
      improvements: [
        'Avoid trivia or preference questions (tabs vs spaces, favorite language)',
        "Self-rating questions don't reveal actual ability",
        'Focus on problem-solving process over specific tool knowledge',
        'Provide clear problem constraints before expecting solutions',
      ],
      tips: [
        'Use a rubric with specific technical competencies to evaluate consistently',
        'Give candidates time to think — silence is OK during technical questions',
        'Ask "how would you test this?" to evaluate engineering maturity',
        'Focus on understanding trade-offs over knowing the "right" answer',
      ],
    },
  },
  {
    id: 'culture',
    title: 'Culture Fit Assessment',
    description: 'Learn to assess cultural alignment while avoiding bias and maintaining inclusivity.',
    icon: '🤝',
    aiName: 'Sam Patel',
    aiRole: 'Product Manager Candidate',
    avatar: '/avatars/sam-patel.svg',
    totalTurns: 6,
    dialogTree: [
      {
        id: 'start',
        aiMessage: "Hi there! I'm Sam Patel, and I'm thrilled to be interviewing for the Product Manager role. I've spent the last 6 years in product management across both startups and larger companies. I'm excited to learn more about your team culture!",
        options: [
          { text: "Welcome, Sam! We really value collaboration here. Can you tell me about your experience working in cross-functional teams and how you build alignment?", score: 3, nextId: 'q1_good', quality: 'excellent', coachingTip: 'Framing the question around a specific competency (cross-functional alignment) keeps the evaluation structured and avoids vague "tell me about yourself" responses.', category: 'questioning' },
          { text: "Would you describe yourself as more of a work-hard-play-hard type, or do you prefer a quieter environment?", score: 1, nextId: 'q1_poor', quality: 'poor', coachingTip: 'This lifestyle-based question assesses social personality rather than professional values, and can inadvertently screen out candidates based on introversion or life circumstances.', category: 'bias-awareness' },
          { text: "Hi Sam! How would your previous coworkers describe your working style?", score: 2, nextId: 'q1_ok', quality: 'adequate', coachingTip: 'Third-person framing is a useful technique to reduce self-promotion bias. Asking for a specific behavioral example alongside this would make it stronger.', category: 'questioning' },
        ],
      },
      {
        id: 'q1_good',
        aiMessage: "Cross-functional collaboration is my bread and butter. At my last company, I worked with engineering, design, marketing, and sales daily. I've found that the key is establishing shared goals early. I create lightweight PRDs that everyone contributes to, run weekly syncs that are actually useful, and make sure every voice is heard — especially from quieter team members.",
        options: [
          { text: "How do you handle situations where different teams have conflicting priorities? Can you share a specific example?", score: 3, nextId: 'q2_good', quality: 'excellent', coachingTip: 'Asking for a conflict example with a concrete situation reveals how the candidate navigates real organizational tension — a core culture-relevant competency.', category: 'questioning' },
          { text: "Do you like happy hours? Our team goes out every Friday.", score: 1, nextId: 'q2_poor', quality: 'poor', coachingTip: 'Tying cultural fit to social activities like happy hours can disadvantage candidates with caregiving responsibilities, sobriety, or social anxiety — this is affinity bias in action.', category: 'bias-awareness' },
          { text: "What type of company culture brings out your best work?", score: 2, nextId: 'q2_ok', quality: 'adequate', coachingTip: 'Values alignment questions are appropriate for culture assessment, but open-ended phrasing lets candidates give idealized answers. Tie it to a specific behavioral example.', category: 'questioning' },
        ],
      },
      {
        id: 'q1_poor',
        aiMessage: "I'd say I'm adaptable — I can thrive in both high-energy and focused environments. I tend to bring enthusiasm to my work but also value deep focus time. It really depends on what the work demands at any given moment.",
        options: [
          { text: "Let me ask differently — what kind of team dynamics help you do your best work? Can you give examples from past experience?", score: 3, nextId: 'q2_good', quality: 'excellent', coachingTip: 'Good pivot — rephrasing around team dynamics instead of personal style gets at culture-relevant behavior without the lifestyle bias of the previous question.', category: 'structure' },
          { text: "So, are you married? Do you have kids? Just wondering about work-life balance.", score: 1, nextId: 'q2_poor', quality: 'poor', coachingTip: 'Questions about marital status and children are illegal in many jurisdictions and constitute direct bias. Never ask about personal or family status in an interview.', category: 'bias-awareness' },
          { text: "How do you approach building relationships with new teammates?", score: 2, nextId: 'q2_ok', quality: 'adequate', coachingTip: 'Relationship-building is a relevant culture competency. Asking for a specific example from onboarding at a past company would produce stronger evaluation data.', category: 'questioning' },
        ],
      },
      {
        id: 'q1_ok',
        aiMessage: "They'd probably say I'm collaborative but decisive. I gather input from everyone, but I'm not afraid to make a call when needed. They'd also say I'm transparent — I share context freely and explain the 'why' behind decisions, not just the 'what.'",
        options: [
          { text: "Can you share a specific example of when transparency helped resolve a difficult situation?", score: 3, nextId: 'q2_good', quality: 'excellent', coachingTip: 'Perfect follow-up — anchoring the candidate\'s self-description to a specific behavioral example converts an opinion into verifiable evidence.', category: 'questioning' },
          { text: "What do you do for fun outside of work?", score: 1, nextId: 'q2_poor', quality: 'poor', coachingTip: 'Personal hobbies are irrelevant to job performance and can introduce bias — candidates may feel pressure to align their interests with the interviewer\'s preferences.', category: 'bias-awareness' },
          { text: "How do you handle receiving critical feedback from team members?", score: 2, nextId: 'q2_ok', quality: 'adequate', coachingTip: 'Feedback receptivity is an important culture-related competency. This is a solid question; asking for a specific instance would make it more behavioral.', category: 'questioning' },
        ],
      },
      {
        id: 'q2_good',
        aiMessage: "When engineering and sales clashed on feature priorities, I facilitated a session where we mapped customer impact vs. engineering effort for each item. Making the trade-offs visible helped both sides understand each other's constraints. We agreed on a balanced roadmap — revenue-critical features first, but with technical debt sprints built in. Both teams felt heard.",
        options: [
          { text: "How do you ensure diverse perspectives are included in decision-making, especially from underrepresented team members?", score: 3, nextId: 'q3_good', quality: 'excellent', coachingTip: 'Probing inclusion practices directly is essential for culture-add assessment — this reveals whether the candidate is a passive bystander or an active architect of inclusive environments.', category: 'bias-awareness' },
          { text: "Do you consider yourself a leader or a follower?", score: 1, nextId: 'q3_poor', quality: 'poor', coachingTip: 'Binary personality labels are not predictive of job performance and force candidates into artificial categorizations. Ask for behavioral evidence of leadership instead.', category: 'questioning' },
          { text: "What happens when you make a decision that turns out to be wrong?", score: 2, nextId: 'q3_ok', quality: 'adequate', coachingTip: 'Accountability and error recovery are relevant culture competencies. This is a solid question, though probing inclusion or equity would round out the culture picture better here.', category: 'questioning' },
        ],
      },
      {
        id: 'q2_poor',
        aiMessage: "I appreciate you asking, but I'd prefer to keep the focus on my professional qualifications. I'm happy to discuss how I manage my time and energy to be productive at work though!",
        options: [
          { text: "You're absolutely right, I apologize. Let me ask — how do you ensure diverse viewpoints are represented when making product decisions?", score: 3, nextId: 'q3_good', quality: 'excellent', coachingTip: 'Acknowledging the mistake and pivoting to an inclusion question is the ideal recovery — it demonstrates self-awareness and redirects to a legally and ethically sound line of questioning.', category: 'bias-awareness' },
          { text: "Just trying to get to know you. Where did you go to school?", score: 1, nextId: 'q3_poor', quality: 'poor', coachingTip: 'Educational pedigree questions introduce socioeconomic bias and are often irrelevant to job performance. Focus on competencies demonstrated through work, not credentials.', category: 'bias-awareness' },
          { text: "Fair enough. How do you build trust with a new team?", score: 2, nextId: 'q3_ok', quality: 'adequate', coachingTip: 'Trust-building is a legitimate culture topic. Explicitly acknowledging the inappropriate earlier question before moving on would model accountability well.', category: 'rapport' },
        ],
      },
      {
        id: 'q2_ok',
        aiMessage: "I actually welcome critical feedback — it's one of the fastest ways to grow. I have a personal rule: when I receive feedback, I thank the person first, then take 24 hours before responding substantively. This prevents defensive reactions and lets me process it thoughtfully. I've also actively asked for feedback in 360 reviews.",
        options: [
          { text: "That's mature. How do you create an environment where everyone on the team feels comfortable giving that kind of honest feedback?", score: 3, nextId: 'q3_good', quality: 'excellent', coachingTip: 'Excellent pivot — flipping from individual behavior to team environment tests whether the candidate can scale good practices culturally, not just personally.', category: 'questioning' },
          { text: "Have you ever gotten negative performance reviews?", score: 1, nextId: 'q3_poor', quality: 'poor', coachingTip: 'Asking about negative reviews can feel accusatory and is unlikely to produce honest, useful information. Ask for behavioral examples of growth instead.', category: 'rapport' },
          { text: "How do you handle giving feedback to people who are resistant to hearing it?", score: 2, nextId: 'q3_ok', quality: 'adequate', coachingTip: 'Feedback delivery is a relevant interpersonal competency. Shifting to team culture questions would give you a broader picture of their culture impact.', category: 'questioning' },
        ],
      },
      {
        id: 'q3_good',
        aiMessage: "I actively seek out perspectives that differ from mine. I've implemented 'silent brainstorming' in meetings where everyone writes ideas before discussing — this prevents groupthink and lets introverts contribute equally. I also rotate meeting facilitators and ensure product decisions include input from customer support and ops teams, not just engineering and design.",
        options: [
          { text: "How do you approach situations where company values conflict with a business decision? For example, speed-to-market vs. quality?", score: 3, nextId: 'q4_good', quality: 'excellent', coachingTip: 'Values-in-conflict scenarios reveal whether cultural alignment is performative or deeply held — this is exactly the kind of question that separates culture-add candidates from culture-fit mimics.', category: 'questioning' },
          { text: "Do you think you'd fit in with a young, fast-paced startup team?", score: 1, nextId: 'q4_poor', quality: 'poor', coachingTip: 'The word "young" introduces age bias, and "fit in" assesses social similarity rather than cultural contribution. This question type is a classic culture-fit trap that reduces team diversity.', category: 'bias-awareness' },
          { text: "What values are most important to you in a workplace?", score: 2, nextId: 'q4_ok', quality: 'adequate', coachingTip: 'Values questions are appropriate for culture assessment, but they invite idealized answers. Anchoring to a specific decision or trade-off they\'ve faced would produce more reliable data.', category: 'questioning' },
        ],
      },
      {
        id: 'q3_poor',
        aiMessage: "I went to UC Berkeley for my undergrad and got my MBA at Stanford. But I've found that some of the most talented colleagues I've worked with came from non-traditional backgrounds — bootcamps, self-taught developers, career changers.",
        options: [
          { text: "That's a great perspective. How do you foster an environment where people from all backgrounds feel valued and can contribute their best work?", score: 3, nextId: 'q4_good', quality: 'excellent', coachingTip: 'The candidate modeled inclusive thinking unprompted — building on it with a concrete inclusion question is the right move and pivots away from the credential-focused detour.', category: 'bias-awareness' },
          { text: "Stanford MBA, nice! You must be really driven.", score: 1, nextId: 'q4_poor', quality: 'poor', coachingTip: 'Praising elite school credentials reinforces socioeconomic bias and signals to the candidate that you value pedigree over performance — a major culture-add liability.', category: 'bias-awareness' },
          { text: "Tell me about a time you worked with someone whose background was very different from yours.", score: 2, nextId: 'q4_ok', quality: 'adequate', coachingTip: 'Good behavioral question about cross-cultural collaboration. Tying it to the candidate\'s earlier comment about non-traditional backgrounds would deepen the dialogue.', category: 'questioning' },
        ],
      },
      {
        id: 'q3_ok',
        aiMessage: "I tailor my approach. Some people need directness, others need more context and empathy. I always focus on behaviors and outcomes rather than personal traits. For resistant people, I try to understand what's behind the resistance — sometimes it's fear, sometimes it's a misunderstanding. Building trust over time makes these conversations easier.",
        options: [
          { text: "How do you navigate value differences in a diverse team? For example, when team members have different communication styles or work preferences?", score: 3, nextId: 'q4_good', quality: 'excellent', coachingTip: 'This is a culture-add question at its best — it assesses whether the candidate can adapt to diversity rather than expecting others to conform to a single norm.', category: 'bias-awareness' },
          { text: "Are you comfortable working long hours when we have crunch periods?", score: 1, nextId: 'q4_poor', quality: 'poor', coachingTip: 'Crunch culture questions can disadvantage caregivers and people with disabilities, and signal poor planning culture rather than genuine work ethic assessment.', category: 'bias-awareness' },
          { text: "What's the most important thing a manager can do to support their team?", score: 2, nextId: 'q4_ok', quality: 'adequate', coachingTip: 'Management support is a reasonable culture-adjacent topic, but it is only loosely connected to what you were just discussing. Staying on the thread of navigating differences would be stronger.', category: 'structure' },
        ],
      },
      {
        id: 'q4_good',
        aiMessage: "I was in a situation where we could rush a feature to beat a competitor but it would compromise accessibility compliance. I advocated for launching with full accessibility — it took 3 extra weeks but it was the right call. We positioned it as a differentiator and it actually won us a major enterprise client who required WCAG compliance.",
        options: [
          { text: "Great example. Last question — how do you contribute to making a workplace where everyone can bring their authentic self?", score: 3, nextId: 'q5_good', quality: 'excellent', coachingTip: 'Closing with a psychological safety question assesses the candidate\'s active role in inclusive culture, not just their ability to work within one — a critical distinction for culture-add assessment.', category: 'bias-awareness' },
          { text: "OK, I think I have a good sense of your personality. Any questions?", score: 1, nextId: 'q5_poor', quality: 'poor', coachingTip: 'Ending on "personality" frames the evaluation around subjective impression rather than behavioral evidence, which invites affinity bias into your hiring decision.', category: 'bias-awareness' },
          { text: "How do you handle it when team morale is low?", score: 2, nextId: 'q5_ok', quality: 'adequate', coachingTip: 'Team morale is a relevant culture competency, though closing with a question about psychological safety or authentic self-expression would better round out an inclusive culture assessment.', category: 'questioning' },
        ],
      },
      {
        id: 'q4_poor',
        aiMessage: "I believe in working sustainably. I'm very productive during work hours and I'm happy to put in extra effort for genuine emergencies. But I've seen that chronic crunch leads to burnout and ultimately hurts quality. I'd want to understand what's driving the crunch — often it's a planning issue that can be addressed.",
        options: [
          { text: "That's a thoughtful perspective. Let me ask — how have you contributed to creating an inclusive team culture in your past roles?", score: 3, nextId: 'q5_good', quality: 'excellent', coachingTip: 'Good recovery — the candidate offered a mature answer and you pivoted to a high-value inclusion question that gives you meaningful culture-add data.', category: 'bias-awareness' },
          { text: "We work hard here. Just making sure you're up for it.", score: 1, nextId: 'q5_poor', quality: 'poor', coachingTip: 'This response applies social pressure and signals a culture of crunch rather than intentional planning. It may deter high-performing candidates who value sustainable work practices.', category: 'bias-awareness' },
          { text: "How would you describe the ideal relationship between a PM and their engineering team?", score: 2, nextId: 'q5_ok', quality: 'adequate', coachingTip: 'Cross-functional relationship quality is a legitimate culture topic for a PM role. An inclusion-focused question would give you stronger culture-add signal at this stage.', category: 'questioning' },
        ],
      },
      {
        id: 'q4_ok',
        aiMessage: "Remove blockers, provide context, and trust the team. The best managers I've had created clear goals and then gave me autonomy to figure out the 'how.' They also protected the team from organizational noise and made sure everyone's contributions were visible to leadership.",
        options: [
          { text: "How do you ensure those contributions are recognized equitably across the team, including for people who may not self-promote?", score: 3, nextId: 'q5_good', quality: 'excellent', coachingTip: 'This is a precision inclusion question — recognition equity directly impacts underrepresented team members and reveals whether the candidate actively counters visibility bias.', category: 'bias-awareness' },
          { text: "Would you say you need a lot of management yourself?", score: 1, nextId: 'q5_poor', quality: 'poor', coachingTip: 'This framing implies that needing management is a weakness. It can disadvantage candidates from underrepresented groups who may have had less sponsorship and mentorship historically.', category: 'bias-awareness' },
          { text: "What do you do when you disagree with a decision your manager has made?", score: 2, nextId: 'q5_ok', quality: 'adequate', coachingTip: 'Upward communication style is a relevant culture competency. A question about equitable contribution recognition would be more directly tied to inclusion values at this stage.', category: 'questioning' },
        ],
      },
      {
        id: 'q5_good',
        aiMessage: "I start by modeling vulnerability — sharing my own mistakes and learnings openly. I've established team norms like 'no interrupting' and 'assume positive intent.' I also advocate for flexible work arrangements that accommodate different needs. In my last role, I pushed for meeting-free mornings which helped parents, caregivers, and deep thinkers alike. Thank you for these meaningful questions!",
        options: [
          { text: "Thank you, Sam. I appreciate your thoughtful answers. Your approach to inclusive leadership really resonates with our values. I'll discuss with the team and we'll share next steps.", score: 3, nextId: null, quality: 'excellent', coachingTip: 'Excellent close — you made the candidate feel heard, connected their answers to company values, and gave a clear sense of next steps. This is how you end an inclusive interview.', category: 'rapport' },
          { text: "OK, that wraps things up.", score: 1, nextId: null, quality: 'poor', coachingTip: 'An abrupt close after a rich, thoughtful answer signals disengagement. Always acknowledge what stood out about the candidate\'s responses before closing.', category: 'rapport' },
          { text: "Thanks, Sam. We'll be in touch soon.", score: 2, nextId: null, quality: 'adequate', coachingTip: 'Acceptable close. Acknowledging a specific answer and connecting it to your team\'s values would leave a stronger positive impression.', category: 'rapport' },
        ],
      },
      {
        id: 'q5_poor',
        aiMessage: "I understand the emphasis on work ethic. I'm confident that my productivity and results will speak for themselves. Is there anything specific about the role's expectations you'd like to discuss?",
        options: [
          { text: "I appreciate your professionalism, Sam. Let me ask one more thing — what kind of team environment brings out your best performance?", score: 3, nextId: null, quality: 'excellent', coachingTip: 'Good recovery — acknowledging their professionalism and pivoting to a values-based question partially repairs the damage from earlier culture-fit missteps.', category: 'rapport' },
          { text: "No, we're good. HR will follow up.", score: 1, nextId: null, quality: 'poor', coachingTip: 'Dismissing the candidate\'s question and closing abruptly after a series of inappropriate questions leaves a damaging impression of your organization\'s culture.', category: 'rapport' },
          { text: "Thanks for your time. We'll let you know.", score: 2, nextId: null, quality: 'adequate', coachingTip: 'A neutral close — it avoids further harm but misses the chance to end on a genuinely respectful and professional note.', category: 'rapport' },
        ],
      },
      {
        id: 'q5_ok',
        aiMessage: "I voice my disagreement respectfully and privately. I present my reasoning with data when possible. But once a decision is made, I commit to it fully — even if I disagreed initially. Undermining decisions destroys team trust. The exception is if I believe the decision is unethical — then I'll escalate.",
        options: [
          { text: "That shows real integrity. Thank you for the great conversation, Sam. I'll share my thoughts with the hiring team and we'll follow up with next steps. Any questions for me?", score: 3, nextId: null, quality: 'excellent', coachingTip: 'Strong close — you affirmed their integrity, gave a clear next step, and invited their questions. This is the right way to end an interview on a collaborative note.', category: 'rapport' },
          { text: "Alright, we're done. Thanks.", score: 1, nextId: null, quality: 'poor', coachingTip: 'A curt close after a thoughtful answer about ethics and integrity misses the mark. Always match the energy of the candidate\'s best answers when closing.', category: 'rapport' },
          { text: "Good answer. We'll be in touch.", score: 2, nextId: null, quality: 'adequate', coachingTip: 'Acceptable but minimal. Inviting their questions and being specific about next steps would significantly improve the candidate\'s closing experience.', category: 'rapport' },
        ],
      },
    ],
    dynamicFeedback: [
      {
        range: [8, 10],
        strengths: ['Focused on culture-add rather than culture-fit throughout', 'Asked values-based behavioral questions with concrete examples', 'Probed inclusion and equity practices directly', 'Avoided lifestyle bias and legally sensitive questions'],
        improvements: ['Consider being even more explicit about how each answer maps to a specific team value', 'Try asking candidates to describe a time they actively changed a team\'s culture'],
        tips: ['You\'re conducting highly inclusive interviews — document specific behavioral evidence to defend hiring decisions objectively', 'Share your approach to culture assessment with your team to reduce inconsistency across interviewers'],
      },
      {
        range: [5, 7],
        strengths: ['Asked at least some values-based questions', 'Showed some awareness of culture-add vs culture-fit'],
        improvements: ['Avoid social compatibility questions (happy hours, work-hard-play-hard) — these assess affinity, not values', 'Never ask about personal life, family status, or educational pedigree', 'Anchor culture questions to specific behavioral examples, not hypotheticals or self-descriptions'],
        tips: ['Replace "culture fit" with "culture add" in your thinking — what new perspectives does this person bring?', 'Prepare 4-5 values-based behavioral questions in advance so you don\'t drift into lifestyle assessments', 'Ask about how candidates have actively improved inclusion in past environments, not just whether they value it'],
      },
      {
        range: [0, 4],
        strengths: ['You completed the interview — every practice session builds awareness'],
        improvements: ['Asking about marital status, children, hobbies, or personal life is illegal in many jurisdictions — never do this', 'Remove "fit in" language from your vocabulary — it signals you\'re hiring for similarity, which reduces diversity', 'Do not praise educational pedigree — it introduces socioeconomic bias', 'Never ask if candidates are comfortable with crunch without acknowledging the business process problems that cause it'],
        tips: ['Study what questions are legally prohibited in your jurisdiction before every interview', 'Frame every culture question around a specific competency (collaboration, accountability, inclusion) not a personality trait', 'Read about affinity bias and how it affects culture assessment decisions', 'Use structured interview guides so all candidates are evaluated on the same criteria'],
      },
    ],
    feedback: {
      strengths: [
        'Focused on values-based questions over personal preferences',
        'Explored inclusion and diversity awareness',
        'Asked for specific behavioral examples',
        'Evaluated culture-add rather than culture-fit',
      ],
      improvements: [
        'Never ask about marital status, age, or personal life — these are illegal in many jurisdictions',
        'Avoid "work hard play hard" or lifestyle-based culture assessments',
        'Questions about school pedigree can introduce socioeconomic bias',
        'Focus on how candidates contribute to culture, not whether they match existing culture',
      ],
      tips: [
        'Reframe "culture fit" as "culture add" — what new perspectives does this person bring?',
        'Use structured questions about values and working style, not personality traits',
        'Evaluate adaptability and collaboration, not social compatibility',
        'Be aware of affinity bias — hiring people who are "like us" reduces diversity',
      ],
    },
  },
  {
    id: 'situational',
    title: 'Situational Judgment',
    description: 'Practice presenting hypothetical workplace scenarios and evaluating candidate responses.',
    icon: '🧩',
    aiName: 'Morgan Lee',
    aiRole: 'Engineering Manager Candidate',
    avatar: '/avatars/morgan-lee.svg',
    totalTurns: 6,
    dialogTree: [
      {
        id: 'start',
        aiMessage: "Hello! I'm Morgan Lee, and I'm excited to interview for the Engineering Manager position. I've been managing engineering teams for about 7 years, most recently leading a team of 15 at a mid-size SaaS company. Ready when you are!",
        options: [
          { text: "Welcome, Morgan! I'd like to present some hypothetical scenarios. First: Imagine a key team member gives you two weeks' notice right before a major deadline. How would you handle this?", score: 3, nextId: 'q1_good', quality: 'excellent', coachingTip: 'Opening with a specific, realistic scenario immediately tests decision-making under pressure and reveals how the candidate prioritizes people vs. delivery — a core EM trade-off.', category: 'questioning' },
          { text: "How many people have you managed?", score: 1, nextId: 'q1_poor', quality: 'poor', coachingTip: 'Team size is a fact, not a competency. It tells you nothing about the quality of their management. Jump directly to situational questions that reveal judgment.', category: 'questioning' },
          { text: "Hi Morgan! What's your management philosophy in a few sentences?", score: 2, nextId: 'q1_ok', quality: 'adequate', coachingTip: 'Philosophy questions invite polished, idealized answers. Test that philosophy with a concrete scenario immediately after to see if it holds up under realistic conditions.', category: 'structure' },
        ],
      },
      {
        id: 'q1_good',
        aiMessage: "First, I'd have a candid conversation with the departing employee — not to convince them to stay, but to understand their reasons and ensure a positive exit experience. Then I'd assess the knowledge risk: what do they uniquely know? I'd prioritize knowledge transfer in their remaining time. For the deadline, I'd re-scope with stakeholders, possibly splitting work among existing team members while being transparent about the impact.",
        options: [
          { text: "Good approach. Now imagine you discover that two of your reports are in a personal relationship and it's causing perceived favoritism on the team. How do you address this?", score: 3, nextId: 'q2_good', quality: 'excellent', coachingTip: 'Escalating to a more complex interpersonal scenario tests stakeholder awareness and policy judgment — exactly the kind of escalating difficulty that reveals management depth.', category: 'structure' },
          { text: "Would you try to counter-offer to keep them?", score: 1, nextId: 'q2_poor', quality: 'poor', coachingTip: 'This is a leading yes/no question that narrows the candidate\'s thinking instead of opening it up. Ask follow-up scenarios that test new dimensions of judgment instead.', category: 'questioning' },
          { text: "How would you prevent single points of failure in the future after this experience?", score: 2, nextId: 'q2_ok', quality: 'adequate', coachingTip: 'Asking about prevention is a good forward-looking probe. Moving to an entirely new scenario would test a broader range of situational judgment skills.', category: 'questioning' },
        ],
      },
      {
        id: 'q1_poor',
        aiMessage: "15 direct reports at my current role. Before that, I managed teams of 8 and 10. So I'm comfortable with different team sizes and understand the dynamics of each.",
        options: [
          { text: "Let me present a scenario: A key team member just gave notice before a major deadline. Walk me through how you'd handle it.", score: 3, nextId: 'q2_good', quality: 'excellent', coachingTip: 'Great recovery — pivoting to a concrete scenario after a fact-based question is the right move and gets you the judgment data you need.', category: 'structure' },
          { text: "That's a lot. Isn't 15 too many direct reports?", score: 1, nextId: 'q2_poor', quality: 'poor', coachingTip: 'Challenging a factual answer with a leading opinion question puts the candidate on the defensive and wastes evaluation time. Move to scenario-based questions.', category: 'rapport' },
          { text: "How does your management approach differ for larger vs. smaller teams?", score: 2, nextId: 'q2_ok', quality: 'adequate', coachingTip: 'Adaptability across team sizes is relevant, but this is still an opinion question. A specific scenario with a given team constraint would yield more actionable data.', category: 'questioning' },
        ],
      },
      {
        id: 'q1_ok',
        aiMessage: "I believe in servant leadership — my job is to remove obstacles and create an environment where my team can do their best work. I focus on clear communication, psychological safety, and growth opportunities. I try to be a multiplier, not a bottleneck.",
        options: [
          { text: "Let me test that with a scenario: Imagine a top performer is consistently undermining a junior team member in meetings. How would you handle it?", score: 3, nextId: 'q2_good', quality: 'excellent', coachingTip: 'Testing a stated philosophy immediately with a challenging scenario is excellent practice — it separates candidates who talk about psychological safety from those who actively protect it.', category: 'structure' },
          { text: "Where do you see yourself in 5 years?", score: 1, nextId: 'q2_poor', quality: 'poor', coachingTip: 'Career aspiration questions are generic and tell you nothing about situational judgment. Always follow up a philosophy statement with a concrete scenario that tests it.', category: 'questioning' },
          { text: "Can you give me a specific example of how you've applied servant leadership in practice?", score: 2, nextId: 'q2_ok', quality: 'adequate', coachingTip: 'Good pivot to behavioral evidence. Switching to a novel scenario would additionally test how the candidate applies their philosophy to unfamiliar challenges.', category: 'questioning' },
        ],
      },
      {
        id: 'q2_good',
        aiMessage: "I'd first verify the situation through observation and confidential conversations with the affected team members. Then I'd address it privately with both individuals, referencing our conflict of interest policy. I'd work with HR to explore options — different reporting lines, adjusted project assignments. The key is being empathetic while also protecting team morale and fairness.",
        options: [
          { text: "Next scenario: Your company announces layoffs and your team's morale tanks. You don't know which of your team members might be affected. How do you lead through this?", score: 3, nextId: 'q3_good', quality: 'excellent', coachingTip: 'Escalating to an organization-wide crisis scenario tests leadership under extreme uncertainty and reveals emotional intelligence and communication skills at a higher level.', category: 'structure' },
          { text: "Would you fire one of them?", score: 1, nextId: 'q3_poor', quality: 'poor', coachingTip: 'A blunt leading question like this oversimplifies a nuanced HR situation and fails to probe the reasoning process. Ask how they would navigate the complexity instead.', category: 'questioning' },
          { text: "How do you balance empathy with enforcing policies?", score: 2, nextId: 'q3_ok', quality: 'adequate', coachingTip: 'The empathy-policy tension is a real management challenge worth exploring. Framing it as a new scenario rather than an abstract question would produce richer responses.', category: 'questioning' },
        ],
      },
      {
        id: 'q2_poor',
        aiMessage: "It depends on the situation. A counter-offer can work but often it just delays the departure. If the underlying reasons — like lack of growth or compensation — aren't addressed, they'll leave within 6 months anyway. I prefer to understand the root cause first.",
        options: [
          { text: "Fair point. Let me give you a scenario: You notice a pattern of microaggressions from a senior team member toward a newer, more junior colleague. How do you handle it?", score: 3, nextId: 'q3_good', quality: 'excellent', coachingTip: 'Good pivot to a high-stakes inclusion scenario — microaggression handling is a critical test of both psychological safety values and practical management skills.', category: 'structure' },
          { text: "Have you ever had someone leave your team?", score: 1, nextId: 'q3_poor', quality: 'poor', coachingTip: 'This yes/no factual question produces no useful evaluation data. Every manager has had someone leave. Ask what they learned or present a new scenario instead.', category: 'questioning' },
          { text: "How do you proactively retain your best people before they get to the resignation stage?", score: 2, nextId: 'q3_ok', quality: 'adequate', coachingTip: 'Retention strategy is a legitimate management topic. Presenting a specific scenario about a flight-risk employee would make the question more concrete and testable.', category: 'questioning' },
        ],
      },
      {
        id: 'q2_ok',
        aiMessage: "I restructured my team around capabilities rather than projects. Instead of each person owning one area, I created pods where knowledge was shared. I also invested in documentation and pair programming. When someone did eventually leave, the impact was manageable because the knowledge lived in the team, not just in one person's head.",
        options: [
          { text: "Smart. Here's a scenario: You suspect one of your team members is being excluded from social activities and opportunities because of their background. What do you do?", score: 3, nextId: 'q3_good', quality: 'excellent', coachingTip: 'An exclusion scenario directly tests inclusion awareness and proactive management — one of the most revealing questions you can ask a manager candidate.', category: 'structure' },
          { text: "Did that actually work?", score: 1, nextId: 'q3_poor', quality: 'poor', coachingTip: 'Challenging the candidate\'s answer with skepticism rather than building on it disrupts rapport and produces a defensive rather than reflective response.', category: 'rapport' },
          { text: "How do you identify and address knowledge silos before they become a problem?", score: 2, nextId: 'q3_ok', quality: 'adequate', coachingTip: 'This is a reasonable follow-up within the same domain. Jumping to a new scenario type would give you broader coverage of the candidate\'s judgment range.', category: 'structure' },
        ],
      },
      {
        id: 'q3_good',
        aiMessage: "This is where authentic leadership matters most. I'd be honest: acknowledge the uncertainty, validate their feelings, and share what I do know. I'd increase 1-on-1 frequency, be extra available, and focus the team on what we can control — our work and our support for each other. I'd also privately advocate to leadership for transparency and fair treatment of affected employees.",
        options: [
          { text: "Scenario: A stakeholder from another department is pressuring you to promote an underperforming employee because they're 'loyal.' How do you respond?", score: 3, nextId: 'q4_good', quality: 'excellent', coachingTip: 'Introducing a political pressure scenario tests boundary-setting, integrity, and stakeholder management — a different and important dimension of EM judgment.', category: 'questioning' },
          { text: "Have you been through layoffs before?", score: 1, nextId: 'q4_poor', quality: 'poor', coachingTip: 'Checking personal experience via a yes/no question adds no evaluation value after the candidate just demonstrated sophisticated crisis leadership thinking. Keep testing with new scenarios.', category: 'questioning' },
          { text: "How do you maintain team productivity during prolonged periods of uncertainty?", score: 2, nextId: 'q4_ok', quality: 'adequate', coachingTip: 'Productivity under uncertainty is a real management challenge. Presenting it as a scenario with specific constraints would produce more testable, behavioral answers.', category: 'questioning' },
        ],
      },
      {
        id: 'q3_poor',
        aiMessage: "Of course — in 7 years of management, I've had team members leave for various reasons. Each departure is a learning opportunity. I conduct honest exit conversations and look for patterns that I can address for the remaining team.",
        options: [
          { text: "Here's a scenario for you: A team member comes to you saying they're burning out but you're in the middle of a critical project. How do you balance their wellbeing with project needs?", score: 3, nextId: 'q4_good', quality: 'excellent', coachingTip: 'The burnout vs. deadline scenario forces a real trade-off between human wellbeing and business pressure — a defining test of management values and decision-making process.', category: 'structure' },
          { text: "How many people have quit because of you?", score: 1, nextId: 'q4_poor', quality: 'poor', coachingTip: 'This accusatory framing creates a defensive dynamic and will not yield honest, useful information. It signals poor interviewing technique and damages candidate trust.', category: 'rapport' },
          { text: "What patterns have you identified from exit conversations, and how have they changed your management style?", score: 2, nextId: 'q4_ok', quality: 'adequate', coachingTip: 'Asking about learning from exit patterns is a good reflective question. A new scenario that tests a different management competency would broaden your evaluation.', category: 'questioning' },
        ],
      },
      {
        id: 'q3_ok',
        aiMessage: "I do regular 'bus factor' assessments — for each critical system, I ask 'what happens if the main contributor is unavailable for a month?' If the answer is scary, we prioritize knowledge sharing. I also use architecture decision records and runbooks so institutional knowledge is documented, not just oral tradition.",
        options: [
          { text: "Great practice. Scenario: You inherit a team with poor morale and a culture of blame. What's your 90-day plan to turn it around?", score: 3, nextId: 'q4_good', quality: 'excellent', coachingTip: 'A turnaround scenario with a specific timeframe (90 days) tests structured thinking, prioritization, and change management — all critical EM skills that are difficult to fake.', category: 'questioning' },
          { text: "Don't you think documentation is busywork?", score: 1, nextId: 'q4_poor', quality: 'poor', coachingTip: 'Challenging a sound engineering management practice with a loaded opinion question is adversarial and produces a defensive rather than evaluative response.', category: 'rapport' },
          { text: "How do you create a culture where people want to share knowledge rather than hoard it?", score: 2, nextId: 'q4_ok', quality: 'adequate', coachingTip: 'Knowledge culture is a real management challenge. Framing it as a scenario — for instance, a team where knowledge hoarding has become entrenched — would test practical problem-solving.', category: 'questioning' },
        ],
      },
      {
        id: 'q4_good',
        aiMessage: "I'd politely decline and explain that promotions should be based on performance and growth, not tenure or loyalty. I'd present my evaluation framework — clear criteria, documented evidence, calibrated against the level expectations. If the stakeholder pushes back, I'd involve my manager and HR. Compromising on merit-based decisions erodes trust across the entire team.",
        options: [
          { text: "Final scenario: You're asked to implement a policy you personally disagree with — say, mandatory return to office. How do you handle it as a manager?", score: 3, nextId: 'q5_good', quality: 'excellent', coachingTip: 'A disagree-but-commit scenario tests integrity, communication skills, and the ability to advocate for your team while respecting organizational decisions — an essential management quality.', category: 'questioning' },
          { text: "OK, I think we're good. Any questions?", score: 1, nextId: 'q5_poor', quality: 'poor', coachingTip: 'Ending after only four scenarios misses the opportunity to test one more dimension of situational judgment. Always plan for a closing scenario before the candidate Q&A.', category: 'structure' },
          { text: "How do you handle the politics of managing up while staying true to your principles?", score: 2, nextId: 'q5_ok', quality: 'adequate', coachingTip: 'Managing up with integrity is a relevant topic. Framing it as a specific scenario — like an unrealistic request from a VP — would surface more concrete decision-making evidence.', category: 'questioning' },
        ],
      },
      {
        id: 'q4_poor',
        aiMessage: "I wouldn't frame it that way. But honestly, some people have told me they left because they wanted different challenges that I couldn't provide in our team. I try not to take it personally and instead focus on creating the best environment I can.",
        options: [
          { text: "Fair. Let me give you a scenario: Your VP asks you to cut your team's budget by 20% without reducing headcount. How do you approach this?", score: 3, nextId: 'q5_good', quality: 'excellent', coachingTip: 'A budget constraint scenario tests resourcefulness, prioritization, and upward communication skills — all hallmarks of strong senior management judgment.', category: 'structure' },
          { text: "Do you think you're a good manager?", score: 1, nextId: 'q5_poor', quality: 'poor', coachingTip: 'Self-evaluation questions invite polished, rehearsed answers and produce no evaluation data you couldn\'t get from a reference check. Use a scenario instead.', category: 'questioning' },
          { text: "What steps have you taken to grow as a manager based on feedback you've received?", score: 2, nextId: 'q5_ok', quality: 'adequate', coachingTip: 'Learning agility is worth probing, but you need to balance reflection questions with scenario-based ones to maintain the situational judgment focus of this interview type.', category: 'structure' },
        ],
      },
      {
        id: 'q4_ok',
        aiMessage: "I incentivize it. Knowledge sharing is part of our team's performance criteria. I celebrate when someone writes a great runbook or mentors a colleague. I also create structured forums — tech talks, demo days, architecture reviews — where sharing is the norm, not the exception.",
        options: [
          { text: "Last scenario: You're asked to take over a struggling project with a demoralized team and an unhappy client. It's 3 months behind. What's your approach for the first two weeks?", score: 3, nextId: 'q5_good', quality: 'excellent', coachingTip: 'A project rescue scenario with specific constraints (demoralized team, unhappy client, 3 months behind) tests structured crisis thinking and stakeholder prioritization simultaneously.', category: 'questioning' },
          { text: "Alright, we're out of time.", score: 1, nextId: 'q5_poor', quality: 'poor', coachingTip: 'Ending before a final scenario cuts your evaluation short. Always plan your time so you have room for at least 5-6 scenarios before closing.', category: 'structure' },
          { text: "How do you balance formal knowledge sharing activities with the pressure of daily deliverables?", score: 2, nextId: 'q5_ok', quality: 'adequate', coachingTip: 'This is a reasonable follow-up within the knowledge domain. Shifting to a final high-stakes scenario would give your evaluation a stronger, more comprehensive finish.', category: 'structure' },
        ],
      },
      {
        id: 'q5_good',
        aiMessage: "I'd voice my concerns to leadership through proper channels — data on productivity, employee satisfaction, retention risks. But if the decision is final, I'd implement it with empathy. I'd be transparent with my team: 'I understand this is difficult. Here's the reasoning. Here's how we'll make it work. And here's the flexibility I've negotiated within the policy.' I won't pretend to love a policy I disagree with, but I'll implement it fairly and fight for accommodations where I can.",
        options: [
          { text: "Excellent answer — that shows both integrity and leadership maturity. Thank you, Morgan. Your situational judgment is impressive. I'll share my evaluation with the team. What questions do you have for me?", score: 3, nextId: null, quality: 'excellent', coachingTip: 'Perfect close — you named the specific quality you observed (integrity and maturity), validated their thinking, and opened the floor for their questions. This is how you end a scenario interview.', category: 'rapport' },
          { text: "OK, we're done.", score: 1, nextId: null, quality: 'poor', coachingTip: 'A curt close after a sophisticated, thoughtful answer leaves a negative impression. Always name what stood out and give the candidate space to ask their own questions.', category: 'rapport' },
          { text: "Thanks, Morgan. Good answers. We'll be in touch.", score: 2, nextId: null, quality: 'adequate', coachingTip: 'Acceptable but generic. Naming a specific quality you observed and inviting their questions would make the close much more meaningful.', category: 'rapport' },
        ],
      },
      {
        id: 'q5_poor',
        aiMessage: "I think so, but my team's feedback would be more reliable than my self-assessment. I've consistently gotten positive 360 reviews and my teams have had low turnover rates compared to our department average. But there's always room to grow.",
        options: [
          { text: "I appreciate the humility. One last scenario: If you had to make a decision that was right for the company but unpopular with your team, how would you approach it?", score: 3, nextId: null, quality: 'excellent', coachingTip: 'Good late recovery — ending with a final scenario despite the detour means you still get meaningful judgment data to close the evaluation on.', category: 'structure' },
          { text: "OK, we'll let you know. Bye.", score: 1, nextId: null, quality: 'poor', coachingTip: 'An abrupt farewell after a reflective, self-aware answer is dismissive and damages employer brand. Always close with warmth and clarity on next steps.', category: 'rapport' },
          { text: "Thanks for your candor. We'll follow up with next steps.", score: 2, nextId: null, quality: 'adequate', coachingTip: 'Acknowledging candor is good. Adding a final scenario before closing would have made better use of the remaining time.', category: 'rapport' },
        ],
      },
      {
        id: 'q5_ok',
        aiMessage: "It's a constant balance. I've found that investing in knowledge sharing upfront actually saves time downstream — fewer context-switching interruptions, fewer 'how does this work?' questions. I frame it as investment, not overhead. When things get truly crunchy, we pause the forums but never the documentation — that's when it matters most.",
        options: [
          { text: "Smart approach. Last scenario: A team member confides that they're dealing with a serious personal issue. How do you support them while maintaining team performance?", score: 3, nextId: null, quality: 'excellent', coachingTip: 'Closing with a wellbeing vs. performance scenario tests empathy, HR judgment, and boundary awareness — a fitting final question that reveals management values at their core.', category: 'questioning' },
          { text: "OK, thanks. We're done here.", score: 1, nextId: null, quality: 'poor', coachingTip: 'Ending abruptly without a final scenario or a warm close wastes evaluation time and leaves the candidate with a poor impression of your organization.', category: 'rapport' },
          { text: "Good perspective. We'll follow up with next steps soon.", score: 2, nextId: null, quality: 'adequate', coachingTip: 'A neutral close — acceptable but missed the chance for one more scenario and a more personalized, appreciative ending.', category: 'rapport' },
        ],
      },
    ],
    dynamicFeedback: [
      {
        range: [8, 10],
        strengths: ['Presented realistic, specific scenarios with clear constraints', 'Escalated complexity systematically across the interview', 'Evaluated the decision-making process, not just the outcome', 'Covered people management, ethics, stakeholder dynamics, and values alignment'],
        improvements: ['Try following up scenarios with "have you faced anything like this?" to connect hypothetical judgment to real experience', 'Consider adding scenarios that test cross-functional or organizational politics explicitly'],
        tips: ['You\'re running strong scenario-based interviews — document the reasoning process you observed, not just the answer', 'Use a scoring rubric that weights stakeholder awareness and trade-off thinking, not just the conclusion the candidate reached'],
      },
      {
        range: [5, 7],
        strengths: ['Presented at least some well-constructed scenarios', 'Showed awareness of the need to test judgment over facts'],
        improvements: ['Avoid yes/no questions after a rich scenario answer — keep probing the reasoning', 'Generic questions (5-year plan, self-ratings) don\'t belong in a situational judgment interview', 'Plan scenario progression so each one tests a different dimension of judgment'],
        tips: ['Prepare 6-8 scenarios before the interview and categorize them: people management, organizational pressure, ethics, crisis leadership', 'Always ask "how would you decide?" rather than "what would you do?" to surface reasoning', 'Follow scenarios with "tell me about a time you actually faced something like this" for behavioral triangulation'],
      },
      {
        range: [0, 4],
        strengths: ['You completed the interview — situational judgment interviews are a learnable skill'],
        improvements: ['Never use yes/no or leading questions after a situational response — they shut down evaluation', 'Stop using factual questions (team size, years of experience) that provide no judgment signal', 'Do not challenge sound answers with adversarial skepticism — it damages rapport and distorts responses', 'Plan your scenario sequence to cover: crisis, ethics, inclusion, organizational politics, and trade-offs'],
        tips: ['Study scenario-based interview design — each scenario should have a clear tension or trade-off built in', 'Score candidates on their reasoning process: do they consider all stakeholders? Do they acknowledge trade-offs?', 'Avoid scenarios that have one obviously "correct" answer — the best scenarios have genuine dilemmas', 'Prepare a consistent set of scenarios for every candidate interviewing for the same role to enable fair comparison'],
      },
    ],
    feedback: {
      strengths: [
        'Used realistic situational scenarios to assess judgment',
        'Evaluated decision-making process, not just the answer',
        'Scenarios covered people management, ethics, and organizational challenges',
        'Progressively raised complexity across scenarios',
      ],
      improvements: [
        'Avoid yes/no questions and leading questions',
        "Don't use hypotheticals that are too vague — provide enough context",
        'Ensure scenarios are relevant to the actual role',
        'Avoid questions that only have one obviously "correct" answer',
      ],
      tips: [
        'Create a consistent set of scenarios for all candidates for the same role',
        'Look for how candidates think through trade-offs, not just the outcome',
        'Situational questions work best when combined with behavioral follow-ups (have you faced anything similar?)',
        'Score candidates on their reasoning process, stakeholder awareness, and values alignment',
      ],
    },
  },
];
