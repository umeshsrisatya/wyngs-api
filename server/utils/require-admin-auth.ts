import { EventHandler, H3Event } from "h3";
import { UserLoginDataDto } from "~/types/auth/login.dto";

export const adminAuth: EventHandler = async (event: H3Event) => {
  const authHeader = getHeader(event, "authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  const decoded = verifyToken(token);

  if (!decoded) {
    throw createError({ statusCode: 401, message: "Invalid token" });
  }
  if (decoded.userRole.role !== "Admin") {
    throw createError({
      statusCode: 403,
      message: "Forbidden: You do not have permission to access this resource",
    });
  }
  event.context.user = decoded as UserLoginDataDto; // Attach user to event context
};
