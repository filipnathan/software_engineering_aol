import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Fetch user profile
router.get("/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user profile
router.put("/:email", async (req, res) => {
  try {
    console.log("Email param:", req.params.email);
    console.log("Request body:", req.body);

    const updatedUser = await User.findOneAndUpdate(
      { email: req.params.email },
      { $set: req.body },
      { new: true, upsert: true } 
    );
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
