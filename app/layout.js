'use client';

import { Geist, Geist_Mono } from "next/font/google";
import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BrowserRouter as Router } from 'react-router-dom';
import AppTemplate from './AppRouter';
import "./globals.css";


const ClientApp = dynamic(
  () => import('./ClientApp'),
  { ssr: false }
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <ClientRouter>
          <Navbar />
          {children}
          <Footer />
        </ClientRouter> */}
        <ClientApp />
      </body>
    </html>
  );
}
