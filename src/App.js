import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import RepairManager from './pages/RepairManager';
import Profile from './pages/Profile';
import Navigation from './components/Navigation';
import './styles/App.css';

const AppContent = ({ repairs, setRepairs, user, onLogin, onLogout }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} replace />} />

        <Route path="/login" element={
          user ? <Navigate to="/dashboard" replace /> : <Login onLogin={onLogin} />
        } />

        <Route path="/signup" element={
          user ? <Navigate to="/dashboard" replace /> : <Signup onLogin={onLogin} />
        } />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={
          user ? <Dashboard user={user} repairs={repairs} /> : <Navigate to="/login" replace />
        } />

        <Route path="/repairs" element={
          user ? <RepairManager repairs={repairs} setRepairs={setRepairs} /> : <Navigate to="/login" replace />
        } />

        <Route path="/profile" element={
          user ? <Profile user={user} onLogout={onLogout} onUpdateUser={onLogin} /> : <Navigate to="/login" replace />
        } />

        {/* Placeholder routes */}
        <Route path="/fuel" element={<Navigate to="/dashboard" replace />} />
        <Route path="/stats" element={<Navigate to="/dashboard" replace />} />

        {/* Catch all - redirects unknown routes to prevent console warnings from extensions */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Show Nav only if logged in */}
      {user && <Navigation />}
    </>
  );
};

function App() {
  // Initialize user from local storage immediately to prevent flash
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [repairs, setRepairs] = useState([]);

  // Load user-specific repairs when user changes
  useEffect(() => {
    if (user) {
      const userRepairsKey = `repairs_${user.username}`;
      const savedRepairs = localStorage.getItem(userRepairsKey);
      if (savedRepairs) {
        setRepairs(JSON.parse(savedRepairs));
      } else {
        setRepairs([]); // New user gets empty list
      }
    } else {
      setRepairs([]); // Logout clears view
    }
  }, [user]);

  // Save repairs to user-specific storage key
  useEffect(() => {
    if (user) {
      const userRepairsKey = `repairs_${user.username}`;
      localStorage.setItem(userRepairsKey, JSON.stringify(repairs));
    }
  }, [repairs, user]);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    // Note: We don't remove the 'repairs_username' data, so it persists for next login
  };

  return (
    <Router>
      <AppContent
        repairs={repairs}
        setRepairs={setRepairs}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
    </Router>
  );
}

export default App;
