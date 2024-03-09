import React, { useState, useEffect } from 'react';

const FeaturedMovies = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/featured-movies')
      .then((response) => response.json())
      .then((data) => setFeaturedMovies(data))
      .catch((error) => console.error('Failed to fetch featured movies:', error));
  }, []);

  return (
    <div className="featured-movies-container">
      {featuredMovies.map((movie) => (
        <img key={movie.id} src={movie.poster} alt={movie.title} className="featured-movie-image" />
      ))}
    </div>
  );
};

export default FeaturedMovies;
