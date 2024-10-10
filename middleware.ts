import NextAuth from "next-auth"
import authConfig from "./auth.middleware"

// 
//https://authjs.dev/guides/edge-compatibility
//this would be the default if we would not use auth.config.ts
//export { auth as middleware } from "@/auth"


const {auth}= NextAuth(authConfig)


export { auth as middleware } 

/// this only works if we don't export auth as non default 
// export default auth((req) => {
//   console.log("*****auth middleware is called in auth.ts");
//   // if (!req.auth && req.nextUrl.pathname !== "/login") {
//   //   const newUrl = new URL("/login", req.nextUrl.origin)
//   //   return Response.redirect(newUrl)
//   // }
// })

export const config = {
  matcher:['/property/properties/add/:path*','/profile','/property/properties/saved','/property/messages']
}

//https://authjs.dev/getting-started/session-management/protecting
// securing routes via middleware
