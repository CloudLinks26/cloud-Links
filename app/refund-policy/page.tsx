import type { Metadata } from 'next';
import RefundPolicyContent from './_components/RefundPolicyContent';

export const metadata: Metadata = {
  title: 'Refund & Reversal Policy | CloudLinks Affiliate Platform',
  description:
    'Learn how CloudLinks handles refunds, cancellations, returns, and commission reversals for affiliate transactions, including applicable terms and policies.',
};

export default function Page() {
  return <RefundPolicyContent />;
}