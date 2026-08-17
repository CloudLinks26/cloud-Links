'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import {
  Search,
  Star,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Plus,
  Minus,
  Sparkles,
  Shirt,
  Smartphone,
  Plane,
  Utensils,
  TrendingUp,
  Heart,
  ShoppingBag,
  ShoppingCart,
  Download,
  UserPlus,
  CheckCircle2,
  ArrowRight,
  Filter
} from 'lucide-react';

export default function CampaignsContent() {
  // Filters & State
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'commission' | 'rating' | 'popular'>('commission');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Top picks carousel ref
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Categories list
  const categories = [
    'All',
    'Fashion',
    'Beauty',
    'Electronics',
    'Travel',
    'Food',
    'Finance',
    'Health'
  ];

  // Top Picks Cards
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

  // Table Campaigns (10 requested items + complete data)
  const allCampaigns = [
    {
      id: 'haldiram-affiliate-program',
      name: 'Haldiram',
      category: 'Food & Snacks',
      type: 'CPS',
      commission: 'Up to 12% / Sale',
      numericCommission: 12,
      rating: 4.9,
      logo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/3_lnmzlc.png',
    },
    {
      id: 'ghar-soaps-affiliate-program',
      name: 'Ghar Soaps',
      category: 'Beauty & Care',
      type: 'CPS',
      commission: 'Up to 10% / Sale',
      numericCommission: 10,
      rating: 4.8,
      logo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/4_dy9x7w.png',
    },
    {
      id: 'swiss-beauty-affiliate-program',
      name: 'Swiss Beauty',
      category: 'Cosmetics',
      type: 'CPS',
      commission: 'Up to 15% / Sale',
      numericCommission: 15,
      rating: 4.9,
      logo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/1_hdkg1p.png',
    },
    {
      id: 'asaya-affiliate-program',
      name: 'Asaya',
      category: 'Skincare',
      type: 'CPS',
      commission: 'Up to 8% / Sale',
      numericCommission: 8,
      rating: 4.7,
      logo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/2_kvfi70.png',
    },
    {
      id: 'hamerscop-affiliate-program',
      name: 'HamersCop',
      category: 'Lifestyle & Accessories',
      type: 'CPS',
      commission: 'Up to 12% / Sale',
      numericCommission: 12,
      rating: 4.6,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965785/9_bntydx.jpg',
    },
    {
      id: 'cotton-culture-affiliate-program',
      name: 'Cotton Culture',
      category: 'Home & Furnishing',
      type: 'CPS',
      commission: 'Up to 12% / Sale',
      numericCommission: 12,
      rating: 4.7,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965785/8_h525df.jpg',
    },
    {
      id: 'fraganote-affiliate-program',
      name: 'Fraganote',
      category: 'Fragrances',
      type: 'CPS',
      commission: 'Up to 8% / Sale',
      numericCommission: 8,
      rating: 4.6,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965785/7_dv9gtm.jpg',
    },
    {
      id: 'anydesk-affiliate-program',
      name: 'Anydesk',
      category: 'Software',
      type: 'CPS',
      commission: 'Up to 8% / Sale',
      numericCommission: 8,
      rating: 4.8,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965786/6_pp9txm.jpg',
    },
    {
      id: 'ajio-affiliate-program',
      name: 'AJIO',
      category: 'Fashion',
      type: 'CPS',
      commission: 'Up to 5% / Sale',
      numericCommission: 5,
      rating: 4.7,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965786/5_khkkoh.jpg',
    },
    {
      id: 'perfora-care-affiliate-program',
      name: 'Perfora Care',
      category: 'Oral Care',
      type: 'CPS',
      commission: 'Up to 15% / Sale',
      numericCommission: 15,
      rating: 4.7,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965785/4_z3qyzx.jpg',
    },
    {
      id: 'the-man-company-affiliate-program',
      name: 'The Man Company',
      category: "Men's Grooming",
      type: 'CPS',
      commission: 'Up to 17% / Sale',
      numericCommission: 17,
      rating: 4.7,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965786/3_qruuhh.jpg',
    },
    {
      id: 'firstcry-affiliate-program',
      name: 'FirstCry',
      category: 'Baby & Kids',
      type: 'CPS',
      commission: 'Flat 45% / Sale',
      numericCommission: 45,
      rating: 4.8,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965785/2_wm8mdp.jpg',
    },
    {
      id: 'sanskriti-homes-affiliate-program',
      name: 'Sanskriti Homes',
      category: 'Home Decor',
      type: 'CPS',
      commission: 'Up to 17% / Sale',
      numericCommission: 17,
      rating: 4.6,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965785/1_rmbba3.jpg',
    },
  ];

  // Filtering & Sorting Logic
  const filteredCampaigns = allCampaigns.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      item.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (selectedCategory === 'Beauty' && item.category.includes('Beauty')) ||
      (selectedCategory === 'Health' && item.category.includes('Health'));

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const sortedCampaigns = [...filteredCampaigns].sort((a, b) => {
    if (sortBy === 'commission') {
      return b.numericCommission - a.numericCommission;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  // Showcase Categories Grid Data
  const showcaseCategories = [
    {
      title: 'Fashion',
      icon: Shirt,
      brands: 'Myntra, AJIO, Meesho',
      avgCommission: 'Up to 15%',
      badge: '120+ Brands',
    },
    {
      title: 'Beauty',
      icon: Sparkles,
      brands: 'Nykaa, Mamaearth, Plum',
      avgCommission: 'Up to 20%',
      badge: '85+ Brands',
    },
    {
      title: 'Electronics',
      icon: Smartphone,
      brands: 'boAt, Samsung, Noise',
      avgCommission: 'Up to 10%',
      badge: '95+ Brands',
    },
    {
      title: 'Travel',
      icon: Plane,
      brands: 'MakeMyTrip, Goibibo, redBus',
      avgCommission: 'Up to 8%',
      badge: '40+ Brands',
    },
    {
      title: 'Food',
      icon: Utensils,
      brands: 'Zomato, Swiggy, EatSure',
      avgCommission: 'Up to 7%',
      badge: '50+ Brands',
    },
    {
      title: 'Finance',
      icon: TrendingUp,
      brands: 'Groww, Zerodha, Cred',
      avgCommission: 'Up to ₹500/lead',
      badge: '30+ Brands',
    },
    {
      title: 'Health',
      icon: Heart,
      brands: 'PharmEasy, 1mg, Netmeds',
      avgCommission: 'Up to 14%',
      badge: '60+ Brands',
    },
    {
      title: 'Shopping',
      icon: ShoppingBag,
      brands: 'Flipkart, Amazon, Snapdeal',
      avgCommission: 'Up to 12%',
      badge: '100+ Brands',
    },
  ];

  // FAQs
  const faqs = [
  {
    question: 'How do I join a campaign?',
    answer: "Sign up for free on CloudsLink, head to the Campaigns section, and choose any brand you'd like to promote. Click “Promote Now” to apply and get your unique affiliate link once approved.",
  },
  {
    question: 'When do I get paid?',
    answer: 'Once your shared link is approved and the conversion is validated, your payout will be processed instantly or within 24–48 hours directly to your bank account or UPI ID, including GPay, PhonePe or Paytm.',
  },
  {
    question: 'Is there a minimum payout threshold?',
    answer: 'Yes. The minimum payout threshold is ₹5,000, after which you can withdraw your confirmed earnings.',
  },
  {
    question: 'Can I promote on Instagram, YouTube, or WhatsApp?',
    answer: 'Absolutely! Share your CloudsLink affiliate links through Instagram bios, YouTube descriptions, Telegram channels, WhatsApp Status, personal blogs and other permitted platforms.',
  },
  {
    question: 'Are there any joining fees?',
    answer: 'No. Joining CloudsLink is completely free. There are no registration fees, subscription charges or hidden deductions.',
  },
];

  return (
    <div className="pt-28 pb-20 bg-[#F5F0E8] min-h-screen text-[#1A3C34] font-sans selection:bg-[#C89B2A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* =================================================================== */}
        {/* SECTION 1 — PAGE HERO HEADER                                        */}
        {/* =================================================================== */}
        <div className="relative text-center max-w-4xl mx-auto space-y-4 py-8 px-6 rounded-3xl overflow-hidden bg-gradient-to-b from-[#FDFAF4] to-[#F5F0E8] border border-[#E8E2D6] shadow-xs">
          {/* Subtle Dotted Background Pattern */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#1A3C34 1px, transparent 1px)`,
              backgroundSize: '16px 16px',
            }}
          />

          <div className="relative z-10 space-y-3">
            {/* Gold Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C89B2A]/15 border border-[#C89B2A]/30 text-[#1A3C34] text-xs font-extrabold uppercase tracking-wider shadow-2xs">
              <span className="text-[#C89B2A]">⭐</span> Updated Daily
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1A3C34]">
              <span className="text-[#C89B2A]">500+</span> Campaigns & Brands
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#6B6355] font-medium max-w-xl mx-auto">
              Find your perfect brand. Get your link. Start Earning.
            </p>
          </div>
        </div>

        {/* =================================================================== */}
        {/* SECTION 2 — FILTERS + SEARCH BAR                                   */}
        {/* =================================================================== */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {/* Category Filter Pills & Sort Dropdown */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Scrollable Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
              <span className="text-xs font-bold text-[#6B6355] flex items-center gap-1 mr-1 flex-shrink-0">
                <Filter className="w-3.5 h-3.5 text-[#1A3C34]" />
                Filter:
              </span>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-full text-xs font-extrabold whitespace-nowrap transition-all shadow-2xs ${isActive
                      ? 'bg-[#C89B2A] text-[#1A3C34] font-bold shadow-xs scale-102'
                      : 'bg-transparent border border-[#1A3C34] text-[#1A3C34] hover:bg-[#1A3C34] hover:text-white'
                      }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Sort Dropdown */}
            <div className="relative flex-shrink-0 w-full md:w-auto flex justify-end">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none bg-[#FDFAF4] border border-[#1A3C34] text-[#1A3C34] font-bold text-xs py-2.5 pl-4 pr-9 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C89B2A] shadow-2xs"
              >
                <option value="commission">Sort By: Highest Commission ▾</option>
                <option value="rating">Sort By: Highest Rating ▾</option>
                <option value="popular">Sort By: Brand Name (A-Z) ▾</option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#1A3C34] absolute right-3 top-3 pointer-events-none" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full shadow-md rounded-2xl overflow-hidden bg-[#FDFAF4] border border-[#E8E2D6] focus-within:ring-2 focus-within:ring-[#C89B2A]">
            <input
              type="text"
              placeholder="Search brands or categories... (e.g. Myntra, boAt, Electronics)"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-5 pr-14 py-4 bg-transparent text-[#1A3C34] placeholder:text-[#6B6355] text-sm font-medium focus:outline-none"
            />
            <button
              onClick={() => { }}
              aria-label="Search"
              className="absolute right-2 top-2 bottom-2 px-4 bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] rounded-xl flex items-center justify-center transition-colors shadow-2xs"
            >
              <Search className="w-4 h-4 font-bold" />
            </button>
          </div>
        </div>

        {/* =================================================================== */}
        {/* SECTION 3 — TOP PICKS FOR YOU (CARDS CAROUSEL)                      */}
        {/* =================================================================== */}
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

        {/* =================================================================== */}
        {/* SECTION 4 — ALL CAMPAIGNS TABLE                                     */}
        {/* =================================================================== */}
        <div className="space-y-6 pt-4">
          <div className="text-center space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3C34]">
              All Campaigns
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6355]">
              Showing {sortedCampaigns.length} active affiliate merchant campaigns
            </p>
          </div>

          <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#1A3C34] text-white text-xs uppercase tracking-wider font-extrabold">
                    <th className="py-4 px-6">Merchant</th>
                    <th className="py-4 px-4">Category</th>
                    <th className="py-4 px-4">Type</th>
                    <th className="py-4 px-4">Commission</th>
                    <th className="py-4 px-4">Rating</th>
                    <th className="py-4 px-6 text-right">Promote</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E2D6] text-sm font-medium">
                  {sortedCampaigns.length > 0 ? (
                    sortedCampaigns.map((item, index) => {
                      const isEven = index % 2 === 0;
                      return (
                        <tr
                          key={item.id}
                          className={`transition-all hover:border-l-4 hover:border-l-[#C89B2A] ${isEven ? 'bg-[#FDFAF4]' : 'bg-[#F5F0E8]/60'
                            } hover:bg-[#F5F0E8]`}
                        >
                          {/* Merchant */}
                          <td className="py-4 px-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D6] p-1 flex items-center justify-center flex-shrink-0 shadow-2xs overflow-hidden">
                              <img
                                src={item.logo}
                                alt={item.name}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                            <div className="flex items-center gap-1.5 font-extrabold text-[#1A3C34]">
                              <span>{item.name}</span>
                              <span title="India Campaign">🇮🇳</span>
                            </div>
                          </td>

                          {/* Category */}
                          <td className="py-4 px-4">
                            <span className="inline-block px-3 py-1 rounded-full border border-[#1A3C34]/30 text-[#1A3C34] text-xs font-bold bg-white/60">
                              {item.category}
                            </span>
                          </td>

                          {/* Type */}
                          <td className="py-4 px-4">
                            <span className="inline-block px-2.5 py-0.5 rounded border border-[#1A3C34]/20 text-[#1A3C34] text-[11px] font-extrabold uppercase bg-white/40">
                              {item.type}
                            </span>
                          </td>

                          {/* Commission */}
                          <td className="py-4 px-4 font-black text-[#C89B2A]">
                            {item.commission}
                          </td>

                          {/* Rating */}
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-1 text-xs text-[#1A3C34] font-bold">
                              <Star className="w-3.5 h-3.5 fill-[#C89B2A] text-[#C89B2A]" />
                              <span>{item.rating}/5</span>
                            </div>
                          </td>

                          {/* Promote Button */}
                          <td className="py-4 px-6 text-right">
                            <Link
                              href={`/campaigns/${item.id}`}
                              className="py-2 px-4 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-colors shadow-2xs inline-flex items-center gap-1"
                            >
                              <span>Promote Now</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </Link>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-[#6B6355] text-sm">
                        No campaigns found matching "{searchQuery}". Try clearing filters or searching for another term.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="p-4 bg-[#F5F0E8] border-t border-[#E8E2D6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#1A3C34]">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="px-4 py-2 rounded-xl border border-[#1A3C34] text-[#1A3C34] hover:bg-[#1A3C34] hover:text-white disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#1A3C34] transition-colors"
              >
                Previous
              </button>

              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-extrabold transition-all ${currentPage === pageNum
                      ? 'bg-[#C89B2A] text-[#1A3C34] shadow-2xs'
                      : 'hover:bg-[#1A3C34]/10 text-[#1A3C34]'
                      }`}
                  >
                    {pageNum}
                  </button>
                ))}
                <span className="px-1 text-[#6B6355]">...</span>
                <button
                  onClick={() => setCurrentPage(20)}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center font-extrabold transition-all ${currentPage === 20
                    ? 'bg-[#C89B2A] text-[#1A3C34] shadow-2xs'
                    : 'hover:bg-[#1A3C34]/10 text-[#1A3C34]'
                    }`}
                >
                  20
                </button>
              </div>

              <button
                disabled={currentPage === 20}
                onClick={() => setCurrentPage((p) => Math.min(20, p + 1))}
                className="px-4 py-2 rounded-xl border border-[#1A3C34] text-[#1A3C34] hover:bg-[#1A3C34] hover:text-white disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#1A3C34] transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>

     

        {/* =================================================================== */}
        {/* SECTION 6 — HOW COMMISSIONS WORK                                   */}
        {/* =================================================================== */}
        <div className="space-y-8 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A3C34]">
              How Commissions Work
            </h2>
            <p className="text-sm text-[#6B6355] font-medium">
              With CloudLinks, you earn a commission when someone makes a qualifying purchase through your unique affiliate link. The process is simple:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
  {/* Step 1 */}
  <div className="bg-[#FDFAF4] rounded-2xl border-t-4 border-t-[#1A3C34] border-x border-b border-[#E8E2D6] p-7 space-y-4 shadow-xs">
    <div className="w-12 h-12 rounded-xl bg-[#1A3C34]/10 text-[#1A3C34] flex items-center justify-center font-extrabold text-lg">
      1
    </div>
    <h3 className="font-extrabold text-xl text-[#1A3C34]">
      Choose a Brand
    </h3>
    <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed">
      Browse from hundreds of top partner brands across categories like fashion, tech, finance, and food.
    </p>
  </div>

  {/* Step 2 */}
  <div className="bg-[#FDFAF4] rounded-2xl border-t-4 border-t-[#1A3C34] border-x border-b border-[#E8E2D6] p-7 space-y-4 shadow-xs">
    <div className="w-12 h-12 rounded-xl bg-[#1A3C34]/10 text-[#1A3C34] flex items-center justify-center font-extrabold text-lg">
      2
    </div>
    <h3 className="font-extrabold text-xl text-[#1A3C34]">
      Generate Your Link
    </h3>
    <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed">
      Convert any product URL into your unique affiliate tracking link in just one click.
    </p>
  </div>

  {/* Step 3 */}
  <div className="bg-[#FDFAF4] rounded-2xl border-t-4 border-t-[#1A3C34] border-x border-b border-[#E8E2D6] p-7 space-y-4 shadow-xs">
    <div className="w-12 h-12 rounded-xl bg-[#1A3C34]/10 text-[#1A3C34] flex items-center justify-center font-extrabold text-lg">
      3
    </div>
    <h3 className="font-extrabold text-xl text-[#1A3C34]">
      Share It
    </h3>
    <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed">
      Post your link across your social media channels, WhatsApp groups, blogs, or YouTube videos.
    </p>
  </div>

  {/* Step 4 */}
  <div className="bg-[#FDFAF4] rounded-2xl border-t-4 border-t-[#1A3C34] border-x border-b border-[#E8E2D6] p-7 space-y-4 shadow-xs">
    <div className="w-12 h-12 rounded-xl bg-[#1A3C34]/10 text-[#1A3C34] flex items-center justify-center font-extrabold text-lg">
      4
    </div>
    <h3 className="font-extrabold text-xl text-[#1A3C34]">
      Get a Sale
    </h3>
    <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed">
      Your audience clicks your link and completes a valid purchase or sign-up with the brand.
    </p>
  </div>

  {/* Step 5 */}
  <div className="bg-[#FDFAF4] rounded-2xl border-t-4 border-t-[#1A3C34] border-x border-b border-[#E8E2D6] p-7 space-y-4 shadow-xs">
    <div className="w-12 h-12 rounded-xl bg-[#1A3C34]/10 text-[#1A3C34] flex items-center justify-center font-extrabold text-lg">
      5
    </div>
    <h3 className="font-extrabold text-xl text-[#1A3C34]">
      Earn Commission
    </h3>
    <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed">
      Track your earnings live on your dashboard and withdraw them directly to your bank or UPI.
    </p>
  </div>
</div>

          
        </div>

      

        {/* =================================================================== */}
        {/* SECTION 8 — FAQ SECTION                                            */}
        {/* =================================================================== */}
        <div className="space-y-8 pt-4 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A3C34]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#6B6355] font-medium">
              Everything you need to know about campaigns on CloudLinks
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-extrabold text-base text-[#1A3C34] flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <div className="w-7 h-7 rounded-full bg-[#1A3C34]/10 text-[#C89B2A] flex items-center justify-center flex-shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#6B6355] leading-relaxed border-t border-[#E8E2D6]/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =================================================================== */}
        {/* SECTION 9 — CTA BANNER                                              */}
        {/* =================================================================== */}
        <div className="relative bg-[#1A3C34] text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl overflow-hidden">
          {/* Subtle Dotted Gold Background Pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#C89B2A 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to Start Earning?
            </h2>

            <p className="text-sm sm:text-base text-[#F5F0E8]/90 font-medium">
              Join 10,000+ creators already making money with CloudLinks
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://analytics.trackier.io/register.html"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Sign Up Free</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl border-2 border-white/80 hover:bg-white hover:text-[#1A3C34] text-white font-extrabold text-sm transition-all flex items-center justify-center"
              >
                Browse All Brands
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
