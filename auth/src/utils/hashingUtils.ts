import { compare, genSalt, hash } from "bcrypt";

const salts = process.env.HASHING_SALTS || 10;

export const hashPassword = async (password: string) => {
	return await hash(password, salts);
};

export const compareTwoPasswords = (
	plainTextPassword: string,
	hashedPassword: string,
) => {
	return compare(plainTextPassword, hashedPassword);
};
