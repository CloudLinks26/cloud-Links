import type { Metadata } from 'next';
import TermsConditionsContent from './_components/TermsConditionsContent';

export const metadata: Metadata = {
  title: 'Terms & Conditions | CloudLinks Affiliate Marketing Platform',
  description: 'Read CloudLinks Terms & Conditions covering platform usage, affiliate campaigns, commissions, accounts, responsibilities, payments, and applicable policies.',
};

export default function Page() {
  return <TermsConditionsContent />;
}
