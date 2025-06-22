import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import HowSSRWorks from './components/HowSSRWorks';
import Benefits from './components/Benefits';
import RealLifeExamples from './components/RealLifeExamples';
import Comparison from './components/Comparison';
import Implementation from './components/Implementation';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <Overview />
        <HowSSRWorks />
        <Benefits />
        <RealLifeExamples />
        <Comparison />
        <Implementation />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
