import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Portfolio from './components/sections/Portfolio';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;