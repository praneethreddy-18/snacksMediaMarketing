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
        className="card-deck-dark rounded-3xl p-6 sm:p-8 border border-blue-900/40 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                450px circle at ${mouseX}px ${mouseY}px,
                rgba(0, 71, 255, 0.15),
                transparent 80%
              )
            `,
          }}
        />
        {/* Card Subtle Gradient Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-600/20 to-transparent rounded-bl-full pointer-events-none" />

        <div className="relative z-10">
          {/* Header Badge & Icon */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-blue-600/50 flex items-center justify-center group-hover:bg-[#0047FF] group-hover:text-white transition-all duration-300">
              {getCategoryIcon(service.iconName)}
            </div>
            <span className="px-3.5 py-1 rounded-full bg-[#EAF4FD] text-[#040711] text-xs font-grotesk font-extrabold uppercase shadow-sm">
              {service.badge}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="font-display text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors uppercase">
            {service.title}
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
            {service.description}
          </p>

          {/* Sub-Features Bullet List */}
          <div className="space-y-2 mb-8">
            <div className="text-xs font-extrabold uppercase text-white tracking-wider mb-2 font-grotesk flex items-center gap-1.5">
              <span>Solution Highlights</span>
              <span className="text-slate-500">⊗</span>
            </div>
            {service.subFeatures.slice(0, 4).map((feat: any, idx: number) => (
              <div key={idx} className="pill-badge-deck py-2 px-4 text-xs font-bold shadow-xs hover:bg-white transition-colors">
                • {feat.title}
              </div>
            ))}
            {service.subFeatures.length > 4 && (
              <div className="text-xs font-bold text-cyan-400 pt-1">
                + {service.subFeatures.length - 4} more solution modules included
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between relative z-10">
          <button
            onClick={() => onOpenDetail(service)}
            className="inline-flex items-center gap-2 text-sm font-extrabold text-white hover:text-cyan-400 group/btn cursor-pointer font-grotesk uppercase"
          >
            <span>Explore Solution</span>
            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-cyan-400" />
          </button>

          <button
            onClick={() => onOpenDetail(service)}
            className="w-10 h-10 rounded-full bg-slate-900 border border-blue-900 hover:bg-[#0047FF] hover:text-white text-slate-200 flex items-center justify-center transition-colors cursor-pointer"
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
