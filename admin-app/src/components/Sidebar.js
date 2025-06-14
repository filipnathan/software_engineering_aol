import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LogOut } from "lucide-react";

const Sidebar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Order History", path: "/order-history" },
    { name: "Support", path: "/support" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md min-h-screen p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">
          <span className="text-green-500">Oxy</span>
          <span className="text-blue-600">Pharmacy</span>
        </h1>

      </div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`block px-4 py-2 rounded-lg text-sm font-medium ${
              pathname === item.path
                ? "bg-blue-100 text-blue-800"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <button className="flex items-center gap-2 text-red-600 hover:text-red-800 text-sm">
        <LogOut size={16} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
