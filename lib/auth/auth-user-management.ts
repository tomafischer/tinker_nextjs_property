import client from "@/lib/auth/mongo-client-auth";
import { AppUser, AuthAudit, col_users, col_auth_audit } from "./auth-models";
import { addTS } from "@/lib/mongo/mongo-utils";

export const userFindOneByEmail = async (email:String) =>{
  const data = client.db().collection(col_users).findOne({email : email}) as Promise<AppUser>;
  return data

}

export const userInsertOneAndAudit = async (user:AppUser)=>{
  const data = addTS(user);
  const ret=  await client.db().collection(col_users).insertOne(user);
  const user_id = ret.insertedId.toString();
  
  //write audit
  writeAudit({
    user_id: user_id,
    email: user?.email,
    action: "user-created",
    details: user
  }); 
  return ret

}


export const writeAudit = async (audit:AuthAudit)=>{
  const data = addTS(audit);
  const ret=  await client.db().collection(col_auth_audit).insertOne(audit);
  return ret
}

export const recordLoging = async(user_id: string, email:string | undefined | null, profile: any)=>{
  //update user info

  //write audit
  writeAudit({
    user_id: user_id as string,
    email: email || "not received",
    action: "user-login",
    details: profile
  });       


}