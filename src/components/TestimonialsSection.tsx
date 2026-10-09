import React from 'react';
import { Star, Quote, TrendingUp } from 'lucide-react';
import { AnimatedSection, MotionGrid, MotionCard } from './AnimatedSection';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Rohan Sharma',
      role: 'Founder, EcoLuxe Lifestyle',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      text: 'Snackz Media completely revamped our Instagram presence. Their 4K reels and automated WhatsApp lead bot generated over 150 qualified customer leads in our first month alone!',
      result: '+320% Revenue',
      rating: 5
    },
    {
      name: 'Dr. Ananya Verma',
      role: 'Head Surgeon, Apex Dental Clinic',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      text: 'The missed-call WhatsApp auto responder is a lifesaver. Patients who call after clinic hours automatically receive our appointment booking link on WhatsApp.',
      result: '850+ Consultations',
      rating: 5
    },
    {
      name: 'Vikram Reddy',
      role: 'Managing Director, Horizon Realty',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      text: 'Their video shoots are cinematic level. They filmed walkthroughs of our luxury villas and ran Meta ads that brought in serious high-net-worth buyers.',
      result: '5.4x Meta ROAS',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#0B0F19] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-cyan-300 text-xs font-extrabold uppercase tracking-wider">
            CLIENT SUCCESS STORIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Fast-Growing Brands
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            Hear directly from business owners who scaled their audience and leads with Snackz Media.
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <MotionGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <MotionCard key={idx}>
              <div className="bg-slate-900/90 p-8 rounded-3xl border border-slate-800 shadow-xl hover:shadow-2xl hover:border-blue-500/50 hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between h-full relative group">
                
                <Quote className="w-10 h-10 text-blue-900/60 absolute top-6 right-6 pointer-events-none" />

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-cyan-400"
                    />
                    <div>
                      <h4 className="font-extrabold text-white text-sm">{t.name}</h4>
                      <p className="text-slate-400 text-xs">{t.role}</p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-blue-950 text-cyan-300 border border-blue-800 text-xs font-black flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {t.result}
                  </span>
                </div>

              </div>
            </MotionCard>
          ))}
        </MotionGrid>

      </div>
    </section>
  );
};
