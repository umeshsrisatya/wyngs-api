import type { H3Event } from "h3";
import { UserLoginDataDto } from "./auth/login.dto";


declare module "h3" {
  interface H3EventContext {
    user?: UserLoginDataDto; // ✅ Adds user to event context
  }
}