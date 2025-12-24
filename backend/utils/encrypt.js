import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config(); // Load .env so ENCRYPTION_KEY is available

const algorithm = "aes-256-cbc";

// MUST be 32 bytes long
const key = Buffer.from(process.env.ENCRYPTION_KEY);

const iv = Buffer.alloc(16, 0); // 16-byte IV


export function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

export function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
