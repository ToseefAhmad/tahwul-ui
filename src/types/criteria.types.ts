/**
 * Criteria and perspective-related types
 */

import type { Activity } from './dashboard.types';

// Criteria status
export type CriteriaStatus =
  | 'not-started'
  | 'in-progress'
  | 'completed'
  | 'partially-uploaded'
  | 'fully-uploaded'
  | 'delayed';

// Single criteria item
export interface CriteriaItem {
  number: number;
  status: CriteriaStatus;
}

// Sub-category containing criteria
export interface SubCategory {
  id: string;
  name: string;
  criteria: CriteriaItem[];
}

// Perspective category
export interface PerspectiveCategory {
  id: string;
  name: string;
  progress: number;
  status: CriteriaStatus;
  subCategories: SubCategory[];
}

// Evidence document status
export type EvidenceStatus = 'approved' | 'pending-review' | 'in-progress' | 'rejected';

// Evidence document
export interface EvidenceDocument {
  id: string;
  documentNumber: string;
  documentName: string;
  documentLead: string;
  documentPreparer: string;
  date: string;
  dueDate: string;
  status: EvidenceStatus;
}

// Comment on criteria
export interface Comment {
  id: string;
  author: string;
  avatar?: string;
  date: string;
  content: string;
}

// Full criteria detail
export interface CriteriaDetail {
  id: string;
  number: string;
  title: string;
  category: string;
  categoryLabel: string;
  description: string;
  progress: number;
  objective: string;
  implementationRequirements: string[];
  evidenceDocuments: string;
  relatedRegulations: string;
  scope: string;
  totalEvidence: number;
  underReviewEvidence: number;
  inProgressEvidence: number;
  completedEvidence: number;
  evidence: EvidenceDocument[];
  comments: Comment[];
  activities: Activity[];
}

// Evidence summary counts
export interface EvidenceSummary {
  total: number;
  inProgress: number;
  underReview: number;
  completed: number;
}
