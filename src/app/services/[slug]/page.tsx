import { notFound } from "next/navigation";

// ✅ Mark this route as fully dynamic (important fix!)
// ✅ Very important
export const dynamicParams = true;
export const dynamic = 'force-dynamic';
export const revalidate = 60;


// ✅ Define the API response shape
interface PageData {
  titletag: string;
  descriptiontag: string;
  servicename: string;
  [key: string]: unknown;
}

// ✅ Define page props
interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// ✅ Fetch SEO data from your Turso-powered API route
async function fetchPageData(slug: string): Promise<PageData | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/pages/${slug}`,
      { cache: "force-cache" }
    );

    if (!res.ok) {
      console.error("API responded with error:", res.status);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Failed to fetch SEO page data:", error);
    return null;
  }
}

// ✅ Metadata generator (must be fully async-safe)
export async function generateMetadata(props: PageProps) {
  const slug = props.params.slug; // ✅ Do NOT use optional chaining

  if (!slug) {
    console.error("Slug missing in generateMetadata");
    return {
      title: "Page Not Found",
      description: "This page does not exist.",
    };
  }

  const data = await fetchPageData(slug);

  if (!data) {
    return {
      title: "Page Not Found",
      description: "This page does not exist.",
    };
  }

  return {
    title: data.titletag,
    description: data.descriptiontag,
  };
}

// ✅ Dynamic service page loader
export default async function Page({ params }: PageProps) {
  const slug = params.slug;

  if (!slug) {
    console.error("Missing slug");
    return notFound();
  }

  const data = await fetchPageData(slug);
  console.log("Fetched Data:", data);

  if (!data) return notFound();

  console.log("Service Name:", data.servicename);

  let ServiceComponent;
  try {
    // ✅ Dynamically import component based on service name
    ServiceComponent = (await import(`@/components/services/${data.servicename}/page`)).default;
  } catch (error) {
    console.error(`Service component not found for: ${data.servicename}`, error);
    return notFound();
  }

  return (
    <div className="w-full mx-auto">
      <ServiceComponent service={data} />
    </div>
  );
}
