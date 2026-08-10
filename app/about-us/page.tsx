import type { Metadata } from 'next';
import AboutContent from './_components/AboutContent';

export const metadata: Metadata = {
  title: 'About Us | LinkX',
  description: 'Learn more about LinkX, India\'s fastest growing affiliate network.',
};

export default function Page() {
  return <AboutContent />;
}
