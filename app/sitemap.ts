import type { MetadataRoute } from 'next';

const BASE_URL = 'https://cloudlinks.in';

const CAMPAIGN_SLUGS = [
  'haldiram-affiliate-program',
  'ghar-soaps-affiliate-program',
  'swiss-beauty-affiliate-program',
  'asaya-affiliate-program',
  'hamerscop-affiliate-program',
  'cotton-culture-affiliate-program',
  'fraganote-affiliate-program',
  'anydesk-affiliate-program',
  'ajio-affiliate-program',
  'perfora-care-affiliate-program',
  'the-man-company-affiliate-program',
  'firstcry-affiliate-program',
  'sanskriti-homes-affiliate-program',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/campaigns`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/how-it-works`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/influencer`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/payouts`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/categories`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/earning-tips`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/about-us`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/faqs`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms-conditions`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/cookies-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/refund-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const campaignRoutes: MetadataRoute.Sitemap = CAMPAIGN_SLUGS.map((slug) => ({
    url: `${BASE_URL}/campaigns/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...campaignRoutes];
}
