const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");


router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

   
    user = new User({
      name,
      email,
      password,
    });

    await user.save();
    res.json({ msg: "User registered successfully" });

  } catch (err) {
    res.status(500).send("Server error");
  }
});


router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, "secretKey", {
      expiresIn: "1h"
    });

    res.json({ token });

  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;