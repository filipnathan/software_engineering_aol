import React from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import lyvitImg from "./assets/lyvit.png";
import sumagesicImg from "./assets/sumagesic.png";

export default function MedicalCart() {
  const navigate = useNavigate();

  return (
    <div className="in-h-screen bg-gray-100 flex flex-col items-center">
      <main className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow rounded-xl">
        <h1 className="text-2xl font-bold mb-6">Your medical cart</h1>
        <div className="border-b pb-4">
          <div className="flex items-center gap-4 mb-4">
            <img src={lyvitImg} alt="Lyvit Syrup" className="h-20" />
            <div className="flex-1">
              <p className="font-semibold">Lyvit syrup 60ml</p>
              <p className="text-sm text-gray-500">per botol</p>
              <button className="text-red-600 text-sm mt-1">× Remove</button>
            </div>
            <div className="text-right">
              <p>Rp 52.500</p>
              <p className="text-sm text-gray-500">Qty: 1</p>
              <p className="font-semibold">Rp 52.500</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <img src={sumagesicImg} alt="Sumagesic" className="h-20" />
            <div className="flex-1">
              <p className="font-semibold">Sumagesic 600mg 4 tablet</p>
              <p className="text-sm text-gray-500">per strip</p>
              <button className="text-red-600 text-sm mt-1">× Remove</button>
            </div>
            <div className="text-right">
              <p>Rp 3.200</p>
              <p className="text-sm text-gray-500">Qty: 3</p>
              <p className="font-semibold">Rp 9.600</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <p className="font-bold text-lg">Total: Rp 81.300</p>
          <Button onClick={() => navigate("/payment")}>🛒 Checkout</Button>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <a href="#" className="hover:underline">‹ Continue shopping</a>
        </div>
      </main>
    </div>
  );
}
