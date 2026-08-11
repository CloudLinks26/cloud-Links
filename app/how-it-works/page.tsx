import type { Metadata } from 'next';
import HowItWorksContent from './_components/HowItWorksContent';

export const metadata: Metadata = {
  title: 'How It Works | CloudLinks',
  description: 'Learn how to generate affiliate links and earn money with CloudLinks.',
};

export default function Page() {
  return <HowItWorksContent />;
}
