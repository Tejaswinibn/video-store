//  TVShowCard.js 
import React from 'react';

const TVShowCard = ({ TVShow }) => (
  <div className="TVShow-card">
    <img src={TVShow.poster} alt={TVShow.title} />
    <h3>{TVShow.title}</h3>
    
  </div>
);

export default TVShowCard;
