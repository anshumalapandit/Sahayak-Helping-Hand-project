const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  password: String,
  confirmPassword: String,
  location: String,
  helpType: String,
  availability: String,
});

module.exports = mongoose.model("Volunteer", volunteerSchema);
