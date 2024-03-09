import React, { useState, useRef } from 'react';
import { MdPlayArrow, MdPause } from 'react-icons/md'; // Import play and pause icons
import '../App.css';

const ContentSectionTwo = () => {
  const [userReview, setUserReview] = useState('');
  const [isPlaying, setIsPlaying] = useState(false); // State to track play status
  const videoRef = useRef(null); // Reference to the video iframe

  const handleReviewChange = (event) => {
    setUserReview(event.target.value);
  };

  const handleSubmitReview = () => {
    console.log("User Review Submitted:", userReview);
    setUserReview(''); // Reset the review input after submit
  };

  // Toggle play/pause state
  const togglePlay = () => {
    const iframe = videoRef.current;
    const iframeSrc = iframe.src;
    setIsPlaying(!isPlaying);

    // Toggle the video play/pause by modifying the iframe src attribute
    if (!isPlaying) {
      iframe.src += "&autoplay=1"; // Play the video
    } else {
      iframe.src = iframeSrc.replace("&autoplay=1", ""); // Pause the video
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
      <div className="content-layout">
        <div className="images-container">
          <img src="/images/argylle.jpeg" alt="Cinema Spotlight" className="spotlight-image" />
        </div>
        <div className="interaction-section">
          <button className="subscribe-button">Purchase</button>
          <textarea
            value={userReview}
            onChange={handleReviewChange}
            placeholder="Leave a review..."
            className="review-input"
          ></textarea>
          <button onClick={handleSubmitReview} className="submit-review">Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionTwo;
