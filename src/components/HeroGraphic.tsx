import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Play, TrendingUp, BarChart3, MessageCircle, Heart, Share2, Zap, Radio } from 'lucide-react';

export const HeroGraphic: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  // Increased rotation for more dramatic 3D effect
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);

  // Glare effect transforms
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "-100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "-100%"]);

  const [counter, setCounter] = useState(842);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + Math.floor(Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full flex items-center justify-center perspective-[2000px] absolute inset-0 overflow-visible"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[340px] h-[420px] flex items-center justify-center"
      >
        {/* Background Orbit Rings */}
        <motion.div 
          animate={{ rotateZ: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transform: "translateZ(-100px)" }}
          className="absolute inset-[-150px] border-2 border-dashed border-blue-500/20 rounded-full pointer-events-none"
        />
        <motion.div 
          animate={{ rotateZ: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transform: "translateZ(-50px)" }}
          className="absolute inset-[-100px] border border-cyan-500/20 rounded-full pointer-events-none"
        />

        {/* Main Central Card - Mobile Phone Mockup */}
        <motion.div
          style={{ transform: "translateZ(60px)" }}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] border border-blue-500/30 shadow-[0_0_50px_rgba(0,71,255,0.2)] flex flex-col overflow-hidden"
        >
          {/* Dynamic Glare Overlay */}
          <motion.div 
            style={{ x: glareX, y: glareY }}
            className="absolute inset-0 w-[200%] h-[200%] -top-1/2 -left-1/2 bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-45 pointer-events-none z-20"
          />

          {/* Mockup Header */}
          <div className="h-14 border-b border-slate-700/50 flex items-center px-4 gap-3 bg-slate-950/60 relative z-10">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 p-0.5 shadow-lg shadow-cyan-500/40">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white leading-none">Snackz Media</span>
              <span className="text-[10px] text-cyan-400 font-semibold tracking-wider">SPONSORED</span>
            </div>
            <div className="ml-auto flex items-center gap-1 text-[9px] font-bold text-red-500 bg-red-500/10 px-2 py-1 rounded-full border border-red-500/30">
              <Radio className="w-3 h-3 animate-pulse" /> LIVE
            </div>
          </div>
          
          {/* Mockup Body - Video Placeholder */}
          <div className="flex-1 relative bg-slate-950 flex items-center justify-center overflow-hidden">
             {/* Animated Gradient Background */}
             <motion.div 
               animate={{ 
                 backgroundPosition: ['0% 0%', '100% 100%'],
                 scale: [1, 1.2, 1]
               }}
               transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
               className="absolute inset-0 bg-gradient-to-br from-blue-700/50 via-cyan-400/30 to-purple-600/40 bg-[length:200%_200%]"
             />
             <motion.div 
               whileHover={{ scale: 1.15 }}
               whileTap={{ scale: 0.95 }}
               className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 cursor-pointer z-10 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
             >
               <Play className="w-7 h-7 text-white fill-white ml-1.5" />
             </motion.div>
          </div>

          {/* Mockup Footer - Engagement */}
          <div className="h-20 bg-slate-950/80 px-4 py-3 flex flex-col gap-2 relative z-10">
             <div className="flex items-center gap-4">
               <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
                 <Heart className="w-6 h-6 text-pink-500 fill-pink-500/20 hover:fill-pink-500 transition-colors" />
               </motion.div>
               <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
                 <MessageCircle className="w-6 h-6 text-slate-300 hover:text-white transition-colors" />
               </motion.div>
               <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer ml-auto">
                 <Share2 className="w-5 h-5 text-slate-300 hover:text-white transition-colors" />
               </motion.div>
             </div>
             <div className="flex items-center gap-2">
               <div className="flex -space-x-2">
                 <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border border-slate-900 shadow-sm"></div>
                 <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border border-slate-900 shadow-sm"></div>
                 <div className="w-5 h-5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 border border-slate-900 shadow-sm flex items-center justify-center text-[8px] font-bold text-white">+</div>
               </div>
               <span className="text-xs text-slate-400 font-medium">Liked by <span className="text-white font-bold">14.2k</span></span>
             </div>
          </div>
        </motion.div>

        {/* Floating Element 1 - Analytics Card */}
        <motion.div
          style={{ transform: "translateZ(130px)" }}
          animate={{ y: [0, -20, 0], rotateZ: [0, 2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-20 top-8 bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl border border-emerald-500/40 shadow-[0_15px_30px_rgba(16,185,129,0.2)] w-52"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shadow-inner">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wide">ROAS</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-400">LIVE</span>
          </div>
          <div className="text-3xl font-black text-white mb-1 tracking-tight">4.8x</div>
          <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +1.2x this week
          </div>
        </motion.div>

        {/* Floating Element 2 - Leads Card */}
        <motion.div
          style={{ transform: "translateZ(160px)" }}
          animate={{ y: [0, 20, 0], rotateZ: [0, -2, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -left-16 bottom-16 bg-slate-900/95 backdrop-blur-xl p-4 rounded-2xl border border-cyan-500/40 shadow-[0_15px_30px_rgba(6,182,212,0.2)] flex items-center gap-4 w-48"
        >
          <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center relative shadow-inner">
            <BarChart3 className="w-6 h-6 text-cyan-400 relative z-10" />
            <motion.div 
              animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-cyan-400 rounded-full"
            />
          </div>
          <div>
            <div className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-widest">New Leads</div>
            <motion.div className="text-2xl font-black text-white">{counter}</motion.div>
          </div>
        </motion.div>

        {/* Floating Element 3 - Notification Badge */}
        <motion.div
          style={{ transform: "translateZ(180px)" }}
          animate={{ scale: [1, 1.05, 1], y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute -left-8 top-16 bg-gradient-to-r from-blue-600 to-[#0047FF] px-4 py-2 rounded-full shadow-[0_10px_20px_rgba(0,71,255,0.4)] border border-blue-400/30 text-xs font-bold text-white flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FACC15] shadow-[0_0_10px_rgba(250,204,21,0.8)] animate-pulse"></span>
          Campaign Optimized
        </motion.div>

      </motion.div>
    </div>
  );
};
