// utils/hashUtils.js
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const hashPassword = async (plainPassword) => {
    return await bcrypt.hash(plainPassword, SALT_ROUNDS);
};

export const comparePassword = async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
};
