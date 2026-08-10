import type { Metadata } from 'next';
import TipsToEarnMoreContent from './_components/TipsToEarnMoreContent';

export const metadata: Metadata = {
  title: 'Tips to Earn More | LinkX',
  description: "Discover battle-tested tips, strategies, and insider secrets used by India's top affiliate creators to maximize their earnings on LinkX.",
};

export default function Page() {
  return <TipsToEarnMoreContent />;
}
