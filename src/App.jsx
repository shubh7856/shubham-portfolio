import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import BackgroundParticles from './components/BackgroundParticles';
// import WelcomeMessage from './components/WelcomeMessage';

const App = () => {
  return (
    <div>
      {/* <WelcomeMessage /> */}
      <BackgroundParticles />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;