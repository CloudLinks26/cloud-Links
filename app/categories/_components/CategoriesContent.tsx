'use client';
import React from 'react';
import { useGlobalContext } from '@/components/GlobalProvider';
import { ShoppingBag, Shirt, Smartphone, Plane, Sparkles, Heart, ArrowRight } from 'lucide-react';

export default function CategoriesContent() {
  const { onOpenLinkGen } = useGlobalContext();
  const categoryList = [
    {
      name: 'Fashion & Apparel',
      icon: Shirt,
      commission: 'Up to 15%',
      topBrands: ['Myntra', 'AJIO', 'Nykaa Fashion', 'Urbanic', 'Max Fashion'],
      description: 'High converting clothing, footwear, and accessory offers with seasonal sales spikes.',
    },
    {
      name: 'Electronics & Audio',
      icon: Smartphone,
      commission: 'Up to 12%',
      topBrands: ['boAt', 'Samsung', 'Noise', 'Realme', 'Fire-Boltt'],
      description: 'Popular earbuds, smartwatches, headphones, and mobile accessories.',
    },
    {
      name: 'Travel & Holidays',
      icon: Plane,
      commission: 'Up to 10%',
      topBrands: ['MakeMyTrip', 'Goibibo', 'Yatra', 'Cleartrip', 'Booking.com'],
      description: 'Flight bookings, hotel stays, bus tickets, and holiday packages.',
    },
    {
      name: 'Beauty & Personal Care',
      icon: Heart,
      commission: 'Up to 20%',
      topBrands: ['Mamaearth', 'Nykaa', 'Dot & Key', 'Plum', 'The Derma Co'],
      description: 'High re-order rate skincare, haircare, cosmetics, and wellness products.',
    },
    {
      name: 'General E-Commerce',
      icon: ShoppingBag,
      commission: 'Up to 10%',
      topBrands: ['Amazon.in', 'Flipkart', 'Meesho', 'Tata CLiQ'],
      description: 'Promote anything from daily essentials to gadgets on India’s largest marketplaces.',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#F5F0E8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A3C34]/10 text-[#1A3C34] text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B2A]" />
            Category Directory
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1A3C34]">
            Browse by Niche & Category
          </h1>
          <p className="text-base text-[#6B6355]">
            Find the highest paying affiliate campaigns matching your content niche.
          </p>
        </div>

        {/* Categories List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categoryList.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-[#FDFAF4] rounded-3xl border border-[#E8E2D6] p-8 space-y-6 shadow-warm-hover flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#1A3C34] text-[#C89B2A] font-sora font-extrabold text-xs">
                      {cat.commission}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-[#1A3C34]">
                    {cat.name}
                  </h3>

                  <p className="text-sm text-[#6B6355] leading-relaxed">
                    {cat.description}
                  </p>

                  <div>
                    <span className="text-xs font-bold text-[#1A3C34] uppercase tracking-wider block mb-2">
                      Top Brands in Niche:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cat.topBrands.map((brand) => (
                        <span
                          key={brand}
                          onClick={() => onOpenLinkGen(brand)}
                          className="px-3 py-1 bg-[#F5F0E8] rounded-lg border border-[#E8E2D6] text-xs font-bold text-[#1A3C34] hover:text-[#C89B2A] cursor-pointer transition-colors"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenLinkGen(cat.topBrands[0])}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2 group mt-4"
                >
                  <span>Explore {cat.name} Offers</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
