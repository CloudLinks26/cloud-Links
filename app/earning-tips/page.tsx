import type { Metadata } from 'next';
import EarningTipsContent from './_components/EarningTipsContent';

export const metadata: Metadata = {
  title: 'Earning Tips | LinkX',
  description: "Discover battle-tested tips, strategies, and insider secrets used by India's top affiliate creators to maximize their earnings on LinkX.",
};

export default function Page() {
  return <EarningTipsContent />;
}
