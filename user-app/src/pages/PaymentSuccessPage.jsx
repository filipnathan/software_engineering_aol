import React from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccessPage() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <main className="flex flex-col items-center justify-center bg-white shadow-md mt-20 p-10 rounded-xl relative">
        <div className="text-6xl mb-4">👍</div>
        <h2 className="text-2xl font-bold text-center">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">order id <span className="font-semibold">#A001</span></p>
        <button 
        onClick={() => navigate("/orders")}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        > 
        View order
        </button>
      </main>
    </div>
  );
}
