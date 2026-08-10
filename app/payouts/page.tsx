import type { Metadata } from 'next';
import PayoutsContent from './_components/PayoutsContent';

export const metadata: Metadata = {
  title: 'Payouts | LinkX',
  description: 'Learn about our fast and reliable payout methods via UPI and Bank Transfer.',
};

export default function Page() {
  return <PayoutsContent />;
}
