import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <HowItWorks />
              <Testimonials />
              <Pricing />
              <FAQ />
            </>
          } />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;