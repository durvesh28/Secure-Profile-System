const { encrypt, decrypt } = require("../utils/encrypt.js");

describe("AES-256 Encryption Utility Tests", () => {
  const aadhaar = "123412341234";

  test("Encrypt function should return a string", () => {
    const encrypted = encrypt(aadhaar);
    expect(typeof encrypted).toBe("string");
  });

  test("Encrypted Aadhaar should NOT match original Aadhaar", () => {
    const encrypted = encrypt(aadhaar);
    expect(encrypted).not.toBe(aadhaar);
  });

  test("Decrypt function should return original Aadhaar", () => {
    const encrypted = encrypt(aadhaar);
    const decrypted = decrypt(encrypted);
    expect(decrypted).toBe(aadhaar);
  });

  test("Encryption output should look like HEX", () => {
    const encrypted = encrypt(aadhaar);
    const hexRegex = /^[0-9a-fA-F]+$/;
    expect(hexRegex.test(encrypted)).toBe(true);
  });

  test("Decrypting invalid text should throw an error", () => {
    expect(() => decrypt("invalidhexvalue123")).toThrow();
  });
});
