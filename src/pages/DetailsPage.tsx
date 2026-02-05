import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TabNavigation } from '../components/common';
import {
  DetailsHeader,
  DetailsBanner,
  EvidenceSummary,
  OverviewTab,
  EvidenceTab,
  CommentsSection,
  ActivitiesPanel,
} from '../components/details';
import { getCriteriaDetail } from '../data/mockData';

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'evidence', label: 'Evidence' },
];

export function DetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');

  const criteria = getCriteriaDetail(id || '');

  if (!criteria) {
    return <div className="details-page">Criteria not found</div>;
  }

  return (
    <div className="details-page">
      <DetailsHeader criteria={criteria} />
      
      <div className="details-info-card">
        <DetailsBanner criteria={criteria} />
        <EvidenceSummary criteria={criteria} />
      </div>
      
      <div className="details-tabs-section">
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {activeTab === 'overview' ? (
          <OverviewTab criteria={criteria} />
        ) : (
          <div className="evidence-tab-content">
            <EvidenceTab criteria={criteria} />
            <div className="details-bottom-section">
              <CommentsSection comments={criteria.comments} />
              <ActivitiesPanel activities={criteria.activities} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
