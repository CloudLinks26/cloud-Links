import type { Metadata } from 'next';
import SaadaaContent from './_components/SaadaaContent';

export const metadata: Metadata = {
  title: 'Saadaa Affiliate Program | CloudLinks',
  description: "Join the Saadaa affiliate program and earn 7% commission promoting Ethnic Lifestyle & Home.",
};

export default function Page() {
  return <SaadaaContent />;
}
