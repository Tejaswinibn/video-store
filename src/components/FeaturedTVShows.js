// src/components/FeaturedTVShows.js
import React, { useState, useEffect } from 'react';

const FeaturedTVShows = () => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/featured-tvshows')
      .then(response => response.json())
      .then(data => setTvShows(data))
      .catch(error => console.error('Error fetching featured TV shows:', error));
  }, []);

  return (
    <div className="featured-tvshows-container">
      <div className="tvshows-grid">
        {tvShows.map((tvShow) => (
          <div key={tvShow.id} className="tvshow">
            <img src={tvShow.poster} alt={tvShow.title} />
            <h3>{tvShow.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTVShows;
