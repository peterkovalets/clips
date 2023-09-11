import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './features/authentication/AuthProvider';
import SpinnerFullPage from './ui/SpinnerFullPage';

const AppLayout = lazy(() => import('./ui/AppLayout'));
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <AuthProvider>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Home />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AuthProvider>
      </BrowserRouter>

      <Toaster
        position="top-right"
        gutter={12}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          className: 'max-w-lg bg-gray-700 px-6 py-4 text-gray-50',
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
