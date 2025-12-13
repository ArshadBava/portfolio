import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import CertificatesCTA from './components/CertificatesCTA';
import CertificatesPage from './components/CertificatesPage';
import HireMe from './components/HireMe';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Home Component aggregates all sections for the main page
const Home = () => {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>

      <CertificatesCTA />

      {/* New Hire Me Section */}
      <HireMe />

      <div id="contact">
        <Contact />
      </div>
      <FAQ />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black text-white min-h-screen font-sans selection:bg-brand-yellow selection:text-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certificates" element={<CertificatesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
