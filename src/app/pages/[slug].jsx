import turso from 'lib/turso'; // Make sure this is your Turso client

export async function getServerSideProps({ params }) {
  const { slug } = params;
  console.log("Fetching slug:", slug);

  try {
    const result = await turso.execute({
      sql: "SELECT * FROM pages WHERE slug = ? LIMIT 1",
      args: [slug],
    });

    console.log("Database Result:", result.rows);

    if (result.rows.length === 0) {
      return { notFound: true };
    }

    return {
      props: { service: result.rows[0] },
    };
  } catch (error) {
    console.error("Turso DB error:", error);
    // You can decide how to handle DB errors, e.g. return a 500 error page
    return { notFound: true };
  }
}
