import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export const signJwt = (payload: object, expiresIn: string | number = "1h") => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};
