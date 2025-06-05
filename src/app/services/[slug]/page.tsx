// src/app/services/[slug]/page.tsx

import { notFound } from "next/navigation";
import Script from "next/script";

// ✅ Dynamic rendering setup
export const dynamicParams = true;
export const dynamic = "force-dynamic";
export const revalidate = 60;

interface PageData {
  titletag: string;
  descriptiontag: string;
  servicename: string;
  slug: string;
  [key: string]: unknown;
}

interface PageProps {
  params: { slug: string };
}

// ✅ Fetch SEO data
async function fetchPageData(slug: string): Promise<PageData | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/pages/${slug}`, {
      cache: "force-cache",
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// ✅ Metadata generation
export async function generateMetadata({ params }: PageProps) {
  const slug = params.slug;
  const data = await fetchPageData(slug);

  if (!data) {
    return {
      title: "Page Not Found",
      description: "This page does not exist.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/services/${data.slug}`;

  return {
    title: data.titletag,
    description: data.descriptiontag,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: data.titletag,
      description: data.descriptiontag,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: "https://res.cloudinary.com/s2ucdn/image/upload/v1734515561/organicads-logo_n5yg79.png",
          width: 1200,
          height: 630,
          alt: data.titletag,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.titletag,
      description: data.descriptiontag,
      images: [
        "https://res.cloudinary.com/s2ucdn/image/upload/v1734515561/organicads-logo_n5yg79.png",
      ],
    },
  };
}

// ✅ Page Renderer
export default async function Page({ params }: PageProps) {
  const slug = params.slug;
  const data = await fetchPageData(slug);
  if (!data) return notFound();

  let ServiceComponent;
  try {
    ServiceComponent = (await import(`@/components/services/${data.servicename}/page`)).default;
  } catch (error) {
    console.error(`Component not found for service: ${data.servicename}`, error);
    return notFound();
  }

  return (
    <div className="w-full mx-auto">
      <ServiceComponent service={data} />

      {/* ✅ Canonical Fixer (fallback) */}
      <Script id="canonical-fix" strategy="afterInteractive">
        {`
          document.addEventListener('DOMContentLoaded', function() {
            const canonicalLink = document.querySelector('link[rel="canonical"]');
            if (canonicalLink) {
              const currentPath = canonicalLink.getAttribute('href');
              const protocol = window.location.protocol;
              const host = window.location.host;
              if (!currentPath.startsWith('http')) {
                canonicalLink.href = protocol + '//' + host + currentPath;
              }
            }
          });
        `}
      </Script>

      {/* ✅ Dynamic LocalBusiness Schema */}
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": data.titletag,
            "url": `${process.env.NEXT_PUBLIC_SITE_URL}/services/${data.slug}`,
            "logo": "https://res.cloudinary.com/s2ucdn/image/upload/v1734515561/organicads-logo_n5yg79.png",
            "image": "https://res.cloudinary.com/s2ucdn/image/upload/v1734515561/organicads-logo_n5yg79.png",
            "description": data.descriptiontag,
            "telephone": "+917259404569",
            "pricerange": "Contact: +917259404569 | Email : contact@organicads.in",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 13.1007,
              "longitude": 77.3940,
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bangalore",
              "addressRegion": "KA",
              "streetAddress": "Lenkappa Building, Talakadu Subbarao Beedi, Nelamangala, Bengaluru, Karnataka 562123",
              "postalCode": "562123",
            },
            "openingHours": ["Mon-Sat 9:00AM-06:00PM"],
          }),
        }}
      />
    </div>
  );
}
