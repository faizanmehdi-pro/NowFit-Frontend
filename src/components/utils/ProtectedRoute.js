// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isTokenValid } from './utils';

const ProtectedRoute = (Component) => {
  return (props) => {
    if (!isTokenValid()) {
      return <Navigate to="/" />;
    }

    return <Component {...props} />;
  };
};

export default ProtectedRoute;
