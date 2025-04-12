import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import ContactUsPage from '@/pages/ContactUsPage';
import LoginForm from '@/app/auth/LoginForm';
import SignupForm from '@/components/SignupForm';
import { useAuth } from '../context/AuthContext';

const ClientApp = () => {

  const { isLoggedIn } = useAuth();

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/login" element={!isLoggedIn ? <LoginForm /> : <Navigate to="/" />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default ClientApp;