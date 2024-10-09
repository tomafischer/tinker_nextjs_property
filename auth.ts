
// Read this
// https://authjs.dev/guides/edge-compatibility

import NextAuth from "next-auth";
import client from "@/utils/mongo/mongodb-client";
import { AppUser, AuthAudit, col_auth_audit, col_users} from "@/models/auth/auth_models";
import { addTS } from "./utils/mongo/mongodb";
import authConfig from "./auth.config"


let counter =0;
// Define the types for account and profile
export const { handlers, signIn, signOut, auth } = NextAuth({
  //adapter: MongoDBAdapter(client),
  session: { strategy: "jwt" },
  //  Callbacks
  callbacks: {
    async signIn({ user, account, profile }) {
      //console.log("signIn", user, account, profile);
      //1 .connect to the DB
      const db = client.db();
      const db_users = db.collection(col_users);

      //2. check if the user exists
      let userExists = await db_users.findOne({ email: profile?.email }) as AppUser;
      //let userExists = await User.findOne({ email: profile?.email }).lean();
      //3. if not creaete
      let user_id = userExists?._id;
      if (!userExists) {
        if (!user || !user.email){
          throw new Error("No user or email in the new User");
        }
        const data : AppUser = {
          email: user.email,
          username: user?.name,
          email_verified: profile?.email_verified,
          image: user?.image,
          provider: account?.provider,
          provider_id: account?.providerAccountId,
        };
        const insert_result = await db_users.insertOne(addTS(data));
        user_id = insert_result.insertedId;
        console.log("\nCreateed user\n");
      }

      // 4. log the user
      // console.log("Writing User to autAudit ");//, userExists);
      const audit_record : AuthAudit= {
        user_id: user_id?.toString(),
        email: userExists?.email,
        action: "sign-in",
        details: null,
      }
      await db.collection(col_auth_audit).insertOne(addTS(audit_record));
  
      //4. return true to allow sign in
      return true;
    },
    async session({ session }) {
      console.log(`${counter++}\n session is called: Session, user`);//, session);
     
        // 1. get user from db
       // const user_from_db = await User.findOne({ email: session.user.email }) as unknown as IUser;
      // const user_from_db = await db.collection("users").findOne({ email: session.user.email }) as IUser; 
       
     
      //console.log(user_from_db);
      //2. assign user id from session
      //session.user.id = "1538eefa-8be7-4fda-9cc2-b2eab92f4574";
      //console.log(`session after adding id: `, session); // 3 rerturn the session
      return session;
    },
    // async jwt({ token, trigger, session, account }) {
    //   console.log('jwt is called: token, trigger, session, account');//, token, trigger, session, account);
    //   return token
    // }
    // async redirect(url, baseUrl) {
    //   return baseUrl
    // },
  },
  ...authConfig,
});

const user_example = {
  id: "1538eefa-8be7-4fda-9cc2-b2eab92f4574",
  name: "Chatt Dev",
  email: "aft3000dev@gmail.com",
  image:
    "https://lh3.googleusercontent.com/a/ACg8ocJmWQRszP0i5NAor5gJGZ8IVdGD976QsjoV1ZQl4EG9mwOBfQ=s96-c",
};
const account_example = {
  access_token:
    "ya29.a0AcM612xzk1t22MzQX-Mv3dZA49n0PU8T0zUxCb9XYRfABTfYJGWh0TPRk8ZZJgU3Z2PmPt5Aa5AC63eCLyJRox7QpU5ovF9srR03E_j7mP3ZqkQtroRFFApfnyg9cMhDZlhgmMkd-f7Q9UV18f-vMtiZaQAQpnbpqAUDSIq0aCgYKAZkSARMSFQHGX2Mif8MRWov8qPhF6c7fxpyxSA0175",
  expires_in: 3599,
  refresh_token:
    "1//01cPesZV8T_WkCgYIARAAGAESNwF-L9Irqkif51o2Hciw2h5rEiiLQTvAApiOtK4dGS0XsTOSwhIeFnVwnRU08gCU4MgPYg26pdc",
  scope:
    "https://www.googleapis.com/auth/userinfo.email openid https://www.googleapis.com/auth/userinfo.profile",
  token_type: "bearer",
  id_token:
    "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE1MGY2ZTcwZWY0YjU0OGE1ZmQ5MTQyZWVjZDFmYjhmNTRkY2U5ZWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0MjM5NDM1Nzg3MDEtaDZjazlwMDlrOWIyZWlkZ3E5bW1pN2t0aWNrM2c4cGUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0MjM5NDM1Nzg3MDEtaDZjazlwMDlrOWIyZWlkZ3E5bW1pN2t0aWNrM2c4cGUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDQwMDk4MTg1NjQ5NjcwNjQ0NDkiLCJlbWFpbCI6ImFmdDMwMDBkZXZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJUMnlldF9nMGNRU1F1NGhnRm44TlVnIiwibmFtZSI6IkNoYXR0IERldiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKbVdRUnN6UDBpNU5Bb3I1Z0pHWjhJVmRHRDk3NlFzam9WMVpRbDRFRzltd09CZlE9czk2LWMiLCJnaXZlbl9uYW1lIjoiQ2hhdHQiLCJmYW1pbHlfbmFtZSI6IkRldiIsImlhdCI6MTcyODQ3NjE0NiwiZXhwIjoxNzI4NDc5NzQ2fQ.OXXUtQiilKUT8FW6akdcwMp7qs8vRtI_E6TkSy0dPxsM9FgABu49-UhuWWA14gxBVuUw1lqUx5zqGQVIi2ssHGaPpITiuKSRmho7VBC61eFlV5aT49lz8Ckt6bd4gaY4QJDLpXkqFzJyUBKvZbmlyDapY5cEbjBb_ZGy_XRwljbK3wcGC84uB1-nvUUXbnhNjGt6igrNSPL3m-cGfaRupob9LIFh_O59BKfdykNsFgcVjhtm2cu7xmUPfSm9Hhkodjy5m3uViPTfJmjVhhyQh_0z0TVbBsF9Wl8iH_ppPBq-pKBV4hM18-nqJlXrTZ55jG-X4TckF2bKhdJdBqVJVQ",
  expires_at: 1728479745,
  provider: "google",
  type: "oidc",
  providerAccountId: "104009818564967064449",
};
const profile_example = {
  iss: "https://accounts.google.com",
  azp: "423943578701-h6ck9p09k9b2eidgq9mmi7ktick3g8pe.apps.googleusercontent.com",
  aud: "423943578701-h6ck9p09k9b2eidgq9mmi7ktick3g8pe.apps.googleusercontent.com",
  sub: "104009818564967064449",
  email: "aft3000dev@gmail.com",
  email_verified: true,
  at_hash: "T2yet_g0cQSQu4hgFn8NUg",
  name: "Chatt Dev",
  picture:
    "https://lh3.googleusercontent.com/a/ACg8ocJmWQRszP0i5NAor5gJGZ8IVdGD976QsjoV1ZQl4EG9mwOBfQ=s96-c",
  given_name: "Chatt",
  family_name: "Dev",
  iat: 1728476146,
  exp: 1728479746,
};
