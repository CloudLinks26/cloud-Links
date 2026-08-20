import type { Metadata } from 'next';
import KKDaysContent from './_components/KKDaysContent';

export const metadata: Metadata = {
  title: 'KK Days Affiliate Program | CloudLinks',
  description: "Join the KK Days affiliate program and earn 1% - 4% commission promoting Travel & Experiences.",
};

export default function Page() {
  return <KKDaysContent />;
}
