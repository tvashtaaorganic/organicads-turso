import { notFound } from "next/navigation";
import SeoService from "@/components/services/seo/page"; // Import the seo.jsx component
import Head from "next/head";

// Fetch SEO data from the database
async function fetchPageData(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/pages/${slug}`, {
    cache: "force-cache", // Cache the data to improve performance
  });

  if (!res.ok) return null;
  return res.json();
}

// ✅ Server-side SEO Metadata
export async function generateMetadata({ params }) {
  const data = await fetchPageData(params.slug);

  if (!data) {
    return {
      title: "Page Not Found",
      description: "This page does not exist.",
      openGraph: {
        title: "Page Not Found",
        description: "This page does not exist.",
      },
    };
  }

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.titletag,
    "description": data.descriptiontag || data.content.slice(0, 150),
    "image": data.imageUrl, // Assuming `imageUrl` is part of the data object
    "author": {
      "@type": "Person",
      "name": "Author Name", // Add author info if available
    },
    "datePublished": data.datePublished, // Ensure you include a date field
  };

  return {
    title: data.titletag, // ✅ Set dynamic title
    description: data.descriptiontag || data.content.slice(0, 250), // ✅ Set dynamic description
    openGraph: {
      title: data.titletag,
      description: data.descriptiontag || data.content.slice(0, 250),
      image: data.imageUrl, // Include image for Open Graph 
    },
    // Add structured data as JSON-LD
    structuredData: JSON.stringify(structuredData),
  };
}

// ✅ Page Component (Server Component)
export default async function Page({ params }) {
  const data = await fetchPageData(params.slug);

  if (!data) return notFound();

  return (
    <>
      <Head>
        {/* Preload important resources */}
        {/* <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossorigin="anonymous" /> */}
        {/* Structured Data JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(data.structuredData)}</script>
      </Head>

      <div className="w-full mx-auto">
        {/* Render SEO Service Page dynamically */}
        <SeoService service={data} />
      </div>
    </>
  );
}
