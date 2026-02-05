import { useNavigate } from 'react-router-dom';
import { LogIn, ArrowLeft } from 'lucide-react';

export function UnauthorizedPage() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-code error-code-401">401</div>
        <h1 className="error-title">Unauthorized Access</h1>
        <p className="error-description">
          You need to be logged in to access this page. Please sign in with your credentials.
        </p>
        <div className="error-actions">
          <button className="error-btn error-btn-primary" onClick={() => navigate('/login')}>
            <LogIn size={18} />
            <span>Sign In</span>
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
