// utils/jwtUtils.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = (user) => {
    return jwt.sign(
        {
            id: user.comuserid, // Primary key from usermaster
            username: user.username, // Username field
            name: `${user.firstname} ${user.lastname}`, // Full name
        },
        process.env.JWT_SECRET, // Secret from .env
        {
            expiresIn: "1d", // Token validity
        }
    );
};
