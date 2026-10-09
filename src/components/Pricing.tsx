import React from 'react';
import { PRICING_PLAN } from '../data';
import { CheckCircle, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

interface PricingProps {
  onOpenCheckout: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenCheckout }) => {
  return (
    <section id="pricing" className="py-20 bg-[#040711] text-white relative overflow-hidden border-t border-slate-900">
      
      {/* Radial Spot Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#0047FF]/30 via-blue-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-600/50 text-white text-xs font-grotesk font-extrabold uppercase tracking-wider">
            TRANSPARENT PARTNERSHIP
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            MONTHLY <span className="text-white">GROWTH PLAN</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            Invest in predictable brand presence, continuous video shoots, and automated lead acquisition.
          </p>
        </AnimatedSection>

        {/* Pricing Card Showcase */}
        <AnimatedSection direction="scale" delay={0.15} className="max-w-3xl mx-auto">
          <div className="card-deck-dark rounded-3xl border-2 border-blue-500/80 shadow-2xl shadow-blue-500/20 overflow-hidden relative group">
            
            {/* Top Popular Ribbon */}
            <div className="bg-gradient-to-r from-[#0047FF] via-blue-600 to-[#0052FF] py-2.5 px-6 text-center text-white text-xs sm:text-sm font-extrabold tracking-wider uppercase flex items-center justify-center gap-2 font-grotesk">
              <Sparkles className="w-4 h-4 fill-[#FACC15] text-cyan-400 animate-spin-slow" />
              <span>Most Requested Growth Partnership</span>
            </div>

            <div className="p-8 sm:p-12 space-y-8">
              
              {/* Header Title & Price */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-1">
                    {PRICING_PLAN.tagline}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base font-medium max-w-md">
                    {PRICING_PLAN.description}
                  </p>
                </div>

                <div className="bg-blue-950/80 p-4 sm:p-5 rounded-2xl border border-blue-800/80 text-center md:text-right shrink-0">
                  <div className="text-3xl sm:text-4xl font-black text-cyan-400">
                    {PRICING_PLAN.price}
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {PRICING_PLAN.period} • All-Inclusive
                  </div>
                </div>
              </div>

              {/* Checklist Items Grid */}
              <div className="space-y-4">
                <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                  What's Included In This Plan:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {PRICING_PLAN.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/60 transition-colors">
                      <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-slate-200 text-sm font-semibold leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantees & CTA */}
              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm font-medium">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                  <span>No long-term lock-in contract. Cancel or pause anytime.</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenCheckout}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-base rounded-2xl shadow-xl shadow-blue-500/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
