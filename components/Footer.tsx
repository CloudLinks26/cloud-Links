'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Tag, Users, Wallet, ShoppingBag, ShieldCheck, Heart, Instagram, Youtube, Linkedin, Twitter, Send, ArrowUp, ChevronRight } from 'lucide-react';
import { useGlobalContext } from './GlobalProvider';

export const Footer: React.FC = () => {
  const { onOpenAuth, onOpenLinkGen } = useGlobalContext();
  const [legalModalTitle, setLegalModalTitle] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FDFAF4] border-t border-[#E8E2D6] pt-16 pb-12 text-[#1A3C34] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* TOP ROW: Logo & Tagline + 4 Balanced Link Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E8E2D6]">

          {/* Logo & Description (4 Cols) */}
          <div className="lg:col-span-4 space-y-5 pr-0 lg:pr-6">
            <Link href="/" onClick={scrollToTop} className="inline-flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/couponsbit/image/upload/v1786449391/logo_wtzdye.png"
                alt="CloudLinks"
                className="h-18 w-auto object-contain"
              />
          
            </Link>

            <p className="text-sm text-[#6B6355] leading-relaxed">
              India's premier creator monetization platform empowering creators, influencers, and publishers to earn high affiliate commissions from 500+ top brands.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#F5F0E8] border border-[#E8E2D6] flex items-center justify-center text-[#1A3C34] hover:bg-[#1A3C34] hover:text-[#C89B2A] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#F5F0E8] border border-[#E8E2D6] flex items-center justify-center text-[#1A3C34] hover:bg-[#1A3C34] hover:text-[#C89B2A] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#F5F0E8] border border-[#E8E2D6] flex items-center justify-center text-[#1A3C34] hover:bg-[#1A3C34] hover:text-[#C89B2A] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#F5F0E8] border border-[#E8E2D6] flex items-center justify-center text-[#1A3C34] hover:bg-[#1A3C34] hover:text-[#C89B2A] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#F5F0E8] border border-[#E8E2D6] flex items-center justify-center text-[#1A3C34] hover:bg-[#1A3C34] hover:text-[#C89B2A] transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 4 Link Columns (8 Cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">

            {/* Col 1: Quick Links */}
            <div className="space-y-4">
              <h4 className="font-display font-extrabold text-[#1A3C34] uppercase tracking-wider text-xs">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-[#6B6355] font-medium">
                <li><Link href="/" onClick={scrollToTop} className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />Home</Link></li>
                <li><Link href="/campaigns" onClick={scrollToTop} className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />Campaigns</Link></li>
                <li><Link href="/how-it-works" onClick={scrollToTop} className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />How it Works</Link></li>
                <li><Link href="/influencer" onClick={scrollToTop} className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />Influencers</Link></li>
                <li><Link href="/payouts" onClick={scrollToTop} className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />Payouts</Link></li>
                <li><Link href="/top-brands" onClick={scrollToTop} className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />Top Brands</Link></li>
              </ul>
            </div>

            {/* Col 2: For Influencers */}
            <div className="space-y-4">
              <h4 className="font-display font-extrabold text-[#1A3C34] uppercase tracking-wider text-xs">
                For Influencers
              </h4>
              <ul className="space-y-2.5 text-[#6B6355] font-medium">
                <li><Link href="/influencer" onClick={scrollToTop} className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />Join as Influencer</Link></li>
                <li><Link href="/influencer#dashboard" className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />Influencer Dashboard</Link></li>
                <li><Link href="/influencer#brands" className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />Brand Collaborations</Link></li>
                <li><Link href="/influencer#tiers" className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />Influencer Tiers</Link></li>
                <li><Link href="/earning-tips" onClick={scrollToTop} className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />Earning Tips</Link></li>
                <li><Link href="/influencer#stories" className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />Success Stories</Link></li>
              </ul>
            </div>

            {/* Col 3: Company */}
            <div className="space-y-4">
              <h4 className="font-display font-extrabold text-[#1A3C34] uppercase tracking-wider text-xs">
                Company
              </h4>
              <ul className="space-y-2.5 text-[#6B6355] font-medium">
                <li><Link href="/about-us" onClick={scrollToTop} className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />About Us</Link></li>
                <li><Link href="/blog" onClick={scrollToTop} className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />Blog</Link></li>
                <li><Link href="/earning-tips" onClick={scrollToTop} className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />Tips to Earn More</Link></li>
                <li><button onClick={() => onOpenAuth('signup', 'creator')} className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5 cursor-pointer text-left"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />Join as Creator</button></li>
                <li><button onClick={() => onOpenAuth('signup', 'brand')} className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5 cursor-pointer text-left"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />Brand Partnership</button></li>
              </ul>
            </div>

            {/* Col 4: Legal */}
            <div className="space-y-4">
              <h4 className="font-display font-extrabold text-[#1A3C34] uppercase tracking-wider text-xs">
                Legal
              </h4>
              <ul className="space-y-2.5 text-[#6B6355] font-medium">
                <li><Link href="/faqs" onClick={scrollToTop} className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />FAQs</Link></li>
                <li><Link href="/privacy-policy" onClick={scrollToTop} className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />Privacy Policy</Link></li>
                <li><Link href="/terms-conditions" onClick={scrollToTop} className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />Terms & Conditions</Link></li>
                <li><Link href="/cookies-policy" onClick={scrollToTop} className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />Cookies Policy</Link></li>
                <li><Link href="/refund-policy" onClick={scrollToTop} className="hover:text-[#C89B2A] transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#C89B2A]" />Refund Policy</Link></li>
              </ul>
            </div>

          </div>

        </div>

        {/* MIDDLE ROW: "Trusted by 500+ Top Brands" + Logo Strip */}
        <div className="p-5 rounded-2xl bg-[#F5F0E8] border border-[#E8E2D6] flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-semibold">
          <div className="flex items-center gap-2.5 whitespace-nowrap text-[#1A3C34]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C89B2A]"></span>
            <strong className="font-bold text-sm">Trusted by 500+ Top Brands:</strong>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 text-xs font-extrabold text-[#1A3C34]/90">
            {['Amazon.in', 'Flipkart', 'AJIO', 'Myntra', 'Nykaa', 'MakeMyTrip', 'boAt', 'Mamaearth'].map((brand) => (
              <span
                key={brand}
                onClick={() => onOpenLinkGen(brand)}
                className="px-3.5 py-1.5 bg-white rounded-lg border border-[#E8E2D6] hover:border-[#C89B2A] hover:text-[#C89B2A] cursor-pointer transition-colors shadow-xs"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* STATS ROW: Clean horizontal strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-[#E8E2D6]">
          <div className="flex items-center gap-3.5">
            <Tag className="w-6 h-6 text-[#C89B2A] shrink-0" />
            <div>
              <span className="font-sora font-extrabold text-lg text-[#1A3C34] block leading-tight">500+</span>
              <span className="text-xs text-[#6B6355] font-medium">Top Brands</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <Users className="w-6 h-6 text-[#C89B2A] shrink-0" />
            <div>
              <span className="font-sora font-extrabold text-lg text-[#1A3C34] block leading-tight">10,000+</span>
              <span className="text-xs text-[#6B6355] font-medium">Active Creators</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <Wallet className="w-6 h-6 text-[#C89B2A] shrink-0" />
            <div>
              <span className="font-sora font-extrabold text-lg text-[#1A3C34] block leading-tight">₹10Cr+</span>
              <span className="text-xs text-[#6B6355] font-medium">Paid to Creators</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <ShoppingBag className="w-6 h-6 text-[#C89B2A] shrink-0" />
            <div>
              <span className="font-sora font-extrabold text-lg text-[#1A3C34] block leading-tight">50L+</span>
              <span className="text-xs text-[#6B6355] font-medium">Orders Tracked</span>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-[#6B6355] pt-2">

          <div>
            © 2026 CloudLinks. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 font-medium text-xs">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-600 fill-red-600 inline" />
            <span>in India</span>
          </div>

          {/* Secure Payments & Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-[#1A3C34]">
              <ShieldCheck className="w-4 h-4 text-[#C89B2A]" />
              Secure Payments — 100% Safe & Secure
            </span>

            <div className="flex items-center gap-1.5">
              {['UPI', 'Paytm', 'VISA', 'Mastercard', 'RuPay'].map((badge) => (
                <span key={badge} className="px-2.5 py-1 bg-white border border-[#E8E2D6] rounded text-[11px] font-extrabold text-[#1A3C34]">
                  {badge}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Back to top float button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 z-30 w-11 h-11 rounded-full bg-[#1A3C34] text-[#C89B2A] border border-[#C89B2A]/40 shadow-xl flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Legal Info Modal */}
      {legalModalTitle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A3C34]/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#FDFAF4] rounded-2xl p-6 shadow-2xl border border-[#E8E2D6]">
            <h3 className="font-display font-extrabold text-xl text-[#1A3C34] mb-3">
              {legalModalTitle}
            </h3>
            <p className="text-sm text-[#6B6355] leading-relaxed mb-5">
              CloudLinks ensures 100% compliance with RBI merchant regulations and FTC/ASCI Indian affiliate disclosure norms. All creator earnings are protected and deposited directly to verified UPI / Bank accounts.
            </p>
            <button
              onClick={() => setLegalModalTitle(null)}
              className="w-full py-3 rounded-xl bg-[#1A3C34] text-[#C89B2A] font-bold text-xs cursor-pointer hover:bg-[#1A3C34]/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </footer>
  );
};

export default Footer;
