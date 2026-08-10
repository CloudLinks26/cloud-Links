'use client';

import React, { useState } from 'react';
import { useGlobalContext } from '@/components/GlobalProvider';
import {
  Sparkles,
  Zap,
  TrendingUp,
  IndianRupee,
  Link2,
  Video,
  Smartphone,
  Target,
  BarChart2,
  CheckCircle2,
  ArrowRight,
  Star,
  Sprout,
  Rocket,
  Crown,
  Heart,
  Send,
  Bookmark,
  Calendar,
  Layers,
  Globe,
  Check,
  Clock,
  Flame,
  Mail,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Share2,
  ShieldCheck,
  ChevronRight,
  Filter,
  Hammer
} from 'lucide-react';

export const TipsToEarnMoreContent: React.FC = () => {
  const { onOpenAuth, onOpenLinkGen } = useGlobalContext();
  // State for Level filter tabs
  const [activeLevel, setActiveLevel] = useState<'All' | 'Beginner' | 'Intermediate' | 'Pro'>('All');

  // State for Newsletter Subscription
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Modal / Detail state for featured tip
  const [showFeaturedModal, setShowFeaturedModal] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const handleAuthClick = (mode: 'signup' | 'login' = 'signup') => {
    if (onOpenAuth) {
      onOpenAuth(mode, 'creator');
    }
  };

  // Top 10 Tips Data
  const top10Tips = [
    {
      id: 1,
      num: '01',
      title: 'Put Your Link Everywhere',
      level: 'Beginner',
      levelColor: 'bg-[#2D7A4F] text-white',
      borderColor: 'border-l-[#2D7A4F]',
      desc: 'Add your affiliate link to Instagram bio, YouTube description, WhatsApp status, Telegram profile, and email signature. Every touchpoint is a chance to earn.',
      insight: 'Creators with links in 5+ places earn 3x more monthly revenue on average.',
      icon: Link2,
      iconBg: 'bg-[#C89B2A] text-[#1A3C34]',
    },
    {
      id: 2,
      num: '02',
      title: 'Start With Brands You Already Use',
      level: 'Beginner',
      levelColor: 'bg-[#2D7A4F] text-white',
      borderColor: 'border-l-[#2D7A4F]',
      desc: 'Authentic promotion equals higher trust which leads to more conversions. Your audience can instantly tell when you genuinely love a product.',
      insight: 'Promoting products you personally own increases link click-through rate by 240%.',
      icon: Heart,
      iconBg: 'bg-[#1A3C34] text-[#C89B2A]',
    },
    {
      id: 3,
      num: '03',
      title: 'Post Reviews, Not Just Links',
      level: 'Intermediate',
      levelColor: 'bg-[#C89B2A] text-[#1A3C34]',
      borderColor: 'border-l-[#C89B2A]',
      desc: 'A 60-second honest video review on Instagram Reels or YouTube Shorts drives 10x more clicks than a bare link pasted in stories.',
      insight: 'Video reviews generate 85% of total affiliate commissions on LinkX.',
      icon: Star,
      iconBg: 'bg-[#C89B2A] text-[#1A3C34]',
    },
    {
      id: 4,
      num: '04',
      title: 'Use Telegram for Passive Income',
      level: 'Intermediate',
      levelColor: 'bg-[#C89B2A] text-[#1A3C34]',
      borderColor: 'border-l-[#C89B2A]',
      desc: 'A Telegram channel with 5,000 members sharing daily handpicked deals can earn ₹15,000–₹40,000/month with just 15 minutes of daily effort.',
      insight: 'Telegram broadcasts enjoy an unmatched 65% open rate compared to social algorithms.',
      icon: Send,
      iconBg: 'bg-[#1A3C34] text-[#C89B2A]',
    },
    {
      id: 5,
      num: '05',
      title: 'Track What Works — Cut What Doesn’t',
      level: 'Intermediate',
      levelColor: 'bg-[#C89B2A] text-[#1A3C34]',
      borderColor: 'border-l-[#C89B2A]',
      desc: 'Check your LinkX dashboard analytics weekly. Kill low-performing campaigns and double down on brands that convert highest with your specific demographic.',
      insight: 'Top 5% creators review campaign conversion metrics at least twice a week.',
      icon: BarChart2,
      iconBg: 'bg-[#C89B2A] text-[#1A3C34]',
    },
    {
      id: 6,
      num: '06',
      title: 'Build a Niche Audience, Not a Mass One',
      level: 'Pro',
      levelColor: 'bg-[#1A3C34] text-[#C89B2A]',
      borderColor: 'border-l-[#1A3C34]',
      desc: 'A 10K highly engaged niche audience (e.g. clean skincare, budget tech, mechanical keyboards) will out-earn a 100K generic meme page every time.',
      insight: 'Niche micro-creators average a 7.2% conversion rate versus 0.8% for general pages.',
      icon: Target,
      iconBg: 'bg-[#1A3C34] text-[#C89B2A]',
    },
    {
      id: 7,
      num: '07',
      title: "Create a 'Deals & Offers' Highlight on Instagram",
      level: 'Pro',
      levelColor: 'bg-[#1A3C34] text-[#C89B2A]',
      borderColor: 'border-l-[#1A3C34]',
      desc: 'A permanent Instagram Story Highlight labelled "Best Deals" or "My Gear" allows profile visitors to revisit and shop your recommended links anytime.',
      insight: 'Story Highlights account for 28% of passive monthly conversions for top Instagram creators.',
      icon: Bookmark,
      iconBg: 'bg-[#C89B2A] text-[#1A3C34]',
    },
    {
      id: 8,
      num: '08',
      title: 'Go Festival-First — Plan 60 Days Ahead',
      level: 'Pro',
      levelColor: 'bg-[#1A3C34] text-[#C89B2A]',
      borderColor: 'border-l-[#1A3C34]',
      desc: 'Diwali sales, Big Billion Days, Great Indian Festival, and New Year sales generate 40% of annual Indian e-commerce. Prepare your campaigns 60 days early.',
      insight: 'Creators who schedule festival content beforehand earn 4.5x more during October–November.',
      icon: Calendar,
      iconBg: 'bg-[#1A3C34] text-[#C89B2A]',
    },
    {
      id: 9,
      num: '09',
      title: 'Stack Multiple Campaigns at Once',
      level: 'Pro',
      levelColor: 'bg-[#1A3C34] text-[#C89B2A]',
      borderColor: 'border-l-[#1A3C34]',
      desc: 'Promote 5–8 relevant brand campaigns simultaneously. If one campaign faces stock shortages, others compensate so your revenue stream never dips.',
      insight: 'Multi-campaign creators experience 60% less monthly revenue volatility.',
      icon: Layers,
      iconBg: 'bg-[#C89B2A] text-[#1A3C34]',
    },
    {
      id: 10,
      num: '10',
      title: 'Reinvest in Your Content Setup',
      level: 'Pro',
      levelColor: 'bg-[#1A3C34] text-[#C89B2A]',
      borderColor: 'border-l-[#1A3C34]',
      desc: 'Reinvest 10–20% of monthly earnings into crisp lighting, a wireless lavalier mic, or thumbnail editing. Higher quality content builds higher trust.',
      insight: 'Improved audio/video clarity increases viewer watch time and link clicks by up to 55%.',
      icon: TrendingUp,
      iconBg: 'bg-[#1A3C34] text-[#C89B2A]',
    },
  ];

  // Filter tips based on selected Level
  const filteredTips = activeLevel === 'All'
    ? top10Tips
    : top10Tips.filter(t => t.level === activeLevel);

  return (
    <div className="pt-24 pb-20 bg-[#F5F0E8] min-h-screen text-[#1A3C34] font-sans selection:bg-[#C89B2A]/20">
      
      {/* =================================================================== */}
      {/* SECTION 1 — STUNNING HERO HEADER                                    */}
      {/* =================================================================== */}
      <section className="relative pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">
        
        {/* Background Decorative Elements */}
        {/* Dotted Grid */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#1A3C34 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Scattered Rupee Coins & Arrow Icons */}
        <div className="absolute top-8 left-10 text-[#C89B2A] opacity-20 font-black text-4xl pointer-events-none animate-pulse">
          ₹
        </div>
        <div className="absolute bottom-12 left-1/4 text-[#1A3C34] opacity-25 pointer-events-none">
          <TrendingUp className="w-10 h-10" />
        </div>
        <div className="absolute top-12 right-12 text-[#C89B2A] opacity-25 font-black text-3xl pointer-events-none">
          ₹
        </div>
        <div className="absolute bottom-16 right-1/4 text-[#1A3C34] opacity-20 pointer-events-none">
          <Zap className="w-8 h-8 text-[#C89B2A]" />
        </div>

        {/* Curved Gold Dashed Line SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 50 150 Q 300 20 600 180 T 1200 100"
            fill="none"
            stroke="#C89B2A"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          
          {/* Small Gold Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C89B2A]/15 border border-[#C89B2A]/30 text-[#1A3C34] text-xs font-extrabold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#C89B2A]" />
            <span>Proven Strategies from Top Creators</span>
          </div>

          {/* Giant Bold Headline */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1A3C34] leading-none">
              Earn More.
            </h1>
            <h1 className="text-5xl sm:text-7xl font-display font-black tracking-tight text-[#C89B2A] leading-tight">
              Every Single Day.
            </h1>
          </div>

          {/* Gold Underline Accent */}
          <div className="w-24 h-1.5 bg-[#C89B2A] mx-auto rounded-full" />

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[#6B6355] font-medium leading-relaxed max-w-2xl mx-auto">
            Discover battle-tested tips, strategies, and insider secrets used by India's top affiliate creators to maximize their earnings on LinkX.
          </p>

          {/* 3 Level Pill Tabs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="bg-[#FDFAF4] p-1.5 rounded-2xl border border-[#E8E2D6] shadow-xs flex flex-wrap items-center justify-center gap-1.5 text-xs font-extrabold">
              <button
                onClick={() => setActiveLevel('All')}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeLevel === 'All'
                    ? 'bg-[#1A3C34] text-[#C89B2A] shadow-xs'
                    : 'text-[#6B6355] hover:text-[#1A3C34]'
                }`}
              >
                ⚡ All Levels
              </button>

              <button
                onClick={() => setActiveLevel('Beginner')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeLevel === 'Beginner'
                    ? 'bg-[#2D7A4F] text-white shadow-xs'
                    : 'text-[#6B6355] hover:text-[#2D7A4F]'
                }`}
              >
                <Sprout className="w-3.5 h-3.5" />
                <span>Beginner</span>
              </button>

              <button
                onClick={() => setActiveLevel('Intermediate')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeLevel === 'Intermediate'
                    ? 'bg-[#C89B2A] text-[#1A3C34] shadow-xs'
                    : 'text-[#6B6355] hover:text-[#C89B2A]'
                }`}
              >
                <Rocket className="w-3.5 h-3.5" />
                <span>Intermediate</span>
              </button>

              <button
                onClick={() => setActiveLevel('Pro')}
                className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeLevel === 'Pro'
                    ? 'bg-[#1A3C34] text-[#C89B2A] shadow-xs'
                    : 'text-[#6B6355] hover:text-[#1A3C34]'
                }`}
              >
                <Crown className="w-3.5 h-3.5" />
                <span>Pro</span>
              </button>
            </div>
          </div>

          <p className="text-xs font-bold text-[#6B6355] pt-1">
            42 tips across all levels • Filtered: {filteredTips.length} top strategies showing
          </p>

        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 2 — FEATURED TIP OF THE WEEK                                */}
      {/* =================================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12">
        <div className="bg-[#1A3C34] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-[#C89B2A]/30">
          
          {/* Gold Dotted Pattern in Background */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#C89B2A 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5 text-left">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C89B2A] text-[#1A3C34] text-xs font-black uppercase tracking-wider shadow-xs">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>Featured Tip of the Week</span>
                </span>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-[#C89B2A] text-xs font-extrabold border border-[#C89B2A]/40">
                  <Rocket className="w-3 h-3" />
                  <span>Intermediate</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                The Bio Link Strategy That Made ₹45,000 in One Month
              </h2>

              <p className="text-sm sm:text-base text-[#F5F0E8]/80 font-medium leading-relaxed max-w-2xl">
                Instagram creator Priya Sharma shares exactly how she structured her bio link landing page to drive 980 conversions in 30 days — and how you can copy it step-by-step.
              </p>

              {/* Stat Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 border border-[#C89B2A]/50 text-xs font-bold text-white">
                  <TrendingUp className="w-4 h-4 text-[#C89B2A]" />
                  <span>980 Conversions</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 border border-[#C89B2A]/50 text-xs font-bold text-[#C89B2A]">
                  <IndianRupee className="w-4 h-4 text-[#C89B2A]" />
                  <span>₹45,000 Earned</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 border border-[#C89B2A]/50 text-xs font-bold text-white">
                  <Clock className="w-4 h-4 text-[#C89B2A]" />
                  <span>5 min read</span>
                </span>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={() => setShowFeaturedModal(true)}
                  className="px-8 py-3.5 rounded-2xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-all shadow-lg inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>Read Full Strategy</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Right Abstract Visual Illustration */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-xs bg-white/10 backdrop-blur-md rounded-2xl border border-[#C89B2A]/40 p-5 shadow-xl space-y-4">
                
                {/* Phone Top Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#C89B2A] text-[#1A3C34] font-bold text-[10px] flex items-center justify-center">PS</div>
                    <div>
                      <span className="text-xs font-extrabold text-white block">@priyastyle</span>
                      <span className="text-[10px] text-[#F5F0E8]/70 block">Bio Link Dashboard</span>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>

                {/* Simulated Link Buttons */}
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-[#C89B2A] text-[#1A3C34] text-xs font-extrabold flex justify-between items-center shadow-xs">
                    <span>👗 Myntra Ethnic Sale Top Picks</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/20 text-white text-xs font-bold flex justify-between items-center">
                    <span>💄 Nykaa Beauty Must-Haves</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C89B2A]" />
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/20 text-white text-xs font-bold flex justify-between items-center">
                    <span>🎧 boAt Earbuds 60% Off Link</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C89B2A]" />
                  </div>
                </div>

                {/* Earnings Metric */}
                <div className="p-3 bg-[#1A3C34] rounded-xl border border-[#C89B2A]/50 flex justify-between items-center">
                  <span className="text-[10px] text-[#F5F0E8]/80 font-medium">30-Day Revenue</span>
                  <span className="text-sm font-black text-[#C89B2A]">₹45,210.00</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 3 — TIPS BY CATEGORY (VISUAL GRID)                          */}
      {/* =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            Browse Tips <span className="text-[#C89B2A]">by Category</span>
          </h2>
          <p className="text-sm text-[#6B6355] font-medium">
            Pick your area and start earning smarter today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 — Link Sharing */}
          <div className="rounded-2xl p-7 text-white bg-gradient-to-br from-[#1A3C34] to-[#122A24] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between space-y-6 group cursor-pointer border border-[#1A3C34]">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-2xl bg-white/10 text-white border border-white/15">
                  <Link2 className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#C89B2A] text-[#1A3C34] text-xs font-black">
                  8 tips
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white">Link Sharing</h3>
              <p className="text-xs text-[#F5F0E8]/80 leading-relaxed font-medium">
                Share links in your bio, stories, Telegram groups, and WhatsApp broadcasts simultaneously.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-extrabold text-[#C89B2A] pt-2">
              <span>Explore Link Tactics</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2 — Content Creation */}
          <div className="rounded-2xl p-7 text-white bg-gradient-to-br from-[#C89B2A] to-[#a8801d] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between space-y-6 group cursor-pointer border border-[#C89B2A]">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-2xl bg-white/20 text-white border border-white/25">
                  <Video className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#1A3C34] text-white text-xs font-black">
                  6 tips
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-[#1A3C34]">Content Creation</h3>
              <p className="text-xs text-[#1A3C34]/85 leading-relaxed font-semibold">
                Reviews and video tutorials convert 3x better than generic promotional posts.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-extrabold text-[#1A3C34] pt-2">
              <span>Explore Content Tactics</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3 — Platform Strategy */}
          <div className="rounded-2xl p-7 text-white bg-gradient-to-br from-[#2D7A4F] to-[#1e5436] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between space-y-6 group cursor-pointer border border-[#2D7A4F]">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-2xl bg-white/10 text-white border border-white/15">
                  <Smartphone className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#C89B2A] text-[#1A3C34] text-xs font-black">
                  7 tips
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white">Platform Strategy</h3>
              <p className="text-xs text-[#F5F0E8]/80 leading-relaxed font-medium">
                Each platform has a different audience mindset — tailor your pitch accordingly.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-extrabold text-[#C89B2A] pt-2">
              <span>Explore Platform Playbook</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4 — Niche Selection */}
          <div className="rounded-2xl p-7 text-white bg-gradient-to-br from-[#6B6355] to-[#4a4439] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between space-y-6 group cursor-pointer border border-[#6B6355]">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-2xl bg-white/10 text-white border border-white/15">
                  <Target className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#C89B2A] text-[#1A3C34] text-xs font-black">
                  5 tips
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white">Niche Selection</h3>
              <p className="text-xs text-[#F5F0E8]/80 leading-relaxed font-medium">
                Promoting brands your audience already trusts equals 5x higher conversion rates.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-extrabold text-[#C89B2A] pt-2">
              <span>Explore Niche Guides</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5 — Analytics & Tracking */}
          <div className="rounded-2xl p-7 text-white bg-gradient-to-br from-[#1A3C34] to-[#10241f] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between space-y-6 group cursor-pointer border border-[#1A3C34]">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-2xl bg-white/10 text-white border border-white/15">
                  <BarChart2 className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#C89B2A] text-[#1A3C34] text-xs font-black">
                  6 tips
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white">Analytics & Tracking</h3>
              <p className="text-xs text-[#F5F0E8]/80 leading-relaxed font-medium">
                Creators who check analytics weekly earn 40% more than those who don't.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-extrabold text-[#C89B2A] pt-2">
              <span>Explore Data Secrets</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 6 — Payout Optimization */}
          <div className="rounded-2xl p-7 text-white bg-gradient-to-br from-[#122A24] to-[#2D7A4F] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between space-y-6 group cursor-pointer border border-[#2D7A4F]">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-2xl bg-white/10 text-white border border-white/15">
                  <IndianRupee className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#C89B2A] text-[#1A3C34] text-xs font-black">
                  5 tips
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white">Payout Optimization</h3>
              <p className="text-xs text-[#F5F0E8]/80 leading-relaxed font-medium">
                Reinvest 10% of earnings into better content tools to compound your growth.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-extrabold text-[#C89B2A] pt-2">
              <span>Explore Revenue Tips</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 4 — TOP 10 TIPS (VISUAL NUMBERED LIST - ZIGZAG)            */}
      {/* =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            Top 10 Tips <span className="text-[#C89B2A]">to Maximize Earnings</span>
          </h2>
          <p className="text-sm text-[#6B6355] font-medium">
            Used by LinkX's highest-earning creators every single day
          </p>
        </div>

        <div className="space-y-12">
          {filteredTips.map((tip, index) => {
            const IconComp = tip.icon;
            const isEven = index % 2 === 1;

            return (
              <div
                key={tip.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Left Side (Number & Title Header on Desktop) */}
                <div
                  className={`lg:col-span-5 space-y-3 ${
                    isEven ? 'lg:order-2 lg:text-right' : 'lg:order-1 lg:text-left'
                  }`}
                >
                  <div className={`flex items-center gap-3 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <span className="text-5xl sm:text-6xl font-black font-display text-[#C89B2A]">
                      {tip.num}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-extrabold ${tip.levelColor}`}>
                      {tip.level}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A3C34]">
                    {tip.title}
                  </h3>
                </div>

                {/* Right Side (Description Card + Insight Box) */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className={`bg-[#FDFAF4] rounded-2xl p-6 sm:p-8 border-l-8 ${tip.borderColor} border-t border-r border-b border-[#E8E2D6] shadow-sm hover:shadow-md transition-shadow space-y-4`}>
                    
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-2xl ${tip.iconBg} flex-shrink-0`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <p className="text-sm text-[#1A3C34] font-medium leading-relaxed">
                        {tip.desc}
                      </p>
                    </div>

                    {/* Pro Insight Callout */}
                    <div className="p-3.5 bg-[#F5F0E8] rounded-xl border border-[#E8E2D6] flex items-center gap-2.5 text-xs text-[#1A3C34] font-bold">
                      <Sparkles className="w-4 h-4 text-[#C89B2A] flex-shrink-0" />
                      <span><strong>Pro Insight:</strong> {tip.insight}</span>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </section>


      {/* =================================================================== */}
      {/* SECTION 5 — PLATFORM-SPECIFIC TIPS                                  */}
      {/* =================================================================== */}
      <section className="my-16 bg-[#1A3C34] text-white py-16 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-7xl mx-auto space-y-12 text-center">
          
          <div className="space-y-3 max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Tips by Platform
            </h2>
            <div className="w-16 h-1 bg-[#C89B2A] mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-[#F5F0E8]/80 font-medium">
              Every platform has its own distinct earning playbook
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            
            {/* Instagram */}
            <div className="bg-[#FDFAF4] text-[#1A3C34] rounded-2xl p-6 border border-[#E8E2D6] shadow-md hover:-translate-y-1 transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-[#1A3C34]">Instagram Tips</h3>
              </div>
              <ul className="space-y-2.5 text-xs text-[#6B6355] font-medium">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
                  <span>Use Stories with link stickers for direct high-intent traffic</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
                  <span>Create a 'Best Deals' highlight that stays on your profile forever</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
                  <span>Reels reviewing products outperform all static post formats</span>
                </li>
              </ul>
            </div>

            {/* YouTube */}
            <div className="bg-[#FDFAF4] text-[#1A3C34] rounded-2xl p-6 border border-[#E8E2D6] shadow-md hover:-translate-y-1 transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                  <Youtube className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-[#1A3C34]">YouTube Tips</h3>
              </div>
              <ul className="space-y-2.5 text-xs text-[#6B6355] font-medium">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
                  <span>Pin your top affiliate link in the comment section of every video</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
                  <span>Add links in video description with clear timestamps and titles</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
                  <span>Unboxing + honest review videos have the highest purchase conversion</span>
                </li>
              </ul>
            </div>

            {/* Telegram */}
            <div className="bg-[#FDFAF4] text-[#1A3C34] rounded-2xl p-6 border border-[#E8E2D6] shadow-md hover:-translate-y-1 transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
                  <Send className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-[#1A3C34]">Telegram Tips</h3>
              </div>
              <ul className="space-y-2.5 text-xs text-[#6B6355] font-medium">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
                  <span>Post daily curated deals at 9 AM — peak subscriber engagement time</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
                  <span>Use polls to ask subscribers what products they want reviewed next</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
                  <span>Pinned message with your top earning link drives continuous passive sales</span>
                </li>
              </ul>
            </div>

            {/* Twitter/X */}
            <div className="bg-[#FDFAF4] text-[#1A3C34] rounded-2xl p-6 border border-[#E8E2D6] shadow-md hover:-translate-y-1 transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-500 flex items-center justify-center">
                  <Twitter className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-[#1A3C34]">Twitter/X Tips</h3>
              </div>
              <ul className="space-y-2.5 text-xs text-[#6B6355] font-medium">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
                  <span>Threads reviewing tech products get 10x more organic viral reach</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
                  <span>Quote tweet major brand announcements accompanied by your custom link</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
                  <span>Pin your highest-converting review tweet at the top of your profile</span>
                </li>
              </ul>
            </div>

            {/* LinkedIn */}
            <div className="bg-[#FDFAF4] text-[#1A3C34] rounded-2xl p-6 border border-[#E8E2D6] shadow-md hover:-translate-y-1 transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-[#1A3C34]">LinkedIn Tips</h3>
              </div>
              <ul className="space-y-2.5 text-xs text-[#6B6355] font-medium">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
                  <span>Best for B2B products: Groww, Cred, SaaS tools, and online courses</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
                  <span>Case study posts drive high-quality, high-order-value affiliate conversions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
                  <span>LinkedIn Newsletter feature gives direct inbox notification to followers</span>
                </li>
              </ul>
            </div>

            {/* Blog / Website */}
            <div className="bg-[#FDFAF4] text-[#1A3C34] rounded-2xl p-6 border border-[#E8E2D6] shadow-md hover:-translate-y-1 transition-all space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1A3C34]/10 text-[#C89B2A] flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-[#1A3C34]">Blog Tips</h3>
              </div>
              <ul className="space-y-2.5 text-xs text-[#6B6355] font-medium">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
                  <span>SEO-optimized product reviews provide years of passive search traffic</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
                  <span>Comparison articles ("Product X vs Product Y") rank fast and convert well</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
                  <span>Add a dedicated "Best Deals" page updated every month for return visitors</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 6 — CREATOR LEVEL ROADMAP                                   */}
      {/* =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            Your Earning Journey
          </h2>
          <p className="text-sm text-[#6B6355] font-medium">
            Follow this roadmap — from ₹0 to ₹1,00,000+/month
          </p>
        </div>

        <div className="relative border-l-2 border-[#C89B2A] ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
          
          {/* Stage 1 */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-10 h-10 rounded-full bg-[#2D7A4F] text-white flex items-center justify-center shadow-md">
              <Sprout className="w-5 h-5" />
            </div>

            <div className="bg-[#FDFAF4] rounded-2xl border-l-4 border-l-[#2D7A4F] border-r border-t border-b border-[#E8E2D6] p-6 shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-black text-[#2D7A4F] uppercase tracking-wider">
                  Stage 1 • Month 1–2
                </span>
                <span className="text-xs font-black bg-[#2D7A4F]/15 text-[#2D7A4F] px-3 py-1 rounded-full">
                  Target: ₹500 – ₹5,000 / mo
                </span>
              </div>

              <h3 className="font-extrabold text-xl text-[#1A3C34]">The Starter</h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B6355] font-medium pt-1">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2D7A4F]" /> Join LinkX completely free</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2D7A4F]" /> Pick 3 brands you personally use</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2D7A4F]" /> Share links across all your profiles</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2D7A4F]" /> Make & withdraw your first ₹500</li>
              </ul>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-10 h-10 rounded-full bg-[#C89B2A] text-[#1A3C34] flex items-center justify-center shadow-md">
              <Hammer className="w-5 h-5" />
            </div>

            <div className="bg-[#FDFAF4] rounded-2xl border-l-4 border-l-[#C89B2A] border-r border-t border-b border-[#E8E2D6] p-6 shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-black text-[#C89B2A] uppercase tracking-wider">
                  Stage 2 • Month 3–6
                </span>
                <span className="text-xs font-black bg-[#C89B2A]/20 text-[#1A3C34] px-3 py-1 rounded-full">
                  Target: ₹5,000 – ₹25,000 / mo
                </span>
              </div>

              <h3 className="font-extrabold text-xl text-[#1A3C34]">The Builder</h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B6355] font-medium pt-1">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C89B2A]" /> Create video reviews for top brands</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C89B2A]" /> Launch a Telegram deals channel</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C89B2A]" /> Track weekly dashboard analytics</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C89B2A]" /> Withdraw your first ₹10,000</li>
              </ul>
            </div>
          </div>

          {/* Stage 3 */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-10 h-10 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center shadow-md">
              <TrendingUp className="w-5 h-5" />
            </div>

            <div className="bg-[#FDFAF4] rounded-2xl border-l-4 border-l-[#1A3C34] border-r border-t border-b border-[#E8E2D6] p-6 shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-black text-[#1A3C34] uppercase tracking-wider">
                  Stage 3 • Month 6–12
                </span>
                <span className="text-xs font-black bg-[#1A3C34] text-white px-3 py-1 rounded-full">
                  Target: ₹25,000 – ₹75,000 / mo
                </span>
              </div>

              <h3 className="font-extrabold text-xl text-[#1A3C34]">The Earner</h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B6355] font-medium pt-1">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A3C34]" /> Run 8–10 campaigns simultaneously</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A3C34]" /> Plan content around sale seasons</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A3C34]" /> Build audience trust with honest reviews</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A3C34]" /> Consistent passive monthly revenue</li>
              </ul>
            </div>
          </div>

          {/* Stage 4 */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-10 h-10 rounded-full bg-[#C89B2A] text-[#1A3C34] flex items-center justify-center shadow-md">
              <Crown className="w-5 h-5" />
            </div>

            <div className="bg-[#FDFAF4] rounded-2xl border-l-4 border-l-[#C89B2A] border-r border-t border-b border-[#E8E2D6] p-6 shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-black text-[#C89B2A] uppercase tracking-wider">
                  Stage 4 • Month 12+
                </span>
                <span className="text-xs font-black bg-[#C89B2A] text-[#1A3C34] px-3 py-1 rounded-full">
                  Target: ₹75,000 – ₹2,00,000+ / mo
                </span>
              </div>

              <h3 className="font-extrabold text-xl text-[#1A3C34]">The Pro Creator</h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B6355] font-medium pt-1">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C89B2A]" /> Niche down for maximum conversion</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C89B2A]" /> Create evergreen SEO search content</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C89B2A]" /> Stack festival season promotions</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C89B2A]" /> Build a full personal brand business</li>
              </ul>
            </div>
          </div>

        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 7 — QUICK WINS CARDS                                        */}
      {/* =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            5-Minute Quick Wins
          </h2>
          <p className="text-sm text-[#6B6355] font-medium">
            Do these right now and start earning faster
          </p>
        </div>

        <div className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x">
          
          {/* Card 1 */}
          <div className="snap-start min-w-[280px] sm:min-w-[320px] bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs hover:border-[#C89B2A] hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 rounded-xl bg-[#C89B2A]/20 text-[#1A3C34] flex items-center justify-center">
                  <Link2 className="w-5 h-5 text-[#C89B2A]" />
                </div>
                <span className="text-[10px] font-black text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  🔥 High impact
                </span>
              </div>

              <h3 className="font-extrabold text-base text-[#1A3C34]">
                Add link to Instagram bio
              </h3>
              <p className="text-xs text-[#6B6355] font-medium">
                Put your LinkX hub link directly in your Instagram bio for instant profile traffic.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-[11px] text-[#6B6355] font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#C89B2A]" /> ⏱ 2 minutes
              </span>
              <button
                onClick={() => handleAuthClick('signup')}
                className="w-full py-2.5 rounded-xl border border-[#C89B2A] text-[#1A3C34] hover:bg-[#C89B2A] font-extrabold text-xs transition-colors cursor-pointer"
              >
                Do This Now →
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="snap-start min-w-[280px] sm:min-w-[320px] bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs hover:border-[#C89B2A] hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 rounded-xl bg-[#1A3C34]/10 text-[#1A3C34] flex items-center justify-center">
                  <Send className="w-5 h-5 text-[#1A3C34]" />
                </div>
                <span className="text-[10px] font-black text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  🔥 High impact
                </span>
              </div>

              <h3 className="font-extrabold text-base text-[#1A3C34]">
                Create a Telegram deals channel
              </h3>
              <p className="text-xs text-[#6B6355] font-medium">
                Set up a free Telegram channel to broadcast daily deals directly to subscribers.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-[11px] text-[#6B6355] font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#C89B2A]" /> ⏱ 5 minutes
              </span>
              <button
                onClick={() => handleAuthClick('signup')}
                className="w-full py-2.5 rounded-xl border border-[#C89B2A] text-[#1A3C34] hover:bg-[#C89B2A] font-extrabold text-xs transition-colors cursor-pointer"
              >
                Do This Now →
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="snap-start min-w-[280px] sm:min-w-[320px] bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs hover:border-[#C89B2A] hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 rounded-xl bg-[#C89B2A]/20 text-[#1A3C34] flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#C89B2A]" />
                </div>
                <span className="text-[10px] font-black text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  🔥 High impact
                </span>
              </div>

              <h3 className="font-extrabold text-base text-[#1A3C34]">
                Pick your first campaign on LinkX
              </h3>
              <p className="text-xs text-[#6B6355] font-medium">
                Browse 500+ active brand campaigns and generate your first tracking link.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-[11px] text-[#6B6355] font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#C89B2A]" /> ⏱ 3 minutes
              </span>
              <button
                onClick={() => handleAuthClick('signup')}
                className="w-full py-2.5 rounded-xl border border-[#C89B2A] text-[#1A3C34] hover:bg-[#C89B2A] font-extrabold text-xs transition-colors cursor-pointer"
              >
                Do This Now →
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="snap-start min-w-[280px] sm:min-w-[320px] bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs hover:border-[#C89B2A] hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 rounded-xl bg-[#1A3C34]/10 text-[#1A3C34] flex items-center justify-center">
                  <Share2 className="w-5 h-5 text-[#1A3C34]" />
                </div>
                <span className="text-[10px] font-black text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">
                  ⚡ Instant results
                </span>
              </div>

              <h3 className="font-extrabold text-base text-[#1A3C34]">
                Share link in 3 WhatsApp groups
              </h3>
              <p className="text-xs text-[#6B6355] font-medium">
                Recommend an ongoing brand deal to friends or family shopping groups.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-[11px] text-[#6B6355] font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#C89B2A]" /> ⏱ 1 minute
              </span>
              <button
                onClick={() => handleAuthClick('signup')}
                className="w-full py-2.5 rounded-xl border border-[#C89B2A] text-[#1A3C34] hover:bg-[#C89B2A] font-extrabold text-xs transition-colors cursor-pointer"
              >
                Do This Now →
              </button>
            </div>
          </div>

          {/* Card 5 */}
          <div className="snap-start min-w-[280px] sm:min-w-[320px] bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs hover:border-[#C89B2A] hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 rounded-xl bg-[#C89B2A]/20 text-[#1A3C34] flex items-center justify-center">
                  <Bookmark className="w-5 h-5 text-[#C89B2A]" />
                </div>
                <span className="text-[10px] font-black text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  📈 Evergreen traffic
                </span>
              </div>

              <h3 className="font-extrabold text-base text-[#1A3C34]">
                Create an Instagram 'Deals' highlight
              </h3>
              <p className="text-xs text-[#6B6355] font-medium">
                Save your top story recommendations into a permanent Instagram profile highlight.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-[11px] text-[#6B6355] font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#C89B2A]" /> ⏱ 5 minutes
              </span>
              <button
                onClick={() => handleAuthClick('signup')}
                className="w-full py-2.5 rounded-xl border border-[#C89B2A] text-[#1A3C34] hover:bg-[#C89B2A] font-extrabold text-xs transition-colors cursor-pointer"
              >
                Do This Now →
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 8 — EARNINGS BY NICHE TABLE                                 */}
      {/* =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            Which Niche Pays the Most?
          </h2>
          <p className="text-sm text-[#6B6355] font-medium">
            Real commission data from LinkX campaign analytics
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E8E2D6] shadow-md bg-[#FDFAF4]">
          <table className="w-full text-left text-xs text-[#1A3C34]">
            
            <thead className="bg-[#1A3C34] text-white uppercase text-[11px] tracking-wider font-extrabold">
              <tr>
                <th className="p-4 sm:p-5">Niche</th>
                <th className="p-4 sm:p-5">Top Brands</th>
                <th className="p-4 sm:p-5">Avg Commission</th>
                <th className="p-4 sm:p-5">Best Platform</th>
                <th className="p-4 sm:p-5">Difficulty</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#E8E2D6] font-semibold">
              <tr className="hover:bg-[#F5F0E8] transition-colors hover:border-l-4 hover:border-l-[#C89B2A]">
                <td className="p-4 sm:p-5 font-extrabold text-sm flex items-center gap-2">
                  <span>👗</span> Fashion
                </td>
                <td className="p-4 sm:p-5">Myntra, AJIO, Meesho</td>
                <td className="p-4 sm:p-5 text-[#C89B2A] font-black text-sm">Up to 15%</td>
                <td className="p-4 sm:p-5">Instagram, Blog</td>
                <td className="p-4 sm:p-5">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">
                    🟢 Easy
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-[#F5F0E8] transition-colors hover:border-l-4 hover:border-l-[#C89B2A]">
                <td className="p-4 sm:p-5 font-extrabold text-sm flex items-center gap-2">
                  <span>💄</span> Beauty
                </td>
                <td className="p-4 sm:p-5">Nykaa, Mamaearth</td>
                <td className="p-4 sm:p-5 text-[#C89B2A] font-black text-sm">Up to 20%</td>
                <td className="p-4 sm:p-5">Instagram, YouTube</td>
                <td className="p-4 sm:p-5">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">
                    🟢 Easy
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-[#F5F0E8] transition-colors hover:border-l-4 hover:border-l-[#C89B2A]">
                <td className="p-4 sm:p-5 font-extrabold text-sm flex items-center gap-2">
                  <span>📱</span> Electronics
                </td>
                <td className="p-4 sm:p-5">boAt, Samsung, Noise</td>
                <td className="p-4 sm:p-5 text-[#C89B2A] font-black text-sm">Up to 10%</td>
                <td className="p-4 sm:p-5">YouTube, Blog</td>
                <td className="p-4 sm:p-5">
                  <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black">
                    🟡 Medium
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-[#F5F0E8] transition-colors hover:border-l-4 hover:border-l-[#C89B2A]">
                <td className="p-4 sm:p-5 font-extrabold text-sm flex items-center gap-2">
                  <span>✈️</span> Travel
                </td>
                <td className="p-4 sm:p-5">MakeMyTrip, Goibibo</td>
                <td className="p-4 sm:p-5 text-[#C89B2A] font-black text-sm">Up to 8%</td>
                <td className="p-4 sm:p-5">Instagram, Blog</td>
                <td className="p-4 sm:p-5">
                  <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black">
                    🟡 Medium
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-[#F5F0E8] transition-colors hover:border-l-4 hover:border-l-[#C89B2A]">
                <td className="p-4 sm:p-5 font-extrabold text-sm flex items-center gap-2">
                  <span>💰</span> Finance
                </td>
                <td className="p-4 sm:p-5">Groww, Cred, Razorpay</td>
                <td className="p-4 sm:p-5 text-[#C89B2A] font-black text-sm">₹500 / lead</td>
                <td className="p-4 sm:p-5">LinkedIn, Blog</td>
                <td className="p-4 sm:p-5">
                  <span className="px-2.5 py-1 rounded-full bg-red-100 text-red-800 text-[10px] font-black">
                    🔴 Hard
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-[#F5F0E8] transition-colors hover:border-l-4 hover:border-l-[#C89B2A]">
                <td className="p-4 sm:p-5 font-extrabold text-sm flex items-center gap-2">
                  <span>🏥</span> Health
                </td>
                <td className="p-4 sm:p-5">PharmEasy, 1mg</td>
                <td className="p-4 sm:p-5 text-[#C89B2A] font-black text-sm">Up to 14%</td>
                <td className="p-4 sm:p-5">Telegram, Blog</td>
                <td className="p-4 sm:p-5">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">
                    🟢 Easy
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-[#F5F0E8] transition-colors hover:border-l-4 hover:border-l-[#C89B2A]">
                <td className="p-4 sm:p-5 font-extrabold text-sm flex items-center gap-2">
                  <span>🍔</span> Food
                </td>
                <td className="p-4 sm:p-5">Zomato, Swiggy</td>
                <td className="p-4 sm:p-5 text-[#C89B2A] font-black text-sm">Up to 7%</td>
                <td className="p-4 sm:p-5">Instagram, WhatsApp</td>
                <td className="p-4 sm:p-5">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">
                    🟢 Easy
                  </span>
                </td>
              </tr>

              <tr className="hover:bg-[#F5F0E8] transition-colors hover:border-l-4 hover:border-l-[#C89B2A]">
                <td className="p-4 sm:p-5 font-extrabold text-sm flex items-center gap-2">
                  <span>🛍️</span> Shopping
                </td>
                <td className="p-4 sm:p-5">Flipkart, Amazon</td>
                <td className="p-4 sm:p-5 text-[#C89B2A] font-black text-sm">Up to 12%</td>
                <td className="p-4 sm:p-5">All platforms</td>
                <td className="p-4 sm:p-5">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">
                    🟢 Easy
                  </span>
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 9 — NEWSLETTER / TIPS SUBSCRIPTION                          */}
      {/* =================================================================== */}
      <section className="my-16 bg-[#EDE8DC] border-y border-[#E8E2D6] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Graphic */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center space-y-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-3xl bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center shadow-xl">
                  <Mail className="w-12 h-12" />
                </div>
                <div className="absolute -top-2 -right-2 bg-[#C89B2A] text-[#1A3C34] text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs">
                  NEW
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#FDFAF4] border border-[#E8E2D6] text-[11px] font-extrabold text-[#1A3C34]">
                  💡 Tip #1: Bio Link Optimization
                </span>
                <span className="px-3 py-1 rounded-full bg-[#FDFAF4] border border-[#E8E2D6] text-[11px] font-extrabold text-[#1A3C34]">
                  💡 Tip #2: Festive Sale Prep
                </span>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3C34]">
                Get Weekly Earning Tips
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6355] font-medium leading-relaxed">
                Join 10,000+ creators getting exclusive tips, high-commission campaign alerts, and earning strategies delivered directly to their inbox every week.
              </p>

              <ul className="space-y-1.5 text-xs text-[#1A3C34] font-semibold">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2D7A4F]" /> New high-commission campaign alerts</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2D7A4F]" /> Weekly earning tips from top creators</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2D7A4F]" /> Festival season deal strategies & templates</li>
              </ul>

              <form onSubmit={handleSubscribe} className="pt-2 flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 p-3.5 rounded-xl bg-[#FDFAF4] border border-[#E8E2D6] text-xs font-bold text-[#1A3C34] focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {subscribed && (
                <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl text-xs font-extrabold flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>You're subscribed! Check your inbox for this week's top earning tips.</span>
                </div>
              )}

              <p className="text-[11px] text-[#6B6355] font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2D7A4F]" /> No spam. Unsubscribe anytime. 🔒
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 10 — BOTTOM CTA BANNER                                      */}
      {/* =================================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12">
        <div className="bg-[#1A3C34] text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-2xl border border-[#C89B2A]/30">
          
          {/* Background Decorative Coins */}
          <div className="absolute top-6 left-10 text-[#C89B2A] opacity-20 font-black text-4xl pointer-events-none">
            ₹
          </div>
          <div className="absolute bottom-6 right-10 text-[#C89B2A] opacity-20 font-black text-4xl pointer-events-none">
            ₹
          </div>

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Ready to Put These <br />
              <span className="text-[#C89B2A]">Tips Into Action?</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#F5F0E8]/80 font-medium leading-relaxed">
              Everything you learned here works best when combined with the right platform. LinkX gives you the tools, 500+ top brands, and instant UPI payouts to make it happen.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => handleAuthClick('signup')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-sm transition-all shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Start Earning Free</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenLinkGen ? onOpenLinkGen() : handleAuthClick('signup')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl border-2 border-white text-white hover:bg-white hover:text-[#1A3C34] font-extrabold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Browse Campaigns</span>
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#F5F0E8]/70 font-semibold border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C89B2A]" /> 500+ Active Campaigns
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#C89B2A]" /> Instant UPI Payouts
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C89B2A]" /> Free Forever
              </span>
            </div>

          </div>

        </div>
      </section>


      {/* =================================================================== */}
      {/* FEATURED TIP MODAL                                                  */}
      {/* =================================================================== */}
      {showFeaturedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-[#FDFAF4] rounded-3xl border border-[#E8E2D6] p-6 sm:p-8 max-w-xl w-full shadow-2xl space-y-5 text-left relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setShowFeaturedModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#1A3C34]/10 text-[#1A3C34] font-bold text-sm flex items-center justify-center hover:bg-[#1A3C34] hover:text-white transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#C89B2A] text-[#1A3C34] text-[10px] font-black uppercase">
                Featured Strategy
              </span>
              <h3 className="text-xl font-extrabold text-[#1A3C34]">
                Priya Sharma's Bio Link Strategy
              </h3>
            </div>

            <div className="space-y-3 text-xs text-[#6B6355] font-medium leading-relaxed divide-y divide-[#E8E2D6]">
              <div className="pt-2">
                <strong className="text-[#1A3C34] block mb-1">Step 1: Segment by Interest</strong>
                <p>Instead of posting random product links, Priya groups links into 3 main categories: Fashion, Beauty, and Daily Gear. This reduces decision fatigue for followers.</p>
              </div>

              <div className="pt-2">
                <strong className="text-[#1A3C34] block mb-1">Step 2: Add Clear Discount Callouts</strong>
                <p>Every link button features the exact deal angle — e.g. "Myntra 60% Off Kurti Picks" instead of just "Myntra Link".</p>
              </div>

              <div className="pt-2">
                <strong className="text-[#1A3C34] block mb-1">Step 3: Update Daily in Stories</strong>
                <p>Priya posts a story showing a product she's wearing or using, and directs followers to the top button in her bio link hub.</p>
              </div>
            </div>

            <button
              onClick={() => {
                setShowFeaturedModal(false);
                handleAuthClick('signup');
              }}
              className="w-full py-3 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-colors cursor-pointer"
            >
              Start Implementing on LinkX →
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default TipsToEarnMoreContent;
