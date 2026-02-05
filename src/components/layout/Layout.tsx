import { useState, type ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className={`layout ${sidebarCollapsed ? 'sidebar-is-collapsed' : ''}`}>
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      <div className="main-wrapper">
        <Header onToggleSidebar={toggleSidebar} />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}
