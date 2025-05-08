'use client';

import dynamic from 'next/dynamic';
import { AuthProvider } from '@/context/AuthContext';
import "./globals.css";


const ClientApp = dynamic(
  () => import('./ClientApp'),
  { ssr: false, loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div> }
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
      <body className="min-h-screen bg-gray-50">
        <AuthProvider>
        <ClientApp />
        </AuthProvider>
      </body>
    </html>
  );
}
