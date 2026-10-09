import React, { useState } from 'react';
import { Utensils, Scissors, Dumbbell, Stethoscope, ShoppingBag, Home, Building2, Briefcase, ArrowRight, CheckCircle2, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

interface IndustryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  resultsDescription: string;
  keyWorkflows: string[];
  metrics: string;
}

export const IndustriesSection: React.FC<{ onSelectIndustry: () => void }> = ({ onSelectIndustry }) => {
  const industries: IndustryItem[] = [
    {
      id: 'restaurants',
      name: 'Restaurants & Cafés',
      icon: <Utensils className="w-5 h-5" />,
      tagline: 'Aesthetic Food Cinematography & WhatsApp Table Reservations',
      description: 'Transform casual scrollers into loyal diners. We combine cinematic 4K food videography with AI-driven reservation bots to keep your tables fully booked.',
      resultsDescription: 'Automated booking systems and viral food reels proven to pack your dining room every weekend.',
      keyWorkflows: ['Food Reel Editing', 'WhatsApp Menu Bot', 'Google Review Automation'],
      metrics: '3.4x Higher Weekend Bookings'
    },
    {
      id: 'salons',
      name: 'Salons & Spas',
      icon: <Scissors className="w-5 h-5" />,
      tagline: 'Before/After Transformation Reels & Appointment Bots',
      description: 'Elevate your salon\'s brand with aesthetic transformation reels. Our smart booking bots handle scheduling and reminders so you can focus on your clients.',
      resultsDescription: 'Fill your appointment book weeks in advance with highly-targeted local ads and seamless 24/7 self-booking.',
      keyWorkflows: ['Transformation Shorts', 'Instant WhatsApp Booking', 'VIP Loyalty System'],
      metrics: '85% Reduction in No-Shows'
    },
    {
      id: 'fitness',
      name: 'Fitness & Gyms',
      icon: <Dumbbell className="w-5 h-5" />,
      tagline: 'High-Energy Workout Reels & Lead Trial Capture',
      description: 'Ignite your community growth with high-octane workout content. We build automated lead funnels that turn local interest into active gym memberships.',
      resultsDescription: 'Convert casual scrollers into paying members with high-converting trial funnels and rapid lead follow-up.',
      keyWorkflows: ['Meta Ad Creatives', 'Free Trial Lead Funnel', 'Automated Membership Follow-Ups'],
      metrics: '+450 Monthly Member Leads'
    },
    {
      id: 'medical',
      name: 'Medical & Dental',
      icon: <Stethoscope className="w-5 h-5" />,
      tagline: 'Trust-Building Patient Education & Consultation Scheduling',
      description: 'Establish unwavering patient trust. We produce authoritative medical content paired with smart scheduling automation for a seamless patient experience.',
      resultsDescription: 'Increase high-value consultations and patient trust while reducing front-desk workload with smart AI scheduling.',
      keyWorkflows: ['Patient Education Reels', 'Doctor Branding', 'WhatsApp Consultation Scheduler'],
      metrics: '99% Patient Satisfaction'
    },
    {
      id: 'retail',
      name: 'Retail & Shops',
      icon: <ShoppingBag className="w-5 h-5" />,
      tagline: 'Product Showcase Shorts & Direct Stripe Online Ordering',
      description: 'Accelerate your e-commerce growth. We create scroll-stopping product showcases that drive immediate sales through automated Instagram DM checkouts.',
      resultsDescription: 'Turn Instagram followers into direct buyers instantly via automated DM checkouts and high-ROI retargeting.',
      keyWorkflows: ['Product Reel Shoots', 'Catalog DMs to Order', 'Retargeting Ad Creatives'],
      metrics: '+280% Online Store Traffic'
    },
    {
      id: 'homeservices',
      name: 'Home Services',
      icon: <Home className="w-5 h-5" />,
      tagline: 'Instant Quote-to-Job Dispatch & Missed-Call Auto Responders',
      description: 'Dominate your local service area. Our systems instantly convert missed calls into booked jobs, ensuring your crew stays busy year-round.',
      resultsDescription: 'Rescue every missed lead and automate dispatching so your crew stays booked out all season long.',
      keyWorkflows: ['Missed-Call Auto Responder', 'Google Maps SEO', 'Instant Job Booking Form'],
      metrics: '100% Missed Calls Rescued'
    },
    {
      id: 'realestate',
      name: 'Real Estate',
      icon: <Building2 className="w-5 h-5" />,
      tagline: 'Cinematic Property Walkthroughs & VIP Site Visit Funnels',
      description: 'Sell properties faster with breathtaking cinematic tours. We automate lead qualification and schedule VIP site visits directly from your social feeds.',
      resultsDescription: 'Qualify premium buyers instantly with automated brochure drops and schedule VIP site tours on autopilot.',
      keyWorkflows: ['4K Property Video Tours', 'WhatsApp Brochure Bot', 'Meta Lead Ads Management'],
      metrics: '850+ Qualified Buyers/Month'
    },
    {
      id: 'services',
      name: 'Professional Services',
      icon: <Briefcase className="w-5 h-5" />,
      tagline: 'B2B Thought Leadership & Automated Lead Qualification',
      description: 'Position yourself as an industry leader. We create premium thought-leadership content that naturally attracts and qualifies high-value B2B clients.',
      resultsDescription: 'Build unshakeable B2B authority and fill your pipeline with highly qualified, ready-to-close discovery calls.',
      keyWorkflows: ['Founder Podcast Clips', 'B2B Meta/LinkedIn Ads', 'CRM Google Sheets Setup'],
      metrics: '5.2x ROAS On Ad Spend'
    },
    {
      id: 'interiordesign',
      name: 'Interior Design',
      icon: <Palette className="w-5 h-5" />,
      tagline: 'Stunning Portfolio Showcases & Lead Qualification Bots',
      description: 'Showcase your design brilliance through immersive video storytelling. We help you attract premium clients and automatically pre-qualify high-ticket leads.',
      resultsDescription: 'Attract higher-budget clients by showcasing your premium aesthetic paired with automated lead pre-qualification.',
      keyWorkflows: ['Portfolio Video Tours', 'WhatsApp Lead Bot', 'High-Ticket Client Funnel'],
      metrics: '3.2x More Consultations'
    }
  ];

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="industries" className="py-24 bg-[#040711] text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-sans font-extrabold uppercase tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            TAILORED INDUSTRY PLAYBOOKS
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-slate-400 tracking-tight">
            Built for Every Business Vertical
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            We customize video content, Instagram auto-responders, and ad campaigns specifically for your industry.
          </p>
        </AnimatedSection>

        {/* Animated Expanding Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <motion.div
              key={ind.id}
              layout
              onMouseEnter={() => setHoveredId(ind.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative rounded-[2rem] border overflow-hidden cursor-pointer transition-all duration-500 flex flex-col justify-between ${
                hoveredId === ind.id 
                  ? 'bg-slate-900/80 border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.2)] scale-[1.02] z-20' 
                  : 'bg-slate-900/40 border-white/5 hover:border-white/10 scale-100 z-10'
              }`}
            >
              {/* Card Ambient Background */}
              <AnimatePresence>
                {hoveredId === ind.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 z-0 pointer-events-none"
                  />
                )}
              </AnimatePresence>

              <div className="p-8 relative z-10 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-500 ${
                    hoveredId === ind.id ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.5)]' : 'bg-slate-800 text-cyan-400 border border-white/10'
                  }`}>
                    {ind.icon}
                  </div>
                  <motion.div 
                    animate={{ rotate: hoveredId === ind.id ? -45 : 0, color: hoveredId === ind.id ? '#22d3ee' : '#64748b' }}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>

                <h3 className={`text-2xl font-black mb-3 transition-colors duration-300 ${
                  hoveredId === ind.id ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200' : 'text-white'
                }`}>
                  {ind.name}
                </h3>

                <AnimatePresence mode="wait">
                  {hoveredId === ind.id ? (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <p className="text-cyan-100 font-bold text-sm leading-snug">
                        {ind.tagline}
                      </p>
                      
                      <div className="space-y-3 pt-4 border-t border-white/10">
                        {ind.keyWorkflows.map((wf, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                            {wf}
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 mt-auto">
                        <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-1">
                          Proven Results
                        </div>
                        <div className="text-2xl font-black text-white">
                          {ind.metrics}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-grow flex flex-col justify-between"
                    >
                      <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                        {ind.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <AnimatePresence>
                {hoveredId === ind.id && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={onSelectIndustry}
                    className="m-6 mt-0 py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-black uppercase tracking-wider rounded-xl text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-colors duration-300 flex items-center justify-center gap-2 relative z-10"
                  >
                    Deploy For {ind.name}
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
