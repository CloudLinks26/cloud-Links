import type { Metadata } from 'next';
import CookiesPolicyContent from './_components/CookiesPolicyContent';

export const metadata: Metadata = {
  title: 'Cookies Policy | LinkX',
  description: 'Cookies policy for LinkX users.',
};

export default function Page() {
  return <CookiesPolicyContent />;
}
