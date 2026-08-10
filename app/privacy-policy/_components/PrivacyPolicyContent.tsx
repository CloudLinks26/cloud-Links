'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  Calendar,
  ChevronDown,
  Mail,
  Headphones,
  ArrowRight,
  Database,
  Eye,
  Share2,
  Cookie,
  KeyRound,
  UserCheck,
  Clock,
  RefreshCw
} from 'lucide-react';

export default function PrivacyPolicyContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      id: 1,
      icon: Database,
      title: '1. Information We Collect',
      bullets: [
        'Name, email address, and phone number provided during account registration',
        'Bank account details and UPI IDs strictly used for processing payout requests',
        'Device information, IP address, browser type, and operating system',
        'Cookies, session tokens, and analytical website usage data',
        'Pages visited, affiliate links clicked, and campaign performance records',
        'Real-time conversion metrics and earnings history generated through affiliate activity'
      ]
    },
    {
      id: 2,
      icon: Eye,
      title: '2. How We Use Your Information',
      bullets: [
        'To create, authenticate, and maintain your secure LinkX creator account',
        'To process affiliate commissions and execute seamless payout transfers',
        'To send real-time campaign updates, payout notifications, and platform alerts',
        'To optimize platform performance, user experience, and link generator speed',
        'To detect, investigate, and prevent fraudulent clicks or unauthorized access',
        'To comply with Indian tax regulations, RBI guidelines, and legal requirements'
      ]
    },
    {
      id: 3,
      icon: Share2,
      title: '3. How We Share Your Information',
      bullets: [
        'We NEVER sell, rent, or trade your personal information to third parties',
        'Shared with Brand Partners: Aggregate conversion data only — zero personal identity details disclosed',
        'Shared with Payment Partners: Verified UPI/Bank details shared solely for processing automated payouts',
        'Shared with Legal Authorities: Disclosed only when mandated by court orders or Indian law enforcement',
        'All third-party infrastructure providers are bound by strict non-disclosure & data safety contracts'
      ]
    },
    {
      id: 4,
      icon: Cookie,
      title: '4. Cookies & Tracking Technologies',
      bullets: [
        'Accurately attribute affiliate link clicks, referrals, and completed brand purchases',
        'Maintain active secure login sessions across browser tabs without frequent re-authentications',
        'Analyze anonymized user behavior to refine dashboard tools and recommendation engines',
        'You retain full control to modify or disable cookie settings inside your browser preferences',
        'For detailed breakdown of all tracking technologies, refer to our complete Cookies Policy'
      ]
    },
    {
      id: 5,
      icon: KeyRound,
      title: '5. Data Security & Storage',
      bullets: [
        'All data transmitted between your browser and LinkX is encrypted using AES 256-bit SSL/TLS',
        'Sensitive banking credentials and UPI IDs are stored in isolated, bank-grade encrypted vaults',
        'We undergo scheduled vulnerability assessments, penetration testing, and security audits',
        'Access to user personal data is restricted strictly to vetted security personnel'
      ]
    },
    {
      id: 6,
      icon: UserCheck,
      title: '6. Your Legal Rights',
      bullets: [
        'Right to Access: Request a full copy of all personal data held in your LinkX profile',
        'Right to Rectification: Correct inaccurate or outdated personal details at any time',
        'Right to Deletion: Request complete removal of your account and associated personal records',
        'Right to Opt-Out: Unsubscribe from promotional updates via email or dashboard settings',
        'To exercise any of these privacy rights, contact our Data Protection team at privacy@linkx.in'
      ]
    },
    {
      id: 7,
      icon: Clock,
      title: '7. Data Retention Policy',
      bullets: [
        'Active Accounts: Personal data is retained for as long as your LinkX account remains active',
        'Account Deletion: Upon receiving a deletion request, personal profile data is purged within 30 days',
        'Financial Compliance: Transaction, commission, and payout records are retained for 7 years as required under Indian income tax law'
      ]
    },
    {
      id: 8,
      icon: RefreshCw,
      title: '8. Changes to This Privacy Policy',
      bullets: [
        'We reserve the right to update this Privacy Policy as platform features and regulations evolve',
        'Any material changes will be communicated via email and a prominent dashboard banner',
        'Continued usage of LinkX following policy updates constitutes full acceptance of revised terms'
      ]
    }
  ];

  return (
    <div className="bg-[#F5F0E8] min-h-screen text-[#1A3C34] font-sans selection:bg-[#C89B2A]/20">
      
      {/* ========================================== */}
      {/* PART A — HERO HEADER                       */}
      {/* ========================================== */}
      <section className="bg-[#1A3C34] text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Gold Dotted Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#C89B2A 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          {/* Gold Outlined Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C89B2A]/15 border border-[#C89B2A]/40 text-[#C89B2A] text-xs font-extrabold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>Your Privacy Matters to Us</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Privacy Policy
          </h1>

          {/* Gold Underline Accent */}
          <div className="w-16 h-1 bg-[#C89B2A] mx-auto rounded-full my-3" />

          {/* Subtext */}
          <p className="text-sm sm:text-base text-[#F5F0E8]/80 font-medium max-w-2xl mx-auto leading-relaxed">
            At LinkX, we respect your privacy and are committed to protecting the information you share with us while using our affiliate marketing platform.
          </p>

          {/* Breadcrumbs */}
          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-bold text-[#F5F0E8]/70">
            <Link href="/" className="hover:text-[#C89B2A] transition-colors">
              Home
            </Link>
            <span className="text-[#C89B2A]">›</span>
            <span className="text-white">Privacy Policy</span>
          </div>
        </div>
      </section>


      {/* ========================================== */}
      {/* PART B — LAST UPDATED BAR                  */}
      {/* ========================================== */}
      <section className="bg-[#FDFAF4] border-b border-[#E8E2D6] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-semibold text-[#6B6355]">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#C89B2A]" />
            <span>Last Updated: January 1, 2026</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#2D7A4F]" />
            <span>This document is legally binding</span>
          </div>
        </div>
      </section>


      {/* ========================================== */}
      {/* PART C — INTRO PARAGRAPH                   */}
      {/* ========================================== */}
      <section className="max-w-3xl mx-auto px-4 pt-10 pb-6 text-center text-sm sm:text-base text-[#1A3C34] font-medium leading-relaxed space-y-3">
        <p>
          This Privacy Policy describes how <span className="text-[#C89B2A] font-bold">LinkX</span> collects, uses, stores, and protects your <span className="text-[#C89B2A] font-bold">personal data</span> when you register, promote campaigns, and withdraw affiliate commissions on our platform.
        </p>
        <p className="text-xs sm:text-sm text-[#6B6355]">
          We prioritize <span className="text-[#C89B2A] font-bold">data transparency</span> and adhere strictly to Indian IT Act regulations and international data protection best practices.
        </p>
      </section>


      {/* ========================================== */}
      {/* PART D — ACCORDION SECTIONS                */}
      {/* ========================================== */}
      <section className="max-w-3xl mx-auto px-4 pb-16 space-y-3">
        {sections.map((sec, idx) => {
          const isOpen = openIndex === idx;
          const IconComp = sec.icon;

          return (
            <div
              key={sec.id}
              className={`bg-[#FDFAF4] rounded-2xl border transition-all duration-200 overflow-hidden shadow-2xs ${
                isOpen
                  ? 'border-l-4 border-l-[#C89B2A] border-t-[#E8E2D6] border-r-[#E8E2D6] border-b-[#E8E2D6]'
                  : 'border-[#E8E2D6]'
              }`}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#1A3C34] hover:text-[#C89B2A] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${isOpen ? 'bg-[#C89B2A]/20 text-[#1A3C34]' : 'bg-[#F5F0E8] text-[#6B6355]'}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span>{sec.title}</span>
                </div>

                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#C89B2A]' : 'text-[#6B6355]'
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#6B6355] space-y-3 leading-relaxed border-t border-[#E8E2D6]/50 pt-4">
                  <ul className="space-y-2.5">
                    {sec.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C89B2A] flex-shrink-0 mt-2" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </section>


      {/* ========================================== */}
      {/* PART E — CONTACT SECTION                   */}
      {/* ========================================== */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <div className="bg-[#FDFAF4] rounded-3xl p-8 sm:p-10 border border-[#E8E2D6] shadow-sm text-center space-y-6">
          <div className="flex justify-center items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#C89B2A]/15 text-[#C89B2A] flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-[#1A3C34]/10 text-[#1A3C34] flex items-center justify-center">
              <Headphones className="w-6 h-6" />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A3C34]">
              Have Privacy Questions?
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6355] font-medium max-w-md mx-auto">
              If you have any questions or data access requests regarding this policy, reach out to our team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left pt-2">
            <div className="p-4 rounded-2xl bg-[#F5F0E8] border border-[#E8E2D6] space-y-1">
              <span className="text-[10px] font-extrabold uppercase text-[#6B6355]">Privacy Officer</span>
              <p className="text-xs font-black text-[#1A3C34]">privacy@linkx.in</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F5F0E8] border border-[#E8E2D6] space-y-1">
              <span className="text-[10px] font-extrabold uppercase text-[#6B6355]">Support Desk</span>
              <p className="text-xs font-black text-[#1A3C34]">Help Center 24/7</p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/about"
              className="px-8 py-3.5 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-xs transition-all shadow-md inline-flex items-center gap-2 group cursor-pointer"
            >
              <span>Contact Privacy Support</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
