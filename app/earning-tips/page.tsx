import type { Metadata } from 'next';
import EarningTipsContent from './_components/EarningTipsContent';

export const metadata: Metadata = {
  title: 'Earning Tips | LinkX',
  description: 'Learn how to maximize your earnings with our top affiliate marketing tips.',
};

export default function Page() {
  return <EarningTipsContent />;
}
