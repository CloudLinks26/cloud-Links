'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import {
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
  ArrowRight
} from 'lucide-react';

export default function CampaignsContent() {
  // Filters & State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'commission' | 'rating' | 'popular'>('commission');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Category multi-select dropdown (broad buckets, applied only on "Apply Filters")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [draftCategories, setDraftCategories] = useState<string[]>([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [categorySearch, setCategorySearch] = useState('');

  // Country multi-select dropdown
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [draftCountries, setDraftCountries] = useState<string[]>([]);
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  // Top picks carousel ref
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Broad category buckets (consolidated from the specific per-brand category strings)
  const CATEGORY_BUCKETS = ['Fashion', 'Beauty', 'Food', 'Home & Living', 'Baby & Kids', 'Software', 'Telecom', 'Lifestyle', 'Travel & Experiences', 'Education'];

  const getCategoryBucket = (category: string): string => {
    if (['Fashion', 'Fashion (Denim & Apparel)', 'Vegan Fashion Accessories'].includes(category)) return 'Fashion';
    if (['Beauty & Care', 'Cosmetics', 'Skincare', 'Fragrances', 'Oral Care', "Men's Grooming"].includes(category)) return 'Beauty';
    if (category === 'Food & Snacks') return 'Food';
    if (['Home & Furnishing', 'Home Decor', 'Ethnic Lifestyle & Home'].includes(category)) return 'Home & Living';
    if (category === 'Baby & Kids') return 'Baby & Kids';
    if (category === 'Software') return 'Software';
    if (category === 'Telecom & Internet Services') return 'Telecom';
    if (category === 'Lifestyle & Accessories') return 'Lifestyle';
    return category;
  };

  const COUNTRIES = ['India', 'US'];

  const openCategoryDropdown = () => {
    setDraftCategories(selectedCategories);
    setIsCategoryOpen(true);
    setIsCountryOpen(false);
  };

  const openCountryDropdown = () => {
    setDraftCountries(selectedCountries);
    setIsCountryOpen(true);
    setIsCategoryOpen(false);
  };

  const toggleDraftCategory = (bucket: string) => {
    setDraftCategories((prev) => (prev.includes(bucket) ? prev.filter((b) => b !== bucket) : [...prev, bucket]));
  };

  const toggleDraftCountry = (country: string) => {
    setDraftCountries((prev) => (prev.includes(country) ? prev.filter((c) => c !== country) : [...prev, country]));
  };

  const applyCategoryFilter = () => {
    setSelectedCategories(draftCategories);
    setCurrentPage(1);
    setIsCategoryOpen(false);
  };

  const clearCategoryFilter = () => {
    setDraftCategories([]);
    setSelectedCategories([]);
    setCurrentPage(1);
  };

  const applyCountryFilter = () => {
    setSelectedCountries(draftCountries);
    setCurrentPage(1);
    setIsCountryOpen(false);
  };

  const clearCountryFilter = () => {
    setDraftCountries([]);
    setSelectedCountries([]);
    setCurrentPage(1);
  };

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
      id: 'amydus-affiliate-program',
      name: 'Amydus',
      commission: '8%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787059008/AMYDUSK_LOGO_nniudr.webp',
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
    {
      id: 'levis-affiliate-program',
      name: 'Levi\'s',
      commission: '17%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787058469/levis_okilbg.webp',
    },
    {
      id: 'zouk-affiliate-program',
      name: 'ZOUK',
      commission: '17%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787058335/Untitled_design_1_xkltpw.webp',
    },
    {
      id: 'ajmal-perfume-affiliate-program',
      name: 'Ajmal Perfume',
      commission: '8%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787058732/AJMAL_PERFUME_1_sk2e1z.webp',
    },
    {
      id: 'saadaa-affiliate-program',
      name: 'Saadaa',
      commission: '7%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787058738/saadaa_Logo_1_jfodwf.webp',
    },
    {
      id: 'airtel-broadband-affiliate-program',
      name: 'Airtel Broadband',
      commission: '₹200',
      label: 'Flat',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787058744/Airtel_Broadband_Logo_cznfvm.webp',
    },
    {
      id: 'kk-days-affiliate-program',
      name: 'KK Days',
      commission: '1% - 4%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787220973/KK_Days_hxtji8.webp',
    },
    {
      id: 'sintra-ai-affiliate-program',
      name: 'Sintra.AI',
      commission: '20%',
      oldUserCommission: '12%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787220973/Sintra_Ai_Logo_gyb93y.webp',
    },
    {
      id: 'pelago-affiliate-program',
      name: 'Pelago',
      commission: '4% - 12%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787220973/pelago_Logo_oixniw.webp',
    },
    {
      id: 'bright-champs-affiliate-program',
      name: 'Bright Champs',
      commission: '14%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787220973/Bright_champs_Logo_1_nlu7q7.webp',
    },
    {
      id: 'bigrock-affiliate-program',
      name: 'BigRock',
      commission: '6% - 40%',
      label: 'Up to',
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787220973/BigRock_Logo_y3cgnk.webp',
    },
  ];

  // Table Campaigns (10 requested items + complete data)
  const allCampaigns = [
    {
      id: 'haldiram-affiliate-program',
      name: 'Haldiram',
      category: 'Food & Snacks',
      type: 'CPS',
      country: 'India',
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
      country: 'India',
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
      country: 'India',
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
      country: 'India',
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
      country: 'India',
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
      country: 'India',
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
      country: 'India',
      commission: 'Up to 8% / Sale',
      numericCommission: 8,
      rating: 4.6,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965785/7_dv9gtm.jpg',
    },
    {
      id: 'amydus-affiliate-program',
      name: 'Amydus',
      category: 'Software',
      type: 'CPS',
      country: 'India',
      commission: 'Up to 8% / Sale',
      numericCommission: 8,
      rating: 4.8,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787059008/AMYDUSK_LOGO_nniudr.webp',
    },
    {
      id: 'ajio-affiliate-program',
      name: 'AJIO',
      category: 'Fashion',
      type: 'CPS',
      country: 'India',
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
      country: 'India',
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
      country: 'India',
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
      country: 'India',
      commission: 'Flat 45 / Sale',
      numericCommission: 45,
      rating: 4.8,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965785/2_wm8mdp.jpg',
    },
    {
      id: 'sanskriti-homes-affiliate-program',
      name: 'Sanskriti Homes',
      category: 'Home Decor',
      type: 'CPS',
      country: 'India',
      commission: 'Up to 17% / Sale',
      numericCommission: 17,
      rating: 4.6,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1786965785/1_rmbba3.jpg',
    },
    {
      id: 'levis-affiliate-program',
      name: "Levi's",
      category: 'Fashion (Denim & Apparel)',
      type: 'CPS',
      country: 'India',
      commission: 'Up to 17% / Sale',
      numericCommission: 17,
      rating: 4.8,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787058469/levis_okilbg.webp',
    },
    {
      id: 'zouk-affiliate-program',
      name: 'ZOUK',
      category: 'Vegan Fashion Accessories',
      type: 'CPS',
      country: 'India',
      commission: 'Up to 17% / Sale',
      numericCommission: 17,
      rating: 4.7,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787058335/Untitled_design_1_xkltpw.webp',
    },
    {
      id: 'ajmal-perfume-affiliate-program',
      name: 'Ajmal Perfume',
      category: 'Fragrances',
      type: 'CPS',
      country: 'India',
      commission: 'Up to 8% / Sale',
      numericCommission: 8,
      rating: 4.7,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787058732/AJMAL_PERFUME_1_sk2e1z.webp',
    },
    {
      id: 'saadaa-affiliate-program',
      name: 'Saadaa',
      category: 'Ethnic Lifestyle & Home',
      type: 'CPS',
      country: 'India',
      commission: 'Up to 7% / Sale',
      numericCommission: 7,
      rating: 4.5,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787058738/saadaa_Logo_1_jfodwf.webp',
    },
    {
      id: 'airtel-broadband-affiliate-program',
      name: 'Airtel Broadband',
      category: 'Telecom & Internet Services',
      type: 'CPL',
      country: 'India',
      commission: '₹200 Flat / Connection',
      numericCommission: 4,
      rating: 4.5,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787058744/Airtel_Broadband_Logo_cznfvm.webp',
    },
    {
      id: 'kk-days-affiliate-program',
      name: 'KK Days',
      category: 'Travel & Experiences',
      type: 'CPS',
      country: 'India',
      commission: '1% - 4% / Sale',
      numericCommission: 4,
      rating: 4.6,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787220973/KK_Days_hxtji8.webp',
    },
    {
      id: 'sintra-ai-affiliate-program',
      name: 'Sintra.AI',
      category: 'Software',
      type: 'CPS',
      country: 'India',
      commission: 'Up to 20% / Sale',
      numericCommission: 20,
      rating: 4.6,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787220973/Sintra_Ai_Logo_gyb93y.webp',
    },
    {
      id: 'pelago-affiliate-program',
      name: 'Pelago',
      category: 'Travel & Experiences',
      type: 'CPS',
      country: 'India',
      commission: '4% - 12% / Sale',
      numericCommission: 12,
      rating: 4.7,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787220973/pelago_Logo_oixniw.webp',
    },
    {
      id: 'bright-champs-affiliate-program',
      name: 'Bright Champs',
      category: 'Education',
      type: 'CPS',
      country: 'India',
      commission: 'Up to 14% / Sale',
      numericCommission: 14,
      rating: 4.6,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787220973/Bright_champs_Logo_1_nlu7q7.webp',
    },
    {
      id: 'bigrock-affiliate-program',
      name: 'BigRock',
      category: 'Software',
      type: 'CPS',
      country: 'India',
      commission: '6% - 40% / Sale',
      numericCommission: 40,
      rating: 4.5,
      logo: 'https://res.cloudinary.com/couponsbit/image/upload/v1787220973/BigRock_Logo_y3cgnk.webp',
    },
  ];

  // Filtering & Sorting Logic
  const filteredCampaigns = allCampaigns.filter((item) => {
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(getCategoryBucket(item.category));

    const matchesCountry =
      selectedCountries.length === 0 || selectedCountries.includes(item.country);

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesCountry && matchesSearch;
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

  // Pagination
  const ITEMS_PER_PAGE = 10;
  const totalPages = Math.max(1, Math.ceil(sortedCampaigns.length / ITEMS_PER_PAGE));
  const paginatedCampaigns = sortedCampaigns.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
        {/* SECTION 2 — SEARCH + CATEGORY/COUNTRY FILTERS + SORT               */}
        {/* =================================================================== */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch gap-3">
            {/* Search Bar */}
            <div className="relative flex-1 shadow-md rounded-xl overflow-hidden bg-[#FDFAF4] border border-[#E8E2D6] focus-within:ring-2 focus-within:ring-[#C89B2A]">
              <input
                type="text"
                placeholder="Search for brands, categories or campaign type..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-5 pr-4 py-3.5 bg-transparent text-[#1A3C34] placeholder:text-[#6B6355] text-sm font-medium focus:outline-none"
              />
            </div>

            {/* Category Multi-Select Dropdown */}
            <div className="relative md:w-56">
              <button
                onClick={() => (isCategoryOpen ? setIsCategoryOpen(false) : openCategoryDropdown())}
                className="w-full flex items-center justify-between gap-2 px-4 py-3.5 rounded-xl bg-[#FDFAF4] border border-[#E8E2D6] text-sm font-semibold text-[#1A3C34] shadow-2xs"
              >
                <span className="truncate">
                  {selectedCategories.length > 0 ? `${selectedCategories.length} Categor${selectedCategories.length > 1 ? 'ies' : 'y'} Selected` : 'Select Category'}
                </span>
                <ChevronDown className="w-4 h-4 text-[#6B6355] flex-shrink-0" />
              </button>

              {isCategoryOpen && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setIsCategoryOpen(false)} />
                  <div className="absolute z-40 mt-2 w-72 right-0 md:right-auto bg-white rounded-2xl border border-[#E8E2D6] shadow-xl p-4 space-y-3">
                    <input
                      type="text"
                      placeholder="Search Category"
                      value={categorySearch}
                      onChange={(e) => setCategorySearch(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-[#E8E2D6] text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                    />
                    <div className="max-h-56 overflow-y-auto space-y-2.5 pr-1">
                      {CATEGORY_BUCKETS.filter((b) => b.toLowerCase().includes(categorySearch.toLowerCase())).map((bucket) => (
                        <label key={bucket} className="flex items-center gap-2.5 text-sm text-[#1A3C34] font-medium cursor-pointer">
                          <input
                            type="checkbox"
                            checked={draftCategories.includes(bucket)}
                            onChange={() => toggleDraftCategory(bucket)}
                            className="w-4 h-4 accent-[#C89B2A] rounded"
                          />
                          {bucket}
                        </label>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 pt-2 border-t border-[#E8E2D6]">
                      <button onClick={clearCategoryFilter} className="flex-1 py-2 rounded-lg border border-[#1A3C34] text-[#1A3C34] text-xs font-bold hover:bg-[#1A3C34] hover:text-white transition-colors">
                        Clear
                      </button>
                      <button onClick={applyCategoryFilter} className="flex-1 py-2 rounded-lg bg-[#1A3C34] text-white text-xs font-bold hover:bg-[#122b25] transition-colors">
                        Apply Filters
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Country Multi-Select Dropdown */}
            <div className="relative md:w-48">
              <button
                onClick={() => (isCountryOpen ? setIsCountryOpen(false) : openCountryDropdown())}
                className="w-full flex items-center justify-between gap-2 px-4 py-3.5 rounded-xl bg-[#FDFAF4] border border-[#E8E2D6] text-sm font-semibold text-[#1A3C34] shadow-2xs"
              >
                <span className="truncate">
                  {selectedCountries.length > 0 ? selectedCountries.join(', ') : 'All Countries'}
                </span>
                <ChevronDown className="w-4 h-4 text-[#6B6355] flex-shrink-0" />
              </button>

              {isCountryOpen && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setIsCountryOpen(false)} />
                  <div className="absolute z-40 mt-2 w-56 right-0 bg-white rounded-2xl border border-[#E8E2D6] shadow-xl p-4 space-y-3">
                    <div className="space-y-2.5">
                      {COUNTRIES.map((country) => (
                        <label key={country} className="flex items-center gap-2.5 text-sm text-[#1A3C34] font-medium cursor-pointer">
                          <input
                            type="checkbox"
                            checked={draftCountries.includes(country)}
                            onChange={() => toggleDraftCountry(country)}
                            className="w-4 h-4 accent-[#C89B2A] rounded"
                          />
                          {country}
                        </label>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 pt-2 border-t border-[#E8E2D6]">
                      <button onClick={clearCountryFilter} className="flex-1 py-2 rounded-lg border border-[#1A3C34] text-[#1A3C34] text-xs font-bold hover:bg-[#1A3C34] hover:text-white transition-colors">
                        Clear
                      </button>
                      <button onClick={applyCountryFilter} className="flex-1 py-2 rounded-lg bg-[#1A3C34] text-white text-xs font-bold hover:bg-[#122b25] transition-colors">
                        Apply Filters
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative md:w-auto flex-shrink-0">
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value as any);
                  setCurrentPage(1);
                }}
                className="appearance-none w-full bg-[#FDFAF4] border border-[#E8E2D6] text-[#1A3C34] font-bold text-xs py-3.5 pl-4 pr-9 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C89B2A] shadow-2xs"
              >
                <option value="commission">Sort By: Highest Commission ▾</option>
                <option value="rating">Sort By: Highest Rating ▾</option>
                <option value="popular">Sort By: Brand Name (A-Z) ▾</option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#1A3C34] absolute right-3 top-4 pointer-events-none" />
            </div>
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
                  {paginatedCampaigns.length > 0 ? (
                    paginatedCampaigns.map((item, index) => {
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
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
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
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
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
