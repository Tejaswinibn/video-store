// src/pages/MoviesPage.js
import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import '../App.css'; 

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/movies')
            .then(response => response.json())
            .then(data => setMovies(data));
    }, []);

    return (
        <div>
            <div className="movies-grid">
                
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MoviesPage;
