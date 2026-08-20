import type { Metadata } from 'next';
import PrivacyPolicyContent from './_components/PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | CloudLinks Affiliate Marketing Platform',
  description: 'Read the CloudLinks Privacy Policy to learn how we collect, use, protect, and manage your personal information when you use our affiliate platform.',
};

export default function Page() {
  return <PrivacyPolicyContent />;
}
