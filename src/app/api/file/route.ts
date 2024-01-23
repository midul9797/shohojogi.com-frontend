import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ name: "File uploaded" });
}
