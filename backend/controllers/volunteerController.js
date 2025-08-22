const Volunteer = require("../models/Volunteer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @desc    Volunteer Registration
// @route   POST /api/volunteers/signup
exports.register = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      confirmPassword,
      location,
      helpType,
      availability,
    } = req.body;

    // Check if volunteer already exists
    const existingVolunteer = await Volunteer.findOne({ email });
    if (existingVolunteer) {
      return res.status(400).json({ error: "Volunteer already exists" });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new volunteer
    const newVolunteer = new Volunteer({
      fullName,
      email,
      password: hashedPassword,
      location,
      helpType,
      availability,
    });

    await newVolunteer.save();
    res.status(201).json({ message: "Volunteer registered successfully" });
  } catch (err) {
    console.error("Registration error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// @desc    Volunteer Login
// @route   POST /api/volunteers/login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const volunteer = await Volunteer.findOne({ email });
    if (!volunteer) {
      return res.status(404).json({ error: "Volunteer not found" });
    }

    const isMatch = await bcrypt.compare(password, volunteer.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: volunteer._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      volunteer: {
        id: volunteer._id,
        fullName: volunteer.fullName,
        email: volunteer.email,
      },
    });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
