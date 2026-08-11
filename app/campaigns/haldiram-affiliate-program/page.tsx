import type { Metadata } from 'next';
import HaldiramContent from './_components/HaldiramContent';

export const metadata: Metadata = {
  title: 'Haldiram Affiliate Program | CloudLinks',
  description: "Join the Haldiram affiliate program and earn commission promoting India's most trusted snacks and sweets brand.",
};

export default function Page() {
  return <HaldiramContent />;
}
