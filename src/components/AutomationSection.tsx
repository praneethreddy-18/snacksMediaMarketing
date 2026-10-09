import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Database, TrendingUp, Bot, Share2, Smartphone, Zap, Shield } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const AutomationSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);

  const features = [
    {
      title: "Intelligent Lead Capture",
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      description: "When someone comments on your post, our AI instantly sends them a personalized DM to capture their information."
    },
    {
      title: "Conversational AI Agents",
      icon: <Bot className="w-8 h-8 text-cyan-400" />,
      description: "Custom-trained AI chatbots engage prospects in natural conversations, answer FAQs, and handle sales objections 24/7."
    },
    {
      title: "Seamless CRM Sync",
      icon: <Database className="w-8 h-8 text-purple-400" />,
      description: "Every qualified lead and their conversation history is instantly synced to your CRM with zero data entry."
    },
    {
      title: "Automated Follow-Ups",
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      description: "Automatically trigger multi-channel SMS and email follow-ups to re-engage leads and boost conversion rates."
    },
    {
      title: "Enterprise Grade",
      icon: <Shield className="w-8 h-8 text-slate-400" />,
      description: "Built on secure infrastructure that scales infinitely. Your automations never sleep and your data is always safe."
    },
    {
      title: "Automated Revenue",
      icon: <TrendingUp className="w-8 h-8 text-rose-400" />,
      description: "Turn your social media accounts into a scalable machine that generates booked calls and direct sales automatically."
    }
  ];

  return (
    <section ref={containerRef} id="automation" className="py-24 bg-[#040711] text-white relative overflow-hidden">
      {/* 3D Background Grid */}
      <div className="absolute inset-0 pointer-events-none perspective-[1000px]">
        <motion.div 
          style={{ rotateX: 60, scale: 2 }}
          className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#06b6d411_1px,transparent_1px),linear-gradient(to_bottom,#06b6d411_1px,transparent_1px)] bg-[size:4rem_4rem]"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-sans font-extrabold uppercase tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            AI & Automation Infrastructure
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-500 tracking-tight leading-tight pb-2">
            Work While You Sleep
          </h2>
          <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">
            We build invisible 3D automation pipelines. From the first Instagram DM to the final CRM booking—everything happens instantly on autopilot.
          </p>
        </AnimatedSection>

        {/* 3D Floating Ecosystem - Centered */}
        <div className="relative h-[500px] sm:h-[600px] w-full max-w-5xl mx-auto rounded-[3rem] border border-cyan-500/20 bg-slate-900/40 backdrop-blur-3xl shadow-[0_0_50px_rgba(6,182,212,0.1)] flex items-center justify-center overflow-hidden perspective-[1000px] mb-20">
          
          {/* Animated Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 10px rgba(6,182,212,0.5))' }}>
            <motion.path 
              d="M 200 300 C 400 100, 600 500, 800 300" 
              fill="transparent" 
              stroke="url(#cyan-gradient)" 
              strokeWidth="3"
              strokeDasharray="10 10"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Node 1: Social Input */}
          <motion.div 
            style={{ y: y1 }}
            className="absolute left-4 sm:left-[10%] top-[30%] w-36 sm:w-48 h-36 sm:h-48 bg-slate-900 border border-slate-700 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center justify-center gap-2 sm:gap-3 z-10 group hover:border-cyan-400 transition-colors"
          >
            <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/50 group-hover:scale-110 transition-transform">
              <Share2 className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400" />
            </div>
            <div className="text-center">
              <h4 className="font-bold text-white text-sm sm:text-base">Social Trigger</h4>
              <p className="text-[10px] sm:text-xs text-slate-400">Viral Reel or Ad</p>
            </div>
          </motion.div>

          {/* Node 2: AI Bot Core */}
          <motion.div 
            style={{ rotateZ: rotate1 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 sm:left-[40%] sm:translate-x-0 top-[15%] sm:top-[20%] w-48 sm:w-64 h-48 sm:h-64 bg-cyan-950/80 border border-cyan-500 rounded-full p-6 sm:p-8 shadow-[0_0_40px_rgba(6,182,212,0.4)] flex flex-col items-center justify-center gap-3 sm:gap-4 z-20 backdrop-blur-xl"
          >
            <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.8)]">
              <Bot className="w-8 sm:w-10 h-8 sm:h-10 text-black" />
            </div>
            <div className="text-center">
              <h4 className="font-black text-lg sm:text-xl text-white">AI Engine</h4>
              <p className="text-xs sm:text-sm text-cyan-200">Qualifies Leads 24/7</p>
            </div>
          </motion.div>

          {/* Node 3: CRM Database */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute right-4 sm:right-[30%] bottom-[25%] sm:bottom-[20%] w-36 sm:w-48 h-36 sm:h-48 bg-slate-900 border border-slate-700 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center justify-center gap-2 sm:gap-3 z-10 group hover:border-purple-400 transition-colors"
          >
            <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/50 group-hover:scale-110 transition-transform">
              <Database className="w-6 sm:w-8 h-6 sm:h-8 text-purple-400" />
            </div>
            <div className="text-center">
              <h4 className="font-bold text-white text-sm sm:text-base">CRM Sync</h4>
              <p className="text-[10px] sm:text-xs text-slate-400">Data Stored & Scored</p>
            </div>
          </motion.div>

          {/* Node 4: Sales Output */}
          <motion.div 
            style={{ rotateZ: rotate2 }}
            className="absolute right-[5%] sm:right-[5%] top-[10%] sm:top-[40%] hidden sm:flex w-36 sm:w-48 h-36 sm:h-48 bg-slate-900 border border-emerald-500/30 rounded-3xl p-4 sm:p-6 shadow-2xl flex-col items-center justify-center gap-2 sm:gap-3 z-10 group hover:border-emerald-400 transition-colors"
          >
            <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-400" />
            </div>
            <div className="text-center">
              <h4 className="font-bold text-white text-sm sm:text-base">Sale Closed</h4>
              <p className="text-[10px] sm:text-xs text-slate-400">Automated Revenue</p>
            </div>
          </motion.div>

        </div>

        {/* Feature Grid Below the 3D visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <AnimatedSection 
              key={idx} 
              direction="up" 
              delay={idx * 0.1}
              className="p-8 rounded-[2rem] bg-slate-900/60 backdrop-blur-md border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
