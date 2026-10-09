import React from 'react';
import { ArrowUp } from 'lucide-react';
import { InstagramIcon, FacebookIcon, LinkedinIcon, YoutubeIcon, WhatsappIcon } from './SocialIcons';
import logo from '../assets/snackzmediaLOGO (2).png';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040711] text-white pt-16 pb-8 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Info (Cols 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center group">
              <img 
                src={logo} 
                alt="Snackz Media Logo" 
                className="h-12 sm:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,198,255,0.2)]" 
              />
            </a>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              We help brands grow with powerful content, smart automation, video production, and performance-driven digital marketing.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: <InstagramIcon className="w-4 h-4" />, href: '#', label: 'Instagram' },
                { icon: <FacebookIcon className="w-4 h-4" />, href: '#', label: 'Facebook' },
                { icon: <WhatsappIcon className="w-4 h-4" />, href: '#', label: 'WhatsApp' },
                { icon: <YoutubeIcon className="w-4 h-4" />, href: '#', label: 'YouTube' },
                { icon: <LinkedinIcon className="w-4 h-4" />, href: '#', label: 'LinkedIn' }
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase text-blue-400 tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400 font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#growth" className="hover:text-white transition-colors">Growth System</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Monthly Partnership</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase text-blue-400 tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400 font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Business Automation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Instagram & WhatsApp API</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Video Production & Editing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Content & Storytelling</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Meta Ads & Retargeting</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase text-blue-400 tracking-wider">Contact Info</h4>
            <div className="space-y-2 text-sm text-slate-400 font-medium">
              <div>Phone: +91 74160-40436</div>
              <div>Email: snackzmediaus@gmail.com</div>
              <div>Location: Hyderabad, India</div>
              <div className="pt-2 text-xs text-blue-300 font-bold">24/7 Client Support Active</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-semibold">
          <div>
            © 2026 Snackz Media & Marketing. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Privacy Policy: Snackz Media & Marketing ensures 100% data confidentiality."); }} className="hover:text-slate-300">Privacy Policy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Terms of Service: Standard partnership agreement applies."); }} className="hover:text-slate-300">Terms of Service</a>
            
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
