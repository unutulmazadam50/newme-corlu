import type { APIRoute } from 'astro';
import { menuItems } from '../data/menu';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://newmecorlu.com';
  const staticPages = ['', '/menu', '/hakkimizda', '/iletisim'];
  
  const productUrls = menuItems.map((item) => `/menu/${item.slug}`);
  const allUrls = [...staticPages, ...productUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (url) => `
    <url>
      <loc>${siteUrl}${url}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${url === '' ? 'daily' : 'weekly'}</changefreq>
      <priority>${url === '' ? '1.0' : url.startsWith('/menu') ? '0.9' : '0.7'}</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
