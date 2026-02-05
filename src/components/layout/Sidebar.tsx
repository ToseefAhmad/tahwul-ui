import { NavLink } from 'react-router-dom';
import logoImage from '../../assets/logo.svg';

import homeIcon from '../../assets/icon/home.svg';
import perspectivesIcon from '../../assets/icon/perspectives.svg';
import tasksIcon from '../../assets/icon/tasks.svg';
import documentsIcon from '../../assets/icon/documents.svg';
import reportsIcon from '../../assets/icon/reports.svg';
import usersIcon from '../../assets/icon/users.svg';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', path: '/', icon: homeIcon },
  { id: 'perspectives', label: 'Perspectives', path: '/perspectives', icon: perspectivesIcon },
  { id: 'tasks', label: 'Tasks', path: '/tasks', icon: tasksIcon },
  { id: 'documents', label: 'Documents', path: '/documents', icon: documentsIcon },
  { id: 'reports', label: 'Reports', path: '/reports', icon: reportsIcon },
  { id: 'users', label: 'Users & Roles', path: '/users', icon: usersIcon },
];

function CollapseIcon({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: isCollapsed ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}
    >
      <path 
        d="M10 12L6 8L10 4" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M6 12L2 8L6 4" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface SidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
}

export function Sidebar({ isCollapsed = false, onToggle }: SidebarProps) {
  return (
    <aside className={`sidebar ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img 
            src={logoImage} 
            alt="Tahwul - Enabling Digital Transformation" 
            className="sidebar-logo-img"
          />
        </div>
        
        {onToggle && (
          <button 
            className="sidebar-toggle-btn"
            onClick={onToggle}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <CollapseIcon isCollapsed={isCollapsed} />
          </button>
        )}
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `nav-item ${isActive ? 'nav-item-active' : ''}`
            }
          >
            <span className="nav-icon">
              <img src={item.icon} alt={item.label} className="nav-icon-img" />
            </span>
            {!isCollapsed && <span className="nav-label">{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
