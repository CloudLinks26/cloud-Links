import type { Metadata } from 'next';
import BlogContent from './_components/BlogContent';

export const metadata: Metadata = {
  title: 'Resources & Guides | CloudLinks',
  description: 'Master affiliate marketing with actionable strategies, case studies, and growth tactics tailored for Indian creators.',
};

export default function Page() {
  return <BlogContent />;
}
