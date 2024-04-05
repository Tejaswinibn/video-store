import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/api/movies/top')
      .then((response) => response.json())
      .then((data) => setSlides(data))
      .catch((error) => console.log(error));
  }, []);
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="hero-section">
      <Slider {...settings} className="custom-slider">
        {slides.map((slide) => (
          <div key={slide.id}>
            <img src={slide.poster} alt={slide.title} className="slide-image" />
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
