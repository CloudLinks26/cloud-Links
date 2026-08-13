import type { Metadata } from 'next';
// Temporary: showing a "Coming Soon" placeholder instead of the real influencer page.
// The real page is fully built and untouched at ./_components/InfluencerContent.tsx —
// to bring it back, swap this import/render back to InfluencerContent.
import ComingSoonContent from './_components/ComingSoonContent';

export const metadata: Metadata = {
  title: 'Influencer Program Coming Soon | CloudLinks',
  description: "CloudLinks' dedicated influencer program is launching soon. Check back shortly.",
};

export default function Page() {
  return <ComingSoonContent />;
}
