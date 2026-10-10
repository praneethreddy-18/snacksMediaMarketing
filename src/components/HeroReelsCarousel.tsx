import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, TrendingUp, BarChart3, ChevronLeft, ChevronRight, Volume2, VolumeX, Sparkles, Flame, Music, Check } from 'lucide-react';

import homeVideo from '../assets/Home Video.mp4';
import introVideo from '../assets/Intro Urban Space.mp4';
import hifiVideo from '../assets/HIFI OFFER REEL INHOUSE STUDIO.mp4';
import persisVideo from '../assets/Persis Tiffin - Desserts Reel.mp4';
import portfolioVideo1 from '../assets/portfolio video1.mp4';

interface ReelItem {
  id: number;
  video: string;
  title: string;
  stats: string;
  likes: string;
  comments: string;
  shares: string;
  song: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bg: string;
  description: string;
}

const REELS: ReelItem[] = [
  {
    id: 1,
    video: homeVideo,
    title: "Home Living & Luxury Spaces",
    stats: "+3.2M Views",
    likes: "184K",
    comments: "2,410",
    shares: "38K",
    song: "Snackz Media • Aesthetic Beats",
    icon: TrendingUp,
    color: "text-amber-400",
    bg: "bg-amber-500",
    description: "Architectural & lifestyle visuals that capture warmth and elegance."
  },
  {
    id: 2,
    video: introVideo,
    title: "Urban Space Commercial",
    stats: "+1.8M Reach",
    likes: "96K",
    comments: "1,140",
    shares: "19K",
    song: "Urban Space • Cinematic Ambient",
    icon: Sparkles,
    color: "text-purple-400",
    bg: "bg-purple-500",
    description: "Cinematic commercial video production built to scale brand trust."
  },
  {
    id: 3,
    video: hifiVideo,
    title: "HiFi In-House Studio Offer",
    stats: "6.2x Conversion",
    likes: "215K",
    comments: "3,890",
    shares: "54K",
    song: "HiFi Studio • Viral Trend Audio",
    icon: Flame,
    color: "text-rose-400",
    bg: "bg-rose-500",
    description: "High-impact offer campaigns designed for instant audience conversions."
  },
  {
    id: 4,
    video: persisVideo,
    title: "Persis Tiffin & Desserts",
    stats: "94% Engagement",
    likes: "320K",
    comments: "4,620",
    shares: "82K",
    song: "Persis Flavors • Trending Food Reel",
    icon: Heart,
    color: "text-pink-400",
    bg: "bg-pink-500",
    description: "Delectable culinary reels driving immense viral reach and customer footfall."
  },
  {
    id: 5,
    video: portfolioVideo1,
    title: "Viral UGC & Reels",
    stats: "+2.4M Views",
    likes: "142K",
    comments: "1,980",
    shares: "29K",
    song: "Snackz Creator Lab • Original Sound",
    icon: BarChart3,
    color: "text-emerald-400",
    bg: "bg-emerald-500",
    description: "High-retention reel edits that hook audiences in the first 3 seconds."
  }
];

const getPosition = (index: number, currentIndex: number, total: number) => {
  if (total === 2) {
    if (index === currentIndex) return 'center';
    return (currentIndex === 0) ? 'right1' : 'left1';
  }
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
  left1: { zIndex: 5, x: -170, scale: 0.82, rotateY: 22, opacity: 0.75, filter: "blur(2px)" },
  right1: { zIndex: 5, x: 170, scale: 0.82, rotateY: -22, opacity: 0.75, filter: "blur(2px)" },
  left2: { zIndex: 1, x: -290, scale: 0.65, rotateY: 36, opacity: 0.35, filter: "blur(5px)" },
  right2: { zIndex: 1, x: 290, scale: 0.65, rotateY: -36, opacity: 0.35, filter: "blur(5px)" },
  hidden: { zIndex: 0, x: 0, scale: 0.5, opacity: 0, filter: "blur(10px)" }
};

const ReelVideo = ({
  src,
  isCenter,
  isMuted,
  onProgress
}: {
  src: string;
  isCenter: boolean;
  isMuted: boolean;
  onProgress?: (progressPercent: number) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isCenter) {
        videoRef.current.muted = isMuted;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => console.log("Autoplay prevented:", err));
        }
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
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
      onTimeUpdate={() => {
        if (videoRef.current && onProgress && videoRef.current.duration) {
          const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
          onProgress(pct);
        }
      }}
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
};

export const HeroReelsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [likedReels, setLikedReels] = useState<Record<number, boolean>>({});
  const [progress, setProgress] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const lastWheelTime = useRef(0);

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % REELS.length);
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + REELS.length) % REELS.length);
  };

  const toggleLike = (id: number) => {
    setLikedReels((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const handleNativeWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime.current < 600) return;

      lastWheelTime.current = now;
      if (e.deltaY > 0) {
        handleNext();
      } else if (e.deltaY < 0) {
        handlePrev();
      }
    };

    el.addEventListener('wheel', handleNativeWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleNativeWheel);
  }, []);

  return (
    <div
      ref={carouselRef}
      className="w-full h-[580px] flex items-center justify-center relative perspective-[1500px] select-none"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Carousel Container */}
      <div className="relative w-[300px] h-[520px] flex items-center justify-center transform-style-3d">
        {REELS.map((reel, index) => {
          const position = getPosition(index, currentIndex, REELS.length);
          const isCenter = position === 'center';
          const isLiked = !!likedReels[reel.id];

          return (
            <motion.div
              key={reel.id}
              variants={variants}
              initial="hidden"
              animate={position}
              transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
              onClick={() => {
                if (!isCenter) {
                  setProgress(0);
                  setCurrentIndex(index);
                }
              }}
              className={`absolute w-[290px] h-[510px] bg-slate-950 rounded-[2.5rem] border-[7px] border-slate-900 shadow-2xl overflow-hidden cursor-pointer transition-colors duration-300 ${
                isCenter
                  ? 'ring-2 ring-blue-500/80 shadow-[0_0_50px_rgba(37,99,235,0.4)]'
                  : 'hover:border-slate-800'
              }`}
            >
              {/* Smartphone Top Dynamic Island */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                <div className="w-20 h-4 bg-black/90 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-end pr-2.5 shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80 ring-1 ring-blue-400/40" />
                </div>
              </div>

              {/* Video Element */}
              <div className="absolute inset-0 bg-slate-950">
                <ReelVideo
                  src={reel.video}
                  isCenter={isCenter}
                  isMuted={isMuted}
                  onProgress={isCenter ? setProgress : undefined}
                />
                {/* Instagram Reels Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none z-10" />
              </div>

              {/* Top Reels Header Bar */}
              <div className="absolute top-8 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-extrabold tracking-tight text-white drop-shadow">Reels</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                </div>

                <div className="flex items-center gap-2 pointer-events-auto">
                  <div className="px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white flex items-center gap-1 shadow">
                    <span className={`w-1.5 h-1.5 rounded-full ${reel.bg}`} />
                    {reel.stats}
                  </div>

                  {isCenter && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20 text-white hover:bg-black/80 transition shadow"
                      title={isMuted ? "Unmute Sound" : "Mute Sound"}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
                    </button>
                  )}
                </div>
              </div>

              {/* Right Action Rail (Instagram Reels Style) */}
              <div className="absolute bottom-14 right-3 z-20 flex flex-col items-center gap-3.5 pointer-events-auto">
                {/* Like Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(reel.id);
                  }}
                  className="flex flex-col items-center gap-0.5 group focus:outline-none"
                  title="Like Reel"
                >
                  <div
                    className={`w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border flex items-center justify-center transition-all ${
                      isLiked
                        ? 'border-rose-500 text-rose-500 bg-rose-500/20 scale-110 shadow-[0_0_15px_rgba(244,63,94,0.6)]'
                        : 'border-white/20 text-white group-hover:scale-110'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </div>
                  <span className="text-[10px] font-bold text-white drop-shadow">
                    {isLiked ? 'Liked' : reel.likes}
                  </span>
                </button>

                {/* Comment Button */}
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="flex flex-col items-center gap-0.5 group focus:outline-none"
                  title="Comments"
                >
                  <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:scale-110 transition">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-white drop-shadow">{reel.comments}</span>
                </button>

                {/* Share Button */}
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="flex flex-col items-center gap-0.5 group focus:outline-none"
                  title="Share"
                >
                  <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:scale-110 transition">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-white drop-shadow">{reel.shares}</span>
                </button>

                {/* Spinning Vinyl Audio Disc */}
                <div className="mt-1 relative flex items-center justify-center">
                  <div
                    className={`w-8 h-8 rounded-full border-2 border-white/40 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center shadow-lg ${
                      isCenter ? 'animate-spin' : ''
                    }`}
                    style={{ animationDuration: '4s' }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 border border-black" />
                  </div>
                  <Music className="w-2.5 h-2.5 text-white absolute -top-1 -right-1" />
                </div>
              </div>

              {/* Bottom Left Content / Profile / Caption / Audio Ticker */}
              <div className="absolute bottom-3 left-3 right-16 z-20 flex flex-col gap-1.5 text-left pointer-events-none">
                {/* Profile row */}
                <div className="flex items-center gap-2 pointer-events-auto">
                  <div className="w-7 h-7 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-md">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[10px] font-black text-white">
                      S
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-white drop-shadow">snackzmedia</span>
                    <span className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full border border-white/30 text-[9px] font-semibold text-white/90 backdrop-blur-sm">
                    Follow
                  </span>
                </div>

                {/* Reel Caption */}
                <p className="text-[11px] text-white/95 font-medium leading-snug line-clamp-2 drop-shadow">
                  <span className="font-bold mr-1">{reel.title}</span> — {reel.description}
                </p>

                {/* Audio Ticker */}
                <div className="flex items-center gap-1.5 text-[10px] text-white/80 drop-shadow mt-0.5">
                  <Music className="w-3 h-3 text-white flex-shrink-0" />
                  <span className="truncate">{reel.song}</span>
                </div>
              </div>

              {/* Bottom Playback Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30 pointer-events-none">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-rose-400 transition-all duration-150"
                  style={{ width: `${isCenter ? progress : 0}%` }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-[-36px] left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-slate-900/90 border border-slate-700 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-lg active:scale-95"
          title="Previous Reel"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2 items-center">
          {REELS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setProgress(0);
                setCurrentIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 w-7 shadow-[0_0_12px_rgba(59,130,246,0.8)]'
                  : 'bg-slate-700 hover:bg-slate-600 w-2'
              }`}
              title={`Reel ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-slate-900/90 border border-slate-700 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-lg active:scale-95"
          title="Next Reel"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
