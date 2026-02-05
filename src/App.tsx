import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import { Layout } from './components/layout';
import { protectedRoutes, publicRouteConfig } from './config/routes';
import { ROUTES } from './constants';

function PageLoader() {
  return (
    <div className="loading-screen">
      <div className="loading-spinner" />
      <p>Loading...</p>
    </div>
  );
}

function App() {
  const { login: LoginPage, notFound: NotFoundPage, unauthorized: UnauthorizedPage } = publicRouteConfig;

  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path={LoginPage.path} element={<LoginPage.element />} />
            <Route path={UnauthorizedPage.path} element={<UnauthorizedPage.element />} />
            <Route path={NotFoundPage.path} element={<NotFoundPage.element />} />

            {protectedRoutes.map((route) => {
              const RouteElement = route.element;
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    route.isProtected ? (
                      <ProtectedRoute>
                        <Layout>
                          <RouteElement />
                        </Layout>
                      </ProtectedRoute>
                    ) : (
                      <Layout>
                        <RouteElement />
                      </Layout>
                    )
                  }
                />
              );
            })}

            <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
