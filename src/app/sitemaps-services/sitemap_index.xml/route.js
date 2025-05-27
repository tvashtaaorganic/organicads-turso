import { NextResponse } from 'next/server';
import turso from 'lib/turso';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // Fetch count of all slugs
  const result = await turso.execute({ sql: 'SELECT COUNT(*) as total FROM pages' });
  const total = result.rows[0].total;
  const pageSize = 1000;
  const totalPages = Math.ceil(total / pageSize);

  const urls = [];
  for (let i = 1; i <= totalPages; i++) {
    urls.push(`
      <sitemap>
        <loc>${baseUrl}/sitemaps-services/sitemap-services-${i}.xml</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </sitemap>
    `);
  }

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join('\n')}
    </sitemapindex>`;

  return new NextResponse(sitemapIndex, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
