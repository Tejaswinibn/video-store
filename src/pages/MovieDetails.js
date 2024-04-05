import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'; // Ensure your CSS file path is correct

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams(); // Ensure id is extracted correctly

  useEffect(() => {
    fetch(`https://video-store-ffd8896e8ec4.herokuapp.com/api/movies/${id}`)
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
        <iframe
          className="movie-video"
          src={movie.largePoster}
          title={movie.title}
          frameBorder="0"
          width="320" // Smaller width
          height="180" // Smaller height, maintaining a 16:9 aspect ratio
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button className="rent-button">Rent: ${movie.rentPrice}</button>
        <button className="purchase-button">Buy: ${movie.purchasePrice}</button>
      </div>
      <div className="synopsis-container">
  <p>{movie.synopsis}</p>
</div>

    </div>
  );
};

export default MovieDetails;
