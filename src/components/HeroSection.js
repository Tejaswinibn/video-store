import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/top-movies-2021')
      .then((response) => response.json())
      .then((data) => {
        const transformedData = data.map(item => ({
          id: item.id,
          image: item.poster, 
          title: item.title
        }));
        setSlides(transformedData);
      })
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
            <img src={slide.image} alt={slide.title} className="slide-image" />
            <h3>{slide.title}</h3> 
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
