'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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

export const EarningTipsContent: React.FC = () => {
  const { onOpenAuth } = useGlobalContext();
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
    title: 'Share Your Links Strategically',
    level: 'Beginner',
    levelColor: 'bg-[#2D7A4F] text-white',
    borderColor: 'border-l-[#2D7A4F]',
    desc: 'Place your affiliate links where your audience is most likely to see and use them—social profiles, content, communities and other permitted channels.',
    insight: 'Tip: Make your links easy to find, relevant and natural to the content.',
    icon: Link2,
    iconBg: 'bg-[#C89B2A] text-[#1A3C34]',
  },
  {
    id: 2,
    num: '02',
    title: 'Promote Products You Know',
    level: 'Beginner',
    levelColor: 'bg-[#2D7A4F] text-white',
    borderColor: 'border-l-[#2D7A4F]',
    desc: "Choose brands and products you're familiar with or that genuinely fit your audience. Relevant recommendations are more likely to build trust.",
    insight: "Tip: Focus on products that naturally fit your content or audience's interests.",
    icon: Heart,
    iconBg: 'bg-[#1A3C34] text-[#C89B2A]',
  },
  {
    id: 3,
    num: '03',
    title: 'Create Useful Content',
    level: 'Intermediate',
    levelColor: 'bg-[#C89B2A] text-[#1A3C34]',
    borderColor: 'border-l-[#C89B2A]',
    desc: 'Instead of simply sharing a link, add value through reviews, comparisons, guides, tutorials or recommendations.',
    insight: 'Tip: Helpful content can give people a stronger reason to click and explore.',
    icon: Star,
    iconBg: 'bg-[#C89B2A] text-[#1A3C34]',
  },
  {
    id: 4,
    num: '04',
    title: 'Choose the Right Offers',
    level: 'Intermediate',
    levelColor: 'bg-[#C89B2A] text-[#1A3C34]',
    borderColor: 'border-l-[#C89B2A]',
    desc: "Don't promote every campaign you come across. Focus on offers that match your niche, audience and interests.",
    insight: 'Tip: Relevance matters more than the number of campaigns you promote.',
    icon: Send,
    iconBg: 'bg-[#1A3C34] text-[#C89B2A]',
  },
  {
    id: 5,
    num: '05',
    title: 'Track Your Performance',
    level: 'Intermediate',
    levelColor: 'bg-[#C89B2A] text-[#1A3C34]',
    borderColor: 'border-l-[#C89B2A]',
    desc: 'Use your CloudsLink dashboard to understand which links and campaigns are generating clicks and conversions.',
    insight: 'Tip: Use your performance data to identify what works and improve your strategy.',
    icon: BarChart2,
    iconBg: 'bg-[#C89B2A] text-[#1A3C34]',
  },
  {
    id: 6,
    num: '06',
    title: 'Focus on a Niche',
    level: 'Pro',
    levelColor: 'bg-[#1A3C34] text-[#C89B2A]',
    borderColor: 'border-l-[#1A3C34]',
    desc: 'A clear niche can help you build a more relevant audience and make your recommendations more meaningful.',
    insight: 'Tip: Choose categories you understand and can consistently create useful content around.',
    icon: Target,
    iconBg: 'bg-[#1A3C34] text-[#C89B2A]',
  },
  {
    id: 7,
    num: '07',
    title: 'Keep Your Best Links Accessible',
    level: 'Pro',
    levelColor: 'bg-[#1A3C34] text-[#C89B2A]',
    borderColor: 'border-l-[#1A3C34]',
    desc: 'Create dedicated sections, highlights or pages for your most useful recommendations so people can find them even after your original post is gone.',
    insight: 'Tip: Keep important links organised and easy to revisit.',
    icon: Bookmark,
    iconBg: 'bg-[#C89B2A] text-[#1A3C34]',
  },
  {
    id: 8,
    num: '08',
    title: 'Plan Around Shopping Seasons',
    level: 'Pro',
    levelColor: 'bg-[#1A3C34] text-[#C89B2A]',
    borderColor: 'border-l-[#1A3C34]',
    desc: 'Sales, festive periods and major shopping events can create more opportunities for relevant affiliate promotions.',
    insight: 'Tip: Prepare your content and campaigns ahead of major shopping periods.',
    icon: Calendar,
    iconBg: 'bg-[#1A3C34] text-[#C89B2A]',
  },
  {
    id: 9,
    num: '09',
    title: 'Diversify Your Campaigns',
    level: 'Pro',
    levelColor: 'bg-[#1A3C34] text-[#C89B2A]',
    borderColor: 'border-l-[#1A3C34]',
    desc: 'Promoting several relevant campaigns can help you explore different opportunities instead of depending on a single offer.',
    insight: 'Tip: Keep your campaigns relevant rather than simply increasing the number of links.',
    icon: Layers,
    iconBg: 'bg-[#C89B2A] text-[#1A3C34]',
  },
  {
    id: 10,
    num: '10',
    title: 'Keep Improving Your Content',
    level: 'Pro',
    levelColor: 'bg-[#1A3C34] text-[#C89B2A]',
    borderColor: 'border-l-[#1A3C34]',
    desc: 'Better content can make your recommendations more useful, engaging and trustworthy.',
    insight: 'Tip: Use your performance insights to refine your content, promotion strategy and campaign choices.',
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
            Learn how to choose better offers, promote smarter and make the most of every opportunity with CloudsLink.

          </p>

      

        </div>
      </section>





      {/* =================================================================== */}
      {/* SECTION 4 — TOP 10 TIPS (VISUAL NUMBERED LIST - ZIGZAG)            */}
      {/* =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            Top 10 Tips <span className="text-[#C89B2A]"> to Maximize Your Affiliate Earnings</span>
          </h2>
          <p className="text-sm text-[#6B6355] font-medium">
            Simple, practical strategies to help you promote smarter and get more from CloudsLink.

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
              Discover platform-specific ways to share, promote and optimise your affiliate links.

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
        <span>Use Stories and link stickers to make your recommendations easy to access.</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
        <span>Create a dedicated “Best Deals” or “My Picks” highlight for your top recommendations.</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
        <span>Use Reels to showcase products through reviews, demos and everyday use cases.</span>
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
        <span>Place your key affiliate links clearly in your video descriptions.</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
        <span>Use product reviews, comparisons and tutorials to help viewers make buying decisions.</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
        <span>Keep your most relevant links easy to find with clear descriptions and calls to action.</span>
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
        <span>Share curated offers and product recommendations that are relevant to your community.</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
        <span>Use polls and feedback to understand what your audience wants to discover.</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
        <span>Pin important offers or recommendation lists so they're easy to access.</span>
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
        <span>Use threads to share detailed product recommendations, comparisons and insights.</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
        <span>Join relevant conversations and share affiliate links only where they add genuine value.</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
        <span>Pin useful product guides or recommendation posts to keep them visible on your profile.</span>
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
        <span>Focus on relevant professional products, services, software and learning resources.</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
        <span>Use experience-based posts and case studies to make recommendations more valuable.</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
        <span>Share useful resources naturally rather than relying on promotional posts alone.</span>
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
        <span>Create helpful product reviews and guides that can attract search traffic over time.</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
        <span>Use comparison and “best of” articles to help readers make informed choices.</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="w-4 h-4 text-[#C89B2A] flex-shrink-0 mt-0.5" />
        <span>Keep recommendation and deals pages updated so returning visitors find fresh offers.</span>
      </li>
    </ul>
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
              Everything you learned here works best when combined with the right platform. CloudLinks gives you the tools, 500+ top brands, and instant UPI payouts to make it happen.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              

              <Link
                href="/campaigns"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl border-2 border-white text-white hover:bg-white hover:text-[#1A3C34] font-extrabold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Browse Campaigns</span>
              </Link>
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
              Start Implementing on CloudLinks →
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default EarningTipsContent;
