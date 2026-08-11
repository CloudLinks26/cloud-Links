import type { Metadata } from 'next';
import CampaignsContent from './_components/CampaignsContent';

export const metadata: Metadata = {
  title: 'Campaigns | CloudLinks',
  description: 'Browse 500+ top Indian brands and start earning high commissions with CloudLinks.',
};

export default function Page() {
  return <CampaignsContent />;
}
