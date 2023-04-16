import React from 'react';
import './App.css';

// Components
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <main className='main'>
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
    </main>
  );
};

export default App;
