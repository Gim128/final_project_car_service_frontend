import { useAuth } from '@/context/AuthContext';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuthAuth(); // Your authentication check
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;