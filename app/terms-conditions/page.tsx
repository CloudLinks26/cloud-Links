import type { Metadata } from 'next';
import TermsConditionsContent from './_components/TermsConditionsContent';

export const metadata: Metadata = {
  title: 'Terms & Conditions | LinkX',
  description: 'These terms govern your use of our affiliate marketing platform, campaigns, and payout services.',
};

export default function Page() {
  return <TermsConditionsContent />;
}
