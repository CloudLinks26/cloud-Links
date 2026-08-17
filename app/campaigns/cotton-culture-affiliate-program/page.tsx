import type { Metadata } from 'next';
import CottonCultureContent from './_components/CottonCultureContent';

export const metadata: Metadata = {
  title: 'Cotton Culture Affiliate Program | CloudLinks',
  description: "Join the Cotton Culture affiliate program and earn 12% commission promoting Home & Furnishing.",
};

export default function Page() {
  return <CottonCultureContent />;
}
