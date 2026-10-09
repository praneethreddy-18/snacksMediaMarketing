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
      case 'Bot': return <Bot className="w-7 h-7 text-blue-600" />;
      case 'PenTool': return <PenTool className="w-7 h-7 text-blue-600" />;
      case 'Video': return <Video className="w-7 h-7 text-blue-600" />;
      case 'TrendingUp': return <TrendingUp className="w-7 h-7 text-blue-600" />;
      default: return <Sparkles className="w-7 h-7 text-blue-600" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8">
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 p-8 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/30 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
            {service.badge}
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
              {renderIcon(service.iconName)}
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {service.title}
              </h2>
              <p className="text-blue-100 text-sm sm:text-base max-w-2xl mt-1">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          
          {/* Sub-Features Breakdown Grid */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              Core Modules & Workflows
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.subFeatures.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 transition-colors">
                  <h4 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 text-xs font-extrabold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    {feat.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-8">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits & Deliverables Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            
            {/* Key Benefits */}
            <div className="bg-blue-50/60 p-5 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-900 text-sm uppercase tracking-wider mb-3">
                Key Business Benefits
              </h4>
              <ul className="space-y-2.5">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sample Deliverables */}
            <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-white">
              <h4 className="font-bold text-blue-400 text-sm uppercase tracking-wider mb-3">
                What You Get (Deliverables)
              </h4>
              <ul className="space-y-2.5">
                {service.sampleDeliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Banner CTA inside detail view */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-blue-500/20">
            <div>
              <h4 className="text-xl font-extrabold">Ready to automate & scale?</h4>
              <p className="text-blue-100 text-xs sm:text-sm">Get started with our {service.title} setup today.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onSelectService(service);
              }}
              className="px-6 py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
