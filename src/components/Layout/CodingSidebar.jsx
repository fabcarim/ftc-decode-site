import React from 'react';
import { Link, useRouter } from '../../context/RouterContext';
import { getLessonsByLevel, levels } from '../../data/lessons';
import { useProgress } from '../../context/ProgressContext';

const CodingSidebar = () => {
  const { completedLessons } = useProgress();
  const { path } = useRouter();

  return (
    <aside className="w-full border-b border-gray-200 bg-white px-4 py-6 md:w-72 md:border-b-0 md:border-r">
      <div className="space-y-6">
        {levels.map((level) => {
          const lessons = getLessonsByLevel(level.id);
          if (!lessons.length) return null;

          return (
            <div key={level.id}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                {level.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {lessons.map((lesson) => {
                  const isComplete = completedLessons.includes(lesson.id);
                  const href = `/coding/${lesson.slug.replace('coding/', '')}`;
                  const isActive = path === href;

                  return (
                    <li key={lesson.id}>
                      <Link
                        to={href}
                        className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
                          isActive
                            ? 'bg-googlebox-blue/10 text-googlebox-blue'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <span>{lesson.title}</span>
                        <span
                          className={`ml-3 inline-flex h-2.5 w-2.5 rounded-full ${
                            isComplete ? 'bg-green-500' : 'bg-gray-300'
                          }`}
                          aria-label={isComplete ? 'Completed' : 'Incomplete'}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default CodingSidebar;
