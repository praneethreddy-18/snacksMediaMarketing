import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data';
import type { PortfolioItem } from '../types';
import { ExternalLink, Tag, X, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection, MotionGrid, MotionCard } from './AnimatedSection';

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeTab === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(item => item.category === activeTab);

  return (
    <section id="portfolio" className="py-20 bg-[#040711] text-white relative border-t border-slate-900">
      
      {/* Spot Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#0047FF]/25 via-blue-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-600/50 text-white text-xs font-grotesk font-extrabold uppercase tracking-wider">
            FEATURED WORK
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            RECENT <span className="text-white">CAMPAIGNS &amp; REELS</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            Real work. Real results. Explore case studies and creative ad campaigns executed for growing brands.
          </p>
        </AnimatedSection>

        {/* Filter Category Tabs */}
        <AnimatedSection direction="scale" delay={0.1} className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'social', label: 'Social Media' },
            { id: 'video', label: 'Video Production' },
            { id: 'branding', label: 'Branding' },
            { id: 'automation', label: 'Automation' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer font-grotesk ${
                activeTab === tab.id
                  ? 'text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-blue-500/50 hover:text-white'
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activePortfolioTab"
                  className="absolute inset-0 bg-[#0047FF] rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </AnimatedSection>

        {/* Portfolio Showcase Grid */}
        <AnimatePresence mode="wait">
          <MotionGrid key={activeTab} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <MotionCard key={item.id}>
                <div
                  onClick={() => setSelectedItem(item)}
                  className="bg-slate-900/90 rounded-3xl overflow-hidden border border-slate-800 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between h-full"
                >
                  {/* Image Thumbnail with Overlay */}
                  <div className="relative h-56 overflow-hidden bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    
                    {/* Result Metric Floating Badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-black shadow-md flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{item.resultMetric}</span>
                    </div>

                    {/* Lightbox Trigger Overlay Icon */}
                    <div className="absolute inset-0 bg-blue-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform font-bold">
                        <ExternalLink className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                          {item.categoryLabel}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                          Client: {item.client}
                        </span>
                      </div>

                      <h3 className="text-lg font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-slate-300 text-xs sm:text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {item.tags.map((t, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-[11px] font-semibold">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </MotionCard>
            ))}
          </MotionGrid>
        </AnimatePresence>

      </div>

      {/* Lightbox Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            >
              
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-950/70 text-white flex items-center justify-center hover:bg-slate-800 cursor-pointer border border-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-64 sm:h-80 bg-slate-950 relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1.5 rounded-full font-black text-sm shadow-md">
                  Result: {selectedItem.resultMetric}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="text-xs font-extrabold text-cyan-400 uppercase tracking-widest">
                  {selectedItem.categoryLabel} • Client: {selectedItem.client}
                </div>

                <h3 className="text-2xl font-black text-white">
                  {selectedItem.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                  {selectedItem.description}
                </p>

                <div className="pt-4 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-slate-400" />
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-800 rounded-lg text-xs font-bold text-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
