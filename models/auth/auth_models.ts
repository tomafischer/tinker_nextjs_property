import { MongoModelBase } from "@/utils/mongo/mongodb";
import { ObjectId } from "mongodb";

const col_auth_audit = "auth_audits";
interface AuthAudit extends MongoModelBase {
  user_id?: string;
  email?: string;
  action: string;
  details?: string | null;
}

const col_users = "users";
interface AppUser  extends MongoModelBase{
  email: string;
  email_verified?: boolean | null;
  username?: string | null;
  image?: string | null;
  provider?: string;
  provider_id?: string;
  bookmarks?: ObjectId[];
}

export type {AuthAudit, AppUser};
export {col_auth_audit, col_users};