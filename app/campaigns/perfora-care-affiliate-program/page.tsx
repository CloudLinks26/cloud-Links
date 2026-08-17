import type { Metadata } from 'next';
import PerforaCareContent from './_components/PerforaCareContent';

export const metadata: Metadata = {
  title: 'Perfora Care Affiliate Program | CloudLinks',
  description: "Join the Perfora Care affiliate program and earn up to 15% commission promoting Oral Care.",
};

export default function Page() {
  return <PerforaCareContent />;
}
