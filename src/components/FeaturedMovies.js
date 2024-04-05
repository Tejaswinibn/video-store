import React, { useState, useEffect } from 'react';
import '../App.css'; // Make sure to create this CSS file for flip card styles

const FeaturedMovies = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3030/api/movies/featured')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch featured movies');
        }
        return response.json();
      })
      .then((data) => {
        setFeaturedMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="featured-movies-container">
      {featuredMovies.length > 0 ? (
        featuredMovies.map((movie) => (
          <div key={movie.id} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={movie.poster} alt={movie.title} className="featured-movie-image" />
              </div>
              <div className="flip-card-back">
                {/* Add the details you want to show on the back of the card */}
                <h3>{movie.title}</h3>
                
                <p>Rent Price: ${movie.rentPrice.toFixed(2)}</p>
                {/* Add more details if needed */}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No featured movies available</div>
      )}
    </div>
  );
};

export default FeaturedMovies;
