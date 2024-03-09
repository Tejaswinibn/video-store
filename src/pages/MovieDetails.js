// src/pages/MovieDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'; // Ensure your CSS file path is correct

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [id]); 

  if (!movie) {
    return <div>Loading movie details...</div>;
  }

  return (
    <div className="movie-details-container">
      <h2>{movie.title}</h2>
      <div className="movie-poster-container">
        <img src={movie.poster} alt={movie.title} className="movie-poster" />
        <button className="rent-button">Rent: ${movie.rentPrice}</button>
        <button className="purchase-button">Buy: ${movie.purchasePrice}</button>
      </div>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetails;
