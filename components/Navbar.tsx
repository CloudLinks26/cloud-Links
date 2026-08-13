'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, Sparkles } from 'lucide-react';
import { useGlobalContext } from './GlobalProvider';

export const Navbar: React.FC = () => {
  const { onOpenAuth, onOpenLinkGen, searchTerm, setSearchTerm } = useGlobalContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchTerm);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(localSearchQuery);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? 'bg-[#F5F0E8]/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D6] py-3.5'
        : 'bg-[#F5F0E8] border-b border-[#E8E2D6]/60 py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">

          {/* LOGO */}
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group shrink-0"
          >
            <img
              src="https://res.cloudinary.com/couponsbit/image/upload/v1786449391/logo_wtzdye.png"
              alt="CloudLinks"
              className="h-16 w-auto object-contain group-hover:scale-105 transition-transform"
            />
           
          </Link>

          {/* CENTER NAV LINKS (Home omitted on desktop; logo serves as home) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10">
            <Link
              href="/campaigns"
              className={`text-base font-semibold transition-colors ${pathname === '/campaigns' ? 'text-[#C89B2A]' : 'text-[#1A3C34] hover:text-[#C89B2A]'
                }`}
            >
              Campaigns
            </Link>
            <Link
              href="/how-it-works"
              className={`text-base font-semibold transition-colors ${pathname === '/how-it-works' ? 'text-[#C89B2A]' : 'text-[#1A3C34] hover:text-[#C89B2A]'
                }`}
            >
              How it Works
            </Link>
            <Link
              href="/influencer"
              className={`text-base font-semibold transition-colors ${pathname === '/influencer' ? 'text-[#C89B2A]' : 'text-[#1A3C34] hover:text-[#C89B2A]'
                }`}
            >
              Influencers
            </Link>
            <Link
              href="/payouts"
              className={`text-base font-semibold transition-colors ${pathname === '/payouts' ? 'text-[#C89B2A]' : 'text-[#1A3C34] hover:text-[#C89B2A]'
                }`}
            >
              Payouts
            </Link>
            {/* <Link
              href="/blog"
              className={`text-base font-semibold transition-colors ${pathname === '/resources' ? 'text-[#C89B2A]' : 'text-[#1A3C34] hover:text-[#C89B2A]'
                }`}
            >
              Resources
            </Link> */}
          </nav>

          {/* RIGHT CTA BAR */}
          <div className="hidden lg:flex items-center gap-4">
  {/* Login */}
  <a
    href="https://analytics.trackier.io/"
    className="px-6 py-2.5 rounded-full border-2 border-[#1A3C34] text-[#1A3C34] hover:bg-[#1A3C34] hover:text-white text-sm font-bold transition-all cursor-pointer shadow-xs"
  >
    Login
  </a>

  {/* Join Now / Sign Up */}
  <a
    href="https://analytics.trackier.io/register.html"
    className="px-7 py-2.5 rounded-full bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
  >
    Join Now
  </a>
</div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenLinkGen()}
              className="p-2.5 rounded-xl bg-[#C89B2A]/20 text-[#1A3C34] font-bold text-xs"
            >
              <Sparkles className="w-5 h-5 text-[#C89B2A]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-[#E8E2D6] text-[#1A3C34] hover:bg-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFAF4] border-b border-[#E8E2D6] px-4 pt-4 pb-6 space-y-4 animate-fade-in shadow-lg">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search Myntra, boAt, MakeMyTrip..."
              value={localSearchQuery}
              onChange={(e) => {
                setLocalSearchQuery(e.target.value);
                setSearchTerm(e.target.value);
              }}
              className="w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-white border border-[#E8E2D6] text-[#1A3C34]"
            />
            <Search className="w-4 h-4 text-[#6B6355] absolute left-3.5 top-3.5" />
          </form>

          <div className="grid grid-cols-2 gap-2.5 text-sm font-semibold text-[#1A3C34]">
            {/* Home included for Mobile UX */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3.5 text-left bg-white rounded-xl border border-[#E8E2D6] hover:border-[#C89B2A]"
            >
              Home
            </Link>
            <Link
              href="/campaigns"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3.5 text-left bg-white rounded-xl border border-[#E8E2D6] hover:border-[#C89B2A]"
            >
              Campaigns
            </Link>
            <Link
              href="/how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3.5 text-left bg-white rounded-xl border border-[#E8E2D6] hover:border-[#C89B2A]"
            >
              How It Works
            </Link>
            <Link
              href="/influencer"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3.5 text-left bg-white rounded-xl border border-[#E8E2D6] hover:border-[#C89B2A]"
            >
              Influencers
            </Link>
            <Link
              href="/payouts"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3.5 text-left bg-white rounded-xl border border-[#E8E2D6] hover:border-[#C89B2A]"
            >
              Payouts
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3.5 text-left bg-white rounded-xl border border-[#E8E2D6] hover:border-[#C89B2A]"
            >
              Resources
            </Link>
            <Link
              href="/about-us"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3.5 text-left bg-white rounded-xl border border-[#E8E2D6] hover:border-[#C89B2A] col-span-2"
            >
              About Us
            </Link>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('login');
              }}
              className="flex-1 py-3 rounded-full border-2 border-[#1A3C34] text-[#1A3C34] text-sm font-bold text-center"
            >
              Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('signup', 'creator');
              }}
              className="flex-1 py-3 rounded-full bg-[#C89B2A] text-[#1A3C34] text-sm font-bold text-center shadow-md"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
