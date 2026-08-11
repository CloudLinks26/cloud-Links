import type { Metadata } from 'next';
import GharSoapsContent from './_components/GharSoapsContent';

export const metadata: Metadata = {
  title: 'Ghar Soaps Affiliate Program | CloudLinks',
  description: 'Join the Ghar Soaps affiliate program and earn up to 10% commission promoting India\'s home-grown natural soap brand.',
};

export default function Page() {
  return <GharSoapsContent />;
}
