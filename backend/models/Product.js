import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  images: [String],
  category: String,
  createdAt: { type: Date, default: Date.now }
});

export const Product = mongoose.model("Product", productSchema);