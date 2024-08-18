import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectMongo from "../../../lib/mongodb";
import User from "../../../Models/User";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          await connectMongo(); // Make sure this function returns a promise
          const user = await User.findOne({ username: credentials.username });
          if (!user) {
            throw new Error("Invalid username or password");
          }

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isPasswordCorrect) {
            throw new Error("Invalid username or password");
          }

          return user;
        } catch (error) {
          console.error("Login error:", error); // Log the original error
          throw new Error("Login error"); // You can customize this error message
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      // You can implement custom JWT token management here
      return token;
    },
    async session(session, user) {
      // You can implement custom session management here
      return session;
    },
  },
});
