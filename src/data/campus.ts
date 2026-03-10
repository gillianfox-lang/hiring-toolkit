export interface CampusTab {
  id: string;
  label: string;
  icon: string;
}

export interface CampusBlock {
  type: 'text' | 'list' | 'note' | 'heading';
  text?: string;
  items?: string[];
}

export interface CampusCard {
  id: string;
  title: string;
  icon: string;
  content: CampusBlock[];
}

export interface CampusPartner {
  name: string;
  description: string;
  website: string;
  awards?: string[];
}

export interface CampusProgram {
  name: string;
  description: string;
  icon: string;
}

export const campusTabs: CampusTab[] = [
  { id: 'overview', label: 'Overview', icon: '🎓' },
  { id: 'hiring-manager', label: 'Hiring Manager', icon: '📋' },
  { id: 'programs', label: 'Programs', icon: '🚀' },
  { id: 'partners', label: 'Partners', icon: '🏫' },
];

export const campusOverview = "Geotab's Co-op and Internship Program is a global program for students interested in completing their co-op or internship in a fast paced, collaborative and innovative environment. At Geotab, we empower the next generation of Geotabbers as we believe in the development of strategic thinkers, innovators and future leaders.";

export const campusEligibility = "A student who is currently enrolled in a post-secondary institution. If they're a new graduate, please check out the full-time employment opportunities on the careers website.";

export const campusWhatToExpect: string[] = [
  'Full access to learning and networking tools, social events, student advisory groups, student challenges and more!',
  'A dedicated manager and mentor who will help you get started and support you throughout your entire journey at Geotab.',
  'A fun and meaningful experience with endless opportunities to practice new skills and connect with peers from around the world.',
  'The ability to work on multiple projects throughout the organization that make a real-world impact.',
];

export const campusWhoYouAre: string[] = [
  'A student with a 4, 8, 12, or 16 month work-term availability.',
  "You're currently enrolled in a post-secondary institution.",
  'You want to work in an environment where you can dive into a variety of complex challenges, build relationships, learn and grow.',
  "You're innovative, creative and enjoy working on a team.",
];

export const campusReferralSteps: string[] = [
  'Click Add > Add a Referral in Greenhouse',
  "Search for the internship role title under the 'job' section",
  "Review the qualifications to ensure they're referred to the role(s) that best match their skills and experience",
];

export const hiringManagerPreHire: CampusCard[] = [
  {
    id: 'job-description',
    title: 'Job Description',
    icon: '📝',
    content: [
      { type: 'text', text: 'Create a job description by making a copy of the provided template. In Greenhouse, select [TEMPLATE] Intern to proceed.' },
    ],
  },
  {
    id: 'intake-call',
    title: 'Intake Call',
    icon: '📞',
    content: [
      { type: 'text', text: 'Meet with a member of the Campus team for an Intake Call to discuss the role and hiring process.' },
    ],
  },
  {
    id: 'responsiveness',
    title: 'Responsiveness',
    icon: '⚡',
    content: [
      { type: 'text', text: "Please provide feedback on shortlisted candidates, technical assessments, and final interviews within 3 days. This is especially important when recruiting from schools with strict deadlines (e.g., Waterloo's Rank/Match)." },
    ],
  },
  {
    id: 'decision-making',
    title: 'Decision Making',
    icon: '✅',
    content: [
      { type: 'text', text: 'To ensure a positive candidate experience and avoid losing out on top talent, provide the Campus team with a decision on all candidates no later than 1 week after the final interview.' },
      { type: 'note', text: 'Please ensure all scorecards are submitted within 24 hours of completing the interview.' },
    ],
  },
  {
    id: 'availability',
    title: 'Availability',
    icon: '📅',
    content: [
      { type: 'text', text: 'Clearly communicate with your recruiter throughout the recruitment process, letting them know ahead of time if you plan to be unavailable. Please ensure your calendar is up to date with vacations, meetings, holidays, etc. so the Campus team can schedule interviews efficiently.' },
    ],
  },
];

export const hiringManagerPostHire: string[] = [
  "Show the Geotab Vision: Help interns see how their tasks contribute to our broader goals and innovation.",
  "Assign Impactful Projects: Engage them with projects that align with their studies and career goals, reflecting Geotab's cutting-edge work.",
  "Provide Essential Resources: Ensure they have the tools and support needed to thrive in our dynamic environment.",
  "Ease into the Role: Allow time for adjustment and gradual learning, avoiding overload.",
  "Be Supportive: Create a welcoming space for questions and constructive feedback.",
  "Promote Engagement: Encourage networking and participation in the Geotab community and Campus Program's offerings, including virtual and in-person student-run events and volunteer opportunities.",
];

export const hiringManagerFunding: string[] = [
  'Co-operative Education Tax Credit: Helps encourage Ontario businesses to provide experiential learning opportunities. Forward tax credit letters received from schools to campusteam@geotab.com.',
  "Student Work Placement Program (SWPP): As part of the Government of Canada's SWPP program, a variety of funding opportunities are available for employers to hire students for experiential learning. Contact Sarah Lima for more information.",
];

export const campusPrograms: CampusProgram[] = [
  {
    name: 'High School Outreach Program',
    description: 'Inspiring the next generation by introducing high school students to career pathways in technology through outreach and engagement activities. We host visits to our Headquarters, welcoming students for immersive experiences featuring company presentations, office tours, shared lunches, and interactive Q&A sessions.',
    icon: '🏫',
  },
  {
    name: 'Intern Innovation Challenge',
    description: 'Encouraging interns to tackle real-world problems and present creative solutions that have a tangible impact on our business.',
    icon: '💡',
  },
  {
    name: 'Student Experience Committee',
    description: 'Ensuring every intern and co-op student enjoys a supportive, enriching, and rewarding experience at Geotab.',
    icon: '🤝',
  },
  {
    name: 'Resume Review Sessions',
    description: 'Supporting students by offering personalized feedback to help them succeed in the job market.',
    icon: '📄',
  },
  {
    name: 'Take Our Kids to Work Day',
    description: 'Hosting Grade 9 students at our Headquarters for career exploration and hands-on learning, including office tours, specialized learning sessions, and fun activities.',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    name: 'Campus Events & Volunteering',
    description: 'The Campus Team is always looking for volunteers to join external events like career fairs. Sign up to represent Geotab at universities and colleges!',
    icon: '🎪',
  },
];

export const campusPartners: CampusPartner[] = [
  {
    name: 'University of Waterloo',
    description: "Known for its world-renowned co-op program and excellence in engineering and computer science, the University of Waterloo is a cornerstone of our talent pipeline. Students from Waterloo bring innovative ideas and technical expertise to our teams, driving impactful projects.",
    website: 'https://uwaterloo.ca/',
    awards: [
      'Impact on Student Experience (2022)',
      'Impact in Innovation (2020)',
    ],
  },
  {
    name: 'Toronto Metropolitan University (TMU)',
    description: "TMU's emphasis on innovation and practical learning makes it a key partner for Geotab. Our engagement with TMU students across various programs drives fresh ideas and actionable insights.",
    website: 'https://www.torontomu.ca/',
  },
  {
    name: 'University of Toronto (UofT)',
    description: 'U of T provides Geotab with access to a diverse and talented student body excelling across disciplines such as data science and engineering. Our participation in programs like the PEY Co-op Program and MScAC research partnership strengthens our ties with this prestigious institution.',
    website: 'https://www.utoronto.ca/',
  },
  {
    name: 'McMaster University',
    description: "McMaster's emphasis on interdisciplinary learning and cutting-edge research aligns perfectly with Geotab's innovative spirit. From engineering to business, McMaster students contribute to our mission of continuous growth and excellence.",
    website: 'https://www.mcmaster.ca/',
  },
  {
    name: 'University of British Columbia (UBC)',
    description: "UBC's exceptional students and programs bring a unique perspective to Geotab. Recognized as a top employer through UBC's Science Co-op program, we are proud to continue collaborating with this leading university.",
    website: 'https://www.ubc.ca/',
    awards: [
      'UBC Science Co-op Employer Award (2024)',
      'UBC Science Co-op Supervisor Award (2024) — Caitlin McCann',
    ],
  },
  {
    name: 'Georgia Institute of Technology (Georgia Tech)',
    description: "Georgia Tech's global reputation for engineering and technology positions it as a vital partner in our efforts to expand our talent pipeline and presence in Atlanta for both full-time roles and internships.",
    website: 'https://www.gatech.edu/',
  },
];

export const campusPartnersNote = "While these universities represent key focus areas for our outreach and partnership efforts, they are not an exhaustive list. Geotab hires exceptional talent from universities and colleges throughout North America, leveraging diverse perspectives to drive innovation and success.";
