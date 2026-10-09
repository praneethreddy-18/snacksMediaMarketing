import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useAnimationFrame, useMotionValue } from 'framer-motion';
import { Play, Heart, TrendingUp, BarChart3, Zap, Sparkles } from 'lucide-react';

const ReelCard = ({ color = "bg-blue-600", from = "from-blue-600/40", to = "to-cyan-400/10" }) => (
  <div className="w-32 h-56 bg-slate-900/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative group">
    {/* Inner Gradient Gloss */}
    <div className={`absolute inset-0 bg-gradient-to-br ${from} ${to} opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
    <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/20 blur-2xl rounded-full pointer-events-none" />
    
    <div className="flex-1 flex items-center justify-center relative z-10">
      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform">
        <Play className="w-5 h-5 text-white fill-white ml-0.5" />
      </div>
    </div>
    <div className="h-20 bg-slate-950/60 p-3 flex flex-col justify-end relative z-10 backdrop-blur-md border-t border-white/5">
      <div className="flex items-center gap-2 mb-1.5">
        <div className={`w-5 h-5 rounded-full ${color} border border-white/20 shadow-sm`} />
        <div className="text-[9px] font-extrabold text-white tracking-wide">@snackzmedia</div>
      </div>
      <div className="text-[8px] text-slate-300 line-clamp-2 leading-relaxed">
        High converting short-form reels designed to scale. <span className="text-cyan-400">#viral</span>
      </div>
    </div>
  </div>
);

const StatCard = ({ icon: Icon, value, label, color = "text-emerald-400", bg = "bg-emerald-500" }) => (
  <div className="w-36 h-36 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center gap-3 relative overflow-hidden group">
    <div className={`absolute -bottom-10 -left-10 w-32 h-32 ${bg}/20 blur-2xl rounded-full transition-all group-hover:scale-150`} />
    <div className={`w-10 h-10 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center shadow-inner relative z-10`}>
      <Icon className={`w-5 h-5 ${color}`} />
    </div>
    <div className="text-center relative z-10">
      <div className="text-xl font-black text-white tracking-tight">{value}</div>
      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{label}</div>
    </div>
  </div>
);

const PostCard = () => (
  <div className="w-40 h-40 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-3 flex flex-col relative group overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 opacity-50" />
    <div className="flex items-center gap-2 mb-3 relative z-10">
      <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 shadow-md p-[1px]">
        <div className="w-full h-full bg-slate-900 rounded-full" />
      </div>
      <div className="text-[9px] font-extrabold text-white">Brand Campaign</div>
    </div>
    <div className="flex-1 bg-slate-800/80 rounded-xl overflow-hidden relative border border-white/5 shadow-inner">
       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=200&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" />
       <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
       <div className="absolute bottom-2 left-2 flex items-center gap-2">
         <Sparkles className="w-3 h-3 text-cyan-400" />
         <span className="text-[8px] font-black text-white tracking-widest uppercase">Trend</span>
       </div>
    </div>
  </div>
);

export const HeroGlobeGraphic: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const autoRotateY = useMotionValue(0);
  useAnimationFrame((_, delta) => {
    autoRotateY.set(autoRotateY.get() + delta * 0.015);
  });

  const { scrollYProgress } = useScroll();
  const scrollRotation = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const smoothScrollRotation = useSpring(scrollRotation, { damping: 20, stiffness: 50 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const smoothMouseY = useSpring(mouseY, { damping: 30, stiffness: 100 });
  
  const tiltX = useTransform(smoothMouseY, [-0.5, 0.5], ["20deg", "-20deg"]);
  const tiltZ = useTransform(smoothMouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const globeRotateY = useTransform(
    [autoRotateY, smoothScrollRotation],
    ([auto, scroll]) => `${(auto as number) + (scroll as number)}deg`
  );

  const items = [
    { lat: 0, lon: 0, comp: <ReelCard color="bg-blue-500" from="from-blue-600/40" to="to-blue-900/10" /> },
    { lat: 0, lon: 72, comp: <StatCard icon={TrendingUp} value="3.8x" label="Avg ROAS" color="text-emerald-400" bg="bg-emerald-500" /> },
    { lat: 0, lon: 144, comp: <ReelCard color="bg-pink-500" from="from-pink-500/40" to="to-purple-900/10" /> },
    { lat: 0, lon: 216, comp: <PostCard /> },
    { lat: 0, lon: 288, comp: <StatCard icon={Zap} value="12k+" label="Leads Generated" color="text-yellow-400" bg="bg-yellow-500" /> },
    
    { lat: 40, lon: 36, comp: <PostCard /> },
    { lat: 40, lon: 180, comp: <ReelCard color="bg-cyan-400" from="from-cyan-400/40" to="to-blue-900/10" /> },
    { lat: 40, lon: 324, comp: <StatCard icon={Heart} value="1.5M" label="Engagement" color="text-pink-400" bg="bg-pink-500" /> },

    { lat: -40, lon: 108, comp: <ReelCard color="bg-purple-500" from="from-purple-500/40" to="to-indigo-900/10" /> },
    { lat: -40, lon: 252, comp: <StatCard icon={BarChart3} value="+312%" label="Growth Rate" color="text-blue-400" bg="bg-blue-500" /> },
  ];

  const globeRadius = 260; // Increased radius to orbit around the central planet

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full flex items-center justify-center perspective-[2000px] absolute inset-0 overflow-visible"
    >
      <motion.div
        style={{
          rotateX: tiltX,
          rotateZ: tiltZ,
          transformStyle: "preserve-3d"
        }}
        className="w-full h-full flex items-center justify-center"
      >
        <motion.div
          style={{
            rotateY: globeRotateY,
            transformStyle: "preserve-3d"
          }}
          className="relative w-0 h-0 flex items-center justify-center"
        >
          
          {/* Central Planet Core */}
          <div 
            style={{ transform: "translateZ(0px)" }} 
            className="absolute w-[220px] h-[220px] rounded-full bg-slate-950 border border-blue-900/50 shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.9),_inset_10px_10px_30px_rgba(0,71,255,0.2),_0_0_80px_rgba(0,71,255,0.3)] flex items-center justify-center overflow-hidden"
          >
             {/* Planet Atmosphere Glow */}
             <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-gradient-to-br from-cyan-400/20 via-blue-600/10 to-transparent rounded-full mix-blend-screen" />
             {/* Central Icon */}
             <div className="relative z-10 w-24 h-24 rounded-full bg-blue-950/50 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(0,71,255,0.5)]">
               <Zap className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]" />
             </div>
          </div>

          {/* Visible Orbit Rings */}
          <div className="absolute w-[520px] h-[520px] rounded-full border-[1px] border-dashed border-blue-500/20" style={{ transform: "rotateX(90deg)" }} />
          <div className="absolute w-[520px] h-[520px] rounded-full border-[1px] border-cyan-500/10" style={{ transform: "rotateX(90deg) rotateY(45deg)" }} />
          <div className="absolute w-[520px] h-[520px] rounded-full border-[1px] border-purple-500/10" style={{ transform: "rotateX(90deg) rotateY(-45deg)" }} />

          {/* Render Items */}
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                transformStyle: "preserve-3d",
                transform: `rotateY(${item.lon}deg) rotateX(${item.lat}deg) translateZ(${globeRadius}px)`,
              }}
              className="flex items-center justify-center"
            >
              {item.comp}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
