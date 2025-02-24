import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { ResponsiveContainer } from './ResponsiveContainer';

interface LayoutProps {
  children: ReactNode;
}

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <ResponsiveContainer>
      <div className="min-h-[50vh] flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-2xl font-bold text-dark mb-4">Ops! Algo deu errado</h2>
        <p className="text-gray-600 mb-6">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="btn btn-primary"
        >
          Tentar novamente
        </button>
      </div>
    </ResponsiveContainer>
  );
};

const LoadingFallback = () => {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-light">
      <Header />
      <main className="flex-grow w-full">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingFallback />}>
            {children}
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
