import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Ensure you have this CSS file to style your components

const TVShowsPage = () => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/tvshows')
      .then(response => response.json())
      .then(data => setTvShows(data))
      .catch(error => console.error('Error fetching TV shows:', error));
  }, []);

  return (
    <div className="tv-shows-container">
      <h1>TV Shows</h1>
      <div className="tv-shows-grid">
        {tvShows.map(tvShow => (
          <div className="tv-show-card" key={tvShow.id}>
            <Link to={`/tvshows/${tvShow.id}`} className="tv-show-link">
              <img src={tvShow.poster} alt={tvShow.title} className="tv-show-image" />
              <h3>{tvShow.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVShowsPage;
