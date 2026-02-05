import type {
  TimelineMilestone,
  PerspectiveCategory,
  CriteriaDetail,
  Activity,
  Leader,
  PerformanceDataPoint,
  AuditReadinessData,
  ComplianceScoreData,
  DashboardStats,
} from '../types';

export const timelineMilestones: TimelineMilestone[] = [
  { id: '1', date: 'Mar 17', title: 'Kickoff Workshop', status: 'completed' },
  { id: '2', date: 'March 18', title: 'Data Collection', status: 'completed' },
  { id: '3', date: 'May 8', title: 'Initial Phase', status: 'in-progress' },
  { id: '4', date: 'May 9–July 12', title: 'Verification', status: 'upcoming' },
  { id: '5', date: 'July 13', title: 'Completion Reviews', status: 'upcoming' },
  { id: '6', date: 'August 21', title: 'Cycle Conclusion', status: 'upcoming' },
];

export const dashboardStats: DashboardStats = {
  overallProgress: 78.65,
  totalCriteria: 95,
  completedCriteria: 52,
  evidenceDocuments: 386,
  evidenceCompleted: 302,
  uploadedToDGA: 258,
};

export const perspectiveCategories: PerspectiveCategory[] = [
  {
    id: '1',
    name: 'Strategy And Planning',
    progress: 97.78,
    status: 'completed',
    subCategories: [
      {
        id: '1-1',
        name: 'Digital Transformation',
        criteria: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'completed' },
        ],
      },
      {
        id: '1-2',
        name: 'Digital Governance',
        criteria: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'completed' },
        ],
      },
      {
        id: '1-3',
        name: 'Enterprise Architecture',
        criteria: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'completed' },
          { number: 4, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Organization And Culture',
    progress: 70.83,
    status: 'in-progress',
    subCategories: [
      {
        id: '2-1',
        name: 'Digital Culture And Environment',
        criteria: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'completed' },
        ],
      },
      {
        id: '2-2',
        name: 'Leadership Development',
        criteria: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'in-progress' },
          { number: 4, status: 'completed' },
        ],
      },
      {
        id: '2-3',
        name: 'Skills & Capacity Building',
        criteria: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Operations And Execution',
    progress: 80.00,
    status: 'in-progress',
    subCategories: [
      {
        id: '3-1',
        name: 'Business Processes',
        criteria: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'delayed' },
          { number: 3, status: 'in-progress' },
          { number: 4, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: '4',
    name: 'Business Continuity',
    progress: 90.59,
    status: 'completed',
    subCategories: [
      {
        id: '4-1',
        name: 'Risk Management',
        criteria: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'completed' },
          { number: 4, status: 'completed' },
          { number: 5, status: 'completed' },
        ],
      },
      {
        id: '4-2',
        name: 'Business Continuity',
        criteria: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'completed' },
          { number: 4, status: 'completed' },
          { number: 5, status: 'completed' },
          { number: 6, status: 'completed' },
          { number: 7, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: '5',
    name: 'Information Technology',
    progress: 75.00,
    status: 'in-progress',
    subCategories: [
      {
        id: '5-1',
        name: 'Support Systems',
        criteria: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'completed' },
          { number: 4, status: 'in-progress' },
          { number: 5, status: 'completed' },
        ],
      },
      {
        id: '5-2',
        name: 'IT Infrastructure',
        criteria: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'completed' },
          { number: 4, status: 'in-progress' },
          { number: 5, status: 'completed' },
          { number: 6, status: 'completed' },
          { number: 7, status: 'completed' },
        ],
      },
      {
        id: '5-3',
        name: 'Cloud Infrastructure',
        criteria: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: '6',
    name: 'Comprehensive Governance',
    progress: 64.44,
    status: 'in-progress',
    subCategories: [
      {
        id: '6-1',
        name: 'Governance Platforms',
        criteria: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'completed' },
          { number: 3, status: 'in-progress' },
          { number: 4, status: 'completed' },
          { number: 5, status: 'completed' },
          { number: 6, status: 'completed' },
          { number: 7, status: 'in-progress' },
          { number: 8, status: 'completed' },
          { number: 9, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: '7',
    name: 'Channels And Services',
    progress: 100,
    status: 'fully-uploaded',
    subCategories: [
      {
        id: '7-1',
        name: 'Service Quality',
        criteria: [
          { number: 1, status: 'fully-uploaded' },
          { number: 2, status: 'fully-uploaded' },
          { number: 3, status: 'fully-uploaded' },
        ],
      },
      {
        id: '7-2',
        name: 'Digital Channels',
        criteria: [
          { number: 1, status: 'fully-uploaded' },
          { number: 2, status: 'fully-uploaded' },
          { number: 3, status: 'fully-uploaded' },
          { number: 4, status: 'fully-uploaded' },
        ],
      },
    ],
  },
  {
    id: '8',
    name: 'Beneficiary Centralization',
    progress: 60.00,
    status: 'partially-uploaded',
    subCategories: [
      {
        id: '8-1',
        name: 'User Engagement',
        criteria: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'completed' },
          { number: 4, status: 'partially-uploaded' },
        ],
      },
      {
        id: '8-2',
        name: 'User Relationship',
        criteria: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'completed' },
        ],
      },
      {
        id: '8-3',
        name: 'User Experience',
        criteria: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'completed' },
          { number: 4, status: 'partially-uploaded' },
          { number: 5, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: '9',
    name: 'Government Data',
    progress: 87.50,
    status: 'in-progress',
    subCategories: [
      {
        id: '9-1',
        name: 'Data Governance',
        criteria: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'completed' },
        ],
      },
      {
        id: '9-2',
        name: 'Data Usage & Availability',
        criteria: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'completed' },
        ],
      },
      {
        id: '9-3',
        name: 'Open Data',
        criteria: [
          { number: 1, status: 'completed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: '10',
    name: 'Research And Innovation',
    progress: 17.65,
    status: 'delayed',
    subCategories: [
      {
        id: '10-1',
        name: 'Innovation',
        criteria: [
          { number: 1, status: 'delayed' },
          { number: 2, status: 'in-progress' },
          { number: 3, status: 'delayed' },
          { number: 4, status: 'delayed' },
        ],
      },
      {
        id: '10-2',
        name: 'Creative Solutions',
        criteria: [],
      },
    ],
  },
];

// ===== Top Performing Leaders =====
export const topPerformingLeaders: Leader[] = [
  {
    id: '1',
    name: 'Ahmed Al-Ali',
    perspective: 'Strategy Perspective',
    score: 96,
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: '2',
    name: 'Sarah Al-Khaled',
    perspective: 'Beneficiary Perspective',
    score: 94,
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '3',
    name: 'Mohammad Al-Mansour',
    perspective: 'IT Perspective',
    score: 92,
    avatarUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
];

// ===== Recent Activities =====
export const recentActivities: Activity[] = [
  {
    id: '1',
    description: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled',
    author: 'Ahmed Khaled',
    timestamp: '5 Mins Ago',
    type: 'upload',
  },
  {
    id: '2',
    description: 'Task "Review Compliance Files" Was Assigned To Mona Hamed',
    author: 'System',
    timestamp: '20 Mins Ago',
    type: 'status-change',
  },
  {
    id: '3',
    description: 'New Criterion "5.3 Digital Identity" Was Created By Admin',
    author: 'Admin',
    timestamp: '1 Hour Ago',
    type: 'review',
  },
];

// ===== Monthly Performance Data =====
export const monthlyPerformance: PerformanceDataPoint[] = [
  { label: 'Jan', value: 85 },
  { label: 'Feb', value: 72 },
  { label: 'Mar', value: 78 },
  { label: 'Apr', value: 42 },
  { label: 'May', value: 88 },
  { label: 'Jun', value: 75 },
  { label: 'Jul', value: 55 },
  { label: 'Aug', value: 90 },
  { label: 'Sept', value: 78 },
  { label: 'Oct', value: 55 },
  { label: 'Nov', value: 88 },
  { label: 'Dec', value: 75 },
];

// ===== Audit Readiness Data =====
export const auditReadiness: AuditReadinessData = {
  readinessLevel: 80,
  overdueStds: 12,
  missingEvidence: 5,
};

// ===== Compliance Score =====
export const complianceScore: ComplianceScoreData = {
  score: 65,
  label: 'Basic Standards 2025',
};

// ===== Criteria Details =====
export const criteriaDetails: CriteriaDetail[] = [
  {
    id: '1-1-1',
    number: '5.4.1',
    title: 'Digital Transformation Strategic Planning',
    category: 'strategy-planning',
    categoryLabel: 'Strategy & Planning',
    description: 'Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals',
    progress: 100,
    objective: 'Develop A Digital Transformation Strategy Aligned With The Organization\'s Strategy And The Objectives Of Saudi Vision 2030.',
    implementationRequirements: [
      'A. The Organization\'s Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization\'s Overall Strategy.',
      'B. Strategic Initiatives, Programs, And Performance Indicators.',
      'C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy\'s Objectives.',
      'D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy\'s Objectives.',
    ],
    evidenceDocuments: 'Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.',
    relatedRegulations: 'Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).',
    scope: 'All Government Entities.',
    totalEvidence: 4,
    underReviewEvidence: 3,
    inProgressEvidence: 2,
    completedEvidence: 1,
    evidence: [
      {
        id: 'e1',
        documentNumber: '5.4.1.1',
        documentName: 'Digital_Transformation_Plan.Pdf',
        documentLead: 'Ahmed Khaled',
        documentPreparer: 'Ahmed Khaled',
        date: '2025-08-01',
        dueDate: '2025-08-01',
        status: 'approved',
      },
      {
        id: 'e2',
        documentNumber: '5.4.1.2',
        documentName: 'KPI_Framework.Xlsx',
        documentLead: 'Mona Hamed',
        documentPreparer: 'Mona Hamed',
        date: '2025-08-01',
        dueDate: '2025-08-01',
        status: 'pending-review',
      },
      {
        id: 'e3',
        documentNumber: '5.4.1.3',
        documentName: 'Roadmap_Version1.Docx',
        documentLead: 'Rami AlSharif',
        documentPreparer: 'Rami AlSharif',
        date: '2025-08-01',
        dueDate: '2025-08-01',
        status: 'pending-review',
      },
    ],
    comments: [
      {
        id: 'c1',
        author: 'Sara Ibrahim',
        date: '2025-08-05',
        content: 'Ensure The Plan Includes A Clear Governance Model.',
      },
      {
        id: 'c2',
        author: 'Mona Hamed',
        date: '2025-08-05',
        content: 'Ensure The Plan Includes A Clear Governance Model.',
      },
    ],
    activities: [
      {
        id: 'a1',
        description: 'Roadmap_Version1.Docx Uploaded By Rami AlSharif',
        author: 'Rami AlSharif',
        timestamp: '5 Mins Ago',
        type: 'upload',
      },
      {
        id: 'a2',
        description: 'KPI_Framework.Xlsx Uploaded By Mona Hamed',
        author: 'Mona Hamed',
        timestamp: '20 Mins Ago',
        type: 'upload',
      },
      {
        id: 'a3',
        description: 'Digital_Transformation_Plan.Pdf Approved By Advisory Team',
        author: 'Advisory Team',
        timestamp: '1 Hour Ago',
        type: 'review',
      },
    ],
  },
];

export const getCriteriaDetail = (id: string): CriteriaDetail | undefined => {
  return criteriaDetails.find((c) => c.id === id) || criteriaDetails[0];
};
