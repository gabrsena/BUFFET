
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import GalleryIcons from './components/GalleryIcons';
import Differentials from './components/Differentials';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BalloonsLayer from './components/BalloonsLayer';
import EmojisLayer from './components/EmojisLayer';
import NeonBackgroundLayer from './components/NeonBackgroundLayer';
import PricingModal from './components/PricingModal';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] relative">
      <NeonBackgroundLayer />
      <EmojisLayer scrollY={scrollY} />
      <BalloonsLayer scrollY={scrollY} />
      <div className="relative z-10">
        <Hero scrollY={scrollY} />
        <About scrollY={scrollY} />
        <GalleryIcons scrollY={scrollY} />
        <Differentials scrollY={scrollY} />
        <Location scrollY={scrollY} />
        <Testimonials scrollY={scrollY} />
        <Footer onTitleDoubleClick={() => setIsPricingModalOpen(true)} />
      </div>
      <FloatingWhatsApp scrollY={scrollY} />
      
      <PricingModal 
        isOpen={isPricingModalOpen} 
        onClose={() => setIsPricingModalOpen(false)} 
      />
    </div>
  );
};

export default App;
