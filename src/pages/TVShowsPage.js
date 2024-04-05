import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const TVShowsPage = () => {
  const [tvShows, setTvShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch all TV shows initially
  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const response = await axios.get('http://localhost:3030/api/tvshows');
        setTvShows(response.data);
      } catch (error) {
        console.error('Failed to fetch TV shows:', error);
      }
    };

    fetchTVShows();
  }, []);

  // Filter TV shows based on search query
  const filteredTVShows = tvShows.filter(tvShow =>
    tvShow.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="tv-shows-container">
  
      <input
        type="text"
        placeholder="Search for TV shows..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input" // If you have specific styles for the search input
      />
      <div className="tv-shows-grid">
        {filteredTVShows.length > 0 ? (
          filteredTVShows.map(tvShow => (
            <div className="tv-show-card" key={tvShow.id}>
              <Link to={`/tvshows/${tvShow.id}`} className="tv-show-link">
                <img src={tvShow.poster} alt={tvShow.title} className="tv-show-image" />
                <h3>{tvShow.title}</h3>
              </Link>
            </div>
          ))
        ) : (
          <p>No TV shows found.</p>
        )}
      </div>
    </div>
  );
};

export default TVShowsPage;
