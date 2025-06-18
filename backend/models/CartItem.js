import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String,
  quantity: { type: Number, default: 1 },
});

export default mongoose.model("CartItem", CartItemSchema);
