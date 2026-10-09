import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Users, Target, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

interface RoiCalculatorProps {
  onGetStarted: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onGetStarted }) => {
  // Input states
  const [monthlyBudget, setMonthlyBudget] = useState<number>(3000);
  const [avgCustomerValue, setAvgCustomerValue] = useState<number>(250);
  const [currentConversionRate, setCurrentConversionRate] = useState<number>(2.5);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Ecommerce');

  // Calculations
  // Estimated clicks/traffic based on budget ($2.00 avg CPC baseline)
  const estimatedVisits = Math.round(monthlyBudget / 1.8);
  
  // Standard leads vs Snacks Media Boosted leads (3.2x multiplier through optimized copy & automation)
  const standardLeads = Math.round((estimatedVisits * (currentConversionRate / 100)));
  const boostedConversionRate = Math.min(currentConversionRate * 2.8, 15);
  const boostedLeads = Math.round((estimatedVisits * (boostedConversionRate / 100)));

  // Revenue projections
  const currentRevenue = Math.round(standardLeads * avgCustomerValue);
  const projectedRevenue = Math.round(boostedLeads * avgCustomerValue);
  const estimatedRoi = Math.round(((projectedRevenue - monthlyBudget) / monthlyBudget) * 100);
  const netProfitIncrease = projectedRevenue - currentRevenue;

  return (
    <section id="roi-calculator" className="py-20 bg-[#0B0F19] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background glow graphics */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/80 text-cyan-300 text-xs sm:text-sm font-bold mb-4">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span>Interactive ROI Forecast</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">Growth Potential</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            See how Snackz Media Marketing’s content and automation system can scale your revenue, boost conversions, and maximize your return on ad spend.
          </p>
        </AnimatedSection>

        {/* Main Grid: Left Controls, Right Interactive Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <AnimatedSection className="lg:col-span-7 bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl backdrop-blur-xl space-y-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-400" />
                <span>Campaign Parameters</span>
              </h3>
              <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-blue-950 text-blue-300 border border-blue-800">
                Real-Time Simulation
              </span>
            </div>

            {/* Industry Selector */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-300 flex items-center justify-between">
                <span>Business Industry</span>
                <span className="text-xs text-slate-400">Customized multiplier</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Ecommerce', 'SaaS', 'Services / B2B', 'Food & Bev'].map((ind) => (
                  <button
                    key={ind}
                    type="button"
                    onClick={() => setSelectedIndustry(ind)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                      selectedIndustry === ind
                        ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-600/30'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Budget Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  Monthly Ad & Content Budget
                </label>
                <span className="text-lg font-black text-cyan-400">${monthlyBudget.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500}
                max={50000}
                step={500}
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-xs text-slate-500 font-medium">
                <span>$500/mo</span>
                <span>$25,000/mo</span>
                <span>$50,000/mo</span>
              </div>
            </div>

            {/* Customer Value Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-indigo-400" />
                  Average Customer Order / LTV Value
                </label>
                <span className="text-lg font-black text-indigo-300">${avgCustomerValue.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={50}
                max={5000}
                step={50}
                value={avgCustomerValue}
                onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-xs text-slate-500 font-medium">
                <span>$50</span>
                <span>$2,500</span>
                <span>$5,000</span>
              </div>
            </div>

            {/* Conversion Rate Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                  Current Website Conversion Rate
                </label>
                <span className="text-lg font-black text-blue-300">{currentConversionRate}%</span>
              </div>
              <input
                type="range"
                min={0.5}
                max={8.0}
                step={0.1}
                value={currentConversionRate}
                onChange={(e) => setCurrentConversionRate(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-xs text-slate-500 font-medium">
                <span>0.5% (Low)</span>
                <span>4.0% (Average)</span>
                <span>8.0% (High)</span>
              </div>
            </div>

          </AnimatedSection>

          {/* Results Column */}
          <AnimatedSection className="lg:col-span-5 bg-gradient-to-b from-blue-950/90 to-slate-950/95 rounded-3xl p-6 sm:p-8 border-2 border-blue-500/40 shadow-2xl space-y-6 relative">
            <div className="absolute top-4 right-4">
              <Sparkles className="w-6 h-6 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
            </div>

            <div className="border-b border-blue-900/60 pb-4">
              <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-300">Projected Monthly Impact</span>
              <h3 className="text-2xl font-black text-white mt-1">Snackz Media Results</h3>
            </div>

            {/* Highlighting Estimated Revenue */}
            <div className="bg-slate-900/80 rounded-2xl p-5 border border-blue-500/30 text-center space-y-2">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Estimated Monthly Revenue</div>
              <motion.div
                key={projectedRevenue}
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400"
              >
                ${projectedRevenue.toLocaleString()}
              </motion.div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/80">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+${netProfitIncrease.toLocaleString()} Net Revenue Lift</span>
              </div>
            </div>

            {/* Stats Breakdown */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400 font-medium">Estimated ROI</div>
                <div className="text-2xl font-black text-cyan-300 mt-1">+{estimatedRoi}%</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Return on investment</div>
              </div>

              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400 font-medium">Converted Leads</div>
                <div className="text-2xl font-black text-indigo-300 mt-1">{boostedLeads} / mo</div>
                <div className="text-[10px] text-slate-500 mt-0.5">vs {standardLeads} standard</div>
              </div>
            </div>

            {/* Features Included Note */}
            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60 text-xs text-slate-300 space-y-2">
              <div className="font-bold text-cyan-300 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                How we achieve this growth:
              </div>
              <ul className="space-y-1 pl-5 list-disc text-slate-400 text-xs">
                <li>High-converting video creative & copy optimization</li>
                <li>Automated lead follow-up flows & CRM integration</li>
                <li>Omnichannel ad targeting across Meta, Google & TikTok</li>
              </ul>
            </div>

            {/* Action CTA Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onGetStarted}
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base rounded-2xl shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>Unlock This Growth Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};
