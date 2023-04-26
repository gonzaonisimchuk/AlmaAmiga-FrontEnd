import React from 'react';
import { Navigate } from 'react-router-dom';
import storage from '../utils/storage';

const PrivateRoute = ({ children }) => {
  return storage.isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
