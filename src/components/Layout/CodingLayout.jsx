import React from 'react';
import CodingSidebar from './CodingSidebar';

const CodingLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <CodingSidebar />
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-10">{children}</main>
    </div>
  );
};

export default CodingLayout;
