import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  const name = url.searchParams.get("name") || "World";

  const message = `Hello, ${name}!`;

  return new NextResponse(JSON.stringify({ message }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
