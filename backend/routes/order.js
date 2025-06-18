import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// POST new order
router.post("/", async (req, res) => {
  try {
    const cleanedItems = req.body.items.map(item => ({
      ...item,
      price: parseInt(item.price.toString().replace(/[^\d]/g, "")),
    }));

    const newOrder = new Order({
      ...req.body,
      items: cleanedItems,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully" });
  } catch (error) {
    console.error("Order save error:", error);
    res.status(500).json({ message: "Failed to save order" });
  }
});

// GET all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ mesage: "Failed to fetch order" });
  }
});

// GET summary data
router.get("/summary", async (req, res) => {
  try {
    const orders = await Order.find();

    const totalOrders = orders.length;

    const totalRevenue = orders.reduce((sum, order) => {
      const orderTotal = order.items.reduce((sub, item) => {
        return sub + item.price * item.quantity;
      }, 0);
      return sum + orderTotal;
    }, 0);

    res.json({
      totalOrders: totalOrders || 0,
      totalRevenue: totalRevenue || 0,
      totalProfit: totalRevenue || 0,
    });
  } catch (error) {
    console.error("Summary error:", error);
    res.status(500).json({ message: "Failed to calculate summary" });
  }
});

// GET order by id
router.get('/:id', async (req, res) => {
  try {
    console.log("Backend received order ID:", req.params.id);
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE an order
router.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete order' });
  }
});


export default router;
