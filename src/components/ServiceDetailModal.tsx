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
      case 'Bot': return <Bot className="w-8 h-8 text-slate-300 group-hover:text-white group-hover:scale-110 transition-all duration-500" />;
      case 'PenTool': return <PenTool className="w-8 h-8 text-slate-300 group-hover:text-white group-hover:scale-110 transition-all duration-500" />;
      case 'Video': return <Video className="w-8 h-8 text-slate-300 group-hover:text-white group-hover:scale-110 transition-all duration-500" />;
      case 'TrendingUp': return <TrendingUp className="w-8 h-8 text-slate-300 group-hover:text-white group-hover:scale-110 transition-all duration-500" />;
      default: return <Sparkles className="w-8 h-8 text-slate-300 group-hover:text-white group-hover:scale-110 transition-all duration-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#040711]/80 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_0_80px_rgba(0,71,255,0.15)] overflow-hidden border border-white/10 my-8">
        
        {/* Top Header Banner */}
        <div className="bg-white/[0.01] p-8 sm:p-10 text-white relative border-b border-white/[0.05]">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/[0.05] border border-white/[0.05] hover:bg-white/[0.1] hover:text-white text-slate-400 transition-all duration-300 z-10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300 text-xs font-sans font-semibold uppercase tracking-widest mb-6 relative z-10">
            {service.badge}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 relative z-10">
            <div className="w-16 h-16 bg-white/[0.03] border border-white/[0.08] rounded-2xl flex items-center justify-center shrink-0 shadow-inner group-hover:bg-white/[0.05] transition-colors duration-500">
              {renderIcon(service.iconName)}
            </div>
            <div>
              <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-2">
                {service.title}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-10 max-h-[70vh] overflow-y-auto custom-scrollbar bg-[#040711]">
          
          {/* Sub-Features Breakdown Grid */}
          <div>
            <h3 className="font-sans text-xl font-medium text-white mb-6 flex items-center gap-3 tracking-wide">
              Core Modules & Workflows
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {service.subFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300 group/feat">
                  <h4 className="font-medium text-slate-200 text-base mb-2 flex items-center gap-3 font-sans">
                    <span className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/[0.05] text-slate-400 text-xs font-semibold flex items-center justify-center shrink-0 group-hover/feat:text-white transition-colors">
                      0{idx + 1}
                    </span>
                    {feat.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-light leading-relaxed pl-11">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits & Deliverables Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/[0.05]">
            
            {/* Key Benefits */}
            <div className="bg-white/[0.01] p-6 sm:p-8 rounded-[2rem] border border-white/[0.03] relative overflow-hidden group/ben">
              <h4 className="font-semibold text-white text-sm font-sans tracking-wide mb-5 flex items-center gap-2 relative z-10">
                Key Business Benefits
              </h4>
              <ul className="space-y-4 relative z-10">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400 font-light group-hover/ben:text-slate-200 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0 mt-2" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sample Deliverables */}
            <div className="bg-white/[0.01] p-6 sm:p-8 rounded-[2rem] border border-white/[0.03] relative overflow-hidden group/del">
              <h4 className="font-semibold text-white text-sm font-sans tracking-wide mb-5 relative z-10">
                What You Get (Deliverables)
              </h4>
              <ul className="space-y-4 relative z-10">
                {service.sampleDeliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400 font-light group-hover/del:text-slate-200 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0 mt-2" />
                    <span className="leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Banner CTA inside detail view */}
          <div className="p-8 rounded-[2rem] bg-white text-black flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden group/cta">
            <div className="relative z-10 text-center sm:text-left">
              <h4 className="font-sans text-2xl font-semibold tracking-tight mb-1">Ready to scale?</h4>
              <p className="text-slate-600 text-sm font-medium">Get started with our {service.title} setup today.</p>
            </div>
            
            <button
              onClick={() => {
                onClose();
                onSelectService(service);
              }}
              className="relative z-10 px-8 py-4 bg-black text-white font-semibold font-sans tracking-wide rounded-xl hover:bg-slate-800 transition-colors duration-300 shrink-0 flex items-center gap-3 cursor-pointer"
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
