import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, [location]);

  return (
    <header className="bg-[#F0F6F9] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* ✅ Logo now clickable — links to Home */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-blue-800">
            <span className="text-green-600">Oxy</span>Pharmacy
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 h-10">
          {/* ✅ Show Sign In if not logged in and not on login/register page */}
          {!isLoggedIn &&
            location.pathname !== '/login' &&
            location.pathname !== '/register' && (
              <Link
                to="/login"
                className="bg-green-600 text-white rounded-full px-4 py-1 text-sm font-medium hover:bg-green-700 transition"
              >
                Sign In
              </Link>
          )}

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-green-600 font-bold'
                : 'text-blue-900 hover:text-blue-700 font-semibold'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/medicines"
            className={({ isActive }) =>
              isActive
                ? 'text-green-600 font-bold'
                : 'text-blue-900 hover:text-blue-700 font-semibold'
            }
          >
            Medicines
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive
                ? 'text-green-600 font-bold'
                : 'text-blue-900 hover:text-blue-700 font-semibold'
            }
          >
            Orders
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-green-600 font-bold'
                : 'text-blue-900 hover:text-blue-700 font-semibold'
            }
          >
            Contact Us
          </NavLink>

          {/* ✅ Profile Icon now links to /profile */}
          <Link to="/profile" title="Profile">
            <span className="material-symbols-outlined text-3xl text-blue-700 hover:text-blue-800 transition">
              account_circle
            </span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
