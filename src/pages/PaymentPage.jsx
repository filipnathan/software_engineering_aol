import React from "react";
import { useNavigate } from "react-router-dom"; // ← ADD THIS
import visaIcon from "./assets/visa.png";
import mastercardIcon from "./assets/mastercard.png";
import gopayIcon from "./assets/gopay.png";
import ovoIcon from "./assets/ovo.png";

export default function PaymentPage() {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate("/payment-success");
  };

  return (
    <div className="in-h-screen bg-gray-100 flex flex-col items-center">
      <main className="p-6">
        <div className="bg-white max-w-4xl mx-auto p-6 shadow rounded">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold">Total: Rp 81.300</h1>
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
              <input type="text" placeholder="First name" className="border p-2 rounded" />
              <input type="text" placeholder="Last name" className="border p-2 rounded" />
              <input type="email" placeholder="Email address" className="border p-2 rounded col-span-2" />
              <input type="text" placeholder="Card number" className="border p-2 rounded col-span-2" />
              <input type="text" placeholder="MM/YY" className="border p-2 rounded" />
              <input type="text" placeholder="CVV" className="border p-2 rounded" />
            </div>

            <div className="mb-4 bg-blue-50 p-3 rounded flex items-center space-x-2">
              <img src={mastercardIcon} alt="MasterCard" className="w-10 h-6" />
              <span>saved card info<br />XXXXXX-XXXXX-XXXXXX</span>
            </div>

            <button
              onClick={handleProceed} // ← THIS HANDLES NAVIGATION
              className="bg-green-400 text-white px-6 py-2 rounded hover:bg-green-500"
            >
              Proceed
            </button>
          </section>

          <footer className="mt-6">
            <a href="#" className="text-sm text-gray-500 underline">&lt; Return</a>
          </footer>
        </div>
      </main>
    </div>
  );
}
