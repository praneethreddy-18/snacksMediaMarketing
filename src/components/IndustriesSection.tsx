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
      description: 'Capture mouth-watering 4K food videos, auto-reply to menu inquiries on Instagram DMs, and manage table bookings via WhatsApp API.',
      keyWorkflows: ['Food Reel Editing', 'WhatsApp Menu Bot', 'Google Review Automation'],
      metrics: '3.4x Higher Weekend Bookings'
    },
    {
      id: 'salons',
      name: 'Salons & Spas',
      icon: <Scissors className="w-5 h-5" />,
      tagline: 'Before/After Transformation Reels & Appointment Bots',
      description: 'Showcase stunning transformations with fast-paced video edits and let clients book hair, nail, or spa appointments on auto-pilot.',
      keyWorkflows: ['Transformation Shorts', 'Instant WhatsApp Booking', 'VIP Loyalty System'],
      metrics: '85% Reduction in No-Shows'
    },
    {
      id: 'fitness',
      name: 'Fitness & Gyms',
      icon: <Dumbbell className="w-5 h-5" />,
      tagline: 'High-Energy Workout Reels & Lead Trial Capture',
      description: 'Drive membership signups through motivational gym reels, Meta ad campaigns, and automated trial pass lead capture.',
      keyWorkflows: ['Meta Ad Creatives', 'Free Trial Lead Funnel', 'Automated Membership Follow-Ups'],
      metrics: '+450 Monthly Member Leads'
    },
    {
      id: 'medical',
      name: 'Medical & Dental',
      icon: <Stethoscope className="w-5 h-5" />,
      tagline: 'Trust-Building Patient Education & Consultation Scheduling',
      description: 'Position your practice as a trusted authority with professional doctor reels and zero-delay appointment inquiries.',
      keyWorkflows: ['Patient Education Reels', 'Doctor Branding', 'WhatsApp Consultation Scheduler'],
      metrics: '99% Patient Satisfaction'
    },
    {
      id: 'retail',
      name: 'Retail & Shops',
      icon: <ShoppingBag className="w-5 h-5" />,
      tagline: 'Product Showcase Shorts & Direct Stripe Online Ordering',
      description: 'Highlight new fashion, jewelry, or electronics arrivals through aesthetic video edits and direct online storefront links.',
      keyWorkflows: ['Product Reel Shoots', 'Catalog DMs to Order', 'Retargeting Ad Creatives'],
      metrics: '+280% Online Store Traffic'
    },
    {
      id: 'homeservices',
      name: 'Home Services',
      icon: <Home className="w-5 h-5" />,
      tagline: 'Instant Quote-to-Job Dispatch & Missed-Call Auto Responders',
      description: 'Never miss a plumbing, AC repair, or cleaning lead. Missed calls trigger instant WhatsApp quotes and job booking forms.',
      keyWorkflows: ['Missed-Call Auto Responder', 'Google Maps SEO', 'Instant Job Booking Form'],
      metrics: '100% Missed Calls Rescued'
    },
    {
      id: 'realestate',
      name: 'Real Estate',
      icon: <Building2 className="w-5 h-5" />,
      tagline: 'Cinematic Property Walkthroughs & VIP Site Visit Funnels',
      description: '4K luxury property tour videos paired with automated WhatsApp brochure downloads and instant site visit booking.',
      keyWorkflows: ['4K Property Video Tours', 'WhatsApp Brochure Bot', 'Meta Lead Ads Management'],
      metrics: '850+ Qualified Buyers/Month'
    },
    {
      id: 'services',
      name: 'Professional Services',
      icon: <Briefcase className="w-5 h-5" />,
      tagline: 'B2B Thought Leadership & Automated Lead Qualification',
      description: 'Establish market dominance with polished founder video podcasts, LinkedIn content, and automated CRM lead routing.',
      keyWorkflows: ['Founder Podcast Clips', 'B2B Meta/LinkedIn Ads', 'CRM Google Sheets Setup'],
      metrics: '5.2x ROAS On Ad Spend'
    },
    {
      id: 'interiordesign',
      name: 'Interior Design',
      icon: <Palette className="w-5 h-5" />,
      tagline: 'Stunning Portfolio Showcases & Lead Qualification Bots',
      description: 'Highlight your best design projects with cinematic video tours and capture high-intent client leads automatically.',
      keyWorkflows: ['Portfolio Video Tours', 'WhatsApp Lead Bot', 'High-Ticket Client Funnel'],
      metrics: '3.2x More Consultations'
    }
  ];

  const [activeTab, setActiveTab] = useState<string>('restaurants');
  const activeIndustry = industries.find(i => i.id === activeTab) || industries[0];

  return (
    <section id="industries" className="py-20 bg-[#0B0F19] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-cyan-300 text-xs font-extrabold uppercase tracking-wider">
            TAILORED INDUSTRY PLAYBOOKS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built for Every Business Vertical
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            We customize video content, Instagram auto-responders, and ad campaigns specifically for your industry.
          </p>
        </AnimatedSection>

        {/* Industry Selector Grid */}
        <AnimatedSection direction="scale" delay={0.1} className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(ind.id)}
              className={`relative px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === ind.id
                  ? 'text-white shadow-lg shadow-blue-500/30'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-blue-500/50 hover:text-white'
              }`}
            >
              {activeTab === ind.id && (
                <motion.div
                  layoutId="activeIndustryBg"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl z-0"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{ind.icon}</span>
              <span className="relative z-10">{ind.name}</span>
            </button>
          ))}
        </AnimatedSection>

        {/* Active Industry Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-900/90 rounded-3xl border border-slate-800 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 text-cyan-400 border border-blue-800 text-xs font-bold uppercase">
                {activeIndustry.name} Strategy
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                {activeIndustry.tagline}
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                {activeIndustry.description}
              </p>

              {/* Key Workflows */}
              <div className="space-y-2">
                <div className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">
                  Included Industry Workflows:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeIndustry.keyWorkflows.map((wf, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      {wf}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-blue-950 via-slate-950 to-slate-900 text-white p-8 rounded-2xl border border-blue-900/80 text-center space-y-6 shadow-xl">
              <div className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
                Average Proven Results
              </div>

              <div className="text-3xl sm:text-4xl font-black text-cyan-400">
                {activeIndustry.metrics}
              </div>

              <p className="text-slate-300 text-xs sm:text-sm font-medium">
                Tailored content schedule and WhatsApp bot built specifically for {activeIndustry.name}.
              </p>

              <button
                onClick={onSelectIndustry}
                className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold rounded-xl text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Deploy For My Business</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
