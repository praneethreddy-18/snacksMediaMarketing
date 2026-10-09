import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { AutomationFlowGraphic } from './AutomationFlowGraphic';

const homeVideo = "https://www.w3schools.com/html/mov_bbb.mp4"; // REPLACE WITH YOUR VIDEO URL
const introVideo = "https://www.w3schools.com/html/mov_bbb.mp4"; // REPLACE WITH YOUR VIDEO URL

export const GrowthSystem: React.FC = () => {
  return (
    <section id="growth" className="py-20 bg-[#040711] text-white relative overflow-hidden border-t border-slate-900">
      
      {/* Radial Spot Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-[#0047FF]/30 via-blue-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Slide 5 Section: Core Growth System Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-600/40 text-white text-xs font-grotesk font-extrabold uppercase tracking-wider">
            SNACKZ MEDIA SYSTEM
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            CORE GROWTH SYSTEM
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            We build structured lead generation, follow-up automation, and conversion systems that scale your business predictably.
          </p>
        </AnimatedSection>

        {/* Core Growth System 5 Pillars (Slide 5 Direct Representation) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 5 Pillars List */}
          <AnimatedSection direction="left" className="lg:col-span-7 bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-blue-900/50 shadow-2xl backdrop-blur-xl space-y-6">
            <h3 className="font-display text-xl font-bold text-white uppercase border-b border-slate-800 pb-3">
              5 Stage Revenue Pipeline
            </h3>
            
            <div className="space-y-4">
              {[
                { stage: 'ATTRACT', desc: 'Professional content + social media + Meta advertising' },
                { stage: 'CAPTURE', desc: 'Lead generation from Instagram, Facebook, website & campaigns' },
                { stage: 'FOLLOW UP', desc: 'WhatsApp and missed-call automation to reduce lost enquiries' },
                { stage: 'CONVERT', desc: 'Structured lead tracking, remarketing and conversion-focused campaigns' },
                { stage: 'MEASURE', desc: 'Analytics, reporting and performance optimization' }
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/60 transition-all flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#0047FF] text-cyan-400 font-black font-grotesk text-sm flex items-center justify-center shrink-0">
                    0{index + 1}
                  </div>
                  <div>
                    <span className="font-display text-base font-extrabold text-cyan-400 uppercase tracking-wide block">
                      {item.stage}
                    </span>
                    <p className="text-slate-300 text-sm font-medium mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right Column: Key Strengths Box (Matches Slide 5 Box) */}
          <AnimatedSection direction="right" className="lg:col-span-5 bg-gradient-to-b from-slate-900/95 to-blue-950/90 rounded-3xl p-6 sm:p-8 border-2 border-blue-500/50 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-blue-900/60 pb-4 mb-6">
                <h3 className="font-display text-2xl font-black text-white">Key Strengths</h3>
                <span className="w-8 h-8 rounded-full bg-blue-950 text-slate-400 flex items-center justify-center font-bold text-xs border border-blue-800">
                  ⚡
                </span>
              </div>

              <div className="space-y-3">
                {[
                  'End-to-End Growth Solutions',
                  'Creative + Performance Driven',
                  'Strong Systems & AI Automation',
                  'Industry-Focused Expertise'
                ].map((strength, idx) => (
                  <div key={idx} className="pill-badge-deck p-3.5 text-center text-xs sm:text-sm font-bold shadow-md hover:scale-102 transition-transform">
                    {strength}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 text-center border-t border-blue-900/60 mt-6">
              <span className="text-xs text-slate-400 uppercase tracking-widest font-grotesk block mb-1">AUTOMATE YOUR WORKFLOW</span>
              <span className="text-lg font-black text-cyan-400">Zero Lead Leakage</span>
            </div>
          </AnimatedSection>

        </div>

        {/* Slide 2 Section: Automation Grid */}
        <div className="pt-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase">
              Business Automation &amp; Lead Management
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Automated workflows tailored for Instagram, WhatsApp, CRM routing &amp; missed-call response.
            </p>
          </div>


          {/* Live Motion Automation Flow Pipeline */}
          <AutomationFlowGraphic />

          {/* 6 Automation Cards (Exact match from Slide 2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Instagram Automation',
                desc: 'Automated enquiry workflows and response journeys for Instagram leads.',
                video: introVideo
              },
              {
                title: 'WhatsApp Automation',
                desc: 'Automated customer communication and follow-up workflows through WhatsApp.',
                video: homeVideo
              },
              {
                title: 'Missed-Call Automation',
                desc: 'If a customer calls and the call is not answered, an automated WhatsApp message can be triggered.',
                video: introVideo
              },
              {
                title: 'Lead Generation Automation',
                desc: 'Leads from Instagram, Facebook and website forms can be routed into Google Sheets or your CRM.',
                video: homeVideo
              },
              {
                title: 'Lead Pipeline Tracking',
                desc: 'Organize new leads, contacted leads, follow-ups and conversions in one structured system.',
                video: introVideo
              },
              {
                title: 'Follow-Up Automation',
                desc: 'Reduce lead leakage by triggering timely follow-ups based on customer actions or lead status.',
                video: homeVideo
              }
            ].map((autoCard, idx) => (
              <div 
                key={idx} 
                className="card-deck-dark p-6 rounded-2xl hover:border-blue-500/80 transition-all flex flex-col group overflow-hidden"
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) {
                    video.pause();
                    // Optionally reset time to start when they leave
                    // video.currentTime = 0; 
                  }
                }}
              >
                {autoCard.video && (
                  <div className="w-full h-40 mb-4 rounded-xl overflow-hidden relative shadow-lg">
                    <video 
                      src={autoCard.video} 
                      muted 
                      loop 
                      playsInline 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                )}
                
                <div className="space-y-3 flex-grow">
                  {!autoCard.video && (
                    <div className="w-8 h-8 rounded-full bg-blue-950 border border-blue-600/50 flex items-center justify-center text-cyan-300 font-bold text-xs group-hover:bg-[#0047FF] group-hover:text-white transition-colors mb-2">
                      ↘
                    </div>
                  )}
                  <h4 className="font-display text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {autoCard.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {autoCard.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-10">
            <span className="font-display text-xl font-extrabold text-white tracking-wide">
              Automate Your Workflow.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
