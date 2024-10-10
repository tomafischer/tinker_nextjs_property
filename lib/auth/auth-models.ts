import { MongoModelBase } from "@/lib/mongo/mongo-utils";
import { ObjectId } from "mongodb";
import {AdapterUser} from  '@auth/core/adapters';

const col_auth_audit = "auth_audits";
interface AuthAudit extends MongoModelBase {
  user_id?: string;
  email?: string;
  action: string;
  details?: any | null;
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

interface SessionUser extends AdapterUser {
  roles: string[];
  user_app_id: string;
}

export type {AuthAudit, AppUser, SessionUser};
export {col_auth_audit, col_users};