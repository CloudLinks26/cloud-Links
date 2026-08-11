import type { Metadata } from 'next';
import EarningTipsContent from './_components/EarningTipsContent';

export const metadata: Metadata = {
  title: 'Earning Tips | CloudLinks',
  description: "Discover battle-tested tips, strategies, and insider secrets used by India's top affiliate creators to maximize their earnings on CloudLinks.",
};

export default function Page() {
  return <EarningTipsContent />;
}
