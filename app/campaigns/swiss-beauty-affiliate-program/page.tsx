import type { Metadata } from 'next';
import SwissBeautyContent from './_components/SwissBeautyContent';

export const metadata: Metadata = {
  title: 'Swiss Beauty Affiliate Program | CloudLinks',
  description: "Join the Swiss Beauty affiliate program and earn commission promoting India's trend-forward affordable makeup brand.",
};

export default function Page() {
  return <SwissBeautyContent />;
}
