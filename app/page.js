'use client';
import { Routes, Route } from 'react-router-dom';
import dynamic from 'next/dynamic';
// import ContactUsPage from '../pages/ContactUsPage';

// Dynamically import pages to ensure they're client-side only
const HomePage = dynamic(() => import('../pages/HomePage'), { ssr: false });
const ContactUsPage = dynamic(() => import('../pages/ContactUsPage'), { ssr: false });

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactUsPage />} />
    </Routes>
  );
}