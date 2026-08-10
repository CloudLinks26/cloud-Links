'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useGlobalContext } from '@/components/GlobalProvider';
import {
  Mail,
  Phone,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Headphones,
  Users,
  Handshake,
  IndianRupee,
  Code2,
  Shield,
  Newspaper,
  MapPin,
  Clock,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Send,
  Briefcase,
  Zap,
  Check,
  Lock,
  Building2,
  UserCheck,
  HelpCircle,
  Sparkles,
} from 'lucide-react';

export default function ContactContent() {
  const { onOpenAuth } = useGlobalContext();
  const [activeTab, setActiveTab] = useState<'creator' | 'brand'>('creator');

  // Creator Form State
  const [creatorForm, setCreatorForm] = useState({
    name: '',
    email: '',
    phone: '',
    platform: 'Instagram',
    subject: 'Commission / Earnings Query',
    message: '',
    username: '',
  });
  const [isCreatorSubmitting, setIsCreatorSubmitting] = useState(false);
  const [creatorSubmitted, setCreatorSubmitted] = useState(false);

  // Brand Form State
  const [brandForm, setBrandForm] = useState({
    contactName: '',
    email: '',
    phone: '',
    brandName: '',
    category: 'Fashion',
    budget: '₹50K–₹2L',
    website: '',
    goal: 'Launch an affiliate campaign on LinkX',
    message: '',
  });
  const [isBrandSubmitting, setIsBrandSubmitting] = useState(false);
  const [brandSubmitted, setBrandSubmitted] = useState(false);

  const handleCreatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreatorSubmitting(true);
    setTimeout(() => {
      setIsCreatorSubmitting(false);
      setCreatorSubmitted(true);
    }, 800);
  };

  const handleBrandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBrandSubmitting(true);
    setTimeout(() => {
      setIsBrandSubmitting(false);
      setBrandSubmitted(true);
    }, 800);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F5F0E8] min-h-screen text-[#1A3C34] overflow-x-hidden font-sans">
      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 1 — HERO HEADER                                                    */}
      {/* -------------------------------------------------------------------------- */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[#1A3C34] text-white overflow-hidden">
        {/* Subtle gold dot pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B2A_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

        {/* Large faint '@' symbol in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#C89B2A]/[0.05] font-black text-[350px] sm:text-[500px] pointer-events-none select-none z-0">
          @
        </div>

        {/* Soft teal arcs on far left and right edges */}
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#234D42]/60 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#C89B2A]/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          {/* Gold Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C89B2A]/20 border border-[#C89B2A]/40 text-[#C89B2A] text-xs font-black uppercase tracking-wider shadow-sm">
            <span>💬</span>
            <span>We'd Love to Hear From You</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold font-display leading-tight max-w-3xl mx-auto tracking-tight">
            Get in Touch <br />
            <span className="text-[#C89B2A] underline decoration-[#C89B2A]/40 underline-offset-8">
              With LinkX
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[#E8E2D6]/90 max-w-xl mx-auto leading-relaxed font-normal">
            Whether you're a creator with a question, a brand looking to partner, or just curious about LinkX — we're here and happy to help.
          </p>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#E8E2D6]/80 font-medium pt-1">
            <Link href="/" className="hover:text-[#C89B2A] transition-colors">Home</Link>
            <span className="text-[#C89B2A] font-bold">›</span>
            <span className="text-white font-bold">Contact Us</span>
          </div>

          {/* Quick Contact Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a
              href="mailto:support@linkx.in"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#C89B2A] hover:text-[#1A3C34] text-white border border-white/20 text-xs font-bold transition-all flex items-center gap-2 shadow-sm"
            >
              <Mail className="w-4 h-4 text-[#C89B2A] group-hover:text-[#1A3C34]" />
              <span>support@linkx.in</span>
            </a>
            <a
              href="tel:+919876543210"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#C89B2A] hover:text-[#1A3C34] text-white border border-white/20 text-xs font-bold transition-all flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#C89B2A]" />
              <span>+91 98765 43210</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] text-xs font-extrabold transition-all flex items-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 2 — CONTACT CHANNEL CARDS                                          */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-16 bg-[#FDFAF4] border-b border-[#E8E2D6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-[#1A3C34]">
              Reach Us <span className="text-[#C89B2A]">Your Way</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6355] font-medium">
              Pick the channel that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 — Email */}
            <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] border-t-4 border-t-[#C89B2A] p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4 text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#C89B2A]/15 text-[#C89B2A] border border-[#C89B2A]/30 flex items-center justify-center mx-auto shadow-xs">
                  <Mail className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold">
                    ⏱ Response within 24 hours
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-[#1A3C34] pt-1">Email Support</h3>
                </div>
                <div className="pt-2 space-y-2">
                  <a href="mailto:support@linkx.in" className="text-base font-extrabold text-[#C89B2A] hover:underline block">
                    support@linkx.in
                  </a>
                  <div className="text-xs text-[#6B6355] space-y-1 pt-2 border-t border-[#E8E2D6]/80">
                    <div><span className="font-bold text-[#1A3C34]">Payouts:</span> payouts@linkx.in</div>
                    <div><span className="font-bold text-[#1A3C34]">Brands:</span> brands@linkx.in</div>
                    <div><span className="font-bold text-[#1A3C34]">Legal:</span> legal@linkx.in</div>
                  </div>
                </div>
              </div>

              <a
                href="mailto:support@linkx.in"
                className="w-full py-3 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Send Email</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 2 — Phone */}
            <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] border-t-4 border-t-[#C89B2A] p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4 text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#1A3C34]/10 text-[#C89B2A] border border-[#1A3C34]/20 flex items-center justify-center mx-auto shadow-xs">
                  <Phone className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#1A3C34]/10 text-[#1A3C34] text-[11px] font-extrabold">
                    ⏱ Mon–Sat, 10AM–7PM IST
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-[#1A3C34] pt-1">Call Us</h3>
                </div>
                <div className="pt-2 space-y-2">
                  <a href="tel:+919876543210" className="text-lg font-extrabold text-[#C89B2A] hover:underline block">
                    +91 98765 43210
                  </a>
                  <p className="text-xs text-[#6B6355] pt-2 border-t border-[#E8E2D6]/80">
                    For urgent payout or account issues. Direct line to senior creator support.
                  </p>
                </div>
              </div>

              <a
                href="tel:+919876543210"
                className="w-full py-3 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Call Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 3 — WhatsApp */}
            <div className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] border-t-4 border-t-[#C89B2A] p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4 text-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto shadow-xs">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold">
                    ⚡ Fastest response
                  </span>
                  <h3 className="font-display font-extrabold text-xl text-[#1A3C34] pt-1">WhatsApp Us</h3>
                </div>
                <div className="pt-2 space-y-2">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-lg font-extrabold text-[#C89B2A] hover:underline block">
                    +91 98765 43210
                  </a>
                  <p className="text-xs text-[#6B6355] pt-2 border-t border-[#E8E2D6]/80">
                    Available 9AM–9PM IST, 7 days a week. Quickest way to resolve link generation or payment queries.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 3 — WHO ARE YOU? (TAB SELECTOR + FORM)                           */}
      {/* -------------------------------------------------------------------------- */}
      <section id="contact-form" className="py-20 bg-[#F5F0E8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1A3C34]">
              How Can We <span className="text-[#C89B2A]">Help?</span>
            </h2>
            <p className="text-sm text-[#6B6355] font-medium">
              Tell us who you are and we'll connect you to the right team
            </p>

            {/* Tab Selector Buttons */}
            <div className="inline-flex p-1.5 rounded-2xl bg-[#EDE8DC] border border-[#E8E2D6] gap-2 mt-4 shadow-inner">
              <button
                onClick={() => setActiveTab('creator')}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'creator'
                    ? 'bg-[#1A3C34] text-[#C89B2A] shadow-md'
                    : 'text-[#6B6355] hover:text-[#1A3C34]'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span>👤 I'm a Creator / Affiliate</span>
              </button>
              <button
                onClick={() => setActiveTab('brand')}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'brand'
                    ? 'bg-[#1A3C34] text-[#C89B2A] shadow-md'
                    : 'text-[#6B6355] hover:text-[#1A3C34]'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>🏢 I'm a Brand / Advertiser</span>
              </button>
            </div>
          </div>

          {/* Form Container Card */}
          <div className="max-w-2xl mx-auto bg-[#FDFAF4] rounded-3xl border border-[#E8E2D6] p-6 sm:p-10 shadow-xl relative">
            {/* TAB 1: CREATOR FORM */}
            {activeTab === 'creator' && (
              <div>
                {!creatorSubmitted ? (
                  <form onSubmit={handleCreatorSubmit} className="space-y-6">
                    <div className="space-y-1 border-b border-[#E8E2D6] pb-4">
                      <h3 className="text-2xl font-extrabold font-display text-[#1A3C34]">
                        Creator Support Form
                      </h3>
                      <p className="text-xs text-[#6B6355]">
                        Our creator support team typically responds within 24 hours.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1A3C34] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={creatorForm.name}
                          onChange={(e) => setCreatorForm({ ...creatorForm, name: e.target.value })}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1A3C34] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={creatorForm.email}
                          onChange={(e) => setCreatorForm({ ...creatorForm, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1A3C34] mb-1">
                          Phone Number (+91)
                        </label>
                        <input
                          type="tel"
                          value={creatorForm.phone}
                          onChange={(e) => setCreatorForm({ ...creatorForm, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1A3C34] mb-1">
                          Your Primary Platform *
                        </label>
                        <select
                          value={creatorForm.platform}
                          onChange={(e) => setCreatorForm({ ...creatorForm, platform: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                        >
                          <option value="Instagram">Instagram</option>
                          <option value="YouTube">YouTube</option>
                          <option value="Telegram">Telegram</option>
                          <option value="Blog">Blog / Website</option>
                          <option value="Twitter/X">Twitter / X</option>
                          <option value="WhatsApp">WhatsApp Groups</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1A3C34] mb-1">
                        Subject / Query Type *
                      </label>
                      <select
                        value={creatorForm.subject}
                        onChange={(e) => setCreatorForm({ ...creatorForm, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                      >
                        <option value="Commission / Earnings Query">Commission / Earnings Query</option>
                        <option value="Payout Issue">Payout Issue</option>
                        <option value="Campaign / Link Problem">Campaign / Link Problem</option>
                        <option value="Account Access Issue">Account Access Issue</option>
                        <option value="Technical Bug">Technical Bug</option>
                        <option value="Partnership Inquiry">Partnership Inquiry</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1A3C34] mb-1">
                        Your Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={creatorForm.message}
                        onChange={(e) => setCreatorForm({ ...creatorForm, message: e.target.value })}
                        placeholder="Describe your issue or question in detail. Include any relevant transaction IDs, campaign names, or screenshots if applicable."
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1A3C34] mb-1">
                        LinkX Username / Registered Email (Optional)
                      </label>
                      <input
                        type="text"
                        value={creatorForm.username}
                        onChange={(e) => setCreatorForm({ ...creatorForm, username: e.target.value })}
                        placeholder="Helps us find your account faster"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isCreatorSubmitting}
                      className="w-full py-4 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isCreatorSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#1A3C34] border-t-transparent rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-xs text-[#6B6355] pt-1">
                      <Lock className="w-3.5 h-3.5 text-[#1A3C34]" />
                      <span>We never share your information with third parties</span>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8 space-y-6 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-extrabold font-display text-[#1A3C34]">
                        Message Received! 🎉
                      </h3>
                      <p className="text-sm text-[#6B6355] max-w-md mx-auto">
                        We'll get back to you at <strong className="text-[#1A3C34]">{creatorForm.email}</strong> within 24 hours.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F5F0E8] border border-[#E8E2D6] space-y-3 max-w-md mx-auto text-left text-xs">
                      <span className="font-bold text-[#1A3C34] block">While you wait:</span>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Link
                          href="/faqs"
                          className="flex-1 px-4 py-2.5 rounded-xl border border-[#C89B2A] text-[#1A3C34] font-bold text-center hover:bg-[#C89B2A]/10 transition-colors"
                        >
                          Browse FAQs →
                        </Link>
                        <Link
                          href="/earning-tips"
                          className="flex-1 px-4 py-2.5 rounded-xl border border-[#1A3C34] text-[#1A3C34] font-bold text-center hover:bg-[#1A3C34]/10 transition-colors"
                        >
                          Check Earning Tips →
                        </Link>
                      </div>
                    </div>

                    <button
                      onClick={() => setCreatorSubmitted(false)}
                      className="text-xs text-[#C89B2A] font-extrabold underline hover:text-[#b08823] cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: BRAND FORM */}
            {activeTab === 'brand' && (
              <div>
                {!brandSubmitted ? (
                  <form onSubmit={handleBrandSubmit} className="space-y-6">
                    {/* Top Banner inside card */}
                    <div className="p-3 bg-[#C89B2A]/15 border border-[#C89B2A]/40 rounded-2xl text-center text-xs font-extrabold text-[#1A3C34] flex items-center justify-center gap-2">
                      <span>🤝</span>
                      <span>Join 500+ brands already partnering with LinkX</span>
                    </div>

                    <div className="space-y-1 border-b border-[#E8E2D6] pb-4">
                      <h3 className="text-2xl font-extrabold font-display text-[#1A3C34]">
                        Brand Partnership Inquiry
                      </h3>
                      <p className="text-xs text-[#6B6355]">
                        Our partnerships team will get back to you within 1 business day.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1A3C34] mb-1">
                          Contact Person Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={brandForm.contactName}
                          onChange={(e) => setBrandForm({ ...brandForm, contactName: e.target.value })}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1A3C34] mb-1">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={brandForm.email}
                          onChange={(e) => setBrandForm({ ...brandForm, email: e.target.value })}
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1A3C34] mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={brandForm.phone}
                          onChange={(e) => setBrandForm({ ...brandForm, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1A3C34] mb-1">
                          Company / Brand Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={brandForm.brandName}
                          onChange={(e) => setBrandForm({ ...brandForm, brandName: e.target.value })}
                          placeholder="Your brand name"
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1A3C34] mb-1">
                          Brand Category *
                        </label>
                        <select
                          value={brandForm.category}
                          onChange={(e) => setBrandForm({ ...brandForm, category: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                        >
                          <option value="Fashion">Fashion & Apparel</option>
                          <option value="Beauty & Skincare">Beauty & Skincare</option>
                          <option value="Electronics">Electronics & Gadgets</option>
                          <option value="Travel">Travel & Hospitality</option>
                          <option value="Food & Beverage">Food & Beverage</option>
                          <option value="Finance & Fintech">Finance & Fintech</option>
                          <option value="Health & Wellness">Health & Wellness</option>
                          <option value="Shopping / E-commerce">General E-commerce</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1A3C34] mb-1">
                          Monthly Marketing Budget (Optional)
                        </label>
                        <select
                          value={brandForm.budget}
                          onChange={(e) => setBrandForm({ ...brandForm, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                        >
                          <option value="Under ₹50,000">Under ₹50,000</option>
                          <option value="₹50K–₹2L">₹50K–₹2L</option>
                          <option value="₹2L–₹10L">₹2L–₹10L</option>
                          <option value="₹10L+">₹10L+</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1A3C34] mb-1">
                        Brand Website URL *
                      </label>
                      <input
                        type="url"
                        required
                        value={brandForm.website}
                        onChange={(e) => setBrandForm({ ...brandForm, website: e.target.value })}
                        placeholder="https://yourbrand.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1A3C34] mb-1">
                        What are you looking for? *
                      </label>
                      <select
                        value={brandForm.goal}
                        onChange={(e) => setBrandForm({ ...brandForm, goal: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                      >
                        <option value="Launch an affiliate campaign on LinkX">Launch an affiliate campaign on LinkX</option>
                        <option value="Influencer marketing partnership">Influencer marketing partnership</option>
                        <option value="Both affiliate + influencer">Both affiliate + influencer</option>
                        <option value="Just exploring options">Just exploring options</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1A3C34] mb-1">
                        Tell us about your brand & goals (Optional)
                      </label>
                      <textarea
                        rows={4}
                        value={brandForm.message}
                        onChange={(e) => setBrandForm({ ...brandForm, message: e.target.value })}
                        placeholder="Tell us about your brand, target audience, and what you hope to achieve through the LinkX platform..."
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E2D6] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C89B2A]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isBrandSubmitting}
                      className="w-full py-4 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isBrandSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#1A3C34] border-t-transparent rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Partnership Inquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="text-center text-xs text-[#6B6355] pt-1">
                      ⚡ Our team will respond within 1 business day
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8 space-y-6 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-extrabold font-display text-[#1A3C34]">
                        Inquiry Received! 🎉
                      </h3>
                      <p className="text-sm text-[#6B6355] max-w-md mx-auto">
                        Our partnerships team will reach out to <strong className="text-[#1A3C34]">{brandForm.email}</strong> within 24 hours.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F5F0E8] border border-[#E8E2D6] space-y-3 max-w-md mx-auto text-left text-xs">
                      <span className="font-bold text-[#1A3C34] block">In the meantime:</span>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Link
                          href="/about-us"
                          className="flex-1 px-4 py-2.5 rounded-xl border border-[#C89B2A] text-[#1A3C34] font-bold text-center hover:bg-[#C89B2A]/10 transition-colors"
                        >
                          View Platform Stats →
                        </Link>
                        <Link
                          href="/campaigns"
                          className="flex-1 px-4 py-2.5 rounded-xl border border-[#1A3C34] text-[#1A3C34] font-bold text-center hover:bg-[#1A3C34]/10 transition-colors"
                        >
                          See Active Campaigns →
                        </Link>
                      </div>
                    </div>

                    <button
                      onClick={() => setBrandSubmitted(false)}
                      className="text-xs text-[#C89B2A] font-extrabold underline hover:text-[#b08823] cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 4 — DEPARTMENT DIRECTORY                                           */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-20 bg-[#EDE8DC] border-t border-[#E8E2D6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1A3C34]">
              Find the <span className="text-[#C89B2A]">Right Team</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6355] font-medium">
              Skip the queue — contact the right department directly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dept 1 — Creator Support */}
            <div className="bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] shadow-md hover:border-[#C89B2A] hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#C89B2A]/20 text-[#C89B2A] flex items-center justify-center font-bold">
                  <Headphones className="w-6 h-6 text-[#C89B2A]" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base text-[#1A3C34]">Creator Support</h3>
                  <span className="text-[11px] text-[#6B6355]">Commission & account help</span>
                </div>
              </div>
              <p className="text-xs text-[#6B6355] leading-relaxed">
                Commission queries, payout issues, campaign links, and account settings.
              </p>
              <div className="pt-2 border-t border-[#E8E2D6] flex items-center justify-between text-xs">
                <a href="mailto:support@linkx.in" className="font-extrabold text-[#C89B2A] hover:underline">
                  support@linkx.in
                </a>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">
                  Within 24 hours
                </span>
              </div>
            </div>

            {/* Dept 2 — Brand Partnerships */}
            <div className="bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] shadow-md hover:border-[#C89B2A] hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#1A3C34]/10 text-[#1A3C34] flex items-center justify-center font-bold">
                  <Handshake className="w-6 h-6 text-[#1A3C34]" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base text-[#1A3C34]">Brand Partnerships</h3>
                  <span className="text-[11px] text-[#6B6355]">Campaign launches & ads</span>
                </div>
              </div>
              <p className="text-xs text-[#6B6355] leading-relaxed">
                Launch campaigns, custom creator activations, and advertiser onboarding.
              </p>
              <div className="pt-2 border-t border-[#E8E2D6] flex items-center justify-between text-xs">
                <a href="mailto:brands@linkx.in" className="font-extrabold text-[#C89B2A] hover:underline">
                  brands@linkx.in
                </a>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">
                  Within 1 business day
                </span>
              </div>
            </div>

            {/* Dept 3 — Payout Support */}
            <div className="bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] shadow-md hover:border-[#C89B2A] hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#C89B2A]/20 text-[#C89B2A] flex items-center justify-center font-bold">
                  <IndianRupee className="w-6 h-6 text-[#C89B2A]" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base text-[#1A3C34]">Payout Support</h3>
                  <span className="text-[11px] text-[#6B6355]">TDS & withdrawal queries</span>
                </div>
              </div>
              <p className="text-xs text-[#6B6355] leading-relaxed">
                Failed UPI transfers, bank verification issues, TDS deduction details.
              </p>
              <div className="pt-2 border-t border-[#E8E2D6] flex items-center justify-between text-xs">
                <a href="mailto:payouts@linkx.in" className="font-extrabold text-[#C89B2A] hover:underline">
                  payouts@linkx.in
                </a>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">
                  Within 12 hours
                </span>
              </div>
            </div>

            {/* Dept 4 — Technical Support */}
            <div className="bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] shadow-md hover:border-[#C89B2A] hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#1A3C34]/10 text-[#1A3C34] flex items-center justify-center font-bold">
                  <Code2 className="w-6 h-6 text-[#1A3C34]" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base text-[#1A3C34]">Technical Support</h3>
                  <span className="text-[11px] text-[#6B6355]">Tracking & link bugs</span>
                </div>
              </div>
              <p className="text-xs text-[#6B6355] leading-relaxed">
                Bugs, link generator errors, analytics discrepancy, platform issues.
              </p>
              <div className="pt-2 border-t border-[#E8E2D6] flex items-center justify-between text-xs">
                <a href="mailto:tech@linkx.in" className="font-extrabold text-[#C89B2A] hover:underline">
                  tech@linkx.in
                </a>
                <span className="px-2.5 py-0.5 rounded-full bg-[#1A3C34]/10 text-[#1A3C34] text-[10px] font-extrabold">
                  Within 48 hours
                </span>
              </div>
            </div>

            {/* Dept 5 — Legal & Compliance */}
            <div className="bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] shadow-md hover:border-[#C89B2A] hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#C89B2A]/20 text-[#C89B2A] flex items-center justify-center font-bold">
                  <Shield className="w-6 h-6 text-[#C89B2A]" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base text-[#1A3C34]">Legal & Compliance</h3>
                  <span className="text-[11px] text-[#6B6355]">Privacy, ASCI & RBI terms</span>
                </div>
              </div>
              <p className="text-xs text-[#6B6355] leading-relaxed">
                Privacy policy requests, ASCI disclosure rules, terms of service compliance.
              </p>
              <div className="pt-2 border-t border-[#E8E2D6] flex items-center justify-between text-xs">
                <a href="mailto:legal@linkx.in" className="font-extrabold text-[#C89B2A] hover:underline">
                  legal@linkx.in
                </a>
                <span className="px-2.5 py-0.5 rounded-full bg-[#1A3C34]/10 text-[#1A3C34] text-[10px] font-extrabold">
                  Within 3 business days
                </span>
              </div>
            </div>

            {/* Dept 6 — Press & Media */}
            <div className="bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] shadow-md hover:border-[#C89B2A] hover:-translate-y-1 transition-all duration-300 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#1A3C34]/10 text-[#1A3C34] flex items-center justify-center font-bold">
                  <Newspaper className="w-6 h-6 text-[#1A3C34]" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base text-[#1A3C34]">Press & Media</h3>
                  <span className="text-[11px] text-[#6B6355]">Interviews & media kit</span>
                </div>
              </div>
              <p className="text-xs text-[#6B6355] leading-relaxed">
                Press releases, media inquiries, founder interviews, and platform stats requests.
              </p>
              <div className="pt-2 border-t border-[#E8E2D6] flex items-center justify-between text-xs">
                <a href="mailto:press@linkx.in" className="font-extrabold text-[#C89B2A] hover:underline">
                  press@linkx.in
                </a>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">
                  Within 2 business days
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 5 — OFFICE & SOCIAL                                                */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-20 bg-[#1A3C34] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — Office Details */}
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                  Find <span className="text-[#C89B2A]">Us</span>
                </h2>
                <div className="w-16 h-1 bg-[#C89B2A] rounded-full" />
              </div>

              {/* Office Card */}
              <div className="bg-[#234D42] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1A3C34] text-[#C89B2A] border border-[#C89B2A]/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-xl text-white">LinkX HQ</h3>
                    <p className="text-xs sm:text-sm text-[#E8E2D6]/80 leading-relaxed">
                      4th Floor, DLF Cyber City, Sector 24, Gurugram, Haryana 122002, India
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
                  <div className="flex items-center gap-2 text-[#E8E2D6]/90">
                    <Clock className="w-4 h-4 text-[#C89B2A] flex-shrink-0" />
                    <span>Mon–Sat: 10AM–7PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#E8E2D6]/90">
                    <Phone className="w-4 h-4 text-[#C89B2A] flex-shrink-0" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#E8E2D6]/90">
                    <Mail className="w-4 h-4 text-[#C89B2A] flex-shrink-0" />
                    <span>hello@linkx.in</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h3 className="font-display font-extrabold text-lg text-white">Follow Us</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-[#234D42] border border-white/10 flex items-center justify-center text-white hover:bg-[#C89B2A] hover:text-[#1A3C34] transition-colors shadow-sm"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-[#234D42] border border-white/10 flex items-center justify-center text-white hover:bg-[#C89B2A] hover:text-[#1A3C34] transition-colors shadow-sm"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-[#234D42] border border-white/10 flex items-center justify-center text-white hover:bg-[#C89B2A] hover:text-[#1A3C34] transition-colors shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-[#234D42] border border-white/10 flex items-center justify-center text-white hover:bg-[#C89B2A] hover:text-[#1A3C34] transition-colors shadow-sm"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://telegram.org"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-xl bg-[#234D42] border border-white/10 flex items-center justify-center text-white hover:bg-[#C89B2A] hover:text-[#1A3C34] transition-colors shadow-sm"
                    aria-label="Telegram"
                  >
                    <Send className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right — FAQ Quick Links */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                  Quick <span className="text-[#C89B2A]">Answers</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#E8E2D6]/80 font-medium">
                  Before reaching out, check if your question is already answered
                </p>
              </div>

              <div className="space-y-3">
                <Link
                  href="/faqs"
                  className="p-4 rounded-xl bg-[#234D42] border border-white/10 hover:border-[#C89B2A] flex items-center justify-between text-xs sm:text-sm text-[#E8E2D6] font-medium transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#C89B2A]" />
                    <span>How do I withdraw my earnings?</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#C89B2A] group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/faqs"
                  className="p-4 rounded-xl bg-[#234D42] border border-white/10 hover:border-[#C89B2A] flex items-center justify-between text-xs sm:text-sm text-[#E8E2D6] font-medium transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#C89B2A]" />
                    <span>Why is my commission pending?</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#C89B2A] group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/faqs"
                  className="p-4 rounded-xl bg-[#234D42] border border-white/10 hover:border-[#C89B2A] flex items-center justify-between text-xs sm:text-sm text-[#E8E2D6] font-medium transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#C89B2A]" />
                    <span>How do I generate an affiliate link?</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#C89B2A] group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/faqs"
                  className="p-4 rounded-xl bg-[#234D42] border border-white/10 hover:border-[#C89B2A] flex items-center justify-between text-xs sm:text-sm text-[#E8E2D6] font-medium transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#C89B2A]" />
                    <span>Is LinkX free to join?</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#C89B2A] group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/faqs"
                  className="p-4 rounded-xl bg-[#234D42] border border-white/10 hover:border-[#C89B2A] flex items-center justify-between text-xs sm:text-sm text-[#E8E2D6] font-medium transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#C89B2A]" />
                    <span>How do I contact for payout issues?</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#C89B2A] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 6 — RESPONSE TIME PROMISE                                         */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-20 bg-[#F5F0E8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1A3C34]">
              Our Response <span className="text-[#C89B2A]">Promise</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6355] font-medium">
              We take every message seriously — here's our commitment to you
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] border-t-4 border-t-[#C89B2A] shadow-md hover:-translate-y-1 transition-all space-y-3 text-center">
              <div className="w-12 h-12 rounded-xl bg-[#C89B2A]/20 text-[#C89B2A] flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6 text-[#C89B2A]" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-[#1A3C34]">Payout Issues</h3>
              <div className="text-2xl font-black font-display text-[#C89B2A]">Within 12 Hours</div>
              <p className="text-xs text-[#6B6355]">
                We know your money matters — this is our fastest priority SLA.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] border-t-4 border-t-[#1A3C34] shadow-md hover:-translate-y-1 transition-all space-y-3 text-center">
              <div className="w-12 h-12 rounded-xl bg-[#1A3C34]/10 text-[#1A3C34] flex items-center justify-center mx-auto">
                <Headphones className="w-6 h-6 text-[#1A3C34]" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-[#1A3C34]">Creator Support</h3>
              <div className="text-2xl font-black font-display text-[#C89B2A]">Within 24 Hours</div>
              <p className="text-xs text-[#6B6355]">
                7 days a week — weekends and public holidays included.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] border-t-4 border-t-[#C89B2A] shadow-md hover:-translate-y-1 transition-all space-y-3 text-center">
              <div className="w-12 h-12 rounded-xl bg-[#C89B2A]/20 text-[#C89B2A] flex items-center justify-center mx-auto">
                <Briefcase className="w-6 h-6 text-[#C89B2A]" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-[#1A3C34]">Brand Partnerships</h3>
              <div className="text-2xl font-black font-display text-[#C89B2A]">Within 1 Business Day</div>
              <p className="text-xs text-[#6B6355]">
                Our brand partnerships team is dedicated, fast, and agile.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FDFAF4] rounded-2xl p-6 border border-[#E8E2D6] border-t-4 border-t-[#1A3C34] shadow-md hover:-translate-y-1 transition-all space-y-3 text-center">
              <div className="w-12 h-12 rounded-xl bg-[#1A3C34]/10 text-[#1A3C34] flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-[#1A3C34]" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-[#1A3C34]">Legal Queries</h3>
              <div className="text-2xl font-black font-display text-[#C89B2A]">Within 3 Business Days</div>
              <p className="text-xs text-[#6B6355]">
                Complex compliance queries handled with full legal attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* SECTION 7 — BOTTOM CTA BANNER                                              */}
      {/* -------------------------------------------------------------------------- */}
      <section className="py-20 bg-[#1A3C34] text-white relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B2A_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
              Still Have Questions?
            </h2>
            <p className="text-sm sm:text-base text-[#E8E2D6]/90 font-medium">
              Our team is just a message away — we're real people who genuinely care.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-sm transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Send Us a Message ↑</span>
            </button>

            <Link
              href="/faqs"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-white/30 text-white hover:bg-white/10 font-extrabold text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Browse FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-4 text-xs text-[#E8E2D6]/80 flex flex-wrap items-center justify-center gap-4">
            <span>💬 Average response time: Under 24 hours</span>
            <span>•</span>
            <a href="mailto:support@linkx.in" className="hover:text-[#C89B2A] transition-colors">
              📧 support@linkx.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
