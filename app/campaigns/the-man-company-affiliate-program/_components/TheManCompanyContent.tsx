'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import {
  Star,
  CheckCircle2,
  XCircle,
  ChevronRight,
  ChevronLeft,
  Building2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function TheManCompanyContent() {
  // The Man Company Brand Data
  const brand = {
    name: 'The Man Company',
    slug: 'the-man-company-affiliate-program',
    logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965786/3_qruuhh.jpg',
    tagline: 'Grooming, Redefined',
    category: 'Men\'s Grooming',
    type: 'CPS', // Cost Per Sale
    commission: '17%',
    rating: 4.7,
    country: 'India 🇮🇳',
    about: 'The Man Company is a premium men\'s grooming brand offering skincare, haircare, and personal care essentials crafted with natural ingredients. It\'s a leading name in India\'s fast-growing male grooming category.',
    highlights: [
      '17% commission on every qualifying sale',
      'Reporting Time: Daily / Offline',
      'Strong brand loyalty in the men\'s grooming space',
    ]
  };

  // Toast message state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const topPicks = [
    {
      id: 'haldiram-affiliate-program',
      name: 'Haldiram',
      commission: '9%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/3_lnmzlc.png',
    },
    {
      id: 'ghar-soaps-affiliate-program',
      name: 'Ghar Soaps',
      commission: '15%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/4_dy9x7w.png',
    },
    {
      id: 'swiss-beauty-affiliate-program',
      name: 'Swiss Beauty',
      commission: '25%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/1_hdkg1p.png',
    },
    {
      id: 'asaya-affiliate-program',
      name: 'Asaya',
      commission: '35%',
      oldUserCommission: '15%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/2_kvfi70.png',
    },
    {
      id: 'hamerscop-affiliate-program',
      name: 'HamersCop',
      commission: '12%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965785/9_bntydx.jpg',
    },
    {
      id: 'cotton-culture-affiliate-program',
      name: 'Cotton Culture',
      commission: '12%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965785/8_h525df.jpg',
    },
    {
      id: 'fraganote-affiliate-program',
      name: 'Fraganote',
      commission: '8%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965785/7_dv9gtm.jpg',
    },
    {
      id: 'anydesk-affiliate-program',
      name: 'Anydesk',
      commission: '8%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965786/6_pp9txm.jpg',
    },
    {
      id: 'ajio-affiliate-program',
      name: 'AJIO',
      commission: '5%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965786/5_khkkoh.jpg',
    },
    {
      id: 'perfora-care-affiliate-program',
      name: 'Perfora Care',
      commission: '15%',
      oldUserCommission: '12%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965785/4_z3qyzx.jpg',
    },
    {
      id: 'the-man-company-affiliate-program',
      name: 'The Man Company',
      commission: '17%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965786/3_qruuhh.jpg',
    },
    {
      id: 'firstcry-affiliate-program',
      name: 'FirstCry',
      commission: '45%',
      label: 'Flat',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965785/2_wm8mdp.jpg',
    },
    {
      id: 'sanskriti-homes-affiliate-program',
      name: 'Sanskriti Homes',
      commission: '17%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965785/1_rmbba3.jpg',
    },
  ];

  // Top picks carousel ref
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToJoinForm = () => {
    const el = document.getElementById('join-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F5F0E8] min-h-screen text-[#1A3C34] font-sans selection:bg-[#C89B2A]/20 pb-20">

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1A3C34] text-white px-5 py-3 rounded-2xl shadow-2xl border border-[#C89B2A]/40 flex items-center gap-3 animate-bounce">
          <Sparkles className="w-5 h-5 text-[#C89B2A]" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* =================================================================== */}
      {/* SECTION 1 — BRAND HERO BANNER                                       */}
      {/* =================================================================== */}
      <section className="bg-[#1A3C34] text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle Gold Dot Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#C89B2A 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 space-y-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold text-[#F5F0E8]/80">
            <Link href="/" className="hover:text-[#C89B2A] transition-colors">Home</Link>
            <span className="text-[#C89B2A] font-black">&gt;</span>
            <Link href="/campaigns" className="hover:text-[#C89B2A] transition-colors">Campaigns</Link>
            <span className="text-[#C89B2A] font-black">&gt;</span>
            <span className="text-white font-extrabold">{brand.name}</span>
          </div>

          {/* Hero Content - 2 Columns */}
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8">

            {/* Left Side Brand Overview */}
            <div className="lg:w-[60%] space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-[#C89B2A]/40 p-2 flex items-center justify-center flex-shrink-0 shadow-lg overflow-hidden">
                  <img src={brand.logo} alt={brand.name} className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="space-y-1">
                  <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
                    {brand.name}
                  </h1>
                  <p className="text-sm sm:text-base italic text-[#F5F0E8]/90 font-medium">
                    "{brand.tagline}"
                  </p>
                </div>
              </div>

              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-3.5 py-1 rounded-full border border-[#F5F0E8]/30 bg-white/5 text-white text-xs font-bold flex items-center gap-1.5">
                  🏷️ {brand.category}
                </span>
                <span className="px-3.5 py-1 rounded-full border border-[#F5F0E8]/30 bg-white/5 text-white text-xs font-bold flex items-center gap-1.5">
                  📊 {brand.type} — Cost Per Sale
                </span>
                <span className="px-3.5 py-1 rounded-full border border-[#F5F0E8]/30 bg-white/5 text-white text-xs font-bold flex items-center gap-1.5">
                  {brand.country}
                </span>
              </div>

              {/* Star Rating */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-[#C89B2A]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C89B2A]" />
                    ))}
                  </div>
                  <span className="font-extrabold text-white">{brand.rating}/5</span>
                  <span className="text-[#F5F0E8]/70">(Rating)</span>
                </div>
              </div>
            </div>

            {/* Right Side Commission Highlight Card */}
            <div className="lg:w-[38%] bg-[#FDFAF4] rounded-3xl p-6 sm:p-8 text-[#1A3C34] shadow-2xl border border-[#E8E2D6] flex flex-col justify-between space-y-6">
              <div className="text-center space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#1A3C34] bg-[#C89B2A]/15 px-3 py-1 rounded-full inline-block border border-[#C89B2A]/30">
                  💰 Earn Commission
                </span>
                <div className="text-4xl sm:text-5xl font-black text-[#C89B2A] font-display">
                  {brand.commission}
                </div>
                <p className="text-xs font-bold text-[#6B6355]">
                  per successful sale generated through your link
                </p>
              </div>

              {/* CTA Button */}
              <div className="space-y-2">
                <button
                  onClick={() =>
                    window.open(
                      "https://analytics.trackier.io/publisher/campaign/859",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="w-full py-4 rounded-2xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Join This Program</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 3 — TWO COLUMN MAIN CONTENT                                 */}
      {/* =================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* LEFT COLUMN (65%) */}
          <div className="lg:w-[65%] space-y-12">

            {/* A) About the Brand */}
            <div className="bg-[#FDFAF4] rounded-3xl p-6 sm:p-8 border border-[#E8E2D6] shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-black uppercase text-[#C89B2A] tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" />
                  About {brand.name}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-display text-[#1A3C34]">
                  Premium Grooming Essentials for the Modern Man
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#6B6355] font-medium leading-relaxed">
                {brand.about}
              </p>
            </div>

            {/* A) Media Allowed / Disallowed */}
            <div className="bg-[#FDFAF4] rounded-3xl p-6 sm:p-8 border border-[#E8E2D6] shadow-sm space-y-6">
              <div className="flex items-center gap-2 border-l-4 border-[#C89B2A] pl-3">
                <h3 className="text-xl font-black font-display text-[#1A3C34]">Media Allowed/Disallowed</h3>
              </div>

              {/* Allowed Media */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B6355]">Allowed Media</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Text Link', 'Banner', 'Deals', 'Coupons',
                    'Cashback, Reward Points, Incentives, Charity',
                    'Email (Text)', 'Custom Email (Text)',
                    'Email (HTML)', 'Custom Email (HTML)',
                    'Native Ads', 'Social Media'
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A3C34]/10 text-[#1A3C34] text-xs font-semibold border border-[#1A3C34]/20"
                    >
                      {item}
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1A3C34]" />
                    </span>
                  ))}
                </div>
              </div>

              {/* Disallowed Media */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C0564D]">Disallowed Media</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'POP Traffic', 'Facebook Ads', 'SEM - Brand Keyword(s)',
                    'SEM - Generic Keyword(s)', 'SEM - Brand + Generic Keyword(s)'
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFEAE8] text-[#C0564D] text-xs font-semibold border border-[#EAC9C6]"
                    >
                      {item}
                      <XCircle className="w-3.5 h-3.5 text-[#C0564D]" />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* B) Countries Allowed */}
            <div className="bg-[#FDFAF4] rounded-3xl p-6 sm:p-8 border border-[#E8E2D6] shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-l-4 border-[#C89B2A] pl-3">
                <h3 className="text-xl font-black font-display text-[#1A3C34]">Countries Allowed</h3>
              </div>
              <div>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8E2D6] bg-white text-sm font-semibold text-[#1A3C34] shadow-xs">
                  <span className="text-base">🇮🇳</span> India
                  <ChevronRight className="w-4 h-4 text-[#6B6355]" />
                </button>
              </div>
            </div>

            {/* B) Campaigns ID */}
            <div className="bg-[#FDFAF4] rounded-3xl p-6 sm:p-8 border border-[#E8E2D6] shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-l-4 border-[#C89B2A] pl-3">
                <h3 className="text-xl font-black font-display text-[#1A3C34]">Campaigns ID</h3>
              </div>
              <div>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8E2D6] bg-white text-sm font-semibold text-[#1A3C34] shadow-xs">
                  859
                </button>
              </div>
            </div>

          </div>


          {/* RIGHT SIDEBAR (35%) — Sticky */}
          <div className="lg:w-[35%] w-full space-y-6 lg:sticky lg:top-24">

            {/* JOIN PROGRAM STICKY CARD */}
            <div className="bg-[#FDFAF4] rounded-3xl p-6 border-t-4 border-t-[#C89B2A] border-x border-b border-[#E8E2D6] shadow-xl space-y-6">

              <div className="space-y-2 text-center">
                <h3 className="text-xl font-black font-display text-[#1A3C34]">
                  Join {brand.name} Affiliate Program
                </h3>
                <div className="inline-block px-3 py-1 rounded-full bg-[#C89B2A]/15 text-[#C89B2A] text-xs font-black border border-[#C89B2A]/30">
                  💰 Earn {brand.commission} Commission
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-3 pt-2">
                {brand.highlights.map((high, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-[#1A3C34]">
                    <CheckCircle2 className="w-4 h-4 text-[#2D7A4F] flex-shrink-0" />
                    <span>{high}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() =>
                  window.open(
                    "https://analytics.trackier.io/publisher/campaign/859",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="w-full py-3.5 rounded-2xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Join This Program</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================== */}
      {/* TOP PICKS FOR YOU CAROUSEL                                          */}
      {/* =================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-7 bg-[#C89B2A] rounded-full" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A3C34]">
                Top Picks for You
              </h2>
            </div>

            {/* Nav Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollCarousel('left')}
                aria-label="Previous Top Picks"
                className="w-9 h-9 rounded-full border border-[#1A3C34] text-[#1A3C34] hover:bg-[#1A3C34] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                aria-label="Next Top Picks"
                className="w-9 h-9 rounded-full border border-[#1A3C34] text-[#1A3C34] hover:bg-[#1A3C34] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cards Carousel Container */}
          <div
            ref={carouselRef}
            className="flex items-center gap-6 overflow-x-auto no-scrollbar pb-4 pt-1 snap-x"
          >
            {topPicks.map((brand) => (
              <div
                key={brand.id}
                className="min-w-[260px] sm:min-w-[280px] bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center justify-between snap-start group h-full"
              >
                <div className="flex flex-col items-center text-center space-y-4 w-full">
                  {/* Brand Logo */}
                  <div className="w-28 h-16 rounded-2xl bg-white border border-[#E8E2D6] p-2 flex items-center justify-center shadow-2xs overflow-hidden group-hover:scale-105 transition-transform">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  {/* Brand Info */}
                  <div className="w-full">
                    <h3 className="font-extrabold text-lg text-[#1A3C34]">
                      {brand.name}
                    </h3>
                    {brand.oldUserCommission ? (
                      <div className="mt-1 flex items-center justify-center gap-6">
                        <div>
                          <span className="text-xs text-[#6B6355] block font-medium">New User</span>
                          <span className="text-2xl font-black text-[#C89B2A] block leading-tight">
                            {brand.commission}
                          </span>
                        </div>
                        <div className="h-6 w-[1px] bg-[#E8E2D6] mt-2" /> {/* Subtle Divider */}
                        <div>
                          <span className="text-xs text-[#6B6355] block font-medium">Old User</span>
                          <span className="text-2xl font-black text-[#C89B2A] block leading-tight">
                            {brand.oldUserCommission}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-1">
                        <span className="text-xs text-[#6B6355] block font-medium">Commission</span>
                        <span className="text-2xl font-black text-[#C89B2A] block leading-tight">
                          {brand.commission}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Promote CTA Button */}
                <Link
                  href={`/campaigns/${brand.id}`}
                  className="w-full mt-4 py-2.5 px-4 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-colors shadow-2xs flex items-center justify-center gap-1.5"
                >
                  <span>Promote Now</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* BOTTOM CTA BANNER                                                   */}
      {/* =================================================================== */}
      <section className="bg-[#1A3C34] text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#C89B2A 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black font-display leading-tight text-white">
            Ready to Earn with {brand.name}?
          </h2>

          <p className="text-sm sm:text-base text-[#F5F0E8]/90 font-medium leading-relaxed max-w-xl mx-auto">
            Join CloudsLink and start promoting The Man Company's premium grooming essentials while earning commissions on qualifying sales.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://analytics.trackier.io/publisher/campaign/859",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="px-8 py-4 rounded-2xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-sm transition-all shadow-xl inline-flex items-center gap-2 cursor-pointer active:scale-98"
          >
            <span>Join the Program Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>
      </section>

    </div>
  );
}
