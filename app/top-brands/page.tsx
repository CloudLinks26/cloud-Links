import type { Metadata } from 'next';
import TopBrandsContent from './_components/TopBrandsContent';

export const metadata: Metadata = {
  title: 'Top Brands | CloudLinks',
  description: "Monetize recommendations from India's most loved e-commerce, travel, fashion, and lifestyle brands.",
};

export default function Page() {
  return <TopBrandsContent />;
}
