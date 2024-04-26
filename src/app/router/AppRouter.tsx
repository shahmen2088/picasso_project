import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage/MainPage';
import { ItemPage } from '../../pages/ItemPage/ItemPage';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import { Suspense } from 'react';

export const AppRouter = () => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<ItemPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
