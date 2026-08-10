'use client';
import React, { useState } from 'react';
import { useGlobalContext } from '@/components/GlobalProvider';
import {
  Sparkles,
  Zap,
  Users,
  IndianRupee,
  Tag,
  Star,
  Rocket,
  Crown,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Send,
  Globe,
  UserPlus,
  Search,
  Share2,
  ArrowRight,
  Check,
  BarChart2,
  Link as LinkIcon,
  Bell,
  Smartphone,
  Headphones,
  Plus,
  Minus,
  Copy,
  CheckCircle2,
  Sprout,
  Play
} from 'lucide-react';

export default function InfluencerContent() {
  const { onOpenAuth, onOpenLinkGen } = useGlobalContext();
  // Category filter state for Section 6 (Brand Showcase)
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Interactive Earnings Calculator state (Section 7)
  const [calcPlatform, setCalcPlatform] = useState<string>('Instagram');
  const [followers, setFollowers] = useState<number>(25); // in Thousands
  const [postsPerMonth, setPostsPerMonth] = useState<number>(5);

  // Link Generator Demo state (Section 8)
  const [demoBrand, setDemoBrand] = useState<string>('Myntra');
  const [demoHandle, setDemoHandle] = useState<string>('priyastyle');
  const [generatedLink, setGeneratedLink] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // FAQ Accordion state (Section 11)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleAuthClick = (mode: 'signup' | 'login' = 'signup') => {
    if (onOpenAuth) {
      onOpenAuth(mode, 'creator');
    }
  };

  // Helper calculation for Earnings Calculator
  const calculateEarnings = () => {
    // Basic estimator math based on follower count & posts
    const basePerPost = followers * 120; // e.g. 25k followers -> ~₹3000/post avg commission
    const totalEst = basePerPost * postsPerMonth;
    const lower = Math.round(totalEst * 0.7);
    const upper = Math.round(totalEst * 1.3);
    return {
      lower: lower.toLocaleString('en-IN'),
      upper: upper.toLocaleString('en-IN'),
    };
  };

  const handleGenerateLink = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanHandle = demoHandle.replace('@', '').trim() || 'creator';
    const link = `linkx.in/${demoBrand.toLowerCase().replace(/[^a-z0-9]/g, '')}/@${cleanHandle}`;
    setGeneratedLink(link);
    setCopied(false);
  };

  const handleCopy = () => {
    if (generatedLink) {
      navigator.clipboard.writeText(`https://${generatedLink}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Brands data
  const brandsList = [
    { name: 'Myntra', category: 'Fashion', commission: 'Up to 12%', logo: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=120&auto=format&fit=crop&q=80' },
    { name: 'Nykaa', category: 'Beauty', commission: 'Up to 15%', logo: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=120&auto=format&fit=crop&q=80' },
    { name: 'boAt', category: 'Electronics', commission: 'Up to 8%', logo: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=120&auto=format&fit=crop&q=80' },
    { name: 'MakeMyTrip', category: 'Travel', commission: 'Up to 6%', logo: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=120&auto=format&fit=crop&q=80' },
    { name: 'Mamaearth', category: 'Health', commission: 'Up to 20%', logo: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=120&auto=format&fit=crop&q=80' },
    { name: 'Meesho', category: 'Fashion', commission: 'Up to 9%', logo: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=120&auto=format&fit=crop&q=80' },
  ];

  const filteredBrands = activeCategory === 'All'
    ? brandsList
    : brandsList.filter(b => b.category === activeCategory);

  // FAQs List
  const faqs = [
    {
      q: 'Do I need a minimum number of followers to join?',
      a: 'No minimum at all! Whether you have 500 or 5,00,000 followers — LinkX welcomes all creators.',
    },
    {
      q: 'Can I promote on multiple platforms at once?',
      a: 'Absolutely! Use the same link across Instagram, YouTube, Telegram, and your blog simultaneously.',
    },
    {
      q: 'How do brands find my profile?',
      a: 'Your LinkX profile is visible to brands searching for creators. The more campaigns you run, the higher your visibility.',
    },
    {
      q: 'Is there a dedicated dashboard for influencers?',
      a: 'Yes! Your dashboard shows live earnings, link performance, brand campaigns, and payout history — all in one place.',
    },
    {
      q: 'Can I choose which brands I want to promote?',
      a: '100% yes. You browse and pick campaigns that match your niche and audience. No forced promotions.',
    },
    {
      q: 'What happens if someone returns a product I referred?',
      a: 'Commission is tracked on successful, non-returned sales. Returned orders are automatically excluded.',
    },
  ];

  const estEarnings = calculateEarnings();

  return (
    <div className="pt-24 pb-20 bg-[#F5F0E8] min-h-screen text-[#1A3C34] font-sans selection:bg-[#C89B2A]/20">
      
      {/* =================================================================== */}
      {/* SECTION 1 — HERO HEADER                                             */}
      {/* =================================================================== */}
      <section className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Faint Dot Grid Pattern in corners */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#1A3C34 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Floating background elements */}
        <div className="absolute top-12 left-8 w-12 h-12 rounded-full bg-[#1A3C34]/10 flex items-center justify-center text-[#1A3C34] opacity-25 pointer-events-none">
          <Instagram className="w-6 h-6" />
        </div>
        <div className="absolute bottom-16 left-1/3 w-10 h-10 rounded-full bg-[#C89B2A]/15 flex items-center justify-center text-[#C89B2A] opacity-30 pointer-events-none font-black text-xl">
          ₹
        </div>
        <div className="absolute top-20 right-1/4 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-600 opacity-20 pointer-events-none">
          <Youtube className="w-6 h-6" />
        </div>
        <div className="absolute bottom-20 right-10 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 opacity-20 pointer-events-none">
          <Send className="w-6 h-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C89B2A]/15 border border-[#C89B2A]/30 text-[#1A3C34] text-xs font-extrabold uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#C89B2A]" />
              <span>India's #1 Influencer Monetization Platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1A3C34] leading-[1.1]">
              Your Content. <br />
              Your Audience. <br />
              <span className="text-[#C89B2A] font-display text-5xl sm:text-7xl block pt-1">
                Your Income.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#6B6355] font-medium max-w-xl leading-relaxed">
              Turn every post, reel, video, and story into real earnings. Join 10,000+ Indian influencers already monetizing their content with LinkX.
            </p>

            {/* Platform Badges Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#E8E2D6] text-xs font-bold text-[#1A3C34]">
                <Instagram className="w-3.5 h-3.5 text-pink-600" /> Instagram
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#E8E2D6] text-xs font-bold text-[#1A3C34]">
                <Youtube className="w-3.5 h-3.5 text-red-600" /> YouTube
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#E8E2D6] text-xs font-bold text-[#1A3C34]">
                <Twitter className="w-3.5 h-3.5 text-sky-500" /> Twitter/X
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#E8E2D6] text-xs font-bold text-[#1A3C34]">
                <Linkedin className="w-3.5 h-3.5 text-blue-700" /> LinkedIn
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#E8E2D6] text-xs font-bold text-[#1A3C34]">
                <Send className="w-3.5 h-3.5 text-sky-600" /> Telegram
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#E8E2D6] text-xs font-bold text-[#1A3C34]">
                <Globe className="w-3.5 h-3.5 text-[#1A3C34]" /> Blog
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => handleAuthClick('signup')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Join as Influencer</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl border-2 border-[#1A3C34] text-[#1A3C34] hover:bg-[#1A3C34] hover:text-white font-extrabold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>See How It Works</span>
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-3">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#F5F0E8] bg-[#1A3C34] text-white text-[10px] font-extrabold flex items-center justify-center">PS</div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#F5F0E8] bg-[#C89B2A] text-[#1A3C34] text-[10px] font-extrabold flex items-center justify-center">RV</div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#F5F0E8] bg-[#2D7A4F] text-white text-[10px] font-extrabold flex items-center justify-center">SK</div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#F5F0E8] bg-[#1A3C34] text-[#C89B2A] text-[10px] font-extrabold flex items-center justify-center">+10k</div>
              </div>
              <span className="text-xs font-extrabold text-[#1A3C34]">
                10,000+ influencers earning with LinkX
              </span>
            </div>

          </div>

          {/* Right Visual Image + Floating Stat Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background Soft Glow Circle */}
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-[#1A3C34]/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl pointer-events-none" />

            {/* Main Creator Card / Image Frame */}
            <div className="relative w-full max-w-sm bg-[#FDFAF4] rounded-3xl border-2 border-[#E8E2D6] p-4 shadow-xl overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
                  alt="Indian Influencer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C89B2A] animate-ping" />
                    <span className="text-xs font-black uppercase tracking-wider text-[#C89B2A]">Top Creator</span>
                  </div>
                  <h3 className="font-extrabold text-lg text-white">Ananya Roy</h3>
                  <p className="text-[11px] text-white/80 font-medium">@ananya_lifestyle • 85K Followers</p>
                </div>
              </div>
            </div>

            {/* Floating Stat Card 1 — Top Left */}
            <div className="absolute -top-4 -left-2 sm:-left-6 bg-white rounded-2xl border border-[#E8E2D6] p-3 shadow-lg flex items-center gap-2.5 animate-bounce [animation-duration:4s]">
              <div className="w-8 h-8 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-xs">
                <Instagram className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-[#6B6355] block font-semibold">Instagram</span>
                <span className="text-xs font-black text-[#2D7A4F]">₹45,000 earned</span>
              </div>
            </div>

            {/* Floating Stat Card 2 — Bottom Right */}
            <div className="absolute -bottom-4 -right-2 sm:-right-6 bg-white rounded-2xl border border-[#E8E2D6] p-3 shadow-lg flex items-center gap-2.5 animate-bounce [animation-duration:5s]">
              <div className="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">
                <Youtube className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-[#6B6355] block font-semibold">YouTube</span>
                <span className="text-xs font-black text-[#2D7A4F]">₹28,000 earned</span>
              </div>
            </div>

            {/* Floating Stat Card 3 — Middle Left */}
            <div className="hidden sm:flex absolute top-1/2 -left-8 bg-white rounded-2xl border border-[#E8E2D6] px-3 py-2 shadow-md items-center gap-2">
              <LinkIcon className="w-4 h-4 text-[#C89B2A]" />
              <span className="text-xs font-extrabold text-[#1A3C34]">1,240 links created</span>
            </div>

            {/* Floating Stat Card 4 — Top Right */}
            <div className="hidden sm:flex absolute top-6 -right-6 bg-white rounded-2xl border border-[#E8E2D6] px-3 py-2 shadow-md items-center gap-2">
              <Zap className="w-4 h-4 text-[#C89B2A]" />
              <span className="text-xs font-extrabold text-[#2D7A4F]">Instant Payout</span>
            </div>

          </div>

        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 2 — STATS BAR                                               */}
      {/* =================================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-8">
        <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#E8E2D6]">
            
            <div className="flex items-center gap-4 pt-4 md:pt-0 first:pt-0 pl-0 md:pl-4">
              <div className="p-3 bg-[#1A3C34]/10 rounded-xl text-[#C89B2A] flex-shrink-0">
                <Users className="w-6 h-6 text-[#C89B2A]" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#1A3C34] block leading-none">10,000+</span>
                <span className="text-xs text-[#6B6355] font-semibold">Active Influencers</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 pl-0 md:pl-6">
              <div className="p-3 bg-[#1A3C34]/10 rounded-xl text-[#C89B2A] flex-shrink-0">
                <IndianRupee className="w-6 h-6 text-[#C89B2A]" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#1A3C34] block leading-none">₹10Cr+</span>
                <span className="text-xs text-[#6B6355] font-semibold">Paid to Creators</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 pl-0 md:pl-6">
              <div className="p-3 bg-[#1A3C34]/10 rounded-xl text-[#C89B2A] flex-shrink-0">
                <Tag className="w-6 h-6 text-[#C89B2A]" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#1A3C34] block leading-none">500+</span>
                <span className="text-xs text-[#6B6355] font-semibold">Brand Campaigns</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 pl-0 md:pl-6">
              <div className="p-3 bg-[#1A3C34]/10 rounded-xl text-[#C89B2A] flex-shrink-0">
                <Zap className="w-6 h-6 text-[#C89B2A]" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#1A3C34] block leading-none">Instant</span>
                <span className="text-xs text-[#6B6355] font-semibold">Payout Speed</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 3 — INFLUENCER TIERS                                        */}
      {/* =================================================================== */}
      <section id="tiers" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            Find Your Tier. <span className="text-[#C89B2A]">Grow With Us.</span>
          </h2>
          <p className="text-sm text-[#6B6355] font-medium">
            Every influencer is welcome — from nano creators to macro stars. All tiers earn equally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          
          {/* Card 1 — Nano Tier */}
          <div className="bg-[#FDFAF4] rounded-2xl border-l-4 border-l-[#2D7A4F] border-r border-t border-b border-[#E8E2D6] p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2D7A4F]/15 text-[#2D7A4F] text-xs font-extrabold uppercase">
                  <Sprout className="w-4 h-4" /> Nano Creator
                </span>
                <span className="text-xs font-bold text-[#6B6355]">1K – 10K followers</span>
              </div>

              <div>
                <h3 className="font-extrabold text-xl text-[#1A3C34]">Nano Influencer</h3>
                <span className="text-xs text-[#6B6355] font-medium block pt-1">
                  Perfect for: Students, beginners, side earners
                </span>
              </div>

              <div className="p-3 bg-[#F5F0E8] rounded-xl border border-[#E8E2D6]">
                <span className="text-xs text-[#6B6355] block font-semibold">Commission Rate</span>
                <span className="text-lg font-black text-[#C89B2A]">Earn up to 20% commission</span>
              </div>

              <ul className="space-y-2.5 text-xs text-[#1A3C34] font-medium">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2D7A4F] flex-shrink-0" /> Access to 500+ brand campaigns</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2D7A4F] flex-shrink-0" /> Instant UPI payouts</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2D7A4F] flex-shrink-0" /> Real-time dashboard analytics</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2D7A4F] flex-shrink-0" /> Free to join — no approval needed</li>
              </ul>
            </div>

            <button
              onClick={() => handleAuthClick('signup')}
              className="w-full py-3.5 rounded-xl border-2 border-[#2D7A4F] text-[#2D7A4F] hover:bg-[#2D7A4F] hover:text-white font-extrabold text-xs transition-colors cursor-pointer"
            >
              Join as Nano Creator
            </button>
          </div>

          {/* Card 2 — Micro Tier (HIGHLIGHTED) */}
          <div className="bg-[#FDFAF4] rounded-2xl border-2 border-[#C89B2A] p-7 shadow-xl scale-100 lg:scale-105 relative flex flex-col justify-between space-y-6 bg-gradient-to-b from-[#FDFAF4] to-[#F5F0E8]">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C89B2A] text-[#1A3C34] text-[10px] font-black uppercase px-4 py-1 rounded-full shadow-xs tracking-wider">
              🚀 Most Popular
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C89B2A]/20 text-[#1A3C34] text-xs font-extrabold uppercase">
                  <Rocket className="w-4 h-4 text-[#C89B2A]" /> Micro Creator
                </span>
                <span className="text-xs font-bold text-[#6B6355]">10K – 100K followers</span>
              </div>

              <div>
                <h3 className="font-extrabold text-xl text-[#1A3C34]">Micro Influencer</h3>
                <span className="text-xs text-[#6B6355] font-medium block pt-1">
                  Perfect for: Lifestyle creators, niche bloggers, YouTubers
                </span>
              </div>

              <div className="p-3 bg-white rounded-xl border border-[#C89B2A]/40 shadow-2xs">
                <span className="text-xs text-[#6B6355] block font-semibold">Commission Rate</span>
                <span className="text-lg font-black text-[#C89B2A]">Earn up to 20% commission</span>
              </div>

              <ul className="space-y-2.5 text-xs text-[#1A3C34] font-semibold">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0" /> Everything in Nano +</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0" /> Early access to premium brand campaigns</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0" /> Higher visibility in brand search</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0" /> Priority payout processing</li>
              </ul>
            </div>

            <button
              onClick={() => handleAuthClick('signup')}
              className="w-full py-3.5 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-colors shadow-md cursor-pointer"
            >
              Join as Micro Creator
            </button>
          </div>

          {/* Card 3 — Macro Tier */}
          <div className="bg-[#FDFAF4] rounded-2xl border-l-4 border-l-[#1A3C34] border-r border-t border-b border-[#E8E2D6] p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A3C34] text-white text-xs font-extrabold uppercase">
                  <Crown className="w-4 h-4 text-[#C89B2A]" /> Macro Creator
                </span>
                <span className="text-xs font-bold text-[#6B6355]">100K+ followers</span>
              </div>

              <div>
                <h3 className="font-extrabold text-xl text-[#1A3C34]">Macro Influencer</h3>
                <span className="text-xs text-[#6B6355] font-medium block pt-1">
                  Perfect for: Top YouTubers, Instagram stars, industry leaders
                </span>
              </div>

              <div className="p-3 bg-[#F5F0E8] rounded-xl border border-[#E8E2D6]">
                <span className="text-xs text-[#6B6355] block font-semibold">Commission Rate</span>
                <span className="text-lg font-black text-[#C89B2A]">Earn up to 20% commission</span>
              </div>

              <ul className="space-y-2.5 text-xs text-[#1A3C34] font-medium">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A3C34] flex-shrink-0" /> Everything in Micro +</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A3C34] flex-shrink-0" /> Featured placement in brand discovery</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A3C34] flex-shrink-0" /> Exclusive high-commission campaigns</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#1A3C34] flex-shrink-0" /> Dedicated campaign recommendations</li>
              </ul>
            </div>

            <button
              onClick={() => handleAuthClick('signup')}
              className="w-full py-3.5 rounded-xl border-2 border-[#1A3C34] text-[#1A3C34] hover:bg-[#1A3C34] hover:text-white font-extrabold text-xs transition-colors cursor-pointer"
            >
              Join as Macro Creator
            </button>
          </div>

        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 4 — PLATFORMS YOU CAN EARN FROM                             */}
      {/* =================================================================== */}
      <section className="my-16 bg-[#1A3C34] text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-7xl mx-auto space-y-12 text-center">
          
          <div className="space-y-3 max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Earn From Any Platform
            </h2>
            <div className="w-16 h-1 bg-[#C89B2A] mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-[#F5F0E8]/80 font-medium">
              Wherever your audience is — LinkX works there too
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-left">
            {[
              { name: 'Instagram', icon: Instagram, color: 'text-pink-500', desc: 'Best for Reels & Stories' },
              { name: 'YouTube', icon: Youtube, color: 'text-red-500', desc: 'Best for Video Reviews' },
              { name: 'Twitter / X', icon: Twitter, color: 'text-sky-400', desc: 'Best for Thread Marketing' },
              { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-500', desc: 'Best for B2B Products' },
              { name: 'Telegram', icon: Send, color: 'text-sky-300', desc: 'Best for Group Promotions' },
              { name: 'Blog', icon: Globe, color: 'text-[#C89B2A]', desc: 'Best for SEO Content' },
            ].map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FDFAF4] text-[#1A3C34] rounded-2xl p-5 shadow-md hover:-translate-y-1 hover:border-[#C89B2A] border-2 border-transparent transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#1A3C34]/10 flex items-center justify-center">
                      <IconComp className={`w-5 h-5 ${p.color}`} />
                    </div>
                    <h3 className="font-extrabold text-sm text-[#1A3C34]">{p.name}</h3>
                    <p className="text-[11px] text-[#6B6355] font-medium leading-snug">{p.desc}</p>
                  </div>

                  <span className="text-[10px] font-extrabold bg-[#C89B2A]/20 text-[#1A3C34] px-2 py-0.5 rounded-md inline-block self-start">
                    Up to 20%
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 5 — HOW IT WORKS FOR INFLUENCERS                            */}
      {/* =================================================================== */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            How Influencers Earn on LinkX
          </h2>
          <p className="text-sm text-[#6B6355] font-medium">
            Simple 4-step process — start earning in under 10 minutes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Step 1 */}
          <div className="bg-[#FDFAF4] rounded-2xl border-b-4 border-b-[#C89B2A] border-x border-t border-[#E8E2D6] p-6 shadow-xs space-y-3 relative">
            <span className="text-xs font-black bg-[#C89B2A] text-[#1A3C34] px-2.5 py-0.5 rounded-md inline-block">
              01
            </span>
            <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center">
              <UserPlus className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-[#1A3C34]">Sign Up Free</h3>
            <p className="text-xs text-[#6B6355] leading-relaxed">
              Create your free LinkX account. No approval, no fees, no waiting.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#FDFAF4] rounded-2xl border-b-4 border-b-[#C89B2A] border-x border-t border-[#E8E2D6] p-6 shadow-xs space-y-3 relative">
            <span className="text-xs font-black bg-[#C89B2A] text-[#1A3C34] px-2.5 py-0.5 rounded-md inline-block">
              02
            </span>
            <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-[#1A3C34]">Browse Campaigns</h3>
            <p className="text-xs text-[#6B6355] leading-relaxed">
              Pick from 500+ brand campaigns across fashion, beauty, electronics, travel & more.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#FDFAF4] rounded-2xl border-b-4 border-b-[#C89B2A] border-x border-t border-[#E8E2D6] p-6 shadow-xs space-y-3 relative">
            <span className="text-xs font-black bg-[#C89B2A] text-[#1A3C34] px-2.5 py-0.5 rounded-md inline-block">
              03
            </span>
            <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center">
              <Share2 className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-[#1A3C34]">Share Your Link</h3>
            <p className="text-xs text-[#6B6355] leading-relaxed">
              Generate your unique link. Post on Instagram, YouTube, WhatsApp — anywhere.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-[#FDFAF4] rounded-2xl border-b-4 border-b-[#C89B2A] border-x border-t border-[#E8E2D6] p-6 shadow-xs space-y-3 relative">
            <span className="text-xs font-black bg-[#2D7A4F] text-white px-2.5 py-0.5 rounded-md inline-block">
              04
            </span>
            <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center">
              <IndianRupee className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-[#1A3C34]">Earn & Withdraw</h3>
            <p className="text-xs text-[#6B6355] leading-relaxed">
              Earn commission on every sale. Withdraw instantly with no minimums.
            </p>
          </div>

        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 6 — BRAND COLLABORATIONS SHOWCASE                          */}
      {/* =================================================================== */}
      <section id="brands" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            500+ Brands Waiting for You
          </h2>
          <p className="text-sm text-[#6B6355] font-medium">
            Pick brands your audience loves. Earn more by staying authentic.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-extrabold">
          {['All', 'Fashion', 'Beauty', 'Electronics', 'Travel', 'Health'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1A3C34] text-[#C89B2A] shadow-xs'
                  : 'bg-white/80 border border-[#E8E2D6] text-[#6B6355] hover:text-[#1A3C34]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBrands.map((brand, idx) => (
            <div
              key={idx}
              className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-12 h-12 rounded-xl object-cover border border-[#E8E2D6]"
                  />
                  <div>
                    <h3 className="font-extrabold text-base text-[#1A3C34]">{brand.name}</h3>
                    <span className="text-[11px] text-[#6B6355] font-semibold">{brand.category}</span>
                  </div>
                </div>

                <span className="text-xs font-black text-[#C89B2A] bg-[#C89B2A]/15 px-3 py-1 rounded-full">
                  {brand.commission}
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenLinkGen ? onOpenLinkGen(brand.name) : handleAuthClick('signup')}
                  className="w-full py-2.5 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Generate Link</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => handleAuthClick('signup')}
            className="px-8 py-3.5 rounded-2xl border-2 border-[#1A3C34] text-[#1A3C34] hover:bg-[#1A3C34] hover:text-white font-extrabold text-xs transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>View All 500+ Campaigns</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 7 — INFLUENCER EARNINGS CALCULATOR                         */}
      {/* =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#EDE8DC] rounded-3xl border border-[#E8E2D6] p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column Interactive Estimator */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
                  How Much Can You Earn?
                </h2>
                <p className="text-xs sm:text-sm text-[#6B6355] font-semibold">
                  Based on real LinkX creator data
                </p>
              </div>

              <div className="space-y-5 bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] shadow-xs">
                
                {/* Platform Select */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-[#1A3C34] block">Select Platform</label>
                  <div className="grid grid-cols-4 gap-2 text-xs font-bold">
                    {['Instagram', 'YouTube', 'Blog', 'Telegram'].map((plat) => (
                      <button
                        key={plat}
                        onClick={() => setCalcPlatform(plat)}
                        className={`py-2 rounded-xl transition-all cursor-pointer ${
                          calcPlatform === plat
                            ? 'bg-[#1A3C34] text-[#C89B2A]'
                            : 'bg-[#F5F0E8] text-[#6B6355] hover:text-[#1A3C34]'
                        }`}
                      >
                        {plat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Followers Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#1A3C34]">
                    <span>Audience / Followers</span>
                    <span className="text-[#C89B2A] text-sm font-black">{followers}K followers</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="200"
                    value={followers}
                    onChange={(e) => setFollowers(Number(e.target.value))}
                    className="w-full accent-[#C89B2A] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#6B6355] font-semibold">
                    <span>1K</span>
                    <span>50K</span>
                    <span>100K</span>
                    <span>200K+</span>
                  </div>
                </div>

                {/* Posts Per Month Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#1A3C34]">
                    <span>Promotional Posts / Month</span>
                    <span className="text-[#C89B2A] text-sm font-black">{postsPerMonth} posts</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={postsPerMonth}
                    onChange={(e) => setPostsPerMonth(Number(e.target.value))}
                    className="w-full accent-[#C89B2A] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#6B6355] font-semibold">
                    <span>1 post</span>
                    <span>5 posts</span>
                    <span>10 posts</span>
                    <span>20 posts</span>
                  </div>
                </div>

                {/* Live Output Card */}
                <div className="p-4 bg-[#1A3C34] text-white rounded-xl space-y-2 text-center">
                  <span className="text-[11px] text-[#F5F0E8]/70 font-semibold block uppercase tracking-wider">
                    Estimated Monthly Earnings
                  </span>
                  <div className="text-2xl sm:text-4xl font-black text-[#C89B2A]">
                    ₹{estEarnings.lower} – ₹{estEarnings.upper}
                  </div>
                  <span className="text-[10px] text-[#F5F0E8]/60 block">
                    Based on avg 2% conversion rate
                  </span>
                  <button
                    onClick={() => handleAuthClick('signup')}
                    className="mt-2 w-full py-3 rounded-xl bg-[#C89B2A] text-[#1A3C34] font-extrabold text-xs hover:bg-[#b08823] transition-colors cursor-pointer"
                  >
                    Start Earning This →
                  </button>
                </div>

              </div>
            </div>

            {/* Right Column Real Creator Examples */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-extrabold text-lg text-[#1A3C34]">
                Real Earning Snapshots
              </h3>

              <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-4 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#1A3C34] text-white font-extrabold flex items-center justify-center text-xs">
                      PS
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xs text-[#1A3C34]">Priya Sharma</h4>
                      <span className="text-[10px] text-[#6B6355] font-medium">Instagram • 25K followers</span>
                    </div>
                  </div>
                  <span className="text-xs font-black text-[#2D7A4F] bg-[#2D7A4F]/15 px-2.5 py-1 rounded-full">
                    Earns ₹22,000/mo
                  </span>
                </div>
              </div>

              <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-4 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#1A3C34] text-white font-extrabold flex items-center justify-center text-xs">
                      RV
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xs text-[#1A3C34]">Rahul Verma</h4>
                      <span className="text-[10px] text-[#6B6355] font-medium">YouTube • 80K subscribers</span>
                    </div>
                  </div>
                  <span className="text-xs font-black text-[#2D7A4F] bg-[#2D7A4F]/15 px-2.5 py-1 rounded-full">
                    Earns ₹55,000/mo
                  </span>
                </div>
              </div>

              <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-4 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#1A3C34] text-white font-extrabold flex items-center justify-center text-xs">
                      SK
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xs text-[#1A3C34]">Sneha Kapoor</h4>
                      <span className="text-[10px] text-[#6B6355] font-medium">Blog • 15K readers/mo</span>
                    </div>
                  </div>
                  <span className="text-xs font-black text-[#2D7A4F] bg-[#2D7A4F]/15 px-2.5 py-1 rounded-full">
                    Earns ₹18,000/mo
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 8 — LINK GENERATOR DEMO (INTERACTIVE)                     */}
      {/* =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            Generate Your First Link in Seconds
          </h2>
          <p className="text-sm text-[#6B6355] font-medium">
            See how easy it is to start earning
          </p>
        </div>

        <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 sm:p-8 shadow-md text-left space-y-6">
          <form onSubmit={handleGenerateLink} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-[#1A3C34]">Step 1: Choose a Brand</label>
                <select
                  value={demoBrand}
                  onChange={(e) => setDemoBrand(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white border border-[#E8E2D6] text-xs font-bold text-[#1A3C34] focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                >
                  <option value="Myntra">Myntra (Up to 12%)</option>
                  <option value="Nykaa">Nykaa (Up to 15%)</option>
                  <option value="boAt">boAt (Up to 8%)</option>
                  <option value="MakeMyTrip">MakeMyTrip (Up to 6%)</option>
                  <option value="Mamaearth">Mamaearth (Up to 20%)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-extrabold text-[#1A3C34]">Step 2: Your Handle / Name</label>
                <input
                  type="text"
                  value={demoHandle}
                  onChange={(e) => setDemoHandle(e.target.value)}
                  placeholder="@yourname"
                  className="w-full p-3 rounded-xl bg-white border border-[#E8E2D6] text-xs font-bold text-[#1A3C34] focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate My Link</span>
            </button>
          </form>

          {/* Generated Link Output Area */}
          {generatedLink && (
            <div className="p-4 bg-[#F5F0E8] rounded-xl border border-[#E8E2D6] space-y-3 animate-fade-in">
              <span className="text-[11px] font-extrabold text-[#1A3C34] block uppercase tracking-wider">
                Your Unique Affiliate Link:
              </span>

              <div className="flex items-center justify-between gap-2 p-3 bg-white rounded-lg border border-[#E8E2D6]">
                <code className="text-xs font-mono font-bold text-[#1A3C34] truncate">
                  https://{generatedLink}
                </code>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-md bg-[#1A3C34] text-[#C89B2A] font-extrabold text-xs hover:bg-black transition-colors flex items-center gap-1 flex-shrink-0 cursor-pointer"
                >
                  {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-[#2D7A4F]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <p className="text-[11px] text-[#2D7A4F] font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Share this link and earn up to 12% on every sale!
              </p>

              <div className="flex items-center gap-2 pt-1">
                <span className="text-[10px] text-[#6B6355] font-bold">Quick Share:</span>
                <a
                  href={`https://wa.me/?text=Check%20this%20out:%20https://${generatedLink}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded bg-[#2D7A4F] text-white text-[10px] font-bold"
                >
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded bg-pink-600 text-white text-[10px] font-bold"
                >
                  Instagram Bio
                </a>
              </div>
            </div>
          )}

          <p className="text-[11px] text-[#6B6355] font-medium text-center">
            Sign up to access all 500+ brands and track your earnings live in your dashboard.
          </p>
        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 9 — SUCCESS STORIES                                         */}
      {/* =================================================================== */}
      <section id="stories" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            Real Influencers. <span className="text-[#C89B2A]">Real Earnings.</span>
          </h2>
          <p className="text-sm text-[#6B6355] font-medium">
            Thousands of Indian creators are already making money with LinkX
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#FDFAF4] rounded-2xl border-t-4 border-t-[#C89B2A] border-x border-b border-[#E8E2D6] p-7 shadow-xs space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C89B2A] text-[#C89B2A]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed italic">
                "I was skeptical at first, but LinkX changed everything. I made ₹45,000 in my second month just by adding links to my Instagram bio and stories."
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-[#E8E2D6]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1A3C34] text-white font-extrabold flex items-center justify-center text-sm shadow-2xs">
                  PS
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#1A3C34]">Priya Sharma</h4>
                  <span className="text-[11px] text-[#6B6355] font-medium block">@priyasharma • Mumbai</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-bold text-[#1A3C34] bg-[#F5F0E8] p-2 rounded-xl">
                <span>Fashion & Lifestyle</span>
                <span>45K Followers</span>
              </div>

              <span className="text-[11px] font-black bg-[#C89B2A]/20 text-[#1A3C34] px-3 py-1 rounded-full block text-center">
                Withdrawn ₹45,000 last month
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FDFAF4] rounded-2xl border-t-4 border-t-[#C89B2A] border-x border-b border-[#E8E2D6] p-7 shadow-xs space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C89B2A] text-[#C89B2A]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed italic">
                "As a tech YouTuber, promoting boAt and Samsung was natural. LinkX gave me the tools to turn every video into passive income."
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-[#E8E2D6]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1A3C34] text-white font-extrabold flex items-center justify-center text-sm shadow-2xs">
                  RV
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#1A3C34]">Rahul Verma</h4>
                  <span className="text-[11px] text-[#6B6355] font-medium block">@rahulverma • Delhi</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-bold text-[#1A3C34] bg-[#F5F0E8] p-2 rounded-xl">
                <span>Tech & Gadgets</span>
                <span>1.2L Subscribers</span>
              </div>

              <span className="text-[11px] font-black bg-[#C89B2A]/20 text-[#1A3C34] px-3 py-1 rounded-full block text-center">
                Withdrawn ₹82,000 last month
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FDFAF4] rounded-2xl border-t-4 border-t-[#C89B2A] border-x border-b border-[#E8E2D6] p-7 shadow-xs space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C89B2A] text-[#C89B2A]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed italic">
                "My Telegram channel has 20K members. I share Nykaa and Mamaearth links and the commissions just keep coming. Best passive income ever."
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-[#E8E2D6]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1A3C34] text-white font-extrabold flex items-center justify-center text-sm shadow-2xs">
                  SK
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#1A3C34]">Sneha Kapoor</h4>
                  <span className="text-[11px] text-[#6B6355] font-medium block">@snehakapoor • Bangalore</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-bold text-[#1A3C34] bg-[#F5F0E8] p-2 rounded-xl">
                <span>Beauty & Skincare</span>
                <span>50K Reach</span>
              </div>

              <span className="text-[11px] font-black bg-[#C89B2A]/20 text-[#1A3C34] px-3 py-1 rounded-full block text-center">
                Withdrawn ₹38,000 last month
              </span>
            </div>
          </div>

        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 10 — TOOLS FOR INFLUENCERS                                 */}
      {/* =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            Everything You Need to Succeed
          </h2>
          <p className="text-sm text-[#6B6355] font-medium">
            LinkX gives you professional tools — for free
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs hover:border-[#C89B2A] transition-all space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center shadow-xs">
              <BarChart2 className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-[#1A3C34]">
              Live Analytics Dashboard
            </h3>
            <p className="text-xs text-[#6B6355] leading-relaxed">
              Track clicks, conversions, and earnings in real-time with comprehensive breakdown charts.
            </p>
          </div>

          <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs hover:border-[#C89B2A] transition-all space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center shadow-xs">
              <LinkIcon className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-[#1A3C34]">
              Smart Link Generator
            </h3>
            <p className="text-xs text-[#6B6355] leading-relaxed">
              Create branded short links for any campaign instantly in one click.
            </p>
          </div>

          <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs hover:border-[#C89B2A] transition-all space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center shadow-xs">
              <Bell className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-[#1A3C34]">
              Campaign Alerts
            </h3>
            <p className="text-xs text-[#6B6355] leading-relaxed">
              Get notified when new high-commission campaigns go live in your niche.
            </p>
          </div>

          <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs hover:border-[#C89B2A] transition-all space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center shadow-xs">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-[#1A3C34]">
              Instant Payouts
            </h3>
            <p className="text-xs text-[#6B6355] leading-relaxed">
              Withdraw anytime — UPI, Bank IMPS, Paytm, PayPal with zero minimums.
            </p>
          </div>

          <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs hover:border-[#C89B2A] transition-all space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center shadow-xs">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-[#1A3C34]">
              Mobile Friendly
            </h3>
            <p className="text-xs text-[#6B6355] leading-relaxed">
              Manage everything from your phone, anywhere, anytime with ease.
            </p>
          </div>

          <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs hover:border-[#C89B2A] transition-all space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center shadow-xs">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-[#1A3C34]">
              Creator Support
            </h3>
            <p className="text-xs text-[#6B6355] leading-relaxed">
              Dedicated support team to guide you on strategies and campaign optimization.
            </p>
          </div>

        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 11 — FAQ FOR INFLUENCERS                                    */}
      {/* =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            Influencer <span className="text-[#C89B2A]">FAQs</span>
          </h2>
        </div>

        <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-4 sm:p-6 shadow-xs divide-y divide-[#E8E2D6]">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="py-4 first:pt-2 last:pb-2">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left font-extrabold text-base text-[#1A3C34] flex items-center justify-between gap-4 py-2 focus:outline-none cursor-pointer"
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
      {/* SECTION 12 — FINAL CTA BANNER                                      */}
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
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Your Audience Is Your <br />
              <span className="text-[#C89B2A]">Greatest Asset. Use It.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#F5F0E8]/90 font-medium">
              Join 10,000+ Indian influencers turning their content into consistent income with LinkX.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleAuthClick('signup')}
                className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-base transition-all shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join as Influencer — It's Free</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => handleAuthClick('signup')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl border-2 border-white/40 text-white hover:bg-white hover:text-[#1A3C34] font-extrabold text-base transition-all flex items-center justify-center cursor-pointer"
              >
                Browse Campaigns First
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-[#F5F0E8]/80 pt-2">
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#C89B2A]" />
                All Tiers Welcome
              </span>
              <span>|</span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#C89B2A]" />
                Instant Payouts
              </span>
              <span>|</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#C89B2A]" />
                Free Forever
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
