import type { Metadata } from 'next';
import EarningTipsContent from './_components/EarningTipsContent';

export const metadata: Metadata = {
  title: 'Affiliate Marketing Tips to Earn More Money | CloudLinks',
  description: "Discover practical affiliate marketing tips to increase clicks, conversions, and commissions. Learn how creators and publishers can maximize their earnings.",
};

export default function Page() {
  return <EarningTipsContent />;
}
