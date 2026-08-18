import type { Metadata } from 'next';
import ZoukContent from './_components/ZoukContent';

export const metadata: Metadata = {
  title: 'ZOUK Affiliate Program | CloudLinks',
  description: "Join the ZOUK affiliate program and earn 17% commission promoting Vegan Fashion Accessories.",
};

export default function Page() {
  return <ZoukContent />;
}
