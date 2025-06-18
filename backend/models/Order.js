import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  payment: { type: String, required: true },
  status: { type: String, default: "Processing" },
  items: [
    {
      name: String,
      price: Number,
      image: String,
      quantity: Number,
    },
  ],
});

export default mongoose.model("Order", OrderSchema);
