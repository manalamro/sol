import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [role, setRole] = useState(localStorage.getItem('role') || 'guest');
  

  useEffect(() => {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }, [token, role]);

  // Add login function to update token and role state together
  const login = (newToken, newRole) => {
    setToken(newToken);
    setRole(newRole);
  };

  return (
    <AuthContext.Provider value={{ token, role, setToken, setRole, login }}>
      {children}
    </AuthContext.Provider>
  );
};
