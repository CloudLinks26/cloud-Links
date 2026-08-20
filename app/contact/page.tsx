import type { Metadata } from 'next';
import ContactContent from './_components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | CloudLinks Affiliate Platform',
  description:
    'Contact the CloudLinks team for questions about affiliate marketing, campaigns, accounts, commissions, partnerships, or platform support.',
};

export default function Page() {
  return <ContactContent />;
}