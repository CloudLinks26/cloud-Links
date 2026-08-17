import type { Metadata } from 'next';
import AJIOContent from './_components/AJIOContent';

export const metadata: Metadata = {
  title: 'AJIO Affiliate Program | CloudLinks',
  description: "Join the AJIO affiliate program and earn 5% commission promoting Fashion.",
};

export default function Page() {
  return <AJIOContent />;
}
