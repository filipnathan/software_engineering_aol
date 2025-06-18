import express from "express";
import { Contact } from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message, createdAt } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({ name, email, message, createdAt });
    await newContact.save();

    res.status(201).json({ message: "Message received!" });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

export default router;
