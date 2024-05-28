import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// Your own logic for dealing with plaintext password strings; be careful!
import { getUserFromDb, verifyPassword } from "@/utils/password";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { label: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        let user = null;
        if (!credentials.password) {
          throw new Error("Password is required.");
        }
        // logic to salt and hash password
        console.log(credentials)
        // logic to verify if user exists
        user = await getUserFromDb(
          credentials.email as string
        );
        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.");
        }
        const isPasswordValid = await verifyPassword(credentials.password as string, user.password);
        if (!isPasswordValid) {
          throw new Error("Password is incorrect.");
        }

        // Return user object with their profile data
        return {
          ...user,
          id: user.id.toString(),
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      console.log("Session Callback", { session, token });
      const tokenId = token?.id?.toString();
      const tokenRandomKey = token?.randomKey;
      return {
        ...session,
        user: {
          ...session.user,
          id: tokenId,
          randomKey: tokenRandomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      console.log("JWT Callback", { token, user });
      if (user) {
        const u = user as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
  pages: {
    signIn: "/admin/signin",
    signOut: "/admin/signout",
  },
});
