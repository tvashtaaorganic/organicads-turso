import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  const host = request.headers.get('host') || 'organicads.in';
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = `${protocol}://${host}`;

  // ✅ Rewrite for sitemap-services-*.xml
  if (pathname.startsWith('/sitemaps-services/sitemap-services-') && pathname.endsWith('.xml')) {
    const match = pathname.match(/sitemap-services-(\d+)\.xml$/);
    if (match) {
      const page = match[1];
      url.pathname = `/sitemaps-services/sitemap-services/${page}`;
      const response = NextResponse.rewrite(url);
      response.headers.set('x-base-url', baseUrl);
      response.headers.set('x-pathname', pathname);
      return response;
    }
  }

  // Default flow
  const response = NextResponse.next();
  response.headers.set('x-base-url', baseUrl);
  response.headers.set('x-pathname', pathname);
  return response;
}

export const config = {
  matcher: '/:path*',
};
