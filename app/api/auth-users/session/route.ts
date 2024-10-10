import { auth } from "@/auth"
import { NextResponse } from "next/server"
import { SessionUser } from "@/lib/auth/auth-models"

export const GET = auth(function GET(req) {
  if (req.auth) {
    const user = req.auth.user as SessionUser
    return NextResponse.json(req.auth)
  }
  return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
})