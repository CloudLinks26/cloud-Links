import type { Metadata } from 'next';
import InfluencerContent from './_components/InfluencerContent';

export const metadata: Metadata = {
  title: 'For Influencers | CloudLinks',
  description: 'Join thousands of influencers monetizing their audience with CloudLinks.',
};

export default function Page() {
  return <InfluencerContent />;
}
