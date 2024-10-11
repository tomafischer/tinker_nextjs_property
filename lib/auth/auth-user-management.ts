import client from "@/lib/auth/mongo-client-auth";
import { AppUser, AuthAudit, col_users, col_auth_audit } from "./auth-models";
import { addTS } from "@/lib/mongo/mongo-utils";
import { ObjectId } from "mongodb";
import { unstable_cache } from "next/cache";
import { createDropdownMenuScope } from "@radix-ui/react-dropdown-menu";

export const userFindOneByEmail = async (email: String) => {
  const data = client
    .db()
    .collection(col_users)
    .findOne({ email: email }) as Promise<AppUser>;
  return data;
};

interface SessionUserInfo {
  _id: ObjectId;
  email: string;
  roles: string[] | null | undefined;
}

export const sessionUserInfoGet = async (
  email: String
): Promise<SessionUserInfo | null> => {
  console.log("******\n****sessionUserInfoGet: email", email);
  console.log("*******\n");
  const projection = { email: 1, roles: 1 };
  const data = await client
    .db()
    .collection(col_users)
    .findOne({ email: email }, { projection });
  if (data) {
    return {
      _id: data._id,
      email: data.email,
      roles: data.roles,
    };
  }
  return null;
};


export const sessionUserInfoGet_cache = unstable_cache(
  sessionUserInfoGet,
  ['sessionUserInfoGet'],
  {revalidate: 2} 

)
export const userInsertOneAndAudit = async (user: AppUser) => {
  const data = addTS(user);
  const ret = await client.db().collection(col_users).insertOne(user);
  const user_id = ret.insertedId;

  //write audit
  writeAudit({
    user_id: user_id,
    email: user?.email,
    action: "user-created",
    details: user,
  });
  return ret;
};

export const writeAudit = async (audit: AuthAudit) => {
  const data = addTS(audit);
  const ret = await client.db().collection(col_auth_audit).insertOne(audit);
  return ret;
};

export const recordLoging = async (
  user_id: ObjectId,
  email: string | undefined | null,
  profile: any
) => {
  //update user info
  const filter = { _id: user_id };
  const update = {
    $set: {
      last_login: new Date(),
      updatedAt: new Date(),
    },
  };
  //write audit
  writeAudit({
    user_id: user_id,
    email: email || "not received",
    action: "user-login",
    details: profile,
  });
};
