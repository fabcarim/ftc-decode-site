import { parseFrontmatter } from '../utils/frontmatter';

const files = import.meta.glob('/content/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const normalizeArray = (value) => {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
};

export const lessons = Object.entries(files)
  .map(([path, rawContent]) => {
    const { data, content } = parseFrontmatter(rawContent);
    const slug = path
      .replace('/content/', '')
      .replace(/\.mdx?$/, '');

    return {
      id: slug,
      slug,
      title: data.title || 'Untitled Lesson',
      order: Number(data.order ?? 0),
      level: Number(data.level ?? 0),
      tags: normalizeArray(data.tags),
      content,
      sourcePath: path,
    };
  })
  .sort((a, b) => {
    if (a.level !== b.level) return a.level - b.level;
    if (a.order !== b.order) return a.order - b.order;
    return a.title.localeCompare(b.title);
  });

export const levels = [
  {
    id: 0,
    title: 'Level 0 – Basics',
    description: 'Understand OpModes, TeleOp vs Autonomous, and telemetry basics.',
  },
  {
    id: 1,
    title: 'Level 1 – Hardware',
    description: 'Name devices, set motor direction, and centralize configuration.',
  },
  {
    id: 2,
    title: 'Level 2 – Drive',
    description: 'Build drive code, map gamepad inputs, and add safe stops.',
  },
  {
    id: 3,
    title: 'Level 3 – Subsystems & State',
    description: 'Use subsystems, enums, and toggles with debounce.',
  },
  {
    id: 4,
    title: 'Level 4 – Autonomous',
    description: 'Create step-based sequences with timing and timeouts.',
  },
  {
    id: 5,
    title: 'Level 5 – Debug & Quality',
    description: 'Add logging, tunable parameters, and safety checks.',
  },
];

export const getLessonBySlug = (slug) => lessons.find((lesson) => lesson.slug === slug);

export const getLessonsByLevel = (level) =>
  lessons.filter((lesson) => lesson.level === level).sort((a, b) => a.order - b.order);
