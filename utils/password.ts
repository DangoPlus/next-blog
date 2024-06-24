import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
// Function to salt and hash a password
async function saltAndHashPassword(plainTextPassword: string) {
  const saltRounds = 12;
  const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
  return hashedPassword;
}
async function verifyPassword(
  plaintextPassword: string,
  hashedPassword: string,
) {
  return await bcrypt.compare(plaintextPassword, hashedPassword);
}

const prisma = new PrismaClient();

/**
 * Retrieve a user from the database using their email and hashed password.
 * @param {string} email - User's email.
 * @param {string} hashedPassword - User's hashed password.
 * @returns {Promise<Object|null>} A user object if found, otherwise null.
 */
async function getUserFromDb(email: string) {
  try {
    const user = await prisma.admin.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new Error("No user found with that email.");
    }
    return user;
  } catch (error) {
    throw new Error("Error retrieving user from database:" + error);
  }
}
export { getUserFromDb, saltAndHashPassword, verifyPassword };
