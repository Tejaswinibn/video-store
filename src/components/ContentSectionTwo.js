import React, { useState, useRef } from 'react';
import { MdPlayArrow, MdPause } from 'react-icons/md'; // Import play and pause icons
import '../App.css';

const ContentSectionTwo = () => {
  const [isPlaying, setIsPlaying] = useState(false); // State to track play status
  const videoRef = useRef(null); // Reference to the video iframe

  // Toggle play/pause state
  const togglePlay = () => {
    const iframe = videoRef.current;
    const iframeSrc = iframe.src;
    setIsPlaying(!isPlaying);

    // Toggle the video play/pause by modifying the iframe src attribute
    if (!isPlaying) {
      iframe.src += "&autoplay=1"; // Play the video
    } else {
      // Attempt to pause the video might not work due to restrictions from YouTube in an iframe
      // Resetting the src is a workaround, but it stops the video and resets it to the beginning
      iframe.src = iframeSrc.replace("&autoplay=1", ""); 
    }
  };

  return (
    <div className="content-section-two">
      <div className="section-heading">
        <h2>$5.99 CINEMA SPOTLIGHT</h2>
      </div>
      <div className="video-background-container" onClick={togglePlay}>
        {/* Display play/pause icon based on isPlaying state */}
        {isPlaying ? <MdPause className="video-control-icon" /> : <MdPlayArrow className="video-control-icon" />}
        <iframe
          ref={videoRef}
          src="https://www.youtube.com/embed/7mgu9mNZ8Hk?controls=0&showinfo=0&rel=0&loop=1&playlist=7mgu9mNZ8Hk"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Video Title"
          className="video-background"
        ></iframe>
      </div>
      <div className="images-container">
        <img src="/images/argylle.jpeg" alt="Cinema Spotlight" className="spotlight-image" />
      </div>
    </div>
  );
};

export default ContentSectionTwo;
