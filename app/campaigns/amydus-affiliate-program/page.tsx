import type { Metadata } from 'next';
import AmydusContent from './_components/AmydusContent';

export const metadata: Metadata = {
  title: 'Amydus Affiliate Program | CloudLinks',
  description: "Join the Amydus affiliate program and earn 8% commission promoting Software.",
};

export default function Page() {
  return <AmydusContent />;
}
