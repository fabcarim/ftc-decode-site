import React from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import CodingLayout from './components/Layout/CodingLayout';
import HomePage from './pages/HomePage';
import CodingIndex from './pages/CodingIndex';
import LessonPage from './pages/LessonPage';
import DecodeSeasonPage from './pages/DecodeSeasonPage';
import DebugChecklistPage from './pages/DebugChecklistPage';
import SearchResultsPage from './pages/SearchResultsPage';
import NotFoundPage from './pages/NotFoundPage';
import { ProgressProvider } from './context/ProgressContext';
import { SearchProvider } from './context/SearchContext';
import { RouterProvider, useRouter } from './context/RouterContext';

const AppRoutes = () => {
  const { path } = useRouter();

  if (path === '/') {
    return <HomePage />;
  }

  if (path.startsWith('/coding')) {
    if (path === '/coding' || path === '/coding/') {
      return (
        <CodingLayout>
          <CodingIndex />
        </CodingLayout>
      );
    }

    const lessonPath = path.replace('/coding/', '').replace(/\/$/, '').trim();
    return (
      <CodingLayout>
        <LessonPage slug={`coding/${lessonPath}`} />
      </CodingLayout>
    );
  }

  if (path === '/decode-season') {
    return <DecodeSeasonPage />;
  }

  if (path === '/debug-checklist') {
    return <DebugChecklistPage />;
  }

  if (path === '/search') {
    return <SearchResultsPage />;
  }

  return <NotFoundPage />;
};

function App() {
  return (
    <RouterProvider>
      <ProgressProvider>
        <SearchProvider>
          <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-900">
            <Navbar />
            <AppRoutes />
            <Footer />
          </div>
        </SearchProvider>
      </ProgressProvider>
    </RouterProvider>
  );
}

export default App;
