import type { Metadata } from 'next';
import CategoriesContent from './_components/CategoriesContent';

export const metadata: Metadata = {
  title: 'Categories | LinkX',
  description: 'Browse top earning categories on LinkX.',
};

export default function Page() {
  return <CategoriesContent />;
}
