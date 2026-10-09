import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, TrendingUp, BarChart3, Zap, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';

import homeVideo from '../assets/Home Video.mp4';
import introVideo from '../assets/Intro Urban Space.mp4';

const REELS = [
  {
    id: 1,
    video: homeVideo,
    title: "Viral UGC Ads",
    stats: "+2.4M Views",
    icon: TrendingUp,
    color: "text-emerald-400",
    bg: "bg-emerald-500"
  },
  {
    id: 2,
    video: introVideo,
    title: "Personal Branding",
    stats: "+15k Followers",
    icon: Heart,
    color: "text-pink-400",
    bg: "bg-pink-500"
  },
  {
    id: 3,
    video: homeVideo,
    title: "B2B Lead Gen",
    stats: "4.8x ROAS",
    icon: BarChart3,
    color: "text-blue-400",
    bg: "bg-blue-500"
  },
  {
    id: 4,
    video: introVideo,
    title: "AI Automations",
    stats: "10k+ Leads",
    icon: Zap,
    color: "text-yellow-400",
    bg: "bg-yellow-500"
  },
  {
    id: 5,
    video: homeVideo,
    title: "Brand Strategy",
    stats: "Top 1% Agency",
    icon: Share2,
    color: "text-purple-400",
    bg: "bg-purple-500"
  }
];

const getPosition = (index: number, currentIndex: number, total: number) => {
  const diff = (index - currentIndex + total) % total;
  if (diff === 0) return 'center';
  if (diff === 1) return 'right1';
  if (diff === 2) return 'right2';
  if (diff === total - 2) return 'left2';
  if (diff === total - 1) return 'left1';
  return 'hidden';
};

const variants = {
  center: { zIndex: 10, x: 0, scale: 1, rotateY: 0, opacity: 1, filter: "blur(0px)" },
  left1: { zIndex: 5, x: -160, scale: 0.8, rotateY: 25, opacity: 0.8, filter: "blur(2px)" },
  right1: { zIndex: 5, x: 160, scale: 0.8, rotateY: -25, opacity: 0.8, filter: "blur(2px)" },
  left2: { zIndex: 1, x: -280, scale: 0.6, rotateY: 40, opacity: 0.4, filter: "blur(6px)" },
  right2: { zIndex: 1, x: 280, scale: 0.6, rotateY: -40, opacity: 0.4, filter: "blur(6px)" },
  hidden: { zIndex: 0, x: 0, scale: 0.5, opacity: 0, filter: "blur(10px)" }
};

const ReelVideo = ({ src, isCenter, isMuted }: { src: string, isCenter: boolean, isMuted: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isCenter) {
        // Mute before playing to satisfy browser autoplay policies
        videoRef.current.muted = isMuted;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => console.log("Autoplay prevented:", err));
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isCenter, isMuted]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay={isCenter}
      muted={isMuted || !isCenter}
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
};

export const HeroReelsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const lastWheelTime = useRef(0);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % REELS.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + REELS.length) % REELS.length);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const handleNativeWheel = (e: WheelEvent) => {
      e.preventDefault(); // Explicitly prevent the page from scrolling
      const now = Date.now();
      if (now - lastWheelTime.current < 600) return;

      lastWheelTime.current = now;
      if (e.deltaY > 0) {
        setCurrentIndex((prev) => (prev + 1) % REELS.length);
      } else if (e.deltaY < 0) {
        setCurrentIndex((prev) => (prev - 1 + REELS.length) % REELS.length);
      }
    };

    el.addEventListener('wheel', handleNativeWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleNativeWheel);
  }, []);

  return (
    <div
      ref={carouselRef}
      className="w-full h-[550px] flex items-center justify-center relative perspective-[1500px]"
    >

      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Carousel Container */}
      <div className="relative w-[300px] h-[500px] flex items-center justify-center transform-style-3d">

        {REELS.map((reel, index) => {
          const position = getPosition(index, currentIndex, REELS.length);
          const isCenter = position === 'center';

          return (
            <motion.div
              key={reel.id}
              variants={variants}
              initial="hidden"
              animate={position}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              onClick={() => {
                if (!isCenter) setCurrentIndex(index);
              }}
              className={`absolute w-[280px] h-[480px] bg-slate-900 rounded-[2rem] border-[6px] border-slate-800 shadow-2xl overflow-hidden cursor-pointer ${isCenter ? 'ring-2 ring-blue-500 shadow-[0_0_50px_rgba(0,71,255,0.4)]' : 'hover:border-slate-700'
                }`}
            >
              {/* Video Element */}
              <div className="absolute inset-0 bg-slate-950">
                <ReelVideo src={reel.video} isCenter={isCenter} isMuted={isMuted} />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/90 pointer-events-none z-10" />
              </div>

              {/* Mute/Unmute Button (Only on Center) */}
              {isCenter && (
                <button
                  onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 text-white hover:bg-black/60 transition z-20"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              )}

              {/* Marketing Badges */}
              <div className="absolute top-4 left-4 z-20">
                <div className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] font-black text-white uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                  <div className={`w-2 h-2 rounded-full ${reel.bg} shadow-[0_0_8px_currentColor] ${reel.color}`} />
                  {reel.title}
                </div>
              </div>

              {/* Mockup UI / Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-3 z-20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 hover:scale-110 transition text-white">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 hover:scale-110 transition text-white">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 hover:scale-110 transition text-white">
                      <Share2 className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Floating Stat Card inside Reel */}
                  <div className={`ml-auto p-3 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 flex flex-col items-center gap-1 shadow-2xl ${isCenter ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    } transition-all duration-700 delay-300`}>
                    <reel.icon className={`w-6 h-6 ${reel.color}`} />
                    <span className="text-sm font-black text-white whitespace-nowrap">{reel.stats}</span>
                    <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">Achieved</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    @snackzmedia
                    <span className="bg-blue-600 text-white text-[8px] px-1.5 py-0.5 rounded font-black">PRO</span>
                  </h3>
                  <p className="text-[11px] text-slate-200 line-clamp-2">
                    Transforming your content into a high-converting machine. Stop scrolling, start scaling. 🚀 <span className="font-bold text-blue-400">#Marketing #Growth</span>
                  </p>
                </div>
              </div>

            </motion.div>
          );
        })}

      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {REELS.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-blue-500 w-6 shadow-[0_0_10px_rgba(0,71,255,0.8)]' : 'bg-slate-700'
                }`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
};
