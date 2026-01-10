import React from 'react';
import { Link } from '../context/RouterContext';

const NotFoundPage = () => (
  <main className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-center justify-center px-4 py-16 text-center">
    <h1 className="text-3xl font-bold text-gray-900">Page not found</h1>
    <p className="mt-3 text-gray-600">Choose a lesson from the coding path to continue.</p>
    <Link
      to="/coding"
      className="mt-6 inline-flex items-center justify-center rounded-lg bg-googlebox-blue px-4 py-2 text-sm font-semibold text-white"
    >
      Go to Coding Path
    </Link>
  </main>
);

export default NotFoundPage;
