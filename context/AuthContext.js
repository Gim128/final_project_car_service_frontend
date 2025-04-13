'use client';
import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('carportal_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem('carportal_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (userData) => {
    const userWithTimestamp = {
      ...userData,
      loggedInAt: new Date().toISOString()
    };
    setUser(userWithTimestamp);
    localStorage.setItem('carportal_user', JSON.stringify(userWithTimestamp));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('carportal_user');
    return true;
    // navigate('/login');
  };

  const isAuthenticated = () => !!user;
  const hasRole = (requiredRole) => user?.role === requiredRole;

  // const hasRole = (requiredRole) => {
  //   return user?.role === requiredRole;
  // };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout,isAuthenticated, hasRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);