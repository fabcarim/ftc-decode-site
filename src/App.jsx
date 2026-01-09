import React from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import Building from './components/Sections/Building';
import Coding from './components/Sections/Coding';
import Strategy from './components/Sections/Strategy';
import Resources from './components/Sections/Resources';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Building />
        <Coding />
        <Strategy />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}

export default App;
