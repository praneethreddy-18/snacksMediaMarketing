import React, { useRef } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import { HeroReelsCarousel } from './HeroReelsCarousel';

interface HeroProps {
  onGetStarted: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onExploreServices }) => {
  const textRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!textRef.current) return;
    const rect = textRef.current.getBoundingClientRect();
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
    <section id="home" className="relative pt-28 pb-16 lg:pt-0 lg:pb-0 min-h-screen flex items-center overflow-hidden bg-[#040711] text-white perspective-[2000px]">

      {/* Background Animated Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-60" />

      {/* Intense Electric Blue Spot Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-[#0047FF]/20 via-[#0030B0]/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 lg:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text Content */}
          <motion.div
            ref={textRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left relative z-20"
          >

            {/* Top Pill Badge */}
            <motion.div
              style={{ transform: "translateZ(20px)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/80 border border-blue-500/50 text-white text-xs sm:text-sm font-extrabold shadow-[0_0_20px_rgba(0,71,255,0.4)] backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="uppercase tracking-widest text-[10px] sm:text-xs">More Leads • More Sales • Viral Growth</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              style={{ transform: "translateZ(50px)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight uppercase drop-shadow-2xl"
            >
              <span className="text-white inline-block hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">SNACK<span className="text-[#FACC15] drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">Z</span></span> <br />
              <span className="text-white inline-block drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">MEDIA &amp; MARKETING</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              style={{ transform: "translateZ(30px)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed drop-shadow-lg"
            >
              We shape the voice your audience remembers. From script writing, video editing, social media management, to lead automation systems.
            </motion.p>

            {/* Deck Feature Pills */}
            <motion.div
              style={{ transform: "translateZ(40px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2"
            >
              {[
                'CONTENT',
                'VIRAL',
                'MARKETING',
                'AUTOMATIONS',
                'BRANDING',
                'SOCIAL MEDIA MANAGEMENT',
                'LEAD MANAGEMENT',
                'ANALYTICS'
              ].map((pill, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ y: -5, scale: 1.1, zIndex: 10 }}
                  className="px-3.5 py-1.5 rounded-full bg-[#EAF4FD]/90 backdrop-blur-sm text-[#040711] font-grotesk font-extrabold text-xs tracking-wider shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:bg-white hover:shadow-[#0047FF]/50 transition-all cursor-default"
                >
                  • {pill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              style={{ transform: "translateZ(60px)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <MagneticButton
                strength={60}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 71, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={onGetStarted}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-[#0047FF] hover:from-blue-500 hover:to-blue-400 text-white font-black text-base rounded-2xl shadow-xl shadow-blue-600/40 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </MagneticButton>

              <MagneticButton
                strength={40}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={onExploreServices}
                className="w-full sm:w-auto px-8 py-4 bg-slate-900/90 text-slate-100 border-2 border-blue-900/60 hover:border-blue-500/60 font-bold text-base rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Solutions</span>
                <Play className="w-4 h-4 fill-slate-200 group-hover:fill-[#FACC15] group-hover:text-cyan-400 transition-colors" />
              </MagneticButton>
            </motion.div>

            {/* Phone & Email Badges */}
            <motion.div
              style={{ transform: "translateZ(20px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-300"
            >
              <a href="tel:+917416040436" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-blue-900/60 hover:border-blue-500 text-slate-200 hover:text-white transition-colors">
                <span className="text-cyan-400">📞</span> +91 74160-40436
              </a>
              <a href="mailto:snackzmediaus@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-blue-800/80 hover:border-blue-500 text-cyan-300 hover:text-white transition-colors">
                <span className="text-cyan-400">✉️</span> snackzmediaus@gmail.com
              </a>
            </motion.div>

          </motion.div>

          {/* Right Banner Graphic with Custom 3D Motion Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-6 relative h-[650px] w-full hidden lg:block"
          >

            {/* Glow Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0047FF]/40 to-cyan-400/20 rounded-3xl blur-2xl transform scale-95" />

            <div className="absolute inset-0 w-full h-full rounded-3xl overflow-visible group z-10 flex items-center justify-center pt-8">

              <HeroReelsCarousel />

            </div>

          </motion.div>

        </div>

        {/* Trusted By Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 pt-8 border-t border-white/10"
        >
          {/* <p className="text-center text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-6">Trusted by Industry Leaders</p> */}
          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-20 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Text-based logos for now since we don't have SVG assets */}
            {/* <span className="font-display text-xl font-bold tracking-tight text-white">FORBES</span>
            <span className="font-display text-xl font-bold tracking-tight text-white">TECHCRUNCH</span>
            <span className="font-display text-xl font-bold tracking-tight text-white">WIRED</span>
            <span className="font-display text-xl font-bold tracking-tight text-white">ENTREPRENEUR</span>
            <span className="font-display text-xl font-bold tracking-tight text-white">VOGUE</span> */}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
