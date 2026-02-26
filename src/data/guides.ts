export interface Guide {
  id: string;
  title: string;
  icon: string;
  summary: string;
  content: string[];
}

export const guides: Guide[] = [
  {
    id: 'structured-interviews',
    title: 'Structured Interview Best Practices',
    icon: '📋',
    summary: 'Learn how to conduct consistent, fair interviews with structured methodologies.',
    content: [
      '**What is a Structured Interview?** A structured interview uses a predetermined set of questions asked in the same order to every candidate. This approach reduces bias and increases the validity of hiring decisions by up to 2x compared to unstructured interviews.',
      '**Preparation Steps:**\n• Define the key competencies required for the role before creating questions\n• Write questions that directly map to those competencies\n• Create a scoring rubric with specific behavioral indicators for each score level\n• Prepare follow-up probes in advance to dig deeper consistently',
      '**During the Interview:**\n• Ask every candidate the same core questions in the same order\n• Use the same follow-up probes for clarity\n• Take detailed notes on what the candidate actually says, not your interpretation\n• Score each answer independently — don\'t let one great answer inflate others\n• Avoid small talk that could introduce bias (hobbies, mutual connections)',
      '**Scoring Best Practices:**\n• Use a 1-5 scale with clear behavioral anchors for each level\n• Score each question immediately after the candidate responds\n• Don\'t discuss candidates with other interviewers until everyone has submitted scores\n• Focus on evidence over impressions — "the candidate described X" vs "seemed smart"',
      '**Common Pitfalls:**\n• Asking different questions to different candidates based on their resume\n• Letting the interview become a casual conversation\n• Not calibrating scores across interviewers\n• Weighting technical skills over demonstrated competencies without justification',
    ],
  },
  {
    id: 'behavioral-questions',
    title: 'Behavioral Question Bank (STAR Method)',
    icon: '⭐',
    summary: 'A comprehensive question bank using the STAR framework for effective behavioral assessment.',
    content: [
      '**The STAR Method:** STAR stands for Situation, Task, Action, Result. It\'s a framework for asking and evaluating behavioral interview questions that focuses on specific past experiences rather than hypothetical scenarios.',
      '**Leadership Questions:**\n• "Tell me about a time you had to lead a team through a significant change. What was your approach?" (Listen for: clarity of vision, communication strategy, empathy)\n• "Describe a situation where you had to make an unpopular decision. How did you handle it?" (Listen for: conviction, transparency, stakeholder management)\n• "Give me an example of when you developed someone on your team. What did you do?" (Listen for: coaching approach, investment in others, patience)',
      '**Teamwork & Collaboration:**\n• "Tell me about a time you had to work closely with someone whose style was very different from yours." (Listen for: adaptability, empathy, conflict resolution)\n• "Describe a project where you had to coordinate across multiple teams or departments." (Listen for: communication, influence without authority, organization)\n• "Share an experience where a team project went off track. What role did you play in getting it back on course?" (Listen for: ownership, problem-solving, proactiveness)',
      '**Problem Solving:**\n• "Tell me about the most complex problem you\'ve solved in the past year." (Listen for: analytical thinking, creativity, persistence)\n• "Describe a time when you had to make a decision with incomplete information." (Listen for: judgment, risk assessment, decisiveness)\n• "Give me an example of when you identified a problem before it became critical." (Listen for: proactiveness, pattern recognition, systemic thinking)',
      '**Effective Follow-Up Probes:**\n• "What was the specific result? Can you quantify the impact?"\n• "What would you do differently if you could do it over?"\n• "How did others respond to your approach?"\n• "What did you learn from that experience that you\'ve applied since?"',
    ],
  },
  {
    id: 'unconscious-bias',
    title: 'Avoiding Unconscious Bias',
    icon: '🧠',
    summary: 'Recognize and mitigate common biases that affect hiring decisions.',
    content: [
      '**What is Unconscious Bias?** Unconscious biases are social stereotypes about certain groups that individuals form outside their conscious awareness. In hiring, these biases can lead to unfair evaluation of candidates and homogeneous teams.',
      '**Common Biases in Interviewing:**\n• **Affinity Bias:** Favoring candidates who are similar to you (same school, hobbies, background)\n• **Halo/Horn Effect:** Letting one strong/weak trait color your overall evaluation\n• **Confirmation Bias:** Seeking evidence that confirms your initial impression\n• **Anchoring Bias:** Over-relying on the first piece of information (e.g., resume school name)\n• **Attribution Bias:** Explaining behavior differently based on group membership',
      '**Mitigation Strategies:**\n• Use structured interviews with predetermined questions and scoring rubrics\n• Review resumes blind (remove names, photos, school names) when possible\n• Have diverse interview panels — at least 2-3 interviewers from different backgrounds\n• Score candidates independently before discussing as a group\n• Use work samples and practical assessments instead of relying on "gut feeling"',
      '**During the Interview:**\n• Notice when you\'re making assumptions — pause and challenge them\n• Focus on what the candidate says and does, not how they look or sound\n• Avoid questions about personal life, family status, or cultural background\n• Be aware of "culture fit" as a proxy for "similar to us" — instead evaluate "culture add"\n• Give every candidate the same amount of time and attention',
      '**After the Interview:**\n• Write your evaluation immediately while the conversation is fresh\n• Separate facts from feelings: "The candidate described leading a 10-person migration" vs. "seemed experienced"\n• Challenge yourself: "Would I evaluate this answer the same way from a different candidate?"\n• Track hiring data over time to identify patterns of bias in your decisions',
    ],
  },
  {
    id: 'legal-guidelines',
    title: "Legal Do's and Don'ts",
    icon: '⚖️',
    summary: 'Understand what you can and cannot ask to stay legally compliant.',
    content: [
      '**Why It Matters:** Asking inappropriate questions during interviews can expose your company to discrimination lawsuits and create a hostile experience for candidates. Many well-intentioned questions can cross legal boundaries.',
      "**Questions You Should NEVER Ask:**\n• Age or date of birth (\"When did you graduate?\" can be a proxy)\n• Marital or family status (\"Do you have kids?\" \"Are you married?\")\n• Religion or religious practices (\"Can you work Saturdays?\" — instead state the schedule)\n• National origin or citizenship (\"Where are you originally from?\")\n• Disability or health conditions (\"Do you have any health issues?\")\n• Pregnancy or family planning (\"Are you planning to have children?\")\n• Sexual orientation or gender identity\n• Arrest record (conviction records may be OK depending on jurisdiction)",
      '**Legal Alternatives:**\n• Instead of "How old are you?" → "Are you legally authorized to work in this country?"\n• Instead of "Do you have kids?" → "This role requires occasional travel. Are you able to meet this requirement?"\n• Instead of "Where are you from?" → "Are you authorized to work in [country]?"\n• Instead of "Do you go to church?" → State the work schedule and ask if they can commit to it\n• Instead of "Do you have a disability?" → "Can you perform the essential functions of this role with or without accommodation?"',
      '**Safe Topics to Discuss:**\n• Work experience and qualifications\n• Education and training relevant to the role\n• Skills and competencies\n• Availability and schedule requirements (stated as job requirements)\n• Ability to perform essential job functions\n• Professional references\n• Salary expectations (check local laws on salary history bans)',
      '**Best Practices:**\n• When in doubt, ask yourself: "Is this question directly relevant to their ability to do the job?"\n• Keep a list of approved questions and stick to them\n• If a candidate volunteers personal information, acknowledge it briefly and redirect to job-related topics\n• Document your questions and reasons for hiring decisions\n• Consult with HR or legal if you\'re unsure about a question\'s legality',
    ],
  },
  {
    id: 'evaluation-rubric',
    title: 'Evaluation Rubric Template',
    icon: '📊',
    summary: 'Use consistent scoring frameworks to evaluate candidates fairly and objectively.',
    content: [
      '**Why Use a Rubric?** A scoring rubric ensures every candidate is evaluated against the same criteria. It reduces bias, improves consistency across interviewers, and creates documentation that supports defensible hiring decisions.',
      '**Rubric Structure:**\nFor each competency, define 5 score levels:\n• **1 — Does Not Meet:** No evidence of the competency. Responses are vague, irrelevant, or concerning.\n• **2 — Partially Meets:** Limited evidence. Some relevant experience but lacks depth or specificity.\n• **3 — Meets Expectations:** Solid evidence. Clear examples with reasonable outcomes. Would be effective in the role.\n• **4 — Exceeds Expectations:** Strong evidence. Multiple detailed examples showing impact and growth.\n• **5 — Exceptional:** Outstanding evidence. Demonstrates mastery with significant, measurable impact.',
      '**Sample Competencies & Indicators:**\n\n**Communication (Score 1-5):**\n• 1: Responses are unclear, disorganized, or off-topic\n• 3: Articulates ideas clearly, uses specific examples, listens well\n• 5: Exceptional clarity, adapts communication to audience, asks insightful questions\n\n**Problem Solving (Score 1-5):**\n• 1: Cannot describe a structured approach to problems\n• 3: Shows logical thinking, considers multiple approaches, arrives at reasonable solutions\n• 5: Demonstrates innovative thinking, anticipates edge cases, quantifies outcomes',
      '**How to Use the Rubric:**\n1. Identify 4-6 key competencies for the role before interviewing\n2. Map each interview question to 1-2 competencies\n3. Score each competency immediately after the candidate\'s response\n4. Write brief evidence notes for each score (1-2 sentences)\n5. Calculate the total score only after scoring all competencies individually\n6. Compare candidates using total scores and competency breakdowns',
      '**Calibration Tips:**\n• Have all interviewers score a practice transcript together and discuss differences\n• Review the scoring distribution after several candidates — if everyone gets 3s, your rubric may need sharper definitions\n• Don\'t adjust scores after seeing other interviewers\' evaluations\n• Use the rubric as a guide for discussion, not a replacement for judgment\n• Periodically review your rubrics to ensure they reflect current role requirements',
    ],
  },
  {
    id: 'candidate-experience',
    title: 'Candidate Experience Tips',
    icon: '💬',
    summary: 'Create a positive, professional interview experience that reflects well on your company.',
    content: [
      '**Why Candidate Experience Matters:** 72% of candidates share negative interview experiences online. A poor interview experience can damage your employer brand and cause top talent to reject offers. Great candidate experience is also correlated with better assessment data — relaxed candidates perform more authentically.',
      '**Before the Interview:**\n• Send clear logistics: time, duration, format, who they\'ll meet, what to prepare\n• Share the interview structure so candidates know what to expect\n• Ensure your video/phone setup works before the interview starts\n• Review the candidate\'s resume and application thoroughly — nothing says "we don\'t care" like asking questions answered on their resume\n• Prepare your questions in advance; don\'t wing it',
      '**During the Interview:**\n• Start with a warm welcome and brief introduction about yourself and the team\n• Explain the interview format and timeline upfront\n• Create psychological safety: "There are no trick questions. I\'m looking to understand your experience."\n• Listen actively — don\'t check your phone or look distracted\n• Leave 5-10 minutes for candidate questions at the end\n• Be honest about the role — including challenges and growth areas',
      '**Closing the Interview Well:**\n• Thank them genuinely for their time\n• Clearly communicate next steps and timeline\n• Ask if they have any concerns or questions you haven\'t addressed\n• Follow up within the promised timeline — if there are delays, communicate them\n• Provide feedback when possible, even to candidates you don\'t move forward with',
      '**Common Mistakes to Avoid:**\n• Keeping candidates waiting without explanation\n• Asking the same questions that a previous interviewer already covered\n• Making the interview feel like an interrogation rather than a conversation\n• Overselling the role or company — candidates see through this\n• Ghosting candidates after interviews — always close the loop\n• Using the interview to show off your knowledge instead of learning about the candidate',
    ],
  },
];
