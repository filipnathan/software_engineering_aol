import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import cartRoutes from "./routes/cart.js";
import orderRoutes from "./routes/order.js";
import contactRoutes from "./routes/contact.js";
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes)

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error(err));
