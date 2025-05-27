import { NextResponse } from "next/server";
import turso from "lib/turso";

export async function GET(req, context) {
  const { params } = context;
  const slug = params.slug;

  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }

  try {
    const result = await turso.execute({
      sql: "SELECT * FROM pages WHERE slug = ? LIMIT 1",
      args: [slug],
    });

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error("Turso DB error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
