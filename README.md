# Tahwul UI - Digital Transformation Dashboard

A modern React-based dashboard for tracking digital transformation compliance and governance metrics. Built as a frontend technical assessment showcasing clean architecture, component reusability, and responsive design.

🔗 **Live Demo**  
https://tahwul-ui-demo-2maudp5wx-toseefahmads-projects-dd32468d.vercel.app/

![Dashboard Preview](./preview.png)

## Features

- **Dashboard Screen**: Project timeline, statistics cards, progress status grid by perspectives, and recent activities
- **Details Page**: Criteria details with overview and evidence tabs, comments section, and activity tracking
- **Authentication**: Protected routes with login functionality
- **Error Pages**: Custom 404 (Not Found) and 401 (Unauthorized) pages
- **Dynamic Routing**: Configuration-based route management
- **Responsive Design**: Desktop-first approach with full mobile support
- **Clean Architecture**: Well-organized component structure with separation of concerns

## Demo Credentials

To access the application, use the following demo credentials:

| Field    | Value           |
|----------|-----------------|
| Email    | `toseef@dev.com` |
| Password | `admin`          |

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **Lucide React** for icons
- **CSS3** with CSS Variables for theming

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tahwul-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/                  # Design system primitives
│   │   ├── Button/          # Button component with variants
│   │   ├── Input/           # Input component with validation
│   │   └── index.ts
│   ├── charts/              # Data visualization components
│   │   └── index.ts         # GaugeChart, BarChart, ProgressCircle
│   ├── feedback/            # Status & feedback components
│   │   └── index.ts         # CriteriaIndicator, StatusBadge, etc.
│   ├── common/              # Shared utility components
│   │   ├── Card.tsx
│   │   ├── ProtectedRoute.tsx
│   │   └── index.ts
│   ├── dashboard/           # Dashboard-specific components
│   │   ├── ProjectTimeline/
│   │   ├── StatsCards/
│   │   ├── ProgressStatus/
│   │   └── index.ts
│   ├── details/             # Details page components
│   │   └── index.ts
│   └── layout/              # Layout components
│       ├── Layout.tsx
│       ├── Header.tsx
│       ├── Sidebar.tsx
│       └── index.ts
│
├── config/                  # Application configuration
│   ├── routes.ts            # Route configuration with lazy loading
│   ├── env.ts               # Environment variables
│   ├── app.config.ts        # App-wide configuration
│   └── index.ts
│
├── constants/               # Application constants
│   ├── routes.ts            # Route path constants
│   ├── statusColors.ts      # Status color mappings
│   ├── breakpoints.ts       # Responsive breakpoints
│   └── index.ts
│
├── context/                 # React contexts
│   └── AuthContext.tsx      # Authentication context & provider
│
├── hooks/                   # Custom React hooks
│   ├── useLocalStorage.ts   # LocalStorage with sync
│   ├── useMediaQuery.ts     # Responsive design hooks
│   ├── useDebounce.ts       # Debounce utilities
│   ├── useClickOutside.ts   # Click outside detection
│   └── index.ts
│
├── services/                # API & data services
│   ├── api/
│   │   ├── client.ts        # HTTP client wrapper
│   │   └── endpoints.ts     # API endpoint constants
│   ├── auth.service.ts      # Authentication service
│   ├── dashboard.service.ts # Dashboard data service
│   ├── criteria.service.ts  # Criteria data service
│   └── index.ts
│
├── types/                   # TypeScript type definitions
│   ├── common.types.ts      # Shared/base types
│   ├── dashboard.types.ts   # Dashboard-related types
│   ├── criteria.types.ts    # Criteria & evidence types
│   ├── auth.types.ts        # Authentication types
│   └── index.ts             # Central re-exports
│
├── utils/                   # Utility functions
│   ├── cn.ts                # Class name utilities
│   ├── formatters.ts        # Date, number formatters
│   ├── validators.ts        # Form validation
│   └── index.ts
│
├── data/                    # Mock data (development)
│   └── mockData.ts
│
├── pages/                   # Page components
│   ├── Dashboard.tsx
│   ├── DetailsPage.tsx
│   ├── LoginPage.tsx
│   ├── NotFoundPage.tsx
│   ├── UnauthorizedPage.tsx
│   └── index.ts
│
├── styles/                  # Global styles
│   ├── variables.css        # CSS custom properties
│   ├── reset.css            # CSS reset & base styles
│   ├── layout.css           # Layout structure styles
│   └── index.css
│
├── App.tsx                  # Main app with routing & Suspense
├── main.tsx                 # Entry point
└── index.css                # Global styles imports
```

## How I Built This

### Architecture Decisions

1. **Component Composition**: Created small, focused components that can be composed together. Each component has a single responsibility.

2. **Type Safety**: Used TypeScript interfaces organized by domain (auth, dashboard, criteria) for better maintainability and type safety.

3. **CSS Organization**: 
   - **Global styles** in `src/styles/` folder (variables, reset, layout)
   - **Component-specific styles** co-located with their components
   - CSS custom properties for consistent theming
   - Avoided CSS-in-JS to keep bundle size small

4. **Service Layer**: Abstract data fetching through services (`auth.service.ts`, `dashboard.service.ts`, etc.) making it easy to switch from mock data to real API.

5. **Custom Hooks**: Reusable hooks for common patterns (`useLocalStorage`, `useMediaQuery`, `useDebounce`, `useClickOutside`).

6. **Constants & Configuration**: Centralized constants for routes, colors, breakpoints, and app configuration.

7. **Lazy Loading**: Routes are lazy-loaded using React's `lazy()` and `Suspense` for better initial load performance.

8. **Responsive Design**: Desktop-first approach with breakpoint constants and responsive hooks.

### Key Components

- **ProgressCircle**: SVG-based circular progress indicator with dynamic coloring
- **CriteriaIndicator**: Interactive status indicators for criteria items
- **TabNavigation**: Reusable tab component with active state management
- **StatusBadge**: Configurable status badges with different color schemes
- **ProtectedRoute**: Higher-order component for route protection

### Routing Architecture

Routes are configured in `src/config/routes.ts` with lazy loading for code splitting:

```typescript
// Lazy load pages
const Dashboard = lazy(() => import('../pages/Dashboard'));
const DetailsPage = lazy(() => import('../pages/DetailsPage'));

export const protectedRoutes: RouteConfig[] = [
  { path: ROUTES.DASHBOARD, element: Dashboard, isProtected: true },
  { path: ROUTES.CRITERIA_DETAILS, element: DetailsPage, isProtected: true },
];
```

Routes are dynamically mapped in `App.tsx` with `Suspense` for loading states and `ProtectedRoute` for authentication.

### Authentication Flow

1. **Login**: User enters credentials on `/login` page
2. **Validation**: Credentials are validated against demo credentials
3. **Session**: On success, user data is stored in localStorage
4. **Protection**: Protected routes check authentication status via `AuthContext`
5. **Redirect**: Unauthenticated users are redirected to login with return URL
6. **Logout**: User can sign out via header dropdown, clearing the session

## Assumptions Made

1. **Static Data**: All data is mocked since no backend was required. The data structure follows the design's implied schema.

2. **Navigation**: Other menu items (Perspectives, Tasks, Documents, Reports, Users & Roles) route to the dashboard as placeholders.

3. **Authentication**: Demo authentication is implemented using React Context with localStorage for session persistence. The credentials are hardcoded for demonstration purposes.

4. **Pagination**: Pagination is visual only and doesn't affect the displayed data.

5. **Charts**: Used a simple CSS-based chart implementation. Could be enhanced with Recharts or Chart.js for real data visualization.

6. **Session Persistence**: User session is stored in localStorage and persists across browser refreshes.

## What I Would Improve With More Time

1. **State Management**: Add Zustand or Redux for global state management (filters, user preferences)

2. **API Integration**: 
   - Add React Query or SWR for data fetching
   - Implement proper loading and error states
   - Add skeleton loaders for better UX
   - Connect to a real backend API

3. **Testing**: 
   - Unit tests with Vitest
   - Component tests with React Testing Library
   - E2E tests with Playwright or Cypress

4. **Accessibility**: 
   - Add ARIA labels and roles
   - Improve keyboard navigation
   - Test with screen readers

5. **Performance**:
   - Add React.memo for expensive components
   - Implement virtual scrolling for large lists
   - Add image optimization

6. **Features**:
   - Implement search and filtering
   - Add sorting functionality to data tables
   - Real-time updates with WebSockets
   - Export functionality (PDF, Excel)
   - Dark mode toggle
   - Password reset functionality
   - Remember me option for login

7. **Security**:
   - Implement JWT-based authentication
   - Add refresh token mechanism
   - CSRF protection
   - Rate limiting

8. **Documentation**:
   - Add Storybook for component documentation
   - API documentation
   - Contribution guidelines

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project was created as a technical assessment.
