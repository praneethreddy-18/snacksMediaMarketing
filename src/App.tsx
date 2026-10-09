import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';

import { Services } from './components/Services';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { GrowthSystem } from './components/GrowthSystem';
import { RoiCalculator } from './components/RoiCalculator';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { ParticleCanvas } from './components/ParticleCanvas';
import { IndustriesSection } from './components/IndustriesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Portfolio } from './components/Portfolio';
import { FaqSection } from './components/FaqSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { CheckoutModal } from './components/CheckoutModal';
import type { ServiceItem, AuthMode } from './types';

export function App() {
  // Modal State Management
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [authMode, setAuthMode] = useState<AuthMode>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);

  // User Auth State
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const handleOpenAuth = (mode: AuthMode) => {
    setAuthMode(mode);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleSelectServiceFromModal = (_service: ServiceItem) => {
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#040711] text-slate-100 flex flex-col font-sans selection:bg-[#0047FF] selection:text-white relative overflow-x-hidden w-full">
      
      {/* Scroll Progress Bar & Custom Follow Cursor */}
      <ScrollProgress />
      <CustomCursor />
      
      {/* Global Background Motion Effect */}
      <ParticleCanvas />
      
      {/* Top Navbar */}
      <Navbar
        onOpenAuth={handleOpenAuth}
        onOpenCheckout={handleOpenCheckout}
        user={user}
        onLogout={handleLogout}
      />

      {/* Main Page Sections */}
      <main className="flex-grow overflow-x-hidden w-full">
        <Hero
          onGetStarted={handleOpenCheckout}
          onExploreServices={() => {
            const el = document.getElementById('services');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <MarqueeTicker />



        <Services
          onOpenDetail={(service) => setSelectedService(service)}
        />

        <GrowthSystem />

        <BeforeAfterSlider
          onConsult={handleOpenCheckout}
        />

        <RoiCalculator
          onGetStarted={handleOpenCheckout}
        />

        <IndustriesSection
          onSelectIndustry={handleOpenCheckout}
        />

        <WhyChooseUs />

        <AboutUs />

        <TestimonialsSection />

        <Portfolio />

        <FaqSection />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Dialogs */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectService={handleSelectServiceFromModal}
      />

      <AuthModal
        mode={authMode}
        onClose={() => setAuthMode(null)}
        onSuccess={(loggedUser) => setUser(loggedUser)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

    </div>
  );
}

export default App;
