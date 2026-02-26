export interface BankQuestion {
  question: string;
  listenFor: string;
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
    followUp: "How do you balance speed of resolution vs. thoroughness of root cause analysis during a live incident?",
    category: "technical",
    tags: ["software", "developer", "engineer", "debug", "production", "incident", "sre", "devops", "cloud"],
  },
  {
    question: "Describe a time you improved the performance of a system or application. What metrics did you use to measure success?",
    listenFor: "Profiling methodology, identifying bottlenecks, measurable outcomes (latency, throughput, resource usage), systematic optimization vs. premature optimization",
    followUp: "How did you decide which optimizations were worth the development investment?",
    category: "technical",
    tags: ["software", "developer", "engineer", "performance", "optimize", "scale", "backend", "database", "cloud"],
  },
  {
    question: "How do you approach code reviews? What do you prioritize when reviewing someone else's code?",
    listenFor: "Balance of correctness, readability, and maintainability. Constructive feedback style, knowledge sharing, catching architectural concerns vs. nitpicking",
    followUp: "Tell me about a time a code review led to a significant improvement in the design or architecture.",
    category: "technical",
    tags: ["software", "developer", "engineer", "code review", "quality", "standards", "qa"],
  },
  {
    question: "Describe your experience with test automation. How do you decide what level of testing (unit, integration, e2e) to apply?",
    listenFor: "Testing pyramid understanding, pragmatic test strategy, balancing coverage with maintenance cost, CI/CD integration",
    followUp: "How do you handle flaky tests in a CI pipeline without just ignoring them?",
    category: "technical",
    tags: ["software", "developer", "engineer", "testing", "qa", "quality", "automation", "ci/cd"],
  },
  {
    question: "Tell me about a time you had to learn a new technology or language quickly to deliver on a project.",
    listenFor: "Learning strategy, identifying good resources, applying knowledge quickly, asking for help when stuck, time management during ramp-up",
    followUp: "What's your process for evaluating whether to adopt a new technology vs. using something you already know?",
    category: "technical",
    tags: ["software", "developer", "engineer", "learn", "technology", "framework", "adapt", "growth"],
  },

  // ===== SYSTEM DESIGN & ARCHITECTURE =====
  {
    question: "How would you design a system that processes millions of telematics data points per second from connected vehicles?",
    listenFor: "Distributed systems thinking, message queue architecture, data partitioning, storage tiering, scalability considerations relevant to IoT/fleet management",
    followUp: "How would you handle data integrity when dealing with unreliable network connections from moving vehicles?",
    category: "system-design",
    tags: ["software", "architect", "system design", "cloud", "backend", "scale", "infrastructure", "senior", "lead", "principal"],
  },
  {
    question: "Describe a significant architecture decision you've made. What trade-offs did you consider?",
    listenFor: "Clear articulation of constraints, evaluation of alternatives, long-term maintainability thinking, stakeholder communication about technical trade-offs",
    followUp: "Looking back, would you make the same decision? What would you change?",
    category: "system-design",
    tags: ["software", "architect", "system design", "senior", "lead", "principal", "decision", "trade-off"],
  },
  {
    question: "How do you approach breaking a monolithic application into microservices? When is it not the right approach?",
    listenFor: "Understanding of service boundaries, domain-driven design thinking, awareness of distributed system complexity, pragmatism about when monoliths are appropriate",
    followUp: "How do you handle shared data and transactions across microservice boundaries?",
    category: "system-design",
    tags: ["software", "architect", "microservices", "senior", "lead", "principal", "backend", "platform"],
  },

  // ===== DATA ANALYSIS & INSIGHTS =====
  {
    question: "Walk me through how you would approach analyzing a dataset with millions of vehicle telematics records to identify fuel efficiency patterns.",
    listenFor: "Data exploration methodology, statistical thinking, handling messy real-world data, translating technical findings into business recommendations",
    followUp: "How would you present your findings to non-technical stakeholders to drive action?",
    category: "data-analysis",
    tags: ["data analyst", "data scientist", "analytics", "bi", "business intelligence", "insights"],
  },
  {
    question: "Tell me about a time your data analysis challenged an existing assumption or business decision.",
    listenFor: "Intellectual honesty, courage to present contradictory findings, data quality validation, stakeholder communication when delivering unexpected results",
    followUp: "How did stakeholders respond, and how did you handle pushback?",
    category: "data-analysis",
    tags: ["data analyst", "data scientist", "analytics", "insights", "stakeholder", "decision"],
  },
  {
    question: "Describe your approach to building a data pipeline that needs to be reliable and maintainable over time.",
    listenFor: "Data quality checks, monitoring and alerting, idempotency, documentation, handling schema evolution and data drift",
    followUp: "How do you handle situations where upstream data sources change without notice?",
    category: "data-analysis",
    tags: ["data engineer", "data pipeline", "etl", "database", "infrastructure", "reliability"],
  },
  {
    question: "How do you determine the right visualization or dashboard for a particular business question?",
    listenFor: "Audience awareness, choosing appropriate chart types, avoiding misleading visualizations, iterating on dashboard design with user feedback",
    followUp: "Tell me about a dashboard that had high initial engagement but needed significant revision.",
    category: "data-analysis",
    tags: ["data analyst", "analytics", "bi", "visualization", "dashboard", "reporting"],
  },

  // ===== AI & MACHINE LEARNING =====
  {
    question: "Walk me through your process for validating an ML model before deploying it to production.",
    listenFor: "Train/test split methodology, cross-validation, evaluation metrics appropriate to the problem, bias testing, A/B testing strategy, monitoring post-deployment",
    followUp: "How do you handle model drift over time, especially with IoT data that changes seasonally?",
    category: "ai-ml",
    tags: ["ai", "machine learning", "data scientist", "ml engineer", "model", "validation"],
  },
  {
    question: "Describe a situation where an AI/ML solution you built didn't perform as expected in production. What happened?",
    listenFor: "Debugging ML systems, understanding train-serve skew, feature engineering issues, honest assessment of what went wrong, learning from failure",
    followUp: "What changes did you make to your development process as a result?",
    category: "ai-ml",
    tags: ["ai", "machine learning", "data scientist", "ml engineer", "production", "debugging"],
  },
  {
    question: "How do you approach responsible AI development? How do you think about bias, fairness, and transparency?",
    listenFor: "Awareness of AI ethics, practical approaches to bias detection, explainability techniques, data representation concerns, regulatory awareness",
    followUp: "Can you give a specific example where you identified and mitigated a potential bias in a model or dataset?",
    category: "ai-ml",
    tags: ["ai", "machine learning", "governance", "ethics", "bias", "fairness", "responsible ai"],
  },

  // ===== PRODUCT THINKING =====
  {
    question: "Tell me about a time you had to decide between competing feature requests from different stakeholders. How did you prioritize?",
    listenFor: "Prioritization framework (impact vs. effort, RICE, etc.), data-informed decisions, stakeholder management, saying no constructively, aligning to strategy",
    followUp: "How do you communicate your prioritization decisions to stakeholders who didn't get what they wanted?",
    category: "product",
    tags: ["product manager", "product owner", "prioritize", "roadmap", "stakeholder", "strategy"],
  },
  {
    question: "Describe how you define and measure success for a product feature or launch.",
    listenFor: "OKRs/KPIs thinking, leading vs. lagging indicators, user metrics, business metrics, post-launch iteration based on data",
    followUp: "Tell me about a feature that looked successful on one metric but failed on another. How did you reconcile that?",
    category: "product",
    tags: ["product manager", "metrics", "kpi", "okr", "launch", "success", "measure"],
  },
  {
    question: "How do you balance user needs with technical constraints and business goals when making product decisions?",
    listenFor: "Three-way trade-off thinking, collaboration with engineering and design, user research integration, business acumen, pragmatism",
    followUp: "Give an example where you had to make a product compromise. What did you learn?",
    category: "product",
    tags: ["product manager", "trade-off", "user", "engineering", "business", "collaboration"],
  },
  {
    question: "Describe your process for understanding user needs. How do you go beyond what users say they want?",
    listenFor: "User research methods (interviews, surveys, analytics), jobs-to-be-done thinking, distinguishing needs from solutions, empathy",
    followUp: "Tell me about a time user research revealed something unexpected that changed your product direction.",
    category: "product",
    tags: ["product manager", "user research", "discovery", "customer", "empathy", "insights"],
  },

  // ===== DESIGN & USER EXPERIENCE =====
  {
    question: "Walk me through your design process from receiving a brief to delivering final designs.",
    listenFor: "Research → ideation → iteration → testing flow, collaboration with stakeholders, handling feedback, design rationale documentation",
    followUp: "How do you handle a situation where stakeholder feedback conflicts with user research findings?",
    category: "design",
    tags: ["designer", "ux", "ui", "creative", "process", "user research", "iteration"],
  },
  {
    question: "Tell me about a design decision you made that was data-informed. How did quantitative data influence your creative choices?",
    listenFor: "Balancing data with design intuition, A/B testing experience, analytics-informed iteration, not blindly following metrics",
    followUp: "When do you trust your design instinct over what the data suggests?",
    category: "design",
    tags: ["designer", "ux", "data", "a/b testing", "metrics", "iteration"],
  },
  {
    question: "Describe a project where accessibility was a key consideration. How did you approach it?",
    listenFor: "WCAG awareness, inclusive design thinking, testing with assistive technologies, advocating for accessibility when it's not explicitly requested",
    followUp: "How do you champion accessibility in an organization where it's not always a priority?",
    category: "design",
    tags: ["designer", "ux", "accessibility", "inclusive", "wcag", "usability"],
  },

  // ===== SALES & REVENUE =====
  {
    question: "Walk me through your most complex deal cycle. What made it challenging and how did you navigate it?",
    listenFor: "Multi-stakeholder management, solution selling, handling objections, persistence without being pushy, creative deal structuring",
    followUp: "What would you do differently if you could run that deal cycle again?",
    category: "sales",
    tags: ["sales", "account executive", "deal", "revenue", "close", "pipeline", "enterprise"],
  },
  {
    question: "Tell me about a time you lost a deal you were confident about. What happened and what did you learn?",
    listenFor: "Honest self-reflection, loss analysis, learning from failure, adapting approach for future deals, resilience",
    followUp: "How did that experience change how you qualify opportunities?",
    category: "sales",
    tags: ["sales", "account executive", "loss", "qualify", "pipeline", "learning"],
  },
  {
    question: "How do you approach building a territory plan or account strategy in a B2B IoT/fleet management market?",
    listenFor: "Market analysis, segmentation, prioritization of accounts, understanding fleet management pain points, competitive awareness, systematic pipeline building",
    followUp: "How do you balance hunting for new business vs. expanding existing accounts?",
    category: "sales",
    tags: ["sales", "account executive", "territory", "strategy", "pipeline", "b2b", "fleet"],
  },
  {
    question: "Describe how you sell to multiple decision-makers and influencers within a single organization.",
    listenFor: "Stakeholder mapping, tailoring message to different buyers (economic, technical, user), champion building, navigating organizational politics",
    followUp: "How do you handle a situation where your champion leaves the organization mid-deal?",
    category: "sales",
    tags: ["sales", "account executive", "stakeholder", "enterprise", "champion", "decision-maker"],
  },
  {
    question: "How do you partner with your channel partners or resellers to drive business?",
    listenFor: "Partner relationship management, enablement strategies, co-selling approach, managing competing priorities, building mutual trust",
    followUp: "Tell me about a time a channel conflict arose. How did you resolve it?",
    category: "sales",
    tags: ["sales", "channel", "partner", "reseller", "business development", "relationship"],
  },

  // ===== MARKETING & BRAND =====
  {
    question: "Tell me about a campaign you developed from concept to execution. What was the strategy and how did you measure results?",
    listenFor: "Strategic thinking tied to business objectives, audience segmentation, channel selection, creative process, measurement framework, optimization",
    followUp: "What would you change about the campaign if you could run it again?",
    category: "marketing",
    tags: ["marketing", "campaign", "content", "digital", "demand gen", "brand", "strategy"],
  },
  {
    question: "How do you approach content strategy for a B2B technology company like Geotab that has both technical and business audiences?",
    listenFor: "Audience segmentation, content mapping to buyer journey, balancing thought leadership with demand gen, SEO integration, multi-channel distribution",
    followUp: "How do you measure content effectiveness beyond just page views?",
    category: "marketing",
    tags: ["marketing", "content", "b2b", "strategy", "seo", "thought leadership"],
  },
  {
    question: "Describe a time you used data and analytics to significantly improve a marketing program's performance.",
    listenFor: "Analytical mindset, attribution modeling, A/B testing, iterative optimization, connecting marketing metrics to revenue outcomes",
    followUp: "How do you handle the challenge of multi-touch attribution in B2B marketing?",
    category: "marketing",
    tags: ["marketing", "analytics", "data", "optimization", "digital", "demand gen", "performance"],
  },

  // ===== CUSTOMER FOCUS =====
  {
    question: "Tell me about a time you turned an at-risk customer into an advocate. What was your approach?",
    listenFor: "Empathy, proactive problem identification, escalation management, building trust through follow-through, measurable impact on retention",
    followUp: "How do you identify customers who are at risk before they tell you they're unhappy?",
    category: "customer",
    tags: ["customer", "success", "retention", "relationship", "account", "advocacy", "churn"],
  },
  {
    question: "Describe your approach to onboarding new customers onto a complex platform like fleet management software.",
    listenFor: "Structured onboarding process, setting expectations, time-to-value focus, handling technical integration challenges, proactive communication",
    followUp: "How do you adapt your onboarding approach for different customer sizes and technical sophistication levels?",
    category: "customer",
    tags: ["customer", "onboarding", "implementation", "success", "training", "adoption"],
  },
  {
    question: "Tell me about a time you had to manage a customer escalation that involved multiple internal teams.",
    listenFor: "Cross-functional coordination, clear communication under pressure, ownership of the customer experience even when the issue spans teams, follow-up",
    followUp: "What process improvements did you put in place to prevent similar escalations?",
    category: "customer",
    tags: ["customer", "escalation", "support", "cross-functional", "resolution", "service"],
  },
  {
    question: "How do you gather and leverage customer feedback to influence product or service improvements?",
    listenFor: "Systematic feedback collection, pattern recognition, translating customer voice into actionable insights, closing the feedback loop with customers",
    followUp: "Can you share an example where customer feedback directly led to a meaningful product change?",
    category: "customer",
    tags: ["customer", "feedback", "product", "voice of customer", "improvement", "insights"],
  },
  {
    question: "How do you prioritize between competing customer needs when you can't address everything at once?",
    listenFor: "Prioritization frameworks, balancing business impact with customer urgency, transparent communication, strategic thinking",
    followUp: "How do you communicate priorities to customers who aren't at the top of the list?",
    category: "customer",
    tags: ["customer", "prioritize", "triage", "stakeholder", "account", "service"],
  },

  // ===== HR & TALENT STRATEGY =====
  {
    question: "How do you approach building a talent acquisition strategy for hard-to-fill technical roles in a competitive market?",
    listenFor: "Sourcing diversification, employer brand thinking, candidate experience focus, market research, partnership with hiring managers, data-driven recruitment",
    followUp: "How do you measure the effectiveness of your talent acquisition efforts beyond time-to-fill?",
    category: "hr-people",
    tags: ["hr", "talent", "recruiting", "acquisition", "strategy", "hiring", "sourcing"],
  },
  {
    question: "Describe a time you had to advise a manager through a difficult employee situation (performance, conflict, or separation).",
    listenFor: "Empathy balanced with business needs, legal awareness, documentation rigor, coaching the manager vs. doing it for them, confidentiality",
    followUp: "How do you balance being an advocate for the employee with being a partner to the business?",
    category: "hr-people",
    tags: ["hr", "hrbp", "employee relations", "performance", "coaching", "people partner"],
  },
  {
    question: "How do you approach designing a compensation or benefits program that is both competitive and equitable?",
    listenFor: "Market benchmarking, pay equity analysis, total rewards thinking, balancing budget constraints with talent retention, compliance awareness",
    followUp: "How do you handle conversations with employees who feel they are underpaid?",
    category: "hr-people",
    tags: ["hr", "compensation", "benefits", "total rewards", "equity", "retention"],
  },

  // ===== FINANCE & BUSINESS ACUMEN =====
  {
    question: "Walk me through how you would build a financial model for a new product line or market expansion.",
    listenFor: "Revenue and cost assumptions, sensitivity analysis, scenario planning, presentation to stakeholders, iterating based on feedback",
    followUp: "How do you handle uncertainty in your assumptions, and how do you communicate that uncertainty to decision-makers?",
    category: "finance",
    tags: ["finance", "financial analyst", "model", "forecast", "business", "planning", "fp&a"],
  },
  {
    question: "Describe a time you identified a financial risk or anomaly before it became a material issue.",
    listenFor: "Attention to detail, pattern recognition, proactive communication, understanding business context behind the numbers",
    followUp: "What processes or controls do you put in place to catch issues systematically?",
    category: "finance",
    tags: ["finance", "accountant", "risk", "audit", "controls", "anomaly", "compliance"],
  },
  {
    question: "How do you close the books efficiently while maintaining accuracy, especially during high-growth periods?",
    listenFor: "Process optimization, automation opportunities, reconciliation discipline, managing competing deadlines, team coordination",
    followUp: "What's the most impactful process improvement you've made to a close cycle?",
    category: "finance",
    tags: ["finance", "accountant", "month-end close", "accuracy", "process", "controller"],
  },

  // ===== LEGAL & REGULATORY =====
  {
    question: "How do you approach advising the business on a matter where the legal risk is ambiguous?",
    listenFor: "Risk assessment framework, practical advice vs. overly conservative, understanding business objectives, communicating risk in business terms",
    followUp: "How do you handle situations where the business wants to move forward despite moderate legal risk?",
    category: "legal",
    tags: ["legal", "counsel", "risk", "compliance", "advisory", "business"],
  },
  {
    question: "Describe your experience navigating data privacy regulations across multiple jurisdictions (e.g., GDPR, CCPA).",
    listenFor: "Multi-jurisdictional awareness, practical compliance strategies, balancing privacy requirements with product functionality, staying current with evolving regulations",
    followUp: "How do you ensure the entire organization, not just legal, understands and follows privacy requirements?",
    category: "legal",
    tags: ["legal", "privacy", "compliance", "gdpr", "data protection", "regulatory", "governance"],
  },

  // ===== OPERATIONS EXCELLENCE =====
  {
    question: "Describe a time you improved a manufacturing or supply chain process. What methodology did you use and what was the measurable impact?",
    listenFor: "Lean/Six Sigma thinking, data-driven improvement, stakeholder buy-in, measuring before/after, sustaining improvements over time",
    followUp: "How did you ensure the improvement stuck after the initial implementation?",
    category: "operations",
    tags: ["operations", "manufacturing", "supply chain", "process improvement", "lean", "continuous improvement"],
  },
  {
    question: "How do you manage supplier relationships to balance cost, quality, and delivery reliability?",
    listenFor: "Supplier evaluation frameworks, negotiation approach, risk management, building strategic partnerships vs. transactional relationships",
    followUp: "Tell me about a time a key supplier failed to deliver. How did you handle it?",
    category: "operations",
    tags: ["operations", "supply chain", "procurement", "buyer", "supplier", "vendor", "logistics"],
  },
  {
    question: "How do you approach demand forecasting and inventory planning to minimize both stockouts and excess inventory?",
    listenFor: "Forecasting methodologies, handling demand variability, safety stock optimization, collaboration with sales and product teams, using data tools",
    followUp: "How do you handle a situation where sales forecasts are consistently inaccurate?",
    category: "operations",
    tags: ["operations", "supply chain", "inventory", "planning", "forecast", "logistics", "warehouse"],
  },

  // ===== IT & CYBERSECURITY =====
  {
    question: "Walk me through how you would respond to a security incident involving a potential data breach.",
    listenFor: "Incident response framework (identify, contain, eradicate, recover), communication protocols, evidence preservation, post-incident review, regulatory notification awareness",
    followUp: "How do you balance the urgency of incident response with the need for thorough investigation?",
    category: "it-security",
    tags: ["cybersecurity", "security", "incident response", "data breach", "soc", "infosec"],
  },
  {
    question: "Describe your approach to evaluating and managing cybersecurity risks in a cloud-native environment.",
    listenFor: "Shared responsibility model understanding, cloud security tooling, risk assessment methodology, balancing security with developer productivity",
    followUp: "How do you stay ahead of emerging threats specific to IoT and connected vehicle platforms?",
    category: "it-security",
    tags: ["cybersecurity", "security", "cloud", "risk", "infrastructure", "it", "architecture"],
  },
  {
    question: "How do you approach IT service management to balance user satisfaction with operational efficiency?",
    listenFor: "ITIL/ITSM concepts, prioritization of tickets, SLA management, automation opportunities, proactive problem management vs. reactive firefighting",
    followUp: "What's the most impactful IT process improvement you've implemented?",
    category: "it-security",
    tags: ["it", "service management", "helpdesk", "servicenow", "support", "infrastructure", "system admin"],
  },

  // ===== PROJECT EXECUTION =====
  {
    question: "Tell me about a project that went significantly off track. How did you identify the problem and what did you do to get it back on course?",
    listenFor: "Early warning signs recognition, root cause analysis, stakeholder communication during challenges, replanning, maintaining team morale",
    followUp: "What changes to your project management approach did you make as a result?",
    category: "project-mgmt",
    tags: ["project manager", "program manager", "risk", "recovery", "stakeholder", "delivery"],
  },
  {
    question: "How do you manage stakeholder expectations when project scope, timeline, or resources change?",
    listenFor: "Transparent communication, impact analysis, options presentation, negotiation, documentation of changes and decisions",
    followUp: "How do you prevent scope creep while still being responsive to legitimate changing requirements?",
    category: "project-mgmt",
    tags: ["project manager", "program manager", "scope", "stakeholder", "change management", "pmo"],
  },
  {
    question: "Describe your approach to facilitating agile ceremonies. How do you keep them valuable and not ceremonial?",
    listenFor: "Purpose-driven facilitation, adapting practices to team needs, continuous improvement of the process itself, engaging quiet team members, time management",
    followUp: "How do you coach a team that's resistant to agile practices?",
    category: "project-mgmt",
    tags: ["scrum master", "agile coach", "scrum", "agile", "facilitation", "team", "ceremony"],
  },

  // ===== SOLUTIONS & INTEGRATION =====
  {
    question: "Walk me through how you would scope and design a custom integration between Geotab and a customer's existing systems.",
    listenFor: "Requirements discovery, API design thinking, understanding customer business processes, technical feasibility assessment, documentation and handoff",
    followUp: "How do you handle a situation where the customer's requirements exceed what the platform can natively support?",
    category: "solutions",
    tags: ["solutions engineer", "integration", "api", "technical", "customer", "architecture"],
  },
  {
    question: "Tell me about a time you had to translate complex technical capabilities into business value for a non-technical customer.",
    listenFor: "Business acumen, storytelling with technical concepts, understanding customer pain points, tailoring the message, demo skills",
    followUp: "How do you prepare for a technical demo when you don't know the audience's technical level in advance?",
    category: "solutions",
    tags: ["solutions engineer", "pre-sales", "demo", "customer", "technical", "communication"],
  },

  // ===== LEADERSHIP & STRATEGY =====
  {
    question: "Tell me about a time you had to make a strategic decision that had significant organizational impact. What was your process?",
    listenFor: "Data gathering, stakeholder consultation, weighing short-term vs. long-term impact, decisiveness under uncertainty, communication of decision rationale",
    followUp: "How did you measure whether the decision was the right one after the fact?",
    category: "leadership",
    tags: ["leader", "manager", "director", "vp", "executive", "strategy", "decision", "senior"],
  },
  {
    question: "How do you build and communicate a vision for your team that aligns with broader organizational strategy?",
    listenFor: "Strategic thinking, connecting team mission to company goals, inspiring others, translating abstract vision into concrete plans, ongoing communication",
    followUp: "How do you adjust your vision when company strategy shifts?",
    category: "leadership",
    tags: ["leader", "manager", "director", "vp", "vision", "strategy", "alignment", "team"],
  },
  {
    question: "Describe how you've built a high-performing team. What are the key ingredients?",
    listenFor: "Hiring bar, developing talent, creating psychological safety, setting clear expectations, removing obstacles, celebrating wins",
    followUp: "How do you handle a situation where a strong individual contributor is negatively impacting team dynamics?",
    category: "leadership",
    tags: ["leader", "manager", "director", "team", "culture", "hiring", "development"],
  },
  {
    question: "Tell me about a time you had to lead through a significant organizational change (reorg, strategy shift, etc.).",
    listenFor: "Change management, empathy for those affected, transparent communication, maintaining productivity during uncertainty, listening to concerns",
    followUp: "What did you learn about yourself as a leader during that period?",
    category: "leadership",
    tags: ["leader", "manager", "director", "change management", "reorg", "transformation", "resilience"],
  },
  {
    question: "How do you develop future leaders within your organization?",
    listenFor: "Mentorship approach, stretch assignments, feedback culture, succession planning, investing in people who are different from them",
    followUp: "Can you share a specific example of someone you developed and where they are now?",
    category: "leadership",
    tags: ["leader", "manager", "director", "mentor", "develop", "succession", "growth"],
  },

  // ===== PEOPLE MANAGEMENT =====
  {
    question: "How do you approach setting goals and performance expectations with your direct reports?",
    listenFor: "Clarity and alignment with business goals, collaborative goal-setting, measurable outcomes, accountability frameworks, regular check-ins",
    followUp: "How do you handle it when someone consistently misses their goals despite your coaching?",
    category: "management",
    tags: ["manager", "team lead", "supervisor", "performance", "goal", "review", "people leader"],
  },
  {
    question: "Tell me about a time you had to manage an underperforming team member. Walk me through your approach.",
    listenFor: "Documentation, empathy, clear expectations, progressive feedback, fairness, distinguishing skill gaps from will gaps, involvement of HR",
    followUp: "What was the outcome, and what did you learn about managing performance?",
    category: "management",
    tags: ["manager", "performance", "coaching", "feedback", "people leader", "pip"],
  },
  {
    question: "How do you create an environment where your team gives you honest feedback, even when it's uncomfortable?",
    listenFor: "Psychological safety, vulnerability, soliciting feedback proactively, acting on feedback received, not being defensive",
    followUp: "Tell me about a time feedback from your team changed how you manage.",
    category: "management",
    tags: ["manager", "feedback", "culture", "trust", "people leader", "psychological safety"],
  },
  {
    question: "How do you approach having a career development conversation with a direct report whose aspirations don't align with available growth paths?",
    listenFor: "Honest conversation, exploring alternatives, lateral growth, skill building, sometimes helping them find the right next role even if it's outside the team",
    followUp: "How do you balance developing your people with the risk they might leave?",
    category: "management",
    tags: ["manager", "career development", "growth", "retention", "people leader", "coaching"],
  },

  // ===== TEAMWORK & COLLABORATION =====
  {
    question: "Describe a project where you had to work across multiple teams or departments to deliver a result. What was your role?",
    listenFor: "Coordination skills, communication across silos, alignment of different priorities, stakeholder management, navigating different team cultures",
    followUp: "What was the biggest coordination challenge and how did you solve it?",
    category: "teamwork",
    tags: ["team", "cross-functional", "collaborate", "coordinate", "stakeholder", "project"],
  },
  {
    question: "Tell me about a time you disagreed with a teammate's approach. How did you handle it?",
    listenFor: "Respectful disagreement, seeking to understand their perspective, data-driven discussion, willingness to compromise, focusing on the goal not the person",
    followUp: "How did you maintain the relationship after the disagreement?",
    category: "teamwork",
    tags: ["team", "collaborate", "disagree", "interpersonal", "relationship", "conflict"],
  },
  {
    question: "How do you build trust and effective working relationships with remote or hybrid team members?",
    listenFor: "Intentional communication, async collaboration skills, inclusive meeting practices, building personal connections remotely, over-communicating context",
    followUp: "What tools or practices have you found most effective for remote collaboration?",
    category: "teamwork",
    tags: ["team", "remote", "hybrid", "virtual", "collaborate", "communication", "trust"],
  },

  // ===== COMMUNICATION =====
  {
    question: "Tell me about a time you had to present a complex topic to senior leadership. How did you prepare?",
    listenFor: "Audience awareness, distilling complexity, data visualization, anticipating questions, executive communication skills, storytelling",
    followUp: "How do you handle tough questions when you don't have the answer immediately?",
    category: "communication",
    tags: ["communicate", "present", "executive", "stakeholder", "leadership", "report"],
  },
  {
    question: "Describe a situation where a project or initiative failed because of poor communication. What happened and what was your role?",
    listenFor: "Honest self-assessment, lessons learned, specific changes made to prevent recurrence, understanding of communication as a critical skill",
    followUp: "What communication practices do you always follow now as a result?",
    category: "communication",
    tags: ["communicate", "failure", "lesson", "process", "improvement", "alignment"],
  },
  {
    question: "How do you adapt your communication style when working with people from different functions, levels, or cultural backgrounds?",
    listenFor: "Flexibility, empathy, cultural awareness, listening skills, checking for understanding, not assuming one style fits all",
    followUp: "Can you give a specific example where adjusting your communication style made a measurable difference?",
    category: "communication",
    tags: ["communicate", "adapt", "culture", "diversity", "stakeholder", "collaborate"],
  },

  // ===== PROBLEM SOLVING =====
  {
    question: "Walk me through the most complex problem you've solved in the past year. How did you approach it?",
    listenFor: "Structured problem decomposition, analytical thinking, creative alternatives, collaboration, measurable outcome",
    followUp: "What alternatives did you consider before settling on your approach?",
    category: "problem-solving",
    tags: ["problem", "solve", "analytical", "complex", "challenge", "debug", "investigate"],
  },
  {
    question: "Tell me about a time you had to solve a problem with limited information. How did you move forward?",
    listenFor: "Comfort with ambiguity, hypothesis-driven approach, gathering information efficiently, knowing when you have enough to act, iterating as you learn",
    followUp: "How do you determine when you have 'enough' information to make a decision?",
    category: "problem-solving",
    tags: ["problem", "ambiguity", "decision", "analytical", "risk", "judgment"],
  },
  {
    question: "Describe a time when your initial approach to a problem didn't work. What did you do next?",
    listenFor: "Persistence, intellectual humility, learning from failure, pivoting effectively, not being emotionally attached to first idea",
    followUp: "How do you decide when to pivot vs. when to push through on your original approach?",
    category: "problem-solving",
    tags: ["problem", "iterate", "pivot", "failure", "learn", "resilience", "adapt"],
  },

  // ===== ADAPTABILITY & GROWTH =====
  {
    question: "Tell me about a time your role, team, or project direction changed significantly. How did you adapt?",
    listenFor: "Flexibility, positive attitude toward change, growth mindset, proactive adjustment rather than waiting to be told, helping others adapt",
    followUp: "What was the hardest part of the transition?",
    category: "adaptability",
    tags: ["adapt", "change", "grow", "flexible", "transition", "pivot", "resilience"],
  },
  {
    question: "Describe a piece of critical feedback that was hard to hear. What did you do with it?",
    listenFor: "Self-awareness, emotional maturity, concrete actions taken, growth over time, not becoming defensive",
    followUp: "How has that feedback changed the way you work today?",
    category: "adaptability",
    tags: ["feedback", "grow", "self-aware", "learn", "develop", "improve", "mature"],
  },
  {
    question: "How do you stay current in your field? What recent development has caught your attention and why?",
    listenFor: "Intellectual curiosity, practical learning habits, connecting industry trends to their own work, continuous development",
    followUp: "How do you decide which trends are worth investing your learning time in?",
    category: "adaptability",
    tags: ["learn", "trend", "industry", "current", "grow", "knowledge", "development"],
  },

  // ===== CULTURE & VALUES =====
  {
    question: "What kind of team environment brings out your best work? Can you give a specific example?",
    listenFor: "Self-awareness, team dynamics understanding, constructive preferences, not just 'I like nice people' — specific and practical",
    followUp: "How do you contribute to creating that kind of environment for others?",
    category: "culture",
    tags: ["culture", "values", "team", "environment", "workplace", "collaborate"],
  },
  {
    question: "Tell me about a time you noticed something wasn't right in your team's dynamics or culture. What did you do?",
    listenFor: "Proactiveness, emotional intelligence, constructive intervention, not just observing but acting, courage to address uncomfortable situations",
    followUp: "How did you know the issue was resolved?",
    category: "culture",
    tags: ["culture", "morale", "team", "dynamics", "conflict", "environment", "leader"],
  },
  {
    question: "How do you ensure diverse perspectives are heard and valued in your team's decision-making process?",
    listenFor: "Inclusive practices, active solicitation of quieter voices, awareness of unconscious bias, creating psychological safety for dissent",
    followUp: "Can you share an example where a diverse perspective led to a better outcome?",
    category: "culture",
    tags: ["culture", "diversity", "inclusive", "equity", "dei", "belong", "perspective"],
  },

  // ===== CONFLICT RESOLUTION =====
  {
    question: "Tell me about a significant professional disagreement you had. How did you resolve it while maintaining the relationship?",
    listenFor: "Active listening, seeking to understand, finding compromise, focusing on shared goals, not making it personal",
    followUp: "What was the relationship like afterward?",
    category: "conflict",
    tags: ["conflict", "disagree", "resolve", "colleague", "interpersonal", "relationship"],
  },
  {
    question: "Describe a time you had to push back on a request from someone more senior. How did you approach it?",
    listenFor: "Courage balanced with respect, data-backed reasoning, offering alternatives, picking battles wisely",
    followUp: "How did you decide it was worth pushing back?",
    category: "conflict",
    tags: ["conflict", "pushback", "senior", "disagree", "courage", "influence", "navigate"],
  },

  // ===== CREATIVITY & INNOVATION =====
  {
    question: "Tell me about an innovative solution you developed that others hadn't considered. What inspired it?",
    listenFor: "Original thinking, connecting disparate ideas, willingness to challenge norms, practical implementation not just ideation",
    followUp: "How did you get buy-in for an unconventional approach?",
    category: "creativity",
    tags: ["creative", "innovate", "idea", "solution", "think differently", "improve"],
  },
  {
    question: "Describe a time you challenged an established process or way of working. What was the outcome?",
    listenFor: "Questioning assumptions, evidence-based arguments, constructive disruption not just complaints, measuring impact of the change",
    followUp: "How did you handle resistance from people who were comfortable with the existing process?",
    category: "creativity",
    tags: ["creative", "innovate", "challenge", "process", "change", "improve", "optimize"],
  },

  // ===== ACCOUNTABILITY & OWNERSHIP =====
  {
    question: "Tell me about a time you made a mistake at work with real consequences. How did you handle it?",
    listenFor: "Ownership rather than blame-shifting, transparency with affected parties, corrective action, learning and preventive measures",
    followUp: "How did you rebuild trust afterward?",
    category: "accountability",
    tags: ["accountability", "ownership", "mistake", "integrity", "trust", "learn"],
  },
  {
    question: "Describe a time you took ownership of something outside your formal responsibilities because you saw it needed to be done.",
    listenFor: "Initiative, seeing the bigger picture, not waiting to be asked, follow-through, balancing with existing responsibilities",
    followUp: "How did you balance this with your existing workload?",
    category: "accountability",
    tags: ["accountability", "ownership", "initiative", "proactive", "self-starter"],
  },
  {
    question: "How do you ensure follow-through on commitments when juggling multiple priorities?",
    listenFor: "Organization systems, reliability, proactive communication when at risk, renegotiating early rather than missing deadlines silently",
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
