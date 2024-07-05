// pages/Home.js
import React from 'react';
import AdminPanel from '../../components/adminPanel/adminPanel';
import ProtectedRoute from '../../components/utils/ProtectedRoute';


const ProtectedAdminPanel = ProtectedRoute(AdminPanel);

const Home = () => {
  return <ProtectedAdminPanel />;
};

export default Home;
