import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const RouterContext = createContext(null);

const normalizePath = (rawPath) => {
  if (!rawPath) return '/';
  if (rawPath.startsWith('/')) return rawPath;
  return `/${rawPath}`;
};

const getHashLocation = () => {
  if (typeof window === 'undefined') {
    return { path: '/', query: new URLSearchParams() };
  }

  const baseUrl = import.meta.env.BASE_URL || '/';
  const hash = window.location.hash.replace(/^#/, '');

  if (hash) {
    const [path, queryString] = hash.split('?');
    return {
      path: normalizePath(path),
      query: new URLSearchParams(queryString || ''),
    };
  }

  const fullPath = `${window.location.pathname}${window.location.search}`;
  const cleanedPath =
    baseUrl !== '/' && fullPath.startsWith(baseUrl) ? fullPath.slice(baseUrl.length - 1) : fullPath;
  const [path, queryString] = cleanedPath.split('?');

  return {
    path: normalizePath(path),
    query: new URLSearchParams(queryString || ''),
  };
};

export const RouterProvider = ({ children }) => {
  const [location, setLocation] = useState(() => getHashLocation());

  useEffect(() => {
    const handleChange = () => setLocation(getHashLocation());
    window.addEventListener('hashchange', handleChange);
    return () => window.removeEventListener('hashchange', handleChange);
  }, []);

  const navigate = (to) => {
    if (typeof window !== 'undefined') {
      window.location.hash = to;
    }
  };

  const value = useMemo(
    () => ({ path: location.path, query: location.query, navigate }),
    [location],
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within RouterProvider');
  }
  return context;
};

export const Link = ({ to, className, onClick, children }) => {
  const { navigate } = useRouter();

  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        navigate(to);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
};
