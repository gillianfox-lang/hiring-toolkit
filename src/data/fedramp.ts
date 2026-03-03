export interface FedrampSection {
  id: string;
  title: string;
  icon: string;
  content: FedrampBlock[];
}

export interface FedrampBlock {
  type: 'text' | 'list' | 'note' | 'timeline';
  text?: string;
  items?: string[];
}

export interface FedrampFaq {
  question: string;
  answer: string;
}

export const fedrampPurpose =
  "This section outlines the various background check requirements to request FedRAMP access. The People Operations team is solely responsible for completing background check requirements; security-related questions should be directed to Security. For RBAC inquiries, please contact Security.";

export const fedrampAccess =
  "People Operations facilitates background checks for Security to grant FedRAMP access to employees. The background check process may vary based on an employee's location and whether access to customer databases is required. FedRAMP access is limited to full-time permanent employees in Canada and the USA. Exceptions for fixed-term employees, such as interns, may be granted. Please consult your manager before submitting a Jira request to Security. Employees or their managers can request FedRAMP access through JIRA via the Security Service Desk. Manager approval is required.";

export const fedrampSections: FedrampSection[] = [
  {
    id: 'no-db-canada',
    title: 'Without Customer DB Access — Canadian Users',
    icon: '🇨🇦',
    content: [
      {
        type: 'text',
        text: "Canadian users must pass Geotab's Standard Background Check requirements. Most Canadian Geotabbers will already have a completed background check on file through Geotab's background check provider. If there is no background check on file for the employee, one will be initiated in accordance with Geotab's Canadian background check policy.",
      },
      {
        type: 'timeline',
        text: 'Please allow 24–48 hours for the processing of Canadian background check clearance requests from People Operations.',
      },
    ],
  },
  {
    id: 'no-db-usa',
    title: 'Without Customer DB Access — US Users',
    icon: '🇺🇸',
    content: [
      {
        type: 'text',
        text: "Background check requirements for USA users vary based on RBAC role in accordance with our USA background check policy.",
      },
      {
        type: 'list',
        items: [
          'Enhanced FedRAMP Background Check: This enhanced background check is completely separate from the background check done for new hires prior to their commencement of employment. This check is initiated through a separate vendor, AccuSource.',
          'Provide Proof of Citizenship: The employee must upload proof of citizenship through Dayforce.',
          'Fingerprinting: The employee must complete a fingerprinting appointment through the vendor Printscan. These fingerprints will be used to conduct an FBI Background Check.',
        ],
      },
      {
        type: 'timeline',
        text: 'Please allow 1–2 weeks for the processing of US clearance without access to customer databases requests from People Operations. All timelines are partially dependent on the employee meeting all provided deadlines.',
      },
    ],
  },
  {
    id: 'db-canada',
    title: 'With Customer DB Access — Canadian Users',
    icon: '🇨🇦',
    content: [
      {
        type: 'text',
        text: "Canadian users must pass Geotab's Standard Background Check requirements. Most Canadian Geotabbers will already have a completed background check on file through Geotab's background check provider. If there is no background check on file for the employee, one will be initiated in accordance with Geotab's Canadian background check policy.",
      },
      {
        type: 'timeline',
        text: 'Please allow 24–48 hours for the processing of Canadian background check clearance requests from People Operations.',
      },
    ],
  },
  {
    id: 'db-usa',
    title: 'With Customer DB Access (USPS Clearance) — US Users',
    icon: '🇺🇸',
    content: [
      {
        type: 'note',
        text: 'In order for an employee to gain access to customer databases within FedRAMP, users must obtain a USPS clearance.',
      },
      {
        type: 'text',
        text: 'The background check requirements for users who require access to customer databases have various requirements, including a three-year US residency requirement and a government clearance process. Please review the requirements carefully and plan accordingly.',
      },
      {
        type: 'list',
        items: [
          'Enhanced FedRAMP Background Check: This enhanced background check is completely separate from the background check done for new hires through Geotab\'s external vendor Sterling. This background check is completed through the vendor AccusourceHR.',
          'Provide Proof of Citizenship: The employee must upload proof of citizenship through Dayforce.',
          'Fingerprinting: The employee must complete two fingerprinting appointments through Geotab\'s fingerprint vendor Printscan. One set of fingerprints is for an FBI Background Check. The second set is for a Capture and Archive, which will be ordered and shipped to USPS directly.',
          'USPS Background Check: Candidates must provide verifiable documentation of continuous, lawful residency in the United States for at least three years immediately before applying. The USPS background check will be initiated via email from USPIS and will require employment history, travel history, criminal history, residential history, and personal references for the past 7 years.',
        ],
      },
      {
        type: 'note',
        text: 'For Non-US Citizens, the three-year residency requirement is strictly enforced; no exceptions will be made for vacations or any other travel outside the country. For US Citizens, if an applicant has been outside of the U.S. for more than 6 months (consecutive) out of the last 3 years, a clearance cannot be processed. Contact HRCompliance@geotab.com with questions.',
      },
      {
        type: 'text',
        text: 'Once approved, the clearance is valid for 5 years. Users are required to go through this clearance process every five years.',
      },
      {
        type: 'timeline',
        text: 'Please allow 8–12 weeks for the processing of US clearance with customer database access requests from People Operations. All timelines are partially dependent on the employee meeting all provided deadlines.',
      },
      {
        type: 'text',
        text: 'Employees required to be fingerprinted are eligible to get reasonable mileage reimbursed for travel in accordance with the Travel Expense Policy.',
      },
    ],
  },
];

export const fedrampFaqs: FedrampFaq[] = [
  {
    question: 'When should a manager request FedRAMP access for a new hire or a current employee?',
    answer: "A FedRAMP background check should be requested as soon as a new hire or internal employee is identified for a role that requires access to FedRAMP data. The request should be initiated before the individual's start date or transfer date to ensure they can begin working without delay.",
  },
  {
    question: 'Why are the requirements different for Canadian Users and US users?',
    answer: 'The background check requirements differ based on the type of data being accessed and the specific regulations that govern that data. This is not a Geotab-specific policy but rather a requirement for any company and its employees who handle this type of data on behalf of U.S. government customers.',
  },
  {
    question: 'How do I determine what access/role my employee requires?',
    answer: 'Please reference the RBAC Control checklist and FedRAMP RBAC SOP, managed by the Security Team.',
  },
  {
    question: 'I have concerns with undergoing a background check, who should I speak with?',
    answer: 'If you have concerns about the background check process, please reach out to kavyajasti@geotab.com.',
  },
  {
    question: 'What happens if I refuse to undergo the background check?',
    answer: 'Access to federal information systems and data requires strict security protocols. Refusing to undergo the background check is considered a failure to meet a business requirement. If you decline, you will need to be reassigned to other projects or roles at Geotab. Your manager and HRBP will discuss options with you.',
  },
  {
    question: 'What happens to this information if I am no longer working on USPS projects?',
    answer: "USPS stores this information for 5 years. Employee records will be maintained in accordance with Geotab's retention records schedule. Additionally, Geotab's background check vendor will retain your data up to seven years from the initial background check.",
  },
  {
    question: 'How long is the clearance period?',
    answer: 'The clearance is valid for five (5) years from the date granted. USPS will require a Background Reinvestigation that must be processed every five (5) years.',
  },
  {
    question: 'How should I prepare for the clearance process?',
    answer: 'Once tagged in the Security ticket, People Operations will reach out via email with first steps. You will have 5 days to complete these steps. People Operations will also send the PDF version of the electronic USPS background check so you can review and prepare. These forms require personal attestations and information such as residential history, educational background, personal references, travel history, and employment history for the past 7 years.',
  },
  {
    question: 'What are the specific requirements for FedRAMP roles with access to customer databases?',
    answer: 'Candidates must be a US resident for at least the last three (3) years and have the ability to pass a comprehensive background check. Leaders should ensure these requirements are shared with their Talent Acquisition Partner and included in applicable job postings. Canadian FedRAMP users that need access to customer databases are not eligible for relocation to the US.',
  },
  {
    question: 'What is the difference between FedRAMP access and CONUS access?',
    answer: 'To access FedRAMP, you need to be a US or Canadian employee who resides in Canada/USA. To access CONUS, you need to be a US employee who must reside in the CONUS (Continental U.S.) region.',
  },
  {
    question: 'I still have questions, who do I reach out to?',
    answer: 'You can reach out to your HRcompliance team.',
  },
];
