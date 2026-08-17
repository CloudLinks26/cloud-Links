import type { Metadata } from 'next';
import AnydeskContent from './_components/AnydeskContent';

export const metadata: Metadata = {
  title: 'Anydesk Affiliate Program | CloudLinks',
  description: "Join the Anydesk affiliate program and earn 8% commission promoting Software.",
};

export default function Page() {
  return <AnydeskContent />;
}
