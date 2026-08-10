'use client';

import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, Sparkles, HelpCircle } from 'lucide-react';
import { BLOG_POSTS } from '@/data/mockData';
import { BlogPost } from '@/types';

export const BlogContent: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const faqs = [
    {
      question: 'Is LinkX completely free to join?',
      answer: 'Yes! LinkX is 100% free for all creators, influencers, bloggers, and deals publishers. There are no registration or maintenance fees.',
    },
    {
      question: 'Do I need a minimum number of followers to earn?',
      answer: 'No minimum follower limit is required. Whether you have 100 friends on WhatsApp or 100k followers on Instagram, you can start sharing affiliate links immediately.',
    },
    {
      question: 'How do I get paid?',
      answer: 'Once your earnings reach ₹250, you can request a direct transfer to your UPI ID (GPay, PhonePe, Paytm) or Indian bank account.',
    },
    {
      question: 'Which brands can I promote on LinkX?',
      answer: 'You can promote over 500 top brands including Myntra, boAt, MakeMyTrip, Amazon, AJIO, Mamaearth, Nykaa, Flipkart, and many more.',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FDFAF4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A3C34]/10 text-[#1A3C34] text-xs font-extrabold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#C89B2A]" />
            Creator Learning Hub
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1A3C34]">
            Resources & Guides
          </h1>
          <p className="text-base text-[#6B6355]">
            Master affiliate marketing with actionable strategies, case studies, and growth tactics tailored for Indian creators.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-[#F5F0E8] rounded-2xl border border-[#E8E2D6] overflow-hidden shadow-warm-hover cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#1A3C34] text-[#C89B2A] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-display font-extrabold text-base text-[#1A3C34] group-hover:text-[#C89B2A] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#6B6355] leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs font-medium text-[#6B6355] border-t border-[#E8E2D6]/60">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#C89B2A]" />
                  {post.readTime}
                </span>

                <span className="text-[#1A3C34] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Article →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="bg-[#F5F0E8] rounded-3xl border border-[#E8E2D6] p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A3C34]/10 text-[#1A3C34] text-xs font-extrabold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-[#C89B2A]" />
              Got Questions?
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#1A3C34]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 space-y-2">
                <h4 className="font-display font-extrabold text-base text-[#1A3C34]">
                  {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-[#6B6355] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A3C34]/60 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#FDFAF4] rounded-2xl shadow-2xl border border-[#E8E2D6] overflow-y-auto">
            <div className="sticky top-0 z-10 flex items-center justify-between p-5 bg-[#1A3C34] text-white">
              <span className="text-xs font-bold text-[#C89B2A] uppercase tracking-wider">
                {selectedPost.category} • {selectedPost.readTime}
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-1 text-white/70 hover:text-white rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6 text-[#1A3C34]">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
                  {selectedPost.title}
                </h2>
                <span className="text-xs text-[#6B6355] block">
                  Published on {selectedPost.date} by LinkX Team
                </span>
              </div>

              <div className="h-64 rounded-2xl overflow-hidden border border-[#E8E2D6]">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm text-[#6B6355] leading-relaxed">
                {selectedPost.summary}
              </p>

              <div className="pt-4 border-t border-[#E8E2D6] flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#C89B2A] text-[#1A3C34] font-bold text-xs hover:bg-[#b08823] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogContent;
