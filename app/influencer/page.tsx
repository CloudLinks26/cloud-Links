import type { Metadata } from 'next';
// Temporary: showing a "Coming Soon" placeholder instead of the real influencer page.
// The real page is fully built and untouched at ./_components/InfluencerContent.tsx —
// to bring it back, swap this import/render back to InfluencerContent.
import ComingSoonContent from './_components/ComingSoonContent';

export const metadata: Metadata = {
  title: 'CloudLinks Influencer Program | Coming Soon',
  description:
    'The CloudLinks Influencer Program is coming soon. Discover upcoming opportunities for creators to partner with brands, promote campaigns, and earn through affiliate marketing.',
};

export default function Page() {
  return <ComingSoonContent />;
}