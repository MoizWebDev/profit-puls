import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../../Models/User";

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/profitpuls", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Authorize function called");
        console.log("Credentials:", credentials);

        // Find the user by username
        const user = await User.findOne({ username: credentials.username });
        console.log("User found:", user);

        if (!user) {
          throw new Error("Invalid username or password");
        }

        // Hash the provided password
        const hashedPassword = await bcrypt.hash(credentials.password, 10);
        console.log("Hashed password:", hashedPassword);

        // Compare the hashed password with the stored one
        const isPasswordCorrect = await bcrypt.compare(
          hashedPassword,
          user.password
        );
        console.log("Password match:", isPasswordCorrect);

        if (!isPasswordCorrect) {
          throw new Error("Invalid username or password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
