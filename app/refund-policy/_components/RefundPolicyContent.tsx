'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Banknote,
  Calendar,
  ShieldCheck,
  ChevronDown,
  Mail,
  Headphones,
  ArrowRight,
  Gift,
  RotateCcw,
  AlertCircle,
  Clock,
  ArrowDownRight,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';

export const RefundPolicyContent: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      id: 1,
      icon: Gift,
      title: '1. LinkX Is Free — No Creator Payments Required',
      bullets: [
        'LinkX does NOT charge creators, influencers, or publishers any subscription or joining fees',
        'Creating an account, generating shortlinks, and requesting payouts is 100% FREE forever',
        'Because creators make no direct monetary payments to LinkX, traditional service refund requests do not apply',
        'This policy strictly outlines how brand customer returns and order cancellations impact your affiliate commission earnings'
      ]
    },
    {
      id: 2,
      icon: RotateCcw,
      title: '2. How Customer Returns & Cancellations Impact Commissions',
      bullets: [
        'Commissions are funded by brand partners only when a referred customer completes and retains a valid purchase',
        'If a referred customer returns, cancels, or refuses delivery of an item, the brand reverses the affiliate commission',
        'Reversed commissions are deducted directly from your Pending Balance in your dashboard in real-time',
        'If a return occurs after payout release, the reversed amount is adjusted against your upcoming payout balance'
      ]
    },
    {
      id: 3,
      icon: AlertCircle,
      title: '3. Dispute Resolution for Reversed Commissions',
      bullets: [
        'If you suspect a commission reversal was executed in error by a brand partner, you can lodge a dispute within 15 days',
        'How to submit a dispute: Go to Dashboard → Earnings → Transactions → Select Order → Click "Raise Dispute"',
        'Our audit team liaises directly with the brand partner merchant to re-verify order delivery status within 5–7 business days',
        'If the order is confirmed valid by the merchant logs, the reversed commission is immediately re-credited to your account'
      ]
    },
    {
      id: 4,
      icon: Clock,
      title: '4. Brand Return Windows & Pending Balance Status',
      bullets: [
        'Brand partners operate standard return and exchange windows (typically 7 to 30 days depending on category)',
        'Your earnings remain in "Pending Status" until the brand partner\'s official customer return window expires',
        'Once the return window closes safely without cancellations, earnings move automatically to "Confirmed Balance" ready for instant UPI payout'
      ]
    },
    {
      id: 5,
      icon: ArrowDownRight,
      title: '5. Payout Adjustments & Balance Recoveries',
      bullets: [
        'Once a payout transfer is dispatched to your UPI or Bank account, the transaction is non-reversible',
        'In rare instances where a late return is confirmed post-payout, the balance deficit is adjusted against future earnings',
        'LinkX will never pull funds directly from your external personal bank account or UPI ID'
      ]
    },
    {
      id: 6,
      icon: ShieldAlert,
      title: '6. Reversals Due to Fraudulent & Manipulated Activity',
      bullets: [
        'Commissions generated via self-purchases, proxy IP bots, click-stuffing, or fraudulent credit cards will be permanently cancelled',
        'Accounts identified engaging in systematic fraud will be banned instantly with complete forfeiture of pending balances',
        'LinkX utilizes automated AI fraud detection alongside manual brand audit checks prior to releasing withdrawal funds'
      ]
    },
    {
      id: 7,
      icon: HelpCircle,
      title: '7. How to Contact Us Regarding Commission Audits',
      bullets: [
        'For all commission reversal, audit, or payout reconciliation inquiries, email us at refunds@linkx.in',
        'In-app option: Dashboard → Help → Submit Ticket → Subject: Commission Audit Query',
        'Our dedicated support team responds to all financial queries within 2–3 business days'
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
            <Banknote className="w-3.5 h-3.5" />
            <span>Fair & Transparent</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Refund & Reversal Policy
          </h1>

          {/* Gold Underline Accent */}
          <div className="w-16 h-1 bg-[#C89B2A] mx-auto rounded-full my-3" />

          {/* Subtext */}
          <p className="text-sm sm:text-base text-[#F5F0E8]/80 font-medium max-w-2xl mx-auto leading-relaxed">
            LinkX is a free platform — there are no payments made to us by creators. This policy explains how product returns and cancellations affect your affiliate commissions.
          </p>

          {/* Breadcrumbs */}
          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-bold text-[#F5F0E8]/70">
            <Link href="/" className="hover:text-[#C89B2A] transition-colors">
              Home
            </Link>
            <span className="text-[#C89B2A]">›</span>
            <span className="text-white">Refund Policy</span>
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
          <span className="text-[#C89B2A] font-bold">LinkX</span> is 100% free for all creators. This Refund & Reversal Policy outlines the terms governing how <span className="text-[#C89B2A] font-bold">brand product returns</span>, order cancellations, and audit adjustments affect your pending and paid commissions.
        </p>
        <p className="text-xs sm:text-sm text-[#6B6355]">
          We ensure complete visibility so you always understand how every single transaction is credited to your balance.
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
              If you have any questions about commission reversals or transaction disputes, reach out to our team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left pt-2">
            <div className="p-4 rounded-2xl bg-[#F5F0E8] border border-[#E8E2D6] space-y-1">
              <span className="text-[10px] font-extrabold uppercase text-[#6B6355]">Refunds & Audits</span>
              <p className="text-xs font-black text-[#1A3C34]">refunds@linkx.in</p>
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
              <span>Contact Support</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RefundPolicyContent;
