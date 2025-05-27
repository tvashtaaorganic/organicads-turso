import { NextResponse } from 'next/server';
import turso from 'lib/turso';

export async function GET(request, { params }) {
  const { page } = params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const pageSize = 1000;
  const offset = (parseInt(page) - 1) * pageSize;

  const result = await turso.execute({
    sql: `SELECT slug FROM pages LIMIT ${pageSize} OFFSET ${offset}`
  });

  const urls = result.rows.map((row) => {
    return `
      <url>
        <loc>${baseUrl}/${row.slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join('\n')}
  </urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
