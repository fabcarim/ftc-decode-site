import React from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { getLessonBySlug } from '../data/lessons';
import { useProgress } from '../context/ProgressContext';

const LessonPage = ({ slug }) => {
  const lessonData = getLessonBySlug(slug);
  const { completedLessons, toggleLesson } = useProgress();

  if (!lessonData) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <h1 className="text-2xl font-bold text-gray-900">Lesson not found</h1>
        <p className="mt-2 text-gray-600">Check the sidebar to pick another lesson.</p>
      </div>
    );
  }

  const isComplete = completedLessons.includes(lessonData.id);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-googlebox-blue">Level {lessonData.level}</p>
          <h1 className="text-2xl font-bold text-gray-900">{lessonData.title}</h1>
        </div>
        <label className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-googlebox-blue focus:ring-googlebox-blue"
            checked={isComplete}
            onChange={() => toggleLesson(lessonData.id)}
          />
          Mark lesson complete
        </label>
      </header>

      <div className="mt-6">
        <MarkdownRenderer content={lessonData.content} />
      </div>
    </div>
  );
};

export default LessonPage;
