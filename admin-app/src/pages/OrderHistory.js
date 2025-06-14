import React, { useState } from 'react';
import { format } from 'date-fns';
import { CalendarDays, MoreHorizontal } from 'lucide-react';

const orders = [
  { id: '#AA01', name: 'Enrico Navarro', payment: 'QRIS', type: 'Gosend', status: 'On Progress', total: 320000 },
  { id: '#AA02', name: 'Enrico Navarro', payment: 'QRIS', type: 'Oxy Delivery', status: 'Delivered', total: 450000 },
  { id: '#AA03', name: 'Enrico Navarro', payment: 'QRIS', type: 'Gosend', status: 'Completed', total: 450000 },
  { id: '#AA04', name: 'Enrico Navarro', payment: 'QRIS', type: 'Oxy Delivery', status: 'Delivered', total: 450000 },
  // repeat as needed
];

const statusClasses = {
  'On Progress': 'bg-red-100 text-red-600',
  'Delivered': 'bg-yellow-100 text-yellow-600',
  'Completed': 'bg-green-100 text-green-600',
};

export default function OrderHistory() {
  const [selectedTab, setSelectedTab] = useState('All Orders');
  const [fromDate, setFromDate] = useState(new Date(2025, 2, 24));
  const [toDate, setToDate] = useState(new Date(2025, 2, 31));

  const renderStatus = (status) => (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusClasses[status]}`}>{status}</span>
  );

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
            {orders.map((order, idx) => (
              <tr key={idx} className="border-b">
                <td className="px-4 py-2 font-medium">{order.id}</td>
                <td className="px-4 py-2">{order.name}</td>
                <td className="px-4 py-2">{order.payment}</td>
                <td className="px-4 py-2">{order.type}</td>
                <td className="px-4 py-2">{renderStatus(order.status)}</td>
                <td className="px-4 py-2">Rp{order.total.toLocaleString()}</td>
                <td className="px-4 py-2">
                  <button className="p-2 hover:bg-gray-200 rounded-full">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
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
