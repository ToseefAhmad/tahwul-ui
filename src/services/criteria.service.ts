/**
 * Criteria Service - Handles all criteria-related data operations
 */

import type { CriteriaDetail, Comment, EvidenceDocument } from '../types';
import { criteriaDetails, getCriteriaDetail } from '../data/mockData';

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Criteria service for fetching criteria data
 */
export const criteriaService = {
  /**
   * Get all criteria
   */
  async getAllCriteria(): Promise<CriteriaDetail[]> {
    await delay(100);
    return criteriaDetails;
  },

  /**
   * Get criteria by ID
   */
  async getCriteriaById(id: string): Promise<CriteriaDetail | null> {
    await delay(100);
    const criteria = getCriteriaDetail(id);
    return criteria || null;
  },

  /**
   * Get evidence documents for a criteria
   */
  async getEvidenceDocuments(criteriaId: string): Promise<EvidenceDocument[]> {
    await delay(100);
    const criteria = getCriteriaDetail(criteriaId);
    return criteria?.evidence || [];
  },

  /**
   * Get comments for a criteria
   */
  async getComments(criteriaId: string): Promise<Comment[]> {
    await delay(100);
    const criteria = getCriteriaDetail(criteriaId);
    return criteria?.comments || [];
  },

  /**
   * Add a comment to criteria (mock implementation)
   */
  async addComment(criteriaId: string, content: string, author: string): Promise<Comment> {
    await delay(200);

    const newComment: Comment = {
      id: `c${Date.now()}`,
      author,
      date: new Date().toISOString().split('T')[0],
      content,
    };

    // In a real implementation, this would make an API call
    console.log(`Adding comment to criteria ${criteriaId}:`, newComment);

    return newComment;
  },

  /**
   * Update evidence document status (mock implementation)
   */
  async updateEvidenceStatus(
    criteriaId: string,
    evidenceId: string,
    status: EvidenceDocument['status']
  ): Promise<EvidenceDocument | null> {
    await delay(200);

    const criteria = getCriteriaDetail(criteriaId);
    const evidence = criteria?.evidence.find((e) => e.id === evidenceId);

    if (evidence) {
      // In a real implementation, this would make an API call
      console.log(`Updating evidence ${evidenceId} status to ${status}`);
      return { ...evidence, status };
    }

    return null;
  },
};
