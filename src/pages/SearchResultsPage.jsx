import React, { useMemo } from 'react';
import { Link, useRouter } from '../context/RouterContext';
import { getHighlightedSnippet, getSearchResults, useSearch } from '../context/SearchContext';

const SearchResultsPage = () => {
  const { query: searchParams } = useRouter();
  const query = searchParams.get('q') || '';
  const { data } = useSearch();

  const results = useMemo(() => getSearchResults(data, query), [data, query]);

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Search Results</h1>
        <p className="mt-2 text-gray-600">
          {query ? `Showing results for "${query}".` : 'Type a search term to find lessons.'}
        </p>
      </header>

      <div className="mt-8 space-y-4">
        {results.length === 0 && query && (
          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-gray-600">
            No matches found. Try a different keyword.
          </div>
        )}

        {results.map((result) => (
          <Link
            key={result.slug}
            to={`/coding/${result.slug.replace('coding/', '')}`}
            className="block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-googlebox-blue"
          >
            <h2 className="text-lg font-semibold text-gray-900">{result.title}</h2>
            <p
              className="mt-2 text-sm text-gray-600"
              dangerouslySetInnerHTML={{
                __html: getHighlightedSnippet(result.content, query),
              }}
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default SearchResultsPage;
