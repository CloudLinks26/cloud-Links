'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useGlobalContext } from '@/components/GlobalProvider';
import {
  Search,
  HelpCircle,
  IndianRupee,
  Zap,
  Rocket,
  ChevronDown,
  ChevronUp,
  Mail,
  BookOpen,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Tag,
  ShieldCheck,
  Send,
  MessageCircle,
  X,
  ExternalLink,
  PhoneCall,
  Clock,
  Check
} from 'lucide-react';

export default function FAQsContent() {
  const { onOpenAuth, onOpenLinkGen } = useGlobalContext();
  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [activeCategoryNav, setActiveCategoryNav] = useState('getting-started');

  // Accordion state: map of item id -> boolean
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'gs-1': true, // First item open by default
    'c-1': true,
    'e-1': true,
    'p-1': true,
    'a-1': true,
    'i-1': true,
    't-1': true,
    's-1': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Categories definition
  const categories = [
    { id: 'getting-started', label: 'Getting Started', icon: '🚀', tabLabel: 'Getting Started' },
    { id: 'campaigns', label: 'Campaigns', icon: '🏷️', tabLabel: 'Campaigns' },
    { id: 'earnings', label: 'Earnings & Commissions', icon: '💰', tabLabel: 'Earnings & Commissions' },
    { id: 'payouts', label: 'Payouts', icon: '⚡', tabLabel: 'Payouts' },
  ];

  // All 44 FAQ items organized by category
  const faqData = [
  // 🚀 Getting Started
  {
    id: 'gs-1',
    category: 'getting-started',
    question: 'Is it free to join CloudsLink?',
    answer: 'Yes. Joining CloudsLink is free for users, with no registration or membership fees.'
  },

  // 💰 Earnings & Commissions
  {
    id: 'e-1',
    category: 'earnings',
    question: 'How much can I earn with CloudsLink?',
    answer: 'Your earnings depend on factors such as the campaigns you promote, traffic, conversions, commission rates and the actions completed through your affiliate links. There is no fixed earning limit.'
  },
  {
    id: 'e-2',
    category: 'earnings',
    question: 'When do I earn a commission?',
    answer: 'You earn a commission when a user completes the qualifying action specified by the campaign, such as making a purchase or submitting a lead through your affiliate link.'
  },

  // ⚡ Payouts
  {
    id: 'p-1',
    category: 'payouts',
    question: 'How and when will I receive my commissions?',
    answer: "Once your commissions meet the applicable payout requirements and are approved, they can be withdrawn through the available payment methods. Payout timelines and minimum withdrawal amounts may vary based on CloudsLink's payout terms."
  },

  // 🏷️ Campaigns & Promotions
  {
    id: 'c-1',
    category: 'campaigns',
    question: 'Do I need approval for affiliate campaigns?',
    answer: 'Yes, campaign requirements can vary. Some offers may be available to approved affiliates directly, while others may require you to apply and receive campaign-specific approval.'
  },
  {
    id: 'c-2',
    category: 'campaigns',
    question: 'Where can I promote my affiliate links?',
    answer: 'You can promote your affiliate links through eligible channels such as websites, blogs, YouTube, Instagram, Facebook, Telegram and other platforms, subject to the promotional guidelines of each campaign.'
  },
  {
    id: 'c-3',
    category: 'campaigns',
    question: 'Can I promote every offer available on CloudsLink?',
    answer: 'Not necessarily. Each campaign may have its own eligibility criteria, promotional restrictions and approval requirements. Always check the offer terms before promoting it.'
  }
];

  // Filtering FAQ items
  const filteredFaqs = faqData.filter((item) => {
    // Search query match
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());

    // Tab filter
    if (activeTab === 'All') return matchesSearch;
    
    // Map tab name to category id
    const matchedCategory = categories.find((c) => c.tabLabel === activeTab);
    return matchesSearch && (matchedCategory ? item.category === matchedCategory.id : true);
  });

  // Smooth scroll to section handler
  const scrollToCategory = (catId: string) => {
    setActiveCategoryNav(catId);
    const element = document.getElementById(catId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll to a specific item ID and expand it
  const scrollToItem = (itemId: string, catId: string) => {
    setOpenItems((prev) => ({ ...prev, [itemId]: true }));
    scrollToCategory(catId);
    setTimeout(() => {
      const el = document.getElementById(`item-${itemId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);
  };

  return (
    <div className="bg-[#F5F0E8] min-h-screen text-[#1A3C34] font-sans selection:bg-[#C89B2A]/20 pb-20">

      {/* =================================================================== */}
      {/* SECTION 1 — HERO HEADER                                             */}
      {/* =================================================================== */}
      <section className="bg-[#1A3C34] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        {/* Subtle Gold Dot Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-8 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#C89B2A 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Large faint background question mark */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[#C89B2A] opacity-5 text-[280px] font-black font-display pointer-events-none select-none leading-none">
          ?
        </div>

        {/* Soft teal arcs on left and right */}
        <div className="absolute -left-20 top-10 w-72 h-72 rounded-full bg-[#2D7A4F]/20 blur-3xl pointer-events-none" />
        <div className="absolute -right-20 bottom-10 w-80 h-80 rounded-full bg-[#C89B2A]/10 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
          
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F5F0E8]/80 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
            <Link href="/" className="hover:text-[#C89B2A] transition-colors">Home</Link>
            <span className="text-[#C89B2A] font-black">›</span>
            <span className="text-white font-extrabold">FAQs</span>
          </div>

          {/* Gold Pill Badge */}
          <div>
            <span className="px-4 py-1.5 rounded-full bg-[#C89B2A]/20 text-[#C89B2A] text-xs font-black uppercase tracking-wider border border-[#C89B2A]/30 inline-flex items-center gap-1.5">
              ❓ We've Got Answers
            </span>
          </div>

          {/* Large Bold Heading */}
          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-tight">
            Frequently Asked <br className="hidden sm:inline" />
            <span className="text-[#C89B2A]">Questions</span>
          </h1>

          {/* Decorative Underline */}
          <div className="w-24 h-1.5 bg-[#C89B2A] mx-auto rounded-full shadow-sm" />

          {/* Subtext */}
          <p className="text-sm sm:text-base text-[#F5F0E8]/90 font-medium max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about CloudLinks — joining, earning, campaigns, and payouts. Can't find your answer? We're here to help.
          </p>

        </div>
      </section>




      


      {/* =================================================================== */}
      {/* SECTION 4 — FULL FAQ ACCORDION (BY CATEGORY)                        */}
      {/* =================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* LEFT SIDEBAR (25%) — Sticky Category Navigation */}
          <div className="lg:w-[25%] w-full lg:sticky lg:top-24 space-y-4">
            <div className="bg-[#FDFAF4] rounded-3xl p-5 border border-[#E8E2D6] shadow-md space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#1A3C34] px-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C89B2A]" />
                Categories
              </h3>

              <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-1 pb-2 lg:pb-0 scrollbar-none">
                {categories.map((cat) => {
                  const isActive = activeCategoryNav === cat.id;
                  const countInCat = faqData.filter((f) => f.category === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => scrollToCategory(cat.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center justify-between gap-2 whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'bg-[#1A3C34] text-white border-l-4 border-l-[#C89B2A] shadow-sm'
                          : 'text-[#1A3C34] hover:bg-[#F5F0E8] hover:text-[#C89B2A]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{cat.icon}</span>
                        <span>{cat.label}</span>
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                        isActive ? 'bg-[#C89B2A] text-[#1A3C34]' : 'bg-[#E8E2D6] text-[#6B6355]'
                      }`}>
                        {countInCat}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Need Help Card in Sidebar */}
            <div className="hidden lg:block bg-[#1A3C34] rounded-3xl p-5 text-white border border-[#C89B2A]/30 shadow-lg space-y-3 text-center">
              <div className="w-10 h-10 rounded-full bg-[#C89B2A]/20 text-[#C89B2A] flex items-center justify-center mx-auto">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-black font-display">Need Custom Help?</h4>
              <p className="text-[11px] text-[#F5F0E8]/80">
                Our support team is active 24/7 on email & Telegram.
              </p>
              <a
                href="mailto:internal@analyticsclouds.com"
                className="inline-block w-full py-2 rounded-xl bg-[#C89B2A] text-[#1A3C34] font-black text-xs hover:bg-[#b08823] transition-colors"
              >
                internal@analyticsclouds.com
              </a>
            </div>
          </div>


          {/* RIGHT CONTENT (75%) — ACCORDIONS BY CATEGORY */}
          <div className="lg:w-[75%] w-full space-y-12">
            
            {filteredFaqs.length === 0 ? (
              <div className="bg-[#FDFAF4] rounded-3xl p-12 text-center border border-[#E8E2D6] space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#C89B2A]/15 text-[#C89B2A] flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black font-display text-[#1A3C34]">
                  No matching questions found
                </h3>
                <p className="text-xs text-[#6B6355] max-w-md mx-auto">
                  We couldn't find any questions matching "{searchQuery}". Try searching with different keywords or contact our support team.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveTab('All');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#1A3C34] text-white font-bold text-xs hover:bg-[#0F2823] transition-colors"
                >
                  Clear Search & View All
                </button>
              </div>
            ) : (
              categories.map((cat) => {
                const catFaqs = filteredFaqs.filter((item) => item.category === cat.id);
                if (catFaqs.length === 0) return null;

                return (
                  <div key={cat.id} id={cat.id} className="space-y-4 scroll-mt-28">
                    
                    {/* Category Title Header */}
                    <div className="flex items-center gap-3 pb-2 border-b-2 border-[#C89B2A]">
                      <span className="text-2xl">{cat.icon}</span>
                      <h2 className="text-2xl font-black font-display text-[#1A3C34]">
                        {cat.label}
                      </h2>
                      <span className="ml-auto text-xs font-extrabold text-[#6B6355] bg-[#E8E2D6] px-2.5 py-1 rounded-full">
                        {catFaqs.length} items
                      </span>
                    </div>

                    {/* Accordion List */}
                    <div className="space-y-3">
                      {catFaqs.map((faq) => {
                        const isOpen = openItems[faq.id] || searchQuery.length > 0;

                        return (
                          <div
                            key={faq.id}
                            id={`item-${faq.id}`}
                            className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] overflow-hidden transition-all shadow-2xs hover:border-[#C89B2A]"
                          >
                            {/* Accordion Header / Question */}
                            <button
                              onClick={() => toggleItem(faq.id)}
                              className="w-full px-5 py-4 text-left font-black text-sm sm:text-base text-[#1A3C34] flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F5F0E8]/50 transition-colors"
                            >
                              <span className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full bg-[#C89B2A]/15 text-[#C89B2A] text-xs font-black flex items-center justify-center flex-shrink-0">
                                  Q
                                </span>
                                <span>{faq.question}</span>
                              </span>
                              <div className="w-8 h-8 rounded-xl bg-[#F5F0E8] border border-[#E8E2D6] flex items-center justify-center text-[#1A3C34] flex-shrink-0">
                                {isOpen ? (
                                  <ChevronUp className="w-4 h-4 text-[#C89B2A]" />
                                ) : (
                                  <ChevronDown className="w-4 h-4" />
                                )}
                              </div>
                            </button>

                            {/* Accordion Body / Answer */}
                            {isOpen && (
                              <div className="px-5 pb-5 pt-1 border-t border-[#E8E2D6]/60 bg-[#F5F0E8]/30 animate-fade-in space-y-3">
                                <p className="text-xs sm:text-sm text-[#6B6355] font-medium leading-relaxed pl-9">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                  </div>
                );
              })
            )}

          </div>

        </div>
      </section>



      {/* =================================================================== */}
      {/* SECTION 6 — BOTTOM CTA BANNER                                       */}
      {/* =================================================================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="bg-[#FDFAF4] rounded-3xl p-8 sm:p-12 border border-[#E8E2D6] shadow-xl space-y-8">
          
          <div className="space-y-3 max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black font-display text-[#1A3C34]">
              Ready to Start Earning?
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6355] font-medium leading-relaxed">
              You have all the answers — now take action. Join 10,000+ creators on CloudLinks today and monetize your influence with India's top brands.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenAuth?.('signup')}
              className="px-8 py-4 rounded-2xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Sign Up Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/campaigns"
              className="px-8 py-4 rounded-2xl border-2 border-[#1A3C34] hover:bg-[#1A3C34] hover:text-white text-[#1A3C34] font-black text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Browse Campaigns</span>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="pt-4 border-t border-[#E8E2D6] flex flex-wrap items-center justify-center gap-8 text-xs font-extrabold text-[#1A3C34]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#2D7A4F]" /> Free Forever
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#C89B2A]" /> Instant Payouts
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-4 h-4 text-[#1A3C34]" /> 500+ Campaigns
            </span>
          </div>

        </div>
      </section>

    </div>
  );
};
