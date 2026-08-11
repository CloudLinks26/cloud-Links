import type { Metadata } from 'next';
import AsayaContent from './_components/AsayaContent';

export const metadata: Metadata = {
  title: 'Asaya Affiliate Program | CloudLinks',
  description: "Join the Asaya affiliate program and earn up to 35% commission promoting India's dermatologist-backed skincare brand.",
};

export default function Page() {
  return <AsayaContent />;
}
