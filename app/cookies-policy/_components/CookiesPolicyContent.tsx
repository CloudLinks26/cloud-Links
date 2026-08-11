'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Cookie,
  Calendar,
  ShieldCheck,
  ChevronDown,
  Mail,
  Headphones,
  ArrowRight,
  Info,
  Layers,
  Globe,
  Clock,
  Sliders,
  RefreshCw
} from 'lucide-react';

export default function CookiesPolicyContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      id: 1,
      icon: Info,
      title: '1. What Are Cookies?',
      bullets: [
        'Cookies are small text files placed on your computer, smartphone, or tablet by websites you visit',
        'They act as a memory bank for websites, remembering your preferences, active logins, and navigation paths',
        'Crucial for Affiliate Monitization: Cookies record referral identifiers so you receive full commission credit when someone purchases via your link',
        'CloudLinks utilizes both temporary Session Cookies (erased upon browser closure) and Persistent Cookies (retained for specific duration window)'
      ]
    },
    {
      id: 2,
      icon: Layers,
      title: '2. Types of Cookies We Use',
      bullets: [
        'Essential Cookies: Necessary for basic platform operations, two-factor authentication, and secure login session maintenance. Cannot be disabled.',
        'Performance & Analytics Cookies: Anonymously collect data on page load speed, error reports, and feature usage to help us optimize server performance.',
        'Affiliate Tracking Cookies: Crucial tracking tags attached when users click your CloudLinks shortlinks. They ensure sales are accurately attributed to your earnings dashboard.',
        'Marketing & Customization Cookies: Help tailor recommended brand campaigns on your dashboard according to your content niche and audience preferences.'
      ]
    },
    {
      id: 3,
      icon: Globe,
      title: '3. Third-Party Cookies & Tracking Pixels',
      bullets: [
        'Brand Partners (e.g., Myntra, Flipkart, Nykaa): Store conversion attribution cookies on buyer devices after clicking your affiliate links',
        'Payment Gateways (Razorpay, UPI providers): Set secure session cookies required to verify and process automated creator payouts safely',
        'Analytics Providers (Google Analytics, Mixpanel): Use aggregated cookies to provide server speed and user journey diagnostics',
        'CloudLinks does not control third-party cookie lifecycles — please consult respective brand partner privacy policies for details'
      ]
    },
    {
      id: 4,
      icon: Clock,
      title: '4. Cookie Retention & Lifespan',
      bullets: [
        'Session Cookies: Deleted instantly as soon as you close your web browser or logout',
        'Login Session Cookies: Stored securely for 30 days to avoid constant manual logins',
        'Affiliate Attribution Cookies: Stored for 30 days from the initial link click date (industry standard conversion window)',
        'Dashboard Preference Cookies: Stored for 1 year to preserve theme and filter settings'
      ]
    },
    {
      id: 5,
      icon: Sliders,
      title: '5. Managing & Disabling Cookie Preferences',
      bullets: [
        'Browser Controls: You can inspect, block, or delete cookies directly inside Google Chrome, Safari, Firefox, or Edge browser settings',
        'Impact of Disabling: Disabling Essential Cookies will prevent account login and dashboard access',
        'Impact on Earnings: Disabling Affiliate Cookies on your device or browser will prevent referral sales from attributing to your CloudLinks earnings balance'
      ]
    },
    {
      id: 6,
      icon: RefreshCw,
      title: '6. Updates to This Cookies Policy',
      bullets: [
        'We periodically update our Cookies Policy to adapt to technical tracking changes or legal regulations',
        'Significant updates will be highlighted via a banner alert on your creator dashboard',
        'Continued usage of CloudLinks following updates indicates agreement with revised cookie practices'
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
            <Cookie className="w-3.5 h-3.5" />
            <span>How We Use Cookies</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Cookies Policy
          </h1>

          {/* Gold Underline Accent */}
          <div className="w-16 h-1 bg-[#C89B2A] mx-auto rounded-full my-3" />

          {/* Subtext */}
          <p className="text-sm sm:text-base text-[#F5F0E8]/80 font-medium max-w-2xl mx-auto leading-relaxed">
            CloudLinks uses cookies to make your experience better, track affiliate performance accurately, and improve our platform. Here's exactly what we use and why.
          </p>

          {/* Breadcrumbs */}
          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-bold text-[#F5F0E8]/70">
            <Link href="/" className="hover:text-[#C89B2A] transition-colors">
              Home
            </Link>
            <span className="text-[#C89B2A]">›</span>
            <span className="text-white">Cookies Policy</span>
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
          This Cookies Policy explains how <span className="text-[#C89B2A] font-bold">CloudLinks</span> uses browser cookies and tracking pixels to ensure seamless <span className="text-[#C89B2A] font-bold">affiliate attribution</span> and protect user account security.
        </p>
        <p className="text-xs sm:text-sm text-[#6B6355]">
          Understanding how cookies work helps you ensure zero missed commissions when audience members shop via your custom links.
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
              Have Questions?
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6355] font-medium max-w-md mx-auto">
              If you have any questions about cookie attribution or tracking preferences, reach out to our team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left pt-2">
            <div className="p-4 rounded-2xl bg-[#F5F0E8] border border-[#E8E2D6] space-y-1">
              <span className="text-[10px] font-extrabold uppercase text-[#6B6355]">Technical Support</span>
              <p className="text-xs font-black text-[#1A3C34]">legal@cloudlinks.in</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F5F0E8] border border-[#E8E2D6] space-y-1">
              <span className="text-[10px] font-extrabold uppercase text-[#6B6355]">Support Desk</span>
              <p className="text-xs font-black text-[#1A3C34]">Help Center 24/7</p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/about-us"
              className="px-8 py-3.5 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-xs transition-all shadow-md inline-flex items-center gap-2 group cursor-pointer"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
