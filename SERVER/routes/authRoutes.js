const express = require("express");
const router = express.Router();
const User = require("../database/models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/user/register", async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }
    if (!username) {
      return res.status(400).json({ message: "Username is required" });
    }
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/user/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const SerializedUser = { username: user.username };
    const accessToken = jwt.sign(SerializedUser, process.env.JWT_SECRET, {
      expiresIn: "30m",
    });

    res.json({ name: user.username, items: user.cart, token: accessToken });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
