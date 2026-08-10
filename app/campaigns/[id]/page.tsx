import type { Metadata } from 'next';
import CampaignDetailContent from './_components/CampaignDetailContent';

export const metadata: Metadata = {
  title: 'Campaign Details | LinkX',
  description: 'View commission rates, allowed traffic sources, and performance metrics for this campaign.',
};

export default function Page() {
  return <CampaignDetailContent />;
}
