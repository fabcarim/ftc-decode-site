import React, { createContext, useContext, useMemo } from 'react';
import { lessons } from '../data/lessons';

const SearchContext = createContext(null);

const stripMarkdown = (text) =>
  text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/\[[^\]]*\]\([^\)]*\)/g, ' ')
    .replace(/[#>*_\-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const buildSearchData = () =>
  lessons.map((lesson) => ({
    ...lesson,
    plainTitle: lesson.title.toLowerCase(),
    plainContent: stripMarkdown(lesson.content),
  }));

export const SearchProvider = ({ children }) => {
  const data = useMemo(() => buildSearchData(), []);
  const value = useMemo(() => ({ data }), [data]);

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const getSearchResults = (data, query) => {
  if (!query) return [];
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);

  return data
    .filter((lesson) =>
      terms.every(
        (term) =>
          lesson.plainTitle.includes(term) || lesson.plainContent.toLowerCase().includes(term),
      ),
    )
    .map((lesson) => ({
      ...lesson,
      content: lesson.plainContent,
    }));
};

export const getHighlightedSnippet = (text, query) => {
  if (!text || !query) return '';
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerText.indexOf(lowerQuery);
  if (index === -1) {
    return text.slice(0, 160) + (text.length > 160 ? '...' : '');
  }
  const start = Math.max(0, index - 60);
  const end = Math.min(text.length, index + 100);
  const snippet = text.slice(start, end);
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return snippet.replace(new RegExp(escaped, 'gi'), (match) => `<mark>${match}</mark>`);
};
