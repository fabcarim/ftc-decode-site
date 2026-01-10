import React from 'react';
import { Link } from '../context/RouterContext';
import { getLessonsByLevel, levels } from '../data/lessons';
import ProgressSummary from '../components/ProgressSummary';

const CodingIndex = () => {
  return (
    <div className="space-y-8">
      <header className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">FTC Coding Path</h1>
        <p className="mt-2 text-gray-600">
          Follow the levels in order, complete each lesson, and build reusable robot code.
        </p>
      </header>

      <ProgressSummary />

      <div className="space-y-6">
        {levels.map((level) => {
          const lessons = getLessonsByLevel(level.id);
          if (!lessons.length) return null;

          return (
            <section key={level.id} className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{level.title}</h2>
                  <p className="mt-1 text-sm text-gray-600">{level.description}</p>
                </div>
                {lessons[0] && (
                  <Link
                    to={`/coding/${lessons[0].slug.replace('coding/', '')}`}
                    className="inline-flex items-center justify-center rounded-lg bg-googlebox-blue px-4 py-2 text-sm font-semibold text-white hover:bg-googlebox-blue/90"
                  >
                    Start level
                  </Link>
                )}
              </div>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <Link
                      to={`/coding/${lesson.slug.replace('coding/', '')}`}
                      className="block rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 hover:border-googlebox-blue hover:text-googlebox-blue"
                    >
                      {lesson.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default CodingIndex;
