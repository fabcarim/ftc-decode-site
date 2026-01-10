import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ProgressContext = createContext(null);
const STORAGE_KEY = 'ftc-decode-progress-v1';

const loadInitialProgress = () => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to load progress', error);
    return [];
  }
};

export const ProgressProvider = ({ children }) => {
  const [completedLessons, setCompletedLessons] = useState(loadInitialProgress);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(completedLessons));
  }, [completedLessons]);

  const toggleLesson = (lessonId) => {
    setCompletedLessons((prev) =>
      prev.includes(lessonId) ? prev.filter((id) => id !== lessonId) : [...prev, lessonId],
    );
  };

  const resetProgress = () => setCompletedLessons([]);

  const value = useMemo(
    () => ({ completedLessons, toggleLesson, resetProgress }),
    [completedLessons],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
