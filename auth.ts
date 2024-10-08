import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 

import { Account, Profile, User } from "next-auth"

// Define the types for account and profile
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({
    // clientId: process.env.GOOGLE_CLIENT_ID,
    // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    authorization: {
      params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code"
      }
    }
  })],
  //  Callbacks
  callbacks: {
    async signIn({user: User, account: Account, profile: Profile}) {
      console.log("signIn", User, Account, Profile)
      //1 .connect to the DB
      //2. check if the user exists
      //3. if not creaet
      //4. return true to allow sign in

      return true
      
    },
    async session({session, user}) {
      // 1. get user from db
      // 2. assign user id from session
      // 3 rerturn the session

      return session
    },
    // async jwt(token, user, account, profile, isNewUser) {
    //   return token
    // }
        // async redirect(url, baseUrl) {
    //   return baseUrl
    // },
  },
});