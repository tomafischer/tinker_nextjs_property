import { auth } from "@/auth";
import { NextResponse, type NextRequest } from "next/server";
import { SessionUser } from "@/lib/auth/auth-models";
import {
  userFindOneByEmail,
  sessionUserInfoGet,
} from "@/lib/auth/auth-user-management";

export const GET = auth(async function GET(req) {
  if (!req.auth) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }
  const user = req.auth.user as SessionUser;

  const searchParams = req.nextUrl.searchParams;
  console.log("searchParams", searchParams);

  const search_email = searchParams.get("email") || user.email;
  console.log("email", search_email);
  const extraSessionInfo = searchParams.get("extrasession") || "false";
  if (extraSessionInfo) {
    const user_data = await sessionUserInfoGet(search_email);
    return NextResponse.json(user_data);
  } else {
    const user_data = await userFindOneByEmail(search_email);
    return NextResponse.json(user_data);
  }
});
