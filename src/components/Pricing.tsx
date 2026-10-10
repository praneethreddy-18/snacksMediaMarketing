import React from 'react';
import { PRICING_PLANS } from '../data';
import { CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { MagneticButton } from './MagneticButton';

interface PricingProps {
  onOpenCheckout: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenCheckout }) => {
  return (
    <section id="pricing" className="py-28 bg-[#040711] text-white relative overflow-hidden">
      
      {/* Background Gradients & Glows */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-900/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-[#0047FF]/20 via-blue-600/10 to-cyan-400/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(0,198,255,0.15)] text-cyan-300 text-xs font-grotesk font-extrabold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#00c6ff]" />
            <span>Transparent Partnership</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-none">
            Choose Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-[#00c6ff] drop-shadow-[0_0_20px_rgba(0,198,255,0.4)]">Growth Plan</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium max-w-2xl mx-auto">
            Scale your brand with predictable content creation, high-end production, and automated lead acquisition.
          </p>
        </AnimatedSection>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {PRICING_PLANS.map((plan, index) => {
            const isPopular = plan.isPopular;

            return (
              <AnimatedSection
                key={plan.id}
                direction="up"
                delay={0.1 * index}
                className={`h-full`}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`relative flex flex-col h-full rounded-[2rem] overflow-hidden backdrop-blur-2xl transition-all duration-300 group ${
                    isPopular 
                      ? 'bg-blue-950/40 border border-blue-500/50 shadow-[0_0_60px_rgba(0,71,255,0.25)] hover:bg-blue-900/60 hover:shadow-[0_0_80px_rgba(0,198,255,0.4)] hover:border-cyan-400/60 z-10' 
                      : 'bg-white/5 border border-white/10 shadow-2xl hover:bg-white/10 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(0,198,255,0.15)]'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute top-0 inset-x-0">
                      <div className="bg-gradient-to-r from-[#0047FF] via-cyan-400 to-[#0052FF] py-2.5 px-6 text-center text-white text-[10px] sm:text-xs font-extrabold tracking-[0.2em] uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,198,255,0.5)]">
                        <Sparkles className="w-3.5 h-3.5 animate-pulse text-white" />
                        <span>Most Popular Choice</span>
                      </div>
                    </div>
                  )}

                  <div className={`p-8 sm:p-10 flex flex-col h-full ${isPopular ? 'pt-14' : ''}`}>
                    {/* Tier Name & Tagline */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">{plan.name}</h3>
                      <p className="text-slate-400 text-sm font-medium h-10">{plan.tagline}</p>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-end gap-2 mb-6">
                      <span className={`text-3xl sm:text-4xl font-black tracking-tighter ${isPopular ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500' : 'text-white group-hover:text-cyan-100 transition-colors'}`}>
                        Custom Pricing
                      </span>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed border-b border-white/10 pb-8 mb-8">
                      {plan.description}
                    </p>

                    {/* Features List */}
                    <div className="flex-grow space-y-4 mb-8">
                      <div className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-4">
                        What's Included:
                      </div>
                      <div className="space-y-3.5">
                        {plan.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-3 group">
                            <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${isPopular ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' : 'text-blue-500'}`} />
                            <span className="text-slate-200 text-sm font-medium leading-snug group-hover:text-white transition-colors">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      {isPopular ? (
                        <MagneticButton
                          strength={20}
                          onClick={onOpenCheckout}
                          className="w-full relative group overflow-hidden rounded-xl font-black text-sm flex items-center justify-center py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_30px_rgba(0,198,255,0.3)] hover:shadow-[0_0_40px_rgba(0,198,255,0.5)] transition-all"
                        >
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <span className="relative z-10 flex items-center gap-2">
                            Contact Us <ArrowRight className="w-4 h-4" />
                          </span>
                        </MagneticButton>
                      ) : (
                        <button
                          onClick={onOpenCheckout}
                          className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all bg-white/5 border border-white/10 text-white group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 group-hover:text-cyan-300"
                        >
                          <span>Contact Us</span>
                          <ArrowRight className="w-4 h-4 opacity-70" />
                        </button>
                      )}
                    </div>

                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom Guarantees */}
        <AnimatedSection direction="up" delay={0.4} className="mt-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 drop-shadow-[0_0_10px_rgba(52,211,153,0.4)]" />
              <span className="text-slate-200 text-sm font-semibold tracking-wide">No long-term contracts. Pause or cancel anytime.</span>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
