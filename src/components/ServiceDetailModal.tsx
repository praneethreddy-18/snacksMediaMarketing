import React from 'react';
import { X, CheckCircle, ArrowRight, Bot, PenTool, Video, TrendingUp, Sparkles } from 'lucide-react';
import type { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectService
}) => {
  if (!service) return null;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Bot': return <Bot className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-all duration-500" />;
      case 'PenTool': return <PenTool className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-all duration-500" />;
      case 'Video': return <Video className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-all duration-500" />;
      case 'TrendingUp': return <TrendingUp className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-all duration-500" />;
      default: return <Sparkles className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-all duration-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#040711]/80 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_0_80px_rgba(0,71,255,0.15)] overflow-hidden border border-white/10 my-8">
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 p-8 sm:p-10 text-white relative border-b border-blue-900/50 overflow-hidden group">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/30 transition-colors duration-700" />
          
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-900/50 border border-slate-700 hover:bg-slate-800 hover:border-cyan-500 hover:text-cyan-400 text-slate-300 transition-all duration-300 z-10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-sans font-extrabold uppercase tracking-widest mb-6 relative z-10 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            {service.badge}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-900/50 rounded-2xl flex items-center justify-center shrink-0 shadow-inner group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-500">
              {renderIcon(service.iconName)}
            </div>
            <div>
              <h2 className="font-sans text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-100 tracking-tight mb-2">
                {service.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-medium leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-10 max-h-[70vh] overflow-y-auto custom-scrollbar bg-[#040711] relative">
          
          <div className="absolute top-0 right-0 w-full h-96 bg-cyan-900/10 blur-3xl pointer-events-none" />

          {/* Sub-Features Breakdown Grid */}
          <div className="relative z-10">
            <h3 className="font-sans text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-100 mb-6 flex items-center gap-3 tracking-wide">
              Core Modules & Workflows
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {service.subFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900/50 hover:bg-slate-800/80 border border-cyan-900/30 hover:border-cyan-400/50 transition-all duration-300 group/feat shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                  <h4 className="font-bold text-cyan-50 text-base mb-2 flex items-center gap-3 font-sans group-hover/feat:text-cyan-300 transition-colors">
                    <span className="w-8 h-8 rounded-xl bg-cyan-950/50 border border-cyan-800 text-cyan-400 text-xs font-black flex items-center justify-center shrink-0 group-hover/feat:border-cyan-400 group-hover/feat:bg-cyan-900 group-hover/feat:shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all">
                      0{idx + 1}
                    </span>
                    {feat.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed pl-11 group-hover/feat:text-slate-300 transition-colors">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits & Deliverables Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-cyan-900/30 relative z-10">
            
            {/* Key Benefits */}
            <div className="bg-gradient-to-br from-blue-950/40 to-slate-900/40 p-6 sm:p-8 rounded-[2rem] border border-blue-900/50 relative overflow-hidden group/ben hover:border-blue-500/50 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl group-hover/ben:bg-blue-500/20 transition-colors duration-500" />
              <h4 className="font-bold text-cyan-400 text-sm font-sans uppercase tracking-widest mb-5 flex items-center gap-2 relative z-10">
                Key Business Benefits
              </h4>
              <ul className="space-y-4 relative z-10">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium group-hover/ben:text-white transition-colors">
                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5 group-hover/ben:text-cyan-400 group-hover/ben:shadow-[0_0_10px_rgba(6,182,212,0.5)] rounded-full transition-all" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sample Deliverables */}
            <div className="bg-gradient-to-br from-slate-900/40 to-purple-950/20 p-6 sm:p-8 rounded-[2rem] border border-purple-900/30 relative overflow-hidden group/del hover:border-purple-500/50 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl group-hover/del:bg-purple-500/20 transition-colors duration-500" />
              <h4 className="font-bold text-purple-400 text-sm font-sans uppercase tracking-widest mb-5 relative z-10">
                What You Get (Deliverables)
              </h4>
              <ul className="space-y-4 relative z-10">
                {service.sampleDeliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium group-hover/del:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-2 shadow-[0_0_8px_rgba(168,85,247,0.8)] group-hover/del:bg-purple-400 transition-colors" />
                    <span className="leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Banner CTA inside detail view */}
          <div className="p-8 rounded-[2rem] bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 text-white flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden group/cta shadow-[0_10px_40px_-10px_rgba(6,182,212,0.6)]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
            
            <div className="relative z-10 text-center sm:text-left">
              <h4 className="font-sans text-3xl font-black tracking-tight mb-1">Ready to scale?</h4>
              <p className="text-cyan-50 text-sm font-medium">Get started with our {service.title} setup today.</p>
            </div>
            
            <button
              onClick={() => {
                onClose();
                onSelectService(service);
              }}
              className="relative z-10 px-8 py-4 bg-white text-blue-900 font-black font-sans tracking-wide rounded-xl hover:bg-slate-900 hover:text-cyan-400 transition-colors duration-300 shrink-0 flex items-center gap-3 cursor-pointer shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] border border-transparent hover:border-cyan-400/50"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
