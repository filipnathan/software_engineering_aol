import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

export default function OrderDetailPage() {
  const { orderId } = useParams();
  console.log("Order ID from URL:", orderId);

  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/orders/${orderId}`)
      .then(res => {
        if (!res.ok) throw new Error("Order not found");
        return res.json();
      })
      .then(data => {
        console.log("Fetched order data:", data);
        setOrder(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err.message);
        setError(err.message);
        setLoading(false);
      });
  }, [orderId]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error || !order) return <div className="p-6 text-red-600">Order not found</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      <div className="mb-4">
        <p><strong>ID:</strong> {order._id}</p>
        <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
        <p><strong>Status:</strong> {order.status}</p>
        <p><strong>Payment:</strong> {order.payment}</p>
      </div>
      <h2 className="text-xl font-semibold mb-2">Items</h2>
      <ul className="space-y-2">
        {order.items.map((item, index) => (
          <li key={index} className="border p-2 rounded">
            <p><strong>{item.name}</strong></p>
            <p>Price: Rp {parseInt(item.price).toLocaleString()}</p>
            <p>Quantity: {item.quantity}</p>
          </li>
        ))}
      </ul>
      <button
        onClick={() => navigate("/orders")}
        className="mt-4 text-blue-600 hover:underline"
      >
        ‹ Back to Orders
      </button>
    </div>
  );
}
