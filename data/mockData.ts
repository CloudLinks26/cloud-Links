import { Campaign, Testimonial, BlogPost, StatItem } from '../types/index';

export const CAMPAIGNS: Campaign[] = [
  {
    id: 'haldiram',
    name: 'Haldiram',
    category: 'Food & Snacks',
    commission: 'Up to 12%',
    avgPayout: '₹420 / sale',
    cookieDuration: '30 Days',
    logo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/3_lnmzlc.png',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    featured: true,
    popular: true,
    description: "India's iconic brand for authentic sweets, namkeens, ready-to-eat meals, and traditional snacks."
  },
  {
    id: 'ghar-soaps',
    name: 'Ghar Soaps',
    category: 'Beauty & Care',
    commission: 'Up to 10%',
    avgPayout: '₹380 / sale',
    cookieDuration: '30 Days',
    logo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/4_dy9x7w.png',
    image: 'https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    featured: true,
    popular: true,
    description: 'Natural, handcrafted skin and body care essentials blended with organic ingredients.'
  },
  {
    id: 'swiss-beauty',
    name: 'Swiss Beauty',
    category: 'Cosmetics',
    commission: 'Up to 15%',
    avgPayout: '₹250 / sale',
    cookieDuration: '24 Hours',
    logo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/1_hdkg1p.png',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    featured: true,
    popular: true,
    description: 'Trending makeup and high-performance cosmetics tailored for modern Indian beauty enthusiasts.'
  },
  {
    id: 'asaya',
    name: 'Asaya',
    category: 'Skincare',
    commission: 'Up to 8%',
    avgPayout: '₹850 / booking',
    cookieDuration: '45 Days',
    logo: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1786188928/2_kvfi70.png',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600',
    rating: 4.7,
    featured: true,
    popular: true,
    description: 'Dermatologically formulated, melanin-first skincare created specifically for Indian skin types.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    role: 'Instagram Fashion Creator',
    followers: '85K Followers',
    quote: 'CloudLinks transformed how I monetize my Instagram reels. The instant link generator lets me convert any product URL in seconds, and my UPI payouts are cleared within 24 hours!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    earnings: '₹68,400/mo'
  },
  {
    id: '2',
    name: 'Rahul Verma',
    location: 'New Delhi',
    role: 'Tech & Gadgets YouTuber',
    followers: '140K Subscribers',
    quote: 'Conversion rates on boAt, Amazon, and MakeMyTrip campaigns are unmatched. Transparent real-time analytics show every click and order live. Made ₹1.2 Lakh last month alone!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    earnings: '₹1,24,000/mo'
  },
  {
    id: '3',
    name: 'Sneha Kapoor',
    location: 'Bengaluru, Karnataka',
    role: 'Lifestyle & Beauty Blogger',
    followers: '50K Monthly Readers',
    quote: 'Switching from legacy affiliate networks to CloudLinks was the best decision. Mamaearth & Myntra commissions are super high, and the account support manager is incredibly responsive.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    earnings: '₹42,800/mo'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Ways to Earn More with Affiliate Links in 2026',
    category: 'Affiliate Tips',
    readTime: '5 mins read',
    date: 'Aug 2, 2026',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=600',
    summary: 'Discover proven content strategies to turn your WhatsApp groups, Instagram stories, and YouTube descriptions into consistent revenue streams.'
  },
  {
    id: '2',
    title: 'How Creators Are Making ₹1 Lakh/Month on CloudLinks',
    category: 'Creator Success',
    readTime: '6 mins read',
    date: 'Jul 28, 2026',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=600',
    summary: 'Step-by-step breakdown of how micro-influencers leverage festive sales and high-commission beauty campaigns to scale earnings.'
  },
  {
    id: '3',
    title: 'Best Fashion Brands to Promote This Festive Season',
    category: 'Brand Spotlight',
    readTime: '4 mins read',
    date: 'Jul 20, 2026',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600',
    summary: 'Explore exclusive commissions and boosted payout rates for Myntra, AJIO, and Tata CLiQ ethnic collection campaigns.'
  }
];

export const STATS: StatItem[] = [
  {
    icon: 'Tag',
    value: '500+',
    label: 'Top Brands',
    sublabel: 'across all categories'
  },
  {
    icon: 'Users',
    value: '10,000+',
    label: 'Creators',
    sublabel: 'earning with CloudLinks'
  },
  {
    icon: 'Wallet',
    value: '₹10Cr+',
    label: 'Paid to Creators',
    sublabel: 'till date'
  },
  {
    icon: 'ShoppingBag',
    value: '50L+',
    label: 'Orders Tracked',
    sublabel: 'and growing fast!'
  }
];

export const BRANDS_MARQUEE = [
  { name: 'Amazon.in', logo: 'amazon' },
  { name: 'Flipkart', logo: 'flipkart' },
  { name: 'AJIO', logo: 'ajio' },
  { name: 'Myntra', logo: 'myntra' },
  { name: 'Nykaa', logo: 'nykaa' },
  { name: 'MakeMyTrip', logo: 'makemytrip' },
  { name: 'boAt', logo: 'boat' },
  { name: 'Mamaearth', logo: 'mamaearth' },
  { name: 'Meesho', logo: 'meesho' },
  { name: 'Tata CLiQ', logo: 'tatacliq' }
];
