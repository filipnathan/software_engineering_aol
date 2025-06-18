import React, {useEffect, useState} from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import lyvitImg from "./assets/lyvit.png";
import sumagesicImg from "./assets/sumagesic.png";

export default function MedicalCart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/cart")
      .then(res => res.json())
      .then(data => setCartItems(data))
      .catch(err => console.error("Failed to fetch cart:", err));
  }, []);

  const getTotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ""));
      return sum + price * (item.quantity || 1);
    }, 0);
  };

  const handleRemove = async (id) => {
    await fetch(`http://localhost:5000/api/cart/${id}`, { method: "DELETE" });
    setCartItems(items => items.filter(item => item._id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <main className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow rounded-xl w-full">
        <h1 className="text-2xl font-bold mb-6">Your medical cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="border-b pb-4 space-y-4">
            {cartItems.map(item => (
              <div key={item._id} className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="h-20" />
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity || 1}</p>
                  <button onClick={() => handleRemove(item._id)} className="text-red-600 text-sm mt-1">× Remove</button>
                </div>
                <div className="text-right">
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center mt-6">
          <p className="font-bold text-lg">Total: Rp {getTotal().toLocaleString()}</p>
          <Button onClick={() => navigate("/payment")}>🛒 Checkout</Button>
        </div>
          <div className="mt-4 text-sm text-gray-500">
            <button
            onClick={() => navigate("/medicines")}
            className="hover:underline text-blue-600"
            >
            ‹ Continue shopping
            </button>
          </div>
      </main>
    </div>
  );
}