import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const statusStyles = {
  Delivered: 'bg-yellow-400 text-white',
  Completed: 'bg-green-500 text-white'
}

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
  fetch("http://localhost:5000/api/orders")
    .then(res => res.json())
    .then(data => setOrders(data))
    .catch(err => console.error("Failed to load orders", err));
  }, []);

  return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-black text-gray-800">Your Orders</h1>
        <p className="text-gray-500 text-sm mt-1 font-bold">Manage and track your past orders</p>
      </div>

      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-blue-50 text-left uppercase text-xs tracking-wider text-gray-600">
              <tr>
                <th className="px-6 py-3">Order ID</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Payment</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order._id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{order._id}</td>
                  <td className="px-6 py-4">{new Date(order.date).toLocaleDateString()}</td>
                  <td className="px-6 py-4">{order.payment}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${statusStyles[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                        to={`/orders/${order._id}`}
                        className="text-blue-600 text-sm hover:underline"
                        >
                        View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
