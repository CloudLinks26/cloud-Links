import type { Metadata } from 'next';
import BlogContent from './_components/BlogContent';

export const metadata: Metadata = {
  title: 'Affiliate Marketing Resources & Guides | CloudLinks',
  description:
    'Explore CloudLinks resources, guides, strategies, case studies, and practical tips to grow affiliate marketing campaigns, earnings, and online reach.',
};

export default function Page() {
  return <BlogContent />;
}