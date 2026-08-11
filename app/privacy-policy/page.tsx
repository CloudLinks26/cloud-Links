import type { Metadata } from 'next';
import PrivacyPolicyContent from './_components/PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | CloudLinks',
  description: 'Privacy Policy and data handling practices at CloudLinks.',
};

export default function Page() {
  return <PrivacyPolicyContent />;
}
