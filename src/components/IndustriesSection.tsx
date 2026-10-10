import React from 'react';
import { Utensils, Scissors, Dumbbell, Stethoscope, Building2, Palette } from 'lucide-react';
import { AnimatedSection, MotionGrid, MotionCard } from './AnimatedSection';

export const IndustriesSection: React.FC<{ onSelectIndustry: () => void }> = ({ onSelectIndustry }) => {
  const industries = [
    { id: 'restaurants', name: 'Restaurants & Cafés', icon: <Utensils className="w-8 h-8" /> },
    { id: 'salons', name: 'Salons & Spas', icon: <Scissors className="w-8 h-8" /> },
    { id: 'fitness', name: 'Fitness & Gyms', icon: <Dumbbell className="w-8 h-8" /> },
    { id: 'medical', name: 'Medical & Dental', icon: <Stethoscope className="w-8 h-8" /> },
    { id: 'realestate', name: 'Real Estate', icon: <Building2 className="w-8 h-8" /> },
    { id: 'interiordesign', name: 'Interior Design', icon: <Palette className="w-8 h-8" /> }
  ];

  return (
    <section id="industries" className="py-24 bg-[#040711] text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-sans font-extrabold uppercase tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            PROVEN RESULTS
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-slate-400 tracking-tight">
            Who We Help Grow
          </h2>
        </AnimatedSection>

        {/* Simplified Grid */}
        <MotionGrid className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <MotionCard key={ind.id}>
              <div
                onClick={onSelectIndustry}
                className="group p-8 rounded-3xl bg-slate-900/50 backdrop-blur-md border border-white/5 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center gap-4 h-full shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
              >
                <div className="w-20 h-20 rounded-2xl bg-slate-800 flex items-center justify-center border border-white/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 group-hover:text-cyan-400 text-slate-300 transition-all duration-300">
                  {ind.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {ind.name}
                </h3>
              </div>
            </MotionCard>
          ))}
        </MotionGrid>

      </div>
    </section>
  );
};
