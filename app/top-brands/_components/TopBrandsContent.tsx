'use client';

import React from 'react';
import { Tag, ArrowRight, Sparkles } from 'lucide-react';
import { BRANDS_MARQUEE, CAMPAIGNS } from '@/data/mockData';
import { useGlobalContext } from '@/components/GlobalProvider';

export const TopBrandsContent: React.FC = () => {
  const { onOpenLinkGen } = useGlobalContext();
  return (
    <div className="pt-28 pb-20 bg-[#FDFAF4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A3C34]/10 text-[#1A3C34] text-xs font-extrabold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5 text-[#C89B2A]" />
            500+ Partnered Stores
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1A3C34]">
            Top Brands on CloudLinks
          </h1>
          <p className="text-base text-[#6B6355]">
            Monetize recommendations from India's most loved e-commerce, travel, fashion, and lifestyle brands.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {CAMPAIGNS.map((brand) => (
            <div
              key={brand.id}
              onClick={() => onOpenLinkGen(brand.name)}
              className="bg-[#F5F0E8] rounded-2xl border border-[#E8E2D6] p-6 text-center space-y-4 hover:border-[#C89B2A] transition-all cursor-pointer shadow-warm-hover group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#E8E2D6] p-2 flex items-center justify-center mx-auto shadow-sm overflow-hidden">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div>
                <h3 className="font-display font-extrabold text-base text-[#1A3C34] group-hover:text-[#C89B2A] transition-colors">
                  {brand.name}
                </h3>
                <span className="text-xs font-semibold text-[#6B6355] block mt-0.5">
                  {brand.category}
                </span>
              </div>

              <div className="p-2.5 bg-[#FDFAF4] rounded-xl border border-[#E8E2D6]">
                <span className="text-xs text-[#6B6355] block">Commission Rate</span>
                <span className="font-sora font-extrabold text-sm text-[#C89B2A]">
                  {brand.commission}
                </span>
              </div>

              <button className="w-full py-2 bg-[#1A3C34] text-[#C89B2A] text-xs font-bold rounded-xl flex items-center justify-center gap-1 group-hover:bg-[#C89B2A] group-hover:text-[#1A3C34] transition-colors">
                <span>Promote Link</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Complete Brand Directory Marquee */}
        <div className="bg-[#F5F0E8] rounded-3xl border border-[#E8E2D6] p-8 space-y-6 text-center">
          <h3 className="font-display font-extrabold text-xl text-[#1A3C34]">
            And 500+ More Brands Available in CloudLinks Dashboard
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {BRANDS_MARQUEE.map((b) => (
              <span
                key={b.name}
                onClick={() => onOpenLinkGen(b.name)}
                className="px-4 py-2 bg-[#FDFAF4] rounded-xl border border-[#E8E2D6] text-xs font-extrabold text-[#1A3C34] hover:text-[#C89B2A] cursor-pointer transition-colors shadow-2xs"
              >
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBrandsContent;
