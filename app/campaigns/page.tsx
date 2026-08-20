import type { Metadata } from 'next';
import CampaignsContent from './_components/CampaignsContent';

export const metadata: Metadata = {
  title: 'Affiliate Campaigns & Brand Deals for Creators | CloudLinks',
  description: 'Explore affiliate campaigns from top brands on CloudLinks. Choose campaigns, generate affiliate links, promote products, and earn commissions from sales.',
};

export default function Page() {
  return <CampaignsContent />;
}
