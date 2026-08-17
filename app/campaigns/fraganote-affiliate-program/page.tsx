import type { Metadata } from 'next';
import FraganoteContent from './_components/FraganoteContent';

export const metadata: Metadata = {
  title: 'Fraganote Affiliate Program | CloudLinks',
  description: "Join the Fraganote affiliate program and earn 8% commission promoting Fragrances.",
};

export default function Page() {
  return <FraganoteContent />;
}
