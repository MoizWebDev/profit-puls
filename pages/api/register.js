import connectMongo from "../../lib/mongodb";
import bcrypt from "bcryptjs";
import User from "../../Models/User";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectMongo();
    const { username, email, fullName, password } = req.body;

    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res
          .status(400)
          .json({ success: false, message: "Username already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        username,
        email,
        fullName,
        password: hashedPassword,
      });

      await newUser.save();

      res
        .status(201)
        .json({ success: true, message: "User registered successfully" });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred during registration.",
      });
    }
  } else {
    console.log("Received GET request");
    const users = await User.find();
    console.log("Retrieved Users:", users);
    res.status(200).json({ success: true, data: users });
  }
}
