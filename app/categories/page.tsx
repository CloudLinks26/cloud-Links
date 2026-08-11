import type { Metadata } from 'next';
import CategoriesContent from './_components/CategoriesContent';

export const metadata: Metadata = {
  title: 'Categories | CloudLinks',
  description: 'Browse top earning categories on CloudLinks.',
};

export default function Page() {
  return <CategoriesContent />;
}
