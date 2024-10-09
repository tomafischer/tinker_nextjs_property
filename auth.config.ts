import type { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google";
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [Google({
    // clientId: process.env.GOOGLE_CLIENT_ID,
    // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    authorization: {
      params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code",
      },
    },
    allowDangerousEmailAccountLinking: true,
  })],
} satisfies NextAuthConfig