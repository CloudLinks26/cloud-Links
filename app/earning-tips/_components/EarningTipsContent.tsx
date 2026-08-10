'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGlobalContext } from '@/components/GlobalProvider';
import {
  Lightbulb,
  Search,
  Sparkles,
  Send,
  Link2,
  Calendar,
  ArrowRight,
  ChevronRight,
  Star,
  CheckCircle2,
  Bookmark,
  Share2,
  SendHorizontal,
  Crown,
  Target,
  TrendingUp,
  Repeat,
  Layers,
  Zap,
  Copy,
  Video,
  List,
  Film,
  Camera,
  PlayCircle,
  Globe,
  Users,
  BarChart2,
  Award,
  Gift,
  Mail,
  Check,
  ShieldCheck,
  RotateCcw,
  Flame,
  Clock,
  HelpCircle,
  X,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface EarningTipsProps {
  onOpenAuth?: (mode: 'signin' | 'signup') => void;
  onOpenLinkGen?: (brandName?: string) => void;
}

interface TipItem {
  id: number;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Pro';
  icon: React.ElementType;
  title: string;
  desc: string;
  fullContent?: string;
  readTime: string;
  tags: string[];
}

export default function EarningTipsContent() {
  const { onOpenAuth, onOpenLinkGen } = useGlobalContext();
  const router = useRouter();

  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);
  const [savedTips, setSavedTips] = useState<number[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedTip, setSelectedTip] = useState<TipItem | null>(null);

  // Tip of the Day Index
  const [todayTipIndex, setTodayTipIndex] = useState(0);
  const [isSavedTipOfDay, setIsSavedTipOfDay] = useState(false);

  // Goal cards expand states
  const [expandedGoal, setExpandedGoal] = useState<number | null>(2); // Default expand ₹25,000

  // Newsletter Email
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribedNewsletter, setSubscribedNewsletter] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const categories = [
    'All',
    'Link Strategy',
    'Content Tips',
    'Platform Hacks',
    'Niche Selection',
    'Festival Season',
    'Passive Income',
    'Beginner Basics'
  ];

  const popularTags = [
    'Instagram',
    'YouTube',
    'Beginners',
    'High Commission',
    'Telegram',
    'Festival Season',
    'Passive Income',
    'Link Strategy'
  ];

  // 24 Detailed Tip Cards Data
  const tipsData: TipItem[] = [
    // Link Strategy (6 cards)
    {
      id: 1,
      category: 'Link Strategy',
      level: 'Beginner',
      icon: Link2,
      title: 'Add Links to Every Platform Profile',
      desc: 'Your Instagram bio, YouTube about page, Telegram channel profile, and WhatsApp status are all free digital real estate. Fill them all with your LinkX custom affiliate links to capture every click.',
      fullContent: 'Start by updating your primary bio links across all social channels. Every time a new follower visits your profile, your bio link is their first point of contact. Ensure you use clear call-to-action text like "Shop My Daily Recommendations Below 👇".',
      readTime: '3 min',
      tags: ['Instagram', 'YouTube', 'Beginners', 'Link Strategy']
    },
    {
      id: 2,
      category: 'Link Strategy',
      level: 'Intermediate',
      icon: Layers,
      title: 'Stack Multiple Links in One Bio',
      desc: 'Use a single link-in-bio hub page to showcase 5–10 different brand affiliate links under one master URL. More options directly correlate to higher conversion rates across diverse audiences.',
      fullContent: 'When promoting multiple fashion or tech items, forcing your audience to choose only one link lowers engagement. By creating a unified landing page with LinkX shortlinks categorized into "Outfit of the Day", "Tech Setup", and "Skincare Favs", you give users the exact link they are looking for.',
      readTime: '5 min',
      tags: ['Instagram', 'Link Strategy', 'Passive Income']
    },
    {
      id: 3,
      category: 'Link Strategy',
      level: 'Pro',
      icon: TrendingUp,
      title: 'A/B Test Your Link Placements',
      desc: 'Test the same affiliate link in 3 different positions in your content (top caption, pinned comment, or story sticker). Track which exact placement drives the highest click-through rate.',
      fullContent: 'Data proves that link position matters immensely. On YouTube, pinned comments beat description links by 300%. On Instagram, Story link stickers placed on the bottom right thumb zone outperform top-left stickers.',
      readTime: '7 min',
      tags: ['Link Strategy', 'High Commission', 'YouTube']
    },
    {
      id: 4,
      category: 'Link Strategy',
      level: 'Beginner',
      icon: Share2,
      title: 'Share in WhatsApp Groups Daily',
      desc: 'Join 10–15 active niche WhatsApp groups. Share relevant curated deals daily during peak engagement windows (8:00 AM, 1:00 PM, and 9:00 PM) for immediate high-intent conversion spikes.',
      fullContent: 'WhatsApp has an incredible 98% open rate in India. Create a broadcast list or dedicated deals group. Instead of dropping raw links, share a quick 2-line personal review along with the discount percentage.',
      readTime: '3 min',
      tags: ['Beginners', 'Link Strategy', 'High Commission']
    },
    {
      id: 5,
      category: 'Link Strategy',
      level: 'Intermediate',
      icon: Copy,
      title: 'Create Evergreen Link Posts',
      desc: 'Publish one well-written, comprehensive review post per brand. It continues driving search traffic and automated commissions for months with zero extra daily maintenance.',
      fullContent: 'Evergreen content like "Top 5 Laptops for College Students Under ₹40,000" continues to gain organic search hits month after month. Keep the links updated on LinkX so you never lose out on expired brand promotions.',
      readTime: '6 min',
      tags: ['Link Strategy', 'Passive Income', 'High Commission']
    },
    {
      id: 6,
      category: 'Link Strategy',
      level: 'Pro',
      icon: Zap,
      title: 'Use Custom Tags for Deep Tracking',
      desc: 'Organize your generated shortlinks with custom campaign tags. Track precisely which social post, story highlight, or platform source is generating your commission payouts.',
      fullContent: 'By labeling links with campaign tags (e.g., `insta_reel_may` vs `telegram_blast_9am`), you can analyze your LinkX dashboard performance report and double down exclusively on your highest-yielding channels.',
      readTime: '8 min',
      tags: ['Link Strategy', 'High Commission', 'Pro']
    },

    // Content Tips (4 cards)
    {
      id: 7,
      category: 'Content Tips',
      level: 'Beginner',
      icon: Video,
      title: 'Record a 60-Second Honest Review',
      desc: 'Short, authentic 60-second video reviews on Instagram Reels or YouTube Shorts outperform polished studio advertisements by 4x for direct affiliate purchases.',
      fullContent: 'Unboxing videos showing real product usage with genuine pros and cons build immediate buyer confidence. Keep the tone conversational and highlight "Where to Buy" in the caption.',
      readTime: '4 min',
      tags: ['Instagram', 'YouTube', 'Beginners', 'Content Tips']
    },
    {
      id: 8,
      category: 'Content Tips',
      level: 'Intermediate',
      icon: Star,
      title: 'Create a "My Favorite Products" Post',
      desc: 'Curated personal lists feel authentic and non-salesy. Highlighting items you actually use daily consistently drives high-quality, high-trust buyer clicks.',
      fullContent: 'Instead of pushing random brand deals, group 3–5 items into a theme like "My Daily Work From Home Setup". Buyers are 3x more likely to buy multiple items in one order.',
      readTime: '5 min',
      tags: ['Content Tips', 'Instagram', 'Link Strategy']
    },
    {
      id: 9,
      category: 'Content Tips',
      level: 'Intermediate',
      icon: List,
      title: 'Top 5 Lists Convert Like Crazy',
      desc: '"Top 5 Skincare Products Under ₹500" — numbered list posts are highly shareable, easy to consume, and drive massive traffic to your affiliate links.',
      fullContent: 'Listicles satisfy buyer curiosity quickly. Structure your post with clear price points, key benefits, and direct LinkX shortlinks for each of the 5 recommendations.',
      readTime: '5 min',
      tags: ['Content Tips', 'High Commission', 'Beginners']
    },
    {
      id: 10,
      category: 'Content Tips',
      level: 'Pro',
      icon: Film,
      title: 'Before & After Content Formula',
      desc: 'Show visually striking before-and-after results (e.g. room makeover, skincare progress). This format delivers maximum emotional resonance and highest conversion rates.',
      fullContent: 'Visual transformation content triggers impulse purchase decisions. Pair the dramatic visual transition with a clear overlay text: "Products Used Linked in Bio & Comments".',
      readTime: '6 min',
      tags: ['Content Tips', 'High Commission', 'Instagram']
    },

    // Platform Hacks (4 cards)
    {
      id: 11,
      category: 'Platform Hacks',
      level: 'Beginner',
      icon: Camera,
      title: 'Use Instagram Story Link Stickers',
      desc: 'Interactive link stickers placed directly on Instagram Stories are the single highest-converting placement on the entire platform for instant affiliate sales.',
      fullContent: 'Combine the Link Sticker with a polling sticker (e.g. "Want the 40% Off Code? Yes / Show Me") to boost story reach by 80% before driving traffic to the link.',
      readTime: '3 min',
      tags: ['Instagram', 'Platform Hacks', 'Beginners']
    },
    {
      id: 12,
      category: 'Platform Hacks',
      level: 'Intermediate',
      icon: PlayCircle,
      title: 'Pin Your Link in YouTube Comments',
      desc: 'A pinned comment featuring your LinkX affiliate shortlink appears at the top of the comment section on every video. One setup = lifetime passive clicks.',
      fullContent: 'Over 60% of YouTube mobile viewers check comments before or while watching. Pinning your affiliate link with a coupon code discount message maximizes immediate conversions.',
      readTime: '4 min',
      tags: ['YouTube', 'Platform Hacks', 'Passive Income']
    },
    {
      id: 13,
      category: 'Platform Hacks',
      level: 'Intermediate',
      icon: Send,
      title: 'Telegram Scheduled Posts = Passive Income',
      desc: 'Schedule 30 days of curated daily deal posts in advance using Telegram auto-posting tools. Your channel generates affiliate commissions while you sleep.',
      fullContent: 'Telegram allows rich media posts with inline instant buy buttons. Pre-schedule morning deal roundups on sale days to catch buyers right as they wake up.',
      readTime: '6 min',
      tags: ['Telegram', 'Platform Hacks', 'Passive Income']
    },
    {
      id: 14,
      category: 'Platform Hacks',
      level: 'Pro',
      icon: Globe,
      title: 'Write SEO Blog Reviews for Organic Traffic',
      desc: 'A well-optimized product review blog post ranks on Google search for years — bringing in steady stream of buyer intent traffic and passive monthly commissions.',
      fullContent: 'Target long-tail keywords like "Is [Brand] Worth It India Review 2026". Organic search visitors have 5x higher purchase intent compared to casual social media scrollers.',
      readTime: '10 min',
      tags: ['Platform Hacks', 'Passive Income', 'High Commission']
    },

    // Niche Selection (4 cards)
    {
      id: 15,
      category: 'Niche Selection',
      level: 'Beginner',
      icon: Target,
      title: 'Start With Brands You Already Love',
      desc: 'Authentic promotion of products you genuinely buy and use converts 5x better than pushing random high-commission campaigns without personal experience.',
      fullContent: 'Audiences pick up on insincerity instantly. Audit your recent online orders on Myntra, Flipkart, or Amazon, find those campaigns on LinkX, and share genuine user insights.',
      readTime: '3 min',
      tags: ['Beginners', 'Niche Selection', 'Link Strategy']
    },
    {
      id: 16,
      category: 'Niche Selection',
      level: 'Intermediate',
      icon: Users,
      title: 'Match Your Niche to Audience Needs',
      desc: 'A tech-focused audience converts best for electronics and gadgets, while beauty followers convert for skincare. Alignment between content and offer is everything.',
      fullContent: 'Run Instagram story polls or Telegram surveys asking your audience "What products are you shopping for this month?". Use the poll results to choose your LinkX brand partnerships.',
      readTime: '5 min',
      tags: ['Niche Selection', 'Instagram', 'YouTube']
    },
    {
      id: 17,
      category: 'Niche Selection',
      level: 'Intermediate',
      icon: BarChart2,
      title: 'High Commission vs High Volume Niches',
      desc: 'Finance and BFSI campaigns pay ₹500+ per lead but have lower conversion volume. Fashion pays 10-15% but converts rapidly. Balance both in your strategy.',
      fullContent: 'Mix 80% high-volume daily deals (fashion, beauty, groceries) to maintain steady payouts with 20% high-ticket commission offers (appliances, financial products) for big earnings spikes.',
      readTime: '6 min',
      tags: ['Niche Selection', 'High Commission', 'Link Strategy']
    },
    {
      id: 18,
      category: 'Niche Selection',
      level: 'Pro',
      icon: Award,
      title: 'Own a Micro-Niche Completely',
      desc: 'Being the go-to authority for "budget college skincare under ₹300" beats being a generic lifestyle creator every single time in overall conversion rates.',
      fullContent: 'Micro-niche creators build deep trust. Brands actively seek micro-niche creators because their audience engagement and purchase conversion percentages far exceed broad accounts.',
      readTime: '7 min',
      tags: ['Niche Selection', 'High Commission', 'Pro']
    },

    // Festival Season (3 cards)
    {
      id: 19,
      category: 'Festival Season',
      level: 'Intermediate',
      icon: Calendar,
      title: 'Plan Your Festival Calendar 60 Days Ahead',
      desc: 'Map out Diwali, Great Indian Festival, Big Billion Days, and End of Season Sales 60 days in advance. Pre-create content templates for instant deployment.',
      fullContent: 'During major shopping festivals, consumer spending spikes by 400%. Creators who prepare curated product lists and deals pre-loaded on LinkX earn 8x their standard monthly income.',
      readTime: '5 min',
      tags: ['Festival Season', 'High Commission', 'Link Strategy']
    },
    {
      id: 20,
      category: 'Festival Season',
      level: 'Pro',
      icon: TrendingUp,
      title: 'Stack Campaigns During Big Sale Days',
      desc: 'Promote Myntra, Flipkart, Nykaa, and Amazon simultaneously during major sales. Give your followers comparative choices to capture every shopping dollar.',
      fullContent: 'Create a single comparison post ("Where to get the lowest price on smartphones this Diwali"). Provide shortlinks for all 3 major platforms so no matter where they buy, you earn.',
      readTime: '8 min',
      tags: ['Festival Season', 'High Commission', 'Pro']
    },
    {
      id: 21,
      category: 'Festival Season',
      level: 'Pro',
      icon: Gift,
      title: 'Gift Guide Content = Festival Goldmine',
      desc: '"Best Diwali Gifts Under ₹2,000 for Family" guides generate massive search traffic right when purchase intent and budget allocation are at peak levels.',
      fullContent: 'Gift guides solve a stressful problem for shoppers. Categorize gifts by relationship ("Gifts for Parents", "Gifts for Coworkers") and include direct checkout shortlinks.',
      readTime: '7 min',
      tags: ['Festival Season', 'Content Tips', 'High Commission']
    },

    // Passive Income (3 cards)
    {
      id: 22,
      category: 'Passive Income',
      level: 'Intermediate',
      icon: Repeat,
      title: 'Build a Dedicated Deals Telegram Channel',
      desc: 'A Telegram deals group with 10,000+ members sharing daily price drops generates fully passive income. Set up once, automate posts, and collect monthly payouts.',
      fullContent: 'Telegram allows direct instant notifications without algorithm suppression. Top deal channels earn ₹30,000 to ₹1,00,000/month by curating 5 high-discount offers daily.',
      readTime: '6 min',
      tags: ['Telegram', 'Passive Income', 'High Commission']
    },
    {
      id: 23,
      category: 'Passive Income',
      level: 'Pro',
      icon: Bookmark,
      title: 'Create an Instagram "Best Deals" Highlight',
      desc: 'A permanent Instagram Story Highlight named "🔥 Top Deals" drives commissions 24/7 from every new profile visitor long after original stories expire.',
      fullContent: 'Organize your Story Highlights into clear categories: "Skincare Deals", "Tech Codes", "Fashion Must-Haves". Update the link stickers regularly via your LinkX dashboard.',
      readTime: '4 min',
      tags: ['Instagram', 'Passive Income', 'Link Strategy']
    },
    {
      id: 24,
      category: 'Passive Income',
      level: 'Pro',
      icon: Layers,
      title: 'Build an Email List of Deal Seekers',
      desc: 'An email newsletter list of 5,000 engaged deal shoppers is worth more than 100,000 casual social followers because you own the direct communication line.',
      fullContent: 'Send a weekly Friday newsletter titled "Top 10 Weekend Discounts You Can\'t Miss". Include direct affiliate shortlinks to featured products for consistent weekly revenue.',
      readTime: '9 min',
      tags: ['Passive Income', 'High Commission', 'Pro']
    }
  ];

  // Tip of the Day Items
  const tipOfDayList = [
    {
      date: 'Today\'s Tip — August 7, 2026',
      level: '🚀 Intermediate',
      title: 'Post at 9:00 AM & 8:00 PM for Maximum Reach',
      body: 'Data from over 10,000 Indian creators shows social media traffic peaks twice daily: 9–11 AM (commute & morning coffee) and 8–10 PM (post-dinner relaxing). Publishing affiliate deal content during these exact windows doubles click-through rates.',
      impact: 3
    },
    {
      date: 'Yesterday\'s Tip — August 6, 2026',
      level: '🌱 Beginner',
      title: 'Include Price & Discount Percentage in Link Text',
      body: 'Posts that specify "Flat 50% Off | Only ₹499" get 3.5x more clicks than generic "Check Out This Product" links. Specific monetary savings trigger instant curiosity.',
      impact: 3
    },
    {
      date: 'Upcoming Tip — August 8, 2026',
      level: '⭐ Pro',
      title: 'Pin Your Best Converting Reel to the Top of Your Grid',
      body: 'Pinning your highest-earning product review video as one of the 3 top posts on your Instagram profile converts 15% of all new profile visitors into link clickers.',
      impact: 3
    }
  ];

  // Quick 60-Second Mini Tips (12 items)
  const quickMiniTips = [
    { icon: Link2, title: 'Custom Link Names', desc: 'Use your name or brand in the shortlink URL to build instant audience trust.', time: '1 min' },
    { icon: Calendar, title: 'Sunday Evening Peak', desc: 'Post online shopping deals on Sunday evenings — peak weekly buying hours.', time: '1 min' },
    { icon: ShieldCheck, title: 'Affiliate Disclosure', desc: 'Always mention "#affiliate" or "ad" — builds audience trust and complies with ASCI rules.', time: '1 min' },
    { icon: BarChart2, title: 'Monday Morning Audits', desc: 'Check your LinkX earnings analytics every Monday to optimize low-performing links.', time: '1 min' },
    { icon: HelpCircle, title: 'Reply to Comments', desc: 'Answer every product question in comments with your affiliate link attached.', time: '1 min' },
    { icon: Flame, title: 'Campaign Notifications', desc: 'Enable instant campaign alert notifications on LinkX to catch high-commission drops.', time: '1 min' },
    { icon: Video, title: 'Vertical Reel Format', desc: 'Vertical 9:16 short video product reviews get 3x more organic reach than static images.', time: '1 min' },
    { icon: Target, title: 'Focus on 3 Platforms', desc: 'Master Instagram, YouTube, and Telegram before spreading yourself too thin.', time: '1 min' },
    { icon: Sparkles, title: 'Use "Honest" in Titles', desc: 'Including the word "Honest Review" in your title increases click-throughs by 45%.', time: '1 min' },
    { icon: Zap, title: 'Weekly Payout Transfers', desc: 'Withdraw commission earnings weekly via UPI to stay motivated and track growth.', time: '1 min' },
    { icon: Clock, title: 'Weekday Morning B2B', desc: 'Promote software and finance campaigns on Tuesday/Wednesday mornings.', time: '1 min' },
    { icon: Bookmark, title: 'Keep Campaign Notes', desc: 'Maintain a quick phone note of campaigns that yielded high conversion rates.', time: '1 min' }
  ];

  // Filtering Logic
  const filteredTips = tipsData.filter((tip) => {
    // Search query filter
    const matchesSearch =
      searchQuery.trim() === '' ||
      tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    // Category filter
    const matchesCategory =
      activeCategory === 'All' ||
      (activeCategory === 'Beginner Basics'
        ? tip.level === 'Beginner'
        : tip.category.toLowerCase() === activeCategory.toLowerCase());

    // Tag filter
    const matchesTag =
      !activeTag || tip.tags.some((t) => t.toLowerCase() === activeTag.toLowerCase());

    return matchesSearch && matchesCategory && matchesTag;
  });

  const toggleSaveTip = (id: number) => {
    if (savedTips.includes(id)) {
      setSavedTips(savedTips.filter((t) => t !== id));
      showToast('Tip removed from saved bookmarks');
    } else {
      setSavedTips([...savedTips, id]);
      showToast('Tip saved to your bookmarks! 🔖');
    }
  };

  const handleShareTip = (title: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`Check out this earning tip on LinkX: "${title}" - https://linkx.in/earning-tips`);
      showToast('Tip link copied to clipboard! 📋');
    } else {
      showToast('Tip shared!');
    }
  };

  return (
    <div className="bg-[#F5F0E8] min-h-screen text-[#1A3C34] font-sans selection:bg-[#C89B2A]/20 pb-20">

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1A3C34] text-white px-5 py-3 rounded-2xl shadow-xl border border-[#C89B2A]/40 flex items-center gap-3 animate-bounce">
          <Sparkles className="w-5 h-5 text-[#C89B2A]" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* TIP DETAILS MODAL */}
      {selectedTip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-[#FDFAF4] border border-[#E8E2D6] rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedTip(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F5F0E8] text-[#6B6355] hover:text-[#1A3C34] hover:bg-[#E8E2D6] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${
                selectedTip.level === 'Beginner' ? 'bg-[#2D7A4F]/15 text-[#2D7A4F]' :
                selectedTip.level === 'Intermediate' ? 'bg-[#C89B2A]/15 text-[#C89B2A]' :
                'bg-[#1A3C34]/15 text-[#1A3C34]'
              }`}>
                {selectedTip.level}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#1A3C34]/5 text-[#6B6355] text-[11px] font-bold">
                {selectedTip.category}
              </span>
              <span className="text-xs text-[#6B6355] font-semibold ml-auto flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#C89B2A]" />
                {selectedTip.readTime} read
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#C89B2A]/15 text-[#C89B2A] flex items-center justify-center flex-shrink-0">
                  <selectedTip.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#1A3C34] font-display">
                  {selectedTip.title}
                </h3>
              </div>
              <p className="text-sm text-[#6B6355] font-medium leading-relaxed">
                {selectedTip.desc}
              </p>
            </div>

            {selectedTip.fullContent && (
              <div className="p-4 rounded-2xl bg-[#F5F0E8] border border-[#E8E2D6] space-y-2">
                <h4 className="text-xs font-black uppercase text-[#1A3C34] tracking-wider flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-[#C89B2A]" />
                  Deep-Dive Execution Strategy
                </h4>
                <p className="text-xs sm:text-sm text-[#1A3C34] leading-relaxed">
                  {selectedTip.fullContent}
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E8E2D6]">
              <span className="text-xs font-bold text-[#6B6355] self-center mr-1">Tags:</span>
              {selectedTip.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-lg bg-[#F5F0E8] text-[#6B6355] text-[11px] font-semibold">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => toggleSaveTip(selectedTip.id)}
                className={`px-4 py-2.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  savedTips.includes(selectedTip.id)
                    ? 'bg-[#C89B2A] border-[#C89B2A] text-[#1A3C34]'
                    : 'border-[#E8E2D6] text-[#1A3C34] hover:bg-[#F5F0E8]'
                }`}
              >
                <Bookmark className="w-4 h-4" />
                {savedTips.includes(selectedTip.id) ? 'Saved' : 'Save Tip'}
              </button>

              <button
                onClick={() => {
                  setSelectedTip(null);
                  if (onOpenAuth) onOpenAuth('signup');
                  else router.push('/campaigns');
                }}
                className="px-6 py-2.5 rounded-xl bg-[#1A3C34] text-white hover:bg-[#122b25] text-xs font-black transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Apply This Tip on LinkX</span>
                <ArrowRight className="w-4 h-4 text-[#C89B2A]" />
              </button>
            </div>
          </div>
        </div>
      )}


      {/* ========================================== */}
      {/* SECTION 1 — HERO HEADER                    */}
      {/* ========================================== */}
      <section className="bg-[#F5F0E8] pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Background Decorative Faint Elements */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[#C89B2A]/5 pointer-events-none">
          <Lightbulb className="w-96 h-96" />
        </div>
        <div className="absolute top-12 left-8 text-[#C89B2A]/15 text-2xl font-black pointer-events-none hidden sm:block rotate-12">
          ₹
        </div>
        <div className="absolute bottom-12 right-12 text-[#C89B2A]/15 text-3xl font-black pointer-events-none hidden sm:block -rotate-12">
          ₹
        </div>
        <div className="absolute top-20 right-16 text-[#1A3C34]/10 pointer-events-none hidden md:block">
          <TrendingUp className="w-16 h-16" />
        </div>

        {/* Top Dot Grid Pattern */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#1A3C34 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          {/* Gold Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C89B2A]/15 border border-[#C89B2A]/40 text-[#C89B2A] text-xs font-extrabold uppercase tracking-wider">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Handpicked by Top Indian Creators</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight leading-tight">
            <span className="text-[#1A3C34] block">Smarter Tips.</span>
            <span className="text-[#C89B2A] block">Bigger Earnings.</span>
          </h1>

          {/* Gold Underline Accent */}
          <div className="w-20 h-1.5 bg-[#C89B2A] mx-auto rounded-full my-2" />

          {/* Subtext */}
          <p className="text-sm sm:text-base lg:text-lg text-[#6B6355] font-medium max-w-2xl mx-auto leading-relaxed">
            A curated collection of the most powerful earning strategies, hacks, and insider tips — organized by topic, level, and platform so you find exactly what you need.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto pt-4">
            <div className="relative flex items-center bg-[#FDFAF4] rounded-2xl border-2 border-[#E8E2D6] shadow-md focus-within:border-[#C89B2A] transition-all overflow-hidden p-1.5">
              <Search className="w-5 h-5 text-[#6B6355] ml-3 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tips by topic, platform, or keyword..."
                className="w-full px-3 py-2 text-sm text-[#1A3C34] placeholder-[#6B6355]/70 bg-transparent focus:outline-none font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-[#6B6355] hover:text-[#1A3C34] mr-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => {
                  const el = document.getElementById('tips-grid-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-xs transition-all flex items-center gap-2 flex-shrink-0 shadow-sm cursor-pointer"
              >
                <span>Search</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Popular Tag Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-[#6B6355] mr-1">Popular:</span>
            {popularTags.map((tag) => {
              const isActive = activeTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => {
                    if (isActive) {
                      setActiveTag(null);
                    } else {
                      setActiveTag(tag);
                      setSearchQuery('');
                      const el = document.getElementById('tips-grid-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#C89B2A] border-[#C89B2A] text-white shadow-xs'
                      : 'border-[#1A3C34]/20 text-[#1A3C34] hover:border-[#C89B2A] hover:text-[#C89B2A] bg-white/50'
                  }`}
                >
                  #{tag}
                </button>
              );
            })}
            {activeTag && (
              <button
                onClick={() => setActiveTag(null)}
                className="text-xs font-bold text-[#C89B2A] underline ml-2 cursor-pointer"
              >
                Clear Tag Filter
              </button>
            )}
          </div>
        </div>
      </section>


      {/* ========================================== */}
      {/* SECTION 2 — LIVE STATS TICKER              */}
      {/* ========================================== */}
      <section className="bg-[#1A3C34] text-white py-4 overflow-hidden border-y border-[#C89B2A]/30">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-8 text-xs sm:text-sm font-bold tracking-wide text-[#F5F0E8]">
            <span className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-[#C89B2A]" />
              Creators using these tips earn 3x more on average
            </span>
            <span className="text-[#C89B2A]">•</span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#C89B2A]" />
              Tip #4 alone helped 500+ creators cross ₹10,000/month
            </span>
            <span className="text-[#C89B2A]">•</span>
            <span className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#C89B2A]" />
              Festival season tips drive 8x normal earnings
            </span>
            <span className="text-[#C89B2A]">•</span>
            <span className="flex items-center gap-2">
              <Link2 className="w-4 h-4 text-[#C89B2A]" />
              Bio link strategy = most used tip by top earners
            </span>
            <span className="text-[#C89B2A]">•</span>
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4 text-[#C89B2A]" />
              Telegram tips have generated ₹2Cr+ in commissions on LinkX
            </span>
            <span className="text-[#C89B2A]">•</span>
          </div>

          <div className="flex items-center gap-8 text-xs sm:text-sm font-bold tracking-wide text-[#F5F0E8] ml-8" aria-hidden="true">
            <span className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-[#C89B2A]" />
              Creators using these tips earn 3x more on average
            </span>
            <span className="text-[#C89B2A]">•</span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#C89B2A]" />
              Tip #4 alone helped 500+ creators cross ₹10,000/month
            </span>
            <span className="text-[#C89B2A]">•</span>
            <span className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#C89B2A]" />
              Festival season tips drive 8x normal earnings
            </span>
            <span className="text-[#C89B2A]">•</span>
            <span className="flex items-center gap-2">
              <Link2 className="w-4 h-4 text-[#C89B2A]" />
              Bio link strategy = most used tip by top earners
            </span>
            <span className="text-[#C89B2A]">•</span>
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4 text-[#C89B2A]" />
              Telegram tips have generated ₹2Cr+ in commissions on LinkX
            </span>
            <span className="text-[#C89B2A]">•</span>
          </div>
        </div>
      </section>


      {/* ========================================== */}
      {/* SECTION 3 — FEATURED TIP CARDS (TOP 3)    */}
      {/* ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-[#1A3C34] flex items-center gap-2">
              <span>🔥 Trending This Week</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6355] font-medium mt-1">
              The 3 highest-converting strategies implemented by creators this past week
            </p>
          </div>

          <button
            onClick={() => {
              setActiveCategory('All');
              setActiveTag(null);
              setSearchQuery('');
              const el = document.getElementById('tips-grid-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs font-black text-[#C89B2A] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>View all tips</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Large Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Featured Card 1 */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#1A3C34] to-[#2D7A4F] text-white relative overflow-hidden shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group border border-[#C89B2A]/30">
            <div className="absolute top-4 right-4 bg-[#C89B2A] text-[#1A3C34] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              🔥 #1 This Week
            </div>
            <Send className="absolute -bottom-6 -right-6 w-36 h-36 text-white/5 pointer-events-none group-hover:scale-110 transition-transform" />

            <div className="space-y-4 relative z-10">
              <div className="inline-block px-3 py-1 rounded-full bg-[#C89B2A]/20 text-[#C89B2A] text-xs font-extrabold border border-[#C89B2A]/40">
                🚀 Intermediate
              </div>

              <h3 className="text-xl sm:text-2xl font-black font-display leading-snug">
                The Telegram Goldmine Strategy
              </h3>

              <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
                How one creator built a 20K member Telegram channel and now earns ₹40,000/month on complete autopilot.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white text-[11px] font-bold">
                  👥 20K Members
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white text-[11px] font-bold">
                  💰 ₹40K/Month
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white text-[11px] font-bold">
                  ⏱ 8 min read
                </span>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={() => setSelectedTip(tipsData[21])}
                className="w-full py-3 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-xs transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Read Full Tip</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Featured Card 2 */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#C89B2A] to-[#8C6718] text-white relative overflow-hidden shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group border border-white/20">
            <div className="absolute top-4 right-4 bg-[#1A3C34] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              ⭐ #2 This Week
            </div>
            <Link2 className="absolute -bottom-6 -right-6 w-36 h-36 text-white/10 pointer-events-none group-hover:scale-110 transition-transform" />

            <div className="space-y-4 relative z-10">
              <div className="inline-block px-3 py-1 rounded-full bg-[#2D7A4F] text-white text-xs font-extrabold border border-white/30">
                🌱 Beginner
              </div>

              <h3 className="text-xl sm:text-2xl font-black font-display leading-snug">
                The Instagram Bio Link Hack
              </h3>

              <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed">
                Turn your single Instagram bio link into a multi-brand earning machine using a free link-in-bio tool.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="px-2.5 py-1 rounded-lg bg-black/15 text-white text-[11px] font-bold">
                  📈 980 Conversions
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-black/15 text-white text-[11px] font-bold">
                  💰 ₹45K/Month
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-black/15 text-white text-[11px] font-bold">
                  ⏱ 5 min read
                </span>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={() => setSelectedTip(tipsData[1])}
                className="w-full py-3 rounded-xl bg-[#1A3C34] hover:bg-[#122b25] text-white font-black text-xs transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Read Full Tip</span>
                <ArrowRight className="w-4 h-4 text-[#C89B2A]" />
              </button>
            </div>
          </div>

          {/* Featured Card 3 */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#1A3C34] to-[#0F2621] text-white relative overflow-hidden shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group border border-[#C89B2A]/30">
            <div className="absolute top-4 right-4 bg-[#C89B2A] text-[#1A3C34] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              🎯 #3 This Week
            </div>
            <Calendar className="absolute -bottom-6 -right-6 w-36 h-36 text-white/5 pointer-events-none group-hover:scale-110 transition-transform" />

            <div className="space-y-4 relative z-10">
              <div className="inline-block px-3 py-1 rounded-full bg-[#1A3C34] text-[#C89B2A] text-xs font-extrabold border border-[#C89B2A]/40">
                ⭐ Pro
              </div>

              <h3 className="text-xl sm:text-2xl font-black font-display leading-snug">
                The Festival Season Formula
              </h3>

              <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
                Plan 60 days ahead of Diwali, Holi, and Big Billion Days — and earn 8x your normal monthly income.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white text-[11px] font-bold">
                  📅 60 Days Ahead
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white text-[11px] font-bold">
                  💰 8x Earnings
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white text-[11px] font-bold">
                  ⏱ 10 min read
                </span>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={() => setSelectedTip(tipsData[18])}
                className="w-full py-3 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-xs transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Read Full Tip</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* SECTION 4 — TIP CATEGORIES FILTER + GRID  */}
      {/* ========================================== */}
      <section id="tips-grid-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl sm:text-4xl font-black font-display">
            <span className="text-[#1A3C34]">All Earning Tips </span>
            <span className="text-[#C89B2A]">by Topic</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6355] font-medium max-w-xl mx-auto">
            Filter strategies by your focus area, experience level, or platform to find actionable step-by-step guides.
          </p>
        </div>

        {/* Horizontal Category Filter Tabs */}
        <div className="sticky top-16 z-20 bg-[#F5F0E8]/95 backdrop-blur-md py-3 -mx-4 px-4 sm:mx-0 sm:px-0 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(9);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#C89B2A] text-[#1A3C34] shadow-md scale-105'
                      : 'bg-[#FDFAF4] border border-[#E8E2D6] text-[#6B6355] hover:text-[#1A3C34] hover:border-[#C89B2A]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Filters Display & Count Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#FDFAF4] p-4 rounded-2xl border border-[#E8E2D6] mb-8 text-xs font-semibold text-[#6B6355]">
          <div>
            Showing <span className="font-black text-[#1A3C34] text-sm">{filteredTips.length}</span> tips
            {activeCategory !== 'All' && <span> in <span className="text-[#C89B2A] font-bold">{activeCategory}</span></span>}
            {activeTag && <span> tagged <span className="text-[#C89B2A] font-bold">#{activeTag}</span></span>}
            {searchQuery && <span> matching "<span className="text-[#1A3C34] font-bold">{searchQuery}</span>"</span>}
          </div>

          {(activeCategory !== 'All' || activeTag || searchQuery) && (
            <button
              onClick={() => {
                setActiveCategory('All');
                setActiveTag(null);
                setSearchQuery('');
              }}
              className="text-[#C89B2A] font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          )}
        </div>

        {/* 3-Column Masonry-style Grid */}
        {filteredTips.length === 0 ? (
          <div className="bg-[#FDFAF4] rounded-3xl p-12 border border-[#E8E2D6] text-center space-y-4 max-w-md mx-auto">
            <Lightbulb className="w-12 h-12 text-[#6B6355] mx-auto opacity-40" />
            <h3 className="text-lg font-black text-[#1A3C34]">No tips match your search</h3>
            <p className="text-xs text-[#6B6355]">Try resetting your search filters or searching with a broader keyword.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setActiveTag(null);
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-xl bg-[#C89B2A] text-[#1A3C34] font-black text-xs cursor-pointer"
            >
              View All Tips
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTips.slice(0, visibleCount).map((tip) => {
              const IconComp = tip.icon;
              const isSaved = savedTips.includes(tip.id);

              return (
                <div
                  key={tip.id}
                  className="bg-[#FDFAF4] rounded-2xl border border-[#E8E2D6] p-6 space-y-4 hover:border-[#C89B2A] hover:-translate-y-1 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top Header Row */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#1A3C34]/5 text-[#6B6355] text-[10px] font-extrabold uppercase tracking-wider">
                        {tip.category}
                      </span>

                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                          tip.level === 'Beginner'
                            ? 'bg-[#2D7A4F]/15 text-[#2D7A4F]'
                            : tip.level === 'Intermediate'
                            ? 'bg-[#C89B2A]/20 text-[#1A3C34]'
                            : 'bg-[#1A3C34] text-[#C89B2A]'
                        }`}
                      >
                        {tip.level}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-start gap-3 pt-1">
                      <div className="w-10 h-10 rounded-xl bg-[#C89B2A]/15 text-[#C89B2A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C89B2A] group-hover:text-[#1A3C34] transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>

                      <h3 className="text-base font-black text-[#1A3C34] font-display line-clamp-2 group-hover:text-[#C89B2A] transition-colors">
                        {tip.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#6B6355] font-medium leading-relaxed line-clamp-3">
                      {tip.desc}
                    </p>
                  </div>

                  {/* Card Footer Row */}
                  <div className="pt-4 border-t border-[#E8E2D6]/60 flex items-center justify-between text-xs font-bold text-[#6B6355]">
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-[#C89B2A]" />
                      {tip.readTime} read
                    </span>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleSaveTip(tip.id)}
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          isSaved ? 'text-[#C89B2A] bg-[#C89B2A]/15' : 'text-[#6B6355] hover:text-[#1A3C34]'
                        }`}
                        title={isSaved ? 'Saved' : 'Save tip'}
                      >
                        <Bookmark className="w-4 h-4 fill-current" />
                      </button>

                      <button
                        onClick={() => setSelectedTip(tip)}
                        className="text-[#C89B2A] font-black hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredTips.length && (
          <div className="text-center pt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 9)}
              className="px-8 py-3.5 rounded-2xl bg-[#FDFAF4] border-2 border-[#C89B2A] text-[#1A3C34] hover:bg-[#C89B2A] font-black text-xs transition-all shadow-sm cursor-pointer inline-flex items-center gap-2"
            >
              <span>Load More Tips ({filteredTips.length - visibleCount} remaining)</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>


      {/* ========================================== */}
      {/* SECTION 5 — CREATOR SPOTLIGHT             */}
      {/* ========================================== */}
      <section className="bg-[#1A3C34] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#C89B2A 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
              Tips From Real LinkX Creators
            </h2>
            <div className="w-16 h-1 bg-[#C89B2A] mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-[#F5F0E8]/80 font-medium max-w-xl mx-auto">
              These strategies come from creators already earning ₹20,000–₹1,00,000/month on LinkX
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Spotlight 1 */}
            <div className="bg-[#FDFAF4] text-[#1A3C34] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-[#E8E2D6] relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#C89B2A]/20 border-2 border-[#C89B2A] flex items-center justify-center font-black text-[#1A3C34] text-base">
                      PS
                    </div>
                    <div>
                      <h3 className="font-black text-base">Priya Sharma</h3>
                      <p className="text-xs text-[#6B6355] font-semibold">@priyasharma • Mumbai</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#C89B2A] text-[#1A3C34] text-[11px] font-black shadow-xs">
                    ₹45,000/mo
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#6B6355]">
                  Platform: <span className="text-[#1A3C34] font-bold">Instagram (45K followers)</span>
                </div>

                <blockquote className="text-xs sm:text-sm text-[#1A3C34] italic font-medium leading-relaxed pt-2 border-t border-[#E8E2D6]">
                  "I add my LinkX bio link to every single Instagram story I post — even ones not related to products. Just having it visible drove 300+ extra clicks per month."
                </blockquote>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs border-t border-[#E8E2D6]/50">
                <span className="text-[10px] font-extrabold uppercase text-[#6B6355]">Top Strategy</span>
                <span className="px-2.5 py-0.5 rounded-full border border-[#C89B2A] text-[#C89B2A] text-[10px] font-extrabold">
                  Link Strategy
                </span>
              </div>
            </div>

            {/* Spotlight 2 */}
            <div className="bg-[#FDFAF4] text-[#1A3C34] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-[#E8E2D6] relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#1A3C34]/10 border-2 border-[#1A3C34] flex items-center justify-center font-black text-[#1A3C34] text-base">
                      RV
                    </div>
                    <div>
                      <h3 className="font-black text-base">Rahul Verma</h3>
                      <p className="text-xs text-[#6B6355] font-semibold">@rahultech • Delhi</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#C89B2A] text-[#1A3C34] text-[11px] font-black shadow-xs">
                    ₹82,000/mo
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#6B6355]">
                  Platform: <span className="text-[#1A3C34] font-bold">YouTube (1.2L subscribers)</span>
                </div>

                <blockquote className="text-xs sm:text-sm text-[#1A3C34] italic font-medium leading-relaxed pt-2 border-t border-[#E8E2D6]">
                  "I pin my affiliate link in the first comment of every video and timestamp it in the description. These two steps alone doubled my commissions overnight."
                </blockquote>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs border-t border-[#E8E2D6]/50">
                <span className="text-[10px] font-extrabold uppercase text-[#6B6355]">Top Strategy</span>
                <span className="px-2.5 py-0.5 rounded-full border border-[#C89B2A] text-[#C89B2A] text-[10px] font-extrabold">
                  Platform Hacks
                </span>
              </div>
            </div>

            {/* Spotlight 3 */}
            <div className="bg-[#FDFAF4] text-[#1A3C34] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-[#E8E2D6] relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#2D7A4F]/20 border-2 border-[#2D7A4F] flex items-center justify-center font-black text-[#2D7A4F] text-base">
                      SK
                    </div>
                    <div>
                      <h3 className="font-black text-base">Sneha Kapoor</h3>
                      <p className="text-xs text-[#6B6355] font-semibold">@snehabeauty • Bangalore</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#C89B2A] text-[#1A3C34] text-[11px] font-black shadow-xs">
                    ₹38,000/mo
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#6B6355]">
                  Platform: <span className="text-[#1A3C34] font-bold">Blog + Telegram (50K reach)</span>
                </div>

                <blockquote className="text-xs sm:text-sm text-[#1A3C34] italic font-medium leading-relaxed pt-2 border-t border-[#E8E2D6]">
                  "I created a Telegram deals channel for beauty products. I now schedule posts a week in advance and the channel runs itself. Best passive income decision I ever made."
                </blockquote>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs border-t border-[#E8E2D6]/50">
                <span className="text-[10px] font-extrabold uppercase text-[#6B6355]">Top Strategy</span>
                <span className="px-2.5 py-0.5 rounded-full border border-[#C89B2A] text-[#C89B2A] text-[10px] font-extrabold">
                  Passive Income
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================== */}
      {/* SECTION 6 — TIP OF THE DAY (WIDGET)       */}
      {/* ========================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-3xl sm:text-4xl font-black font-display text-[#1A3C34]">
            Tip of the Day
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6355] font-medium">
            Refresh every day for a new actionable earning insight
          </p>
        </div>

        {/* Prominent Tip Card */}
        <div className="bg-[#FDFAF4] rounded-3xl p-6 sm:p-10 border-2 border-[#C89B2A] shadow-xl relative overflow-hidden space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="px-3.5 py-1 rounded-full bg-[#C89B2A]/15 text-[#C89B2A] text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{tipOfDayList[todayTipIndex].date}</span>
            </div>

            <div className="px-3 py-1 rounded-full bg-[#1A3C34] text-[#C89B2A] text-xs font-bold">
              {tipOfDayList[todayTipIndex].level}
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#C89B2A] text-[#1A3C34] flex items-center justify-center flex-shrink-0 shadow-md animate-pulse">
              <Lightbulb className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-black text-[#1A3C34] font-display">
                {tipOfDayList[todayTipIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6355] font-medium leading-relaxed">
                {tipOfDayList[todayTipIndex].body}
              </p>
            </div>
          </div>

          {/* Impact Meter */}
          <div className="p-4 rounded-2xl bg-[#F5F0E8] border border-[#E8E2D6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-bold text-[#1A3C34]">
            <span className="flex items-center gap-1.5 font-black text-[#C89B2A]">
              💥 Impact Level: High
            </span>
            <div className="flex items-center gap-1.5">
              <div className="w-8 h-2.5 rounded-full bg-[#C89B2A]" />
              <div className="w-8 h-2.5 rounded-full bg-[#C89B2A]" />
              <div className="w-8 h-2.5 rounded-full bg-[#C89B2A]" />
              <span className="text-[11px] text-[#6B6355] font-semibold ml-1">(3/3 Max Impact)</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#E8E2D6]">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  setIsSavedTipOfDay(!isSavedTipOfDay);
                  showToast(isSavedTipOfDay ? 'Tip unsaved' : 'Tip saved to bookmarks! 🔖');
                }}
                className={`px-5 py-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer w-full sm:w-auto ${
                  isSavedTipOfDay
                    ? 'bg-[#C89B2A] border-[#C89B2A] text-[#1A3C34]'
                    : 'border-[#C89B2A] text-[#1A3C34] hover:bg-[#C89B2A]/10'
                }`}
              >
                <Bookmark className="w-4 h-4" />
                <span>{isSavedTipOfDay ? 'Saved' : 'Save This Tip'}</span>
              </button>

              <button
                onClick={() => handleShareTip(tipOfDayList[todayTipIndex].title)}
                className="px-5 py-2.5 rounded-xl border border-[#1A3C34] text-[#1A3C34] hover:bg-[#1A3C34] hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer w-full sm:w-auto"
              >
                <Share2 className="w-4 h-4" />
                <span>Share This Tip</span>
              </button>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 text-xs font-bold text-[#C89B2A]">
              <button
                disabled={todayTipIndex === 0}
                onClick={() => setTodayTipIndex(todayTipIndex - 1)}
                className={`hover:underline cursor-pointer ${todayTipIndex === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                ← Prev Tip
              </button>
              <span className="text-[#6B6355]">|</span>
              <button
                disabled={todayTipIndex === tipOfDayList.length - 1}
                onClick={() => setTodayTipIndex(todayTipIndex + 1)}
                className={`hover:underline cursor-pointer ${todayTipIndex === tipOfDayList.length - 1 ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                Next Tip →
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================== */}
      {/* SECTION 7 — EARNING TIPS BY INCOME GOAL    */}
      {/* ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-black font-display text-[#1A3C34]">
            Tips Based on Your Goal
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6355] font-medium max-w-xl mx-auto">
            Choose your monthly income target and unlock the exact step-by-step roadmap to achieve it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Goal 1: ₹5,000 */}
          <div className="bg-[#FDFAF4] rounded-3xl p-6 sm:p-8 border border-[#E8E2D6] space-y-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#2D7A4F]/15 text-[#2D7A4F] flex items-center justify-center font-black">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#2D7A4F]">🌱 First Goal</span>
                <h3 className="text-2xl font-black text-[#1A3C34] font-display">₹5,000/Month</h3>
              </div>
            </div>

            <p className="text-xs text-[#6B6355] font-medium">
              Perfect starting roadmap for beginners launching their first affiliate links.
            </p>

            <button
              onClick={() => setExpandedGoal(expandedGoal === 1 ? null : 1)}
              className="w-full py-2.5 px-4 rounded-xl bg-[#F5F0E8] hover:bg-[#E8E2D6] text-[#1A3C34] font-black text-xs transition-colors flex items-center justify-between cursor-pointer"
            >
              <span>{expandedGoal === 1 ? 'Hide Step Action Plan' : 'Show 5 Step Action Plan'}</span>
              {expandedGoal === 1 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {expandedGoal === 1 && (
              <div className="space-y-3 pt-2 text-xs font-semibold text-[#1A3C34] border-t border-[#E8E2D6] animate-fade-in">
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#2D7A4F] text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">1</span>
                  <span>Add your LinkX bio link to all social media profiles today</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#2D7A4F] text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">2</span>
                  <span>Pick 3 brands you personally use and generate shortlinks</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#2D7A4F] text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">3</span>
                  <span>Share deals in 5 active WhatsApp groups daily at 9 AM</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#2D7A4F] text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">4</span>
                  <span>Post one honest 60-sec video review per week on Instagram</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#2D7A4F] text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">5</span>
                  <span>Check dashboard analytics every 3 days to refine placements</span>
                </div>
              </div>
            )}

            <button
              onClick={() => {
                if (onOpenAuth) onOpenAuth('signup');
                else router.push('/campaigns');
              }}
              className="w-full py-3 rounded-xl border-2 border-[#2D7A4F] text-[#2D7A4F] hover:bg-[#2D7A4F] hover:text-white font-black text-xs transition-all cursor-pointer"
            >
              Start With These Tips →
            </button>
          </div>

          {/* Goal 2: ₹25,000 (HIGHLIGHTED) */}
          <div className="bg-[#FDFAF4] rounded-3xl p-6 sm:p-8 border-2 border-[#C89B2A] space-y-6 shadow-xl relative transform md:-translate-y-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C89B2A] text-[#1A3C34] text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
              🚀 Most Popular Goal
            </div>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-12 h-12 rounded-2xl bg-[#C89B2A] text-[#1A3C34] flex items-center justify-center font-black">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#C89B2A]">Scaling Goal</span>
                <h3 className="text-2xl font-black text-[#1A3C34] font-display">₹25,000/Month</h3>
              </div>
            </div>

            <p className="text-xs text-[#6B6355] font-medium">
              For creators ready to scale from casual sharing to a consistent revenue stream.
            </p>

            <button
              onClick={() => setExpandedGoal(expandedGoal === 2 ? null : 2)}
              className="w-full py-2.5 px-4 rounded-xl bg-[#C89B2A]/15 text-[#1A3C34] font-black text-xs transition-colors flex items-center justify-between cursor-pointer"
            >
              <span>{expandedGoal === 2 ? 'Hide Step Action Plan' : 'Show 5 Step Action Plan'}</span>
              {expandedGoal === 2 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {expandedGoal === 2 && (
              <div className="space-y-3 pt-2 text-xs font-semibold text-[#1A3C34] border-t border-[#E8E2D6] animate-fade-in">
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#C89B2A] text-[#1A3C34] flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">1</span>
                  <span>Build a niche Telegram deals channel (target 5K+ members)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#C89B2A] text-[#1A3C34] flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">2</span>
                  <span>Create weekly video reviews for top 5 commission campaigns</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#C89B2A] text-[#1A3C34] flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">3</span>
                  <span>Audit LinkX analytics to drop low-performing offer links</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#C89B2A] text-[#1A3C34] flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">4</span>
                  <span>Plan content 30 days ahead of upcoming brand sale events</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#C89B2A] text-[#1A3C34] flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">5</span>
                  <span>Stack 6–8 campaigns simultaneously for income diversification</span>
                </div>
              </div>
            )}

            <button
              onClick={() => {
                if (onOpenAuth) onOpenAuth('signup');
                else router.push('/campaigns');
              }}
              className="w-full py-3 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-xs transition-all shadow-md cursor-pointer"
            >
              Level Up With These →
            </button>
          </div>

          {/* Goal 3: ₹1,00,000 */}
          <div className="bg-[#FDFAF4] rounded-3xl p-6 sm:p-8 border border-[#E8E2D6] space-y-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center font-black">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#1A3C34]">⭐ Pro Tier</span>
                <h3 className="text-2xl font-black text-[#1A3C34] font-display">₹1 Lakh Club</h3>
              </div>
            </div>

            <p className="text-xs text-[#6B6355] font-medium">
              Advanced strategies for full-time creators building passive digital businesses.
            </p>

            <button
              onClick={() => setExpandedGoal(expandedGoal === 3 ? null : 3)}
              className="w-full py-2.5 px-4 rounded-xl bg-[#F5F0E8] hover:bg-[#E8E2D6] text-[#1A3C34] font-black text-xs transition-colors flex items-center justify-between cursor-pointer"
            >
              <span>{expandedGoal === 3 ? 'Hide Step Action Plan' : 'Show 5 Step Action Plan'}</span>
              {expandedGoal === 3 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {expandedGoal === 3 && (
              <div className="space-y-3 pt-2 text-xs font-semibold text-[#1A3C34] border-t border-[#E8E2D6] animate-fade-in">
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">1</span>
                  <span>Own a micro-niche completely — become THE trusted expert</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">2</span>
                  <span>Build SEO blog review content for organic Google traffic</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">3</span>
                  <span>Run dedicated festival campaigns starting 60 days in advance</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">4</span>
                  <span>Build an email subscriber list of 5,000 active deal shoppers</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1A3C34] text-[#C89B2A] flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">5</span>
                  <span>Reinvest 10% of monthly earnings into content production quality</span>
                </div>
              </div>
            )}

            <button
              onClick={() => {
                if (onOpenAuth) onOpenAuth('signup');
                else router.push('/campaigns');
              }}
              className="w-full py-3 rounded-xl border-2 border-[#1A3C34] text-[#1A3C34] hover:bg-[#1A3C34] hover:text-white font-black text-xs transition-all cursor-pointer"
            >
              Go Pro With These →
            </button>
          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* SECTION 8 — QUICK TIPS TICKER (60-SEC)    */}
      {/* ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-3xl sm:text-4xl font-black font-display text-[#1A3C34]">
            60-Second Quick Wins
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6355] font-medium">
            Fast, high-impact changes you can implement in under 1 minute right now
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickMiniTips.map((tip, idx) => {
            const IconComp = tip.icon;
            return (
              <div
                key={idx}
                className="bg-[#FDFAF4] rounded-2xl p-4 border border-[#E8E2D6] hover:border-[#C89B2A] hover:-translate-y-0.5 transition-all shadow-2xs flex items-start gap-3 group"
              >
                <div className={`p-2.5 rounded-xl flex-shrink-0 ${idx % 2 === 0 ? 'bg-[#C89B2A]/15 text-[#C89B2A]' : 'bg-[#1A3C34]/10 text-[#1A3C34]'}`}>
                  <IconComp className="w-4 h-4" />
                </div>

                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xs font-black text-[#1A3C34] truncate group-hover:text-[#C89B2A] transition-colors">
                      {tip.title}
                    </h3>
                    <span className="px-1.5 py-0.5 rounded-md bg-[#1A3C34]/5 text-[#6B6355] text-[9px] font-bold flex-shrink-0">
                      {tip.time}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6B6355] font-medium leading-normal line-clamp-2">
                    {tip.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* ========================================== */}
      {/* SECTION 9 — NEWSLETTER CTA                */}
      {/* ========================================== */}
      <section className="bg-[#EDE8DC] py-20 px-4 sm:px-6 lg:px-8 my-10 border-y border-[#E8E2D6]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Visual Illustration */}
          <div className="bg-[#1A3C34] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden space-y-6 shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-[#C89B2A] text-[#1A3C34] flex items-center justify-center font-black shadow-md">
              <Lightbulb className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black font-display leading-tight text-white">
                Weekly Creator Digest
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-medium">
                Get handpicked strategies sent directly to your inbox every Thursday morning.
              </p>
            </div>

            {/* Floating Tip Pills */}
            <div className="space-y-2.5 pt-2">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs text-xs font-bold flex items-center justify-between border border-white/10">
                <span className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-[#C89B2A]" />
                  Tip #12: Story Sticker Hack
                </span>
                <span className="text-[10px] text-[#C89B2A] font-black">HIGH IMPACT</span>
              </div>

              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs text-xs font-bold flex items-center justify-between border border-white/10">
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#C89B2A]" />
                  High Commission Alert: Myntra 15%
                </span>
                <span className="text-[10px] text-white/70 font-semibold">NEW</span>
              </div>
            </div>
          </div>

          {/* Right Form Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full bg-[#C89B2A]/20 border border-[#C89B2A]/40 text-[#1A3C34] text-xs font-black uppercase tracking-wider">
                📩 Free Weekly Newsletter
              </span>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-[#1A3C34]">
                Never Miss an Earning Tip
              </h2>

              <p className="text-xs sm:text-sm text-[#6B6355] font-medium leading-relaxed">
                Join 10,000+ creators receiving our weekly digest of high-commission campaign drops, algorithm hacks, and festival strategies.
              </p>
            </div>

            {/* Benefit Checkmarks */}
            <ul className="space-y-2.5 text-xs font-bold text-[#1A3C34]">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2D7A4F] flex-shrink-0" />
                <span>Weekly curated earning tips by top Indian creators</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2D7A4F] flex-shrink-0" />
                <span>Instant notifications on brand commission percentage spikes</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2D7A4F] flex-shrink-0" />
                <span>Diwali & festival season pre-planning cheat sheets</span>
              </li>
            </ul>

            {/* Subscribe Form */}
            {subscribedNewsletter ? (
              <div className="p-4 rounded-2xl bg-[#2D7A4F]/15 border border-[#2D7A4F]/40 text-[#2D7A4F] text-xs font-bold flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0" />
                <span>Awesome! You are subscribed. Check your inbox for this week's tips.</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail) {
                    setSubscribedNewsletter(true);
                    showToast('Successfully subscribed to weekly tips! 📩');
                  }
                }}
                className="flex flex-col sm:flex-row gap-2 max-w-md"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="px-4 py-3 rounded-xl bg-[#FDFAF4] border-2 border-[#E8E2D6] focus:border-[#C89B2A] text-xs text-[#1A3C34] focus:outline-none flex-1 font-medium shadow-2xs"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-xs transition-all shadow-md flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
                >
                  <span>Get Weekly Tips</span>
                  <SendHorizontal className="w-4 h-4" />
                </button>
              </form>
            )}

            <p className="text-[11px] text-[#6B6355] font-medium">
              Join 10,000+ creators. Zero spam. Unsubscribe anytime with one click.
            </p>
          </div>

        </div>
      </section>


      {/* ========================================== */}
      {/* SECTION 10 — BOTTOM CTA BANNER             */}
      {/* ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="bg-[#1A3C34] rounded-3xl p-8 sm:p-14 text-white text-center relative overflow-hidden space-y-8 shadow-2xl border border-[#C89B2A]/40">
          {/* Decorative Pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#C89B2A 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
              Tips Are Only Useful<br />When You Act on Them.
            </h2>

            <p className="text-xs sm:text-base text-white/80 font-medium max-w-xl mx-auto leading-relaxed">
              Start applying these strategies today on LinkX — 500+ top brand campaigns, instant automated UPI payouts, and real earnings waiting for you.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => {
                if (onOpenAuth) onOpenAuth('signup');
                else router.push('/campaigns');
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C89B2A] hover:bg-[#b08823] text-[#1A3C34] font-black text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Start Earning Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => router.push('/campaigns')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-white/30 text-white hover:bg-white/10 font-black text-sm transition-all cursor-pointer"
            >
              Browse All Campaigns
            </button>
          </div>

          {/* 3 Trust Badges */}
          <div className="relative z-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-white/80">
            <span className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-[#C89B2A]" />
              500+ Campaigns to Apply Tips To
            </span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#C89B2A]" />
              Instant UPI Payouts
            </span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C89B2A]" />
              100% Free Forever
            </span>
          </div>
        </div>
      </section>

    </div>
  );
};
