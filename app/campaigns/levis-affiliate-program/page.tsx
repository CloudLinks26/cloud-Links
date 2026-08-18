import type { Metadata } from 'next';
import LevisContent from './_components/LevisContent';

export const metadata: Metadata = {
  title: 'Levi\'s Affiliate Program | CloudLinks',
  description: "Join the Levi\'s affiliate program and earn 17% commission promoting Fashion (Denim & Apparel).",
};

export default function Page() {
  return <LevisContent />;
}
