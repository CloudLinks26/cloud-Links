import type { Metadata } from 'next';
import CookiesPolicyContent from './_components/CookiesPolicyContent';

export const metadata: Metadata = {
  title: 'Cookies Policy | CloudLinks',
  description: 'Cookies policy for CloudLinks users.',
};

export default function Page() {
  return <CookiesPolicyContent />;
}
