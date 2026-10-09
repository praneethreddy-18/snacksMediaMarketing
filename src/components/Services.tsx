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
        className="bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/5 hover:border-blue-500/40 shadow-2xl hover:shadow-[0_0_50px_rgba(0,71,255,0.15)] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden h-full hover:-translate-y-2"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(0, 71, 255, 0.15),
                transparent 80%
              )
            `,
          }}
        />
        {/* Dynamic Glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/20 via-cyan-400/10 to-transparent rounded-bl-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full pointer-events-none group-hover:bg-blue-500/30 transition-colors duration-700" />

        <div className="relative z-10">
          {/* Header Badge & Icon */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-900 group-hover:border-blue-400 group-hover:shadow-[0_0_25px_rgba(0,71,255,0.5)] transition-all duration-500 relative z-20">
              {getCategoryIcon(service.iconName)}
            </div>
            <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-cyan-400 border border-blue-500/20 text-xs font-grotesk font-extrabold uppercase tracking-wide shadow-sm group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all duration-500">
              {service.badge}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="font-display text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 mb-4 group-hover:from-cyan-300 group-hover:to-blue-500 transition-all duration-500 uppercase tracking-tight">
            {service.title}
          </h3>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 font-medium group-hover:text-slate-300 transition-colors duration-300">
            {service.description}
          </p>

          {/* Sub-Features Bullet List */}
          <div className="space-y-3 mb-10">
            <div className="text-[10px] font-extrabold uppercase text-slate-500 tracking-widest mb-3 font-grotesk flex items-center gap-2">
              <span className="w-8 h-[1px] bg-slate-700"></span>
              <span>Included Features</span>
            </div>
            {service.subFeatures.slice(0, 4).map((feat: any, idx: number) => (
              <div key={idx} className="bg-slate-800/30 border border-white/5 py-3 px-4 rounded-xl text-xs font-bold shadow-sm group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all duration-500 text-slate-300 group-hover:text-white flex items-center gap-2 group/feat">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover/feat:bg-cyan-400 transition-colors" />
                {feat.title}
              </div>
            ))}
            {service.subFeatures.length > 4 && (
              <div className="text-xs font-bold text-cyan-500/70 pt-2 group-hover:text-cyan-400 transition-colors">
                + {service.subFeatures.length - 4} more modules included
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between relative z-10">
          <button
            onClick={() => onOpenDetail(service)}
            className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-300 group-hover:text-white cursor-pointer font-grotesk uppercase tracking-wider transition-colors"
          >
            <span className="relative">
              Explore Solution
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-500" />
            </span>
            <ChevronRight className="w-4 h-4 text-cyan-500 group-hover:translate-x-2 transition-transform duration-300" />
          </button>

          <button
            onClick={() => onOpenDetail(service)}
            className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 group-hover:bg-[#0047FF] group-hover:border-[#0047FF] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(0,71,255,0.4)] text-slate-400 flex items-center justify-center transition-all duration-500 cursor-pointer"
          >
            <ArrowRight className="w-5 h-5 group-hover:rotate-[-45deg] transition-transform duration-500" />
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
