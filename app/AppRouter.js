'use client";'

import ContactUs from "@/components/ContactUs";
import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";
import LoginForm from "@/app/auth/LoginForm";
import Navbar from "@/components/Navbar";
import SignupForm from "@/components/SignupForm";
import HomePage from "@/pages/HomePage";
import Image from "next/image";
import { Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

  );
};

