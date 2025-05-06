import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    // Add additional verification logic if needed (e.g., token expiry)
    setIsAuthenticated(!!token);
    
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return { isAuthenticated };
};

export default useAuth;
