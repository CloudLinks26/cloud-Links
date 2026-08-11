'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  Calendar,
  ShieldCheck,
  ChevronDown,
  Mail,
  Headphones,
  ArrowRight,
  CheckCircle2,
  UserCheck,
  Award,
  IndianRupee,
  Wallet,
  AlertTriangle,
  UserX,
  ShieldAlert,
  Scale
} from 'lucide-react';

export const TermsConditionsContent: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      id: 1,
      icon: CheckCircle2,
      title: '1. Acceptance of Terms',
      bullets: [
        'By registering or accessing CloudLinks, you agree to be bound by these Terms & Conditions in full',
        'If you do not agree with any part of these terms, please discontinue platform usage immediately',
        'These terms apply universally to all registered creators, influencers, publishers, and brand partners',
        'CloudLinks reserves the right to update or modify these Terms & Conditions at any time without prior individual notice'
      ]
    },
    {
      id: 2,
      icon: UserCheck,
      title: '2. User Eligibility',
      bullets: [
        'You must be at least 18 years of age to register and receive financial payouts on CloudLinks',
        'You must be a resident of India or an authorized operating territory with a valid PAN or UPI ID',
        'You agree to provide true, current, and accurate personal, banking, and contact details',
        'Strictly ONE account per individual or legal entity — duplicate or proxy accounts will be permanently suspended'
      ]
    },
    {
      id: 3,
      icon: Award,
      title: '3. Creator Responsibilities & Content Rules',
      bullets: [
        'Promote brand campaigns transparently, accurately, and without misleading advertising claims',
        'Mandatory Affiliate Disclosure: Clearly notify your audience about affiliate referral links as mandated by ASCI guidelines',
        'Strictly prohibited: Cookie-stuffing, auto-redirect scripts, forced pop-ups, or inorganic traffic manipulation',
        'Prohibited content placements: Adult, gambling, illegal, hate speech, or dangerous material platforms'
      ]
    },
    {
      id: 4,
      icon: IndianRupee,
      title: '4. Commission & Earnings Calculation',
      bullets: [
        'Commissions are accrued exclusively on valid, completed, and verified brand sales or qualified actions',
        'Cancelled, returned, refunded, or fraudulent customer orders are automatically excluded from commission earnings',
        'Brand partners define baseline commission percentages, cookie windows, and payout validation rules',
        'CloudLinks is not responsible for spontaneous commission percentage revisions or campaign pauses initiated by brands'
      ]
    },
    {
      id: 5,
      icon: Wallet,
      title: '5. Payout Terms & Tax Compliance',
      bullets: [
        'Withdrawal requests can be submitted on-demand via verified Bank Transfer (IMPS/NEFT) or UPI',
        'Validation Window: First-time creator earnings are subject to a 30-day brand validation cycle before release',
        'TDS Deduction: Applicable Tax Deducted at Source (TDS) will be remitted as mandated by the Income Tax Department of India',
        'CloudLinks reserves the right to freeze pending withdrawals if account security or fraud alerts are triggered'
      ]
    },
    {
      id: 6,
      icon: AlertTriangle,
      title: '6. Prohibited Activities & Anti-Fraud Policy',
      bullets: [
        'Employing automated bots, click farms, VPN networks, or spam scripts to artificially inflate link statistics',
        'Self-referrals or buying products through your own generated affiliate link to pocket cashbacks',
        'Misrepresenting yourself as an official brand representative, employee, or exclusive agent',
        'Attempting to scrape, reverse-engineer, decompile, or breach the CloudLinks platform infrastructure'
      ]
    },
    {
      id: 7,
      icon: UserX,
      title: '7. Account Suspension & Termination',
      bullets: [
        'CloudLinks reserves the right to suspend or terminate accounts found in violation of these Terms without prior warning',
        'Upon account termination due to fraud, all accumulated or pending commission balances shall be forfeited',
        'Creators may request voluntary account closure at any time through the platform settings panel',
        'Data deletion following voluntary account closure is executed within 30 business days'
      ]
    },
    {
      id: 8,
      icon: ShieldAlert,
      title: '8. Limitation of Liability',
      bullets: [
        'CloudLinks shall not be held liable for loss of income resulting from brand inventory shortages or campaign cancellations',
        'CloudLinks is not responsible for outages or technical downtime on third-party advertiser store websites',
        'Maximum cumulative liability of CloudLinks to any creator is strictly capped at the total commissions paid over the preceding 3 months'
      ]
    },
    {
      id: 9,
      icon: Scale,
      title: '9. Governing Law & Dispute Resolution',
      bullets: [
        'These Terms & Conditions are governed by and construed in accordance with the laws of the Republic of India',
        'Any legal disputes or proceedings arising shall fall under the exclusive jurisdiction of the courts in New Delhi, India',
        'Both parties agree to make good-faith efforts to resolve disagreements through direct mediation prior to legal filing'
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
            <FileText className="w-3.5 h-3.5" />
            <span>Please Read Carefully</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Terms & Conditions
          </h1>

          {/* Gold Underline Accent */}
          <div className="w-16 h-1 bg-[#C89B2A] mx-auto rounded-full my-3" />

          {/* Subtext */}
          <p className="text-sm sm:text-base text-[#F5F0E8]/80 font-medium max-w-2xl mx-auto leading-relaxed">
            By using CloudLinks, you agree to these terms. These terms govern your use of our affiliate marketing platform, campaigns, and payout services.
          </p>

          {/* Breadcrumbs */}
          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-bold text-[#F5F0E8]/70">
            <Link href="/" className="hover:text-[#C89B2A] transition-colors">
              Home
            </Link>
            <span className="text-[#C89B2A]">›</span>
            <span className="text-white">Terms & Conditions</span>
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
          Welcome to <span className="text-[#C89B2A] font-bold">CloudLinks</span>. These Terms & Conditions constitute a legally binding agreement between you and CloudLinks regarding platform access, campaign usage, and commission payout terms.
        </p>
        <p className="text-xs sm:text-sm text-[#6B6355]">
          Please read these rules thoroughly before creating affiliate links or promoting brand campaigns.
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
              If you have any questions about these terms or platform compliance, reach out to our legal team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left pt-2">
            <div className="p-4 rounded-2xl bg-[#F5F0E8] border border-[#E8E2D6] space-y-1">
              <span className="text-[10px] font-extrabold uppercase text-[#6B6355]">Legal Department</span>
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

export default TermsConditionsContent;
