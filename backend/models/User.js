const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],

    },

    password: {
      type: String,
      required: true, // hashed with bcrypt
    },

    aadhaar: {
      type: String,
      required: true, 
      // NOTE: This will be stored in encrypted form (AES-256 encrypted string)
    },

    // optional: track login or account status
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
