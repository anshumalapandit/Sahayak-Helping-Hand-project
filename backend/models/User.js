const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  password: String,
  location: String,
  phone: String,
  disabilityType: String,
  preferredTime: String,
});

module.exports = mongoose.model("User", userSchema);
