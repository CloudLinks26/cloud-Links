'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useGlobalContext } from '@/components/GlobalProvider';
import {
  ArrowRight,
  Play,
  Star,
  Wallet,
  TrendingUp,
  Users,
  CheckCircle2,
  Tag,
  ShoppingBag,
  Search,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Filter,
  Link as LinkIcon,
  Share2,
  Calculator,
  Check,
  UserCheck,
  Megaphone,
  Zap,
  BarChart3,
  Smartphone,
  Headphones,
  Quote,
  Clock,
  BookOpen,
  X,
  Mail,
  Send,
  Lock,
  Link2,
  Globe,
  Code2,
  Package,
  Building2,
  Target,
  BarChart2,
  Laptop,
} from 'lucide-react';
import { CAMPAIGNS, BRANDS_MARQUEE, TESTIMONIALS, BLOG_POSTS } from '@/data/mockData';
import { BlogPost } from '@/types';

export default function HomePageContent() {
  const { onOpenAuth, onOpenLinkGen, searchTerm: externalSearchTerm, showToast: onToast } = useGlobalContext();
  // TopCampaigns state
  const [searchTerm, setSearchTerm] = useState(externalSearchTerm);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Fashion', 'Electronics', 'Travel', 'Beauty', 'General'];

  const filteredCampaigns = CAMPAIGNS.filter((camp) => {
    const matchesSearch =
      camp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      camp.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      camp.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || camp.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // HowItWorks - Earnings Calculator State
  const [monthlyClicks, setMonthlyClicks] = useState<number>(3500);
  const [avgCommissionRate, setAvgCommissionRate] = useState<number>(12); // %

  const conversionRate = 0.028;
  const avgOrderValue = 950;
  const estimatedOrders = Math.round(monthlyClicks * conversionRate);
  const totalSalesVolume = estimatedOrders * avgOrderValue;
  const estimatedEarnings = Math.round(totalSalesVolume * (avgCommissionRate / 100));

  const steps = [
    {
      number: '1',
      icon: Search,
      title: 'Choose a Brand',
      description: 'Find brands you want to promote.',
    },
    {
      number: '2',
      icon: LinkIcon,
      title: 'Get Your Affiliate Link',
      description: 'Create a unique link in seconds.',
    },
    {
      number: '3',
      icon: Share2,
      title: 'Promote & Earn',
      description: 'Drive conversions and earn commissions.',
    },
  ];

  // WhyCloudLinks features
  const features = [
    {
      icon: Wallet,
      title: 'High Commissions',
      description: 'Earn up to 20% commission on top Indian e-commerce & lifestyle brands.',
    },
    {
      icon: Zap,
      title: 'Instant Payouts',
      description: 'Request UPI and bank transfers cleared directly to your account within 24 hours.',
    },
    {
      icon: Tag,
      title: '500+ Top Brands',
      description: 'Access Myntra, boAt, MakeMyTrip, Amazon, Mamaearth, AJIO, and 500+ partners.',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Dashboard',
      description: 'Track clicks, orders, and commission earnings live as they happen.',
    },
    {
      icon: Smartphone,
      title: 'Any Platform',
      description: 'Share custom affiliate links seamlessly on Instagram, WhatsApp, YouTube, Telegram, or Blog.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Get 1-on-1 WhatsApp & email assistance whenever you need help scaling.',
    },
  ];

  // Blog modal state
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Newsletter state
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'Homepage' }),
      });
      const data = await res.json();
      if (data.success) {
        setSubscribed(true);
        onToast('Subscribed to CloudLinks Creator Weekly! Check your inbox soon.');
        setEmail('');
        setTimeout(() => setSubscribed(false), 5000);
      } else {
        onToast('Something went wrong. Please try again.');
      }
    } catch {
      onToast('Something went wrong. Please try again.');
    }
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section id="top" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* LEFT COLUMN: Text & CTAs */}
            <div className="lg:col-span-6 space-y-6 lg:pr-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDFAF4] border border-[#E8E2D6] shadow-2xs">
                <Star className="w-4 h-4 text-[#C89B2A] fill-[#C89B2A]" />
                <span className="text-xs font-bold text-[#1A3C34] tracking-wide">
                  India's Most Trusted Affiliate Platform
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight">
                <span className="text-[#1A3C34] block">A Smarter Way to </span>
                <span className="text-[#C89B2A] block mt-1">Connect, Promote & Earn </span>
              </h1>

              <p className="text-base sm:text-lg text-[#6B6355] max-w-xl font-normal leading-relaxed">
                One of the Best Affiliate Marketing Platforms for Influencers, Bloggers, Creators & Publishers 

              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
  onClick={() => window.open('https://analytics.trackier.io/register.html', '_blank')}
  className="px-7 py-4 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
>
  <span>Start Your Affiliate Journey</span>
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</button>

                <button
                  onClick={scrollToHowItWorks}
                  className="px-6 py-4 rounded-xl border-2 border-[#1A3C34] hover:bg-[#1A3C34] text-[#1A3C34] hover:text-white font-bold text-base transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>How It Works</span>
                </button>
              </div>



              <div className="p-3.5 bg-[#FDFAF4] rounded-xl border border-[#E8E2D6] shadow-sm flex items-center justify-between gap-3 max-w-lg">
                <div className="flex items-center gap-2.5 text-xs text-[#1A3C34] font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Find the right brands, create trackable affiliate links, and turn your audience into measurable results.
</span>
                </div>
                <button
                  onClick={() => onOpenLinkGen()}
                  className="px-3 py-1.5 rounded-lg bg-[#1A3C34] hover:bg-[#122b25] text-[#C89B2A] font-bold text-xs whitespace-nowrap transition-colors"
                >
                  Try Tool ⚡
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Image & Floating Cards */}
            <div className="lg:col-span-6 relative flex items-center justify-center pt-6 lg:pt-0">
              <div className="absolute w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] rounded-full bg-[#1A3C34]/10 blur-2xl -z-10" />
              <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full bg-[#1A3C34] -z-10 bottom-0 scale-95 opacity-90 shadow-xl" />

              <div className="relative z-10 max-w-sm sm:max-w-md mx-auto">
                <img
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786186977/592_X_480_uknhez.png"
                  alt="Indian Creator earning on CloudLinks"
                  className="w-full h-auto object-cover rounded-3xl drop-shadow-2xl relative z-10 transform hover:scale-[1.01] transition-transform duration-500"
                />



                <div className="absolute top-1/2 -left-4 sm:-left-12 -translate-y-1/2 z-20 bg-[#FDFAF4] p-3.5 sm:p-4 rounded-2xl shadow-warm border border-[#E8E2D6] animate-float-delayed w-52 sm:w-60">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#C89B2A] text-[#1A3C34] rounded-xl flex-shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#6B6355] tracking-wider block">
                        This Month
                      </span>
                      <span className="text-base sm:text-lg font-extrabold text-[#1A3C34] font-sora block">
                        ₹85,420
                      </span>
                      <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">
                        +12% vs last month
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-2 sm:-right-6 z-20 bg-[#FDFAF4] p-3.5 sm:p-4 rounded-2xl shadow-warm border border-[#E8E2D6] animate-float w-56 sm:w-64">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#1A3C34] text-white rounded-xl flex-shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#6B6355] tracking-wider block">
                        Total Creators
                      </span>
                      <span className="text-base sm:text-lg font-extrabold text-[#1A3C34] font-sora block">
                        10,000+
                      </span>
                      <span className="text-[10px] text-[#6B6355] font-semibold block mt-0.5">
                        and growing fast!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-8 bg-[#FDFAF4] border-y border-[#E8E2D6] relative shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#E8E2D6]">
            <div className="flex items-center justify-center md:justify-start md:px-6 gap-4">
              <div className="p-3 bg-[#1A3C34]/10 text-[#1A3C34] rounded-2xl flex-shrink-0">
                <Tag className="w-6 h-6 text-[#1A3C34]" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold font-sora text-[#1A3C34] block">500+</span>
                <span className="text-xs sm:text-sm font-semibold text-[#6B6355]">Top Brands</span>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start md:px-6 gap-4">
              <div className="p-3 bg-[#1A3C34]/10 text-[#1A3C34] rounded-2xl flex-shrink-0">
                <Users className="w-6 h-6 text-[#1A3C34]" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold font-sora text-[#1A3C34] block">10,000+</span>
                <span className="text-xs sm:text-sm font-semibold text-[#6B6355]">Creators</span>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start md:px-6 gap-4">
              <div className="p-3 bg-[#1A3C34]/10 text-[#1A3C34] rounded-2xl flex-shrink-0">
                <Wallet className="w-6 h-6 text-[#1A3C34]" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold font-sora text-[#1A3C34] block">₹10Cr+</span>
                <span className="text-xs sm:text-sm font-semibold text-[#6B6355]">Paid to Creators</span>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start md:px-6 gap-4">
              <div className="p-3 bg-[#1A3C34]/10 text-[#1A3C34] rounded-2xl flex-shrink-0">
                <ShoppingBag className="w-6 h-6 text-[#1A3C34]" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold font-sora text-[#1A3C34] block">50L+</span>
                <span className="text-xs sm:text-sm font-semibold text-[#6B6355]">Orders Tracked</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TOP CAMPAIGNS */}
      <section id="campaigns" className="py-20 bg-[#F5F0E8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C89B2A] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                High Commission Offers
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#1A3C34]">
                Top Campaigns
              </h2>
              <p className="text-sm text-[#6B6355] mt-1">
                Promote 500+ top Indian brands and earn guaranteed payouts on every sale.
              </p>
            </div>

            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="text-sm font-bold text-[#C89B2A] hover:text-[#b08823] flex items-center gap-1.5 transition-colors self-start md:self-auto"
            >
              <span>View all campaigns</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <input
                  type="text"
                  placeholder="Search for brands (e.g. Myntra, boAt, MakeMyTrip), categories or products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#FDFAF4] border border-[#E8E2D6] text-[#1A3C34] placeholder:text-[#6B6355] text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A] shadow-xs"
                />
                <Search className="w-5 h-5 text-[#6B6355] absolute left-4 top-3.5" />
              </div>

              <button
                onClick={() => { }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1">
              <span className="text-xs font-semibold text-[#6B6355] flex items-center gap-1 mr-2 flex-shrink-0">
                <Filter className="w-3.5 h-3.5 text-[#1A3C34]" />
                Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${selectedCategory === cat
                    ? 'bg-[#1A3C34] text-white shadow-sm'
                    : 'bg-[#FDFAF4] text-[#6B6355] hover:text-[#1A3C34] border border-[#E8E2D6]'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="relative group">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#FDFAF4] text-[#1A3C34] border border-[#E8E2D6] shadow-md hidden md:flex items-center justify-center hover:bg-[#1A3C34] hover:text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#FDFAF4] text-[#1A3C34] border border-[#E8E2D6] shadow-md hidden md:flex items-center justify-center hover:bg-[#1A3C34] hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex items-stretch gap-6 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1"
            >
              {filteredCampaigns.length > 0 ? (
                filteredCampaigns.map((camp) => (
                  <div
                    key={camp.id}
                    className="flex-shrink-0 w-[300px] sm:w-[320px] bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-warm-hover flex flex-col justify-between"
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Single Centered Image */}
                      <div className="w-28 h-16 rounded-2xl bg-white border border-[#E8E2D6] p-1.5 flex items-center justify-center shadow-xs overflow-hidden mb-4">
                        <img
                          src={camp.logo || camp.image}
                          alt={camp.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>

                      {/* Name & Category */}
                      <h3 className="font-display font-extrabold text-lg text-[#1A3C34] leading-tight mb-0.5">
                        {camp.name}
                      </h3>


                      {/* Description */}
                      <p className="text-xs text-[#6B6355] line-clamp-2 mb-5 leading-relaxed">
                        {camp.description}
                      </p>

                      {/* Payout Block */}
                      <div className="w-full p-3.5 bg-[#F5F0E8] rounded-xl border border-[#E8E2D6] mb-5 space-y-2 text-left">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-[#6B6355] font-medium">Commission:</span>
                          <span className="font-extrabold font-sora text-[#C89B2A] text-sm">
                            {camp.commission}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-[#6B6355]">
                          <span>Avg. Payout: <strong>{camp.avgPayout}</strong></span>
                          <span>Cookie: <strong>{camp.cookieDuration}</strong></span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link
                      href={`/campaigns/${camp.id}`}
                      className="w-full py-3 px-4 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-all shadow-xs flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>Promote Now</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))
              ) : (
                <div className="w-full py-12 text-center bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6]">
                  <p className="text-sm font-semibold text-[#6B6355]">
                    No campaigns matching "{searchTerm}". Try searching for Fashion, boAt, or Travel.
                  </p>
                </div>
              )}
            </div>
          </div>



        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section id="how-it-works" className="py-20 bg-[#FDFAF4] border-y border-[#E8E2D6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A3C34]/10 text-[#1A3C34] text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C89B2A]" />
              Simple 3-Step Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#1A3C34]">
              How It Works
            </h2>
            <p className="text-base text-[#6B6355]">
              Start earning in 3 simple steps - no technical knowledge or complex approvals required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-28 left-[20%] right-[20%] h-0.5 border-t-2 border-dashed border-[#C89B2A] z-0" />

            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative z-10 bg-[#F5F0E8] rounded-2xl border border-[#E8E2D6] p-6 text-center space-y-4 shadow-warm-hover flex flex-col items-center justify-between"
                >
                  <div className="absolute -top-4 bg-[#C89B2A] text-[#1A3C34] font-black font-sora text-sm px-4 py-1 rounded-full shadow-sm">
                    {step.number}
                  </div>

                  <div className="pt-2">
                    <div className="w-16 h-16 rounded-2xl bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center mx-auto mb-4 shadow-md">
                      <Icon className="w-8 h-8" />
                    </div>

                    <h3 className="font-display font-bold text-xl text-[#1A3C34] mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-2 w-full">
                    {idx === 0 && (
                      <a
                        href="#campaigns"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A3C34] hover:text-[#C89B2A] transition-colors"
                      >
                        Browse Top Brands ↓
                      </a>
                    )}
                    {idx === 1 && (
                      <button
                        onClick={() => onOpenLinkGen()}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A3C34] hover:text-[#C89B2A] transition-colors"
                      >
                        Try Link Generator ⚡
                      </button>
                    )}
                    {idx === 2 && (
                      <button
                        onClick={() => onOpenAuth('signup', 'creator')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A3C34] hover:text-[#C89B2A] transition-colors"
                      >
                        Get Instant UPI Payout →
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div id="payouts" className="bg-[#1A3C34] text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#C89B2A]/20 rounded-full blur-3xl" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89B2A]/20 text-[#C89B2A] text-xs font-bold uppercase tracking-wider">
                  <Calculator className="w-3.5 h-3.5" />
                  Earnings Calculator
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                  How Much Can You Earn with CloudLinks?
                </h3>

                <p className="text-xs sm:text-sm text-[#E8E2D6]/80 leading-relaxed">
                  Adjust the sliders to simulate your monthly earnings based on your link clicks and average brand commission.
                </p>

                <div className="space-y-2 pt-2 text-xs text-[#E8E2D6]/90">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C89B2A]" />
                    <span>Transparent tracking with live click counters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C89B2A]" />
                    <span>Withdraw directly to UPI or Bank Account within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C89B2A]" />
                    <span>No hidden fees or commission deductions</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#FDFAF4] text-[#1A3C34] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span>Estimated Monthly Link Clicks</span>
                    <span className="text-sm font-extrabold font-sora text-[#C89B2A]">
                      {monthlyClicks.toLocaleString()} clicks/mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="25000"
                    step="500"
                    value={monthlyClicks}
                    onChange={(e) => setMonthlyClicks(Number(e.target.value))}
                    className="w-full accent-[#C89B2A] h-2 bg-[#E8E2D6] rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#6B6355]">
                    <span>500 clicks</span>
                    <span>10,000 clicks</span>
                    <span>25,000+ clicks</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span>Average Brand Commission Rate</span>
                    <span className="text-sm font-extrabold font-sora text-[#1A3C34]">
                      {avgCommissionRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="20"
                    step="1"
                    value={avgCommissionRate}
                    onChange={(e) => setAvgCommissionRate(Number(e.target.value))}
                    className="w-full accent-[#1A3C34] h-2 bg-[#E8E2D6] rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#6B6355]">
                    <span>5% (Travel/Mobiles)</span>
                    <span>12% (Fashion/Audio)</span>
                    <span>20% (Beauty/Skincare)</span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#1A3C34] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-[#E8E2D6]/80 uppercase font-bold tracking-wider block">
                      Estimated Monthly Earnings
                    </span>
                    <span className="text-3xl sm:text-4xl font-extrabold font-sora text-[#C89B2A] block mt-0.5">
                      ₹{estimatedEarnings.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] text-[#E8E2D6]/70 block">
                      Based on ~{estimatedOrders} estimated orders/mo
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenAuth('signup', 'creator')}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    Start Earning This Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHERE DO YOU FIT IN? (SECTION A) */}
      <section id="where-do-you-fit-in" className="py-20 bg-[#F5F0E8] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#1A3C34_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1A3C34]">
              Where Do You <span className="text-[#C89B2A]">Fit In?</span>
            </h2>
            <div className="w-20 h-1 bg-[#C89B2A] rounded-full mx-auto" />
            <p className="text-sm sm:text-base text-[#6B6355] font-medium pt-1">
              CloudLinks works for everyone whether you're a creator looking to earn or a brand looking to grow
            </p>
          </div>

          <div className="bg-[#FDFAF4] rounded-3xl border border-[#E8E2D6] p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 — Publishers / Influencers */}
              <div className="border-3 border-[#C89B2A] rounded-3xl bg-[#FDFAF4] p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 relative group overflow-hidden">
                <div className="space-y-6">
                  <div className="text-center">
                    <span className="text-xs font-black uppercase tracking-widest text-[#1A3C34] bg-[#C89B2A]/20 px-3 py-1 rounded-full border border-[#C89B2A]/40">
                      PUBLISHERS / INFLUENCERS
                    </span>
                  </div>

                  {/* Hero Image Container for Publishers */}
                  <div className="w-full aspect-[16/9] bg-[#F5F0E8] rounded-2xl border border-[#E8E2D6] relative overflow-hidden group-hover:scale-[1.01] transition-transform flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786189935/Untitled_design_36_1_my3iep.png"
                      alt="Creators and Influencers working"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col items-start gap-1.5">
                      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-[#E8E2D6] shadow-sm">
                        <Link2 className="w-3.5 h-3.5 text-[#C89B2A]" />
                        <span className="text-[11px] font-bold text-[#1A3C34]">cloudlinks.in/myntra-deal</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#1A3C34] text-white px-2.5 py-1 rounded-lg shadow-sm">
                        <Zap className="w-3.5 h-3.5 text-[#C89B2A]" />
                        <span className="text-[11px] font-bold">12% Commission</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm font-bold text-[#1A3C34]">
                      <div className="w-6 h-6 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center text-xs font-black flex-shrink-0">🔗</div>
                      <span>Generate affiliate links instantly</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-[#1A3C34]">
                      <div className="w-6 h-6 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center text-xs font-black flex-shrink-0">💰</div>
                      <span>Earn up to 20% commission per sale</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-[#1A3C34]">
                      <div className="w-6 h-6 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center text-xs font-black flex-shrink-0">⚡</div>
                      <span>Instant payouts - no minimum</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-[#1A3C34]">
                      <div className="w-6 h-6 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center text-xs font-black flex-shrink-0">📊</div>
                      <span>Real-time earnings dashboard</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-[#E8E2D6] mt-6">
                  <a
                    href="https://analytics.trackier.io/register.html"
                    className="bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-xs py-3.5 px-5 rounded-xl transition-all shadow-md flex-1 text-center cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Join Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/how-it-works"
                    className="bg-[#1A3C34] hover:bg-[#0F2823] text-white font-black text-xs py-3.5 px-5 rounded-xl transition-all flex-1 text-center cursor-pointer block"
                  >
                    Know More
                  </Link>
                </div>
              </div>

              {/* Card 2 — Advertisers / Brands */}
              <div className="border-3 border-[#C89B2A] rounded-3xl bg-[#FDFAF4] p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 relative group overflow-hidden">
                <div className="space-y-6">
                  <div className="text-center">
                    <span className="text-xs font-black uppercase tracking-widest text-[#1A3C34] bg-[#C89B2A]/20 px-3 py-1 rounded-full border border-[#C89B2A]/40">
                      ADVERTISERS / BRANDS
                    </span>
                  </div>

                  {/* Hero Image Container for Advertisers */}
                  <div className="w-full aspect-[16/9] bg-[#F5F0E8] rounded-2xl border border-[#E8E2D6] relative overflow-hidden group-hover:scale-[1.01] transition-transform flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786189940/Untitled_design_36_2_eyhgwx.png"
                      alt="Brands and Marketing strategy"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col items-start gap-1.5">
                      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-[#E8E2D6] shadow-sm">
                        <Users className="w-3.5 h-3.5 text-[#1A3C34]" />
                        <span className="text-[11px] font-bold text-[#1A3C34]">10,000+ Creators Active</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#C89B2A] text-[#1A3C34] px-2.5 py-1 rounded-lg shadow-sm font-black">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Pay Per Sales Only</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm font-bold text-[#1A3C34]">
                      <div className="w-6 h-6 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center text-xs font-black flex-shrink-0">👥</div>
                      <span>Access 10,000+ active Indian creators</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-[#1A3C34]">
                      <div className="w-6 h-6 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center text-xs font-black flex-shrink-0">📈</div>
                      <span>Pay only for real conversions</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-[#1A3C34]">
                      <div className="w-6 h-6 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center text-xs font-black flex-shrink-0">🎯</div>
                      <span>Target the right audience</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-[#1A3C34]">
                      <div className="w-6 h-6 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center text-xs font-black flex-shrink-0">📊</div>
                      <span>Full campaign analytics dashboard</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-[#E8E2D6] mt-6">
                  <button
                    onClick={() => onOpenAuth('signup', 'brand')}
                    className="bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-xs py-3.5 px-5 rounded-xl transition-all shadow-md flex-1 text-center cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Contact Sales</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    href="/about-us"
                    className="bg-[#1A3C34] hover:bg-[#0F2823] text-white font-black text-xs py-3.5 px-5 rounded-xl transition-all flex-1 text-center cursor-pointer block"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* 6. BRAND UNIVERSE BUBBLES (SECTION B) */}
      <section id="brand-universe" className="py-20 bg-[#EDE8DC] relative overflow-hidden border-t border-[#E8E2D6]">
        <style>{`
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(2deg); }
          }
          @keyframes floatMedium {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-16px) rotate(-2deg); }
          }
          @keyframes floatFast {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(3deg); }
          }
          .animate-float-slow { animation: floatSlow 5s ease-in-out infinite; }
          .animate-float-medium { animation: floatMedium 4s ease-in-out infinite; }
          .animate-float-fast { animation: floatFast 3.5s ease-in-out infinite; }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1A3C34]">
              <span className="text-[#C89B2A]">500+ Brands</span> Waiting for You
            </h2>
            <div className="w-20 h-1 bg-[#C89B2A] rounded-full mx-auto" />
            <p className="text-sm sm:text-base text-[#6B6355] font-medium pt-1">
              From fashion to finance, every major Indian brand in one place
            </p>
          </div>

          <div className="relative min-h-[480px] sm:min-h-[540px] hidden md:block">
            <div className="absolute top-10 left-12 w-4 h-4 bg-[#C89B2A]/40 rounded-full blur-[1px] animate-ping" />
            <div className="absolute top-1/3 right-16 w-6 h-6 bg-[#1A3C34]/20 rounded-full" />
            <div className="absolute bottom-16 left-1/4 w-3 h-3 bg-[#C89B2A] rounded-full" />
            <div className="absolute top-1/2 left-10 w-5 h-5 bg-[#1A3C34]/30 rounded-full" />

            <div className="absolute top-[8%] left-[12%] animate-float-slow">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white border-2 border-[#E8E2D6] shadow-xl flex flex-col items-center justify-center p-3 hover:scale-110 hover:border-[#C89B2A] hover:shadow-2xl transition-all cursor-pointer group">
                <span className="text-xl sm:text-2xl font-black text-[#1A3C34] group-hover:text-[#C89B2A] transition-colors">amazon</span>
                <span className="text-[10px] font-bold text-[#6B6355] uppercase tracking-wider">Up to 10%</span>
              </div>
            </div>

            <div className="absolute top-[12%] right-[10%] animate-float-medium">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white border-2 border-[#E8E2D6] shadow-xl flex flex-col items-center justify-center p-3 hover:scale-110 hover:border-[#C89B2A] hover:shadow-2xl transition-all cursor-pointer group">
                <span className="text-lg sm:text-xl font-black text-[#1A3C34] group-hover:text-[#C89B2A] transition-colors">Flipkart</span>
                <span className="text-[10px] font-bold text-[#6B6355] uppercase tracking-wider">Up to 12%</span>
              </div>
            </div>

            <div className="absolute top-[42%] left-[6%] animate-float-fast">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border-2 border-[#E8E2D6] shadow-lg flex flex-col items-center justify-center p-2.5 hover:scale-110 hover:border-[#C89B2A] transition-all cursor-pointer group">
                <span className="text-base sm:text-lg font-black text-[#1A3C34] group-hover:text-[#C89B2A]">Myntra</span>
                <span className="text-[9px] font-bold text-[#6B6355]">12% Comm</span>
              </div>
            </div>

            <div className="absolute top-[2%] left-[45%] animate-float-slow">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border-2 border-[#E8E2D6] shadow-lg flex flex-col items-center justify-center p-2.5 hover:scale-110 hover:border-[#C89B2A] transition-all cursor-pointer group">
                <span className="text-lg font-black text-[#1A3C34] group-hover:text-[#C89B2A]">AJIO</span>
                <span className="text-[9px] font-bold text-[#6B6355]">10% Comm</span>
              </div>
            </div>

            <div className="absolute top-[38%] right-[6%] animate-float-slow">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border-2 border-[#E8E2D6] shadow-lg flex flex-col items-center justify-center p-2.5 hover:scale-110 hover:border-[#C89B2A] transition-all cursor-pointer group">
                <span className="text-sm sm:text-base font-black text-[#1A3C34] group-hover:text-[#C89B2A]">SAMSUNG</span>
                <span className="text-[9px] font-bold text-[#6B6355]">8% Comm</span>
              </div>
            </div>

            <div className="absolute top-[48%] left-[36%] animate-float-medium">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border-2 border-[#E8E2D6] shadow-lg flex flex-col items-center justify-center p-2.5 hover:scale-110 hover:border-[#C89B2A] transition-all cursor-pointer group">
                <span className="text-base sm:text-lg font-black text-[#1A3C34] group-hover:text-[#C89B2A]">NYKAA</span>
                <span className="text-[9px] font-bold text-[#6B6355]">14% Comm</span>
              </div>
            </div>

            <div className="absolute bottom-[6%] left-[20%] animate-float-fast">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-[#E8E2D6] shadow-md flex flex-col items-center justify-center p-2 hover:scale-110 hover:border-[#C89B2A] transition-all cursor-pointer group">
                <span className="text-xs sm:text-sm font-black text-[#1A3C34] group-hover:text-[#C89B2A]">mamaearth</span>
                <span className="text-[8px] font-bold text-[#6B6355]">20% Comm</span>
              </div>
            </div>

            <div className="absolute top-[28%] left-[26%] animate-float-medium">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-[#E8E2D6] shadow-md flex flex-col items-center justify-center p-2 hover:scale-110 hover:border-[#C89B2A] transition-all cursor-pointer group">
                <span className="text-[11px] sm:text-xs font-black text-[#1A3C34] group-hover:text-[#C89B2A] text-center">make<br />my<br />trip</span>
                <span className="text-[8px] font-bold text-[#6B6355]">8% Comm</span>
              </div>
            </div>

            <div className="absolute bottom-[8%] right-[22%] animate-float-slow">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-[#E8E2D6] shadow-md flex flex-col items-center justify-center p-2 hover:scale-110 hover:border-[#C89B2A] transition-all cursor-pointer group">
                <span className="text-xs sm:text-sm font-black text-[#1A3C34] group-hover:text-[#C89B2A]">boAt</span>
                <span className="text-[8px] font-bold text-[#6B6355]">15% Comm</span>
              </div>
            </div>

            <div className="absolute top-[26%] right-[28%] animate-float-fast">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-[#E8E2D6] shadow-md flex flex-col items-center justify-center p-2 hover:scale-110 hover:border-[#C89B2A] transition-all cursor-pointer group">
                <span className="text-xs sm:text-sm font-black text-[#1A3C34] group-hover:text-[#C89B2A]">meesho</span>
                <span className="text-[8px] font-bold text-[#6B6355]">12% Comm</span>
              </div>
            </div>
          </div>

          <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 py-4">
            {[
              { name: 'Amazon.in', comm: 'Up to 10%' },
              { name: 'Flipkart', comm: 'Up to 12%' },
              { name: 'Myntra', comm: '12% Comm' },
              { name: 'AJIO', comm: '10% Comm' },
              { name: 'Samsung', comm: '8% Comm' },
              { name: 'Nykaa', comm: '14% Comm' },
              { name: 'Mamaearth', comm: '20% Comm' },
              { name: 'MakeMyTrip', comm: '8% Comm' },
              { name: 'boAt', comm: '15% Comm' },
              { name: 'Meesho', comm: '12% Comm' },
            ].map((brand) => (
              <div key={brand.name} className="bg-white rounded-2xl border border-[#E8E2D6] p-4 text-center shadow-xs flex flex-col items-center justify-center gap-1">
                <span className="font-extrabold text-sm text-[#1A3C34]">{brand.name}</span>
                <span className="text-[10px] font-bold text-[#C89B2A]">{brand.comm}</span>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/campaigns"
              className="bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-sm py-3.5 px-8 rounded-xl transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <span>View All Campaigns</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. LINKX TOOLS & FEATURES (SECTION C) */}
      {/* 7. LINKX TOOLS & FEATURES (SECTION C) */}
<section id="tools-features" className="py-20 bg-[#1A3C34] text-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
    <div className="text-center max-w-2xl mx-auto space-y-3">
      <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
        Why Choose <span className="text-[#C89B2A]">CloudsLink?</span>
      </h2>
      <div className="w-16 h-1 bg-[#C89B2A] rounded-full mx-auto" />
      <p className="text-sm sm:text-base text-[#E8E2D6]/80 font-medium pt-1">
        Everything you need to discover better campaigns, drive conversions, and grow your affiliate revenue.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* 1. Competitive Commissions */}
      <div className="bg-[#234D42] rounded-2xl p-6 sm:p-8 space-y-4 text-center border border-white/10 hover:border-t-4 hover:border-t-[#C89B2A] hover:-translate-y-2 transition-all duration-300 shadow-xl group">
        <div className="w-14 h-14 rounded-2xl bg-[#1A3C34] text-[#C89B2A] border border-[#C89B2A]/30 flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform">
          <Link2 className="w-7 h-7" />
        </div>
        <h3 className="font-display font-extrabold text-xl text-white">Competitive Commissions</h3>
        <p className="text-xs sm:text-sm text-[#E8E2D6]/80 leading-relaxed">
          Access affiliate programs with commission structures designed to reward the sales, leads and conversions you generate.
        </p>
      </div>

      {/* 2. Reliable Payouts */}
      <div className="bg-[#234D42] rounded-2xl p-6 sm:p-8 space-y-4 text-center border border-white/10 hover:border-t-4 hover:border-t-[#C89B2A] hover:-translate-y-2 transition-all duration-300 shadow-xl group">
        <div className="w-14 h-14 rounded-2xl bg-[#1A3C34] text-[#C89B2A] border border-[#C89B2A]/30 flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform">
          <Smartphone className="w-7 h-7" />
        </div>
        <h3 className="font-display font-extrabold text-xl text-white">Reliable Payouts</h3>
        <p className="text-xs sm:text-sm text-[#E8E2D6]/80 leading-relaxed">
          Track your approved commissions and manage your payouts through a simple, transparent system.
        </p>
      </div>

      {/* 3. Growing Brand Network */}
      <div className="bg-[#234D42] rounded-2xl p-6 sm:p-8 space-y-4 text-center border border-white/10 hover:border-t-4 hover:border-t-[#C89B2A] hover:-translate-y-2 transition-all duration-300 shadow-xl group">
        <div className="w-14 h-14 rounded-2xl bg-[#1A3C34] text-[#C89B2A] border border-[#C89B2A]/30 flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform">
          <Globe className="w-7 h-7" />
        </div>
        <h3 className="font-display font-extrabold text-xl text-white">Growing Brand Network</h3>
        <p className="text-xs sm:text-sm text-[#E8E2D6]/80 leading-relaxed">
          Discover affiliate opportunities across e-commerce, fashion, beauty, travel, electronics, lifestyle and more.
        </p>
      </div>

      {/* 4. Real-Time Performance Tracking */}
      <div className="bg-[#234D42] rounded-2xl p-6 sm:p-8 space-y-4 text-center border border-white/10 hover:border-t-4 hover:border-t-[#C89B2A] hover:-translate-y-2 transition-all duration-300 shadow-xl group">
        <div className="w-14 h-14 rounded-2xl bg-[#1A3C34] text-[#C89B2A] border border-[#C89B2A]/30 flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform">
          <Send className="w-7 h-7" />
        </div>
        <h3 className="font-display font-extrabold text-xl text-white">Real-Time Performance Tracking</h3>
        <p className="text-xs sm:text-sm text-[#E8E2D6]/80 leading-relaxed">
          Monitor clicks, conversions and commissions from your affiliate campaigns and understand how your traffic performs.
        </p>
      </div>

      {/* 5. Promote Across Channels */}
      <div className="bg-[#234D42] rounded-2xl p-6 sm:p-8 space-y-4 text-center border border-white/10 hover:border-t-4 hover:border-t-[#C89B2A] hover:-translate-y-2 transition-all duration-300 shadow-xl group">
        <div className="w-14 h-14 rounded-2xl bg-[#1A3C34] text-[#C89B2A] border border-[#C89B2A]/30 flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform">
          <Code2 className="w-7 h-7" />
        </div>
        <h3 className="font-display font-extrabold text-xl text-white">Promote Across Channels</h3>
        <p className="text-xs sm:text-sm text-[#E8E2D6]/80 leading-relaxed">
          Share your affiliate links through your website, blog, social media and other approved promotional channels.
        </p>
      </div>

      {/* 6. Dedicated Affiliate Support */}
      <div className="bg-[#234D42] rounded-2xl p-6 sm:p-8 space-y-4 text-center border border-white/10 hover:border-t-4 hover:border-t-[#C89B2A] hover:-translate-y-2 transition-all duration-300 shadow-xl group">
        <div className="w-14 h-14 rounded-2xl bg-[#1A3C34] text-[#C89B2A] border border-[#C89B2A]/30 flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform">
          <Package className="w-7 h-7" />
        </div>
        <h3 className="font-display font-extrabold text-xl text-white">Dedicated Affiliate Support</h3>
        <p className="text-xs sm:text-sm text-[#E8E2D6]/80 leading-relaxed">
          Get the guidance you need to navigate campaigns, optimize your promotions and make the most of affiliate marketing.
        </p>
      </div>
    </div>
  </div>
</section>

   

      {/* 11. RECENT BLOG POSTS (SECTION E) */}
      {/* <section id="blog" className="py-20 bg-[#FDFAF4] border-t border-[#E8E2D6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C89B2A] mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Creator Knowledge Base</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1A3C34]">
                Latest from <span className="text-[#C89B2A]">CloudLinks Blog</span>
              </h2>
              <p className="text-sm sm:text-base text-[#6B6355] mt-1 font-medium">
                Tips, strategies, and insights to help you earn more with affiliate marketing.
              </p>
            </div>

            <button
              onClick={() => setSelectedPost(BLOG_POSTS[0])}
              className="text-sm font-extrabold text-[#C89B2A] hover:text-[#b08823] flex items-center gap-1.5 transition-colors self-start md:self-auto cursor-pointer"
            >
              <span>View All Posts</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-[#F5F0E8] rounded-2xl border border-[#E8E2D6] overflow-hidden shadow-md hover:shadow-2xl hover:border-t-4 hover:border-t-[#C89B2A] hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#1A3C34] text-[#C89B2A] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm border border-[#C89B2A]/30">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="font-display font-extrabold text-base text-[#1A3C34] group-hover:text-[#C89B2A] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[#6B6355] line-clamp-2 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs font-medium text-[#6B6355] border-t border-[#E8E2D6]/60">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C89B2A]" />
                    {post.readTime}
                  </span>

                  <span className="text-[#1A3C34] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1 group-hover:text-[#C89B2A]">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A3C34]/60 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#FDFAF4] rounded-2xl shadow-2xl border border-[#E8E2D6] overflow-y-auto">
              <div className="sticky top-0 z-10 flex items-center justify-between p-5 bg-[#1A3C34] text-white">
                <span className="text-xs font-bold text-[#C89B2A] uppercase tracking-wider">
                  {selectedPost.category} • {selectedPost.readTime}
                </span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-1 text-white/70 hover:text-white rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6 text-[#1A3C34]">
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
                    {selectedPost.title}
                  </h2>
                  <span className="text-xs text-[#6B6355] block">
                    Published on {selectedPost.date} by CloudLinks Editorial Team
                  </span>
                </div>

                <div className="h-64 rounded-2xl overflow-hidden border border-[#E8E2D6]">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="prose prose-sm text-[#1A3C34] space-y-4 leading-relaxed font-normal">
                  <p className="font-semibold text-base text-[#1A3C34]">
                    {selectedPost.summary}
                  </p>
                  <p>
                    Affiliate marketing in India is witnessing explosive growth, powered by micro-influencers and specialized deal channels on Telegram and WhatsApp.
                  </p>
                  <h4 className="font-bold text-lg text-[#1A3C34] pt-2">Key Takeaways for Creators:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#6B6355]">
                    <li>Focus on high-converting categories like Fashion (Myntra, AJIO) and Electronics (boAt).</li>
                    <li>Use custom sub-IDs on CloudLinks to track which platform (Instagram Bio vs YouTube Description) yields the highest sales.</li>
                    <li>Incorporate call-to-action stickers on Instagram stories with clear discounts.</li>
                    <li>Leverage festive sales season (Diwali, Great Indian Festival) for 3x higher commission spikes.</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E8E2D6] flex justify-end">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-6 py-2.5 rounded-xl bg-[#C89B2A] text-[#1A3C34] font-bold text-xs hover:bg-[#b08823] transition-colors cursor-pointer"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section> */}

      {/* 12. TESTIMONIALS */}
      <section className="py-20 bg-[#F5F0E8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A3C34]/10 text-[#1A3C34] text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C89B2A]" />
              Real Creator Results
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#1A3C34]">
              What Creators Say
            </h2>
            <p className="text-base text-[#6B6355]">
              See how Indian bloggers, influencers, and content creators scale their monthly income with CloudLinks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 space-y-5 shadow-warm-hover flex flex-col justify-between relative"
              >
                <Quote className="w-8 h-8 text-[#C89B2A]/30 absolute top-4 right-4" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#C89B2A] fill-[#C89B2A]" />
                      ))}
                    </div>

                    <span className="px-2.5 py-1 rounded-lg bg-[#1A3C34] text-[#C89B2A] font-sora font-extrabold text-xs">
                      {item.earnings}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#1A3C34] leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#E8E2D6]">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#C89B2A]"
                  />
                  <div>
                    <h4 className="font-display font-extrabold text-sm text-[#1A3C34] leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[11px] font-semibold text-[#6B6355]">
                      {item.role} • <span className="text-[#C89B2A] font-bold">{item.followers}</span>
                    </p>
                    <span className="text-[10px] text-[#6B6355]/80 block">
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. NEWSLETTER */}
      <section className="py-16 bg-[#F5F0E8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FDFAF4] rounded-3xl border border-[#E8E2D6] p-8 sm:p-12 shadow-warm relative overflow-hidden">
            <div className="absolute top-6 right-8 opacity-15 hidden md:block pointer-events-none">
              <Send className="w-24 h-24 text-[#1A3C34] -rotate-12" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#1A3C34] text-[#C89B2A] rounded-2xl shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A3C34]/10 text-[#1A3C34] text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#C89B2A]" />
                    Exclusive Creator Offers
                  </div>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-[#1A3C34] leading-tight">
                  Stay Updated. <span className="text-[#C89B2A]">Earn More.</span>
                </h2>

                <p className="text-sm text-[#6B6355] max-w-xl leading-relaxed">
                  Subscribe to get exclusive high-commission campaigns, bonus payout alerts, and festive brand offer drops straight to your inbox.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-3">
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2">
                  <div className="relative w-full">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-[#E8E2D6] bg-white text-[#1A3C34] text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                    />
                    <Mail className="w-4 h-4 text-[#6B6355] absolute left-3.5 top-4" />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-sm whitespace-nowrap transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                {subscribed ? (
                  <div className="flex items-center gap-2 text-xs text-emerald-700 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>You're on the VIP list! Welcome aboard.</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-[11px] text-[#6B6355]">
                    <Lock className="w-3.5 h-3.5 text-[#1A3C34]" />
                    <span>No spam. Unsubscribe anytime in one click.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
