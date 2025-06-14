import React from "react";
import logo from "./assets/logo.png";
import lyvit from "./assets/lyvit.png"
import sumagesic from "./assets/sumagesic.png"
import amlodipine from "./assets/Amlodipine.png"
import promo from "./assets/sale.png"
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "Lyvit syrup 60ml",
    price: "Rp 52.500",
    image: lyvit,
  },
  {
    name: "Sumagesic 600mg 4 tablet",
    price: "Rp 3.200",
    image: sumagesic,
  },
  {
    name: "Amlodipine 10mg 10 tablet",
    price: "Rp 5.000",
    image: amlodipine,
  },
  {
    name: "Lyvit syrup 60ml",
    price: "Rp 52.500",
    image: lyvit,
  },
  {
    name: "Lyvit syrup 60ml",
    price: "Rp 52.500",
    image: lyvit,
  },
  {
    name: "Lyvit syrup 60ml",
    price: "Rp 52.500",
    image: lyvit,
  },
  {
    name: "Lyvit syrup 60ml",
    price: "Rp 52.500",
    image: lyvit,
  },
  {
    name: "Lyvit syrup 60ml",
    price: "Rp 52.500",
    image: lyvit,
  },
  {
    name: "Lyvit syrup 60ml",
    price: "Rp 52.500",
    image: lyvit,
  },
  {
    name: "Lyvit syrup 60ml",
    price: "Rp 52.500",
    image: lyvit,
  },
  {
    name: "Lyvit syrup 60ml",
    price: "Rp 52.500",
    image: lyvit,
  },
  {
    name: "Lyvit syrup 60ml",
    price: "Rp 52.500",
    image: lyvit,
  },
  {
    name: "Lyvit syrup 60ml",
    price: "Rp 52.500",
    image: lyvit,
  },
];


const MedicinesPage = () => {
  const navigate = useNavigate();
  return (
    <div className="in-h-screen bg-gray-100 flex flex-col items-center">
      <button
        onClick={() => navigate("/medicalcart")}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-green-700 text-white px-4 py-2 rounded-full shadow"
      >
        🛒
      </button>

      <main className="p-4 flex flex-col lg:flex-row">
        <aside className="w-full lg:w-1/5 p-4">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="font-bold mb-2">CATEGORIES</h2>
            <ul className="space-y-1 text-sm">
              <li> PRESCRIPTION MEDICATIONS +</li>
              <li> OVER-THE-COUNTER MEDICATIONS +</li>
              <li> VITAMINS & SUPPLEMENTS +</li>
              <li> FIRST AID & WOUND CARE +</li>
              <li> DIABETIC CARE +</li>
              <li> WOMEN'S HEALTH & PREGNANCY +</li>
              <li> LAB TEST KITS & HOME DIAGNOSTICS +</li>
            </ul>
          </div>
          <div className="mt-6">
            <img src={promo} alt="Promo" className="rounded shadow" />
          </div>
        </aside>

        <section className="flex-1 p-4">
          <div className="bg-blue-100 p-4 rounded flex justify-between items-center mb-6">
            <p className="text-lg font-semibold">
              Stay healthy in unpredictable weather. Boost immunity, stay hydrated, and dress smart!
            </p>
            <div className="text-3xl">🌧️</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((prod, index) => (
              <div key={index} className="bg-white p-4 shadow rounded text-center">
                <img src={prod.image} alt={prod.name} className="h-28 mx-auto mb-2" />
                <p className="font-semibold">{prod.name}</p>
                <p className="text-sm text-gray-600">★ ★ ★ ★ ☆</p>
                <p className="text-sm">{prod.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center space-x-2">
            <button className="px-2 py-1 border rounded">1</button>
            <button className="px-2 py-1 border bg-blue-500 text-white rounded">2</button>
            <button className="px-2 py-1 border rounded">3</button>
            <button className="px-2 py-1 border rounded">→</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MedicinesPage;
