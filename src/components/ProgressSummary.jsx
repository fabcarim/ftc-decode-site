import React, { useMemo } from 'react';
import { lessons, levels } from '../data/lessons';
import { useProgress } from '../context/ProgressContext';

const ProgressSummary = () => {
  const { completedLessons, resetProgress } = useProgress();

  const stats = useMemo(() => {
    return levels.map((level) => {
      const levelLessons = lessons.filter((lesson) => lesson.level === level.id);
      const completed = levelLessons.filter((lesson) => completedLessons.includes(lesson.id)).length;
      return {
        ...level,
        total: levelLessons.length,
        completed,
        percent: levelLessons.length ? Math.round((completed / levelLessons.length) * 100) : 0,
      };
    });
  }, [completedLessons]);

  const totalLessons = lessons.length;
  const completedTotal = completedLessons.length;
  const overallPercent = totalLessons ? Math.round((completedTotal / totalLessons) * 100) : 0;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Your Progress</h2>
          <p className="mt-1 text-sm text-gray-600">
            Track each level and keep a steady pace. Progress is saved on this device only.
          </p>
        </div>
        <button
          type="button"
          onClick={resetProgress}
          className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50"
        >
          Reset progress
        </button>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between text-sm font-medium text-gray-700">
          <span>Overall completion</span>
          <span>{overallPercent}%</span>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-gray-100">
          <div
            className="h-3 rounded-full bg-googlebox-blue transition-all"
            style={{ width: `${overallPercent}%` }}
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {stats.map((level) => (
          <div key={level.id} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <div className="flex items-center justify-between text-sm font-semibold text-gray-700">
              <span>{level.title}</span>
              <span>
                {level.completed}/{level.total}
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-500">{level.description}</p>
            <div className="mt-3 h-2 w-full rounded-full bg-white">
              <div
                className="h-2 rounded-full bg-googlebox-blue"
                style={{ width: `${level.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSummary;
