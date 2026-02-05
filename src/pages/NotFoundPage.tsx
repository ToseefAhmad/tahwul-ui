import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-description">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="error-actions">
          <button className="error-btn error-btn-primary" onClick={() => navigate('/')}>
            <Home size={18} />
            <span>Go to Dashboard</span>
          </button>
          <button className="error-btn error-btn-secondary" onClick={() => navigate(-1)}>
            <ArrowLeft size={18} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
