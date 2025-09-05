const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: { type: String, required: true },
  account: {
    username: { type: String, required: true },
    avatar: { type: Object },
  },
  newsletter: { type: Boolean, required: true },
  token: { type: String, required: true },
  hash: { type: String, required: true },
  salt: { type: String, required: true },
  favorites: [
    {
      marvelId: { type: String, required: true },
      type: { type: String, enum: ["character", "comic"], required: true },
      addedAt: { type: Date, default: Date.now },
    },
  ],
});

module.exports = User;
