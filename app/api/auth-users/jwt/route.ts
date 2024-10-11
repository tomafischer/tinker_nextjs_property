import { getToken } from "next-auth/jwt";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  if (token) {
    return NextResponse.json({ token });
  }
  return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
}