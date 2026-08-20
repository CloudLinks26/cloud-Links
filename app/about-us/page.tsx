import type { Metadata } from 'next';
import AboutContent from './_components/AboutContent';

export const metadata: Metadata = {
  title: 'About CloudLinks: Affiliate Marketing Platform for Creators',
  description: 'Learn about CloudLinks, an affiliate marketing platform helping creators, influencers, and publishers connect with brands and earn commissions online.',
};

export default function Page() {
  return <AboutContent />;
}
