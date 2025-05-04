import jwt, { JwtPayload } from "jsonwebtoken";
import { UserLoginDataDto } from "~/types/auth/login.dto";

interface CustomJwtPayload extends JwtPayload {
  userId: string;
  userType: string;
  orgId: string;
  tenantId: string;
  userRole: {
    role: string;
    description: string;
  };
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET) as CustomJwtPayload;
  } catch (error) {
    return null; // Invalid token
  }
}
