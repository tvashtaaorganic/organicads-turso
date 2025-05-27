import { notFound } from 'next/navigation';
import turso from 'lib/turso';

// ✅ Define the shape of your page data
interface PageData {
  titletag: string;
  descriptiontag: string;
  servicename: string;
  [key: string]: unknown;
}

interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// ✅ Fetch data directly from Turso
async function fetchPageData(slug: string): Promise<PageData | null> {
  try {
    const result = await turso.execute({
      sql: `SELECT * FROM pages WHERE slug = ? LIMIT 1`,
      args: [slug],
    });

    if (result.rows.length === 0) return null;

    // Convert row to object
    const row = result.rows[0];
    return row as PageData;
  } catch (error) {
    console.error("Turso fetch error:", error);
    return null;
  }
}

// ✅ Dynamic metadata generation for SEO
export async function generateMetadata({ params }: PageProps) {
  const data = await fetchPageData(params.slug);

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

// ✅ Page component
export default async function Page({ params }: PageProps) {
  const data = await fetchPageData(params.slug);

  if (!data) return notFound();

  let ServiceComponent;
  try {
    // Dynamic import of the correct service component
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
