import type { MetadataRoute } from 'next';

const BASE_URL = 'https://cloudlinks.in';

// Explicitly named so AI companies' crawlers are unambiguously allowed,
// in addition to the catch-all `*` rule below.
const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'Google-Extended',  
  'Applebot-Extended',
  'PerplexityBot',
  'Perplexity-User',
  'CCBot',
  'Bytespider',
  'Diffbot',
  'Meta-ExternalAgent',
  'Meta-ExternalFetcher',
  'FacebookBot',
  'Amazonbot',
  'YouBot',
  'cohere-ai',
  'omgili',
  'omgilibot',
  'Timpibot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/categories', '/blog', '/cookies-policy', '/refund-policy'],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: '/',
      })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
