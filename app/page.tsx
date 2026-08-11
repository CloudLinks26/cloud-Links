import type { Metadata } from 'next';
import HomePageContent from './_components/HomePageContent';
export const metadata: Metadata = {
  title: 'CloudLinks — Earn by Sharing',
  description: 'India\'s most trusted affiliate marketing and creator monetization platform.',
};

export default function Page() {
  return <HomePageContent />;
}
