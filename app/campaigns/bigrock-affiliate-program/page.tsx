import type { Metadata } from 'next';
import BigRockContent from './_components/BigRockContent';

export const metadata: Metadata = {
  title: 'BigRock Affiliate Program | CloudLinks',
  description: "Join the BigRock affiliate program and earn 6% - 40% commission promoting Software.",
};

export default function Page() {
  return <BigRockContent />;
}
