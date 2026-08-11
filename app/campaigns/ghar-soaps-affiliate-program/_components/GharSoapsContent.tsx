'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useGlobalContext } from '@/components/GlobalProvider';
import {
  Star,
  CheckCircle2,
  Clock,
  Zap,
  ShieldCheck,
  Building2,
  Calendar,
  Globe,
  Award,
  Users,
  Percent,
  TrendingUp,
  IndianRupee,
  Share2,
  Copy,
  Check,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  XCircle,
  ExternalLink,
  Sparkles,
  Send,
  MessageCircle,
  Heart,
  ShoppingBag,
  Target,
  Video,
  Film,

  ChevronLeft,  
  Megaphone,
  SendHorizontal,
  FileText,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

export default function GharSoapsContent() {
  const { onOpenAuth, onOpenLinkGen } = useGlobalContext();

  const [pageUrl, setPageUrl] = useState('');
  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  // Ghar Soaps Brand Data
  const brand = {
    name: 'Ghar Soaps',
    slug: 'ghar-soaps-affiliate-program',
    logo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/4_dy9x7w.png',
    tagline: 'Naturally Handmade, Simply Pure',
    category: 'Beauty & Care',
    type: 'CPS', // Cost Per Sale
    commission: '15%',
    rating: 4.8,
    totalCreators: 640,
    cookieDuration: '30 days',
    payoutFrequency: 'Instant',
    minimumPayout: '₹0',
    approvalType: 'Auto Approved',
    country: 'India 🇮🇳',
    about: "Ghar Soaps is India's home-grown handmade soap and bath care brand, reviving traditional bathing rituals with natural, cold-pressed ingredients. Every bar is small-batch crafted without parabens, sulphates, or synthetic fragrances — bringing the warmth of homemade care to modern skincare routines across India.",
    website: 'https://gharsoaps.in',
    founded: '2019',
    headquarters: 'Jaipur, India',
    productsCount: '80+ Products',
    avgOrderValue: '₹450',
    conversionRate: '3.6%',
    topProducts: [
      { name: 'Sandalwood & Turmeric Bar', category: 'Bathing Bars', badge: 'Best Seller' },
      { name: 'Charcoal Detox Soap', category: 'Bathing Bars', badge: 'High Converter' },
      { name: 'Rose & Shea Butter Bar', category: 'Body Care', badge: 'Best Seller' },
      { name: 'Festive Gift Soap Set', category: 'Gift Sets', badge: 'High Converter' }
    ],
    targetAudience: [
      { title: 'Natural Living Enthusiasts', icon: Sparkles, desc: 'Audience seeking chemical-free, sustainable bath products' },
      { title: 'Home & Wellness Creators', icon: Heart, desc: 'Creators sharing self-care and mindful living content' },
      { title: 'Gifting & Festive Shoppers', icon: Users, desc: 'Buyers looking for thoughtful, natural gift sets' },
      { title: 'Eco-Conscious Families', icon: ShieldCheck, desc: 'Households switching to plastic-free, cruelty-free care' }
    ],
    bestPlatforms: ['Instagram', 'YouTube', 'Blog', 'Telegram'],
    restrictions: [
      'No paid advertising using brand name as keyword',
      'No cashback or coupon sites',
      'No misleading "chemical-free" or medical claims',
      'Only promote to Indian audience'
    ],
    highlights: [
      'Auto-approved — start promoting instantly',
      'Growing conversion rate of 3.6%',
      'Affordable average order value of ₹450',
      '30-day cookie window'
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

  // Accordion FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    platform: 'Instagram',
    followers: '10K–50K',
    niche: 'Beauty & Skincare',
    earningsGoal: '₹5,000–₹25,000',
    profileLink: '',
    reason: '',
    upiId: '',
    agreeTerms: false,
    agreeNoAds: false
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedLink, setGeneratedLink] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

   const topPicks = [
    {
      id: 'haldiram',
      name: 'Haldiram',
      commission: '12%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/3_lnmzlc.png',
    },
    {
      id: 'ghar-soaps-affiliate-program',
      name: 'Ghar Soaps',
      commission: '10%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/4_dy9x7w.png',
    },
    {
      id: 'swiss-beauty-affiliate-program',
      name: 'Swiss Beauty',
      commission: '15%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/1_hdkg1p.png',
    },
    {
      id: 'asaya',
      name: 'Asaya',
      commission: '8%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/2_kvfi70.png',
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

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid email is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.profileLink.trim()) errors.profileLink = 'Social profile link is required';
    if (!formData.upiId.trim()) errors.upiId = 'UPI ID is required for commission payouts';
    if (!formData.agreeTerms) errors.agreeTerms = 'You must agree to terms';
    if (!formData.agreeNoAds) errors.agreeNoAds = 'You must confirm the ad policy constraint';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      showToast('Please fix required fields marked in red');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const username = formData.fullName.toLowerCase().replace(/\s+/g, '') || 'creator';
      const link = `linkx.in/${brand.slug}/@${username}`;
      setGeneratedLink(link);
      showToast('Congratulations! Your affiliate link was generated 🎉');
    }, 1500);
  };

  const handleCopyGeneratedLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`https://${generatedLink}`);
      setCopiedLink(true);
      showToast('Affiliate link copied to clipboard! 📋');
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const scrollToJoinForm = () => {
    const el = document.getElementById('join-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      q: `How much can I earn promoting ${brand.name}?`,
      a: `Commission is 15% per sale. With an average order value of ₹450, each sale earns you approximately ₹67.50. Active creators earn ₹5,000–₹15,000/month from ${brand.name} alone.`
    },
    {
      q: 'Is approval instant?',
      a: `Yes! ${brand.name} is auto-approved on LinkX. Submit the form and your unique link is generated immediately.`
    },
    {
      q: 'How long does the cookie last?',
      a: '30 days. If someone clicks your link and buys within 30 days, you earn the commission — even if they didn\'t buy immediately.'
    },
    {
      q: 'Can I promote on multiple platforms?',
      a: `Absolutely. Use your single ${brand.name} affiliate link across Instagram, YouTube, Telegram, WhatsApp, and your blog simultaneously.`
    },
    {
      q: 'When will I receive my commission?',
      a: `Commissions are confirmed after ${brand.name}'s 30-day return window closes. Once confirmed, they're instantly available for withdrawal on LinkX via UPI.`
    }
  ];

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

              {/* Star Rating & Creator Count */}
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
                  onClick={scrollToJoinForm}
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
                  India's Home-Grown Natural Soap &amp; Bath Care Brand
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
      <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B6355]">Disallowed Media</h4>
      <div className="flex flex-wrap gap-2">
        {[
          'POP Traffic', 'Facebook Ads', 'SEM - Brand Keyword(s)',
          'SEM - Generic Keyword(s)', 'SEM - Brand + Generic Keyword(s)'
        ].map((item, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E8E2D6]/60 text-[#6B6355] text-xs font-semibold border border-[#E8E2D6]"
          >
            {item}
            <XCircle className="w-3.5 h-3.5 text-[#6B6355]" />
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

  {/* B) Countries Allowed */}
  <div className="bg-[#FDFAF4] rounded-3xl p-6 sm:p-8 border border-[#E8E2D6] shadow-sm space-y-4">
    <div className="flex items-center gap-2 border-l-4 border-[#C89B2A] pl-3">
      <h3 className="text-xl font-black font-display text-[#1A3C34]">Campaigns ID</h3>
    </div>
    <div>
      <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8E2D6] bg-white text-sm font-semibold text-[#1A3C34] shadow-xs">
       4491
       
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
                onClick={scrollToJoinForm}
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
                className="min-w-[260px] sm:min-w-[280px] bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-4 snap-start group"
              >
                {/* Brand Logo */}
                <div className="w-28 h-16 rounded-2xl bg-white border border-[#E8E2D6] p-2 flex items-center justify-center shadow-2xs overflow-hidden group-hover:scale-105 transition-transform">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Brand Info */}
                <div>
                  <h3 className="font-extrabold text-lg text-[#1A3C34]">
                    {brand.name}
                  </h3>
                  <div className="mt-1">
                    <span className="text-xs text-[#6B6355] block font-medium">Commission</span>
                    <span className="text-2xl font-black text-[#C89B2A] block leading-tight">
                      Upto {brand.commission}
                    </span>
                  </div>
                </div>

                {/* Promote CTA Button */}
                <Link
                  href={`/campaigns/${brand.id}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-colors shadow-2xs flex items-center justify-center gap-1.5"
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
      {/* SECTION 4 — JOIN PROGRAM FORM (FULL WIDTH)                          */}
      {/* =================================================================== */}
      <section id="join-form" className="bg-[#EDE8DC] py-20 px-4 sm:px-6 lg:px-8 border-y border-[#E8E2D6]">
        <div className="max-w-4xl mx-auto space-y-8">

          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black font-display">
              <span className="text-[#1A3C34]">Join the </span>
              <span className="text-[#C89B2A]">{brand.name} </span>
              <span className="text-[#1A3C34]">Affiliate Program</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#C89B2A] mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-[#6B6355] font-medium max-w-xl mx-auto">
              Fill in your details below to generate your unique affiliate shortlink and start earning commissions immediately.
            </p>
          </div>

          {/* Form / Success Card */}
          <div className="bg-[#FDFAF4] rounded-3xl p-6 sm:p-10 border border-[#E8E2D6] shadow-xl max-w-2xl mx-auto">
            {isSubmitted ? (
              /* Success State */
              <div className="text-center space-y-6 py-6 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-[#2D7A4F]/15 text-[#2D7A4F] flex items-center justify-center mx-auto border-2 border-[#2D7A4F]/30 shadow-md">
                  <Check className="w-10 h-10 stroke-[3]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-[#1A3C34]">
                    You're In! 🎉
                  </h3>
                  <p className="text-sm text-[#6B6355] font-semibold">
                    Your unique {brand.name} affiliate shortlink has been generated successfully.
                  </p>
                </div>

                {/* Generated Link Box */}
                <div className="p-4 rounded-2xl bg-[#F5F0E8] border-2 border-[#C89B2A] flex items-center justify-between gap-3 shadow-inner">
                  <span className="text-sm font-black text-[#1A3C34] truncate">
                    {generatedLink}
                  </span>
                  <button
                    onClick={handleCopyGeneratedLink}
                    className="px-4 py-2 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-xs transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer shadow-xs"
                  >
                    {copiedLink ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
                  </button>
                </div>

                {/* Share Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Shop ${brand.name} products using my link: https://${generatedLink}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center gap-2 shadow-xs hover:bg-[#20b858] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Share on WhatsApp
                  </a>
                  <a
                    href={`https://t.me/share/url?url=${encodeURIComponent(`https://${generatedLink}`)}&text=${encodeURIComponent(`Shop ${brand.name} Best Sellers`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#0088cc] text-white font-bold text-xs flex items-center gap-2 shadow-xs hover:bg-[#0077b3] transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Share on Telegram
                  </a>
                </div>

                {/* Next Steps */}
                <div className="pt-6 border-t border-[#E8E2D6] text-left space-y-3">
                  <h4 className="text-xs font-black uppercase text-[#1A3C34] tracking-wider">
                    What's Next?
                  </h4>
                  <div className="space-y-2 text-xs text-[#6B6355] font-semibold">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#C89B2A] text-[#1A3C34] text-[10px] font-black flex items-center justify-center">1</span>
                      <span>Copy your unique shortlink above</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#C89B2A] text-[#1A3C34] text-[10px] font-black flex items-center justify-center">2</span>
                      <span>Share it on Instagram bio, YouTube description, or Telegram</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#C89B2A] text-[#1A3C34] text-[10px] font-black flex items-center justify-center">3</span>
                      <span>Track clicks &amp; sales live on your LinkX dashboard</span>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              /* Registration Form */
              <form onSubmit={handleSubmitForm} className="space-y-6">

                {/* Row 1 — Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-[#1A3C34] block">
                      Full Name <span className="text-[#C85A32]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F5F0E8] border text-xs text-[#1A3C34] font-medium focus:outline-none focus:border-[#C89B2A] ${
                        formErrors.fullName ? 'border-[#C85A32]' : 'border-[#E8E2D6]'
                      }`}
                    />
                    {formErrors.fullName && <p className="text-[10px] text-[#C85A32] font-bold">{formErrors.fullName}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-[#1A3C34] block">
                      Email Address <span className="text-[#C85A32]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F5F0E8] border text-xs text-[#1A3C34] font-medium focus:outline-none focus:border-[#C89B2A] ${
                        formErrors.email ? 'border-[#C85A32]' : 'border-[#E8E2D6]'
                      }`}
                    />
                    {formErrors.email && <p className="text-[10px] text-[#C85A32] font-bold">{formErrors.email}</p>}
                  </div>
                </div>

                {/* Row 2 — Phone & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-[#1A3C34] block">
                      Phone Number <span className="text-[#C85A32]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F5F0E8] border text-xs text-[#1A3C34] font-medium focus:outline-none focus:border-[#C89B2A] ${
                        formErrors.phone ? 'border-[#C85A32]' : 'border-[#E8E2D6]'
                      }`}
                    />
                    {formErrors.phone && <p className="text-[10px] text-[#C85A32] font-bold">{formErrors.phone}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-[#1A3C34] block">
                      City / Location
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Mumbai, Delhi, Bengaluru..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#E8E2D6] text-xs text-[#1A3C34] font-medium focus:outline-none focus:border-[#C89B2A]"
                    />
                  </div>
                </div>

                {/* Row 3 — Platform & Followers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-[#1A3C34] block">
                      Primary Platform <span className="text-[#C85A32]">*</span>
                    </label>
                    <select
                      name="platform"
                      value={formData.platform}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#E8E2D6] text-xs text-[#1A3C34] font-medium focus:outline-none focus:border-[#C89B2A]"
                    >
                      <option value="Instagram">Instagram</option>
                      <option value="YouTube">YouTube</option>
                      <option value="Telegram">Telegram</option>
                      <option value="Twitter/X">Twitter / X</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Blog/Website">Blog / Website</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-[#1A3C34] block">
                      Followers / Subscribers <span className="text-[#C85A32]">*</span>
                    </label>
                    <select
                      name="followers"
                      value={formData.followers}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#E8E2D6] text-xs text-[#1A3C34] font-medium focus:outline-none focus:border-[#C89B2A]"
                    >
                      <option value="Under 1,000">Under 1,000</option>
                      <option value="1K–10K">1K–10K</option>
                      <option value="10K–50K">10K–50K</option>
                      <option value="50K–1L">50K–1L</option>
                      <option value="1L–5L">1L–5L</option>
                      <option value="5L+">5L+</option>
                    </select>
                  </div>
                </div>

                {/* Row 4 — Niche & Earnings Goal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-[#1A3C34] block">
                      Niche / Content Category <span className="text-[#C85A32]">*</span>
                    </label>
                    <select
                      name="niche"
                      value={formData.niche}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#E8E2D6] text-xs text-[#1A3C34] font-medium focus:outline-none focus:border-[#C89B2A]"
                    >
                      <option value="Beauty & Skincare">Beauty & Skincare</option>
                      <option value="Fashion & Lifestyle">Fashion & Lifestyle</option>
                      <option value="Health & Fitness">Health & Fitness</option>
                      <option value="Food & Cooking">Food & Cooking</option>
                      <option value="Parenting & Family">Parenting & Family</option>
                      <option value="Tech & Gadgets">Tech & Gadgets</option>
                      <option value="Finance">Finance</option>
                      <option value="General / Mixed">General / Mixed</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-[#1A3C34] block">
                      Monthly Earnings Goal
                    </label>
                    <select
                      name="earningsGoal"
                      value={formData.earningsGoal}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#E8E2D6] text-xs text-[#1A3C34] font-medium focus:outline-none focus:border-[#C89B2A]"
                    >
                      <option value="₹1,000–₹5,000">₹1,000–₹5,000</option>
                      <option value="₹5,000–₹25,000">₹5,000–₹25,000</option>
                      <option value="₹25,000–₹1,00,000">₹25,000–₹1,00,000</option>
                      <option value="₹1,00,000+">₹1,00,000+</option>
                    </select>
                  </div>
                </div>

                {/* Row 5 — Profile Link */}
                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-[#1A3C34] block">
                    Social Media Profile Link <span className="text-[#C85A32]">*</span>
                  </label>
                  <input
                    type="url"
                    name="profileLink"
                    value={formData.profileLink}
                    onChange={handleInputChange}
                    placeholder="https://instagram.com/yourhandle or YouTube channel URL"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F5F0E8] border text-xs text-[#1A3C34] font-medium focus:outline-none focus:border-[#C89B2A] ${
                      formErrors.profileLink ? 'border-[#C85A32]' : 'border-[#E8E2D6]'
                    }`}
                  />
                  {formErrors.profileLink && <p className="text-[10px] text-[#C85A32] font-bold">{formErrors.profileLink}</p>}
                </div>

                {/* Row 6 — Reason */}
                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-[#1A3C34] block">
                    Why do you want to promote {brand.name}? (Optional)
                  </label>
                  <textarea
                    name="reason"
                    rows={3}
                    value={formData.reason}
                    onChange={handleInputChange}
                    placeholder={`Tell us briefly about your audience and why ${brand.name} fits your content...`}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#E8E2D6] text-xs text-[#1A3C34] font-medium focus:outline-none focus:border-[#C89B2A]"
                  />
                </div>

                {/* Row 7 — UPI ID */}
                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-[#1A3C34] block">
                    UPI ID for Payouts <span className="text-[#C85A32]">*</span>
                  </label>
                  <input
                    type="text"
                    name="upiId"
                    value={formData.upiId}
                    onChange={handleInputChange}
                    placeholder="yourname@upi or mobile@paytm"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F5F0E8] border text-xs text-[#1A3C34] font-medium focus:outline-none focus:border-[#C89B2A] ${
                      formErrors.upiId ? 'border-[#C85A32]' : 'border-[#E8E2D6]'
                    }`}
                  />
                  {formErrors.upiId && <p className="text-[10px] text-[#C85A32] font-bold">{formErrors.upiId}</p>}
                  <p className="text-[10px] text-[#6B6355] font-semibold">
                    🔒 Your UPI ID is encrypted and used exclusively for automatic commission payouts.
                  </p>
                </div>

                {/* Consent Checkboxes */}
                <div className="space-y-2 pt-2">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      className="mt-0.5 accent-[#C89B2A]"
                    />
                    <span className="text-xs font-semibold text-[#1A3C34]">
                      I agree to the LinkX Terms &amp; Conditions and {brand.name} Affiliate Program Rules
                    </span>
                  </label>
                  {formErrors.agreeTerms && <p className="text-[10px] text-[#C85A32] font-bold pl-5">{formErrors.agreeTerms}</p>}

                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeNoAds"
                      checked={formData.agreeNoAds}
                      onChange={handleInputChange}
                      className="mt-0.5 accent-[#C89B2A]"
                    />
                    <span className="text-xs font-semibold text-[#1A3C34]">
                      I confirm I will NOT run paid advertising search ads using the brand's name as keyword
                    </span>
                  </label>
                  {formErrors.agreeNoAds && <p className="text-[10px] text-[#C85A32] font-bold pl-5">{formErrors.agreeNoAds}</p>}
                </div>

                {/* Submit Button */}
                <div className="space-y-2 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-[#1A3C34] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Generate My Affiliate Link</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center font-bold text-[#6B6355]">
                    ⚡ Auto-approved — your link will be generated instantly after submission
                  </p>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 5 — BRAND STORY / SEO CONTENT                              */}
      {/* =================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black font-display text-[#1A3C34]">
            About {brand.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6355] font-semibold">
            Know the brand you're promoting to craft authentic content
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#6B6355] font-medium leading-relaxed">
            <p>
              Ghar Soaps was founded in 2019 by siblings Ananya and Rohan Verma, who set out to revive their grandmother's traditional cold-pressed soap-making recipes from Rajasthan. What started as small batches gifted to family and friends quickly grew into one of India's most loved home-grown bath care brands.
            </p>
            <p>
              Every Ghar Soaps bar is handcrafted in small batches and is completely free from parabens, sulphates, and synthetic fragrances. Certified cruelty-free and dermatologically tested, the brand blends traditional Indian ingredients like sandalwood, turmeric, charcoal, and shea butter with time-honoured cold-press methods.
            </p>
            <p>
              Recognized as one of India's rising sustainable D2C brands, Ghar Soaps has built a loyal following across Metro, Tier 1, and Tier 2 Indian cities. Their "Ek Sabun, Ek Ped" initiative plants one tree for every soap bar sold.
            </p>
            <p>
              For content creators and affiliate marketers, Ghar Soaps offers a genuine opportunity: strong natural-living appeal, an affordable order value that converts easily, frequent repeat purchases, and a growing 3.6% purchase conversion rate across all traffic sources.
            </p>
          </div>

          {/* Right Visual Stats Column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#FDFAF4] border border-[#E8E2D6] shadow-sm text-center space-y-2">
              <span className="text-2xl block">🌿</span>
              <h4 className="text-sm font-black text-[#1A3C34]">100% Natural</h4>
              <p className="text-[11px] text-[#6B6355] font-semibold">Paraben &amp; Sulphate Free</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FDFAF4] border border-[#E8E2D6] shadow-sm text-center space-y-2">
              <span className="text-2xl block">🐰</span>
              <h4 className="text-sm font-black text-[#1A3C34]">Cruelty-Free</h4>
              <p className="text-[11px] text-[#6B6355] font-semibold">Certified, Never Tested on Animals</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FDFAF4] border border-[#E8E2D6] shadow-sm text-center space-y-2">
              <span className="text-2xl block">🌳</span>
              <h4 className="text-sm font-black text-[#1A3C34]">25,000+ Trees Planted</h4>
              <p className="text-[11px] text-[#6B6355] font-semibold">Via Ek Sabun, Ek Ped</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FDFAF4] border border-[#E8E2D6] shadow-sm text-center space-y-2">
              <span className="text-2xl block">⭐</span>
              <h4 className="text-sm font-black text-[#1A3C34]">4.8 / 5 Rating</h4>
              <p className="text-[11px] text-[#6B6355] font-semibold">Customer Favorite</p>
            </div>
          </div>

        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 6 — OTHER CAMPAIGNS YOU MIGHT LIKE                          */}
      {/* =================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-[#1A3C34]">
              Similar Campaigns
            </h2>
            <p className="text-xs text-[#6B6355] font-semibold mt-1">
              Explore other top-performing campaigns on LinkX
            </p>
          </div>
          <Link
            href="/campaigns"
            className="text-xs font-black text-[#C89B2A] hover:underline flex items-center gap-1"
          >
            <span>View all</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 — Haldiram */}
          <div className="bg-[#FDFAF4] rounded-2xl p-5 border border-[#E8E2D6] hover:border-[#C89B2A] transition-all shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D6] p-1 flex items-center justify-center overflow-hidden">
                  <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/3_lnmzlc.png" alt="Haldiram" className="w-full h-full object-cover rounded-lg" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#1A3C34]/10 text-[#1A3C34] text-[10px] font-extrabold uppercase">
                  Food &amp; Snacks
                </span>
              </div>
              <h3 className="text-base font-black text-[#1A3C34]">Haldiram</h3>
              <p className="text-xs font-black text-[#C89B2A]">Up to 12% Commission</p>
            </div>
            <Link
              href="/campaigns/haldiram"
              className="w-full py-2.5 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-colors text-center block"
            >
              Promote Now →
            </Link>
          </div>

          {/* Card 2 — Swiss Beauty */}
          <div className="bg-[#FDFAF4] rounded-2xl p-5 border border-[#E8E2D6] hover:border-[#C89B2A] transition-all shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D6] p-1 flex items-center justify-center overflow-hidden">
                  <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/1_hdkg1p.png" alt="Swiss Beauty" className="w-full h-full object-cover rounded-lg" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#1A3C34]/10 text-[#1A3C34] text-[10px] font-extrabold uppercase">
                  Cosmetics
                </span>
              </div>
              <h3 className="text-base font-black text-[#1A3C34]">Swiss Beauty</h3>
              <p className="text-xs font-black text-[#C89B2A]">15% Commission</p>
            </div>
            <Link
              href="/campaigns/swiss-beauty-affiliate-program"
              className="w-full py-2.5 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-colors text-center block"
            >
              Promote Now →
            </Link>
          </div>

          {/* Card 3 — Asaya */}
          <div className="bg-[#FDFAF4] rounded-2xl p-5 border border-[#E8E2D6] hover:border-[#C89B2A] transition-all shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D6] p-1 flex items-center justify-center overflow-hidden">
                  <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/2_kvfi70.png" alt="Asaya" className="w-full h-full object-cover rounded-lg" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#1A3C34]/10 text-[#1A3C34] text-[10px] font-extrabold uppercase">
                  Skincare
                </span>
              </div>
              <h3 className="text-base font-black text-[#1A3C34]">Asaya</h3>
              <p className="text-xs font-black text-[#C89B2A]">Up to 8% Commission</p>
            </div>
            <Link
              href="/campaigns/asaya"
              className="w-full py-2.5 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-colors text-center block"
            >
              Promote Now →
            </Link>
          </div>

        </div>
      </section>


      

      {/* =================================================================== */}
      {/* SECTION 8 — FAQ FOR THIS CAMPAIGN                                  */}
      {/* =================================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black font-display">
            <span className="text-[#1A3C34]">{brand.name} Program </span>
            <span className="text-[#C89B2A]">FAQs</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6355] font-semibold">
            Common questions regarding payouts, tracking, and rules
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left font-black text-sm text-[#1A3C34] flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#C89B2A] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#6B6355] flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#6B6355] font-medium leading-relaxed border-t border-[#E8E2D6]/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 9 — BOTTOM CTA BANNER                                      */}
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
            Ready to Start Earning with {brand.name}?
          </h2>

          <p className="text-sm sm:text-base text-[#F5F0E8]/90 font-medium leading-relaxed max-w-xl mx-auto">
            Join 640+ creators already making money promoting India's home-grown natural soap brand.
          </p>

          <button
            onClick={scrollToJoinForm}
            className="px-8 py-4 rounded-2xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-sm transition-all shadow-xl inline-flex items-center gap-2 cursor-pointer active:scale-98"
          >
            <span>Join the Program Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-xs text-[#F5F0E8]/70 font-semibold pt-2">
            ⚡ Auto-approved | 💰 15% commission | 🔒 Free to join
          </p>
        </div>
      </section>

    </div>
  );
};
