import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon, LinkedinIcon, YoutubeIcon, WhatsappIcon } from './SocialIcons';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Business Automation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setIsSubmitting(true);

    try {
      // Replace YOUR_ACCESS_KEY_HERE with your Web3Forms access key
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // <-- Add your access key here
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service_requested: formData.service,
          message: formData.message,
          subject: 'New Lead from Snackz Media Website!'
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            service: 'Business Automation',
            message: ''
          });
        }, 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0B0F19] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800 text-cyan-300 text-xs font-extrabold uppercase tracking-wider">
            REACH OUT TO US
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            Let's build something great together. Have a project in mind or want to automate your growth?
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Contact Details & Map Card */}
          <AnimatedSection direction="left" delay={0.1} className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900 border border-slate-800 text-white p-8 rounded-3xl shadow-2xl space-y-8 relative overflow-hidden">
              <div className="space-y-3">
                <h3 className="text-2xl font-black">Contact Information</h3>
                <p className="text-slate-400 text-sm">
                  Reach out to us directly via call, email, or WhatsApp. We reply within 2 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-950 border border-blue-800 flex items-center justify-center text-cyan-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone</div>
                    <a href="tel:+917416040436" className="text-base font-bold text-white hover:text-cyan-400 transition-colors">
                      +91 74160-40436
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-950 border border-blue-800 flex items-center justify-center text-cyan-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</div>
                    <a href="mailto:snackzmediaus@gmail.com" className="text-base font-bold text-white hover:text-cyan-400 transition-colors">
                      snackzmediaus@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-950 border border-blue-800 flex items-center justify-center text-cyan-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</div>
                    <div className="text-base font-bold text-white">
                      Hyderabad, Telangana, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-800 space-y-3">
                <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                  Follow Us
                </div>
                <div className="flex items-center gap-3">
                  {[
                    { icon: <InstagramIcon className="w-5 h-5" />, href: '#', label: 'Instagram' },
                    { icon: <FacebookIcon className="w-5 h-5" />, href: '#', label: 'Facebook' },
                    { icon: <WhatsappIcon className="w-5 h-5" />, href: '#', label: 'WhatsApp' },
                    { icon: <YoutubeIcon className="w-5 h-5" />, href: '#', label: 'YouTube' },
                    { icon: <LinkedinIcon className="w-5 h-5" />, href: '#', label: 'LinkedIn' }
                  ].map((soc, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ scale: 1.15, y: -2 }}
                      href={soc.href}
                      aria-label={soc.label}
                      className="w-10 h-10 rounded-xl bg-slate-950 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-800"
                    >
                      {soc.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Location Map Preview */}
            <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-md bg-slate-900 p-4 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-950 border border-blue-800 text-cyan-400 flex items-center justify-center shrink-0">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-sm">Our Location</h4>
                <p className="text-slate-400 text-xs">Hyderabad, India • Serving Clients Globally</p>
              </div>
            </div>

          </AnimatedSection>

          {/* Right Contact Form */}
          <AnimatedSection direction="right" delay={0.2} className="lg:col-span-7 bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
            <h3 className="text-2xl font-black text-white mb-2">Send Us a Message</h3>
            <p className="text-slate-300 text-sm mb-6 font-medium">
              Fill in your details below and our growth strategy lead will contact you.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="p-8 rounded-2xl bg-emerald-950/80 border border-emerald-800 text-center space-y-4"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-white">Message Sent Successfully!</h4>
                  <p className="text-emerald-200 text-sm max-w-md mx-auto">
                    Thank you for reaching out to Snackz Media & Marketing. We have received your request and will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 text-white text-sm font-semibold focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-blue-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 text-white text-sm font-semibold focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-blue-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 text-white text-sm font-semibold focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-blue-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                        Required Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 text-white text-sm font-semibold focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-blue-900"
                      >
                        <option value="Business Automation">Business Automation & WhatsApp</option>
                        <option value="Video Production">Video Production & Editing</option>
                        <option value="Content & Storytelling">Content & Storytelling</option>
                        <option value="Social Media & Ads">Social Media & Meta Ads</option>
                        <option value="Monthly Partnership">Monthly Partnership Plan</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your brand goals or queries..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 text-white text-sm font-semibold focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-blue-900"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 text-white font-black text-base rounded-2xl shadow-xl transition-all duration-200 flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'bg-blue-800 opacity-70 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-blue-600/30 cursor-pointer'
                    }`}
                  >
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                    {!isSubmitting && <Send className="w-5 h-5" />}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>

          </AnimatedSection>

        </div>

      </div>
    </section>
  );
};
