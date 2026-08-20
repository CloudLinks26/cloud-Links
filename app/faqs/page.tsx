import type { Metadata } from 'next';
import FAQsContent from './_components/FAQsContent';

export const metadata: Metadata = {
  title: 'CloudLinks FAQs: Affiliate Marketing & Earnings Guide',
  description: 'Find answers to common CloudLinks questions about affiliate campaigns, links, commissions, tracking, payouts, account setup, and earning opportunities.',
};

export default function Page() {
  return <FAQsContent />;
}
