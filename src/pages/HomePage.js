import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedMovies from '../components/FeaturedMovies';
import FeaturedTVShows from '../components/FeaturedTVShows';
import ContentSectionOne from '../components/ContentSectionOne';
import ContentSectionTwo from '../components/ContentSectionTwo';
const HomePage = () => {
  return (
    <div>
      <HeroSection /> 
      <FeaturedMovies /> 
      <FeaturedTVShows /> 
      <ContentSectionOne />
      <ContentSectionTwo />
    </div>
  );
};

export default HomePage;
