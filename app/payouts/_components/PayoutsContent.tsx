'use client';
import React, { useState } from 'react';
import Link from 'next/link';
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
  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Mock withdrawal simulation state inside the dashboard mockup
  const [withdrawStatus, setWithdrawStatus] = useState<'idle' | 'success'>('idle');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
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
    q: 'Is There a Minimum Withdrawal Amount?',
    a: 'Yes. The minimum withdrawal amount on CloudsLink is ₹5,000. Once your available balance reaches the minimum threshold and your earnings are eligible for withdrawal, you can request a payout directly to your registered bank account.',
  },
  {
    q: 'Are There Any Hidden Fees or Deductions?',
    a: "No. CloudsLink does not charge withdrawal fees. The amount you’re eligible to withdraw is paid to your registered bank account without hidden platform or transfer charges.",
  },
  {
    q: 'What If My Payout Fails?',
    a: 'If you experience an issue with your payout, our support team can help you identify the problem and guide you through the next steps. For payout-related assistance, email internal@analyticsclouds.com.',
  }
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
            Share. Convert.  <br />
            <span className="text-[#C89B2A] font-display">Earn.</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[#6B6355] font-medium max-w-xl mx-auto leading-relaxed">
           Turn the clicks and conversions you generate into real earnings with CloudsLink. Promote trusted brands, track your performance, and access your approved commissions without unnecessary waiting. 

          </p>

          {/* Trust Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#1A3C34]/30 bg-white/60 text-[#1A3C34] text-xs font-extrabold">
              <CheckCircle2 className="w-4 h-4 text-[#2D7A4F]" /> Fast Payouts
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#1A3C34]/30 bg-white/60 text-[#1A3C34] text-xs font-extrabold">
              <Zap className="w-4 h-4 text-[#C89B2A]" /> Secure Payments 
            </span>
           
          </div>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
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
          </div> */}
        </div>
      </section>




    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
  {/* Header Section */}
  <div className="text-center max-w-2xl mx-auto space-y-3">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
      Choose How You Get Paid
    </h2>
    <p className="text-sm sm:text-base text-[#6B6355] font-medium leading-relaxed">
      Get your CloudsLink earnings through a convenient payout method that works for you. We make accessing your commissions simple, secure, and hassle-free.
    </p>
  </div>

  {/* Centered Single Payout Card */}
  <div className="max-w-md mx-auto">
    <div className="bg-[#FDFAF4] rounded-2xl border-t-4 border-t-[#C89B2A] border-x border-b border-[#E8E2D6] p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4 group">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center shadow-xs">
            <Landmark className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider bg-[#2D7A4F] text-white">
            ⚡ Instant
          </span>
        </div>

        <h3 className="font-extrabold text-xl text-[#1A3C34]">
          Bank Transfer (NEFT/IMPS)
        </h3>

        <p className="text-sm text-[#6B6355] leading-relaxed">
          Transfer your eligible earnings directly to your bank account using NEFT or IMPS.
        </p>
      </div>

      <div className="pt-4 border-t border-[#E8E2D6] space-y-2 text-xs sm:text-sm font-semibold">
        <div className="flex items-center gap-2 text-[#1A3C34]">
          <Clock className="w-4 h-4 text-[#C89B2A] shrink-0" />
          <span>Fast Processing: Typically completed within minutes</span>
        </div>
        <div className="flex items-center gap-2 text-[#2D7A4F]">
          <Check className="w-4 h-4 shrink-0" />
          <span>₹ Zero Fees: No additional payout charges</span>
        </div>
      </div>
    </div>
  </div>
</section>


     
   <section className="my-16 bg-[#1A3C34] text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
  <div className="max-w-7xl mx-auto space-y-12 text-center">
    
    {/* Header */}
    <div className="space-y-3 max-w-2xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
        How to Withdraw Your Earnings
      </h2>
      <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
        Getting your affiliate commissions from CloudsLink is simple. Once your earnings are confirmed and available for withdrawal, you can request a direct transfer to your bank account.
      </p>
      <div className="w-16 h-1 bg-[#C89B2A] mx-auto rounded-full mt-2" />
    </div>

    {/* Steps Grid */}
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
          Share affiliate links from your chosen brands and earn commissions when your referrals complete eligible purchases, downloads, sign-ups, or other qualifying actions.
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
          Check Your Dashboard
        </h3>
        <p className="text-xs text-[#6B6355] leading-relaxed">
          Log in to your CloudsLink dashboard to view your earnings, monitor confirmed commissions, and check your available withdrawal balance.
        </p>
      </div>

      {/* Step 3 */}
      <div className="bg-[#FDFAF4] text-[#1A3C34] rounded-2xl p-6 shadow-md space-y-3 relative">
        <span className="text-xs font-black bg-[#C89B2A] text-[#1A3C34] px-2.5 py-0.5 rounded-md inline-block">
          03
        </span>
        <div className="w-12 h-12 rounded-xl bg-[#1A3C34]/10 flex items-center justify-center">
          <Landmark className="w-6 h-6 text-[#C89B2A]" />
        </div>
        <h3 className="font-extrabold text-base text-[#1A3C34]">
          Request a Withdrawal
        </h3>
        <p className="text-xs text-[#6B6355] leading-relaxed">
          Once your balance is eligible for withdrawal, submit a payout request through your CloudsLink dashboard. Make sure your bank details are accurate and up to date.
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
          Receive Your Payment
        </h3>
        <p className="text-xs text-[#6B6355] leading-relaxed">
          After your withdrawal request is processed, your earnings are transferred directly to your registered bank account through a secure bank transfer.
        </p>
      </div>

    </div>

    {/* Footer Tagline */}
    <div className="pt-4 text-center">
      <p className="text-sm sm:text-base font-bold text-[#C89B2A] tracking-wide">
        Earn from your links. Track your commissions. Get paid directly into your bank account.
      </p>
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
          Keep a clear view of your affiliate performance with the CloudsLink dashboard. Monitor your earnings, conversions, and transactions from one convenient place.
        </p>

        <ul className="space-y-3">
          {[
            'Live Earnings Updates',
            'Complete Transaction History',
            'Click & Conversion Insights',
            'Easy Withdrawal Requests',
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-extrabold text-[#1A3C34]">
              <div className="w-5 h-5 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-[#C89B2A]" />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>

    
      </div>

      {/* Right Side UI Mockup Card */}
      <div className="lg:col-span-6 bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-md space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E8E2D6] pb-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#1A3C34] text-[#C89B2A] font-black flex items-center justify-center text-xs">
              CL
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
        

      </div>

    </div>
  </div>
</section>


      {/* =================================================================== */}
      {/* SECTION 7 — PAYOUT TRUST SIGNALS                                    */}
      {/* =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
  {/* Header Section */}
  <div className="text-center max-w-2xl mx-auto space-y-3">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
      Why Creators Choose CloudsLink for Payouts
    </h2>
    <p className="text-sm sm:text-base text-[#6B6355] font-medium leading-relaxed">
      We make getting paid straightforward, secure, and transparent, so you can focus on growing your affiliate earnings.
    </p>
  </div>

  {/* Feature Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    
    {/* Card 1 */}
    <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs space-y-3">
      <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center shadow-xs">
        <ShieldCheck className="w-6 h-6" />
      </div>
      <h3 className="font-extrabold text-lg text-[#1A3C34]">
        Secure Payments
      </h3>
      <p className="text-xs text-[#6B6355] leading-relaxed">
        Your payout information and transactions are protected with strong security measures designed to keep your financial details safe.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs space-y-3">
      <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center shadow-xs">
        <Zap className="w-6 h-6" />
      </div>
      <h3 className="font-extrabold text-lg text-[#1A3C34]">
        Fast Processing
      </h3>
      <p className="text-xs text-[#6B6355] leading-relaxed">
        Get your eligible earnings processed quickly through our reliable payout system, so you don't have to deal with unnecessary delays.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs space-y-3">
      <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center shadow-xs">
        <IndianRupee className="w-6 h-6" />
      </div>
      <h3 className="font-extrabold text-lg text-[#1A3C34]">
        No Hidden Charges
      </h3>
      <p className="text-xs text-[#6B6355] leading-relaxed">
        Keep more of what you earn. CloudsLink keeps the payout process transparent, with no unexpected transfer or gateway deductions.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs space-y-3">
      <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center shadow-xs">
        <Headphones className="w-6 h-6" />
      </div>
      <h3 className="font-extrabold text-lg text-[#1A3C34]">
        Dedicated Payout Support
      </h3>
      <p className="text-xs text-[#6B6355] leading-relaxed">
        Have a question about your payment? Our support team is available to help resolve payout-related concerns and guide you through the process.
      </p>
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
              <Link
                href="/campaigns"
                className="px-10 py-4 rounded-2xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-base transition-all shadow-lg inline-flex items-center gap-2"
              >
                <span>Sign Up Free & Start Earning</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
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
