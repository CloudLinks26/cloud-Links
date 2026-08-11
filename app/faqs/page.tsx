import type { Metadata } from 'next';
import FAQsContent from './_components/FAQsContent';

export const metadata: Metadata = {
  title: 'FAQs | CloudLinks',
  description: 'Frequently Asked Questions about CloudLinks platform, payments, and tracking.',
};

export default function Page() {
  return <FAQsContent />;
}
