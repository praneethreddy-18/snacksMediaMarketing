import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can our business automation and lead bot be set up?',
      answer: 'Our typical onboarding takes 3 to 5 business days. We set up your official WhatsApp API, Instagram auto-responders, and Google Sheets lead routing completely done-for-you.'
    },
    {
      question: 'What is included in the Monthly Partnership Plan?',
      answer: 'It includes professional camera shoots, high-end 4K video editing, reels formatting, 30-day content calendar, Instagram & WhatsApp lead automation setup, Meta ad management, and a dedicated strategy account manager.'
    },
    {
      question: 'Do we need to buy expensive software or camera gear ourselves?',
      answer: 'No! Snackz Media brings professional camera equipment, studio lighting, audio mics, and premium video editing software. Everything is included in the package.'
    },
    {
      question: 'How does Missed-Call WhatsApp Automation work?',
      answer: 'If a potential customer calls your business number and the call goes unanswered or busy, our automated system immediately sends a personalized WhatsApp message with your menu, service list, or booking link within seconds.'
    },
    {
      question: 'Is there any long-term contract lock-in?',
      answer: 'No. Our monthly partnership operates on a month-to-month basis. You can pause or adjust your growth plan at any time with 7 days notice.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#040711] text-white relative border-t border-slate-900">
      
      {/* Radial Spot Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#0047FF]/20 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-600/50 text-white text-xs font-grotesk font-extrabold uppercase tracking-wider">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            GOT QUESTIONS? <span className="text-white">WE HAVE ANSWERS</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            Everything you need to know about our video production, automation setup, and monthly growth partnership.
          </p>
        </AnimatedSection>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <AnimatedSection key={idx} direction="up" delay={idx * 0.08}>
                <div className="card-deck-dark rounded-2xl border border-blue-900/40 shadow-lg overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-cyan-400' : 'text-slate-500'}`} />
                      <span className="font-extrabold text-white text-base sm:text-lg">
                        {faq.question}
                      </span>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                      isOpen ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white rotate-180' : 'bg-slate-800 text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-0 text-slate-300 text-sm sm:text-base leading-relaxed font-medium pl-14 border-t border-slate-800/80 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
};
