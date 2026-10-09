import React, { useState, type MouseEvent } from 'react';
import { SERVICES_DATA } from '../data';
import type { ServiceItem } from '../types';
import { Bot, PenTool, Video, TrendingUp, ArrowRight, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from 'framer-motion';
import { AnimatedSection, MotionGrid, MotionCard } from './AnimatedSection';

const ServiceCard = ({ service, onOpenDetail, getCategoryIcon }: any) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <MotionCard>
      <div 
        onMouseMove={handleMouseMove}
        className="bg-white/[0.02] backdrop-blur-2xl rounded-3xl p-8 border border-white/[0.05] hover:border-white/[0.15] shadow-2xl transition-all duration-500 flex flex-col justify-between group relative overflow-hidden h-full hover:-translate-y-1"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.03),
                transparent 80%
              )
            `,
          }}
        />

        <div className="relative z-10">
          {/* Header Badge & Icon */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-white/[0.08] transition-all duration-500">
              {getCategoryIcon(service.iconName)}
            </div>
            <span className="px-3 py-1 rounded-full border border-white/10 text-slate-400 text-[10px] font-sans font-semibold uppercase tracking-widest group-hover:text-white transition-colors duration-500">
              {service.badge}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="font-sans text-2xl font-semibold text-white mb-3 tracking-tight">
            {service.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light group-hover:text-slate-300 transition-colors duration-300">
            {service.description}
          </p>

          {/* Sub-Features Bullet List */}
          <div className="space-y-2.5 mb-10">
            {service.subFeatures.slice(0, 4).map((feat: any, idx: number) => (
              <div key={idx} className="flex items-center gap-3 text-sm text-slate-400 font-light group-hover:text-slate-200 transition-colors duration-500">
                <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-slate-400 transition-colors" />
                {feat.title}
              </div>
            ))}
            {service.subFeatures.length > 4 && (
              <div className="text-xs text-slate-500 pt-2 font-light">
                + {service.subFeatures.length - 4} more modules
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between relative z-10">
          <button
            onClick={() => onOpenDetail(service)}
            className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors flex items-center gap-2"
          >
            Explore Solution
          </button>
          <button
            onClick={() => onOpenDetail(service)}
            className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] group-hover:bg-white group-hover:text-black text-slate-400 flex items-center justify-center transition-all duration-500 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </MotionCard>
  );
};

interface ServicesProps {
  onOpenDetail: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenDetail }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot className="w-6 h-6 text-cyan-400" />;
      case 'PenTool': return <PenTool className="w-6 h-6 text-cyan-400" />;
      case 'Video': return <Video className="w-6 h-6 text-cyan-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-cyan-400" />;
      default: return <Bot className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#040711] text-white relative border-t border-slate-900">
      
      {/* Blue Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#0047FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-600/50 text-white text-xs font-grotesk font-extrabold uppercase tracking-wider">
            WHAT WE DO
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            SOLUTIONS THAT <span className="text-cyan-400">STOP THE SCROLL</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            Creative messaging, video production, performance marketing, and automated lead management built for retention and high ROAS.
          </p>
        </AnimatedSection>

        {/* Filter Category Tabs */}
        <AnimatedSection direction="scale" delay={0.1} className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {[
            { id: 'all', label: 'All Solutions' },
            { id: 'automation', label: 'Business Automation' },
            { id: 'content', label: 'Content & Storytelling' },
            { id: 'video', label: 'Video Production' },
            { id: 'social', label: 'Social Media & Ads' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer font-grotesk ${
                activeCategory === cat.id
                  ? 'text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-blue-500/50 hover:text-white'
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-[#0047FF] rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </AnimatedSection>

        {/* Services Cards Grid with Motion */}
        <AnimatePresence mode="wait">
          <MotionGrid key={activeCategory} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} onOpenDetail={onOpenDetail} getCategoryIcon={getCategoryIcon} />
            ))}
          </MotionGrid>
        </AnimatePresence>

      </div>
    </section>
  );
};
