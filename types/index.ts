export interface Campaign {
  id: string;
  name: string;
  category: string;
  commission: string;
  oldUserCommission?: string;
  avgPayout: string;
  cookieDuration: string;
  logo: string;
  image: string;
  rating: number;
  featured?: boolean;
  popular?: boolean;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  followers: string;
  quote: string;
  rating: number;
  avatar: string;
  earnings: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
  summary: string;
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
  sublabel?: string;
}
