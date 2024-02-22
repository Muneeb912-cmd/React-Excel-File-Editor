// useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('authToken'));
    setIsAuthenticated(!!token);
  }, []);

  return isAuthenticated;
}; 

export default useAuth;
