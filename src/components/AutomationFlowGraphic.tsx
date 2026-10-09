import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MessageSquare, Database, Sparkles, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export const AutomationFlowGraphic: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "-100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "-100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "2000px" }} className="w-full group py-8">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full bg-slate-900/60 rounded-[2.5rem] p-6 sm:p-10 border border-blue-500/20 shadow-[0_30px_60px_rgba(0,0,0,0.6),_inset_0_0_80px_rgba(0,71,255,0.1)] relative overflow-hidden backdrop-blur-2xl transition-colors duration-500 hover:border-blue-500/40"
      >
        
        {/* Dynamic Glare Overlay */}
        <motion.div 
          style={{ x: glareX, y: glareY }}
          className="absolute inset-0 w-[200%] h-[200%] -top-1/2 -left-1/2 bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 pointer-events-none z-20 mix-blend-overlay"
        />

        {/* Ambient Core Glow */}
        <div 
          style={{ transform: "translateZ(10px)" }} 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-purple-600/10 via-[#0047FF]/20 to-cyan-400/10 rounded-full blur-3xl pointer-events-none" 
        />

        {/* Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Content wrapper with translateZ for depth */}
        <div style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }} className="relative z-10">
          
          {/* Title */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/10 pb-6 mb-10 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,71,255,0.3)]">
                <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              </div>
              <div>
                <h4 className="font-display text-xl font-black text-white uppercase tracking-wider">
                  Live AI Pipeline
                </h4>
                <p className="text-[10px] text-cyan-400 font-bold tracking-widest uppercase">Real-time Lead Automation</p>
              </div>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-grotesk font-extrabold flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span>Active Flow</span>
            </span>
          </div>

          {/* Nodes Diagram Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center relative z-10" style={{ transformStyle: "preserve-3d" }}>
            
            {/* Connection Line (Hidden on mobile) */}
            <div className="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-slate-800 -translate-y-1/2 z-0 rounded-full overflow-hidden">
               <motion.div 
                 animate={{ x: ["-100%", "400%"] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 className="w-1/4 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]"
               />
            </div>

            {/* Node 1: Lead Capture */}
            <motion.div
              style={{ transform: "translateZ(80px)" }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="p-5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-center space-y-4 relative group transition-all shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-pink-600 to-purple-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(219,39,119,0.4)] relative z-10 group-hover:scale-110 transition-transform">
                <InstagramIcon className="w-7 h-7" />
              </div>
              <div className="relative z-10">
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Stage 01</div>
                <div className="text-base font-black text-white">IG & Meta</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Lead Capture</div>
              </div>
            </motion.div>

            {/* Node 2: Snackz AI Bot Engine */}
            <motion.div
              style={{ transform: "translateZ(110px)" }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="p-5 rounded-2xl bg-gradient-to-b from-[#0030B0] to-slate-900 backdrop-blur-xl border border-blue-400 text-center space-y-4 relative z-10 shadow-[0_20px_40px_rgba(0,71,255,0.4)] overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[#0047FF]/20 blur-2xl rounded-2xl -z-10 group-hover:bg-[#0047FF]/40 transition-colors" />
              
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 to-[#0047FF] flex items-center justify-center text-white shadow-[0_0_30px_rgba(0,71,255,0.6)] border border-blue-300/50 relative z-10 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-cyan-400 fill-[#FACC15] drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
              </div>
              <div className="relative z-10">
                <div className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-widest mb-1">Engine Core</div>
                <div className="text-base font-black text-white">AI Routing</div>
                <div className="text-xs text-cyan-300 font-bold mt-1 bg-cyan-950/50 py-1 rounded-md border border-cyan-500/30">Insta-Response</div>
              </div>
            </motion.div>

            {/* Node 3: WhatsApp & Missed-Call Auto */}
            <motion.div
              style={{ transform: "translateZ(80px)" }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="p-5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-center space-y-4 relative group transition-all shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-emerald-500 to-green-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] relative z-10 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-7 h-7" />
              </div>
              <div className="relative z-10">
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Stage 03</div>
                <div className="text-base font-black text-white">WhatsApp</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Auto-Booking</div>
              </div>
            </motion.div>

            {/* Node 4: CRM / Google Sheets */}
            <motion.div
              style={{ transform: "translateZ(60px)" }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="p-5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-center space-y-4 relative group transition-all shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] relative z-10 group-hover:scale-110 transition-transform">
                <Database className="w-7 h-7" />
              </div>
              <div className="relative z-10">
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Final</div>
                <div className="text-base font-black text-white">Live CRM</div>
                <div className="text-xs text-emerald-400 font-bold mt-1">100% Retained</div>
              </div>
            </motion.div>

          </div>

          {/* Flow Pulse Signals Indicator */}
          <div className="mt-10 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between text-xs sm:text-sm font-semibold gap-4 bg-slate-900/40 p-4 rounded-xl backdrop-blur-sm">
            <span className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              Fully Automated Continuous Pipeline
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-cyan-400 rounded-lg border border-amber-500/30 font-extrabold flex items-center gap-2 uppercase tracking-wide">
              <span>0% Human Error</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
