import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import visaIcon from "./assets/visa.png";
import mastercardIcon from "./assets/mastercard.png";
import gopayIcon from "./assets/gopay.png";
import ovoIcon from "./assets/ovo.png";

export default function PaymentPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  })

  const total = cartItems.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ""));
    return sum + price * (item.quantity || 1);
  }, 0);

  useEffect(() => {
    fetch("http://localhost:5000/api/cart")
      .then(res => res.json())
      .then(data => setCartItems(data))
      .catch(err => console.error("Failed to fetch cart:", err));
  }, []);

  const handleProceed = async () => {
    const {firstName, lastName, email, cardNumber, expiry, cvv} = form;
    if(!firstName || !lastName || !email || !cardNumber || !expiry || !cvv) {
      alert("Please fill out all payment fields before proceeding.");
      return;
    }

    try {
      // Fetch cart items
      const cartRes = await fetch("http://localhost:5000/api/cart");
      const cartItems = await cartRes.json();
      const cleanedItems = cartItems.map(item => ({
      ...item,
      price: parseInt(item.price.toString().replace(/[^\d]/g, "")) || 0,
      }));

      // Submit order
      const orderRes = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          payment: "Card",
          items: cleanedItems.map(item => ({
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: item.quantity
          }))
        }),
      });

      if (!orderRes.ok) throw new Error("Failed to create order");

      // Clear cart
      await fetch("http://localhost:5000/api/cart/clear", {
        method: "DELETE",
      });

      navigate("/payment-success");

      console.log("Payment success")

    } catch (err) {
      console.error("Checkout failed:", err);
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="in-h-screen bg-gray-100 flex flex-col items-center">
      <main className="p-6">
        <div className="bg-white max-w-4xl mx-auto p-6 shadow rounded">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold">Total: Rp {total.toLocaleString()}</h1>
          </header>

          <section>
            <h2 className="text-lg font-bold mb-2">Payment method</h2>
            <div className="flex space-x-4 mb-4">
              <button className="border px-4 py-2 rounded bg-green-100 border-green-400 flex items-center space-x-2">
                <span>Cards</span>
                <img src={mastercardIcon} alt="MasterCard" className="w-10 h-6" />
                <img src={visaIcon} alt="Visa" className="w-6 h-6" />
              </button>
              <button className="border px-4 py-2 rounded flex items-center space-x-2">
                <span>e-Wallet</span>
                <img src={gopayIcon} alt="Gopay" className="w-6 h-6" />
                <img src={ovoIcon} alt="OVO" className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input name="firstName" onChange={handleChange} value={form.firstName} type="text" placeholder="First name" className="border p-2 rounded" />
              <input name="lastName" onChange={handleChange} value={form.lastName} type="text" placeholder="Last name" className="border p-2 rounded" />
              <input name="email" onChange={handleChange} value={form.email} type="email" placeholder="Email address" className="border p-2 rounded col-span-2" />
              <input name="cardNumber" onChange={handleChange} value={form.cardNumber} type="text" placeholder="Card number" className="border p-2 rounded col-span-2" />
              <input name="expiry" onChange={handleChange} value={form.expiry} type="text" placeholder="MM/YY" className="border p-2 rounded" />
              <input name="cvv" onChange={handleChange} value={form.cvv} type="text" placeholder="CVV" className="border p-2 rounded" />
            </div>

            <button
              onClick={handleProceed}
              className="bg-green-400 text-white px-6 py-2 rounded hover:bg-green-500"
            >
              Proceed
            </button>
          </section>

          <footer className="mt-6">
            <button
              onClick={() => navigate("/medicalcart")}
              className="text-blue-600 text-sm hover:underline"
            >
              ‹ Return
            </button>
          </footer>
        </div>
      </main>
    </div>
  );
}
