import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TVShowDetailsPage = () => {
  const [tvShow, setTvShow] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3030/api/tvshows/${id}`)
      .then(response => response.json())
      .then(data => setTvShow(data))
      .catch(error => console.error('Error fetching TV show details:', error));
  }, [id]);

  if (!tvShow) {
    return <div>Loading TV show details...</div>;
  }

  return (
    <div className="tv-show-details-container">
      <h2>{tvShow.title}</h2>
      <div className="tv-show-meta">
        <p>Synopsis: {tvShow.synopsis}</p>
        <img src={tvShow.poster} alt={tvShow.title} className="tv-show-poster"/>
       
      </div>
    </div>
  );
};

export default TVShowDetailsPage;
