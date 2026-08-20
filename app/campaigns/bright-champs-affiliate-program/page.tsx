import type { Metadata } from 'next';
import BrightChampsContent from './_components/BrightChampsContent';

export const metadata: Metadata = {
  title: 'Bright Champs Affiliate Program | CloudLinks',
  description: "Join the Bright Champs affiliate program and earn 14% commission promoting Education.",
};

export default function Page() {
  return <BrightChampsContent />;
}
