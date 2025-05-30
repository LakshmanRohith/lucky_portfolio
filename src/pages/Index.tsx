
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Education />
      <Projects />
      <Certificates />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
