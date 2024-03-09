import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import TVShowsPage from './pages/TVShowsPage';
import MovieDetails from './pages/MovieDetails';
import TVShowDetails from './pages/TVShowDetails';
import './App.css';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/tvshows" element={<TVShowsPage />} />
            <Route path="/tvshows/:id" element={<TVShowDetails />} />
          </Routes>
        </div>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
