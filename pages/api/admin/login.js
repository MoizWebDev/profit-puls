// pages/api/admin/login.js

export default function handler(req, res) {
  const { username, password } = req.body;

  const validUsername = process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (req.method === "POST") {
    if (username === validUsername && password === validPassword) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
