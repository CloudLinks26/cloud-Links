'use client';
import React, { useState } from 'react';
import { useGlobalContext } from '@/components/GlobalProvider';
import {
  Zap,
  IndianRupee,
  Landmark,
  Users,
  Smartphone,
  Wallet,
  CreditCard,
  Globe,
  FileText,
  CheckCircle2,
  BarChart2,
  ShieldCheck,
  Headphones,
  Star,
  Plus,
  Minus,
  ArrowRight,
  Lock,
  Check,
  Sparkles,
  Clock
} from 'lucide-react';

export default function PayoutsContent() {
  const { onOpenAuth, onOpenLinkGen } = useGlobalContext();
  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Mock withdrawal simulation state inside the dashboard mockup
  const [withdrawStatus, setWithdrawStatus] = useState<'idle' | 'success'>('idle');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleAuthClick = (mode: 'signup' | 'login' = 'signup') => {
    if (onOpenAuth) {
      onOpenAuth(mode);
    }
  };

  // Payout Methods List
  const payoutMethods = [
    {
      id: 'upi',
      name: 'UPI',
      icon: Smartphone,
      badge: 'Instant',
      badgeType: 'instant', // green
      description: 'Transfer directly to any UPI ID — GPay, PhonePe, Paytm UPI, BHIM',
      processingTime: 'Within seconds',
      fee: 'Zero fees',
    },
    {
      id: 'bank',
      name: 'Bank Transfer (NEFT/IMPS)',
      icon: Landmark,
      badge: 'Instant',
      badgeType: 'instant', // green
      description: 'Direct transfer to your bank account via IMPS/NEFT',
      processingTime: 'Within minutes',
      fee: 'Zero fees',
    },
    {
      id: 'paytm',
      name: 'Paytm Wallet',
      icon: Wallet,
      badge: 'Instant',
      badgeType: 'instant', // green
      description: 'Transfer to your Paytm wallet instantly',
      processingTime: 'Within seconds',
      fee: 'Zero fees',
    },
    {
      id: 'razorpay',
      name: 'Razorpay',
      icon: CreditCard,
      badge: 'Fast',
      badgeType: 'fast', // gold
      description: 'Receive payouts via Razorpay to your bank or wallet',
      processingTime: 'Within hours',
      fee: 'Zero fees',
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: Globe,
      badge: 'International',
      badgeType: 'intl', // teal
      description: 'For international creators — receive in USD or INR',
      processingTime: '1–2 business days',
      fee: 'Zero platform fees',
    },
    {
      id: 'cheque',
      name: 'Cheque',
      icon: FileText,
      badge: 'Traditional',
      badgeType: 'muted', // muted
      description: 'Physical cheque mailed to your registered address',
      processingTime: '5–7 business days',
      fee: 'Zero fees',
    },
  ];

  // Table Data
  const tableRows = [
    { method: 'UPI', time: 'Instant', min: '₹0', fee: 'Free', status: 'Available' },
    { method: 'Bank Transfer (IMPS)', time: 'Instant', min: '₹0', fee: 'Free', status: 'Available' },
    { method: 'Paytm Wallet', time: 'Instant', min: '₹0', fee: 'Free', status: 'Available' },
    { method: 'Razorpay', time: 'Within hours', min: '₹0', fee: 'Free', status: 'Available' },
    { method: 'PayPal', time: '1–2 days', min: '₹0', fee: 'Free', status: 'Available' },
    { method: 'Cheque', time: '5–7 days', min: '₹0', fee: 'Free', status: 'Available' },
  ];

  // FAQs
  const faqs = [
    {
      q: 'Is there really no minimum withdrawal amount?',
      a: 'Yes! You can withdraw any amount — even ₹1. We believe your earnings belong to you, always.',
    },
    {
      q: 'How fast is the UPI payout?',
      a: 'UPI payouts are processed instantly — usually within 5–10 seconds of your request.',
    },
    {
      q: 'Are there any hidden fees or deductions?',
      a: 'Absolutely none. LinkX charges zero fees on withdrawals. You keep 100% of what you earn.',
    },
    {
      q: 'Can I have multiple payout methods saved?',
      a: 'Yes, you can save multiple payout methods in your dashboard and choose one at the time of withdrawal.',
    },
    {
      q: 'What if my payout fails?',
      a: 'Failed payouts are automatically retried. If the issue persists, our payout support team resolves it within 24 hours.',
    },
    {
      q: 'Is PayPal available for Indian creators?',
      a: 'Yes! Indian creators can receive in INR via PayPal. International creators can receive in USD.',
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F5F0E8] min-h-screen text-[#1A3C34] font-sans selection:bg-[#C89B2A]/20">
      
      {/* =================================================================== */}
      {/* SECTION 1 — HERO HEADER                                             */}
      {/* =================================================================== */}
      <section className="relative pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Faint Dot Grid Pattern */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#1A3C34 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Floating Rupee Icons Background Accents */}
        <div className="absolute top-10 left-10 text-[#C89B2A] opacity-20 pointer-events-none text-4xl font-black">
          ₹
        </div>
        <div className="absolute bottom-12 left-1/4 text-[#C89B2A] opacity-15 pointer-events-none text-5xl font-black">
          ₹
        </div>
        <div className="absolute top-16 right-16 text-[#C89B2A] opacity-25 pointer-events-none text-6xl font-black">
          ₹
        </div>
        <div className="absolute bottom-16 right-1/3 text-[#1A3C34] opacity-10 pointer-events-none text-3xl font-black">
          ₹
        </div>

        {/* Teal Arc Shapes Left/Right */}
        <div className="hidden lg:block absolute -left-20 top-1/3 w-40 h-40 rounded-full border-4 border-[#1A3C34]/15 pointer-events-none" />
        <div className="hidden lg:block absolute -right-20 top-1/4 w-48 h-48 rounded-full border-4 border-[#C89B2A]/20 pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C89B2A]/15 border border-[#C89B2A]/30 text-[#1A3C34] text-xs font-extrabold uppercase tracking-wider shadow-2xs">
            <Zap className="w-4 h-4 text-[#C89B2A]" />
            <span>Instant Payouts — No Waiting</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1A3C34] leading-tight">
            Get Paid. <br />
            <span className="text-[#C89B2A] font-display">Instantly.</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[#6B6355] font-medium max-w-xl mx-auto leading-relaxed">
            No minimum balance. No waiting period. Withdraw your earnings anytime, instantly.
          </p>

          {/* Trust Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#1A3C34]/30 bg-white/60 text-[#1A3C34] text-xs font-extrabold">
              <CheckCircle2 className="w-4 h-4 text-[#2D7A4F]" /> No Minimum Withdrawal
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#1A3C34]/30 bg-white/60 text-[#1A3C34] text-xs font-extrabold">
              <Zap className="w-4 h-4 text-[#C89B2A]" /> Instant Transfer
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#1A3C34]/30 bg-white/60 text-[#1A3C34] text-xs font-extrabold">
              <Lock className="w-4 h-4 text-[#1A3C34]" /> 100% Secure
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleAuthClick('signup')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Withdraw Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#dashboard-mockup"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl border-2 border-[#1A3C34] text-[#1A3C34] hover:bg-[#1A3C34] hover:text-white font-extrabold text-sm transition-all flex items-center justify-center"
            >
              View Earnings Dashboard
            </a>
          </div>
        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 2 — KEY PAYOUT STATS BAR                                   */}
      {/* =================================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-8">
        <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#E8E2D6]">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 first:pt-0 pl-0 md:pl-4">
              <div className="p-3 bg-[#1A3C34]/10 rounded-xl text-[#C89B2A] flex-shrink-0">
                <Zap className="w-6 h-6 text-[#C89B2A]" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#1A3C34] block leading-none">Instant</span>
                <span className="text-xs text-[#6B6355] font-semibold">Payout Speed</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 pl-0 md:pl-6">
              <div className="p-3 bg-[#1A3C34]/10 rounded-xl text-[#C89B2A] flex-shrink-0">
                <IndianRupee className="w-6 h-6 text-[#C89B2A]" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#1A3C34] block leading-none">₹0</span>
                <span className="text-xs text-[#6B6355] font-semibold">Minimum Withdrawal</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 pl-0 md:pl-6">
              <div className="p-3 bg-[#1A3C34]/10 rounded-xl text-[#C89B2A] flex-shrink-0">
                <Landmark className="w-6 h-6 text-[#C89B2A]" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#1A3C34] block leading-none">6+</span>
                <span className="text-xs text-[#6B6355] font-semibold">Payout Methods</span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 pl-0 md:pl-6">
              <div className="p-3 bg-[#1A3C34]/10 rounded-xl text-[#C89B2A] flex-shrink-0">
                <Users className="w-6 h-6 text-[#C89B2A]" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#1A3C34] block leading-none">10,000+</span>
                <span className="text-xs text-[#6B6355] font-semibold">Creators Paid</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 3 — PAYOUT METHODS                                         */}
      {/* =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            Choose How You Get Paid
          </h2>
          <p className="text-sm text-[#6B6355] font-medium">
            Multiple payout options — pick what works best for you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {payoutMethods.map((pm) => {
            const IconComp = pm.icon;

            // Badge styling logic
            let badgeClass = 'bg-[#C89B2A] text-[#1A3C34]';
            if (pm.badgeType === 'instant') badgeClass = 'bg-[#2D7A4F] text-white';
            if (pm.badgeType === 'intl') badgeClass = 'bg-[#1A3C34] text-white';
            if (pm.badgeType === 'muted') badgeClass = 'bg-[#6B6355]/20 text-[#6B6355]';

            return (
              <div
                key={pm.id}
                className="bg-[#FDFAF4] rounded-2xl border-t-4 border-t-[#C89B2A] border-x border-b border-[#E8E2D6] p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center shadow-xs">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${badgeClass}`}>
                      {pm.badge === 'Instant' ? `⚡ ${pm.badge}` : pm.badge}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-lg text-[#1A3C34]">
                    {pm.name}
                  </h3>

                  <p className="text-xs text-[#6B6355] leading-relaxed">
                    {pm.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8E2D6] space-y-1.5 text-xs font-semibold">
                  <div className="flex items-center gap-1.5 text-[#1A3C34]">
                    <Clock className="w-3.5 h-3.5 text-[#C89B2A]" />
                    <span>Processing: {pm.processingTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#2D7A4F]">
                    <Check className="w-3.5 h-3.5" />
                    <span>Fee: {pm.fee}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 4 — HOW TO WITHDRAW (STEP FLOW)                             */}
      {/* =================================================================== */}
      <section className="my-16 bg-[#1A3C34] text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-7xl mx-auto space-y-12 text-center">
          
          <div className="space-y-3 max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              How to Withdraw
            </h2>
            <div className="w-16 h-1 bg-[#C89B2A] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left relative">
            
            {/* Step 1 */}
            <div className="bg-[#FDFAF4] text-[#1A3C34] rounded-2xl p-6 shadow-md space-y-3 relative">
              <span className="text-xs font-black bg-[#C89B2A] text-[#1A3C34] px-2.5 py-0.5 rounded-md inline-block">
                01
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#1A3C34]/10 flex items-center justify-center">
                <BarChart2 className="w-6 h-6 text-[#C89B2A]" />
              </div>
              <h3 className="font-extrabold text-base text-[#1A3C34]">
                Earn Commissions
              </h3>
              <p className="text-xs text-[#6B6355] leading-relaxed">
                Promote brands and earn commission on every successful sale or download.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#FDFAF4] text-[#1A3C34] rounded-2xl p-6 shadow-md space-y-3 relative">
              <span className="text-xs font-black bg-[#C89B2A] text-[#1A3C34] px-2.5 py-0.5 rounded-md inline-block">
                02
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#1A3C34]/10 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-[#C89B2A]" />
              </div>
              <h3 className="font-extrabold text-base text-[#1A3C34]">
                Go to Dashboard
              </h3>
              <p className="text-xs text-[#6B6355] leading-relaxed">
                Open your LinkX earnings dashboard to view your confirmed balance.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#FDFAF4] text-[#1A3C34] rounded-2xl p-6 shadow-md space-y-3 relative">
              <span className="text-xs font-black bg-[#C89B2A] text-[#1A3C34] px-2.5 py-0.5 rounded-md inline-block">
                03
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#1A3C34]/10 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-[#C89B2A]" />
              </div>
              <h3 className="font-extrabold text-base text-[#1A3C34]">
                Choose Method
              </h3>
              <p className="text-xs text-[#6B6355] leading-relaxed">
                Pick UPI, bank transfer, Paytm, or any preferred withdrawal channel.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#FDFAF4] text-[#1A3C34] rounded-2xl p-6 shadow-md space-y-3 relative border-2 border-[#C89B2A]">
              <span className="text-xs font-black bg-[#2D7A4F] text-white px-2.5 py-0.5 rounded-md inline-block">
                04
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#2D7A4F]/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#2D7A4F]" />
              </div>
              <h3 className="font-extrabold text-base text-[#1A3C34]">
                Done!
              </h3>
              <p className="text-xs text-[#6B6355] leading-relaxed">
                Money lands in your bank or UPI account instantly within seconds.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 5 — PAYOUT TRANSPARENCY TABLE                              */}
      {/* =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            Payout Breakdown — No Hidden Fees
          </h2>
          <p className="text-sm text-[#6B6355] font-medium">
            What you earn is exactly what you get. Always.
          </p>
        </div>

        <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#1A3C34] text-white text-xs uppercase tracking-wider font-extrabold">
                  <th className="py-4 px-6">Payout Method</th>
                  <th className="py-4 px-4">Processing Time</th>
                  <th className="py-4 px-4">Minimum Amount</th>
                  <th className="py-4 px-4">Fees</th>
                  <th className="py-4 px-6 text-center">Available</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E2D6] text-sm font-medium">
                {tableRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-[#FDFAF4]' : 'bg-[#F5F0E8]/50'}
                  >
                    <td className="py-4 px-6 font-extrabold text-[#1A3C34]">
                      {row.method}
                    </td>
                    <td className="py-4 px-4 font-bold text-[#C89B2A]">
                      {row.time}
                    </td>
                    <td className="py-4 px-4 font-black text-base text-[#1A3C34]">
                      {row.min}
                    </td>
                    <td className="py-4 px-4 font-bold text-[#2D7A4F]">
                      {row.fee}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#2D7A4F]/15 text-[#2D7A4F]">
                        <Check className="w-4 h-4 font-extrabold" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 6 — EARNINGS DASHBOARD MOCKUP                               */}
      {/* =================================================================== */}
      <section id="dashboard-mockup" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#EDE8DC] rounded-3xl border border-[#E8E2D6] p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C89B2A]/20 text-[#1A3C34] text-xs font-extrabold uppercase">
                <BarChart2 className="w-3.5 h-3.5 text-[#C89B2A]" />
                <span>Real-Time Tracking</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34] leading-tight">
                Track Every Rupee You Earn
              </h2>

              <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed">
                Your LinkX dashboard shows live earnings, pending payouts, conversion rates, and full transaction history — all in one place.
              </p>

              <ul className="space-y-3">
                {[
                  'Live earnings counter updates in real-time',
                  'Full transaction history with dates',
                  'Click and conversion analytics',
                  'Instant payout request with one click',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-extrabold text-[#1A3C34]">
                    <div className="w-5 h-5 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#C89B2A]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => handleAuthClick('signup')}
                  className="px-8 py-4 rounded-2xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-sm transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span>View Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Side UI Mockup Card */}
            <div className="lg:col-span-6 bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-md space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#E8E2D6] pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#1A3C34] text-[#C89B2A] font-black flex items-center justify-center text-xs">
                    LX
                  </div>
                  <span className="font-extrabold text-sm text-[#1A3C34]">My Earnings</span>
                </div>
                <span className="text-[10px] font-extrabold bg-[#2D7A4F]/15 text-[#2D7A4F] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D7A4F] animate-pulse" />
                  Live Sync
                </span>
              </div>

              {/* 3 Stat Rows */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-[#F5F0E8] rounded-xl border border-[#E8E2D6]">
                  <span className="text-[11px] text-[#6B6355] font-semibold block">Total Earned</span>
                  <span className="text-base sm:text-xl font-black text-[#C89B2A]">₹85,420</span>
                </div>
                <div className="p-3 bg-[#F5F0E8] rounded-xl border border-[#E8E2D6]">
                  <span className="text-[11px] text-[#6B6355] font-semibold block">Available</span>
                  <span className="text-base sm:text-xl font-black text-[#2D7A4F]">₹32,430</span>
                </div>
                <div className="p-3 bg-[#F5F0E8] rounded-xl border border-[#E8E2D6]">
                  <span className="text-[11px] text-[#6B6355] font-semibold block">Pending</span>
                  <span className="text-base sm:text-xl font-black text-[#6B6355]">₹12,990</span>
                </div>
              </div>

              {/* Simple CSS Bar Chart for Last 6 Months */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs font-bold text-[#6B6355]">
                  <span>Last 6 Months Earnings</span>
                  <span className="text-[#1A3C34]">₹85,420 Total</span>
                </div>

                <div className="h-28 bg-[#1A3C34]/5 rounded-xl p-3 flex items-end justify-between gap-2 border border-[#E8E2D6]">
                  {[
                    { month: 'Oct', val: 40 },
                    { month: 'Nov', val: 55 },
                    { month: 'Dec', val: 70 },
                    { month: 'Jan', val: 60 },
                    { month: 'Feb', val: 85 },
                    { month: 'Mar', val: 100 },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div
                        style={{ height: `${bar.val}%` }}
                        className={`w-full rounded-t-md transition-all ${
                          i === 5 ? 'bg-[#C89B2A]' : 'bg-[#1A3C34]/70'
                        }`}
                      />
                      <span className="text-[10px] font-extrabold text-[#6B6355]">{bar.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Withdraw CTA Button inside Card */}
              {withdrawStatus === 'idle' ? (
                <button
                  onClick={() => setWithdrawStatus('success')}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-colors shadow-2xs flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Withdraw ₹32,430 Now</span>
                </button>
              ) : (
                <div className="w-full py-3 px-4 rounded-xl bg-[#2D7A4F] text-white font-extrabold text-xs text-center flex items-center justify-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>₹32,430 Transferred to UPI ID!</span>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 7 — PAYOUT TRUST SIGNALS                                    */}
      {/* =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            Why Creators Trust LinkX Payouts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-[#1A3C34]">
              100% Secure
            </h3>
            <p className="text-xs text-[#6B6355] leading-relaxed">
              Bank-grade encryption on all payout transactions and stored credentials.
            </p>
          </div>

          <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center shadow-xs">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-[#1A3C34]">
              Always Instant
            </h3>
            <p className="text-xs text-[#6B6355] leading-relaxed">
              UPI and wallet payouts process in seconds, 24x7 including weekends.
            </p>
          </div>

          <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center shadow-xs">
              <IndianRupee className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-[#1A3C34]">
              Zero Deductions
            </h3>
            <p className="text-xs text-[#6B6355] leading-relaxed">
              What you earn is what you receive — no hidden transfer or gateway fees.
            </p>
          </div>

          <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center shadow-xs">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-[#1A3C34]">
              Payout Support
            </h3>
            <p className="text-xs text-[#6B6355] leading-relaxed">
              Dedicated support team to resolve any payout queries within hours.
            </p>
          </div>
        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 8 — CREATOR PAYOUT STORIES                                  */}
      {/* =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            Real Creators. Real Payments.
          </h2>
          <p className="text-sm text-[#6B6355] font-medium">
            See what our creators say about getting paid
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Testimonial 1 */}
          <div className="bg-[#FDFAF4] rounded-2xl border-t-4 border-t-[#C89B2A] border-x border-b border-[#E8E2D6] p-7 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C89B2A] text-[#C89B2A]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed italic">
                "I requested a payout at 11 PM and it was in my account by midnight. Genuinely instant — no joke."
              </p>
            </div>

            <div className="pt-4 border-t border-[#E8E2D6] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1A3C34] text-white font-extrabold flex items-center justify-center text-sm shadow-2xs">
                  PS
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#1A3C34]">Priya Sharma</h4>
                  <span className="text-[11px] text-[#6B6355] font-medium block">Mumbai • Instagram Creator</span>
                </div>
              </div>
              <span className="text-[11px] font-black bg-[#C89B2A]/20 text-[#1A3C34] px-2.5 py-1 rounded-full">
                Withdrawn ₹28,000 last mo
              </span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[#FDFAF4] rounded-2xl border-t-4 border-t-[#C89B2A] border-x border-b border-[#E8E2D6] p-7 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C89B2A] text-[#C89B2A]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed italic">
                "No minimum withdrawal means I can take out even ₹50 if I want. That's real trust."
              </p>
            </div>

            <div className="pt-4 border-t border-[#E8E2D6] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1A3C34] text-white font-extrabold flex items-center justify-center text-sm shadow-2xs">
                  RV
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#1A3C34]">Rahul Verma</h4>
                  <span className="text-[11px] text-[#6B6355] font-medium block">Delhi • YouTube Creator</span>
                </div>
              </div>
              <span className="text-[11px] font-black bg-[#C89B2A]/20 text-[#1A3C34] px-2.5 py-1 rounded-full">
                Withdrawn ₹15,000 last mo
              </span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-[#FDFAF4] rounded-2xl border-t-4 border-t-[#C89B2A] border-x border-b border-[#E8E2D6] p-7 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C89B2A] text-[#C89B2A]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed italic">
                "6 payout methods is unheard of in affiliate marketing. I use UPI and it's always instant."
              </p>
            </div>

            <div className="pt-4 border-t border-[#E8E2D6] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1A3C34] text-white font-extrabold flex items-center justify-center text-sm shadow-2xs">
                  SK
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#1A3C34]">Sneha Kapoor</h4>
                  <span className="text-[11px] text-[#6B6355] font-medium block">Bangalore • Blogger</span>
                </div>
              </div>
              <span className="text-[11px] font-black bg-[#C89B2A]/20 text-[#1A3C34] px-2.5 py-1 rounded-full">
                Withdrawn ₹42,000 last mo
              </span>
            </div>
          </div>

        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 9 — FAQ ACCORDION                                           */}
      {/* =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            Payout <span className="text-[#C89B2A]">FAQs</span>
          </h2>
        </div>

        <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-4 sm:p-6 shadow-xs divide-y divide-[#E8E2D6]">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="py-4 first:pt-2 last:pb-2">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left font-extrabold text-base text-[#1A3C34] flex items-center justify-between gap-4 py-2 focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <div className="w-7 h-7 rounded-full bg-[#1A3C34]/10 text-[#C89B2A] flex items-center justify-center flex-shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-2 text-xs sm:text-sm text-[#6B6355] leading-relaxed font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 10 — BOTTOM CTA BANNER                                      */}
      {/* =================================================================== */}
      <section className="my-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative bg-[#1A3C34] text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl overflow-hidden">
          
          {/* Subtle Dotted Pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#C89B2A 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Start Earning. Withdraw Instantly.
            </h2>

            <p className="text-sm sm:text-base text-[#F5F0E8]/90 font-medium">
              Join 10,000+ creators who get paid on their terms — no waiting, no minimums.
            </p>

            <div>
              <button
                onClick={() => handleAuthClick('signup')}
                className="px-10 py-4 rounded-2xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-base transition-all shadow-lg inline-flex items-center gap-2"
              >
                <span>Sign Up Free & Start Earning</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-[#F5F0E8]/80 pt-2">
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#C89B2A]" />
                Instant Payouts
              </span>
              <span>|</span>
              <span className="flex items-center gap-1.5">
                <IndianRupee className="w-4 h-4 text-[#C89B2A]" />
                No Minimum
              </span>
              <span>|</span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#C89B2A]" />
                Secure & Safe
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
