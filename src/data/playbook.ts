export interface PlaybookPillar {
  title: string;
  description: string;
  icon: string;
}

export interface SLAStage {
  stage: string;
  commitment: string;
  standardDays: string;
  nonStandardDays: string;
  responsible: string;
}

export interface BenchmarkRow {
  stage: string;
  standardDays: string;
  nonStandardDays: string;
}

export interface PlaybookResource {
  title: string;
  icon: string;
  link?: string;
}

export const playbookIntro = {
  welcome:
    "If you're reading this, congratulations! You are about to embark on an exciting journey in partnership with the Talent Acquisition team to attract and hire the best and brightest talent swiftly and efficiently. This playbook is your guide to mastering the recruitment process.",
  commitment:
    "Before submitting a job in the applicant tracking system, you are committing to accepting all the responsibilities of a hiring manager. This includes adhering to standard SLAs and timelines, ensuring we maintain the high standards necessary to build an exceptional team while providing an excellent candidate experience.",
  callToAction:
    "Bringing exceptional talent onto your team is no small task; it requires a significant time commitment and a dedication to providing an outstanding candidate experience. Let's make this hiring journey not just successful, but also fun and inspiring!",
};

export const recruitmentPillars: PlaybookPillar[] = [
  {
    title: "Attracting Top Talent",
    description:
      "The key to success lies in attracting the best and brightest minds. Creative and strategic storytelling showcases unique culture and mission, inspiring talented individuals to join us on our journey of innovation.",
    icon: "🧲",
  },
  {
    title: "Positive Candidate Experience",
    description:
      "A seamless, positive candidate experience is crucial. Consistent and timely communication throughout the recruitment process ensures that every candidate feels valued and respected, helping us stand out as an employer of choice.",
    icon: "🤝",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Continuously leveraging data-driven insights to inform recruitment strategies and next steps. Adhering to SLAs and timelines allows us to make informed decisions quickly and efficiently, measuring success and identifying areas for improvement.",
    icon: "📊",
  },
];

export const slaImpactAreas = [
  {
    metric: "Time to Fill",
    description:
      "By adhering to specified timelines, significantly reduce the time it takes to fill open positions.",
  },
  {
    metric: "Time to Hire",
    description:
      "Streamline the hiring process, moving swiftly from candidate application to offer.",
  },
  {
    metric: "Pipeline Speed",
    description:
      "Consistent and timely actions keep the recruitment pipeline moving efficiently, preventing bottlenecks.",
  },
  {
    metric: "Offer Acceptance Rate",
    description:
      "A structured and expedited process improves the candidate experience, increasing offer acceptance.",
  },
  {
    metric: "Candidate Experience",
    description:
      "Timely and clear communication enhances the overall candidate experience and employer brand.",
  },
];

export const industryBenchmarks: BenchmarkRow[] = [
  {
    stage: "Kick-off meeting to posting the job",
    standardDays: "5.5",
    nonStandardDays: "5.5",
  },
  {
    stage: "Job posted to screening started",
    standardDays: "4.5",
    nonStandardDays: "4.5",
  },
  {
    stage: "Conduct all interviews",
    standardDays: "36",
    nonStandardDays: "48",
  },
  {
    stage: "Interview to candidate feedback",
    standardDays: "12",
    nonStandardDays: "16",
  },
  {
    stage: "Final decision and extend offer",
    standardDays: "4.5",
    nonStandardDays: "2.5",
  },
  {
    stage: "Offer to acceptance",
    standardDays: "N/A",
    nonStandardDays: "N/A",
  },
  { stage: "Total days", standardDays: "62.5", nonStandardDays: "76.5" },
  {
    stage: "IDEAL (gold standard)",
    standardDays: "60",
    nonStandardDays: "75",
  },
];

export const slaStages: SLAStage[] = [
  {
    stage: "Identify the need",
    commitment:
      "Consult with your leaders, navigate headcount requirements, and decide it's time to expand. Recognize this involves a lengthy time commitment including reviewing resumes and conducting interviews promptly.",
    standardDays: "N/A",
    nonStandardDays: "N/A",
    responsible: "Hiring Manager",
  },
  {
    stage: "New job titles — HRBP request",
    commitment:
      "HRBP submits request for new job description and compensation ranges at time of requisition submission, gets approvals from Compensation Team.",
    standardDays: "10",
    nonStandardDays: "10",
    responsible: "HRBP",
  },
  {
    stage: "Submit job in ATS",
    commitment:
      "Submit the job, meaning you are fully prepared to hire. If you have vacation plans, delegate a team member to manage the process in your absence.",
    standardDays: "N/A",
    nonStandardDays: "N/A",
    responsible: "Hiring Manager / HRBP",
  },
  {
    stage: "Kick-off meeting",
    commitment:
      "Talent reaches out to align on role requirements, including non-negotiable vs. nice-to-have skills, confirming pre-screening questions, hiring team members, and pre-booking interview times.",
    standardDays: "3",
    nonStandardDays: "3",
    responsible: "Talent / Hiring Manager",
  },
  {
    stage: "Job postings",
    commitment:
      "Talent posts the job on various job boards and careers site, ensuring maximum visibility.",
    standardDays: "1",
    nonStandardDays: "1",
    responsible: "Talent",
  },
  {
    stage: "Application review",
    commitment:
      "Talent oversees most stages of the pipeline, ensuring smooth progression based on what was discussed in the kick-off call. Opportunity to collaborate on shortlisting resumes early.",
    standardDays: "7",
    nonStandardDays: "7",
    responsible: "Talent",
  },
  {
    stage: "Recruiter screen",
    commitment:
      "Talent begins booking calls with candidates and conducting phone screens. Initial shortlist ready to kick off screening while continuously reviewing applicants.",
    standardDays: "12",
    nonStandardDays: "15",
    responsible: "Talent",
  },
  {
    stage: "Candidate quiz",
    commitment:
      "Talent sends quiz to candidates who do well on the phone screen. Candidates get 48 hours to complete.",
    standardDays: "3",
    nonStandardDays: "3",
    responsible: "Talent",
  },
  {
    stage: "HM application review",
    commitment:
      "You review resumes and phone screen scorecards.",
    standardDays: "2",
    nonStandardDays: "2",
    responsible: "Hiring Manager",
  },
  {
    stage: "Assessments",
    commitment:
      "You have time allotted to conduct the live coding assessment (if applicable) while being prepared with the right set of questions.",
    standardDays: "7",
    nonStandardDays: "7",
    responsible: "Talent / Hiring Manager",
  },
  {
    stage: "Assessment review",
    commitment:
      "Review the coding assessment within the committed time frame. Inform Talent who moves on to the next stage. Provide a rejection reason as the candidate has invested significant time.",
    standardDays: "2",
    nonStandardDays: "2",
    responsible: "Hiring Manager",
  },
  {
    stage: "Interviews",
    commitment:
      "Multiple interview stages depending on the role. It is crucial to make yourself available for interviews to ensure the process moves forward efficiently.",
    standardDays: "17",
    nonStandardDays: "25",
    responsible: "Talent / Hiring Manager",
  },
  {
    stage: "Scorecard submission",
    commitment:
      "Promptly submit feedback — crucial for advancing the process and ensuring we don't lose qualified candidates. Submit within 1 day of the interview.",
    standardDays: "1",
    nonStandardDays: "1",
    responsible: "Hiring Manager",
  },
  {
    stage: "Compensation review",
    commitment:
      "You've decided who to hire! Talent works closely with internal stakeholders to prepare the offer letter details.",
    standardDays: "1",
    nonStandardDays: "2",
    responsible: "Talent / HRBP / Compensation",
  },
  {
    stage: "Offer",
    commitment:
      "Talent ensures everything is done to get the candidate to accept. Reference resources on how to engage with the candidate pre and post offer acceptance.",
    standardDays: "1",
    nonStandardDays: "1",
    responsible: "Talent",
  },
  {
    stage: "Compensation negotiation",
    commitment:
      "Talent and HRBP manage negotiation with support from Compensation and Department Head.",
    standardDays: "1",
    nonStandardDays: "2",
    responsible: "Talent / HRBP",
  },
  {
    stage: "Hire",
    commitment:
      "Candidates receive their offer letter and are given time to respond.",
    standardDays: "3",
    nonStandardDays: "5",
    responsible: "Talent",
  },
];

export const slaTotals = {
  standard: 61,
  nonStandard: 76,
};

export const slaKeyNotes = [
  "No candidate should remain in application review stage for more than 15 days.",
  "Once shortlisted, no candidate should remain in any stage for more than 7 days without receiving communication from the Talent Team.",
  "The number of days refers to the time frame in which each activity should be completed, based on the previous step.",
];

export const slaLegend = [
  { abbr: "HRBP", full: "Human Resources Business Partner" },
  { abbr: "HM", full: "Hiring Manager (You)" },
  { abbr: "Talent", full: "Talent Acquisition Team" },
];

export const playbookResources: PlaybookResource[] = [
  { title: "Recruitment Process Overview", icon: "📋", link: "https://docs.google.com/document/d/12pQFV49wljGhUQaLwuHFQMoEoCH2OniToBSvxddDdSg/edit?tab=t.0" },
  { title: "The Art of Interviewing", icon: "🎨" },
  { title: "ATS Hiring Manager Training", icon: "🖥️" },
  { title: "Hiring Manager Training Guide", icon: "📖" },
  { title: "Hiring Manager Onboarding Guide", icon: "🚀" },
];
