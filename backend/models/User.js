import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phone: String,
  dateOfBirth: String,
  country: String,
  city: String,
  postalCode: String,
  fullAddress: String
}, 
{ timestamps: true });

export default mongoose.model("User", userSchema);
