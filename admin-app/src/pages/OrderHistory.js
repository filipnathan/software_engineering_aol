import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { CalendarDays, MoreHorizontal } from 'lucide-react';
import { Trash2 } from 'lucide-react';

const statusClasses = {
  'On Progress': 'bg-red-100 text-red-600',
  'Delivered': 'bg-yellow-100 text-yellow-600',
  'Completed': 'bg-green-100 text-green-600',
  'Processing': 'bg-blue-100 text-blue-600', 
};

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  const [selectedTab, setSelectedTab] = useState('All Orders');
  const [fromDate, setFromDate] = useState(new Date(2025, 2, 24));
  const [toDate, setToDate] = useState(new Date(2025, 2, 31));

  const renderStatus = (status) => (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusClasses[status]}`}>{status}</span>
  );

  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched orders:", data);
        setOrders(data);
      })
      .catch((err) => {
        console.error("Failed to fetch orders:", err);
      });
  }, []);

  const handleDelete = async (orderId) => {
    const confirmed = window.confirm("Are you sure you want to delete this order?");
    if (!confirmed) return;

    try {
      const res = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Delete failed:", errorData);
        throw new Error("Failed to delete order");
      }

      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete order");
    }
  };


  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Order History</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4 text-sm">
          {['All Orders', 'Summary', 'Completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`py-1 px-3 rounded-full font-medium ${selectedTab === tab ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <CalendarDays className="w-4 h-4 text-gray-500" />
            <input
              type="date"
              value={format(fromDate, 'yyyy-MM-dd')}
              onChange={(e) => setFromDate(new Date(e.target.value))}
              className="border px-2 py-1 rounded-md text-sm"
            />
          </div>
          <span>To</span>
          <div className="flex items-center space-x-2">
            <CalendarDays className="w-4 h-4 text-gray-500" />
            <input
              type="date"
              value={format(toDate, 'yyyy-MM-dd')}
              onChange={(e) => setToDate(new Date(e.target.value))}
              className="border px-2 py-1 rounded-md text-sm"
            />
          </div>
        </div>
      </div>

      <div className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Payment</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => {
              const total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

              return (
                <tr key={idx} className="border-b">
                  <td className="px-4 py-2 font-medium">#{order._id.slice(-4).toUpperCase()}</td>
                  <td className="px-4 py-2">User</td> {/*not yet added*/}
                  <td className="px-4 py-2">{order.payment}</td>
                  <td className="px-4 py-2">{order.items.length > 1 ? 'Mixed Items' : order.items[0]?.name}</td>
                  <td className="px-4 py-2">{renderStatus(order.status)}</td>
                  <td className="px-4 py-2">Rp{total.toLocaleString()}</td>
                  <td className="px-4 py-2">
                    <button
                      className="p-2 hover:bg-red-100 text-red-600 rounded-full"
                      onClick={() => handleDelete(order._id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-end space-x-2 text-sm">
        {[1, 2, 3, 4, 5].map((page) => (
          <button key={page} className="px-2 py-1 hover:bg-gray-200 rounded">
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
