import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  PackageCheck,
  DollarSign,
  ShoppingCart,
} from "lucide-react";

const data = [
  { name: "Mon", revenue: 50, profit: 30 },
  { name: "Tue", revenue: 52, profit: 32 },
  { name: "Wed", revenue: 53, profit: 33 },
  { name: "Thu", revenue: 51, profit: 31 },
  { name: "Fri", revenue: 54, profit: 34 },
  { name: "Sat", revenue: 53, profit: 33 },
  { name: "Sun", revenue: 30, profit: 20 },
];

const Dashboard = () => {
  console.log("Dashboard loaded");
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <p className="text-sm text-gray-500">31 March 2025</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <p className="text-lg font-semibold">Rp50,000,000</p>
            </div>
            <DollarSign className="text-blue-500" />
          </div>
          <p className="text-green-500 text-sm">▲ 30% than last month</p>
        </div>

        <div className="bg-white p-4 rounded shadow space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Profit</p>
              <p className="text-lg font-semibold">Rp20,000,000</p>
            </div>
            <TrendingUp className="text-orange-500" />
          </div>
          <p className="text-green-500 text-sm">▲ 20% than last month</p>
        </div>

        <div className="bg-white p-4 rounded shadow space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Orders</p>
              <p className="text-lg font-semibold">420</p>
            </div>
            <ShoppingCart className="text-pink-500" />
          </div>
          <p className="text-green-500 text-sm">▲ 10% than last month</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-sm font-medium text-gray-700 mb-2">Weekly Sales</h2>
        <p className="text-xs text-gray-400 mb-4">24 March 2025 - 31 March 2025</p>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#60A5FA" radius={[4, 4, 0, 0]} />
            <Bar dataKey="profit" fill="#86EFAC" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded shadow space-y-4 md:max-w-sm">
        <h2 className="text-sm font-medium text-gray-700">Order Summary</h2>
        <div className="flex items-center justify-between">
          <span className="text-gray-500">On Progress</span>
          <span className="font-semibold">10</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Delivered</span>
          <span className="font-semibold">10</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Completed</span>
          <span className="font-semibold">10</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
