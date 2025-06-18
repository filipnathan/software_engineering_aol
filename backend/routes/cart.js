import express from "express";
import CartItem from "../models/CartItem.js";

const router = express.Router();

// ADD new item to cart
router.post("/", async (req, res) => {
  try {
    const item = new CartItem(req.body);
    await item.save();
    console.log("Saved cart item:", item);
    res.status(201).json({ message: "Item added to cart" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET all items from database
router.get("/", async (req, res) => {
  try {
    const items = await CartItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE item from cart
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await CartItem.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// broken
// DELETE all items from cart (for checkout)
router.delete("/clear", async (req, res) => {
  try {
    await CartItem.deleteMany({});
    res.json({ message: "Cart cleared" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;