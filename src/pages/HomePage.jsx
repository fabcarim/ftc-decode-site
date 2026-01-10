import React from 'react';
import Hero from '../components/Sections/Hero';
import Building from '../components/Sections/Building';
import Coding from '../components/Sections/Coding';
import Strategy from '../components/Sections/Strategy';
import Resources from '../components/Sections/Resources';

const HomePage = () => {
  return (
    <main className="flex flex-col">
      <Hero />
      <Building />
      <Coding />
      <Strategy />
      <Resources />
    </main>
  );
};

export default HomePage;
