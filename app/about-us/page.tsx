import type { Metadata } from 'next';
import AboutContent from './_components/AboutContent';

export const metadata: Metadata = {
  title: 'About Us | CloudLinks',
  description: 'Learn more about CloudLinks, India\'s fastest growing affiliate network.',
};

export default function Page() {
  return <AboutContent />;
}
