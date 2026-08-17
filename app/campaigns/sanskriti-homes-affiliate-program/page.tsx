import type { Metadata } from 'next';
import SanskritiHomesContent from './_components/SanskritiHomesContent';

export const metadata: Metadata = {
  title: 'Sanskriti Homes Affiliate Program | CloudLinks',
  description: "Join the Sanskriti Homes affiliate program and earn 17% commission promoting Home Decor.",
};

export default function Page() {
  return <SanskritiHomesContent />;
}
