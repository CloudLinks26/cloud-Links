'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useGlobalContext } from '@/components/GlobalProvider';
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
  Lightbulb,
  Code2,
  Rocket,
  TrendingUp,
  Award,
  Star,
  Quote,
  CheckCircle,
  ExternalLink,
  Lock,
} from 'lucide-react';

export default function AboutContent() {
  const { onOpenAuth } = useGlobalContext();
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
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display leading-[1.1] max-w-4xl mx-auto tracking-tight">
            We're on a Mission <br className="hidden sm:inline" />
            to Make Every Indian <br className="hidden sm:inline" />
            <span className="text-[#C89B2A] underline decoration-[#C89B2A]/40 underline-offset-8">
              Creator's Content Pay.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-xl text-[#E8E2D6]/90 max-w-2xl mx-auto leading-relaxed font-normal">
            LinkX was built with one belief — that every Indian with an audience, big or small, deserves to earn from their content. We're making that a reality for 10,000+ creators across India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenAuth('signup', 'creator')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-sm transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Join LinkX Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToStory}
              className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-white/30 text-white hover:bg-white/10 font-extrabold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Our Story</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Scroll Down Bouncing Indicator */}
          <div className="pt-10 flex justify-center">
            <button
              onClick={scrollToStory}
              className="p-2 text-[#C89B2A] hover:text-white transition-colors animate-bounce cursor-pointer"
              aria-label="Scroll to story"
            >
              <ChevronDown className="w-6 h-6" />
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
                    alt="LinkX Founders Working"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/90 via-[#1A3C34]/30 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="font-display font-black text-xl text-[#C89B2A]">LinkX HQ • New Delhi</span>
                    <span className="text-xs text-[#E8E2D6]">Building Bharat's Creator Economy Engine</span>
                  </div>
                </div>

                {/* Floating Gold Quote Bubble */}
                <div className="mt-4 p-5 rounded-2xl bg-[#1A3C34] text-white border border-[#C89B2A]/40 shadow-lg space-y-2">
                  <div className="flex items-center gap-2 text-[#C89B2A]">
                    <Quote className="w-5 h-5 flex-shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">Founders' Note</span>
                  </div>
                  <p className="text-xs sm:text-sm italic font-medium leading-relaxed text-[#E8E2D6]">
                    "We asked ourselves — why is it so hard for Indian creators to earn from their content? So we built LinkX to fix that."
                  </p>
                  <div className="text-[11px] font-bold text-[#C89B2A] pt-1">— LinkX Founders</div>
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
                  Born from a Simple <span className="text-[#C89B2A]">Frustration</span>
                </h2>
                <div className="w-20 h-1.5 bg-[#C89B2A] rounded-full" />
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#6B6355] leading-relaxed font-medium">
                <p>
                  In 2024, two Indian creators were frustrated. They had audiences, they had influence — but earning from it was complicated, unreliable, and full of friction. Payments were delayed, platforms were foreign, and Indian brands were hard to find in one place.
                </p>
                <p>
                  So they built LinkX. A platform designed specifically for Indian creators — with Indian brands, instant UPI payouts, a Hindi-friendly interface, and zero barriers to entry. No minimum followers. No approval wait. Just sign up and start earning.
                </p>
                <p>
                  Today, LinkX is home to 10,000+ creators across India — students, homemakers, influencers, bloggers, and YouTubers — all earning real income by sharing links to brands they love.
                </p>
              </div>

              {/* Milestone Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#E8E2D6]">
                <div className="px-4 py-2 rounded-xl bg-[#FDFAF4] border border-[#C89B2A] text-[#1A3C34] text-xs font-extrabold flex items-center gap-2 shadow-xs">
                  <span>🗓️</span>
                  <span>Founded: 2024</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-[#FDFAF4] border border-[#C89B2A] text-[#1A3C34] text-xs font-extrabold flex items-center gap-2 shadow-xs">
                  <span>🏢</span>
                  <span>HQ: New Delhi, India</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-[#FDFAF4] border border-[#C89B2A] text-[#1A3C34] text-xs font-extrabold flex items-center gap-2 shadow-xs">
                  <span>🚀</span>
                  <span>Launched: Jan 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 4 — OUR MISSION & VISION                                          */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-20 bg-[#EDE8DC] border-t border-[#E8E2D6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1A3C34]">
              What <span className="text-[#C89B2A]">Drives Us</span>
            </h2>
            <div className="w-16 h-1 bg-[#C89B2A] rounded-full mx-auto" />
            <p className="text-sm sm:text-base text-[#6B6355] font-medium pt-1">
              Building the foundational economic rail for India's digital creator workforce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-[#FDFAF4] rounded-3xl p-8 sm:p-10 border border-[#E8E2D6] border-t-4 border-t-[#C89B2A] shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-6 relative overflow-hidden group">
              <div className="w-16 h-16 rounded-2xl bg-[#C89B2A]/15 text-[#C89B2A] border border-[#C89B2A]/30 flex items-center justify-center shadow-xs">
                <Target className="w-8 h-8 text-[#C89B2A]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#C89B2A]">
                  OUR MISSION
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#1A3C34]">
                  Democratize Earning for Every Indian Creator
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#6B6355] leading-relaxed font-normal">
                We believe every Indian with a mobile phone and an audience deserves to earn. Our mission is to remove every barrier between a creator and their first rupee — no minimum followers, no fees, no complexity.
              </p>

              <div className="w-full border-b-2 border-dashed border-[#C89B2A]/40 pt-4" />
            </div>

            {/* Vision Card */}
            <div className="bg-[#FDFAF4] rounded-3xl p-8 sm:p-10 border border-[#E8E2D6] border-t-4 border-t-[#1A3C34] shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-6 relative overflow-hidden group">
              <div className="w-16 h-16 rounded-2xl bg-[#1A3C34]/15 text-[#1A3C34] border border-[#1A3C34]/30 flex items-center justify-center shadow-xs">
                <Eye className="w-8 h-8 text-[#1A3C34]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#1A3C34]">
                  OUR VISION
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#1A3C34]">
                  India's Most Trusted Creator Economy Platform
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#6B6355] leading-relaxed font-normal">
                We envision a future where every Indian creator — from a student in Patna to an influencer in Mumbai — earns consistently and confidently from their content. LinkX will be the platform that makes it happen.
              </p>

              <div className="w-full border-b-2 border-dashed border-[#1A3C34]/40 pt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 5 — OUR VALUES (UNIQUE VISUAL LAYOUT)                             */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-20 bg-[#1A3C34] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
              The Values We <span className="text-[#C89B2A]">Live By</span>
            </h2>
            <div className="w-16 h-1 bg-[#C89B2A] rounded-full mx-auto" />
            <p className="text-sm sm:text-base text-[#E8E2D6]/80 font-medium pt-1">
              These aren't just words on a wall — they guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Value 1 */}
            <div className="bg-[#234D42] rounded-2xl p-6 sm:p-8 space-y-4 border border-white/10 hover:border-t-4 hover:border-t-[#C89B2A] hover:-translate-y-1 transition-all duration-300 shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-[#1A3C34] text-[#C89B2A] border border-[#C89B2A]/30 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-white">Radical Transparency</h3>
              <p className="text-xs sm:text-sm text-[#E8E2D6]/80 leading-relaxed font-normal">
                No hidden fees. No surprise deductions. No fine print. What you earn is exactly what you receive.
              </p>
              <div className="w-12 h-1 bg-[#C89B2A] rounded-full pt-0.5" />
            </div>

            {/* Value 2 */}
            <div className="bg-[#234D42] rounded-2xl p-6 sm:p-8 space-y-4 border border-white/10 hover:border-t-4 hover:border-t-[#C89B2A] hover:-translate-y-1 transition-all duration-300 shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-[#1A3C34] text-[#C89B2A] border border-[#C89B2A]/30 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-white">Creator First, Always</h3>
              <p className="text-xs sm:text-sm text-[#E8E2D6]/80 leading-relaxed font-normal">
                Every product decision starts with one question: does this make life easier for our creators?
              </p>
              <div className="w-12 h-1 bg-[#C89B2A] rounded-full pt-0.5" />
            </div>

            {/* Value 3 */}
            <div className="bg-[#234D42] rounded-2xl p-6 sm:p-8 space-y-4 border border-white/10 hover:border-t-4 hover:border-t-[#C89B2A] hover:-translate-y-1 transition-all duration-300 shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-[#1A3C34] text-[#C89B2A] border border-[#C89B2A]/30 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-white">Speed is Respect</h3>
              <p className="text-xs sm:text-sm text-[#E8E2D6]/80 leading-relaxed font-normal">
                Instant payouts. Instant link generation. Instant approvals. We respect your time.
              </p>
              <div className="w-12 h-1 bg-[#C89B2A] rounded-full pt-0.5" />
            </div>

            {/* Value 4 */}
            <div className="bg-[#234D42] rounded-2xl p-6 sm:p-8 space-y-4 border border-white/10 hover:border-t-4 hover:border-t-[#C89B2A] hover:-translate-y-1 transition-all duration-300 shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-[#1A3C34] text-[#C89B2A] border border-[#C89B2A]/30 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-white">Everyone Belongs Here</h3>
              <p className="text-xs sm:text-sm text-[#E8E2D6]/80 leading-relaxed font-normal">
                500 followers or 5,00,000 — every creator is welcome, valued, and supported equally on LinkX.
              </p>
              <div className="w-12 h-1 bg-[#C89B2A] rounded-full pt-0.5" />
            </div>

            {/* Value 5 */}
            <div className="bg-[#234D42] rounded-2xl p-6 sm:p-8 space-y-4 border border-white/10 hover:border-t-4 hover:border-t-[#C89B2A] hover:-translate-y-1 transition-all duration-300 shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-[#1A3C34] text-[#C89B2A] border border-[#C89B2A]/30 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-white">Built on Trust</h3>
              <p className="text-xs sm:text-sm text-[#E8E2D6]/80 leading-relaxed font-normal">
                Trust is our currency. With creators, with brands, and with every rupee that flows through our platform.
              </p>
              <div className="w-12 h-1 bg-[#C89B2A] rounded-full pt-0.5" />
            </div>

            {/* Value 6 */}
            <div className="bg-[#234D42] rounded-2xl p-6 sm:p-8 space-y-4 border border-white/10 hover:border-t-4 hover:border-t-[#C89B2A] hover:-translate-y-1 transition-all duration-300 shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-[#1A3C34] text-[#C89B2A] border border-[#C89B2A]/30 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                <Flag className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-white">Proudly Indian</h3>
              <p className="text-xs sm:text-sm text-[#E8E2D6]/80 leading-relaxed font-normal">
                Built for Indian creators, featuring Indian brands, paying out in Indian rupees. LinkX is India's own.
              </p>
              <div className="w-12 h-1 bg-[#C89B2A] rounded-full pt-0.5" />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 6 — MEET THE TEAM                                                  */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-20 bg-[#F5F0E8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1A3C34]">
              The People Behind <span className="text-[#C89B2A]">LinkX</span>
            </h2>
            <div className="w-16 h-1 bg-[#C89B2A] rounded-full mx-auto" />
            <p className="text-sm sm:text-base text-[#6B6355] font-medium pt-1">
              A small but passionate team obsessed with creator success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 text-center space-y-4 shadow-md hover:-translate-y-1 hover:border-b-4 hover:border-b-[#C89B2A] hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 rounded-full bg-[#1A3C34] text-white font-extrabold text-2xl flex items-center justify-center mx-auto shadow-md border-2 border-[#C89B2A]">
                AK
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-extrabold text-lg text-[#1A3C34]">Arjun Kapoor</h3>
                <span className="text-xs font-bold text-[#C89B2A] uppercase tracking-wider block">Co-Founder & CEO</span>
              </div>
              <p className="text-xs text-[#6B6355] leading-relaxed font-medium">
                Ex-Flipkart. Obsessed with the Indian creator economy. Believes every Indian deserves to earn from their content.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2 text-[#1A3C34]">
                <a href="#linkedin" className="p-1.5 rounded-lg bg-[#F5F0E8] hover:bg-[#C89B2A] hover:text-[#1A3C34] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#twitter" className="p-1.5 rounded-lg bg-[#F5F0E8] hover:bg-[#C89B2A] hover:text-[#1A3C34] transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 text-center space-y-4 shadow-md hover:-translate-y-1 hover:border-b-4 hover:border-b-[#C89B2A] hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 rounded-full bg-[#C89B2A] text-[#1A3C34] font-extrabold text-2xl flex items-center justify-center mx-auto shadow-md border-2 border-[#1A3C34]">
                RS
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-extrabold text-lg text-[#1A3C34]">Rohit Sharma</h3>
                <span className="text-xs font-bold text-[#C89B2A] uppercase tracking-wider block">Co-Founder & CTO</span>
              </div>
              <p className="text-xs text-[#6B6355] leading-relaxed font-medium">
                Full-stack engineer. Built LinkX's real-time tracking engine from scratch. Coffee and code, in that order.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2 text-[#1A3C34]">
                <a href="#linkedin" className="p-1.5 rounded-lg bg-[#F5F0E8] hover:bg-[#C89B2A] hover:text-[#1A3C34] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#github" className="p-1.5 rounded-lg bg-[#F5F0E8] hover:bg-[#C89B2A] hover:text-[#1A3C34] transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 text-center space-y-4 shadow-md hover:-translate-y-1 hover:border-b-4 hover:border-b-[#C89B2A] hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 rounded-full bg-[#1A3C34] text-white font-extrabold text-2xl flex items-center justify-center mx-auto shadow-md border-2 border-[#C89B2A]">
                PS
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-extrabold text-lg text-[#1A3C34]">Priya Singh</h3>
                <span className="text-xs font-bold text-[#C89B2A] uppercase tracking-wider block">Head of Growth</span>
              </div>
              <p className="text-xs text-[#6B6355] leading-relaxed font-medium">
                Former YouTuber turned growth hacker. Grew LinkX from 0 to 10,000 creators in 6 months.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2 text-[#1A3C34]">
                <a href="#linkedin" className="p-1.5 rounded-lg bg-[#F5F0E8] hover:bg-[#C89B2A] hover:text-[#1A3C34] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#instagram" className="p-1.5 rounded-lg bg-[#F5F0E8] hover:bg-[#C89B2A] hover:text-[#1A3C34] transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 text-center space-y-4 shadow-md hover:-translate-y-1 hover:border-b-4 hover:border-b-[#C89B2A] hover:shadow-xl transition-all duration-300 group">
              <div className="w-20 h-20 rounded-full bg-[#C89B2A] text-[#1A3C34] font-extrabold text-2xl flex items-center justify-center mx-auto shadow-md border-2 border-[#1A3C34]">
                MG
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-extrabold text-lg text-[#1A3C34]">Meera Gupta</h3>
                <span className="text-xs font-bold text-[#C89B2A] uppercase tracking-wider block">Head of Brand Partnerships</span>
              </div>
              <p className="text-xs text-[#6B6355] leading-relaxed font-medium">
                Brings top Indian brands to LinkX. Ex-Nykaa. Negotiates the best commissions for our creators.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2 text-[#1A3C34]">
                <a href="#linkedin" className="p-1.5 rounded-lg bg-[#F5F0E8] hover:bg-[#C89B2A] hover:text-[#1A3C34] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#twitter" className="p-1.5 rounded-lg bg-[#F5F0E8] hover:bg-[#C89B2A] hover:text-[#1A3C34] transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 7 — JOURNEY TIMELINE                                               */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-20 bg-[#EDE8DC] border-t border-[#E8E2D6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1A3C34]">
              Our <span className="text-[#C89B2A]">Journey</span>
            </h2>
            <div className="w-16 h-1 bg-[#C89B2A] rounded-full mx-auto" />
            <p className="text-sm sm:text-base text-[#6B6355] font-medium pt-1">
              From a frustration to a platform — here's how we got here
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative py-6">
            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-dashed border-b-2 border-dashed border-[#C89B2A]/60 -translate-y-1/2 z-0" />

            {/* Milestones Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
              {/* Milestone 1 */}
              <div className="bg-[#FDFAF4] rounded-2xl p-5 border border-[#E8E2D6] shadow-md space-y-3 hover:scale-105 transition-transform flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#C89B2A] text-[#1A3C34] flex items-center justify-center font-bold shadow-xs">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold text-[#C89B2A] uppercase tracking-wider block">Jan 2024</span>
                  <h4 className="font-display font-extrabold text-base text-[#1A3C34]">The Idea</h4>
                  <p className="text-xs text-[#6B6355] leading-relaxed">
                    Two creators get frustrated with affiliate marketing in India. LinkX is born on a napkin sketch.
                  </p>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="bg-[#FDFAF4] rounded-2xl p-5 border border-[#E8E2D6] shadow-md space-y-3 hover:scale-105 transition-transform flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#1A3C34] text-white flex items-center justify-center font-bold shadow-xs">
                    <Code2 className="w-5 h-5 text-[#C89B2A]" />
                  </div>
                  <span className="text-xs font-extrabold text-[#C89B2A] uppercase tracking-wider block">Jun 2024</span>
                  <h4 className="font-display font-extrabold text-base text-[#1A3C34]">Building Begins</h4>
                  <p className="text-xs text-[#6B6355] leading-relaxed">
                    A small team of 4 starts building LinkX from scratch in a co-working space in Delhi.
                  </p>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="bg-[#FDFAF4] rounded-2xl p-5 border border-[#E8E2D6] shadow-md space-y-3 hover:scale-105 transition-transform flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#C89B2A] text-[#1A3C34] flex items-center justify-center font-bold shadow-xs">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold text-[#C89B2A] uppercase tracking-wider block">Jan 2025</span>
                  <h4 className="font-display font-extrabold text-base text-[#1A3C34]">Official Launch</h4>
                  <p className="text-xs text-[#6B6355] leading-relaxed">
                    LinkX officially launches with 50 brand campaigns and its first 100 creators. Payouts processed Day 1.
                  </p>
                </div>
              </div>

              {/* Milestone 4 */}
              <div className="bg-[#FDFAF4] rounded-2xl p-5 border border-[#E8E2D6] shadow-md space-y-3 hover:scale-105 transition-transform flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#1A3C34] text-white flex items-center justify-center font-bold shadow-xs">
                    <TrendingUp className="w-5 h-5 text-[#C89B2A]" />
                  </div>
                  <span className="text-xs font-extrabold text-[#C89B2A] uppercase tracking-wider block">Mar 2025</span>
                  <h4 className="font-display font-extrabold text-base text-[#1A3C34]">1,000 Creators</h4>
                  <p className="text-xs text-[#6B6355] leading-relaxed">
                    LinkX crosses 1,000 active creators. First ₹10 lakh paid out to Indian creators.
                  </p>
                </div>
              </div>

              {/* Milestone 5 */}
              <div className="bg-[#FDFAF4] rounded-2xl p-5 border border-[#E8E2D6] shadow-md space-y-3 hover:scale-105 transition-transform flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#C89B2A] text-[#1A3C34] flex items-center justify-center font-bold shadow-xs">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold text-[#C89B2A] uppercase tracking-wider block">Jun 2025</span>
                  <h4 className="font-display font-extrabold text-base text-[#1A3C34]">500+ Brands</h4>
                  <p className="text-xs text-[#6B6355] leading-relaxed">
                    500 brand campaigns live. ₹1 Crore paid to creators. Named 'Fastest Growing Affiliate Platform'.
                  </p>
                </div>
              </div>

              {/* Milestone 6 */}
              <div className="bg-[#FDFAF4] rounded-2xl p-5 border border-[#E8E2D6] shadow-md space-y-3 hover:scale-105 transition-transform flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#1A3C34] text-white flex items-center justify-center font-bold shadow-xs">
                    <Star className="w-5 h-5 text-[#C89B2A]" />
                  </div>
                  <span className="text-xs font-extrabold text-[#C89B2A] uppercase tracking-wider block">Jan 2026</span>
                  <h4 className="font-display font-extrabold text-base text-[#1A3C34]">10,000 Creators</h4>
                  <p className="text-xs text-[#6B6355] leading-relaxed">
                    10,000+ active creators. ₹10 Crore+ paid out. Instant payouts launched. The journey continues...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 8 — BY THE NUMBERS (FULL WIDTH VISUAL)                             */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-16 bg-gradient-to-r from-[#C89B2A] to-[#A07820] text-white relative overflow-hidden shadow-xl">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFFFFF_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
              LinkX in Numbers
            </h2>
            <div className="w-16 h-1 bg-white rounded-full mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/30">
            <div className="p-4 space-y-1">
              <div className="text-3xl sm:text-5xl font-extrabold font-display text-white">10,000+</div>
              <div className="text-xs sm:text-sm font-bold text-[#FDFAF4]">Creators Earning Monthly</div>
            </div>
            <div className="p-4 space-y-1">
              <div className="text-3xl sm:text-5xl font-extrabold font-display text-white">₹10Cr+</div>
              <div className="text-xs sm:text-sm font-bold text-[#FDFAF4]">Total Paid to Creators</div>
            </div>
            <div className="p-4 space-y-1">
              <div className="text-3xl sm:text-5xl font-extrabold font-display text-white">500+</div>
              <div className="text-xs sm:text-sm font-bold text-[#FDFAF4]">Active Brand Campaigns</div>
            </div>
            <div className="p-4 space-y-1">
              <div className="text-3xl sm:text-5xl font-extrabold font-display text-white">4.9/5</div>
              <div className="text-xs sm:text-sm font-bold text-[#FDFAF4]">Creator Satisfaction Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 9 — PRESS & RECOGNITION                                            */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-20 bg-[#F5F0E8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1A3C34]">
              LinkX in <span className="text-[#C89B2A]">the News</span>
            </h2>
            <div className="w-16 h-1 bg-[#C89B2A] rounded-full mx-auto" />
            <p className="text-sm sm:text-base text-[#6B6355] font-medium pt-1">
              What people are saying about India's creator economy platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] border-l-4 border-l-[#1A3C34] shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-display font-black text-xl text-[#1A3C34] block">YourStory</span>
                <p className="text-xs sm:text-sm italic text-[#6B6355] leading-relaxed">
                  "LinkX is democratizing affiliate marketing for the next billion Indian internet users — one link at a time."
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E8E2D6] text-xs">
                <span className="font-bold text-[#6B6355]">March 2025</span>
                <a
                  href="#read-article"
                  className="font-extrabold text-[#C89B2A] hover:text-[#b08823] flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] border-l-4 border-l-[#1A3C34] shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-display font-black text-xl text-[#1A3C34] block">Inc42</span>
                <p className="text-xs sm:text-sm italic text-[#6B6355] leading-relaxed">
                  "The startup making it possible for every Indian creator, regardless of follower count, to earn real income online."
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E8E2D6] text-xs">
                <span className="font-bold text-[#6B6355]">May 2025</span>
                <a
                  href="#read-article"
                  className="font-extrabold text-[#C89B2A] hover:text-[#b08823] flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] border-l-4 border-l-[#1A3C34] shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-display font-black text-xl text-[#1A3C34] block">Economic Times</span>
                <p className="text-xs sm:text-sm italic text-[#6B6355] leading-relaxed">
                  "With instant UPI payouts and 500+ Indian brands, LinkX is building the infrastructure for India's creator economy."
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E8E2D6] text-xs">
                <span className="font-bold text-[#6B6355]">July 2025</span>
                <a
                  href="#read-article"
                  className="font-extrabold text-[#C89B2A] hover:text-[#b08823] flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 10 — CREATOR LOVE WALL                                            */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-20 bg-[#EDE8DC] border-t border-[#E8E2D6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1A3C34]">
              What Our <span className="text-[#C89B2A]">Creators Say</span>
            </h2>
            <div className="w-16 h-1 bg-[#C89B2A] rounded-full mx-auto" />
            <p className="text-sm sm:text-base text-[#6B6355] font-medium pt-1">
              10,000+ creators can't be wrong
            </p>
          </div>

          {/* Masonry Grid via CSS Columns */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {/* Card 1 */}
            <div className="break-inside-avoid bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] shadow-md hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-base text-[#1A3C34]">Priya Sharma</h4>
                  <span className="text-xs text-[#6B6355]">Mumbai • Instagram</span>
                </div>
                <div className="flex text-[#C89B2A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C89B2A]" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#6B6355] italic leading-relaxed">
                "LinkX changed my life. I was a homemaker with 5K followers. Now I earn ₹25,000/month from my phone. No investment. No risk."
              </p>
              <div className="flex justify-end pt-2">
                <span className="bg-[#C89B2A]/20 text-[#1A3C34] border border-[#C89B2A]/40 text-xs font-black px-3 py-1 rounded-full">
                  ₹25,000/month
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="break-inside-avoid bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] shadow-md hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-base text-[#1A3C34]">Rahul Verma</h4>
                  <span className="text-xs text-[#6B6355]">Delhi • YouTube</span>
                </div>
                <div className="flex text-[#C89B2A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C89B2A]" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#6B6355] italic leading-relaxed">
                "Instant UPI payouts are real. I withdrew ₹8,000 at midnight and it was in my account in 10 seconds. Unbelievable."
              </p>
              <div className="flex justify-end pt-2">
                <span className="bg-[#C89B2A]/20 text-[#1A3C34] border border-[#C89B2A]/40 text-xs font-black px-3 py-1 rounded-full">
                  ₹45,000/month
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="break-inside-avoid bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] shadow-md hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-base text-[#1A3C34]">Sneha Reddy</h4>
                  <span className="text-xs text-[#6B6355]">Bangalore • Blog</span>
                </div>
                <div className="flex text-[#C89B2A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C89B2A]" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#6B6355] italic leading-relaxed">
                "As a student, I needed something simple. LinkX took 2 minutes to set up and I made my first ₹500 the same day."
              </p>
              <div className="flex justify-end pt-2">
                <span className="bg-[#C89B2A]/20 text-[#1A3C34] border border-[#C89B2A]/40 text-xs font-black px-3 py-1 rounded-full">
                  ₹12,000/month
                </span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="break-inside-avoid bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] shadow-md hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-base text-[#1A3C34]">Vikram Kumar</h4>
                  <span className="text-xs text-[#6B6355]">Chennai • Telegram</span>
                </div>
                <div className="flex text-[#C89B2A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C89B2A]" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#6B6355] italic leading-relaxed">
                "My Telegram deals channel + LinkX = passive income machine. I schedule posts once a week and earn daily."
              </p>
              <div className="flex justify-end pt-2">
                <span className="bg-[#C89B2A]/20 text-[#1A3C34] border border-[#C89B2A]/40 text-xs font-black px-3 py-1 rounded-full">
                  ₹32,000/month
                </span>
              </div>
            </div>

            {/* Card 5 */}
            <div className="break-inside-avoid bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] shadow-md hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-base text-[#1A3C34]">Anjali Deshmukh</h4>
                  <span className="text-xs text-[#6B6355]">Pune • Instagram</span>
                </div>
                <div className="flex text-[#C89B2A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C89B2A]" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#6B6355] italic leading-relaxed">
                "No minimum withdrawal is the feature I love most. I can take out even ₹100. It feels like MY money because it IS my money."
              </p>
              <div className="flex justify-end pt-2">
                <span className="bg-[#C89B2A]/20 text-[#1A3C34] border border-[#C89B2A]/40 text-xs font-black px-3 py-1 rounded-full">
                  ₹18,000/month
                </span>
              </div>
            </div>

            {/* Card 6 */}
            <div className="break-inside-avoid bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] shadow-md hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-base text-[#1A3C34]">Karan Patel</h4>
                  <span className="text-xs text-[#6B6355]">Hyderabad • YouTube</span>
                </div>
                <div className="flex text-[#C89B2A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C89B2A]" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#6B6355] italic leading-relaxed">
                "500+ campaigns means I always find something relevant for my tech audience. boAt and Samsung reviews alone pay my rent."
              </p>
              <div className="flex justify-end pt-2">
                <span className="bg-[#C89B2A]/20 text-[#1A3C34] border border-[#C89B2A]/40 text-xs font-black px-3 py-1 rounded-full">
                  ₹60,000/month
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 11 — JOIN THE MISSION CTA                                         */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-24 bg-[#1A3C34] text-white relative overflow-hidden">
        {/* Floating background decorative icons */}
        <div className="absolute top-10 left-10 text-[#C89B2A]/10 text-6xl pointer-events-none select-none">₹</div>
        <div className="absolute bottom-12 right-12 text-[#C89B2A]/10 text-7xl pointer-events-none select-none">🚀</div>
        <div className="absolute top-1/2 right-1/4 text-white/5 text-5xl pointer-events-none select-none">★</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h2 className="text-4xl sm:text-6xl font-extrabold font-display leading-tight max-w-3xl mx-auto">
            Be Part of <br />
            <span className="text-[#C89B2A]">India's Biggest</span> <br />
            Creator Movement.
          </h2>

          <p className="text-sm sm:text-lg text-[#E8E2D6]/80 max-w-xl mx-auto font-medium">
            10,000 creators are already earning. The question is — are you going to be next?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenAuth('signup', 'creator')}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-base transition-all shadow-2xl flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-1"
            >
              <span>Join LinkX Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              href="/campaigns"
              className="w-full sm:w-auto px-10 py-5 rounded-2xl border-2 border-white/30 text-white hover:bg-white/10 font-extrabold text-base transition-all text-center cursor-pointer block"
            >
              Browse Campaigns
            </Link>
          </div>

          {/* 4 Trust Badges */}
          <div className="pt-8 border-t border-white/10 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-bold text-[#E8E2D6]">
            <div className="flex items-center justify-center gap-1.5">
              <span>🌟</span>
              <span>10,000+ Creators</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <span>⚡</span>
              <span>Instant Payouts</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <span>🏷️</span>
              <span>500+ Brands</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <span>🔒</span>
              <span>Free Forever</span>
            </div>
          </div>

          <div className="pt-4 text-xs text-[#E8E2D6]/60 font-medium">
            Made with ❤️ in India 🇮🇳
          </div>
        </div>
      </section>
    </div>
  );
};
