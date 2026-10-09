import React from 'react';
import { Layers, Lightbulb, Cpu, Target } from 'lucide-react';
import { AnimatedSection, MotionGrid, MotionCard } from './AnimatedSection';

export const WhyChooseUs: React.FC = () => {
  const strengths = [
    {
      icon: <Layers className="w-8 h-8 text-cyan-400" />,
      title: 'End-to-End Growth Solutions',
      description: 'From script writing and video production to WhatsApp automation and Meta ads, we handle the full acquisition pipeline.'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-amber-400" />,
      title: 'Creative + Performance Driven',
      description: 'We do not just create pretty videos. Every piece of content is engineered with psychological hooks to convert viewers into paying clients.'
    },
    {
      icon: <Cpu className="w-8 h-8 text-indigo-400" />,
      title: 'Strong Systems & AI Automation',
      description: 'Eliminate human bottlenecks with custom chatbots, auto-responders, lead tracking sheets, and zero-delay follow ups.'
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-400" />,
      title: 'Industry-Focused Expertise',
      description: 'Deep understanding of audience behaviors across e-commerce, real estate, hospitality, education, and professional services.'
    }
  ];

  return (
    <section className="py-20 bg-[#0B0F19] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-cyan-300 text-xs font-extrabold uppercase tracking-wider">
            OUR ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Choose Snackz Media?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            We combine high-production creative storytelling with intelligent technology to deliver measurable, long-term success.
          </p>
        </AnimatedSection>

        {/* 4 Cards Grid */}
        <MotionGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((item, idx) => (
            <MotionCard key={idx}>
              <div className="bg-slate-900/90 p-8 rounded-3xl border border-slate-800 shadow-xl hover:shadow-2xl hover:border-blue-500/50 hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between group h-full">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-950/80 group-hover:bg-blue-600/30 border border-blue-800/80 flex items-center justify-center transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 text-xs font-bold text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Guaranteed Standard</span>
                  <span>→</span>
                </div>
              </div>
            </MotionCard>
          ))}
        </MotionGrid>

      </div>
    </section>
  );
};
