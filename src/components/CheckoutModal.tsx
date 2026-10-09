import React, { useState } from 'react';
import { X, CreditCard, ShieldCheck, CheckCircle2, AlertCircle, ArrowLeft, RefreshCw, Lock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { CheckoutStep } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<CheckoutStep>('payment');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'netbanking'>('card');
  const [simulateFailure, setSimulateFailure] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Form Fields
  const [cardNumber, setCardNumber] = useState('4242 4242 4242 4242');
  const [expiry, setExpiry] = useState('12/28');
  const [cvv, setCvv] = useState('384');
  const [cardName, setCardName] = useState('PRANEETH REDDY');

  if (!isOpen) return null;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (simulateFailure) {
        setStep('failure');
      } else {
        setStep('success');
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (err) {
          console.log(err);
        }
      }
    }, 1500);
  };

  const handleReset = () => {
    setStep('payment');
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-6">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg">Secure Payment Checkout</h3>
              <p className="text-xs text-blue-300">256-Bit SSL Encrypted Transaction</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: PAYMENT FORM */}
        {step === 'payment' && (
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Order Summary Box */}
            <div className="bg-blue-50/80 p-5 rounded-2xl border border-blue-100 flex items-center justify-between">
              <div>
                <div className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">Order Summary</div>
                <div className="text-base font-black text-slate-900">Monthly Partnership Plan</div>
                <div className="text-xs text-slate-600 font-medium">Premium Content & Brand Presence</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-blue-600">Premium</div>
                <div className="text-[11px] font-bold text-slate-500">Tier</div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase text-slate-700">Select Payment Method</label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center gap-1.5 ${
                    paymentMethod === 'card'
                      ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Card / Debit</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center gap-1.5 ${
                    paymentMethod === 'upi'
                      ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Sparkles className="w-5 h-5" />
                  <span>UPI / GPay</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center gap-1.5 ${
                    paymentMethod === 'netbanking'
                      ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <ShieldCheck className="w-5 h-5" />
                  <span>Net Banking</span>
                </button>
              </div>
            </div>

            {/* Payment Form */}
            <form onSubmit={handlePay} className="space-y-4">
              {paymentMethod === 'card' && (
                <>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Card Number</label>
                    <input
                      type="text"
                      required
                      value={cardNumber}
                      onChange={e => setCardNumber(e.target.value)}
                      placeholder="4242 4242 4242 4242"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-mono text-sm font-semibold focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Expiry Date</label>
                      <input
                        type="text"
                        required
                        value={expiry}
                        onChange={e => setExpiry(e.target.value)}
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-semibold focus:outline-none focus:border-blue-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">CVV Code</label>
                      <input
                        type="password"
                        required
                        maxLength={4}
                        value={cvv}
                        onChange={e => setCvv(e.target.value)}
                        placeholder="•••"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-semibold focus:outline-none focus:border-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Cardholder Name</label>
                    <input
                      type="text"
                      required
                      value={cardName}
                      onChange={e => setCardName(e.target.value)}
                      placeholder="Name on card"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-semibold focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                </>
              )}

              {paymentMethod === 'upi' && (
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
                  <div className="text-sm font-bold text-slate-800">Scan QR or enter UPI ID</div>
                  <input
                    type="text"
                    placeholder="username@upi / gpay"
                    defaultValue="snackzmedia@upi"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-center font-bold text-sm"
                  />
                  <p className="text-xs text-slate-500">Supports GPay, PhonePe, Paytm & BHIM</p>
                </div>
              )}

              {paymentMethod === 'netbanking' && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <label className="block text-xs font-bold uppercase text-slate-700">Select Bank</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white font-bold text-sm">
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>State Bank of India (SBI)</option>
                    <option>Axis Bank</option>
                  </select>
                </div>
              )}

              {/* Simulation Toggle for User UI Verification */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="font-semibold">Simulate Payment Failure Screen:</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={simulateFailure}
                    onChange={e => setSimulateFailure(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-black text-base rounded-2xl shadow-xl shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Processing Payment...</span>
                  </>
                ) : (
                  <>
                    <span>Proceed & Confirm</span>
                    <ShieldCheck className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

          </div>
        )}

        {/* STEP 2: PAYMENT SUCCESSFUL (Matches Wireframe Image 1) */}
        {step === 'success' && (
          <div className="p-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 animate-bounce-subtle">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-1">
              <h3 className="text-3xl font-black text-slate-900">Success!</h3>
              <p className="text-slate-600 text-sm font-medium">
                Your request has been successfully completed.
              </p>
            </div>

            {/* Receipt Breakdown Card */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-left space-y-3 text-sm">
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-500 font-medium">Order ID</span>
                <span className="font-mono font-bold text-slate-900">#SNKZ-2026-8414</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-500 font-medium">Status</span>
                <span className="font-bold text-emerald-600">Confirmed</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-500 font-medium">Payment Method</span>
                <span className="font-bold text-slate-800">Credit Card (**** 4242)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Date & Time</span>
                <span className="font-bold text-slate-800">09 Oct 2026, 01:15 PM</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  setStep('payment');
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-lg shadow-blue-500/25 transition-colors"
              >
                Back to Home
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3.5 border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold rounded-2xl"
              >
                Test Again
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: PAYMENT FAILED (Matches Wireframe Image 1) */}
        {step === 'failure' && (
          <div className="p-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 mx-auto rounded-full bg-red-100 text-red-600 flex items-center justify-center shadow-lg shadow-red-500/20">
              <AlertCircle className="w-12 h-12" />
            </div>

            <div className="space-y-1">
              <h3 className="text-3xl font-black text-slate-900">Payment Failed!</h3>
              <p className="text-slate-600 text-sm font-medium">
                Something went wrong with your transaction. Please try again.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-2xl border border-red-200 text-red-800 text-xs font-semibold">
              Error Code: ERR_CARD_DECLINED_DEMO • Insufficient authorization.
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Try Again</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3.5 border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold rounded-2xl"
              >
                Contact Support
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
