import type { Metadata } from 'next';
import HamersCopContent from './_components/HamersCopContent';

export const metadata: Metadata = {
  title: 'HamersCop Affiliate Program | CloudLinks',
  description: "Join the HamersCop affiliate program and earn 12% commission promoting Lifestyle & Accessories.",
};

export default function Page() {
  return <HamersCopContent />;
}
