import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, ChevronDown, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface HeaderProps {
  onToggleSidebar?: () => void;
}

export function Header({ onToggleSidebar }: HeaderProps) {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-left">
      </div>
      
      <div className="header-center">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
          />
        </div>
      </div>
      
      <div className="header-right">
        <button className="header-icon-btn notification-btn" aria-label="Notifications">
          <Bell size={20} />
        </button>
        
        <div className="user-menu-container">
          <button 
            className="user-menu"
            onClick={() => setShowUserDropdown(!showUserDropdown)}
          >
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt={user?.name || 'User'}
              className="user-avatar-img"
            />
            <span className="user-name">{user?.name || 'User'}</span>
            <ChevronDown size={16} className={`user-chevron ${showUserDropdown ? 'rotate' : ''}`} />
          </button>
          
          {showUserDropdown && (
            <div className="user-dropdown">
              <div className="user-dropdown-header">
                <span className="user-dropdown-name">{user?.name}</span>
                <span className="user-dropdown-email">{user?.email}</span>
              </div>
              <div className="user-dropdown-divider" />
              <button className="user-dropdown-item" onClick={handleLogout}>
                <LogOut size={16} />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
