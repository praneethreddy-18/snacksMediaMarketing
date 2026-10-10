import React, { useState } from 'react';
import { X, TrendingUp, Play, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection, MotionGrid } from './AnimatedSection';

import { PORTFOLIO_SAMPLES } from '../data/portfolio';

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(4);

  const filteredItems = activeTab === 'all'
    ? PORTFOLIO_SAMPLES
    : PORTFOLIO_SAMPLES.filter(item => item.type === activeTab);

  const visibleItems = filteredItems.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 5);
  };

  const handleViewLess = () => {
    setVisibleCount(5);
    // Smooth scroll back to top of portfolio section
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Reset visible count when switching tabs
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setVisibleCount(5);
  };

  return (
    <section id="portfolio" className="py-24 bg-[#040711] text-white relative border-t border-slate-900 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0047FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-600/50 text-white text-xs font-grotesk font-extrabold uppercase tracking-wider">
            FEATURED HIGHLIGHTS
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400 tracking-tight">
            Our Best Work
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            A curated selection of our highest-performing videos, promotional flyers, and social posts.
          </p>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection direction="scale" delay={0.1} className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {[
            { id: 'all', label: 'All Work' },
            { id: 'video', label: 'Videos & Reels' },
            { id: 'flyer', label: 'Flyers' },
            { id: 'post', label: 'Social Posts' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`relative px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:border-blue-500/50 hover:text-white'
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeBentoTab"
                  className="absolute inset-0 bg-blue-600 rounded-full z-0 shadow-[0_0_20px_rgba(0,71,255,0.4)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </AnimatedSection>

        {/* Bento Grid Layout */}
        <AnimatePresence mode="wait">
          <MotionGrid key={activeTab} className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
            {visibleItems.map((item) => {
              // Determine grid span based on size property for the bento effect
              let spanClass = "col-span-1 md:col-span-1";
              if (item.size === 'large') spanClass = "col-span-1 md:col-span-2 row-span-2";
              else if (item.size === 'wide') spanClass = "col-span-1 md:col-span-2 row-span-1";

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedItem(item)}
                  className={`group relative rounded-[2rem] overflow-hidden bg-slate-900 border border-white/10 cursor-pointer shadow-xl hover:shadow-[0_0_40px_rgba(0,71,255,0.3)] hover:border-blue-500/50 transition-all duration-500 ${spanClass}`}
                >
                  {/* Media Content */}
                  <div className="absolute inset-0 bg-slate-950">
                    {item.type === 'video' ? (
                      <>
                        {item.thumbnail ? (
                          <img src={item.thumbnail} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-0 transition-opacity duration-500" />
                        ) : null}
                        <video 
                          src={item.media} 
                          className={`absolute inset-0 w-full h-full object-cover ${item.thumbnail ? 'opacity-0 group-hover:opacity-100' : 'opacity-85 group-hover:opacity-100'} transition-opacity duration-500`}
                          muted loop playsInline
                          preload="metadata"
                          onMouseEnter={(e) => e.currentTarget.play()}
                          onMouseLeave={(e) => e.currentTarget.pause()}
                        />
                      </>
                    ) : (
                      <img src={item.media} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                    )}
                  </div>

                  {/* Top Badges (Fade in/down on hover) */}
                  <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-20 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    <div className="bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border border-white/10 flex items-center gap-1.5 shadow-lg">
                      {item.type === 'video' ? <Play className="w-3 h-3 text-cyan-400" /> : <ImageIcon className="w-3 h-3 text-blue-400" />}
                      {item.type}
                    </div>
                    {item.resultMetric && (
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1 rounded-full text-[10px] font-black shadow-[0_0_15px_rgba(0,71,255,0.5)] flex items-center gap-1.5">
                        <TrendingUp className="w-3 h-3" />
                        {item.resultMetric}
                      </div>
                    )}
                  </div>

                  {/* Play Button Indicator for Videos (Center Pulse) */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="w-16 h-16 rounded-full bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/50 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.3)] animate-pulse">
                        <Play className="w-6 h-6 text-cyan-400 fill-cyan-400 ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Bottom Info Gradient Overlay (Only visible on hover) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-90 z-10 transition-opacity duration-500" />
                  
                  {/* Bottom Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                      <div className="text-cyan-400 text-xs font-bold uppercase tracking-widest">{item.client}</div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white">{item.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </MotionGrid>
        </AnimatePresence>

        {/* View More / View Less Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 flex justify-center gap-4"
        >
          {visibleCount < filteredItems.length && (
            <button
              onClick={handleViewMore}
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(0,71,255,0.3)] hover:shadow-[0_0_30px_rgba(0,71,255,0.5)]"
            >
              View More Work
            </button>
          )}

          {visibleCount > 5 && (
            <button
              onClick={handleViewLess}
              className="px-8 py-3 rounded-full bg-slate-900 border border-slate-700 text-white font-bold hover:bg-slate-800 hover:border-slate-500 transition-all shadow-lg"
            >
              View Less Work
            </button>
          )}
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 backdrop-blur-md border border-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Media Section (Left on Desktop) */}
              <div className="w-full md:w-1/2 bg-black relative flex items-center justify-center min-h-[300px] md:min-h-full">
                {selectedItem.type === 'video' ? (
                  <video src={selectedItem.media} controls autoPlay loop className="w-full h-full object-cover" />
                ) : (
                  <img src={selectedItem.media} alt={selectedItem.title} className="w-full h-full object-cover" />
                )}
              </div>

              {/* Info Section (Right on Desktop) */}
              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto">
                <div className="text-cyan-400 text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span>{selectedItem.client}</span> • <span>{selectedItem.categoryLabel}</span>
                </div>
                
                <h3 className="text-3xl font-black text-white mb-6 leading-tight">{selectedItem.title}</h3>
                
                {selectedItem.resultMetric && (
                  <div className="p-4 rounded-2xl bg-blue-900/20 border border-blue-500/20 mb-8 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30 text-white">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-300 font-bold uppercase tracking-wider mb-0.5">Primary Impact</div>
                      <div className="text-2xl font-black text-white">{selectedItem.resultMetric}</div>
                    </div>
                  </div>
                )}

                {selectedItem.description && (
                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">The Breakdown</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{selectedItem.description}</p>
                    </div>
                  </div>
                )}

                {selectedItem.tags && selectedItem.tags.length > 0 && (
                  <div className="pt-8 mt-8 border-t border-slate-800 flex flex-wrap gap-2">
                    {selectedItem.tags.map((t: string, i: number) => (
                      <span key={i} className="px-3 py-1.5 bg-slate-800 rounded-lg text-xs font-bold text-slate-300 border border-slate-700">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
