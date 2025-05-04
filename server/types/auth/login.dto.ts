import z from "zod";

export const RegisterSchema = z.object({
  username: z.string({ required_error: "User Name is required" }),
  password: z.string({ required_error: "Password is required" }),
});

export class LoginInputDto {
  username: string;
  password: string;
}

export class UserLoginDataDto {
  userId: string;
  userType: string;
  orgId: string;
  tenantId: string;
  userRole: {
    role: string;
    description: string;
  };
}

export class LoginResponseDto {
  accessToken: string;
}
