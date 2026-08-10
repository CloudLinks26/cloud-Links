import type { Metadata } from 'next';
import PrivacyPolicyContent from './_components/PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | LinkX',
  description: 'Privacy Policy and data handling practices at LinkX.',
};

export default function Page() {
  return <PrivacyPolicyContent />;
}
