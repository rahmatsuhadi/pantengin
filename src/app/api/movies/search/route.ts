import { NextResponse } from "next/server";
import { tmdbServer } from "@/lib/tmdb";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") || "";
  const page = searchParams.get("page") || "1";

  if (!query.trim()) {
    return NextResponse.json({ error: "query is required" }, { status: 400 });
  }

  try {
    const data = await tmdbServer.search(query, Number(page));
    return NextResponse.json(data);
  } catch (e: any) {
    if (e instanceof Error && e.message === "TMDB_RATE_LIMIT") {
      return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
