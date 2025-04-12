'use client';
import { BrowserRouter } from 'react-router-dom';

export default function ClientRouter({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}