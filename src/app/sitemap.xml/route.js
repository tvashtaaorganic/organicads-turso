import { NextResponse } from 'next/server';

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '"': return '&quot;';
      case "'": return '&apos;';
      default: return c;
    }
  });
}

async function generateStaticSitemap() {
//  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://organicads.in';

  const staticPages = [
    '/',
    '/about',
    '/contactus',
    '/career-at-organicads',
    '/digital-marketing-agency-services-in-bangalore',
    '/seo-services-company-in-bangalore',
    '/ecommerce-services-company-in-bangalore',
    '/social-media-marketing-agency-in-bangalore',
    '/pay-per-click-ppc-management-company-in-bangalore',
    '/online-reputation-management-services-in-bangalore',
    '/website-design-services',
    '/website-development-services',
    '/wordpress-website-development-services',
    '/mobile-app-development-services',
    '/software-development-services',
    '/creative-graphics-design-services',
    '/seo-packages',
    '/web-design-development-packages',
    '/social-media-marketing-package',
    '/ppc-packages',
    '/ourclients',
    '/seo-results-from-organic-ads',
    '/get-quote',
    '/website-cost-calculator',
    '/privacy-policy',
    '/seo-training-bangalore',
    '/outsource-seo-services-bangalore',
    '/seo-cost-calculator',
  ];

  const urls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ url, lastModified }) => `
  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
}

export async function GET() {
  const sitemap = await generateStaticSitemap();
  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}
