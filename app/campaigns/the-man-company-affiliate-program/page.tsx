import type { Metadata } from 'next';
import TheManCompanyContent from './_components/TheManCompanyContent';

export const metadata: Metadata = {
  title: 'The Man Company Affiliate Program | CloudLinks',
  description: "Join the The Man Company affiliate program and earn 17% commission promoting Men\'s Grooming.",
};

export default function Page() {
  return <TheManCompanyContent />;
}
