export interface ModuleResource {
  title: string;
  source: string;
  description?: string;
}

export interface TrainingModule {
  id: string;
  number: number;
  title: string;
  icon: string;
  topicFocus: string[];
  activities: string[];
  coreTakeaway: string;
  resources?: ModuleResource[];
}

export const trainingModules: TrainingModule[] = [
  {
    id: 'module-1',
    number: 1,
    title: 'The Why & Legal Foundations',
    icon: '⚖️',
    topicFocus: [
      'Cost of Mis-Hire: Financial loss, morale damage, reduced productivity.',
      'Legal Guardrails: Focus on bona fide occupational qualifications (BFOQ). If it doesn\'t relate to the job, don\'t ask it.',
      'The "No-Go" List: Review common forbidden questions (race, age, marital status, health, religion, national origin).',
      'Compliance: Discuss the business cost of a mis-hire and the critical importance of legal compliance (EEO/Non-discrimination laws).',
    ],
    activities: [
      'Presentation & Q&A on legal compliance foundations.',
      'Review illegal or highly discouraged questions (e.g., age, family status, religion).',
      'Discuss real-world examples of the business cost of a bad hire.',
    ],
    coreTakeaway: 'Interviewing is a professional skill that directly impacts business results and legal exposure. Focus on job ability only.',
  },
  {
    id: 'module-2',
    number: 2,
    title: 'Structured Interviewing',
    icon: '📋',
    topicFocus: [
      'Predictive Hiring: Structured interviews are 4x more predictive than unstructured ones.',
      'The Job Scorecard: Define Competencies, Objectives, and Indicators before interviewing.',
      'Behavioral (Past) Questions: "Tell me about a time..." — focuses on real, documented experience.',
      'Situational (Future) Questions: "Imagine you are facing..." — focuses on problem-solving and critical thinking.',
      'STAR Method: Train listeners to prompt for details on the specific Action taken and the measurable Result.',
      'One of the best ways to catch AI fraud is through the STAR drilling technique.',
    ],
    activities: [
      'The Scorecard Activity (15 min): "We are hiring a new Team Lead. Write down the 3 most important traits they need." The word cloud of 20+ different traits shows why alignment is critical before candidates walk in.',
      'Group Exercise — "Roast the Lazy Questions" (30 min): Review 5 common weak interview questions. Work in pairs to identify why they fail and share one "Power Question" to replace each.',
      'Self-paced AI Fraud Course in MyLearning.',
    ],
    coreTakeaway: 'Preparation and consistency are the foundation. Define success before you start interviewing. Never accept a generalized answer. Use the STAR framework and probing questions to uncover specific actions and results.',
  },
  {
    id: 'module-3',
    number: 3,
    title: 'The Innovation (AI) Mindset',
    icon: '🤖',
    topicFocus: [
      'Hiring for 2026: Technical skills have a shorter shelf life. Hire for Adaptability Quotient (AQ) and Data Literacy.',
      'Identify candidates who don\'t just use tools, but who can simplify complex systems and pivot when the data shifts.',
      'The Simplicity Bar: Can the candidate explain a complex AI-driven process to a non-technical stakeholder?',
      'Data-Driven Skepticism: Do they blindly follow algorithmic outputs, or do they apply "human-in-the-loop" critical thinking?',
      'Prompt Engineering & Logic: Assess how a candidate structures their logic to co-work with AI.',
    ],
    activities: [
      'The "Simplicity" Challenge (15 min): Given a dense, jargon-heavy project description, draft two questions — a "Keep it Simple" question to test if the candidate can strip away the buzzwords, and a "Pivot" question ("What if the data showed X instead of Y?") to test data-driven agility.',
      'The "Roast" of the Resume (10 min): Review a perfect-looking but AI-generated resume with vague achievements. Identify three "deep-dive" questions that would break an AI-generated persona by forcing hyper-specific, local context.',
    ],
    coreTakeaway: 'Don\'t just hire for today\'s tasks — hire for tomorrow\'s pivots. Look for data-fluency and a bias toward simplification.',
  },
  {
    id: 'module-4',
    number: 4,
    title: 'Evaluation, Bias & Feedback',
    icon: '🧠',
    topicFocus: [
      'Detecting AI & Fraud: With the rise of real-time "interview co-pilots" and AI-generated portfolios, move from Content Validation to Process Validation.',
      'Red Flags: Unnatural pauses (waiting for a prompt), "robotic" perfect phrasing, or inability to dive deep into the nuance of a specific Action in the STAR method.',
      'Verification over Trust: Shift from "Tell me about..." to "Show me how you handled the friction in..."',
      'Bias Busters: Affinity Bias (liking people like us), Horn Effect (one negative clouds the whole view), Recency Bias (only remembering the last few answers).',
      'Objective Notes: Must be factual quotes or observations ("Candidate said X," "Candidate took 10 seconds to answer"), not subjective judgments ("Candidate seems smart").',
      'Calibration: The entire panel must meet before sharing scores to debate the evidence and align on the final decision.',
    ],
    activities: [
      'Calibration Exercise (30 min): Analyze inconsistent sample interview notes. Force consensus and highlight the need to score against competencies, not feelings.',
      'Practice writing objective, evidence-based interview notes versus subjective impressions.',
    ],
    coreTakeaway: 'Objective evidence is the only thing that matters. Structure and a focus on competencies combat bias. Specificity is the enemy of AI Fraud — know the red flags to watch for.',
  },
  {
    id: 'module-5',
    number: 5,
    title: 'Candidate Experience',
    icon: '🤝',
    topicFocus: [
      'The Welcome: Be on time, introduce self/role clearly, and outline the interview agenda.',
      'The Pitch: Reserve time to sell the role, team, and company mission honestly.',
      'The Hand-off: Clearly state that the Talent/Recruiting Team handles scheduling and final communication. This sets clear boundaries.',
      'SLAs — Accountability and Service Level Agreements: Hiring managers must adhere to clear deadlines for their responsibilities within the process to maintain momentum and a positive candidate experience.',
      'Active Listening, Time Management, and Selling the Vision.',
    ],
    activities: [
      'The "Awful Interview" Role-Play (30 min): Active exercise highlighting the immediate, damaging impact of poor in-interview behavior.',
      'Discussion on best practices for making candidates feel respected and engaged.',
    ],
    coreTakeaway: 'The manager is the face of the team. Ensure the interview is a professional, respectful, and engaging two-way conversation.',
    resources: [
      { title: 'Candidate Experience: What It Is and Why It Matters', source: 'SHRM', description: 'Links positive candidate experience to employer brand, offer acceptance rates, and long-term talent pipeline health with actionable touchpoint recommendations.' },
      { title: 'Candidate Experience Benchmark Research Report', source: 'Talent Board (CandE Research)', description: 'Annual research benchmarking candidate sentiment across the full hiring funnel — data on where organizations most commonly lose candidates and brand equity.' },
      { title: 'How a Bad Hiring Process Can Cost You Great Candidates', source: 'Harvard Business Review', description: 'Analysis of how interview experience shapes candidate perception and influences both offer acceptance and post-hire engagement.' },
    ],
  },
];

export const wrapUp = {
  fiveCs: ['Competency focus', 'Consistency', 'Clarity (STAR)', 'Calibration', 'Candidate respect'],
  commitmentPrompt: 'Managers commit to one specific technique they will use in their next interview (e.g., "I will explicitly use 3 STAR follow-ups," or "I will check my email only before/after the interview").',
  resources: [
    { title: 'Hiring for the Age of AI: What Skills Actually Matter', source: 'Harvard Business Review', description: 'Framework for identifying cognitive, adaptive, and collaborative skills that predict success in AI-augmented roles.' },
    { title: 'Future of Work: Hiring for AI Readiness and Learning Agility', source: 'LinkedIn Learning / Economic Graph Research', description: 'Research on shifting from credential-based to skills-based hiring, with learning agility as the top predictor of AI-era performance.' },
    { title: 'Recruiting for Innovation: How to Hire Creative Problem Solvers', source: 'SHRM / IDEO / Stanford d.school', description: 'Design-thinking-influenced guide to interview strategies for identifying curiosity, experimentation mindset, and tolerance for ambiguity.' },
    { title: 'Behavioral Interviewing Using the STAR Technique (Video)', source: 'LinkedIn Learning', description: 'Short video module demonstrating STAR in practice — good for refresher programs or pre-work.' },
  ] as ModuleResource[],
};
