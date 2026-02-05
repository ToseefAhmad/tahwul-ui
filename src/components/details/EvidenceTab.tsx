import { ArrowUpDown } from 'lucide-react';
import type { CriteriaDetail } from '../../types';

interface EvidenceTabProps {
  criteria: CriteriaDetail;
}

export function EvidenceTab({ criteria }: EvidenceTabProps) {
  const columns = [
    { id: 'documentNumber', label: 'Document Number' },
    { id: 'documentName', label: 'Document Name' },
    { id: 'documentLead', label: 'Document Lead' },
    { id: 'documentPreparer', label: 'Document Preparer' },
    { id: 'date', label: 'Date' },
    { id: 'dueDate', label: 'Due Date' },
    { id: 'status', label: 'Status' },
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'approved') {
      return <span className="status-badge status-badge-approved">Approved</span>;
    }
    return <span className="status-badge status-badge-pending">Pending Review</span>;
  };

  return (
    <div className="evidence-tab">
      <div className="evidence-table-container">
        <table className="evidence-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.id}>
                  <div className="th-content">
                    <span>{col.label}</span>
                    <ArrowUpDown size={14} className="sort-icon" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criteria.evidence.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.documentNumber}</td>
                <td className="doc-name-cell">{doc.documentName}</td>
                <td>{doc.documentLead}</td>
                <td>{doc.documentPreparer}</td>
                <td>{doc.date}</td>
                <td>{doc.dueDate}</td>
                <td>{getStatusBadge(doc.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
