import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import TVShowsPage from './pages/TVShowsPage';
import MovieDetails from './pages/MovieDetails';
import TVShowDetails from './pages/TVShowDetails';
import AppFooter from './components/AppFooter';
import ProfilePage from './pages/ProfilePage';
import './App.css';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  // Initialize isAuthenticated from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');



  const handleLoginSuccess = (customerId) => {
    localStorage.setItem('customerId', customerId); // Save customerId in localStorage
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };
  
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Clear persisted state
  };

  // Effect hook to update localStorage whenever isAuthenticated changes
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated.toString());
  }, [isAuthenticated]);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />

      <div className="app-container">
        <div className="content-wrap">
          

          <Routes>
            <Route path="/" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/home" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <HomePage />
              </ProtectedRoute>
            } />
            <Route path="/movies" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <MoviesPage />
              </ProtectedRoute>
            } />
           <Route path="/movies/:id" element={
  <ProtectedRoute isAuthenticated={isAuthenticated}>
    <MovieDetails />
  </ProtectedRoute>
} />

            <Route path="/tvshows" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <TVShowsPage />
              </ProtectedRoute>
            } />
            <Route path="/tvshows/:id" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <TVShowDetails />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
  <ProtectedRoute isAuthenticated={isAuthenticated}>
    <ProfilePage customerId={localStorage.getItem('customerId')} />
  </ProtectedRoute>
} />

            <Route path="*" element={<Navigate replace to={isAuthenticated ? "/home" : "/"} />} />
          </Routes>
        </div>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
