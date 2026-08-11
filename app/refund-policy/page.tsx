import type { Metadata } from 'next';
import RefundPolicyContent from './_components/RefundPolicyContent';

export const metadata: Metadata = {
  title: 'Refund & Reversal Policy | CloudLinks',
  description: 'CloudLinks is a free platform — learn how product returns and cancellations affect your affiliate commissions.',
};

export default function Page() {
  return <RefundPolicyContent />;
}
