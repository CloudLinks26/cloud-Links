'use client';
import React, { useState } from 'react';
import { useGlobalContext } from '@/components/GlobalProvider';
import {
  UserPlus,
  Tag,
  IndianRupee,
  Link as LinkIcon,
  MousePointerClick,
  ShoppingCart,
  Coins,
  ShieldCheck,
  Lock,
  Star,
  Plus,
  Minus,
  Link2,
  ArrowRight,
  Instagram,
  Youtube,
  MessageCircle,
  Send,
  Globe,
  Users,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function HowItWorksContent() {
  const { onOpenLinkGen, onOpenAuth } = useGlobalContext();
  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleAuthClick = (mode: 'signup' | 'login' = 'signup') => {
    if (onOpenAuth) {
      onOpenAuth(mode);
    }
  };

  // FAQs List
  const faqs = [
    {
      q: 'Is it really free to join CloudLinks?',
      a: "Yes! It's completely free to join. No hidden charges, no membership fees.",
    },
    {
      q: 'How much can I earn with CloudLinks?',
      a: 'Earnings depend on the campaigns you promote and your audience size. Creators earn anywhere from ₹500 to ₹1,00,000+ per month.',
    },
    {
      q: 'How and when do I get paid?',
      a: 'Payouts are processed every 30 days. Minimum payout is ₹500 via UPI, Bank Transfer, or Paytm.',
    },
    {
      q: 'Do I need approval to join a campaign?',
      a: 'Most campaigns are open to all creators. Some premium campaigns may require approval based on your audience.',
    },
    {
      q: 'Where can I share my links?',
      a: 'Anywhere! Instagram, YouTube, WhatsApp groups, Telegram, blogs, Facebook — any platform where you have an audience.',
    },
  ];

  // Platforms Grid
  const platforms = [
    {
      name: 'Instagram',
      icon: Instagram,
      desc: 'Share through your bio, stories & reels.',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      desc: 'Add affiliate links to video descriptions.',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      desc: 'Share with groups and broadcasts.',
    },
    {
      name: 'Telegram',
      icon: Send,
      desc: 'Promote through channels and groups.',
    },
    {
      name: 'Blog / Website',
      icon: Globe,
      desc: 'Add links to your content and articles.',
    },
    {
      name: 'Facebook',
      icon: Users,
      desc: 'Share across groups and pages.',
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F5F0E8] min-h-screen text-[#1A3C34] font-sans selection:bg-[#C89B2A]/20">
      
      {/* =================================================================== */}
      {/* SECTION 1 — PAGE HERO HEADER                                        */}
      {/* =================================================================== */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Background Decorative Patterns */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#1A3C34 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Curved Dashed Gold Accent SVG (Left) */}
        <div className="hidden lg:block absolute left-8 top-12 pointer-events-none opacity-40">
          <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
            <path
              d="M10 90 Q 60 10, 110 50"
              stroke="#C89B2A"
              strokeWidth="2.5"
              strokeDasharray="6 6"
            />
          </svg>
        </div>

        {/* Leaf/Swoosh Accent (Top Right) */}
        <div className="hidden lg:block absolute right-12 top-8 pointer-events-none opacity-20">
          <div className="w-16 h-16 rounded-full bg-[#1A3C34] rotate-45 transform -skew-x-12" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A3C34] text-white text-xs font-extrabold shadow-sm">
            <Users className="w-4 h-4 text-[#C89B2A]" />
            <span>Join 10,000+ Earners Today</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1A3C34] leading-tight">
            How <span className="text-[#C89B2A] relative inline-block">CloudLinks</span> Works
          </h1>

          {/* Decorative Underline */}
          <div className="w-20 h-1.5 bg-[#C89B2A] mx-auto rounded-full" />

          {/* Subtext */}
          <p className="text-base sm:text-xl text-[#6B6355] font-medium max-w-xl mx-auto leading-relaxed">
            Get started in a few simple steps and turn your promotions into commissions.
          </p>
        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 2 — 3 STEPS (HOW IT WORKS)                                  */}
      {/* =================================================================== */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  <div className="text-center mb-12">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34] tracking-tight">
      How It Works
    </h2>
    <p className="mt-3 text-base sm:text-lg text-[#6B6355] max-w-2xl mx-auto">
      Get started in a few simple steps and turn your promotions into commissions.
    </p>
  </div>

  <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-6">
    
    {/* CARD 1 */}
    <div className="flex flex-col items-center text-center group relative">
      <span className="text-5xl font-black text-[#C89B2A] mb-2 leading-none font-display">
        01
      </span>
      <div className="w-full h-full bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-between relative">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#1A3C34] text-white flex items-center justify-center shadow-xs">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-extrabold text-[#1A3C34]">
            Sign Up
          </h3>
          <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed">
            Create your CloudsLink account and submit your details to get started.
          </p>
        </div>
        <div className="w-12 h-1 bg-[#C89B2A] rounded-full pt-0.5 mt-4" />
      </div>

      {/* Desktop Arrow 1 -> 2 */}
      <div className="hidden lg:block absolute -right-[25%] top-16 w-[35%] pointer-events-none z-20">
        <svg width="100%" height="30" viewBox="0 0 100 30" fill="none">
          <path
            d="M0 15 Q 50 0, 100 15"
            stroke="#C89B2A"
            strokeWidth="2.5"
            strokeDasharray="4 4"
          />
          <path d="M93 10 L100 15 L93 20" stroke="#C89B2A" strokeWidth="2.5" />
        </svg>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="flex flex-col items-center text-center group relative">
      <span className="text-5xl font-black text-[#C89B2A] mb-2 leading-none font-display">
        02
      </span>
      <div className="w-full h-full bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-between relative">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#1A3C34] text-white flex items-center justify-center shadow-xs">
            <CheckCircle2 className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-extrabold text-[#1A3C34]">
            Get Approved
          </h3>
          <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed">
            Your account will be reviewed and approved within 24 hours.
          </p>
        </div>
        <div className="w-12 h-1 bg-[#C89B2A] rounded-full pt-0.5 mt-4" />
      </div>

      {/* Desktop Arrow 2 -> 3 */}
      <div className="hidden lg:block absolute -right-[25%] top-16 w-[35%] pointer-events-none z-20">
        <svg width="100%" height="30" viewBox="0 0 100 30" fill="none">
          <path
            d="M0 15 Q 50 0, 100 15"
            stroke="#C89B2A"
            strokeWidth="2.5"
            strokeDasharray="4 4"
          />
          <path d="M93 10 L100 15 L93 20" stroke="#C89B2A" strokeWidth="2.5" />
        </svg>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="flex flex-col items-center text-center group relative">
      <span className="text-5xl font-black text-[#C89B2A] mb-2 leading-none font-display">
        03
      </span>
      <div className="w-full h-full bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-between relative">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#1A3C34] text-white flex items-center justify-center shadow-xs">
            <Tag className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-extrabold text-[#1A3C34]">
            Apply for Offers
          </h3>
          <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed">
            Browse available affiliate offers and apply for the ones that match your audience and niche.
          </p>
        </div>
        <div className="w-12 h-1 bg-[#C89B2A] rounded-full pt-0.5 mt-4" />
      </div>

      {/* Desktop Arrow 3 -> 4 */}
      <div className="hidden lg:block absolute -right-[25%] top-16 w-[35%] pointer-events-none z-20">
        <svg width="100%" height="30" viewBox="0 0 100 30" fill="none">
          <path
            d="M0 15 Q 50 0, 100 15"
            stroke="#C89B2A"
            strokeWidth="2.5"
            strokeDasharray="4 4"
          />
          <path d="M93 10 L100 15 L93 20" stroke="#C89B2A" strokeWidth="2.5" />
        </svg>
      </div>
    </div>

    {/* CARD 4 */}
    <div className="flex flex-col items-center text-center group relative">
      <span className="text-5xl font-black text-[#C89B2A] mb-2 leading-none font-display">
        04
      </span>
      <div className="w-full h-full bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-between relative">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#1A3C34] text-white flex items-center justify-center shadow-xs">
            <Link2 className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-extrabold text-[#1A3C34]">
            Get Your Tracking Link
          </h3>
          <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed">
            Once your offer application is approved, generate your unique tracking link.
          </p>
        </div>
        <div className="w-12 h-1 bg-[#C89B2A] rounded-full pt-0.5 mt-4" />
      </div>

      {/* Desktop Arrow 4 -> 5 */}
      <div className="hidden lg:block absolute -right-[25%] top-16 w-[35%] pointer-events-none z-20">
        <svg width="100%" height="30" viewBox="0 0 100 30" fill="none">
          <path
            d="M0 15 Q 50 0, 100 15"
            stroke="#C89B2A"
            strokeWidth="2.5"
            strokeDasharray="4 4"
          />
          <path d="M93 10 L100 15 L93 20" stroke="#C89B2A" strokeWidth="2.5" />
        </svg>
      </div>
    </div>

    {/* CARD 5 */}
    <div className="flex flex-col items-center text-center group relative">
      <span className="text-5xl font-black text-[#C89B2A] mb-2 leading-none font-display">
        05
      </span>
      <div className="w-full h-full bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-between relative">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#1A3C34] text-white flex items-center justify-center shadow-xs">
            <IndianRupee className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-extrabold text-[#1A3C34]">
            Promote & Earn
          </h3>
          <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed">
            Share your tracking link, drive qualifying sales or actions, and earn commissions.
          </p>
        </div>
        <div className="w-12 h-1 bg-[#C89B2A] rounded-full pt-0.5 mt-4" />
      </div>
    </div>

  </div>
</section>


      {/* =================================================================== */}
      {/* SECTION 3 — HOW YOU EARN (DARK SECTION)                             */}
      {/* =================================================================== */}
      <section className="my-16 bg-[#1A3C34] text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
  <div className="max-w-7xl mx-auto space-y-12 text-center">
    
    <div className="space-y-3 max-w-xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
        How You Earn
      </h2>
      <div className="w-16 h-1 bg-[#C89B2A] mx-auto rounded-full" />
    </div>

    {/* Flow Diagram - Grid with stretch alignment */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
      
      {/* Step 1 */}
      <div className="bg-[#FDFAF4] text-[#1A3C34] rounded-2xl p-6 shadow-md flex items-center gap-4 text-left border-2 border-transparent h-full">
        <div className="p-3 bg-[#1A3C34]/10 rounded-xl text-[#C89B2A] shrink-0">
          <LinkIcon className="w-6 h-6 text-[#C89B2A]" />
        </div>
        <div>
          <span className="text-xs text-[#6B6355] font-extrabold block uppercase tracking-wider">01 — Promote</span>
          <span className="font-extrabold text-base text-[#1A3C34]">You share link</span>
        </div>
      </div>

      {/* Step 2 */}
      <div className="bg-[#FDFAF4] text-[#1A3C34] rounded-2xl p-6 shadow-md flex items-center gap-4 text-left border-2 border-transparent h-full">
        <div className="p-3 bg-[#1A3C34]/10 rounded-xl text-[#C89B2A] shrink-0">
          <MousePointerClick className="w-6 h-6 text-[#C89B2A]" />
        </div>
        <div>
          <span className="text-xs text-[#6B6355] font-extrabold block uppercase tracking-wider">02 — Attract Clicks</span>
          <span className="font-extrabold text-base text-[#1A3C34]">Your audience visits through your link.</span>
        </div>
      </div>

      {/* Step 3 */}
      <div className="bg-[#FDFAF4] text-[#1A3C34] rounded-2xl p-6 shadow-md flex items-center gap-4 text-left border-2 border-transparent h-full">
        <div className="p-3 bg-[#1A3C34]/10 rounded-xl text-[#C89B2A] shrink-0">
          <ShoppingCart className="w-6 h-6 text-[#C89B2A]" />
        </div>
        <div>
          <span className="text-xs text-[#6B6355] font-extrabold block uppercase tracking-wider">03 — Drive Conversions</span>
          <span className="font-extrabold text-base text-[#1A3C34]">Turn clicks into conversions.</span>
        </div>
      </div>

      {/* Step 4 */}
      <div className="bg-[#FDFAF4] text-[#1A3C34] rounded-2xl p-6 shadow-md flex items-center gap-4 text-left border-2 border-[#C89B2A] h-full">
        <div className="p-3 bg-[#C89B2A]/20 rounded-xl text-[#C89B2A] shrink-0">
          <Coins className="w-6 h-6 text-[#C89B2A]" />
        </div>
        <div>
          <span className="text-xs text-[#6B6355] font-extrabold block uppercase tracking-wider">04 — Get Paid</span>
          <span className="font-extrabold text-base text-[#1A3C34] block">Earn your commission on every eligible conversion.</span>
        </div>
      </div>

    </div>

    {/* Trust Badges */}
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 text-xs sm:text-sm font-bold text-[#F5F0E8]/90">
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-[#C89B2A]" />
        <span>Share</span>
      </div>
      <span>•</span>
      <div className="flex items-center gap-2">
        <Lock className="w-4 h-4 text-[#C89B2A]" />
        <span>Convert</span>
      </div>
      <span>•</span>
      <div className="flex items-center gap-2">
        <Star className="w-4 h-4 text-[#C89B2A]" />
        <span>Earn</span>
      </div>
    </div>

  </div>
</section>

 {/* =================================================================== */}
      {/* SECTION 7 — PLATFORMS YOU CAN SHARE ON                              */}
      {/* =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            Share Wherever Your Audience Is

          </h2>
          <p className="text-sm text-[#6B6355] font-medium">
            Promote your affiliate links across the platforms you already use.

          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <div
                key={idx}
                className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-xs hover:shadow-md hover:border-[#C89B2A] transition-all flex items-start gap-4 group"
              >
                <div className="p-3.5 rounded-xl bg-[#1A3C34] text-[#C89B2A] flex-shrink-0 group-hover:scale-105 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-extrabold text-base text-[#1A3C34]">
                    {p.name}
                  </h3>
                  <p className="text-xs text-[#6B6355]">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 4 — WHO CAN JOIN LINKX?                                     */}
      {/* =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            Who Can Join CloudLinks?
          </h2>
          <p className="text-sm text-[#6B6355] font-medium">
            No matter your background, CloudLinks gives you the tools to earn online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 — Students */}
          <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="h-48 bg-[#EDE8DC] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
                alt="Students"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FDFAF4] via-transparent to-transparent" />
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-[#1A3C34]">
                  Students
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed">
                  Earn while you learn. Perfect side income for students looking to pay expenses independently.
                </p>
              </div>

              <button
                onClick={() => handleAuthClick('signup')}
                className="w-full py-3 px-4 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-colors shadow-2xs mt-4"
              >
                Join Now
              </button>
            </div>
          </div>

          {/* Card 2 — Homemakers */}
          <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="h-48 bg-[#EDE8DC] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                alt="Homemakers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FDFAF4] via-transparent to-transparent" />
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-[#1A3C34]">
                  Homemakers
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed">
                  Work from home at your time. Turn your flexible hours into reliable monthly income.
                </p>
              </div>

              <button
                onClick={() => handleAuthClick('signup')}
                className="w-full py-3 px-4 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-colors shadow-2xs mt-4"
              >
                Join Now
              </button>
            </div>
          </div>

          {/* Card 3 — Influencers */}
          <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="h-48 bg-[#EDE8DC] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
                alt="Influencers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FDFAF4] via-transparent to-transparent" />
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-[#1A3C34]">
                  Influencers
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed">
                  Monetize your content. Earn more by recommending top brands your followers already love.
                </p>
              </div>

              <button
                onClick={() => handleAuthClick('signup')}
                className="w-full py-3 px-4 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-colors shadow-2xs mt-4"
              >
                Join Now
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 5 — FAQ ACCORDION                                           */}
      {/* =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34]">
            Frequently <span className="text-[#C89B2A]">Asked</span> Questions
          </h2>
          <p className="text-sm text-[#6B6355] font-medium">
            Got questions? We've got clear answers.
          </p>
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
      {/* SECTION 6 — CTA BANNER (BOTTOM)                                     */}
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
              Ready to Start Earning?
            </h2>

            <p className="text-sm sm:text-base text-[#F5F0E8]/90 font-medium">
              Join thousands of smart earners & make real income online.
            </p>

            <div>
              <button
                onClick={() => handleAuthClick('signup')}
                className="px-10 py-4 rounded-2xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-base transition-all shadow-lg inline-flex items-center gap-2"
              >
                <span>Sign Up Free</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs font-bold text-[#F5F0E8]/80 pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C89B2A]" />
                No investment needed
              </span>
              <span>|</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C89B2A]" />
                Instant approval
              </span>
            </div>
          </div>
        </div>
      </section>




    </div>
  );
};
