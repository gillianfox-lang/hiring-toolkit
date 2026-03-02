export interface ModuleResource {
  title: string;
  source: string;
  description?: string;
}

export interface CheatSheetItem {
  text: string;
  detail?: string;
}

export interface CheatSheet {
  dos: CheatSheetItem[];
  donts: CheatSheetItem[];
  keyPhrases: string[];
  quickTips: string[];
  redFlags: string[];
  greenFlags: string[];
}

export interface TrainingModule {
  id: string;
  number: number;
  title: string;
  icon: string;
  topicFocus: string[];
  activities: string[];
  coreTakeaway: string;
  cheatSheet: CheatSheet;
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
    cheatSheet: {
      dos: [
        { text: 'Ask only job-related questions', detail: 'Every question must connect to a bona fide occupational qualification (BFOQ) — a skill, behavior, or competency required for the role.' },
        { text: 'Use the same core questions for every candidate', detail: 'Consistency protects against discrimination claims and enables fair comparison.' },
        { text: 'Document with factual, observable notes', detail: 'Write what the candidate said or did, not how you felt about them.' },
        { text: 'Know your jurisdiction\'s protected classes', detail: 'Federal EEO covers race, color, religion, sex, national origin, age (40+), disability, and genetic information. Provincial/state laws may add more.' },
        { text: 'Redirect politely if a candidate volunteers protected info', detail: '"Thanks for sharing — let\'s focus on your experience with X." You are not obligated to respond to unsolicited personal disclosures.' },
      ],
      donts: [
        { text: 'Ask about age, birthdate, or graduation year', detail: 'Even indirect questions like "When did you graduate?" can imply age discrimination.' },
        { text: 'Ask about marital/family status or pregnancy plans', detail: '"Do you have kids?" or "Are you planning a family?" are off-limits in every jurisdiction.' },
        { text: 'Ask about religion, ethnicity, or national origin', detail: '"Where are you originally from?" or "What holidays do you observe?" — never relevant to job performance.' },
        { text: 'Ask about disability or health conditions', detail: 'You may ask "Can you perform the essential functions of this role with or without accommodation?" — nothing more.' },
        { text: 'Make promises about the role you can\'t guarantee', detail: 'Verbal commitments ("You\'ll definitely get promoted in a year") can create implied contracts.' },
      ],
      keyPhrases: [
        '"Walk me through your experience with [specific job duty]."',
        '"Can you perform the essential functions of this role with or without reasonable accommodation?"',
        '"What interests you about this position specifically?"',
        '"Let me redirect us back to the role requirements..."',
        '"This question is designed to assess [competency]. There is no right or wrong answer."',
      ],
      quickTips: [
        'The BFOQ test: "Would I ask this of every candidate regardless of background?" If no, don\'t ask it.',
        'A mis-hire costs 1.5-3x the role\'s annual salary when you factor in recruiting, onboarding, lost productivity, and morale.',
        'If you\'re unsure whether a question is legal, err on the side of not asking. Consult your TA partner or legal team.',
        'Record-keeping matters — retain interview notes for at least 1 year (or as required by your jurisdiction) in case of audit.',
        'Treat every interview as if it could be reviewed in a legal proceeding. Because it can.',
      ],
      redFlags: [
        'Asking "Where are you from?" or "What\'s your accent?"',
        'Commenting on a candidate\'s appearance, age, or physical characteristics',
        'Asking about childcare arrangements or availability due to family obligations',
        'Different questions for different candidates for the same role',
        'Subjective notes like "not a culture fit" without evidence-based reasoning',
      ],
      greenFlags: [
        'All questions tie directly to the job description and scorecard',
        'The same structured question set is used for every candidate',
        'Notes reference specific candidate statements and observable behaviors',
        'Interviewer can articulate the BFOQ rationale for every question asked',
        'Interviewer redirects gracefully when candidates share protected information',
      ],
    },
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
    cheatSheet: {
      dos: [
        { text: 'Build a scorecard BEFORE posting the job', detail: 'Define 3-5 competencies, measurable objectives, and success indicators. This is your rubric — every question and evaluation ties back to it.' },
        { text: 'Ask behavioral questions using "Tell me about a time..."', detail: 'Past behavior is the best predictor of future performance. Force candidates to reference real, specific experiences.' },
        { text: 'Ask situational questions using "Imagine you are facing..."', detail: 'Tests problem-solving and critical thinking. Good for assessing how candidates approach novel problems.' },
        { text: 'Probe with STAR follow-ups until you get specifics', detail: 'Situation → Task → Action → Result. Most candidates stop at Situation. Push for the specific Action THEY took and the measurable Result.' },
        { text: 'Use the same core questions for every candidate in the same role', detail: 'Consistency = fairness = defensibility. Add role-specific probes as needed, but the backbone stays the same.' },
        { text: 'Score each competency independently right after the interview', detail: 'Don\'t wait until the end of the day. Memory fades and recency bias creeps in.' },
      ],
      donts: [
        { text: 'Wing it without a question plan', detail: 'Unstructured interviews are only 14% predictive of job success. Structured ones are 4x better.' },
        { text: 'Accept vague answers like "We did..." or "The team..."', detail: 'Push for "I" statements: "What was YOUR specific role? What did YOU do?"' },
        { text: 'Ask leading questions that telegraph the answer', detail: '"You\'re a team player, right?" tells the candidate what to say. Ask "Describe a time you disagreed with your team\'s direction" instead.' },
        { text: 'Skip the Result in STAR', detail: 'The Result is where the evidence lives. "What was the measurable outcome? What changed because of your action?"' },
        { text: 'Let one strong/weak answer color the entire evaluation', detail: 'This is the Halo/Horn effect. Score each competency separately on its own evidence.' },
      ],
      keyPhrases: [
        '"Tell me about a specific time when you [competency-related action]."',
        '"What was your specific role versus the team\'s role?"',
        '"What was the measurable outcome or result?"',
        '"Walk me through your decision-making process step by step."',
        '"If you faced that situation again, what would you do differently?"',
        '"You mentioned the team did X — what was your individual contribution?"',
        '"Can you give me a specific example? Numbers, dates, or names help."',
      ],
      quickTips: [
        'The Scorecard Formula: Competency + Objective + Indicator. Example: "Leadership" + "Built and managed a cross-functional team" + "Retained 90%+ of direct reports over 12 months."',
        'Structured interviews are 4x more predictive than unstructured ones (Schmidt & Hunter meta-analysis).',
        'Behavioral questions assess the past. Situational questions assess the future. Use both.',
        'STAR drilling is also your #1 defense against AI-coached or fabricated answers — rehearsed candidates crumble on the "A" and "R."',
        'If a candidate gives a great Situation and Task but vague Action, they may have been a bystander, not a contributor.',
        'Write your questions to target the scorecard competencies. If a question doesn\'t map to a competency, cut it.',
      ],
      redFlags: [
        'Candidate only uses "we" and cannot articulate personal contributions',
        'Answers are polished but lack specific details, dates, metrics, or names',
        'Candidate cannot describe what went wrong or what they\'d change — suggests rehearsed/fabricated',
        'All examples come from the same one project or time period',
        'Candidate deflects follow-up questions or pivots to a different story',
      ],
      greenFlags: [
        'Candidate naturally uses "I" and clearly owns their contributions',
        'Provides specific metrics, timelines, and stakeholder names without prompting',
        'Can articulate what didn\'t work and what they learned — shows self-awareness',
        'Examples span multiple roles, projects, or time periods — shows a pattern',
        'Welcomes follow-up questions and adds detail without defensiveness',
      ],
    },
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
    cheatSheet: {
      dos: [
        { text: 'Assess Adaptability Quotient (AQ) over static skill lists', detail: 'Technical skills depreciate fast. Prioritize candidates who demonstrate learning velocity — how quickly they acquire and apply new skills.' },
        { text: 'Test the "Simplicity Bar"', detail: 'Ask candidates to explain a complex AI-driven process to a non-technical stakeholder. The best thinkers simplify, they don\'t complexify.' },
        { text: 'Probe for data-driven skepticism', detail: 'Ask: "When have you questioned or overridden an algorithmic recommendation?" You want human-in-the-loop thinkers, not blind tool followers.' },
        { text: 'Evaluate prompt engineering and structured thinking', detail: 'How does the candidate break down ambiguous problems? Can they structure inputs to get useful outputs from AI tools?' },
        { text: 'Look for "tool-agnostic" problem solvers', detail: 'The specific tool matters less than the approach. Can they transfer their thinking to new tools when current ones become obsolete?' },
        { text: 'Assess comfort with ambiguity and iteration', detail: 'AI-era work is inherently iterative. Look for candidates who can start with 70% clarity and course-correct, not those who need 100% before moving.' },
      ],
      donts: [
        { text: 'Over-index on specific tool proficiency', detail: 'Knowing "ChatGPT" or "Copilot" today is like knowing "Microsoft Word" in 2005 — table stakes, not differentiators. Test the thinking, not the tool.' },
        { text: 'Confuse AI literacy with AI hype', detail: 'Candidates who name-drop AI buzzwords but can\'t explain trade-offs or limitations are signaling surface knowledge.' },
        { text: 'Assume AI skills are only for technical roles', detail: 'Every role interacts with AI now — marketing, HR, finance, operations. Assess AI readiness universally.' },
        { text: 'Accept "I used AI to do X" without probing HOW', detail: 'What was the prompt strategy? How did they validate the output? What did they change? The value is in the human judgment layer.' },
        { text: 'Dismiss candidates who are cautious about AI', detail: 'Healthy skepticism about AI limitations is a strength. Blind enthusiasm without critical thinking is a risk.' },
      ],
      keyPhrases: [
        '"Walk me through how you\'d approach a problem you\'ve never seen before."',
        '"Tell me about a time you had to learn a new tool or technology under a tight deadline."',
        '"If an AI tool gave you a recommendation that felt wrong, how would you evaluate it?"',
        '"Explain [complex concept from their resume] as if I\'m a customer with no technical background."',
        '"What\'s a technology or process you were skilled in that became obsolete? How did you adapt?"',
        '"How do you decide when to trust an automated output versus doing something manually?"',
      ],
      quickTips: [
        'The Simplicity Test: If a candidate can\'t explain their work in plain language, they may not deeply understand it.',
        'AQ (Adaptability Quotient) > IQ for predicting success in roles that will be reshaped by AI within 2-3 years.',
        'Look for "T-shaped" candidates: deep expertise in one area + broad curiosity across many.',
        'The best AI-era hires ask "Why does this model recommend X?" — not just "The model says X."',
        'Resume red flag: a list of AI tools with no context on how they were applied or what outcome they drove.',
        'Pair a technical question with a "now explain it simply" follow-up to test real comprehension.',
      ],
      redFlags: [
        'Candidate lists AI tools as skills but cannot describe a specific workflow or outcome',
        'Uses jargon heavily but struggles when asked to simplify for a non-technical audience',
        'Cannot describe a time they had to learn something new quickly — suggests low adaptability',
        'Treats AI outputs as infallible — "The model said X so I did X" with no critical evaluation',
        'Cannot articulate how their role or industry is being changed by AI — suggests low awareness',
      ],
      greenFlags: [
        'Describes specific AI-augmented workflows with clear before/after outcomes',
        'Demonstrates healthy skepticism: validates, cross-references, and applies judgment to AI outputs',
        'Has self-taught new tools or methodologies outside of formal training',
        'Can translate complex, technical concepts into plain language naturally',
        'Shows curiosity about AI\'s limitations and ethical considerations — not just its capabilities',
      ],
    },
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
    cheatSheet: {
      dos: [
        { text: 'Score each competency independently, immediately after the interview', detail: 'Use your scorecard. Rate each competency on its own evidence, not your overall "gut feeling" about the candidate.' },
        { text: 'Write objective, evidence-based notes', detail: 'Good: "Candidate described leading a 4-person migration project over 6 weeks, resulting in 30% faster deployments." Bad: "Seems like a strong leader."' },
        { text: 'Use calibration sessions before sharing individual scores', detail: 'Panel members must evaluate independently FIRST, then debate as a group. Pre-sharing creates anchoring bias.' },
        { text: 'Shift from Content Validation to Process Validation', detail: 'Don\'t just verify WHAT candidates claim — verify HOW they worked. Ask for friction points, pivots, and messy details that AI can\'t fabricate.' },
        { text: 'Name the bias you\'re experiencing out loud', detail: '"I might be anchoring on their impressive first answer — let me look at the full evidence across all competencies." Self-awareness disrupts bias.' },
        { text: 'Apply the "evidence test" before speaking in debrief', detail: 'Before stating an opinion, ask yourself: "Can I point to a specific quote, answer, or behavior that supports this?" If not, don\'t say it.' },
      ],
      donts: [
        { text: 'Let Affinity Bias drive decisions', detail: 'Liking someone because they went to your school, share your hobbies, or "remind you of yourself" is not a competency signal.' },
        { text: 'Let the Horn Effect cloud judgment', detail: 'One weak answer does not define a candidate. Evaluate each competency on its own evidence — don\'t let one negative answer poison the rest.' },
        { text: 'Fall for Recency Bias', detail: 'You will disproportionately remember the last 10 minutes. Take notes throughout and review them ALL before scoring.' },
        { text: 'Share scores with the panel before the calibration meeting', detail: 'Early score-sharing creates conformity pressure. Everyone must come with their independent assessment first.' },
        { text: 'Use vague language in interview notes', detail: '"Good communicator," "not a culture fit," "strong candidate" — these are opinions, not evidence. They won\'t hold up in debrief or legal review.' },
        { text: 'Trust a "perfect" interview performance uncritically', detail: 'AI co-pilots and extensive coaching can produce flawless surface answers. Drill into specifics: dates, names, trade-offs, failures.' },
      ],
      keyPhrases: [
        '"Walk me through the friction — what went wrong and how did you handle it?"',
        '"You mentioned [result]. What specifically did you do that caused that outcome?"',
        '"Tell me about a time this approach didn\'t work. What did you learn?"',
        '"Let me play that back — you\'re saying you personally [action]. Is that right?"',
        '"I notice I might be [bias] — let me re-examine the evidence."',
        '"What does the scorecard evidence say?" (for calibration discussions)',
        '"Can anyone point to a specific answer that supports or contradicts this assessment?"',
      ],
      quickTips: [
        'The Big 4 Biases: Affinity (like me), Halo (one great thing = great overall), Horn (one bad thing = bad overall), Recency (only remember the end).',
        'AI Fraud red flags: unnatural pauses (waiting for prompts), impossibly polished phrasing, inability to provide hyper-specific details when probed.',
        'The "Process over Content" shift: "Tell me about the messiest part of that project" exposes real experience that AI can\'t fabricate.',
        'Note-taking formula: "[Competency] — Candidate said: \'[direct quote]\' — demonstrates [evidence of skill level]."',
        'In calibration, disagree with evidence, not opinions. "I rated this differently because in answer 3, the candidate specifically said..."',
        'If you catch yourself thinking "I just have a good/bad feeling," pause — that\'s bias talking. Go back to the scorecard.',
      ],
      redFlags: [
        'Candidate gives flawless, polished answers but crumbles under specific follow-up questions',
        'Unnatural pauses (3-5 seconds of silence) before answering — possible AI co-pilot assistance',
        'Cannot describe trade-offs, failures, or what they\'d do differently — suggests rehearsed/fabricated',
        'Answers sound "written" rather than conversational — overly structured, buzzword-heavy, no filler words',
        'Claims sole credit for team accomplishments but can\'t name collaborators or describe their roles',
        'Interviewer notes contain subjective judgments with no supporting evidence',
      ],
      greenFlags: [
        'Candidate describes failures and lessons learned openly — signals authenticity and self-awareness',
        'Can name specific colleagues, stakeholders, and their roles in the project — hard to fabricate',
        'Provides granular details: dates, metrics, tool versions, edge cases — evidence of real experience',
        'Answers include natural hesitation and self-correction — suggests real-time recall, not scripted responses',
        'Interviewer notes contain direct quotes and specific observations tied to scorecard competencies',
        'Panel members arrive at calibration with independent, evidence-backed assessments',
      ],
    },
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
    cheatSheet: {
      dos: [
        { text: 'Be on time and prepared — every time', detail: 'Log in or arrive 2-3 minutes early. Have the candidate\'s resume, scorecard, and question plan open. Rushing in late signals "You\'re not a priority."' },
        { text: 'Introduce yourself, your role, and the interview agenda', detail: '"Hi, I\'m [Name], [Role]. Today we\'ll spend about 45 minutes — I\'ll ask some questions about your experience, then leave time for your questions."' },
        { text: 'Reserve the last 5-10 minutes to sell the role and team', detail: 'Candidates are evaluating YOU. Share what makes the team, mission, and growth opportunity compelling. Be honest — don\'t oversell.' },
        { text: 'Clarify the hand-off to the Talent/Recruiting team', detail: '"Our Talent team will follow up on next steps and timeline. They\'re your main point of contact from here." This sets clear boundaries and prevents mixed signals.' },
        { text: 'Practice active listening throughout', detail: 'Maintain eye contact (or camera focus), nod, and reference their earlier answers. "You mentioned X earlier — can you tell me more about that?"' },
        { text: 'Adhere to your SLA commitments', detail: 'If you committed to providing feedback within 24 hours, do it. Delays stall the process and candidates lose interest — or accept other offers.' },
      ],
      donts: [
        { text: 'Show up late, distracted, or unprepared', detail: 'Checking your phone, reading the resume for the first time during the interview, or multitasking on another screen — candidates notice everything.' },
        { text: 'Skip the agenda or jump straight into questions', detail: 'No context-setting creates anxiety. A 30-second agenda overview puts candidates at ease and produces better answers.' },
        { text: 'Monopolize the conversation', detail: 'If you\'re talking more than 30% of the time, you\'re not interviewing — you\'re lecturing. The candidate should be speaking 70%+ of the time.' },
        { text: 'Make promises about compensation, timelines, or promotions', detail: '"You\'ll definitely get this salary" or "You\'ll be promoted within a year" — only the Talent team or hiring authority should make commitments.' },
        { text: 'Ghost the process after the interview', detail: 'Failing to submit your scorecard or feedback on time stalls the entire pipeline. You are accountable for your part of the SLA.' },
        { text: 'End abruptly without allowing candidate questions', detail: '"We\'re out of time, good luck!" is damaging. Even 2 minutes for one question shows respect and leaves a positive final impression.' },
      ],
      keyPhrases: [
        '"Let me walk you through how today will go..."',
        '"I want to make sure you have time to ask me questions too."',
        '"What I love about this team is..."',
        '"Our Talent team will be your point of contact for next steps and timeline."',
        '"That\'s a great question — let me give you an honest answer."',
        '"Thank you for your time today. We really appreciate your interest in [company/team]."',
      ],
      quickTips: [
        'The 70/30 rule: the candidate should be speaking ~70% of the time. If you\'re talking more than 30%, recalibrate.',
        'First impressions go both ways. The first 2 minutes set the tone for the entire interview — make them warm, professional, and structured.',
        'Candidates talk. A great interview experience gets shared. A terrible one gets shared more — on Glassdoor, LinkedIn, and in their network.',
        'The "sell" is not about overselling. Be genuine about challenges and growth opportunities. Candidates respect honesty over hype.',
        'SLA accountability: Scorecard submitted within 24 hours. Feedback to the Talent team within the agreed timeline. No exceptions.',
        'End every interview with a clear, warm close: thank them, explain next steps, and leave the door open for their questions.',
      ],
      redFlags: [
        'Interviewer is late, unprepared, or distracted during the interview',
        'No introduction, no agenda, no context — candidate is dropped straight into questions',
        'Interviewer talks more than the candidate — monologuing instead of listening',
        'Promises made about salary, title, or promotion that aren\'t authorized',
        'Scorecard/feedback not submitted within the SLA window — stalling the pipeline',
        'Interview ends abruptly with no time for candidate questions',
      ],
      greenFlags: [
        'Interviewer arrives prepared with resume reviewed, questions mapped to scorecard, and agenda planned',
        'Candidate is put at ease with a warm introduction and clear structure for the conversation',
        'Active listening is visible — references to earlier answers, follow-up questions, and genuine engagement',
        'The role, team, and mission are pitched honestly — including challenges and growth areas',
        'Clear hand-off communicated: "The Talent team will follow up with next steps"',
        'Feedback and scorecard submitted within the committed SLA timeline',
      ],
    },
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
