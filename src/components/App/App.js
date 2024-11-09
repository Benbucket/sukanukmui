import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../Login/Login';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  );
}

export default App;