import type { Metadata } from 'next';
import CookiesPolicyContent from './_components/CookiesPolicyContent';

export const metadata: Metadata = {
  title: 'Cookies Policy | CloudLinks Affiliate Platform',
  description:
    'Learn how CloudLinks uses cookies and similar technologies to improve platform functionality, user experience, analytics, and affiliate tracking.',
};

export default function Page() {
  return <CookiesPolicyContent />;
}