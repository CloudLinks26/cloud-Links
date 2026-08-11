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
    { id: 'account', label: 'Account & Profile', icon: '👤', tabLabel: 'Account' },
    { id: 'influencers', label: 'Influencers', icon: '🌟', tabLabel: 'Influencers' },
    { id: 'technical', label: 'Technical', icon: '🔧', tabLabel: 'Technical' },
    { id: 'support', label: 'Support', icon: '📞', tabLabel: 'Support' },
  ];

  // All 44 FAQ items organized by category
  const faqData = [
    // 🚀 Getting Started
    {
      id: 'gs-1',
      category: 'getting-started',
      question: 'Is CloudLinks really free to join?',
      answer: 'Yes! CloudLinks is 100% free for creators. No joining fees, no subscription charges, no hidden costs — ever. Sign up and start earning immediately.'
    },
    {
      id: 'gs-2',
      category: 'getting-started',
      question: 'Do I need a minimum number of followers to join?',
      answer: 'No minimum at all! Whether you have 500 followers or 5,00,000 — everyone is welcome on CloudLinks. We believe every creator deserves to earn from their content.'
    },
    {
      id: 'gs-3',
      category: 'getting-started',
      question: 'How do I create my CloudLinks account?',
      answer: 'Click "Sign Up" on the top right, enter your name, email, and phone number, verify your email, and your account is ready. The whole process takes under 2 minutes.'
    },
    {
      id: 'gs-4',
      category: 'getting-started',
      question: 'Do I need approval to start promoting campaigns?',
      answer: 'Most campaigns on CloudLinks are auto-approved — you can start promoting immediately after joining. A small number of premium campaigns may require manual approval.'
    },
    {
      id: 'gs-5',
      category: 'getting-started',
      question: 'What information do I need to provide during signup?',
      answer: 'Basic details: name, email, phone number, and your preferred payout method (UPI ID or bank details). You can add your social media profiles later from your dashboard.'
    },
    {
      id: 'gs-6',
      category: 'getting-started',
      question: "Can I join CloudLinks if I'm a student or homemaker?",
      answer: 'Absolutely! CloudLinks is perfect for students, homemakers, and anyone looking to earn from home. No professional experience required.'
    },

    // 🏷️ Campaigns
    {
      id: 'c-1',
      category: 'campaigns',
      question: 'How many campaigns are available on CloudLinks?',
      answer: 'CloudLinks currently offers 500+ active campaigns across categories including fashion, beauty, electronics, travel, food, finance, and health. New campaigns are added daily.'
    },
    {
      id: 'c-2',
      category: 'campaigns',
      question: 'How do I generate my affiliate link for a campaign?',
      answer: 'Go to Campaigns, find a brand you want to promote, click "Promote Now", and your unique affiliate link is instantly generated. Copy it and share it anywhere.'
    },
    {
      id: 'c-3',
      category: 'campaigns',
      question: 'Can I promote multiple campaigns at the same time?',
      answer: "Yes! There's no limit. You can promote as many campaigns as you like simultaneously. Top earners typically run 8–15 campaigns at the same time."
    },
    {
      id: 'c-4',
      category: 'campaigns',
      question: 'What does CPS, CPI, and CPL mean?',
      answer: 'CPS (Cost Per Sale) = you earn a % of each sale. CPI (Cost Per Install) = fixed amount per app install. CPL (Cost Per Lead) = fixed amount per signup/form fill. Each campaign shows its type clearly.'
    },
    {
      id: 'c-5',
      category: 'campaigns',
      question: 'Can a brand change its commission rate?',
      answer: "Yes, brands can update commission rates. You'll receive a notification if a campaign you're promoting changes its rate. Always check your dashboard for the latest rates."
    },
    {
      id: 'c-6',
      category: 'campaigns',
      question: "What happens if a campaign I'm promoting gets paused?",
      answer: "You'll be notified immediately. Any commissions already earned remain valid. Your existing links will redirect to a landing page until the campaign resumes."
    },

    // 💰 Earnings & Commissions
    {
      id: 'e-1',
      category: 'earnings',
      question: 'How is my commission calculated?',
      answer: 'Commission = (Sale Value × Commission Rate). Example: Customer buys Mamaearth products worth ₹800 at 15% commission = ₹120 earned by you.'
    },
    {
      id: 'e-2',
      category: 'earnings',
      question: 'How much can I earn per month?',
      answer: 'Earnings depend on your audience size, niche, and activity. Creators earn anywhere from ₹500/month (beginners) to ₹2,00,000+/month (top performers). Most active creators earn ₹10,000–₹50,000/month.'
    },
    {
      id: 'e-3',
      category: 'earnings',
      question: 'What is a cookie window and why does it matter?',
      answer: 'A cookie window is the period after someone clicks your link during which you earn commission if they buy. Example: 30-day cookie means if they click today and buy 29 days later, you still earn.'
    },
    {
      id: 'e-4',
      category: 'earnings',
      question: 'Do I earn commission on returned or cancelled orders?',
      answer: 'No. Commission is only earned on completed, non-returned sales. If a customer returns a product, the commission is reversed. This is standard across all affiliate platforms.'
    },
    {
      id: 'e-5',
      category: 'earnings',
      question: 'Why is my commission showing as "Pending"?',
      answer: "Commissions show as Pending during the brand's return/refund window (usually 30 days). Once the window closes and no return occurs, the commission is confirmed and available for withdrawal."
    },
    {
      id: 'e-6',
      category: 'earnings',
      question: 'Is there a limit to how much I can earn?',
      answer: 'Absolutely no limit! CloudLinks has no earning cap. The more you promote and the bigger your audience, the more you earn. Our top creators earn ₹1,00,000+ every month.'
    },
    {
      id: 'e-7',
      category: 'earnings',
      question: 'Are my earnings taxable?',
      answer: "Yes, affiliate income is taxable in India. TDS (Tax Deducted at Source) at 5% is applied on annual earnings above ₹15,000 as per Indian tax laws. You'll receive a TDS certificate from CloudLinks."
    },

    // ⚡ Payouts
    {
      id: 'p-1',
      category: 'payouts',
      question: 'What is the minimum amount needed to withdraw?',
      answer: 'Zero! There is no minimum withdrawal amount on CloudLinks. You can withdraw even ₹1 if you want. Your money is yours — always.'
    },
    {
      id: 'p-2',
      category: 'payouts',
      question: 'How fast are payouts processed?',
      answer: 'Instant! UPI and wallet payouts are processed within seconds. Bank transfers (IMPS) take a few minutes. Cheque payouts take 5–7 business days.'
    },
    {
      id: 'p-3',
      category: 'payouts',
      question: 'What payout methods does CloudLinks support?',
      answer: 'CloudLinks supports UPI, Bank Transfer (IMPS/NEFT), Paytm Wallet, Razorpay, PayPal (for international creators), and Cheque. All methods are completely free.'
    },
    {
      id: 'p-4',
      category: 'payouts',
      question: 'Can I save multiple payout methods?',
      answer: 'Yes! You can save multiple payout methods in your dashboard and choose which one to use at the time of withdrawal.'
    },
    {
      id: 'p-5',
      category: 'payouts',
      question: 'What if my payout fails?',
      answer: 'Failed payouts are automatically retried. If the issue persists, our payout support team resolves it within 24 hours. You can also raise a payout query from your dashboard.'
    },
    {
      id: 'p-6',
      category: 'payouts',
      question: 'Are there any fees deducted from my payout?',
      answer: 'CloudLinks charges zero fees on withdrawals. What you earn is exactly what you receive — no platform cuts, no transaction fees, no hidden deductions.'
    },

    // 👤 Account & Profile
    {
      id: 'a-1',
      category: 'account',
      question: 'How do I update my payout details?',
      answer: 'Go to Dashboard → Settings → Payout Methods. You can add, edit, or remove any payout method. Changes take effect immediately for future withdrawals.'
    },
    {
      id: 'a-2',
      category: 'account',
      question: 'Can I have more than one CloudLinks account?',
      answer: 'No. CloudLinks allows only one account per individual. Multiple accounts violate our terms and may result in permanent ban and commission forfeiture.'
    },
    {
      id: 'a-3',
      category: 'account',
      question: 'How do I delete my account?',
      answer: 'Go to Dashboard → Settings → Account → Delete Account. All data will be permanently deleted within 30 days. Note: any pending commissions will be forfeited upon deletion.'
    },
    {
      id: 'a-4',
      category: 'account',
      question: 'How do I change my registered email address?',
      answer: 'Email: support@cloudlinks.in with your registered email and new email address. Our team will verify and update it within 24 hours.'
    },
    {
      id: 'a-5',
      category: 'account',
      question: 'Is my personal and banking information secure?',
      answer: 'Absolutely. All personal data is encrypted with SSL/TLS. Banking details are stored with bank-grade AES-256 encryption. We conduct regular security audits.'
    },

    // 🌟 Influencers
    {
      id: 'i-1',
      category: 'influencers',
      question: 'What is the difference between a regular user and an influencer on CloudLinks?',
      answer: 'Both earn the same commissions. The Influencer section is designed with tools and tips specifically for content creators — dedicated dashboard views, platform-specific strategies, and creator resources.'
    },
    {
      id: 'i-2',
      category: 'influencers',
      question: 'Which platforms can I use to promote as an influencer?',
      answer: 'Any platform! Instagram, YouTube, Twitter/X, LinkedIn, Telegram, WhatsApp, Blog, Facebook — wherever your audience is, your CloudLinks link works there.'
    },
    {
      id: 'i-3',
      category: 'influencers',
      question: 'Do I need to declare myself as an influencer when signing up?',
      answer: 'No. You can join as a regular user and use the platform exactly the same way. The Influencers section simply provides additional resources and strategies for content creators.'
    },
    {
      id: 'i-4',
      category: 'influencers',
      question: 'Can nano-influencers (under 10K followers) join?',
      answer: 'Yes! Nano-influencers are welcome and often have higher engagement rates than large accounts. Many of our top earners started with under 5K followers.'
    },
    {
      id: 'i-5',
      category: 'influencers',
      question: 'Is there a dedicated dashboard for influencers?',
      answer: 'Your CloudLinks dashboard tracks all your earnings, clicks, conversions, and payout history in one place — optimized for creators of all sizes.'
    },

    // 🔧 Technical
    {
      id: 't-1',
      category: 'technical',
      question: "My affiliate link isn't tracking clicks — what do I do?",
      answer: "First, ensure you're sharing the exact link generated from your dashboard (not a modified version). Clear your browser cache and test the link in incognito mode. If the issue persists, contact support."
    },
    {
      id: 't-2',
      category: 'technical',
      question: 'Why are my conversions not showing in the dashboard?',
      answer: 'Conversions may take up to 24 hours to appear after a sale. If still missing after 24 hours, raise a conversion dispute from Dashboard → Earnings → Raise Dispute.'
    },
    {
      id: 't-3',
      category: 'technical',
      question: 'Does CloudLinks work on mobile?',
      answer: 'Yes! CloudLinks is fully mobile-responsive. Manage campaigns, generate links, track earnings, and withdraw — all from your smartphone browser.'
    },
    {
      id: 't-4',
      category: 'technical',
      question: 'Can I use the same affiliate link on multiple platforms?',
      answer: 'Yes! Your single unique affiliate link works across all platforms. Share the same link on Instagram, YouTube, WhatsApp, Telegram, and your blog simultaneously.'
    },
    {
      id: 't-5',
      category: 'technical',
      question: 'Why was my account suspended?',
      answer: 'Accounts are suspended for violating terms: fake clicks, multiple accounts, banned promotional methods, or fraudulent conversions. Email appeals@cloudlinks.in with your account details for review.'
    },

    // 📞 Support
    {
      id: 's-1',
      category: 'support',
      question: 'How do I contact CloudLinks support?',
      answer: 'Email: support@cloudlinks.in | Dashboard → Help → Contact Support. Response time: within 24 hours on weekdays, 48 hours on weekends.'
    },
    {
      id: 's-2',
      category: 'support',
      question: 'How do I raise a commission dispute?',
      answer: 'Dashboard → Earnings → Transactions → Find the transaction → Raise Dispute. Our team reviews all disputes within 5–7 business days.'
    },
    {
      id: 's-3',
      category: 'support',
      question: 'Is there a phone number I can call?',
      answer: "Currently CloudLinks support is email and chat only. We're working on launching phone support. For urgent issues, mark your email as \"URGENT\" for priority handling."
    },
    {
      id: 's-4',
      category: 'support',
      question: 'Where can I find guides and tutorials?',
      answer: "Visit our Resources section → Guides. You'll find step-by-step tutorials on everything from joining your first campaign to advanced earning strategies."
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
      {/* SECTION 2 — SEARCH + CATEGORY TABS                                 */}
      {/* =================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-8">
        
        {/* Search Bar (Centered max-w-2xl) */}
        <div className="max-w-2xl mx-auto bg-[#FDFAF4] rounded-2xl p-2.5 border-2 border-[#E8E2D6] shadow-xl flex items-center gap-3 focus-within:border-[#C89B2A] transition-all">
          <div className="pl-3 text-[#C89B2A]">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search your question (e.g. payout, commission, withdrawal)..."
            className="w-full bg-transparent text-sm font-semibold text-[#1A3C34] placeholder-[#6B6355]/70 focus:outline-none py-1"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-1.5 rounded-xl hover:bg-[#F5F0E8] text-[#6B6355] transition-colors"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button className="px-5 py-2.5 rounded-xl bg-[#C89B2A] text-[#1A3C34] font-black text-xs hover:bg-[#b08823] transition-colors flex items-center gap-1.5 shadow-xs flex-shrink-0 cursor-pointer">
            <span>Search</span>
          </button>
        </div>

        {/* Category Tab Pills */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-2">
            {['All', ...categories.map((c) => c.tabLabel)].map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#C89B2A] text-[#1A3C34] shadow-md scale-105'
                      : 'bg-[#FDFAF4] border border-[#E8E2D6] text-[#1A3C34] hover:bg-[#E8E2D6]/50'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Counter Badge */}
          <div className="text-center">
            <span className="text-xs font-bold text-[#6B6355]">
              Showing <span className="text-[#1A3C34] font-black">{filteredFaqs.length}</span> questions
              {searchQuery && ` for "${searchQuery}"`}
              {activeTab !== 'All' && ` in ${activeTab}`}
            </span>
          </div>
        </div>

      </section>


      {/* =================================================================== */}
      {/* SECTION 3 — POPULAR QUESTIONS (VISUAL CARDS)                        */}
      {/* =================================================================== */}
      {!searchQuery && activeTab === 'All' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
          
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-black text-[#C89B2A] uppercase tracking-wider">
              <span>🔥 Most Asked Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-[#1A3C34]">
              Quick Answers Creators Need
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6355] font-medium">
              These questions are searched most by our creator community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 — Earnings */}
            <div className="bg-gradient-to-br from-[#1A3C34] to-[#2D7A4F] rounded-3xl p-6 text-white shadow-xl border border-[#2D7A4F]/40 relative overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-transform group">
              <IndianRupee className="w-24 h-24 absolute -right-4 -bottom-4 text-white/5 pointer-events-none group-hover:scale-110 transition-transform" />
              
              <div className="space-y-4 relative z-10">
                <span className="px-3 py-1 rounded-full bg-[#C89B2A] text-[#1A3C34] text-[10px] font-black uppercase tracking-wider inline-block">
                  Earnings
                </span>
                <h3 className="text-lg font-black font-display text-white leading-snug">
                  How much can I realistically earn with CloudLinks?
                </h3>
                <p className="text-xs text-[#F5F0E8]/90 font-medium leading-relaxed">
                  Creators earn anywhere from ₹500 to ₹2,00,000+ per month depending on their audience size, niche, and activity level.
                </p>
              </div>

              <div className="pt-6 relative z-10">
                <button
                  onClick={() => scrollToItem('e-2', 'earnings')}
                  className="w-full py-2.5 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Read Full Answer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2 — Payouts */}
            <div className="bg-gradient-to-br from-[#C89B2A] to-[#b08823] rounded-3xl p-6 text-[#1A3C34] shadow-xl border border-[#C89B2A]/40 relative overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-transform group">
              <Zap className="w-24 h-24 absolute -right-4 -bottom-4 text-black/5 pointer-events-none group-hover:scale-110 transition-transform" />
              
              <div className="space-y-4 relative z-10">
                <span className="px-3 py-1 rounded-full bg-[#1A3C34] text-white text-[10px] font-black uppercase tracking-wider inline-block">
                  Payouts
                </span>
                <h3 className="text-lg font-black font-display text-[#1A3C34] leading-snug">
                  How fast do I get paid after a sale?
                </h3>
                <p className="text-xs text-[#1A3C34]/85 font-semibold leading-relaxed">
                  Commissions are confirmed after the brand's return window (usually 30 days) and instantly available for withdrawal via UPI.
                </p>
              </div>

              <div className="pt-6 relative z-10">
                <button
                  onClick={() => scrollToItem('p-2', 'payouts')}
                  className="w-full py-2.5 rounded-xl bg-[#1A3C34] hover:bg-[#0F2823] text-white font-black text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Read Full Answer</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C89B2A]" />
                </button>
              </div>
            </div>

            {/* Card 3 — Getting Started */}
            <div className="bg-gradient-to-br from-[#1A3C34] to-[#0F2823] rounded-3xl p-6 text-white shadow-xl border border-white/10 relative overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-transform group">
              <Rocket className="w-24 h-24 absolute -right-4 -bottom-4 text-white/5 pointer-events-none group-hover:scale-110 transition-transform" />
              
              <div className="space-y-4 relative z-10">
                <span className="px-3 py-1 rounded-full bg-[#2D7A4F] text-white text-[10px] font-black uppercase tracking-wider inline-block">
                  Getting Started
                </span>
                <h3 className="text-lg font-black font-display text-white leading-snug">
                  How do I join CloudLinks and start earning?
                </h3>
                <p className="text-xs text-[#F5F0E8]/90 font-medium leading-relaxed">
                  Sign up free in 2 minutes, browse 500+ campaigns, generate your unique link, share it anywhere, and earn commission on every sale.
                </p>
              </div>

              <div className="pt-6 relative z-10">
                <button
                  onClick={() => scrollToItem('gs-3', 'getting-started')}
                  className="w-full py-2.5 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Read Full Answer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </section>
      )}


      {/* =================================================================== */}
      {/* SECTION 4 — FULL FAQ ACCORDION (BY CATEGORY)                        */}
      {/* =================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                href="mailto:support@cloudlinks.in"
                className="inline-block w-full py-2 rounded-xl bg-[#C89B2A] text-[#1A3C34] font-black text-xs hover:bg-[#b08823] transition-colors"
              >
                support@cloudlinks.in
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
      {/* SECTION 5 — STILL HAVE QUESTIONS?                                  */}
      {/* =================================================================== */}
      <section className="bg-[#1A3C34] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden my-16 border-y border-[#C89B2A]/30">
        
        {/* Subtle Gold Dot Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-8 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#C89B2A 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 7 Cols — Options */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="px-3.5 py-1 rounded-full bg-[#C89B2A]/20 text-[#C89B2A] text-xs font-black uppercase tracking-wider border border-[#C89B2A]/30">
                  💬 24/7 Support
                </span>
                <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
                  Still Have Questions?
                </h2>
                <p className="text-sm text-[#F5F0E8]/85 font-medium leading-relaxed max-w-xl">
                  Our dedicated support team is available 7 days a week to assist you with onboarding, links, payouts, or brand approvals.
                </p>
              </div>

              {/* 3 Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Card 1 — Email */}
                <div className="bg-[#FDFAF4] rounded-2xl p-5 text-[#1A3C34] border border-[#E8E2D6] shadow-lg space-y-3 flex flex-col justify-between hover:border-[#C89B2A] transition-colors">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#C89B2A]/15 text-[#C89B2A] flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <h3 className="font-black text-sm">Email Support</h3>
                    <p className="text-xs font-bold text-[#1A3C34]">support@cloudlinks.in</p>
                    <p className="text-[10px] text-[#6B6355] font-semibold">Replies within 24 hours</p>
                  </div>
                  <a
                    href="mailto:support@cloudlinks.in"
                    className="w-full py-2 rounded-xl border border-[#C89B2A] text-[#1A3C34] font-black text-xs hover:bg-[#C89B2A] transition-colors text-center block"
                  >
                    Send Email →
                  </a>
                </div>

                {/* Card 2 — Help Center */}
                <div className="bg-[#FDFAF4] rounded-2xl p-5 text-[#1A3C34] border border-[#E8E2D6] shadow-lg space-y-3 flex flex-col justify-between hover:border-[#C89B2A] transition-colors">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#C89B2A]/15 text-[#C89B2A] flex items-center justify-center">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h3 className="font-black text-sm">Help Center</h3>
                    <p className="text-xs font-bold text-[#1A3C34]">Browse 100+ Guides</p>
                    <p className="text-[10px] text-[#6B6355] font-semibold">Step-by-step tutorials</p>
                  </div>
                  <Link
                    href="/blog"
                    className="w-full py-2 rounded-xl border border-[#C89B2A] text-[#1A3C34] font-black text-xs hover:bg-[#C89B2A] transition-colors text-center block"
                  >
                    Visit Guides →
                  </Link>
                </div>

                {/* Card 3 — Community */}
                <div className="bg-[#FDFAF4] rounded-2xl p-5 text-[#1A3C34] border border-[#E8E2D6] shadow-lg space-y-3 flex flex-col justify-between hover:border-[#C89B2A] transition-colors">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#C89B2A]/15 text-[#C89B2A] flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="font-black text-sm">Telegram Group</h3>
                    <p className="text-xs font-bold text-[#1A3C34]">10,000+ Creators</p>
                    <p className="text-[10px] text-[#6B6355] font-semibold">Live deal updates</p>
                  </div>
                  <a
                    href="https://telegram.org"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 rounded-xl border border-[#C89B2A] text-[#1A3C34] font-black text-xs hover:bg-[#C89B2A] transition-colors text-center block"
                  >
                    Join Telegram →
                  </a>
                </div>

              </div>
            </div>

            {/* Right 5 Cols — Illustration / Graphic Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-[#FDFAF4] rounded-3xl p-8 border-2 border-[#C89B2A] text-[#1A3C34] shadow-2xl relative max-w-md w-full space-y-6 text-center">
                
                {/* Floating Quote Bubble */}
                <div className="bg-[#1A3C34] text-white p-3.5 rounded-2xl rounded-bl-none text-xs font-bold shadow-lg inline-block text-left animate-bounce">
                  <span>Hi! How can we help you today? 👋</span>
                </div>

                {/* Agent Icon Illustration */}
                <div className="w-24 h-24 rounded-full bg-[#C89B2A]/20 border-2 border-[#C89B2A] flex items-center justify-center mx-auto text-[#1A3C34] shadow-inner">
                  <HelpCircle className="w-12 h-12 text-[#C89B2A]" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-black font-display">Dedicated Creator Support</h3>
                  <p className="text-xs text-[#6B6355] font-semibold">
                    Average response time: <strong>under 2 hours</strong> on business days.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#F5F0E8] text-[11px] font-bold text-[#1A3C34] border border-[#E8E2D6] flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-[#C89B2A]" />
                  <span>Mon – Sun, 9:00 AM – 9:00 PM IST</span>
                </div>

              </div>
            </div>

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
