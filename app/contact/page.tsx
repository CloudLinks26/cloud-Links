import type { Metadata } from 'next';
import ContactContent from './_components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | CloudLinks',
  description: 'Get in touch with the CloudLinks team.',
};

export default function Page() {
  return <ContactContent />;
}
