export interface BankQuestion {
  question: string;
  listenFor: string;
  idealAnswer: string;
  followUp: string;
  category: string;
  tags: string[];
}

export interface QuestionCategory {
  id: string;
  label: string;
  icon: string;
}

export interface GeotabRole {
  title: string;
  type: 'Individual Contributor' | 'People Leader';
  family: string;
}

export interface RoleFamily {
  id: string;
  label: string;
  icon: string;
  keywords: string[];
  categories: string[];
}

// ─── Geotab role families ───
export const roleFamilies: RoleFamily[] = [
  {
    id: 'software-engineering',
    label: 'Software Engineering',
    icon: '💻',
    keywords: ['software', 'developer', 'engineering', 'firmware', 'full stack', 'backend', 'frontend', 'mobile', 'devops', 'cloud automation', 'cloud architect', 'platform engineering', 'site reliability', 'qa', 'quality assurance', 'test', 'sdet', 'embedded', 'web developer', 'application support'],
    categories: ['technical', 'problem-solving', 'teamwork', 'system-design', 'communication'],
  },
  {
    id: 'data-analytics',
    label: 'Data & Analytics',
    icon: '📊',
    keywords: ['data analyst', 'data scientist', 'data engineer', 'analytics', 'business intelligence', 'database', 'data advocacy', 'data office', 'people analytics'],
    categories: ['data-analysis', 'problem-solving', 'communication', 'technical', 'accountability'],
  },
  {
    id: 'ai-ml',
    label: 'AI & Machine Learning',
    icon: '🤖',
    keywords: ['ai ', 'machine learning', 'ml ', 'conversational ai', 'nlp', 'ai agent', 'ai solutions', 'ai content', 'ai data', 'ai enablement', 'ai governance'],
    categories: ['ai-ml', 'technical', 'problem-solving', 'creativity', 'communication'],
  },
  {
    id: 'product',
    label: 'Product Management',
    icon: '📦',
    keywords: ['product manager', 'product operations', 'product designer', 'product owner', 'product lead', 'product marketing'],
    categories: ['product', 'communication', 'problem-solving', 'customer', 'creativity'],
  },
  {
    id: 'design-ux',
    label: 'Design & UX',
    icon: '🎨',
    keywords: ['designer', 'ux ', 'ui ', 'creative', 'art lead', 'graphic', 'visual', 'motion', 'instructional design', 'learning experience'],
    categories: ['design', 'creativity', 'customer', 'communication', 'teamwork'],
  },
  {
    id: 'sales',
    label: 'Sales & Business Development',
    icon: '📈',
    keywords: ['sales', 'account executive', 'account advisor', 'business development', 'channel manager', 'channel engagement', 'revenue', 'strategic accounts', 'country manager', 'altitude'],
    categories: ['sales', 'customer', 'communication', 'accountability', 'adaptability'],
  },
  {
    id: 'marketing',
    label: 'Marketing & Communications',
    icon: '📣',
    keywords: ['marketing', 'content', 'campaign', 'brand', 'communications', 'seo', 'social media', 'demand gen', 'events', 'broadcast', 'public relations'],
    categories: ['marketing', 'creativity', 'communication', 'teamwork', 'adaptability'],
  },
  {
    id: 'customer-success',
    label: 'Customer Success & Support',
    icon: '🎯',
    keywords: ['customer care', 'customer success', 'customer relationship', 'customer delivery', 'customer onboarding', 'support engineer', 'support specialist', 'technical support', 'help desk', 'retention'],
    categories: ['customer', 'communication', 'problem-solving', 'conflict', 'accountability'],
  },
  {
    id: 'hr-people',
    label: 'Human Resources & People',
    icon: '👥',
    keywords: ['hr ', 'human resource', 'talent', 'recrui', 'people', 'compensation', 'benefits', 'learning', 'hrbp', 'workforce', 'employee', 'dei', 'diversity'],
    categories: ['hr-people', 'culture', 'communication', 'conflict', 'management'],
  },
  {
    id: 'finance',
    label: 'Finance & Accounting',
    icon: '💰',
    keywords: ['finance', 'financial', 'accountant', 'accounting', 'controller', 'tax', 'treasury', 'audit', 'accounts payable', 'accounts receivable', 'cash application', 'billing', 'fp&a', 'pricing', 'revenue recognition'],
    categories: ['finance', 'accountability', 'problem-solving', 'communication', 'adaptability'],
  },
  {
    id: 'legal-compliance',
    label: 'Legal & Compliance',
    icon: '⚖️',
    keywords: ['legal', 'counsel', 'compliance', 'privacy', 'regulatory', 'patent', 'governance', 'data protection'],
    categories: ['legal', 'problem-solving', 'communication', 'accountability', 'adaptability'],
  },
  {
    id: 'operations',
    label: 'Operations & Supply Chain',
    icon: '⚙️',
    keywords: ['operations', 'supply chain', 'manufacturing', 'procurement', 'buyer', 'logistics', 'warehouse', 'inventory', 'production', 'distribution', 'installation'],
    categories: ['operations', 'problem-solving', 'accountability', 'teamwork', 'adaptability'],
  },
  {
    id: 'it-security',
    label: 'IT & Security',
    icon: '🔒',
    keywords: ['it ', 'information technology', 'system admin', 'infrastructure', 'network', 'security analyst', 'security engineer', 'cyber', 'information security', 'endpoint', 'servicenow', 'security operations'],
    categories: ['it-security', 'technical', 'problem-solving', 'communication', 'accountability'],
  },
  {
    id: 'project-program',
    label: 'Project & Program Management',
    icon: '📋',
    keywords: ['project manager', 'program manager', 'pmo', 'scrum', 'agile', 'change manager', 'portfolio', 'enterprise agile'],
    categories: ['project-mgmt', 'communication', 'problem-solving', 'teamwork', 'accountability'],
  },
  {
    id: 'solutions',
    label: 'Solutions & Integration',
    icon: '🔧',
    keywords: ['solutions engineer', 'solutions architect', 'solutions consult', 'implementation', 'integration specialist', 'vehicle integration'],
    categories: ['solutions', 'technical', 'customer', 'communication', 'problem-solving'],
  },
  {
    id: 'leadership',
    label: 'People Leadership',
    icon: '👑',
    keywords: ['vice president', 'director', 'senior manager', 'team lead', 'general manager', 'chief'],
    categories: ['leadership', 'management', 'communication', 'culture', 'conflict'],
  },
];

// ─── Geotab positions (curated from JD Index v5) ───
export const geotabRoles: GeotabRole[] = [
  // Software Engineering
  { title: 'Software Developer', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Senior Software Developer', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Lead Software Developer', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Principal Software Developer', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Senior Software Developer in Test', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Firmware Developer', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Senior Firmware Developer', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Lead Firmware Developer', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Mobile Developer', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Senior Mobile Developer', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Full Stack Developer', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Senior Full Stack Developer', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Cloud Architect', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Cloud Automation Engineering', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Cloud Optimization Specialist', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Site Reliability Engineering', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Senior Site Reliability Engineering', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'DevOps Engineering', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Senior DevOps Engineering', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Platform Engineering', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Application Support Engineering', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Advanced Engineering Manager', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Quality Assurance Engineering', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Senior Quality Assurance Engineering', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Embedded Software Developer', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Conversational AI Engineering', type: 'Individual Contributor', family: 'software-engineering' },
  { title: 'Contact Center AI Developer', type: 'Individual Contributor', family: 'software-engineering' },

  // Data & Analytics
  { title: 'Data Analyst', type: 'Individual Contributor', family: 'data-analytics' },
  { title: 'Senior Data Analyst', type: 'Individual Contributor', family: 'data-analytics' },
  { title: 'Data Scientist', type: 'Individual Contributor', family: 'data-analytics' },
  { title: 'Data Scientist, People Analytics', type: 'Individual Contributor', family: 'data-analytics' },
  { title: 'Senior Data Scientist', type: 'Individual Contributor', family: 'data-analytics' },
  { title: 'Data Engineer', type: 'Individual Contributor', family: 'data-analytics' },
  { title: 'Senior Data Engineer', type: 'Individual Contributor', family: 'data-analytics' },
  { title: 'Database Administrator', type: 'Individual Contributor', family: 'data-analytics' },
  { title: 'Senior Database Administrator', type: 'Individual Contributor', family: 'data-analytics' },
  { title: 'AI Business Intelligence Analyst', type: 'Individual Contributor', family: 'data-analytics' },
  { title: 'Cloud Financial Analyst', type: 'Individual Contributor', family: 'data-analytics' },

  // AI & ML
  { title: 'AI Agent Developer', type: 'Individual Contributor', family: 'ai-ml' },
  { title: 'AI Solutions Developer', type: 'Individual Contributor', family: 'ai-ml' },
  { title: 'AI Content Analyst', type: 'Individual Contributor', family: 'ai-ml' },
  { title: 'AI Data & Evaluation Analyst', type: 'Individual Contributor', family: 'ai-ml' },
  { title: 'AI Data Store Curator & Specialist', type: 'Individual Contributor', family: 'ai-ml' },
  { title: 'Privacy & AI Governance Analyst', type: 'Individual Contributor', family: 'ai-ml' },
  { title: 'Principal Data & AI Intelligence Advocate', type: 'Individual Contributor', family: 'ai-ml' },

  // Product Management
  { title: 'Associate Product Manager', type: 'Individual Contributor', family: 'product' },
  { title: 'Product Manager', type: 'Individual Contributor', family: 'product' },
  { title: 'Lead Product Manager', type: 'Individual Contributor', family: 'product' },
  { title: 'Senior Product Manager', type: 'Individual Contributor', family: 'product' },
  { title: 'Principal Product Manager', type: 'Individual Contributor', family: 'product' },
  { title: 'Associate Product Designer', type: 'Individual Contributor', family: 'product' },
  { title: 'Lead Product Designer', type: 'Individual Contributor', family: 'product' },
  { title: 'Principal Product Designer', type: 'Individual Contributor', family: 'product' },
  { title: 'Associate Product Operations Manager', type: 'Individual Contributor', family: 'product' },
  { title: 'Marketplace Channel Product Manager', type: 'Individual Contributor', family: 'product' },

  // Design & UX
  { title: 'Graphic Designer', type: 'Individual Contributor', family: 'design-ux' },
  { title: 'Senior Graphic Designer', type: 'Individual Contributor', family: 'design-ux' },
  { title: 'Marketing User Experience Designer', type: 'Individual Contributor', family: 'design-ux' },
  { title: 'Motion Graphics Designer', type: 'Individual Contributor', family: 'design-ux' },
  { title: 'Instructional Designer', type: 'Individual Contributor', family: 'design-ux' },
  { title: 'Instructional Video Designer', type: 'Individual Contributor', family: 'design-ux' },
  { title: 'Learning Experience Designer', type: 'Individual Contributor', family: 'design-ux' },
  { title: 'Art Lead', type: 'Individual Contributor', family: 'design-ux' },
  { title: 'Creative Director', type: 'People Leader', family: 'design-ux' },

  // Sales & Business Development
  { title: 'Account Advisor', type: 'Individual Contributor', family: 'sales' },
  { title: 'Account Executive', type: 'Individual Contributor', family: 'sales' },
  { title: 'Strategic Accounts Lead', type: 'Individual Contributor', family: 'sales' },
  { title: 'Global Technical Account Executive', type: 'Individual Contributor', family: 'sales' },
  { title: 'Business Development Manager', type: 'Individual Contributor', family: 'sales' },
  { title: 'Business Development Coordinator', type: 'Individual Contributor', family: 'sales' },
  { title: 'Business Development Specialist', type: 'Individual Contributor', family: 'sales' },
  { title: 'Business Development Manager, Partnerships', type: 'Individual Contributor', family: 'sales' },
  { title: 'Altitude Business Development Manager', type: 'Individual Contributor', family: 'sales' },
  { title: 'Channel Manager', type: 'Individual Contributor', family: 'sales' },
  { title: 'Channel Engagement Manager', type: 'Individual Contributor', family: 'sales' },
  { title: 'Country Manager', type: 'Individual Contributor', family: 'sales' },
  { title: 'Sales Development Representative', type: 'Individual Contributor', family: 'sales' },
  { title: 'Sales Enablement Specialist', type: 'Individual Contributor', family: 'sales' },
  { title: 'Sales Operations Analyst', type: 'Individual Contributor', family: 'sales' },
  { title: 'Connected Vehicle Specialist', type: 'Individual Contributor', family: 'sales' },
  { title: 'Public Sector Sales', type: 'Individual Contributor', family: 'sales' },

  // Marketing
  { title: 'Marketing Automation Manager', type: 'Individual Contributor', family: 'marketing' },
  { title: 'Campaign Manager', type: 'Individual Contributor', family: 'marketing' },
  { title: 'Content Marketing Manager', type: 'Individual Contributor', family: 'marketing' },
  { title: 'Customer Content Lead', type: 'Individual Contributor', family: 'marketing' },
  { title: 'Channel Marketing Manager', type: 'Individual Contributor', family: 'marketing' },
  { title: 'Corporate Marketing Manager', type: 'Individual Contributor', family: 'marketing' },
  { title: 'Communications Manager', type: 'Individual Contributor', family: 'marketing' },
  { title: 'Digital Marketing Manager', type: 'Individual Contributor', family: 'marketing' },
  { title: 'Demand Generation Manager', type: 'Individual Contributor', family: 'marketing' },
  { title: 'Events Manager', type: 'Individual Contributor', family: 'marketing' },
  { title: 'Competitive Intelligence Manager', type: 'Individual Contributor', family: 'marketing' },
  { title: 'SEO Manager', type: 'Individual Contributor', family: 'marketing' },
  { title: 'Social Media Manager', type: 'Individual Contributor', family: 'marketing' },
  { title: 'Broadcast Producer', type: 'People Leader', family: 'marketing' },
  { title: 'Market Research Analyst', type: 'Individual Contributor', family: 'marketing' },

  // Customer Success & Support
  { title: 'Customer Care Advisor', type: 'Individual Contributor', family: 'customer-success' },
  { title: 'Customer Care Accounts Coordinator', type: 'Individual Contributor', family: 'customer-success' },
  { title: 'Customer Care Project Manager', type: 'Individual Contributor', family: 'customer-success' },
  { title: 'Customer Delivery Manager', type: 'Individual Contributor', family: 'customer-success' },
  { title: 'Customer Onboarding Specialist', type: 'Individual Contributor', family: 'customer-success' },
  { title: 'Customer Relationship Specialist', type: 'Individual Contributor', family: 'customer-success' },
  { title: 'Customer Engagement Lead, Retention and Analytics', type: 'Individual Contributor', family: 'customer-success' },
  { title: 'Senior Retention & Success Specialist', type: 'Individual Contributor', family: 'customer-success' },
  { title: 'Expansion & Advocacy Lead', type: 'Individual Contributor', family: 'customer-success' },
  { title: 'Technical Support Specialist', type: 'Individual Contributor', family: 'customer-success' },
  { title: 'Senior Technical Support Specialist', type: 'Individual Contributor', family: 'customer-success' },
  { title: 'Account Trainer', type: 'Individual Contributor', family: 'customer-success' },

  // HR & People
  { title: 'Human Resources Business Partner', type: 'Individual Contributor', family: 'hr-people' },
  { title: 'Senior Human Resources Business Partner', type: 'Individual Contributor', family: 'hr-people' },
  { title: 'Talent Acquisition Specialist', type: 'Individual Contributor', family: 'hr-people' },
  { title: 'Senior Talent Acquisition Specialist', type: 'Individual Contributor', family: 'hr-people' },
  { title: 'Campus Talent Acquisition Specialist', type: 'Individual Contributor', family: 'hr-people' },
  { title: 'Campus Talent Program Lead', type: 'Individual Contributor', family: 'hr-people' },
  { title: 'Compensation Analyst', type: 'Individual Contributor', family: 'hr-people' },
  { title: 'Benefits Specialist', type: 'Individual Contributor', family: 'hr-people' },
  { title: 'Learning & Development Specialist', type: 'Individual Contributor', family: 'hr-people' },
  { title: 'People Analytics Lead', type: 'Individual Contributor', family: 'hr-people' },
  { title: 'Workforce Planning Analyst', type: 'Individual Contributor', family: 'hr-people' },

  // Finance & Accounting
  { title: 'Corporate Accountant', type: 'Individual Contributor', family: 'finance' },
  { title: 'Senior Corporate Accountant', type: 'Individual Contributor', family: 'finance' },
  { title: 'Financial Analyst', type: 'Individual Contributor', family: 'finance' },
  { title: 'Senior Financial Analyst', type: 'Individual Contributor', family: 'finance' },
  { title: 'Accounts Payable Specialist', type: 'Individual Contributor', family: 'finance' },
  { title: 'Accounts Receivable Specialist', type: 'Individual Contributor', family: 'finance' },
  { title: 'Cash Application Specialist', type: 'Individual Contributor', family: 'finance' },
  { title: 'Assistant Controller', type: 'Individual Contributor', family: 'finance' },
  { title: 'Controller', type: 'People Leader', family: 'finance' },
  { title: 'Revenue Analyst', type: 'Individual Contributor', family: 'finance' },
  { title: 'Tax Analyst', type: 'Individual Contributor', family: 'finance' },
  { title: 'Pricing Analyst', type: 'Individual Contributor', family: 'finance' },
  { title: 'Corporate Development Analyst', type: 'Individual Contributor', family: 'finance' },

  // Legal & Compliance
  { title: 'Associate General Counsel', type: 'People Leader', family: 'legal-compliance' },
  { title: 'Corporate & Commercial Law Clerk', type: 'Individual Contributor', family: 'legal-compliance' },
  { title: 'Corporate Secretary & Associate General Counsel', type: 'Individual Contributor', family: 'legal-compliance' },
  { title: 'Compliance Analyst', type: 'Individual Contributor', family: 'legal-compliance' },
  { title: 'Compliance Coordinator', type: 'Individual Contributor', family: 'legal-compliance' },
  { title: 'Compliance Lead', type: 'Individual Contributor', family: 'legal-compliance' },
  { title: 'Data Privacy Specialist', type: 'Individual Contributor', family: 'legal-compliance' },
  { title: 'Patent Agent', type: 'Individual Contributor', family: 'legal-compliance' },
  { title: 'Regulatory Affairs Specialist', type: 'Individual Contributor', family: 'legal-compliance' },

  // Operations & Supply Chain
  { title: 'Buyer', type: 'Individual Contributor', family: 'operations' },
  { title: 'Senior Buyer', type: 'Individual Contributor', family: 'operations' },
  { title: 'Contract Manufacturing Manager', type: 'Individual Contributor', family: 'operations' },
  { title: 'Continuous Improvement Specialist', type: 'Individual Contributor', family: 'operations' },
  { title: 'Installation Project Manager', type: 'Individual Contributor', family: 'operations' },
  { title: 'Logistics Coordinator', type: 'Individual Contributor', family: 'operations' },
  { title: 'Manufacturing Engineering', type: 'Individual Contributor', family: 'operations' },
  { title: 'Production Coordinator', type: 'Individual Contributor', family: 'operations' },
  { title: 'Supply Chain Analyst', type: 'Individual Contributor', family: 'operations' },
  { title: 'Warehouse Operations Specialist', type: 'Individual Contributor', family: 'operations' },

  // IT & Security
  { title: 'IT Application Specialist', type: 'Individual Contributor', family: 'it-security' },
  { title: 'IT Asset Management Specialist', type: 'Individual Contributor', family: 'it-security' },
  { title: 'Cybersecurity Incident Response Lead', type: 'Individual Contributor', family: 'it-security' },
  { title: 'Cybersecurity Incident Response Specialist', type: 'Individual Contributor', family: 'it-security' },
  { title: 'Cybersecurity Solutions Analyst', type: 'Individual Contributor', family: 'it-security' },
  { title: 'Security Operations Analyst', type: 'Individual Contributor', family: 'it-security' },
  { title: 'ServiceNow Developer', type: 'Individual Contributor', family: 'it-security' },
  { title: 'System Administrator', type: 'Individual Contributor', family: 'it-security' },
  { title: 'Network Administrator', type: 'Individual Contributor', family: 'it-security' },

  // Project & Program Management
  { title: 'Agile Coach', type: 'Individual Contributor', family: 'project-program' },
  { title: 'Enterprise Agile Coach', type: 'Individual Contributor', family: 'project-program' },
  { title: 'Scrum Master', type: 'Individual Contributor', family: 'project-program' },
  { title: 'Senior Scrum Master', type: 'Individual Contributor', family: 'project-program' },
  { title: 'Project Manager', type: 'Individual Contributor', family: 'project-program' },
  { title: 'Senior Project Manager', type: 'Individual Contributor', family: 'project-program' },
  { title: 'Enterprise Portfolio Project Manager', type: 'Individual Contributor', family: 'project-program' },
  { title: 'Program Manager', type: 'Individual Contributor', family: 'project-program' },
  { title: 'Change Manager', type: 'Individual Contributor', family: 'project-program' },

  // Solutions & Integration
  { title: 'Associate Solutions Engineering', type: 'Individual Contributor', family: 'solutions' },
  { title: 'Solutions Engineering', type: 'Individual Contributor', family: 'solutions' },
  { title: 'Senior Solutions Engineering', type: 'Individual Contributor', family: 'solutions' },
  { title: 'Lead Solutions Engineering', type: 'Individual Contributor', family: 'solutions' },
  { title: 'Solutions Architect', type: 'Individual Contributor', family: 'solutions' },
  { title: 'Integration Specialist', type: 'Individual Contributor', family: 'solutions' },
  { title: 'Senior Implementation Advisor', type: 'Individual Contributor', family: 'solutions' },
  { title: 'Vehicle Integration Specialist', type: 'Individual Contributor', family: 'solutions' },

  // People Leadership
  { title: 'Team Lead, Software Development', type: 'People Leader', family: 'leadership' },
  { title: 'Senior Team Lead, Software Development', type: 'People Leader', family: 'leadership' },
  { title: 'Senior Manager, Engineering', type: 'People Leader', family: 'leadership' },
  { title: 'Senior Manager, Cloud Operations & Data Center', type: 'People Leader', family: 'leadership' },
  { title: 'Senior Manager, Retention & Success', type: 'People Leader', family: 'leadership' },
  { title: 'Manager, AI Enablement & Experience', type: 'People Leader', family: 'leadership' },
  { title: 'Manager, Marketplace', type: 'People Leader', family: 'leadership' },
  { title: 'Director, Engineering', type: 'People Leader', family: 'leadership' },
  { title: 'Director, Product Management', type: 'People Leader', family: 'leadership' },
  { title: 'Director, Sales', type: 'People Leader', family: 'leadership' },
  { title: 'Associate Vice President, Engineering', type: 'People Leader', family: 'leadership' },
  { title: 'Associate Vice President, Product Management', type: 'People Leader', family: 'leadership' },
  { title: 'Associate Vice President, Sales', type: 'People Leader', family: 'leadership' },
  { title: 'Associate Vice President, Customer Care', type: 'People Leader', family: 'leadership' },
  { title: 'Associate Vice President, Marketing Operations', type: 'People Leader', family: 'leadership' },
  { title: 'Associate Vice President, Data Science', type: 'People Leader', family: 'leadership' },
  { title: 'Associate Vice President, HR Business Partnering', type: 'People Leader', family: 'leadership' },
  { title: 'Associate Vice President, Finance', type: 'People Leader', family: 'leadership' },
];

// ─── Question categories ───
export const categories: QuestionCategory[] = [
  // Universal categories
  { id: 'leadership', label: 'Leadership & Strategy', icon: '👑' },
  { id: 'management', label: 'People Management', icon: '📋' },
  { id: 'teamwork', label: 'Teamwork & Collaboration', icon: '🤝' },
  { id: 'communication', label: 'Communication', icon: '💬' },
  { id: 'problem-solving', label: 'Problem Solving', icon: '🧩' },
  { id: 'adaptability', label: 'Adaptability & Growth', icon: '🌱' },
  { id: 'culture', label: 'Culture & Values', icon: '🏛️' },
  { id: 'conflict', label: 'Conflict Resolution', icon: '⚖️' },
  { id: 'creativity', label: 'Creativity & Innovation', icon: '💡' },
  { id: 'accountability', label: 'Accountability & Ownership', icon: '✅' },
  { id: 'customer', label: 'Customer Focus', icon: '🎯' },
  // Role-specific categories
  { id: 'technical', label: 'Technical Depth', icon: '💻' },
  { id: 'system-design', label: 'System Design & Architecture', icon: '🏗️' },
  { id: 'data-analysis', label: 'Data Analysis & Insights', icon: '📊' },
  { id: 'ai-ml', label: 'AI & Machine Learning', icon: '🤖' },
  { id: 'product', label: 'Product Thinking', icon: '📦' },
  { id: 'design', label: 'Design & User Experience', icon: '🎨' },
  { id: 'sales', label: 'Sales & Revenue', icon: '📈' },
  { id: 'marketing', label: 'Marketing & Brand', icon: '📣' },
  { id: 'hr-people', label: 'HR & Talent Strategy', icon: '👥' },
  { id: 'finance', label: 'Finance & Business Acumen', icon: '💰' },
  { id: 'legal', label: 'Legal & Regulatory', icon: '📜' },
  { id: 'operations', label: 'Operations Excellence', icon: '⚙️' },
  { id: 'it-security', label: 'IT & Cybersecurity', icon: '🔒' },
  { id: 'project-mgmt', label: 'Project Execution', icon: '📋' },
  { id: 'solutions', label: 'Solutions & Integration', icon: '🔧' },
];

// ─── Question bank ───
export const questionBank: BankQuestion[] = [
  // ===== TECHNICAL DEPTH =====
  {
    question: "Walk me through how you would debug a production issue affecting thousands of users in a Geotab-scale fleet management platform.",
    listenFor: "Systematic triage (monitoring → logs → repro), clear incident communication, root cause analysis mindset, understanding of distributed systems at scale",
    idealAnswer: "I'd start by checking monitoring dashboards and alerts to assess scope and impact, then communicate status to stakeholders immediately. From there, I'd drill into logs and traces to isolate the failing component, attempt to reproduce in a staging environment, and implement a fix or rollback — followed by a thorough post-incident review to prevent recurrence.",
    followUp: "How do you balance speed of resolution vs. thoroughness of root cause analysis during a live incident?",
    category: "technical",
    tags: ["software", "developer", "engineer", "debug", "production", "incident", "sre", "devops", "cloud"],
  },
  {
    question: "Describe a time you improved the performance of a system or application. What metrics did you use to measure success?",
    listenFor: "Profiling methodology, identifying bottlenecks, measurable outcomes (latency, throughput, resource usage), systematic optimization vs. premature optimization",
    idealAnswer: "I used profiling tools to identify that a specific database query was responsible for 80% of our API latency, then rewrote it with proper indexing and query restructuring. We tracked p95 response time and throughput before and after, ultimately reducing average latency by 60% without any infrastructure cost increase.",
    followUp: "How did you decide which optimizations were worth the development investment?",
    category: "technical",
    tags: ["software", "developer", "engineer", "performance", "optimize", "scale", "backend", "database", "cloud"],
  },
  {
    question: "How do you approach code reviews? What do you prioritize when reviewing someone else's code?",
    listenFor: "Balance of correctness, readability, and maintainability. Constructive feedback style, knowledge sharing, catching architectural concerns vs. nitpicking",
    idealAnswer: "I prioritize correctness and potential edge cases first, then look at readability and maintainability — I want the next developer to understand the intent without needing the author present. I try to frame feedback as questions or suggestions rather than directives, and I always acknowledge what's done well so the review is a genuine learning exchange.",
    followUp: "Tell me about a time a code review led to a significant improvement in the design or architecture.",
    category: "technical",
    tags: ["software", "developer", "engineer", "code review", "quality", "standards", "qa"],
  },
  {
    question: "Describe your experience with test automation. How do you decide what level of testing (unit, integration, e2e) to apply?",
    listenFor: "Testing pyramid understanding, pragmatic test strategy, balancing coverage with maintenance cost, CI/CD integration",
    idealAnswer: "I follow the testing pyramid — heavy unit test coverage for business logic, integration tests for service boundaries, and e2e tests only for the most critical user flows since they're expensive to maintain. I tie automated tests into the CI pipeline so failures block merges, and I periodically audit the suite to remove tests that no longer add signal.",
    followUp: "How do you handle flaky tests in a CI pipeline without just ignoring them?",
    category: "technical",
    tags: ["software", "developer", "engineer", "testing", "qa", "quality", "automation", "ci/cd"],
  },
  {
    question: "Tell me about a time you had to learn a new technology or language quickly to deliver on a project.",
    listenFor: "Learning strategy, identifying good resources, applying knowledge quickly, asking for help when stuck, time management during ramp-up",
    idealAnswer: "When our team adopted Kubernetes mid-project, I dedicated the first few days to working through the official docs and a structured course, then immediately applied what I learned by containerizing a non-critical service. I also paired with a colleague who had production Kubernetes experience to fill gaps faster than solo study could.",
    followUp: "What's your process for evaluating whether to adopt a new technology vs. using something you already know?",
    category: "technical",
    tags: ["software", "developer", "engineer", "learn", "technology", "framework", "adapt", "growth"],
  },

  // ===== SYSTEM DESIGN & ARCHITECTURE =====
  {
    question: "How would you design a system that processes millions of telematics data points per second from connected vehicles?",
    listenFor: "Distributed systems thinking, message queue architecture, data partitioning, storage tiering, scalability considerations relevant to IoT/fleet management",
    idealAnswer: "I'd use a message queue like Kafka to ingest the high-velocity event stream, partitioned by vehicle ID to enable parallel processing while preserving per-vehicle ordering. From there, stream processors would handle real-time aggregations and anomaly detection, while raw data lands in a time-series store for historical queries — with hot/warm/cold storage tiering to control costs as data ages.",
    followUp: "How would you handle data integrity when dealing with unreliable network connections from moving vehicles?",
    category: "system-design",
    tags: ["software", "architect", "system design", "cloud", "backend", "scale", "infrastructure", "senior", "lead", "principal"],
  },
  {
    question: "Describe a significant architecture decision you've made. What trade-offs did you consider?",
    listenFor: "Clear articulation of constraints, evaluation of alternatives, long-term maintainability thinking, stakeholder communication about technical trade-offs",
    idealAnswer: "I led the decision to move from a shared monolithic database to service-owned data stores. We weighed the short-term migration cost and the added complexity of distributed data against the long-term benefit of independent deployability and scale — and documented the decision in an ADR so future engineers understood the reasoning. The transition took longer than expected, but it unblocked three teams from being coupled on every release.",
    followUp: "Looking back, would you make the same decision? What would you change?",
    category: "system-design",
    tags: ["software", "architect", "system design", "senior", "lead", "principal", "decision", "trade-off"],
  },
  {
    question: "How do you approach breaking a monolithic application into microservices? When is it not the right approach?",
    listenFor: "Understanding of service boundaries, domain-driven design thinking, awareness of distributed system complexity, pragmatism about when monoliths are appropriate",
    idealAnswer: "I use domain-driven design to identify bounded contexts — areas of the business that have distinct models and change rates — and extract those into services first, rather than slicing by technical layer. That said, I'd push back on microservices for a small team or an early-stage product where the overhead of distributed systems outweighs the benefits of independent deployability.",
    followUp: "How do you handle shared data and transactions across microservice boundaries?",
    category: "system-design",
    tags: ["software", "architect", "microservices", "senior", "lead", "principal", "backend", "platform"],
  },

  // ===== DATA ANALYSIS & INSIGHTS =====
  {
    question: "Walk me through how you would approach analyzing a dataset with millions of vehicle telematics records to identify fuel efficiency patterns.",
    listenFor: "Data exploration methodology, statistical thinking, handling messy real-world data, translating technical findings into business recommendations",
    idealAnswer: "I'd start with exploratory data analysis — checking for nulls, outliers, and distribution anomalies — then segment the data by vehicle type, route characteristics, and driver behavior to isolate variables. After identifying the strongest correlating factors, I'd translate those findings into specific, actionable recommendations for fleet managers, like target idling thresholds or maintenance schedules tied to efficiency drops.",
    followUp: "How would you present your findings to non-technical stakeholders to drive action?",
    category: "data-analysis",
    tags: ["data analyst", "data scientist", "analytics", "bi", "business intelligence", "insights"],
  },
  {
    question: "Tell me about a time your data analysis challenged an existing assumption or business decision.",
    listenFor: "Intellectual honesty, courage to present contradictory findings, data quality validation, stakeholder communication when delivering unexpected results",
    idealAnswer: "Our team believed a particular customer segment was our most profitable, but when I built a full cost-to-serve model, I found support costs were eroding the margin significantly. I validated my methodology carefully before presenting, showed the full picture with multiple cuts of the data, and framed it as an opportunity to either reprice or streamline service for that segment rather than just bad news.",
    followUp: "How did stakeholders respond, and how did you handle pushback?",
    category: "data-analysis",
    tags: ["data analyst", "data scientist", "analytics", "insights", "stakeholder", "decision"],
  },
  {
    question: "Describe your approach to building a data pipeline that needs to be reliable and maintainable over time.",
    listenFor: "Data quality checks, monitoring and alerting, idempotency, documentation, handling schema evolution and data drift",
    idealAnswer: "I build idempotency in from the start so reruns don't create duplicates, and I add data quality checks at each stage that alert on missing values, unexpected schema changes, or statistical drift. I also write the pipeline code to be modular and well-documented so another engineer can own it without needing me to explain every decision.",
    followUp: "How do you handle situations where upstream data sources change without notice?",
    category: "data-analysis",
    tags: ["data engineer", "data pipeline", "etl", "database", "infrastructure", "reliability"],
  },
  {
    question: "How do you determine the right visualization or dashboard for a particular business question?",
    listenFor: "Audience awareness, choosing appropriate chart types, avoiding misleading visualizations, iterating on dashboard design with user feedback",
    idealAnswer: "I start by understanding who the audience is and what decision they need to make — an executive needs summary trends while an operations analyst needs drill-down capability. I match chart type to the data relationship (trends over time, comparisons, distributions), and I always share early drafts with a few representative users to catch misinterpretations before broad rollout.",
    followUp: "Tell me about a dashboard that had high initial engagement but needed significant revision.",
    category: "data-analysis",
    tags: ["data analyst", "analytics", "bi", "visualization", "dashboard", "reporting"],
  },

  // ===== AI & MACHINE LEARNING =====
  {
    question: "Walk me through your process for validating an ML model before deploying it to production.",
    listenFor: "Train/test split methodology, cross-validation, evaluation metrics appropriate to the problem, bias testing, A/B testing strategy, monitoring post-deployment",
    idealAnswer: "I validate on a held-out test set and run cross-validation to ensure results aren't dependent on a lucky split, then evaluate using metrics that match the business problem — precision/recall for imbalanced classification, not just accuracy. Before full rollout, I run an A/B test or shadow deployment, and post-launch I set up performance monitoring to catch drift early.",
    followUp: "How do you handle model drift over time, especially with IoT data that changes seasonally?",
    category: "ai-ml",
    tags: ["ai", "machine learning", "data scientist", "ml engineer", "model", "validation"],
  },
  {
    question: "Describe a situation where an AI/ML solution you built didn't perform as expected in production. What happened?",
    listenFor: "Debugging ML systems, understanding train-serve skew, feature engineering issues, honest assessment of what went wrong, learning from failure",
    idealAnswer: "We deployed an anomaly detection model that performed well in testing but generated far too many false positives in production — it turned out our training data didn't capture the seasonal variability present in live traffic. I diagnosed the train-serve skew by comparing feature distributions between environments, retrained on a more representative dataset, and added distribution monitoring to catch this class of issue earlier in future deployments.",
    followUp: "What changes did you make to your development process as a result?",
    category: "ai-ml",
    tags: ["ai", "machine learning", "data scientist", "ml engineer", "production", "debugging"],
  },
  {
    question: "How do you approach responsible AI development? How do you think about bias, fairness, and transparency?",
    listenFor: "Awareness of AI ethics, practical approaches to bias detection, explainability techniques, data representation concerns, regulatory awareness",
    idealAnswer: "I build bias audits into the development process — disaggregating model performance by demographic and protected attribute groups, not just looking at aggregate accuracy. I also prioritize using explainable models or layering interpretability tools like SHAP on top of black-box models so stakeholders can interrogate decisions, and I stay current with relevant regulatory guidance like the EU AI Act to ensure compliance is built in from the start.",
    followUp: "Can you give a specific example where you identified and mitigated a potential bias in a model or dataset?",
    category: "ai-ml",
    tags: ["ai", "machine learning", "governance", "ethics", "bias", "fairness", "responsible ai"],
  },

  // ===== PRODUCT THINKING =====
  {
    question: "Tell me about a time you had to decide between competing feature requests from different stakeholders. How did you prioritize?",
    listenFor: "Prioritization framework (impact vs. effort, RICE, etc.), data-informed decisions, stakeholder management, saying no constructively, aligning to strategy",
    idealAnswer: "I used a RICE scoring model to evaluate each request against reach, impact, confidence, and effort, then validated those scores with user data and aligned them against our OKRs for the quarter. I held a roadmap review where I walked each stakeholder through the framework so they understood why certain requests were deferred — which reduced friction because the decision felt principled rather than arbitrary.",
    followUp: "How do you communicate your prioritization decisions to stakeholders who didn't get what they wanted?",
    category: "product",
    tags: ["product manager", "product owner", "prioritize", "roadmap", "stakeholder", "strategy"],
  },
  {
    question: "Describe how you define and measure success for a product feature or launch.",
    listenFor: "OKRs/KPIs thinking, leading vs. lagging indicators, user metrics, business metrics, post-launch iteration based on data",
    idealAnswer: "Before launch, I define both leading indicators — adoption rate, feature engagement in the first 30 days — and lagging business outcomes like retention improvement or support ticket reduction. I set up dashboards pre-launch so day-one data is immediately available, and I schedule a post-launch review at 30 and 90 days to decide whether to iterate, scale, or sunset the feature.",
    followUp: "Tell me about a feature that looked successful on one metric but failed on another. How did you reconcile that?",
    category: "product",
    tags: ["product manager", "metrics", "kpi", "okr", "launch", "success", "measure"],
  },
  {
    question: "How do you balance user needs with technical constraints and business goals when making product decisions?",
    listenFor: "Three-way trade-off thinking, collaboration with engineering and design, user research integration, business acumen, pragmatism",
    idealAnswer: "I bring engineering into discovery early so technical constraints are part of the conversation before solutions are designed, not revealed after. When trade-offs arise, I make them explicit — showing the business impact of a technically cheaper solution versus the user experience cost — so the decision is made with full visibility rather than by accident.",
    followUp: "Give an example where you had to make a product compromise. What did you learn?",
    category: "product",
    tags: ["product manager", "trade-off", "user", "engineering", "business", "collaboration"],
  },
  {
    question: "Describe your process for understanding user needs. How do you go beyond what users say they want?",
    listenFor: "User research methods (interviews, surveys, analytics), jobs-to-be-done thinking, distinguishing needs from solutions, empathy",
    idealAnswer: "I combine behavioral data with qualitative research — usage analytics tell me what users do, but interviews reveal why and what's frustrating them in ways they'd never type in a survey. I use jobs-to-be-done framing to push past feature requests and understand the underlying goal, which often reveals a better solution than what was asked for.",
    followUp: "Tell me about a time user research revealed something unexpected that changed your product direction.",
    category: "product",
    tags: ["product manager", "user research", "discovery", "customer", "empathy", "insights"],
  },

  // ===== DESIGN & USER EXPERIENCE =====
  {
    question: "Walk me through your design process from receiving a brief to delivering final designs.",
    listenFor: "Research → ideation → iteration → testing flow, collaboration with stakeholders, handling feedback, design rationale documentation",
    idealAnswer: "I start by clarifying the problem and success criteria with stakeholders, then do a research phase — reviewing existing analytics, interviewing users, and auditing comparable solutions. I move through low-fidelity sketches to interactive prototypes, testing with real users at each stage, and I document design decisions so stakeholders understand the rationale behind the final direction.",
    followUp: "How do you handle a situation where stakeholder feedback conflicts with user research findings?",
    category: "design",
    tags: ["designer", "ux", "ui", "creative", "process", "user research", "iteration"],
  },
  {
    question: "Tell me about a design decision you made that was data-informed. How did quantitative data influence your creative choices?",
    listenFor: "Balancing data with design intuition, A/B testing experience, analytics-informed iteration, not blindly following metrics",
    idealAnswer: "Analytics showed users were abandoning a multi-step onboarding flow at step three, so I ran a usability study to understand why — it turned out we were asking for information users didn't have at hand. I redesigned the flow to defer those fields, A/B tested it, and saw a 28% improvement in completion rate. The data pointed to where the problem was, but it took qualitative research to understand what the solution should be.",
    followUp: "When do you trust your design instinct over what the data suggests?",
    category: "design",
    tags: ["designer", "ux", "data", "a/b testing", "metrics", "iteration"],
  },
  {
    question: "Describe a project where accessibility was a key consideration. How did you approach it?",
    listenFor: "WCAG awareness, inclusive design thinking, testing with assistive technologies, advocating for accessibility when it's not explicitly requested",
    idealAnswer: "I designed with WCAG 2.1 AA as the baseline from the start — building colour contrast checks and keyboard navigability into my design system tokens rather than retrofitting at the end. I also partnered with QA to test with screen readers and brought in a user with low vision for usability testing, which surfaced issues automated tools missed.",
    followUp: "How do you champion accessibility in an organization where it's not always a priority?",
    category: "design",
    tags: ["designer", "ux", "accessibility", "inclusive", "wcag", "usability"],
  },

  // ===== SALES & REVENUE =====
  {
    question: "Walk me through your most complex deal cycle. What made it challenging and how did you navigate it?",
    listenFor: "Multi-stakeholder management, solution selling, handling objections, persistence without being pushy, creative deal structuring",
    idealAnswer: "I managed an 18-month enterprise deal involving procurement, legal, IT security, and three business unit leaders who each had different priorities. I built a stakeholder map early and tailored my message to each buyer — ROI and compliance for the economic buyer, integration simplicity for IT. I stayed in control of the process by driving clear next steps after every interaction rather than waiting for the customer to come back to me.",
    followUp: "What would you do differently if you could run that deal cycle again?",
    category: "sales",
    tags: ["sales", "account executive", "deal", "revenue", "close", "pipeline", "enterprise"],
  },
  {
    question: "Tell me about a time you lost a deal you were confident about. What happened and what did you learn?",
    listenFor: "Honest self-reflection, loss analysis, learning from failure, adapting approach for future deals, resilience",
    idealAnswer: "I lost a renewal because I assumed the business case was solid without confirming the economic buyer's priorities had shifted following a leadership change. When I did a loss analysis with the decision-maker, they told me our competitor had repositioned around cost savings, which was now top of mind after a budget cut. I started building regular executive check-ins into my account plans after that so I never assumed last quarter's priorities still held.",
    followUp: "How did that experience change how you qualify opportunities?",
    category: "sales",
    tags: ["sales", "account executive", "loss", "qualify", "pipeline", "learning"],
  },
  {
    question: "How do you approach building a territory plan or account strategy in a B2B IoT/fleet management market?",
    listenFor: "Market analysis, segmentation, prioritization of accounts, understanding fleet management pain points, competitive awareness, systematic pipeline building",
    idealAnswer: "I segment the territory by fleet size, vertical, and current technology maturity — larger fleets with legacy telematics are my highest-priority targets because the ROI story is clearest. I research each target account's pain points using public sources, LinkedIn, and industry news before outreach, and I build a 90-day pipeline plan that balances prospecting new logos with expansion plays in existing accounts.",
    followUp: "How do you balance hunting for new business vs. expanding existing accounts?",
    category: "sales",
    tags: ["sales", "account executive", "territory", "strategy", "pipeline", "b2b", "fleet"],
  },
  {
    question: "Describe how you sell to multiple decision-makers and influencers within a single organization.",
    listenFor: "Stakeholder mapping, tailoring message to different buyers (economic, technical, user), champion building, navigating organizational politics",
    idealAnswer: "I map the buying committee early — identifying the economic buyer, technical evaluator, and end-user champion — and develop a value narrative tailored to each. I invest heavily in building the champion because they're my inside advocate, but I make sure I'm also connecting directly with the economic buyer so the relationship isn't single-threaded and vulnerable to personnel changes.",
    followUp: "How do you handle a situation where your champion leaves the organization mid-deal?",
    category: "sales",
    tags: ["sales", "account executive", "stakeholder", "enterprise", "champion", "decision-maker"],
  },
  {
    question: "How do you partner with your channel partners or resellers to drive business?",
    listenFor: "Partner relationship management, enablement strategies, co-selling approach, managing competing priorities, building mutual trust",
    idealAnswer: "I treat partners like an extension of my own team — investing time in their enablement, co-creating account plans together, and being transparent about deal status so there are no surprises. I make sure they can articulate our value proposition confidently before they go in front of prospects, and I show up for joint meetings to reinforce that I'm committed to their success, not just riding their relationships.",
    followUp: "Tell me about a time a channel conflict arose. How did you resolve it?",
    category: "sales",
    tags: ["sales", "channel", "partner", "reseller", "business development", "relationship"],
  },

  // ===== MARKETING & BRAND =====
  {
    question: "Tell me about a campaign you developed from concept to execution. What was the strategy and how did you measure results?",
    listenFor: "Strategic thinking tied to business objectives, audience segmentation, channel selection, creative process, measurement framework, optimization",
    idealAnswer: "I led an integrated campaign targeting mid-market fleet operators — we built the strategy around a report on safety compliance costs, distributing it through paid LinkedIn, industry newsletters, and a webinar that generated direct pipeline. We measured success through MQL volume, cost per MQL by channel, and downstream pipeline contribution at 90 days, which let us shift budget from underperforming channels mid-flight.",
    followUp: "What would you change about the campaign if you could run it again?",
    category: "marketing",
    tags: ["marketing", "campaign", "content", "digital", "demand gen", "brand", "strategy"],
  },
  {
    question: "How do you approach content strategy for a B2B technology company like Geotab that has both technical and business audiences?",
    listenFor: "Audience segmentation, content mapping to buyer journey, balancing thought leadership with demand gen, SEO integration, multi-channel distribution",
    idealAnswer: "I segment content by persona and buying stage — technical practitioners want integration guides and API documentation, while fleet managers and ops leaders want business case content and ROI frameworks. I map content to the buyer journey so we're driving awareness through thought leadership and converting at the consideration stage with case studies and product-specific content, all tied to SEO terms that signal genuine purchase intent.",
    followUp: "How do you measure content effectiveness beyond just page views?",
    category: "marketing",
    tags: ["marketing", "content", "b2b", "strategy", "seo", "thought leadership"],
  },
  {
    question: "Describe a time you used data and analytics to significantly improve a marketing program's performance.",
    listenFor: "Analytical mindset, attribution modeling, A/B testing, iterative optimization, connecting marketing metrics to revenue outcomes",
    idealAnswer: "I noticed our email nurture program had high open rates but low click-through, so I ran a series of A/B tests on CTAs, content format, and send timing. The tests revealed that value-based CTAs with a single focus outperformed multi-offer emails by 40%, and I applied those learnings across our entire automated nurture sequence — which improved MQL-to-SQL conversion by 22% over the following quarter.",
    followUp: "How do you handle the challenge of multi-touch attribution in B2B marketing?",
    category: "marketing",
    tags: ["marketing", "analytics", "data", "optimization", "digital", "demand gen", "performance"],
  },

  // ===== CUSTOMER FOCUS =====
  {
    question: "Tell me about a time you turned an at-risk customer into an advocate. What was your approach?",
    listenFor: "Empathy, proactive problem identification, escalation management, building trust through follow-through, measurable impact on retention",
    idealAnswer: "A large customer flagged frustration with slow support response times during a product rollout. I requested an urgent call, acknowledged the gap without making excuses, and committed to a specific remediation plan with weekly check-ins. Over the following two months we resolved their backlog and rebuilt trust — and six months later that same contact agreed to be a reference and speak at our user conference.",
    followUp: "How do you identify customers who are at risk before they tell you they're unhappy?",
    category: "customer",
    tags: ["customer", "success", "retention", "relationship", "account", "advocacy", "churn"],
  },
  {
    question: "Describe your approach to onboarding new customers onto a complex platform like fleet management software.",
    listenFor: "Structured onboarding process, setting expectations, time-to-value focus, handling technical integration challenges, proactive communication",
    idealAnswer: "I start with a kick-off that aligns the customer on a clear success plan — defining their top three goals, agreeing on milestones, and setting realistic timelines for each integration phase. I focus on getting them to their first 'aha moment' quickly, usually by getting live tracking data visible within the first two weeks, because early momentum drives long-term adoption.",
    followUp: "How do you adapt your onboarding approach for different customer sizes and technical sophistication levels?",
    category: "customer",
    tags: ["customer", "onboarding", "implementation", "success", "training", "adoption"],
  },
  {
    question: "Tell me about a time you had to manage a customer escalation that involved multiple internal teams.",
    listenFor: "Cross-functional coordination, clear communication under pressure, ownership of the customer experience even when the issue spans teams, follow-up",
    idealAnswer: "I owned the customer-facing communication throughout even though the issue touched product, engineering, and billing. I set up a daily standup with all internal parties, gave the customer a single point of contact so they weren't bouncing between teams, and sent consistent written updates every 24 hours until resolution. After closing the issue, I facilitated a post-mortem with all three teams to identify the process gaps that let the problem escalate.",
    followUp: "What process improvements did you put in place to prevent similar escalations?",
    category: "customer",
    tags: ["customer", "escalation", "support", "cross-functional", "resolution", "service"],
  },
  {
    question: "How do you gather and leverage customer feedback to influence product or service improvements?",
    listenFor: "Systematic feedback collection, pattern recognition, translating customer voice into actionable insights, closing the feedback loop with customers",
    idealAnswer: "I collect feedback through structured channels — NPS follow-up calls, QBR conversations, support ticket tagging, and periodic surveys — and I aggregate themes monthly to identify patterns rather than reacting to individual requests. I bring a synthesized voice-of-customer report into product planning cycles, and I always close the loop with customers who contributed to a change so they know their input was heard and acted on.",
    followUp: "Can you share an example where customer feedback directly led to a meaningful product change?",
    category: "customer",
    tags: ["customer", "feedback", "product", "voice of customer", "improvement", "insights"],
  },
  {
    question: "How do you prioritize between competing customer needs when you can't address everything at once?",
    listenFor: "Prioritization frameworks, balancing business impact with customer urgency, transparent communication, strategic thinking",
    idealAnswer: "I triage based on a combination of urgency, business impact, and strategic account value — a critical issue for a high-revenue customer in renewal takes precedence over a nice-to-have for a smaller account. I'm transparent with customers about where they are in the queue and give realistic timelines rather than overpromising, because managing expectations honestly preserves more trust than giving false reassurance.",
    followUp: "How do you communicate priorities to customers who aren't at the top of the list?",
    category: "customer",
    tags: ["customer", "prioritize", "triage", "stakeholder", "account", "service"],
  },

  // ===== HR & TALENT STRATEGY =====
  {
    question: "How do you approach building a talent acquisition strategy for hard-to-fill technical roles in a competitive market?",
    listenFor: "Sourcing diversification, employer brand thinking, candidate experience focus, market research, partnership with hiring managers, data-driven recruitment",
    idealAnswer: "I start by partnering closely with the hiring manager to deeply understand what the role actually requires versus what's on the job description, which often helps me broaden sourcing beyond the obvious talent pools. I diversify channels — community groups, academic partnerships, referral programs, and niche platforms alongside LinkedIn — and I treat candidate experience as an employer brand investment, because even candidates we don't hire talk about their experience.",
    followUp: "How do you measure the effectiveness of your talent acquisition efforts beyond time-to-fill?",
    category: "hr-people",
    tags: ["hr", "talent", "recruiting", "acquisition", "strategy", "hiring", "sourcing"],
  },
  {
    question: "Describe a time you had to advise a manager through a difficult employee situation (performance, conflict, or separation).",
    listenFor: "Empathy balanced with business needs, legal awareness, documentation rigor, coaching the manager vs. doing it for them, confidentiality",
    idealAnswer: "I worked with a manager who had been avoiding a performance conversation for months, which had allowed the situation to worsen. I coached them on how to structure a direct, documented feedback conversation — helping them distinguish impact from intent — and supported them through drafting a performance improvement plan. I stayed close through the process to advise on documentation and ensure the employee was treated with dignity throughout.",
    followUp: "How do you balance being an advocate for the employee with being a partner to the business?",
    category: "hr-people",
    tags: ["hr", "hrbp", "employee relations", "performance", "coaching", "people partner"],
  },
  {
    question: "How do you approach designing a compensation or benefits program that is both competitive and equitable?",
    listenFor: "Market benchmarking, pay equity analysis, total rewards thinking, balancing budget constraints with talent retention, compliance awareness",
    idealAnswer: "I anchor the program to current market data from multiple survey sources, build in pay bands with clear progression criteria so decisions are consistent, and run a pay equity analysis at least annually to catch and correct compression or demographic gaps before they become issues. I also look at total rewards holistically — base, variable, equity, and benefits — because market competitiveness is rarely won on salary alone.",
    followUp: "How do you handle conversations with employees who feel they are underpaid?",
    category: "hr-people",
    tags: ["hr", "compensation", "benefits", "total rewards", "equity", "retention"],
  },

  // ===== FINANCE & BUSINESS ACUMEN =====
  {
    question: "Walk me through how you would build a financial model for a new product line or market expansion.",
    listenFor: "Revenue and cost assumptions, sensitivity analysis, scenario planning, presentation to stakeholders, iterating based on feedback",
    idealAnswer: "I start by mapping the key revenue and cost drivers with the business team, then build a flexible model with clearly labelled assumptions so anyone can stress-test inputs. I run base, upside, and downside scenarios and present them together so decision-makers understand the range of outcomes rather than anchoring on a single number — because the assumptions are where the real debate should happen.",
    followUp: "How do you handle uncertainty in your assumptions, and how do you communicate that uncertainty to decision-makers?",
    category: "finance",
    tags: ["finance", "financial analyst", "model", "forecast", "business", "planning", "fp&a"],
  },
  {
    question: "Describe a time you identified a financial risk or anomaly before it became a material issue.",
    listenFor: "Attention to detail, pattern recognition, proactive communication, understanding business context behind the numbers",
    idealAnswer: "During a routine variance analysis, I noticed revenue from a particular product line was tracking ahead of forecast, but cost of goods was not moving proportionally — which suggested a potential cut-off or accrual error. I flagged it immediately to the controller, investigated the journal entries, and found a timing mismatch in supplier invoice booking that would have materially affected the quarter-end close if left unaddressed.",
    followUp: "What processes or controls do you put in place to catch issues systematically?",
    category: "finance",
    tags: ["finance", "accountant", "risk", "audit", "controls", "anomaly", "compliance"],
  },
  {
    question: "How do you close the books efficiently while maintaining accuracy, especially during high-growth periods?",
    listenFor: "Process optimization, automation opportunities, reconciliation discipline, managing competing deadlines, team coordination",
    idealAnswer: "I build a detailed close calendar with task ownership and hard deadlines for each step — pre-close prep starts in the last week of the month so we're not scrambling on day one. I look for automation opportunities on repetitive reconciliations and use materiality thresholds so the team focuses review time on areas of highest risk rather than spending equal effort on every line item.",
    followUp: "What's the most impactful process improvement you've made to a close cycle?",
    category: "finance",
    tags: ["finance", "accountant", "month-end close", "accuracy", "process", "controller"],
  },

  // ===== LEGAL & REGULATORY =====
  {
    question: "How do you approach advising the business on a matter where the legal risk is ambiguous?",
    listenFor: "Risk assessment framework, practical advice vs. overly conservative, understanding business objectives, communicating risk in business terms",
    idealAnswer: "I scope the risk by probability and potential magnitude, research the relevant precedents or regulatory guidance, and then translate my analysis into business terms rather than pure legal abstraction. I aim to give the business a clear picture of the risk landscape so they can make an informed decision — my job is to enable the business to move forward thoughtfully, not to veto everything uncertain.",
    followUp: "How do you handle situations where the business wants to move forward despite moderate legal risk?",
    category: "legal",
    tags: ["legal", "counsel", "risk", "compliance", "advisory", "business"],
  },
  {
    question: "Describe your experience navigating data privacy regulations across multiple jurisdictions (e.g., GDPR, CCPA).",
    listenFor: "Multi-jurisdictional awareness, practical compliance strategies, balancing privacy requirements with product functionality, staying current with evolving regulations",
    idealAnswer: "I've built privacy-by-design frameworks that let product teams make compliant decisions during development rather than retrofitting compliance at launch. I maintain a jurisdiction mapping of our data processing activities and legal bases, and I work closely with product and engineering to ensure data minimization and retention policies are actually implemented in the system — not just documented in a policy that nobody reads.",
    followUp: "How do you ensure the entire organization, not just legal, understands and follows privacy requirements?",
    category: "legal",
    tags: ["legal", "privacy", "compliance", "gdpr", "data protection", "regulatory", "governance"],
  },

  // ===== OPERATIONS EXCELLENCE =====
  {
    question: "Describe a time you improved a manufacturing or supply chain process. What methodology did you use and what was the measurable impact?",
    listenFor: "Lean/Six Sigma thinking, data-driven improvement, stakeholder buy-in, measuring before/after, sustaining improvements over time",
    idealAnswer: "I led a kaizen event to reduce changeover time on a production line by applying SMED principles — we separated internal from external setup tasks, converted several internal steps to external ones, and standardized tooling locations. We reduced changeover from 47 minutes to 19 minutes, which added over 200 hours of productive capacity per year, and I built the new process into the standard work documentation so the improvement was maintained after the project closed.",
    followUp: "How did you ensure the improvement stuck after the initial implementation?",
    category: "operations",
    tags: ["operations", "manufacturing", "supply chain", "process improvement", "lean", "continuous improvement"],
  },
  {
    question: "How do you manage supplier relationships to balance cost, quality, and delivery reliability?",
    listenFor: "Supplier evaluation frameworks, negotiation approach, risk management, building strategic partnerships vs. transactional relationships",
    idealAnswer: "I segment suppliers by strategic importance — for critical or sole-source suppliers, I invest in a genuine partnership with shared KPIs and regular business reviews, while for commodity suppliers I focus on competitive pricing and contract terms. I always maintain a dual-source strategy for high-risk components so I have leverage in negotiations and a recovery option if a supplier fails to deliver.",
    followUp: "Tell me about a time a key supplier failed to deliver. How did you handle it?",
    category: "operations",
    tags: ["operations", "supply chain", "procurement", "buyer", "supplier", "vendor", "logistics"],
  },
  {
    question: "How do you approach demand forecasting and inventory planning to minimize both stockouts and excess inventory?",
    listenFor: "Forecasting methodologies, handling demand variability, safety stock optimization, collaboration with sales and product teams, using data tools",
    idealAnswer: "I combine statistical forecasting based on historical demand patterns with a consensus process that layers in commercial intelligence from sales and product — the statistical model is the anchor, not the final answer. I set safety stock levels based on lead time variability and service level targets by SKU, and I review forecast accuracy monthly so I can systematically correct bias rather than just respond to each exception as it arises.",
    followUp: "How do you handle a situation where sales forecasts are consistently inaccurate?",
    category: "operations",
    tags: ["operations", "supply chain", "inventory", "planning", "forecast", "logistics", "warehouse"],
  },

  // ===== IT & CYBERSECURITY =====
  {
    question: "Walk me through how you would respond to a security incident involving a potential data breach.",
    listenFor: "Incident response framework (identify, contain, eradicate, recover), communication protocols, evidence preservation, post-incident review, regulatory notification awareness",
    idealAnswer: "I follow the PICERL framework — starting with containment to stop the bleeding before eradication, because acting too quickly on remediation without containing can destroy forensic evidence. I engage legal and communications early to assess notification obligations and prepare stakeholder messaging, and I preserve logs and artefacts throughout so the post-incident review has a complete picture to work from.",
    followUp: "How do you balance the urgency of incident response with the need for thorough investigation?",
    category: "it-security",
    tags: ["cybersecurity", "security", "incident response", "data breach", "soc", "infosec"],
  },
  {
    question: "Describe your approach to evaluating and managing cybersecurity risks in a cloud-native environment.",
    listenFor: "Shared responsibility model understanding, cloud security tooling, risk assessment methodology, balancing security with developer productivity",
    idealAnswer: "I start from the shared responsibility model to clearly delineate what the cloud provider owns versus what we own, then use cloud-native security tooling — CSPM, SIEM, and automated policy enforcement — to maintain continuous visibility rather than point-in-time audits. I embed security into the CI/CD pipeline through IaC scanning and container image analysis so developers get fast feedback without security becoming a bottleneck at the end of the release process.",
    followUp: "How do you stay ahead of emerging threats specific to IoT and connected vehicle platforms?",
    category: "it-security",
    tags: ["cybersecurity", "security", "cloud", "risk", "infrastructure", "it", "architecture"],
  },
  {
    question: "How do you approach IT service management to balance user satisfaction with operational efficiency?",
    listenFor: "ITIL/ITSM concepts, prioritization of tickets, SLA management, automation opportunities, proactive problem management vs. reactive firefighting",
    idealAnswer: "I use SLA tiers based on business impact rather than who shouts loudest, and I invest heavily in the knowledge base and self-service portal because deflecting repetitive tickets frees the team for higher-value work. I also run monthly problem management reviews to identify recurring incidents and address their root cause, which reduces the volume of reactive work over time rather than just processing tickets faster.",
    followUp: "What's the most impactful IT process improvement you've implemented?",
    category: "it-security",
    tags: ["it", "service management", "helpdesk", "servicenow", "support", "infrastructure", "system admin"],
  },

  // ===== PROJECT EXECUTION =====
  {
    question: "Tell me about a project that went significantly off track. How did you identify the problem and what did you do to get it back on course?",
    listenFor: "Early warning signs recognition, root cause analysis, stakeholder communication during challenges, replanning, maintaining team morale",
    idealAnswer: "I noticed in our weekly status review that we were consuming budget faster than planned without a corresponding delivery rate, which was an early signal before any deadlines were actually missed. I brought the team together for a rapid replanning session, surfaced the blockers that were causing rework, communicated a revised timeline to stakeholders proactively rather than waiting, and refocused the team on the critical path to delivery.",
    followUp: "What changes to your project management approach did you make as a result?",
    category: "project-mgmt",
    tags: ["project manager", "program manager", "risk", "recovery", "stakeholder", "delivery"],
  },
  {
    question: "How do you manage stakeholder expectations when project scope, timeline, or resources change?",
    listenFor: "Transparent communication, impact analysis, options presentation, negotiation, documentation of changes and decisions",
    idealAnswer: "I communicate changes proactively and with impact analysis — not just 'the timeline is moving' but 'the timeline is moving by three weeks because of X, and here are three options with different cost/scope trade-offs for you to choose from.' I document every decision so there's no ambiguity about what was agreed, and I'd rather have an uncomfortable conversation early than a crisis conversation late.",
    followUp: "How do you prevent scope creep while still being responsive to legitimate changing requirements?",
    category: "project-mgmt",
    tags: ["project manager", "program manager", "scope", "stakeholder", "change management", "pmo"],
  },
  {
    question: "Describe your approach to facilitating agile ceremonies. How do you keep them valuable and not ceremonial?",
    listenFor: "Purpose-driven facilitation, adapting practices to team needs, continuous improvement of the process itself, engaging quiet team members, time management",
    idealAnswer: "I start by making sure everyone understands the purpose of each ceremony — if a retrospective is just a complaint session with no follow-through on actions, it loses value fast. I timebox strictly, use techniques like silent writing before discussion to surface all voices (not just the loudest ones), and I track retrospective action items into the next sprint so the team sees their feedback actually changes something.",
    followUp: "How do you coach a team that's resistant to agile practices?",
    category: "project-mgmt",
    tags: ["scrum master", "agile coach", "scrum", "agile", "facilitation", "team", "ceremony"],
  },

  // ===== SOLUTIONS & INTEGRATION =====
  {
    question: "Walk me through how you would scope and design a custom integration between Geotab and a customer's existing systems.",
    listenFor: "Requirements discovery, API design thinking, understanding customer business processes, technical feasibility assessment, documentation and handoff",
    idealAnswer: "I start with a deep discovery session to understand the customer's current workflows, pain points, and what the integration needs to achieve for their business — not just the technical data mapping. From there I assess feasibility against the platform's APIs and SDK capabilities, document the integration spec collaboratively with the customer, and build in a clear handoff package so their internal team or a partner can maintain it without depending on me.",
    followUp: "How do you handle a situation where the customer's requirements exceed what the platform can natively support?",
    category: "solutions",
    tags: ["solutions engineer", "integration", "api", "technical", "customer", "architecture"],
  },
  {
    question: "Tell me about a time you had to translate complex technical capabilities into business value for a non-technical customer.",
    listenFor: "Business acumen, storytelling with technical concepts, understanding customer pain points, tailoring the message, demo skills",
    idealAnswer: "I always anchor technical capabilities to the specific business outcome the customer is trying to achieve — so instead of explaining how our data API works, I show them a live view of the exact report their ops team would use to make dispatch decisions. I avoid jargon by default and read the room; if a technical person in the meeting wants to go deeper, I flex into that without losing the business buyer's attention.",
    followUp: "How do you prepare for a technical demo when you don't know the audience's technical level in advance?",
    category: "solutions",
    tags: ["solutions engineer", "pre-sales", "demo", "customer", "technical", "communication"],
  },

  // ===== LEADERSHIP & STRATEGY =====
  {
    question: "Tell me about a time you had to make a strategic decision that had significant organizational impact. What was your process?",
    listenFor: "Data gathering, stakeholder consultation, weighing short-term vs. long-term impact, decisiveness under uncertainty, communication of decision rationale",
    idealAnswer: "I gathered input from the people closest to the problem before forming a view, then pressure-tested my recommendation with a small group who would challenge it rather than just validate it. Once I had enough information to make an informed decision — knowing I'd never have perfect information — I communicated the rationale clearly and transparently, including the risks I accepted and what would trigger a course correction.",
    followUp: "How did you measure whether the decision was the right one after the fact?",
    category: "leadership",
    tags: ["leader", "manager", "director", "vp", "executive", "strategy", "decision", "senior"],
  },
  {
    question: "How do you build and communicate a vision for your team that aligns with broader organizational strategy?",
    listenFor: "Strategic thinking, connecting team mission to company goals, inspiring others, translating abstract vision into concrete plans, ongoing communication",
    idealAnswer: "I start by understanding the company's strategic priorities deeply, then work with my team to co-create a team mission that makes our contribution to those priorities explicit and concrete. I translate vision into quarterly goals with measurable outcomes and reinforce the narrative regularly — in all-hands, one-on-ones, and during performance reviews — so the strategy doesn't sit in a deck but lives in how we make daily decisions.",
    followUp: "How do you adjust your vision when company strategy shifts?",
    category: "leadership",
    tags: ["leader", "manager", "director", "vp", "vision", "strategy", "alignment", "team"],
  },
  {
    question: "Describe how you've built a high-performing team. What are the key ingredients?",
    listenFor: "Hiring bar, developing talent, creating psychological safety, setting clear expectations, removing obstacles, celebrating wins",
    idealAnswer: "The foundation for me is psychological safety — people perform best when they feel they can take risks, raise concerns, and admit mistakes without fear. I invest heavily in hiring for complementary strengths rather than just replicating myself, set clear expectations with measurable outcomes, and focus on removing organizational blockers so the team can operate at full capacity rather than spending energy fighting friction.",
    followUp: "How do you handle a situation where a strong individual contributor is negatively impacting team dynamics?",
    category: "leadership",
    tags: ["leader", "manager", "director", "team", "culture", "hiring", "development"],
  },
  {
    question: "Tell me about a time you had to lead through a significant organizational change (reorg, strategy shift, etc.).",
    listenFor: "Change management, empathy for those affected, transparent communication, maintaining productivity during uncertainty, listening to concerns",
    idealAnswer: "When we went through a significant restructuring, I made sure my team heard the news from me directly before it was announced more broadly, and I created space for honest conversation about their concerns rather than just presenting talking points. I was transparent about what I knew and what I didn't, which built more trust than a polished message would have — and I checked in individually with anyone who seemed most affected.",
    followUp: "What did you learn about yourself as a leader during that period?",
    category: "leadership",
    tags: ["leader", "manager", "director", "change management", "reorg", "transformation", "resilience"],
  },
  {
    question: "How do you develop future leaders within your organization?",
    listenFor: "Mentorship approach, stretch assignments, feedback culture, succession planning, investing in people who are different from them",
    idealAnswer: "I identify leadership potential early and create deliberate stretch opportunities — giving people ownership of a project or a cross-functional initiative before they're fully ready, then staying close as a coach rather than taking it back when things get hard. I give specific, regular feedback tied to leadership behaviours, not just results, and I'm intentional about sponsoring high-potential people from underrepresented groups who might not be putting themselves forward.",
    followUp: "Can you share a specific example of someone you developed and where they are now?",
    category: "leadership",
    tags: ["leader", "manager", "director", "mentor", "develop", "succession", "growth"],
  },

  // ===== PEOPLE MANAGEMENT =====
  {
    question: "How do you approach setting goals and performance expectations with your direct reports?",
    listenFor: "Clarity and alignment with business goals, collaborative goal-setting, measurable outcomes, accountability frameworks, regular check-ins",
    idealAnswer: "I set goals collaboratively — we start with the team's strategic priorities and work out how each person's goals contribute to them, so there's genuine connection rather than a cascade exercise. I make sure each goal is specific and measurable so that at the end of the cycle we're evaluating outcomes, not effort, and I have bi-weekly one-on-ones specifically to discuss progress and remove blockers before goals are at risk.",
    followUp: "How do you handle it when someone consistently misses their goals despite your coaching?",
    category: "management",
    tags: ["manager", "team lead", "supervisor", "performance", "goal", "review", "people leader"],
  },
  {
    question: "Tell me about a time you had to manage an underperforming team member. Walk me through your approach.",
    listenFor: "Documentation, empathy, clear expectations, progressive feedback, fairness, distinguishing skill gaps from will gaps, involvement of HR",
    idealAnswer: "I first had a candid conversation to share my observations with specific examples and listen for their perspective — sometimes underperformance is a symptom of something fixable, like unclear expectations or personal circumstances. I then created a structured performance improvement plan with measurable milestones and check-in frequency, kept HR informed from the start, and followed through consistently — because inconsistency in performance management is unfair to the individual and erodes team trust.",
    followUp: "What was the outcome, and what did you learn about managing performance?",
    category: "management",
    tags: ["manager", "performance", "coaching", "feedback", "people leader", "pip"],
  },
  {
    question: "How do you create an environment where your team gives you honest feedback, even when it's uncomfortable?",
    listenFor: "Psychological safety, vulnerability, soliciting feedback proactively, acting on feedback received, not being defensive",
    idealAnswer: "I model vulnerability by openly sharing my own development areas and asking for specific feedback on them — which signals that feedback is safe and expected here, not exceptional. When I receive feedback I disagree with, I thank the person, reflect before responding, and always follow up on what I did with it, because acting on feedback is the only thing that makes people willing to give it again.",
    followUp: "Tell me about a time feedback from your team changed how you manage.",
    category: "management",
    tags: ["manager", "feedback", "culture", "trust", "people leader", "psychological safety"],
  },
  {
    question: "How do you approach having a career development conversation with a direct report whose aspirations don't align with available growth paths?",
    listenFor: "Honest conversation, exploring alternatives, lateral growth, skill building, sometimes helping them find the right next role even if it's outside the team",
    idealAnswer: "I'm honest about the reality of available paths rather than stringing someone along with vague promises, because they'll find out eventually and will trust me less. I explore what's underneath the aspiration — often there are adjacent opportunities within the team or cross-functionally that meet the underlying need — and if their best next step is genuinely outside the organisation, I'll support them in finding it, because that's what being a good manager means.",
    followUp: "How do you balance developing your people with the risk they might leave?",
    category: "management",
    tags: ["manager", "career development", "growth", "retention", "people leader", "coaching"],
  },

  // ===== TEAMWORK & COLLABORATION =====
  {
    question: "Describe a project where you had to work across multiple teams or departments to deliver a result. What was your role?",
    listenFor: "Coordination skills, communication across silos, alignment of different priorities, stakeholder management, navigating different team cultures",
    idealAnswer: "I coordinated a product launch that required tight alignment between engineering, marketing, sales, and customer success — each with different timelines and definitions of 'done.' I established a weekly cross-functional sync and a shared RACI so every team had visibility into dependencies and no one was surprised by a handoff. My main job was translating priorities across team languages and escalating blockers before they slipped the timeline.",
    followUp: "What was the biggest coordination challenge and how did you solve it?",
    category: "teamwork",
    tags: ["team", "cross-functional", "collaborate", "coordinate", "stakeholder", "project"],
  },
  {
    question: "Tell me about a time you disagreed with a teammate's approach. How did you handle it?",
    listenFor: "Respectful disagreement, seeking to understand their perspective, data-driven discussion, willingness to compromise, focusing on the goal not the person",
    idealAnswer: "I asked for time to talk through the approach together before the decision was finalised, and started by genuinely trying to understand their reasoning — sometimes I've changed my own view after that conversation. When I still disagreed, I shared my concern with specific evidence rather than a general preference, and we agreed to commit to one approach and evaluate it against defined criteria so we could learn from the outcome regardless of whose instinct was right.",
    followUp: "How did you maintain the relationship after the disagreement?",
    category: "teamwork",
    tags: ["team", "collaborate", "disagree", "interpersonal", "relationship", "conflict"],
  },
  {
    question: "How do you build trust and effective working relationships with remote or hybrid team members?",
    listenFor: "Intentional communication, async collaboration skills, inclusive meeting practices, building personal connections remotely, over-communicating context",
    idealAnswer: "I invest in the relationship intentionally — scheduling 1:1 time that isn't just task-focused, and making the effort to understand what matters to colleagues personally and professionally. I over-communicate context in async channels so remote team members aren't disadvantaged by being out of earshot of hallway conversations, and I design meetings so everyone participates equally regardless of whether they're in the room or on a screen.",
    followUp: "What tools or practices have you found most effective for remote collaboration?",
    category: "teamwork",
    tags: ["team", "remote", "hybrid", "virtual", "collaborate", "communication", "trust"],
  },

  // ===== COMMUNICATION =====
  {
    question: "Tell me about a time you had to present a complex topic to senior leadership. How did you prepare?",
    listenFor: "Audience awareness, distilling complexity, data visualization, anticipating questions, executive communication skills, storytelling",
    idealAnswer: "I prepared by thinking backwards from the decision I needed leadership to make, then stripping the content down to only what they needed to know to make it — no background context they already had. I did a dry run with a peer to pressure-test my logic, anticipated the three most likely pushback questions and prepared strong answers, and had the supporting detail in backup slides so I was ready to go deeper if asked.",
    followUp: "How do you handle tough questions when you don't have the answer immediately?",
    category: "communication",
    tags: ["communicate", "present", "executive", "stakeholder", "leadership", "report"],
  },
  {
    question: "Describe a situation where a project or initiative failed because of poor communication. What happened and what was your role?",
    listenFor: "Honest self-assessment, lessons learned, specific changes made to prevent recurrence, understanding of communication as a critical skill",
    idealAnswer: "I was responsible for coordinating a product rollout across three regions and assumed the regional leads all had the same information about the timeline change — I had communicated it in a group email rather than confirming individually. Two regions prepared correctly and one didn't, which caused a customer-facing delay. I learned that in high-stakes moments, confirmation is not the same as communication, and I now build explicit acknowledgement checkpoints into any cross-functional coordination plan.",
    followUp: "What communication practices do you always follow now as a result?",
    category: "communication",
    tags: ["communicate", "failure", "lesson", "process", "improvement", "alignment"],
  },
  {
    question: "How do you adapt your communication style when working with people from different functions, levels, or cultural backgrounds?",
    listenFor: "Flexibility, empathy, cultural awareness, listening skills, checking for understanding, not assuming one style fits all",
    idealAnswer: "I listen and observe first — the vocabulary someone uses, how direct they are, whether they prefer to talk through ambiguity or receive clear answers — and I adjust my approach to match rather than defaulting to one style and wondering why it isn't landing. When I'm working across cultures, I'm especially careful about assumptions around directness, hierarchy, and decision-making pace, and I ask questions to understand rather than guessing.",
    followUp: "Can you give a specific example where adjusting your communication style made a measurable difference?",
    category: "communication",
    tags: ["communicate", "adapt", "culture", "diversity", "stakeholder", "collaborate"],
  },

  // ===== PROBLEM SOLVING =====
  {
    question: "Walk me through the most complex problem you've solved in the past year. How did you approach it?",
    listenFor: "Structured problem decomposition, analytical thinking, creative alternatives, collaboration, measurable outcome",
    idealAnswer: "I started by clearly defining the problem and what a good solution would look like before jumping into solutions — which sounds obvious, but the initial framing turned out to be wrong and that reframing was the most important step. I then broke the problem into components, identified which parts I could solve independently, and brought in the people with context I lacked rather than trying to hold all the complexity myself.",
    followUp: "What alternatives did you consider before settling on your approach?",
    category: "problem-solving",
    tags: ["problem", "solve", "analytical", "complex", "challenge", "debug", "investigate"],
  },
  {
    question: "Tell me about a time you had to solve a problem with limited information. How did you move forward?",
    listenFor: "Comfort with ambiguity, hypothesis-driven approach, gathering information efficiently, knowing when you have enough to act, iterating as you learn",
    idealAnswer: "I formed an explicit hypothesis about the most likely cause and designed the minimum investigation needed to test it — rather than trying to gather all possible information before acting, which would have taken too long. I made my assumptions visible to the team so we could update our approach quickly when new information came in, and I treated the first action as a learning opportunity as much as a solution.",
    followUp: "How do you determine when you have 'enough' information to make a decision?",
    category: "problem-solving",
    tags: ["problem", "ambiguity", "decision", "analytical", "risk", "judgment"],
  },
  {
    question: "Describe a time when your initial approach to a problem didn't work. What did you do next?",
    listenFor: "Persistence, intellectual humility, learning from failure, pivoting effectively, not being emotionally attached to first idea",
    idealAnswer: "My first approach to reducing customer churn was focused on improving onboarding, but after three months the data showed no meaningful movement in the metric. Rather than pushing harder on the same lever, I went back to talk to churned customers and discovered the real issue was product gaps in a specific use case — which required a different solution entirely. I've learned to set explicit check-in points so I'm not committing to a path beyond what the evidence supports.",
    followUp: "How do you decide when to pivot vs. when to push through on your original approach?",
    category: "problem-solving",
    tags: ["problem", "iterate", "pivot", "failure", "learn", "resilience", "adapt"],
  },

  // ===== ADAPTABILITY & GROWTH =====
  {
    question: "Tell me about a time your role, team, or project direction changed significantly. How did you adapt?",
    listenFor: "Flexibility, positive attitude toward change, growth mindset, proactive adjustment rather than waiting to be told, helping others adapt",
    idealAnswer: "When the project I was leading was reprioritised mid-stream, I took time to genuinely understand the business rationale before forming a reaction — and once I did, I found I agreed with the decision even though it was disruptive to the work I cared about. I then focused my energy on helping my team make the transition smoothly, because how the change lands for the team is often the leader's most important contribution in that moment.",
    followUp: "What was the hardest part of the transition?",
    category: "adaptability",
    tags: ["adapt", "change", "grow", "flexible", "transition", "pivot", "resilience"],
  },
  {
    question: "Describe a piece of critical feedback that was hard to hear. What did you do with it?",
    listenFor: "Self-awareness, emotional maturity, concrete actions taken, growth over time, not becoming defensive",
    idealAnswer: "A manager told me I was not delegating effectively and was creating bottlenecks by holding onto too much myself. My first instinct was to defend myself, but I sat with it and realised the feedback was accurate even if it was uncomfortable. I started by identifying two areas where I could hand off ownership entirely, checked in regularly without micromanaging, and asked for feedback on my delegation specifically over the following months so I could track whether I was actually changing.",
    followUp: "How has that feedback changed the way you work today?",
    category: "adaptability",
    tags: ["feedback", "grow", "self-aware", "learn", "develop", "improve", "mature"],
  },
  {
    question: "How do you stay current in your field? What recent development has caught your attention and why?",
    listenFor: "Intellectual curiosity, practical learning habits, connecting industry trends to their own work, continuous development",
    idealAnswer: "I have a small set of sources I trust — a couple of industry newsletters, a practitioner community, and a habit of reading primary research rather than just commentary on it — and I block time weekly for deliberate learning rather than treating it as something I'll get to eventually. The development I'm most focused on right now is [specific relevant trend], because I can see direct implications for how we approach [specific area of their role].",
    followUp: "How do you decide which trends are worth investing your learning time in?",
    category: "adaptability",
    tags: ["learn", "trend", "industry", "current", "grow", "knowledge", "development"],
  },

  // ===== CULTURE & VALUES =====
  {
    question: "What kind of team environment brings out your best work? Can you give a specific example?",
    listenFor: "Self-awareness, team dynamics understanding, constructive preferences, not just 'I like nice people' — specific and practical",
    idealAnswer: "I do my best work in environments where debate is encouraged but decisions are respected once made — where I can push back on a direction during the discussion and then commit fully once we've aligned. I also thrive when there's a high bar for quality and people hold each other accountable, because it raises my own game and means I can trust that my colleagues' work meets the same standard.",
    followUp: "How do you contribute to creating that kind of environment for others?",
    category: "culture",
    tags: ["culture", "values", "team", "environment", "workplace", "collaborate"],
  },
  {
    question: "Tell me about a time you noticed something wasn't right in your team's dynamics or culture. What did you do?",
    listenFor: "Proactiveness, emotional intelligence, constructive intervention, not just observing but acting, courage to address uncomfortable situations",
    idealAnswer: "I noticed a pattern in our retrospectives where the same two people were dominating discussion and others had gone quiet — the energy in the room felt different from a few months earlier. I raised it directly with the team as something I was observing, invited a conversation about it, and changed my facilitation approach to structure participation differently. It took a few weeks but the contributions from quieter members started to come back.",
    followUp: "How did you know the issue was resolved?",
    category: "culture",
    tags: ["culture", "morale", "team", "dynamics", "conflict", "environment", "leader"],
  },
  {
    question: "How do you ensure diverse perspectives are heard and valued in your team's decision-making process?",
    listenFor: "Inclusive practices, active solicitation of quieter voices, awareness of unconscious bias, creating psychological safety for dissent",
    idealAnswer: "I structure decision-making to create space before the meeting — using written pre-reads or async input so people who think out loud don't automatically dominate the conversation. During discussions I actively invite perspectives from people who haven't spoken, and I'm careful not to signal my own preference too early, because when leaders show their hand first, it can shut down genuine debate from people who want to read the room.",
    followUp: "Can you share an example where a diverse perspective led to a better outcome?",
    category: "culture",
    tags: ["culture", "diversity", "inclusive", "equity", "dei", "belong", "perspective"],
  },

  // ===== CONFLICT RESOLUTION =====
  {
    question: "Tell me about a significant professional disagreement you had. How did you resolve it while maintaining the relationship?",
    listenFor: "Active listening, seeking to understand, finding compromise, focusing on shared goals, not making it personal",
    idealAnswer: "I requested a private conversation rather than letting the disagreement play out in front of the team, and I opened by sharing my perspective without positioning it as the obvious right answer. Once I heard their reasoning more fully, I realised there was a shared goal underneath the surface disagreement — which gave us a foundation to find a middle path that neither of us had seen before the conversation.",
    followUp: "What was the relationship like afterward?",
    category: "conflict",
    tags: ["conflict", "disagree", "resolve", "colleague", "interpersonal", "relationship"],
  },
  {
    question: "Describe a time you had to push back on a request from someone more senior. How did you approach it?",
    listenFor: "Courage balanced with respect, data-backed reasoning, offering alternatives, picking battles wisely",
    idealAnswer: "I asked for a brief meeting rather than pushing back in a group setting, because I wanted to give them the chance to hear my concern without feeling publicly challenged. I led with data and specific impact rather than a general objection, and I came with an alternative proposal so the conversation was constructive rather than just resistant. I made clear I would execute their decision fully if they still wanted to proceed after hearing my concern.",
    followUp: "How did you decide it was worth pushing back?",
    category: "conflict",
    tags: ["conflict", "pushback", "senior", "disagree", "courage", "influence", "navigate"],
  },

  // ===== CREATIVITY & INNOVATION =====
  {
    question: "Tell me about an innovative solution you developed that others hadn't considered. What inspired it?",
    listenFor: "Original thinking, connecting disparate ideas, willingness to challenge norms, practical implementation not just ideation",
    idealAnswer: "I was looking at a problem in our support queue and noticed a pattern that no one had flagged — a large percentage of tickets were caused by the same three configuration edge cases that our documentation didn't address. Instead of the obvious solution of answering tickets faster, I built a proactive in-app detection that flagged the condition before it became a problem, which eliminated 30% of the ticket category entirely.",
    followUp: "How did you get buy-in for an unconventional approach?",
    category: "creativity",
    tags: ["creative", "innovate", "idea", "solution", "think differently", "improve"],
  },
  {
    question: "Describe a time you challenged an established process or way of working. What was the outcome?",
    listenFor: "Questioning assumptions, evidence-based arguments, constructive disruption not just complaints, measuring impact of the change",
    idealAnswer: "Our team had a weekly status report that took everyone significant time to produce and that I suspected few people were actually reading. I proposed a 30-day experiment replacing it with a shared live dashboard and a brief async update — and after a month, both velocity and meeting quality had improved. Having the experiment framing was key because it gave sceptics a low-risk way to try something different.",
    followUp: "How did you handle resistance from people who were comfortable with the existing process?",
    category: "creativity",
    tags: ["creative", "innovate", "challenge", "process", "change", "improve", "optimize"],
  },

  // ===== ACCOUNTABILITY & OWNERSHIP =====
  {
    question: "Tell me about a time you made a mistake at work with real consequences. How did you handle it?",
    listenFor: "Ownership rather than blame-shifting, transparency with affected parties, corrective action, learning and preventive measures",
    idealAnswer: "I miscommunicated a deadline to a customer which created a significant expectation gap — and when I realised it, I told my manager and the customer directly rather than hoping I could quietly fix it before anyone noticed. I took full ownership without deflecting to process issues, focused the conversation on what we would do to remediate, and proposed a process change to prevent the same miscommunication happening again.",
    followUp: "How did you rebuild trust afterward?",
    category: "accountability",
    tags: ["accountability", "ownership", "mistake", "integrity", "trust", "learn"],
  },
  {
    question: "Describe a time you took ownership of something outside your formal responsibilities because you saw it needed to be done.",
    listenFor: "Initiative, seeing the bigger picture, not waiting to be asked, follow-through, balancing with existing responsibilities",
    idealAnswer: "I noticed our new hire onboarding was disjointed — different teams were giving contradictory information and new people were confused about basic processes within their first week. It wasn't my role, but I volunteered to document and consolidate the onboarding experience, got buy-in from the relevant leads, and built a structured first-week guide that reduced the time-to-productivity for new hires measurably.",
    followUp: "How did you balance this with your existing workload?",
    category: "accountability",
    tags: ["accountability", "ownership", "initiative", "proactive", "self-starter"],
  },
  {
    question: "How do you ensure follow-through on commitments when juggling multiple priorities?",
    listenFor: "Organization systems, reliability, proactive communication when at risk, renegotiating early rather than missing deadlines silently",
    idealAnswer: "I keep a single prioritised task list and do a weekly review of all outstanding commitments so nothing slips through the cracks — if a deadline is at risk I surface it early and give the person I've committed to options, rather than going quiet and hoping I can make it work. I'd rather have a conversation about resetting expectations than miss a commitment silently, because the latter erodes trust in a way that's much harder to recover from.",
    followUp: "Tell me about a time you had to renegotiate a commitment. How did you handle it?",
    category: "accountability",
    tags: ["accountability", "follow-through", "reliability", "organize", "priority", "deliver"],
  },
];

// ─── Question generation logic ───
export function generateQuestions(
  roleOrDescription: string,
  selectedFamily?: string
): { category: QuestionCategory; questions: BankQuestion[] }[] {
  const lower = roleOrDescription.toLowerCase();

  // Detect matching role families
  const matchedFamilies = new Set<string>();
  if (selectedFamily) {
    matchedFamilies.add(selectedFamily);
  } else {
    for (const family of roleFamilies) {
      for (const kw of family.keywords) {
        if (lower.includes(kw.toLowerCase())) {
          matchedFamilies.add(family.id);
        }
      }
    }
  }

  // Check for People Leader role
  const isPeopleLeader = lower.includes('manager') || lower.includes('director') ||
    lower.includes('vice president') || lower.includes('team lead') ||
    lower.includes('people leader') || lower.includes('senior manager');

  if (isPeopleLeader) {
    matchedFamilies.add('leadership');
  }

  // Get relevant question categories based on matched families
  const relevantCategories = new Set<string>();
  for (const familyId of matchedFamilies) {
    const family = roleFamilies.find(f => f.id === familyId);
    if (family) {
      for (const cat of family.categories) {
        relevantCategories.add(cat);
      }
    }
  }

  // If no families matched, include universal categories
  if (relevantCategories.size === 0) {
    ['communication', 'problem-solving', 'teamwork', 'accountability', 'adaptability', 'culture'].forEach(c => relevantCategories.add(c));
  }

  // Score each question by relevance
  const words = lower.split(/[\s,.\-/;:()+]+/).filter(w => w.length > 2);
  const scored = questionBank.map(q => {
    let score = 0;

    if (relevantCategories.has(q.category)) score += 4;

    for (const tag of q.tags) {
      if (lower.includes(tag)) score += 3;
    }

    for (const word of words) {
      if (q.tags.some(tag => tag.includes(word) || word.includes(tag))) {
        score += 1;
      }
    }

    return { question: q, score };
  });

  // Filter and sort
  const relevant = scored
    .filter(s => s.score > 2)
    .sort((a, b) => b.score - a.score);

  // Group by category
  const grouped = new Map<string, BankQuestion[]>();
  for (const { question } of relevant) {
    const existing = grouped.get(question.category) || [];
    if (existing.length < 4) {
      existing.push(question);
      grouped.set(question.category, existing);
    }
  }

  // Ensure minimum coverage
  if (grouped.size < 3) {
    const general = ['communication', 'problem-solving', 'teamwork', 'accountability'];
    for (const cat of general) {
      if (!grouped.has(cat)) {
        const catQuestions = questionBank.filter(q => q.category === cat).slice(0, 2);
        if (catQuestions.length > 0) {
          grouped.set(cat, catQuestions);
        }
      }
      if (grouped.size >= 5) break;
    }
  }

  // Convert to output format
  const result: { category: QuestionCategory; questions: BankQuestion[] }[] = [];
  for (const [catId, questions] of grouped) {
    const category = categories.find(c => c.id === catId);
    if (category) {
      result.push({ category, questions });
    }
  }

  result.sort((a, b) => b.questions.length - a.questions.length);
  return result;
}
