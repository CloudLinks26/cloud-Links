import type { Metadata } from 'next';
import Link from 'next/link';
import { Link2Off, ArrowRight, Home, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page Not Found | LinkX',
  description: "The page you're looking for doesn't exist or may have moved.",
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#FDFAF4] overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Gold Dotted Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C89B2A 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto text-center space-y-6 py-24">
        {/* Gold Outlined Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C89B2A]/15 border border-[#C89B2A]/40 text-[#C89B2A] text-xs font-extrabold uppercase tracking-wider">
          <span>Error 404</span>
        </div>

        {/* Icon Badge */}
        <div className="mx-auto w-20 h-20 rounded-2xl bg-[#1A3C34] flex items-center justify-center shadow-warm">
          <Link2Off className="w-9 h-9 text-[#C89B2A]" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-black font-display text-[#1A3C34] tracking-tight">
          This Link Doesn't Exist
        </h1>

        {/* Gold Underline Accent */}
        <div className="w-16 h-1 bg-[#C89B2A] mx-auto rounded-full" />

        {/* Subtext */}
        <p className="text-sm sm:text-base text-[#6B6355] font-medium max-w-md mx-auto leading-relaxed">
          Looks like this page got lost, moved, or never existed — but there are 500+ real earning opportunities waiting for you on LinkX.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/campaigns"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border-2 border-[#1A3C34] text-[#1A3C34] hover:bg-[#1A3C34] hover:text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Browse Campaigns</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
