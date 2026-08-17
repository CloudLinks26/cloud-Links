import type { Metadata } from 'next';
import FirstCryContent from './_components/FirstCryContent';

export const metadata: Metadata = {
  title: 'FirstCry Affiliate Program | CloudLinks',
  description: "Join the FirstCry affiliate program and earn 45% commission promoting Baby & Kids.",
};

export default function Page() {
  return <FirstCryContent />;
}
