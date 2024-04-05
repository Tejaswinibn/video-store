import React, { useState, useEffect } from 'react';
import '../App.css'; // Use the same CSS file as for the movies

const FeaturedTVShows = () => {
  const [featuredTVShows, setFeaturedTVShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Update the URL to match your backend endpoint for fetching featured TV shows
    fetch('https://video-store-ffd8896e8ec4.herokuapp.com/api/tvshows/featured')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch featured TV shows');
        }
        return response.json();
      })
      .then((data) => {
        setFeaturedTVShows(data);
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
    <div className="featured-tvshows-container">
      {featuredTVShows.length > 0 ? (
        featuredTVShows.map((show) => (
          <div key={show.id} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={show.poster} alt={show.title} className="featured-tvshow-image" />
              </div>
              <div className="flip-card-back">
                {/* Add the details you want to show on the back of the card */}
                <h3>{show.title}</h3>
                <p>Rent Price: ${show.rentPrice.toFixed(2)}</p>
                {/* You can add more details here such as genre, rating, etc. */}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No featured TV shows available</div>
      )}
    </div>
  );
};

export default FeaturedTVShows;
