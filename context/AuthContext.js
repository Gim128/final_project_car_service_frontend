'use client';
import { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const storedUser = localStorage.getItem('carportal_user');
  //   if (storedUser) {
  //     try {
  //       setUser(JSON.parse(storedUser));
  //     } catch (error) {
  //       localStorage.removeItem('carportal_user');
  //     }
  //   }
  //   setIsLoading(false);
  // }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const logout = useCallback(() => {
      localStorage.removeItem('authToken');
      setUser(null);
      // navigate('/login');
    });

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Verify token and fetch user data
      const fetchUser = async () => {
        try {
          // add API call to verify token and get user data
          // const userData = await verifyToken(token);
          // setUser(userData);
        } catch (error) {
          logout();
        }
      };
      fetchUser();
    }
  }, [logout]);

  const login = (token, userData) => {
    localStorage.setItem('authToken', token);
    setUser(userData);
    // navigate('/account');
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