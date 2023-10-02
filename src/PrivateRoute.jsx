import React from 'react';
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ component: Component }) {
  const { user } = useAuth();
  const isAuthenticated = localStorage.getItem('authenticated');

  if (!user && !isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Component />;
}

export default PrivateRoute;
