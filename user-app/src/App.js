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

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Header />
      <main className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={
            <PrivateRoute>
            <ProfilePage />
            </PrivateRoute>} />
          <Route path="/orders" element={
            <PrivateRoute>
            <OrdersPage />
            </PrivateRoute>} />
          <Route path="/orders/:orderId" element={
            <PrivateRoute>
            <OrderDetailPage />
            </PrivateRoute>} />
          <Route path="/contact" element={
            <PrivateRoute>
            <ContactUsPage />
            </PrivateRoute>} />
          <Route path="/medicalcart" element={
            <PrivateRoute>
            <MedicalCart />
            </PrivateRoute>} />
          <Route path="/payment" element={
            <PrivateRoute>
            <PaymentPage />
            </PrivateRoute>} />
          <Route path="/payment-success" element={
            <PrivateRoute>
            <PaymentSuccessPage />
            </PrivateRoute>} />
          <Route path="/medicines" element={
            <PrivateRoute>
            <MedicinesPage />
            </PrivateRoute>} />
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