import type { Metadata } from 'next';
import ContactContent from './_components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | LinkX',
  description: 'Get in touch with the LinkX team.',
};

export default function Page() {
  return <ContactContent />;
}
