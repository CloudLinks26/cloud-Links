import type { Metadata } from 'next';
import CategoriesContent from './_components/CategoriesContent';

export const metadata: Metadata = {
  title: 'Affiliate Marketing Categories | CloudLinks',
  description:
    'Explore CloudLinks affiliate marketing categories to discover trending niches, campaigns, brands, and earning opportunities for creators and affiliates.',
};

export default function Page() {
  return <CategoriesContent />;
}