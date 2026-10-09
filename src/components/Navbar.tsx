import React, { useState, useEffect } from 'react';
import { Menu, X, User, ArrowRight } from 'lucide-react';
import type { AuthMode } from '../types';
import { MagneticButton } from './MagneticButton';
import logo from '../assets/snackz-logo.png';

interface NavbarProps {
  onOpenAuth: (mode: AuthMode) => void;
  onOpenCheckout: () => void;
  user: { name: string; email: string } | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAuth,
  onOpenCheckout,
  user,
  onLogout
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      const sections = ['home', 'services', 'industries', 'about', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Industries', href: '#industries', id: 'industries' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-4 sm:px-6 lg:px-8 ${isScrolled ? 'pt-4' : 'pt-6'
      }`}>
      <div className={`mx-auto flex items-center justify-between transition-all duration-500 ${isScrolled
        ? 'max-w-7xl bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-blue-900/20 border border-slate-800 rounded-full py-3 px-6 lg:px-8'
        : 'max-w-7xl bg-transparent py-2 px-4 lg:px-8'
        }`}>

        {/* Brand Logo */}
        <a href="#home" className="flex items-center group">
          <img
            src={logo}
            alt="Snackz Media Logo"
            className="h-12 sm:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-200 drop-shadow-[0_0_15px_rgba(0,198,255,0.4)]"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-[11px] font-black uppercase tracking-[0.1em] transition-colors duration-300 py-2 ${isActive
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_8px_rgba(0,198,255,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons & Auth */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-blue-950/80 px-3 py-1.5 rounded-full border border-blue-800">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-xs font-bold text-white">{user.name.split(' ')[0]}</span>
              </div>
              <button
                onClick={onLogout}
                className="text-xs font-bold text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => onOpenAuth('login')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
            >
              <User className="w-4 h-4 text-cyan-400" />
              <span>Login</span>
            </button>
          )}

          <MagneticButton
            strength={30}
            onClick={onOpenCheckout}
            className="group relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-extrabold tracking-wide text-black transition-all duration-300 bg-white rounded-full hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenCheckout}
            className="px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-sm"
          >
            Get Started
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F172A]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-bold transition-colors ${activeSection === link.id
                  ? 'bg-blue-600/30 text-cyan-400 font-extrabold border border-blue-500/30'
                  : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              {user ? (
                <div className="flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <span className="font-semibold text-white">{user.name}</span>
                  <button onClick={onLogout} className="text-xs font-bold text-red-400">
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth('login');
                  }}
                  className="w-full py-2.5 border border-slate-700 rounded-xl text-center font-bold text-slate-300 hover:bg-slate-800"
                >
                  Sign In / Register
                </button>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCheckout();
                }}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center font-bold rounded-xl shadow-lg shadow-blue-500/25"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
