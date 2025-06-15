import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MedicalCart from "./pages/MedicalCart";
import PaymentPage from "./pages/PaymentPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import MedicinesPage from "./pages/MedicinesPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import ContactUsPage from "./pages/ContactUsPage";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import GoogleAuth from './pages/GoogleAuth';
import RecoverPassword from './pages/RecoverPassword';

function App() {
  return (
    <Router>
      <Header />
      <main className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/orders/:orderId" element={<OrderDetailPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/medicalcart" element={<MedicalCart />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
          <Route path="/medicines" element={<MedicinesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/auth/google" element={<GoogleAuth />} />
          <Route path="/recover" element={<RecoverPassword />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;