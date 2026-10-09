import React, { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { XCircle, CheckCircle2, Sliders, Zap, ArrowRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  onConsult: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onConsult }) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <section id="impact-comparison" className="py-20 bg-[#040711] text-white relative overflow-hidden border-t border-slate-900">
      
      {/* Radial spot background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#0047FF]/25 via-blue-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-600/50 text-white text-xs font-grotesk font-extrabold uppercase tracking-wider">
            <Sliders className="w-4 h-4 text-cyan-400" />
            <span>Side-by-Side Impact</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            BEFORE VS AFTER <span className="text-white">SNACKZ SYSTEM</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            Drag the interactive handle below to see how our video production &amp; lead automation workflow transforms your daily business operations.
          </p>
        </AnimatedSection>

        {/* Interactive Comparison Container */}
        <AnimatedSection direction="scale" className="max-w-5xl mx-auto">
          <div
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative select-none rounded-3xl overflow-hidden border-2 border-blue-500/40 shadow-2xl bg-slate-950 cursor-ew-resize min-h-[480px] sm:min-h-[420px]"
          >
            
            {/* Right Side: WITH SNACKZ (After) */}
            <div className="absolute inset-0 p-6 sm:p-10 bg-gradient-to-br from-slate-950 via-[#07172A] to-blue-950 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-blue-600/40 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-[#0047FF] text-white flex items-center justify-center font-extrabold text-sm shadow-md">
                    <Zap className="w-5 h-5 text-cyan-400 fill-[#FACC15]" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-black text-cyan-400 uppercase tracking-wide">
                    WITH SNACKZ SYSTEM
                  </h3>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-600 text-emerald-300 font-grotesk font-extrabold text-xs">
                  0% Lead Leakage
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {[
                  { title: 'Instant Response', value: '< 10 Seconds via WhatsApp API', highlight: true },
                  { title: 'Content Quality', value: 'High-Retention Scrolls & Reels' },
                  { title: 'Missed Call Follow-Up', value: 'Auto-Triggered WhatsApp Flow' },
                  { title: 'Conversion ROAS', value: '3.8x - 5.2x Average Ad Return', highlight: true }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-blue-950/70 border border-blue-500/40 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase font-grotesk">{item.title}</div>
                      <div className={`text-sm sm:text-base font-extrabold ${item.highlight ? 'text-cyan-400' : 'text-white'}`}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-cyan-300 font-bold border-t border-blue-900/60 pt-4">
                <span>Scalable Growth Pipeline</span>
                <span className="text-cyan-400 font-black">+258% Revenue Lift</span>
              </div>
            </div>

            {/* Left Side: TRADITIONAL MANUAL (Before) - Clipped by SliderPos */}
            <div
              style={{ width: `${sliderPos}%` }}
              className="absolute top-0 bottom-0 left-0 p-6 sm:p-10 bg-slate-900 border-r-2 border-[#FACC15] flex flex-col justify-between overflow-hidden z-10 transition-all duration-75"
            >
              <div className="min-w-[320px] sm:min-w-[500px]">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-red-950 text-red-400 flex items-center justify-center font-extrabold text-sm border border-red-800">
                      <XCircle className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-slate-300 uppercase tracking-wide">
                      TRADITIONAL MANUAL
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-red-950 border border-red-800 text-red-300 font-grotesk font-extrabold text-xs">
                    35%+ Lost Leads
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  {[
                    { title: 'Response Time', value: '4 to 12 Hours Delay' },
                    { title: 'Content Consistency', value: 'Irregular & Low Retention' },
                    { title: 'Missed Calls', value: 'Unanswered & Forgotten' },
                    { title: 'Conversion ROAS', value: '1.1x - Low Return' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-slate-500 uppercase font-grotesk">{item.title}</div>
                        <div className="text-sm sm:text-base font-bold text-slate-400">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 font-bold border-t border-slate-800 pt-4">
                  <span>Manual Lead Drops</span>
                  <span className="text-red-400 font-bold">Unstable Revenue</span>
                </div>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              style={{ left: `${sliderPos}%` }}
              className="absolute top-0 bottom-0 -ml-5 w-10 flex items-center justify-center pointer-events-none z-20"
            >
              <div className="w-10 h-10 rounded-full bg-[#FACC15] text-[#040711] shadow-xl flex items-center justify-center font-black text-sm border-2 border-white animate-pulse">
                ↔
              </div>
            </div>

          </div>

          {/* CTA under comparison */}
          <div className="mt-8 text-center">
            <button
              onClick={onConsult}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-[#0047FF] hover:from-blue-500 hover:to-blue-400 text-white font-black text-base rounded-2xl shadow-xl shadow-blue-600/30 hover:scale-103 transition-all cursor-pointer font-grotesk uppercase"
            >
              <span>Switch To The Snackz System</span>
              <ArrowRight className="w-5 h-5 text-cyan-400" />
            </button>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
