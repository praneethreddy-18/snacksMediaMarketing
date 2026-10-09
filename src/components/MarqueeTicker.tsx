import React from 'react';
import { InstagramIcon, FacebookIcon, WhatsappIcon, YoutubeIcon, LinkedinIcon } from './SocialIcons';
import { Bot, Zap, TrendingUp, ShieldCheck, Video, Sparkles, BarChart3 } from 'lucide-react';
import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';

export const MarqueeTicker: React.FC = () => {
  const items = [
    { icon: <InstagramIcon className="w-5 h-5 text-pink-500" />, label: 'Instagram Automation' },
    { icon: <WhatsappIcon className="w-5 h-5 text-emerald-500" />, label: 'WhatsApp API Workflows' },
    { icon: <TrendingUp className="w-5 h-5 text-blue-500" />, label: 'Meta Ads Retargeting' },
    { icon: <Video className="w-5 h-5 text-indigo-500" />, label: '4K Reel Production' },
    { icon: <Bot className="w-5 h-5 text-cyan-500" />, label: 'Missed-Call Auto Responders' },
    { icon: <BarChart3 className="w-5 h-5 text-purple-500" />, label: 'Live ROAS Analytics' },
    { icon: <Zap className="w-5 h-5 text-amber-500" />, label: 'Lead Funnel Routing' },
    { icon: <FacebookIcon className="w-5 h-5 text-blue-600" />, label: 'Facebook Page Management' },
    { icon: <YoutubeIcon className="w-5 h-5 text-red-500" />, label: 'YouTube Shorts Growth' },
    { icon: <LinkedinIcon className="w-5 h-5 text-blue-700" />, label: 'B2B Brand Positioning' },
    { icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />, label: '24/7 Managed Growth' },
    { icon: <Sparkles className="w-5 h-5 text-cyan-400" />, label: 'Scripting & Storytelling' },
  ];

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const skewX = useTransform(velocityFactor, (v) => `${v * 2}deg`);

  return (
    <div className="w-full bg-slate-900 border-y border-slate-800/80 py-4 overflow-hidden relative select-none">
      
      {/* Edge Blur Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      <motion.div style={{ skewX }} className="flex w-max animate-marquee space-x-8">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-200 text-xs font-bold uppercase tracking-wider shrink-0 hover:bg-blue-600/30 hover:border-blue-500/50 transition-colors"
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </motion.div>

    </div>
  );
};
