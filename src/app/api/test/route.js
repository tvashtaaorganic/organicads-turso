import { NextResponse } from "next/server";
import turso from "lib/turso";

export async function GET() {
  try {
    const result = await turso.execute("SELECT 1;");
    return NextResponse.json({ status: "DB Connected", result });
  } catch (err) {
    return NextResponse.json({ error: "Turso connection failed", detail: err.message }, { status: 500 });
  }
}
