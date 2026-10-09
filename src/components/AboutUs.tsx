import React from 'react';
import { ABOUT_STATS, OUR_VALUES } from '../data';
import { Award, Users, Calendar, ThumbsUp, Sparkles, TrendingUp, HeartHandshake, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection, MotionGrid, MotionCard } from './AnimatedSection';
import { CounterNumber } from './CounterNumber';

const TextReveal = ({ children, className }: { children: string, className?: string }) => {
  const words = children.split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.04 } },
      }}
      className={`inline-block ${className || ''}`}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-2 last:mr-0 align-bottom pt-1">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export const AboutUs: React.FC = () => {
  const getStatIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Award className="w-6 h-6 text-cyan-400" />;
      case 1: return <Users className="w-6 h-6 text-indigo-400" />;
      case 2: return <Calendar className="w-6 h-6 text-blue-400" />;
      case 3: return <ThumbsUp className="w-6 h-6 text-emerald-400" />;
      default: return <Award className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getValueIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 1: return <TrendingUp className="w-5 h-5 text-cyan-400" />;
      case 2: return <HeartHandshake className="w-5 h-5 text-indigo-400" />;
      case 3: return <Zap className="w-5 h-5 text-blue-400" />;
      default: return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  const getTargetNumber = (idx: number) => {
    switch (idx) {
      case 0: return { num: 100, suf: '+' };
      case 1: return { num: 50, suf: '+' };
      case 2: return { num: 3, suf: '+' };
      case 3: return { num: 100, suf: '%' };
      default: return { num: 100, suf: '+' };
    }
  };

  return (
    <section id="about" className="py-20 bg-[#0B0F19] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Text */}
          <AnimatedSection direction="left" className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-cyan-300 text-xs font-extrabold uppercase tracking-wider">
              WHO WE ARE
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight flex flex-wrap gap-y-2">
              <TextReveal>We turn ideas into</TextReveal> <span className="text-gradient-cyan"><TextReveal>impactful brand stories.</TextReveal></span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed block">
              <TextReveal>Snackz Media & Marketing is a full-service digital agency focused on helping brands grow through creative content, smart automation, and performance marketing. We combine high-end creative visual design with cutting-edge technology to deliver measurable results and long-term business growth.</TextReveal>
            </p>

            {/* Quick Values Bullet Badges */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {OUR_VALUES.map((val, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5 hover:bg-slate-800/80 transition-colors">
                  <div className="mt-0.5">{getValueIcon(idx)}</div>
                  <div>
                    <h4 className="font-extrabold text-white text-sm">{val.title}</h4>
                    <p className="text-slate-400 text-xs mt-0.5">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </AnimatedSection>

          {/* Right Image */}
          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-800 group bg-slate-900">
              <img
                src="/assets/team_office.png"
                alt="Snackz Media Marketing Agency Team"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Driven By Passion</div>
                  <div className="text-lg font-black">Modern Digital & Visual Architects</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>

        {/* 4 Numbers / Stats Grid Cards */}
        <MotionGrid className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {ABOUT_STATS.map((stat, idx) => {
            const conf = getTargetNumber(idx);
            return (
              <MotionCard key={idx}>
                <div className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800 text-center space-y-2 hover:bg-slate-800/80 transition-colors h-full flex flex-col justify-center">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-blue-950/80 border border-blue-800/80 flex items-center justify-center shadow-xs">
                    {getStatIcon(idx)}
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-cyan-400">
                    <CounterNumber target={conf.num} suffix={conf.suf} />
                  </div>
                  <div className="font-extrabold text-white text-sm">
                    {stat.label}
                  </div>
                  <div className="text-slate-400 text-xs font-medium">
                    {stat.desc}
                  </div>
                </div>
              </MotionCard>
            );
          })}
        </MotionGrid>

      </div>
    </section>
  );
};
