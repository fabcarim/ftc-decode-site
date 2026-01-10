import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const RouterContext = createContext(null);

const getHashLocation = () => {
  if (typeof window === 'undefined') {
    return { path: '/', query: new URLSearchParams() };
  }
  const hash = window.location.hash.replace(/^#/, '') || '/';
  const [path, queryString] = hash.split('?');
  return {
    path: path || '/',
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
  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(event) => {
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
};
