import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage/MainPage';
import { ItemPage } from '../../pages/ItemPage/ItemPage';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import { Suspense } from 'react';

export const AppRouter = () => {
  return (
    <Routes>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Suspense fallback="Loading...">
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<ItemPage />} />
        </Suspense>
      </ErrorBoundary>
    </Routes>
  );
};
