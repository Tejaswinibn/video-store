// src/pages/MoviesPage.js
import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import '../App.css'
import axios from 'axios';


const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
  
    // Fetch all movies initially
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await axios.get('http://localhost:3030/api/movies');
          setMovies(response.data);
        } catch (error) {
          console.error('Failed to fetch movies:', error);
        }
      };
  
      fetchMovies();
    }, []);
  
    // Filter movies based on search query
    const filteredMovies = movies.filter(movie => 
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="movies-grid">
          {filteredMovies.length > 0 ? (
            filteredMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      </div>
    );
  };
  
  export default MoviesPage;