import React, { useState } from 'react';
import { X, Lock, Mail, User, Phone, Zap, ArrowRight } from 'lucide-react';
import type { AuthMode } from '../types';

interface AuthModalProps {
  mode: AuthMode;
  onClose: () => void;
  onSuccess: (user: { name: string; email: string }) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ mode, onClose, onSuccess }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(
    mode === 'register' ? 'register' : 'login'
  );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  if (!mode) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameToPass = activeTab === 'register' ? (fullName || 'User') : (email.split('@')[0] || 'Member');
    onSuccess({
      name: nameToPass,
      email: email || 'user@snackzmedia.com'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 grid grid-cols-1 md:grid-cols-12 my-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Visual Agency Banner (as in Wireframe image) */}
        <div className="hidden md:flex md:col-span-5 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 p-8 text-white flex-col justify-between relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-blue-100 border border-white/20">
              <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>SNACKZ PORTAL</span>
            </div>
            
            <h3 className="text-3xl font-black leading-tight">
              Creative Marketing Solutions for Real Business Growth
            </h3>

            <p className="text-blue-100 text-sm font-medium leading-relaxed">
              Access campaign reports, automation triggers, content schedules, and direct agency communication.
            </p>
          </div>

          <div className="relative z-10 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
            <div className="text-xs font-bold text-blue-200">Trusted By 50+ Brands</div>
            <div className="text-lg font-black text-white mt-0.5">100% Growth Oriented</div>
          </div>
        </div>

        {/* Right Form Container */}
        <div className="md:col-span-7 p-6 sm:p-10 space-y-6">
          
          {/* Tabs header */}
          <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-2xl">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                activeTab === 'login'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sign In
            </button>

            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                activeTab === 'register'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Create Account
            </button>
          </div>

          <div>
            <h3 className="text-2xl font-black text-slate-900">
              {activeTab === 'login' ? 'Welcome Back' : 'Create Your Account'}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1">
              {activeTab === 'login'
                ? 'Sign in to access your Snackz Media client portal.'
                : 'Get started with Snackz Media & Marketing.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {activeTab === 'register' && (
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-semibold focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-semibold focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>
            </div>

            {activeTab === 'register' && (
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-semibold focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold uppercase text-slate-700">
                  Password
                </label>
                {activeTab === 'login' && (
                  <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset link sent to your email!"); }} className="text-xs font-bold text-blue-600 hover:underline">
                    Forgot Password?
                  </a>
                )}
              </div>
              <div className="relative">
                <Lock className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-semibold focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>{activeTab === 'login' ? 'Login to Portal' : 'Create My Account'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

        </div>

      </div>
    </div>
  );
};
