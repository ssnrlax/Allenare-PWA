import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './pages/ProtectedRoute'; // Ajustaremos esta ruta si es necesario
import ReloadPrompt from './ReloadPrompt';
import PWABadge from './PWABadge';
import './App.css';

function App() {
  // Revisa sessionStorage para mantener el estado de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem('isAuthenticated') === 'true';
    } catch (e) {
      console.warn('No se pudo acceder a sessionStorage. Se iniciará sin autenticación.');
      return false;
    }
  });

  // Actualiza sessionStorage cuando el estado de autenticación cambia
  useEffect(() => {
    try {
      sessionStorage.setItem('isAuthenticated', isAuthenticated);
    } catch (e) {
      console.warn('No se pudo escribir en sessionStorage. El estado de autenticación no se persistirá.');
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <DashboardPage />
              </ProtectedRoute>
            } />
          <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
        </Routes>
      </Router>
      <ReloadPrompt />
      <PWABadge />
    </>
  );
}

export default App;