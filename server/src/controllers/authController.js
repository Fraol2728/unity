import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "username and password are required" });
  }

  const configuredUsername = process.env.ADMIN_USERNAME;
  const configuredPasswordHash = process.env.ADMIN_PASSWORD_HASH;
  const jwtSecret = process.env.JWT_SECRET;

  if (!configuredUsername || !configuredPasswordHash || !jwtSecret) {
    return res.status(500).json({ message: "Auth environment variables are not configured" });
  }

  const isUsernameValid = username === configuredUsername;
  const isPasswordValid = await bcrypt.compare(password, configuredPasswordHash);

  if (!isUsernameValid || !isPasswordValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ role: "admin", username }, jwtSecret, {
    expiresIn: "12h",
  });

  return res.json({ token, username });
};
