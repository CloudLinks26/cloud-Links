'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Users,
  Tag,
  IndianRupee,
  ShoppingBag,
  Zap,
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Flag,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Lightbulb,SearchCheck,
  Code2,
  Rocket,
  TrendingUp,
  Award,
  Star,
  Quote,Building2,Link2 , Share2, Wallet,
  CheckCircle,
  ExternalLink,
  Lock,
} from 'lucide-react';

export default function AboutContent() {
  // Stats counter animation on scroll
  const [hasScrolledToStats, setHasScrolledToStats] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const [creatorCount, setCreatorCount] = useState(0);
  const [campaignCount, setCampaignCount] = useState(0);
  const [earningCount, setEarningCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasScrolledToStats(true);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasScrolledToStats) return;

    let start: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);

      setCreatorCount(Math.floor(progress * 10000));
      setCampaignCount(Math.floor(progress * 500));
      setEarningCount(Math.floor(progress * 10));
      setOrderCount(Math.floor(progress * 50));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasScrolledToStats]);

  const scrollToStory = () => {
    const storySection = document.getElementById('our-story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F5F0E8] min-h-screen text-[#1A3C34] overflow-x-hidden font-sans">
      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 1 — CINEMATIC HERO                                                 */}
      {/* -------------------------------------------------------------------------- */}
      <section className="relative pt-32 pb-24 lg:pt-36 lg:pb-32 bg-[#1A3C34] text-white overflow-hidden">
        {/* Massive background rupee symbol */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#C89B2A]/[0.04] font-black text-[320px] sm:text-[450px] pointer-events-none select-none z-0">
          ₹
        </div>

        {/* Decorative Gold Dot Grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B2A_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none z-0" />

        {/* Soft teal arcs on edges */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#234D42]/40 blur-3xl pointer-events-none z-0" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#C89B2A]/10 blur-3xl pointer-events-none z-0" />

        {/* Diagonal Gold Dashed SVG Line */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0"
            y1="20%"
            x2="100%"
            y2="80%"
            stroke="#C89B2A"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          {/* India Flag Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C89B2A]/20 border border-[#C89B2A]/40 text-[#C89B2A] text-xs font-black uppercase tracking-wider shadow-sm">
            <span>🇮🇳</span>
            <span>Built in India. Built for India.</span>
          </div>

          {/* Giant Bold Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display leading-[1.1] max-w-6xl mx-auto tracking-tight">
            Brand Recommendations Deserve <br className="hidden sm:inline" />
       
            <span className="text-[#C89B2A] underline decoration-[#C89B2A]/40 underline-offset-8">
            Something in Return.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-xl text-[#E8E2D6]/90 max-w-2xl mx-auto leading-relaxed font-normal">
            CloudsLink is an affiliate marketing platform that makes it easier to share products, discover great offers and earn from the recommendations you make.

          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://analytics.trackier.io/register.html"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-sm transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Join CloudLinks Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
           
          </div>

          {/* Scroll Down Bouncing Indicator */}
          <div className="pt-10 flex justify-center">
            <button
              onClick={scrollToStory}
              className="p-2 text-[#C89B2A] hover:text-white transition-colors animate-bounce cursor-pointer"
              aria-label="Scroll to story"
            >
              
            </button>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 2 — LIVE IMPACT STATS                                              */}
      {/* -------------------------------------------------------------------------- */}
      <section ref={statsRef} className="py-12 bg-[#FDFAF4] border-y border-[#E8E2D6] relative shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E8E2D6]">
            {/* Stat 1 */}
            <div className="p-4 text-center space-y-2 flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-2xl bg-[#1A3C34]/10 text-[#C89B2A] flex items-center justify-center">
                <Users className="w-6 h-6 text-[#C89B2A]" />
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold font-display text-[#1A3C34]">
                {hasScrolledToStats ? `${creatorCount.toLocaleString()}+` : '10,000+'}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#6B6355]">Active Creators</div>
            </div>

            {/* Stat 2 */}
            <div className="p-4 text-center space-y-2 flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-2xl bg-[#1A3C34]/10 text-[#C89B2A] flex items-center justify-center">
                <Tag className="w-6 h-6 text-[#C89B2A]" />
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold font-display text-[#1A3C34]">
                {hasScrolledToStats ? `${campaignCount}+` : '500+'}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#6B6355]">Brand Campaigns</div>
            </div>

            {/* Stat 3 */}
            <div className="p-4 text-center space-y-2 flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-2xl bg-[#1A3C34]/10 text-[#C89B2A] flex items-center justify-center">
                <IndianRupee className="w-6 h-6 text-[#C89B2A]" />
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold font-display text-[#C89B2A]">
                {hasScrolledToStats ? `₹${earningCount}Cr+` : '₹10Cr+'}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#6B6355]">Paid to Creators</div>
            </div>

            {/* Stat 4 */}
            <div className="p-4 text-center space-y-2 flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-2xl bg-[#1A3C34]/10 text-[#C89B2A] flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-[#C89B2A]" />
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold font-display text-[#1A3C34]">
                {hasScrolledToStats ? `${orderCount}L+` : '50L+'}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#6B6355]">Orders Tracked</div>
            </div>

            {/* Stat 5 */}
            <div className="p-4 text-center space-y-2 flex flex-col items-center justify-center col-span-2 md:col-span-1">
              <div className="w-12 h-12 rounded-2xl bg-[#1A3C34]/10 text-[#C89B2A] flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#C89B2A]" />
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold font-display text-[#1A3C34]">
                Instant
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#6B6355]">Payout Speed</div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 3 — OUR STORY (SPLIT SECTION)                                     */}
      {/* -------------------------------------------------------------------------- */}
      <section id="our-story" className="py-20 bg-[#F5F0E8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side — Visual */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#E8E2D6] bg-[#FDFAF4] p-3 shadow-xl group">
                <div className="relative rounded-2xl overflow-hidden h-96">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                    alt="CloudLinks Founders Working"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                </div>

          
              </div>
            </div>

            {/* Right Side — Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#C89B2A] bg-[#C89B2A]/10 px-3 py-1 rounded-full border border-[#C89B2A]/30">
                  <span>📖</span>
                  <span>Our Story</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1A3C34]">
                  What <span className="text-[#C89B2A]">We Do</span>
                </h2>
                <div className="w-20 h-1.5 bg-[#C89B2A] rounded-full" />
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#6B6355] leading-relaxed font-medium">
                <p>
                  We connect people with brands and offers they may genuinely find useful — while giving businesses a way to reach new customers.

                </p>
                <p>
                  Choose a brand you want to recommend, get your unique link, share it wherever permitted and earn when your recommendation leads to a qualifying action.

                </p>
                <p>
                  Simple to share. Simple to track. Simple to earn.

                </p>
              </div>

             
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 4 — OUR MISSION & VISION                                          */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-[#EDE8DC] relative overflow-hidden border-t border-[#E8E2D6]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
    
    {/* Header Section */}
    <div className="text-center max-w-3xl mx-auto space-y-4">
      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C89B2A]/15 text-[#8A6615] text-xs font-bold uppercase tracking-wider border border-[#C89B2A]/30">
        <Sparkles className="w-3.5 h-3.5" />
        CloudLinks Ecosystem
      </span>
      <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1A3C34] tracking-tight">
        What We Do
      </h2>
      <p className="text-base sm:text-lg text-[#6B6355] font-medium leading-relaxed">
        We connect people with brands and offers they may genuinely find useful — while giving businesses a way to reach new customers.
      </p>
    </div>

    {/* Workflow Process Flow */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
      
      {/* Step 1 */}
      <div className="bg-[#FDFAF4] rounded-3xl p-8 border border-[#E8E2D6] shadow-md hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-[#C89B2A]/15 border border-[#C89B2A]/30 text-[#C89B2A] flex items-center justify-center font-bold text-lg">
              <Link2 className="w-6 h-6 text-[#C89B2A]" />
            </div>
            <span className="text-3xl font-black text-[#C89B2A]/30 font-display">01</span>
          </div>
          <h3 className="text-xl font-bold text-[#1A3C34] font-display">
            Select Brand & Link
          </h3>
          <p className="text-sm text-[#6B6355] leading-relaxed">
            Choose a brand you want to recommend, get your unique link,
          </p>
        </div>
        <div className="pt-4 border-t border-dashed border-[#E8E2D6]">
          <span className="text-xs font-bold tracking-wider uppercase text-[#9D761D]">
            Simple to share.
          </span>
        </div>
      </div>

      {/* Step 2 */}
      <div className="bg-[#FDFAF4] rounded-3xl p-8 border border-[#E8E2D6] shadow-md hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-[#1A3C34]/15 border border-[#1A3C34]/30 text-[#1A3C34] flex items-center justify-center font-bold text-lg">
              <Share2 className="w-6 h-6 text-[#1A3C34]" />
            </div>
            <span className="text-3xl font-black text-[#1A3C34]/20 font-display">02</span>
          </div>
          <h3 className="text-xl font-bold text-[#1A3C34] font-display">
            Share Recommendation
          </h3>
          <p className="text-sm text-[#6B6355] leading-relaxed">
            share it wherever permitted
          </p>
        </div>
        <div className="pt-4 border-t border-dashed border-[#E8E2D6]">
          <span className="text-xs font-bold tracking-wider uppercase text-[#1A3C34]">
            Simple to track.
          </span>
        </div>
      </div>

      {/* Step 3 */}
      <div className="bg-[#FDFAF4] rounded-3xl p-8 border border-[#E8E2D6] shadow-md hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-[#C89B2A]/15 border border-[#C89B2A]/30 text-[#C89B2A] flex items-center justify-center font-bold text-lg">
              <Wallet className="w-6 h-6 text-[#C89B2A]" />
            </div>
            <span className="text-3xl font-black text-[#C89B2A]/30 font-display">03</span>
          </div>
          <h3 className="text-xl font-bold text-[#1A3C34] font-display">
            Earn On Qualifying Actions
          </h3>
          <p className="text-sm text-[#6B6355] leading-relaxed">
            and earn when your recommendation leads to a qualifying action.
          </p>
        </div>
        <div className="pt-4 border-t border-dashed border-[#E8E2D6]">
          <span className="text-xs font-bold tracking-wider uppercase text-[#9D761D]">
            Simple to earn.
          </span>
        </div>
      </div>

    </div>

    {/* Dual Audience Section */}
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#1A3C34]">
          Built for People. Built for Brands.
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* For Individuals Card */}
        <div className="bg-[#FDFAF4] rounded-3xl p-8 sm:p-10 border border-[#E8E2D6] shadow-lg flex flex-col justify-between space-y-6 relative overflow-hidden group">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#C89B2A]/15 border border-[#C89B2A]/30 text-[#9D761D] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-[#1A3C34]">
              For Individuals
            </h4>
            <p className="text-base text-[#6B6355] leading-relaxed">
              For individuals, CloudsLink provides access to products and offers worth sharing.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E8E2D6]/80 flex items-center gap-2 text-xs font-bold text-[#9D761D] tracking-wide">
            <span>INDIVIDUAL CREATORS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* For Businesses Card */}
        <div className="bg-[#1A3C34] text-white rounded-3xl p-8 sm:p-10 border border-[#1A3C34] shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C89B2A]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#FDFAF4]/10 border border-[#FDFAF4]/20 text-[#C89B2A] flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-[#FDFAF4]">
              For Businesses
            </h4>
            <p className="text-base text-[#EDE8DC]/80 leading-relaxed">
              For businesses, it creates opportunities to reach relevant customers through people and platforms they already trust.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-[#C89B2A] tracking-wide relative z-10">
            <span>ENTERPRISE & BRANDS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

      </div>

      {/* Summary Footer Bar */}
      <div className="bg-[#FDFAF4]/60 border border-[#E8E2D6] rounded-2xl p-4 text-center">
        <p className="text-sm sm:text-base font-semibold text-[#1A3C34]">
          It's a simple connection that works both ways.
        </p>
      </div>
    </div>

  </div>
</section>


<section className="py-20 sm:py-28 bg-[#1A3C34] relative overflow-hidden border-t border-[#1A3C34]/20">
  {/* Subtle Star Decoration from image_0.png */}
  <div className="absolute top-1/2 -right-8 w-16 h-16 opacity-10 rotate-12 text-[#FDFAF4]">
    <Star className="w-full h-full fill-current" />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
    
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto space-y-4">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDFAF4]/10 text-[#C89B2A] text-xs font-bold uppercase tracking-wider border border-[#FDFAF4]/20">
        Our Approach
      </span>
      <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#FDFAF4] tracking-tight">
        Earning Online <span className="text-[#C89B2A]">Simplified.</span>
      </h2>
      <p className="text-base sm:text-lg text-[#EDE8DC] font-medium leading-relaxed max-w-2xl mx-auto">
        We believe earning online shouldn't have to feel complicated. That's why we're focused on keeping CloudsLink simple, transparent and easy to use from finding an offer to tracking your earnings.
      </p>
    </div>

    {/* Key Principles Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      
      {/* Principle 1 */}
      <div className="bg-[#FDFAF4]/5 border border-[#FDFAF4]/10 rounded-2xl p-6 space-y-3 group hover:bg-[#FDFAF4]/10 transition-colors">
        <Sparkles className="w-10 h-10 text-[#C89B2A] mx-auto opacity-80 group-hover:opacity-100" />
        <h3 className="text-lg font-bold text-[#FDFAF4] font-display">
          Share what matters.
        </h3>
      </div>

      {/* Principle 2 */}
      <div className="bg-[#FDFAF4]/5 border border-[#FDFAF4]/10 rounded-2xl p-6 space-y-3 group hover:bg-[#FDFAF4]/10 transition-colors">
        <SearchCheck className="w-10 h-10 text-[#C89B2A] mx-auto opacity-80 group-hover:opacity-100" />
        <h3 className="text-lg font-bold text-[#FDFAF4] font-display">
          Discover what fits.
        </h3>
      </div>

      {/* Principle 3 */}
      <div className="bg-[#FDFAF4]/5 border border-[#FDFAF4]/10 rounded-2xl p-6 space-y-3 group hover:bg-[#FDFAF4]/10 transition-colors">
        <TrendingUp className="w-10 h-10 text-[#C89B2A] mx-auto opacity-80 group-hover:opacity-100" />
        <h3 className="text-lg font-bold text-[#FDFAF4] font-display">
          Earn along the way.
        </h3>
      </div>

    </div>

    {/* Call to Action Buttons (Inspired by image_0.png layout) */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center pt-8">
      
      {/* Primary CTA: Join (Solid gold) */}
      <a href="https://analytics.trackier.io/register.html" className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-[#C89B2A] text-[#1A3C34] font-bold text-base hover:bg-[#C89B2A]/90 transition-all shadow-md group">
        Join CloudsLink
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>

      

    </div>

  </div>
</section>

      
      

    </div>
  );
};
