import type { Metadata } from 'next';
import PelagoContent from './_components/PelagoContent';

export const metadata: Metadata = {
  title: 'Pelago Affiliate Program | CloudLinks',
  description: "Join the Pelago affiliate program and earn 4% - 12% commission promoting Travel & Experiences.",
};

export default function Page() {
  return <PelagoContent />;
}
