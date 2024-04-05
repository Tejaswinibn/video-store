// ProfilePage.js
import React, { useState, useEffect } from 'react';
import '../App.css'; // Ensure you have this CSS file

const ProfilePage = () => {
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const customerId = localStorage.getItem('customerId');
    if (customerId) {
      fetch(`https://video-store-ffd8896e8ec4.herokuapp.com/api/customers/authenticate/api/customers/${customerId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to fetch customer information for ID: ${customerId}`);
          }
          return response.json();
        })
        .then(data => {
          setCustomer(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching customer information:', error);
          setError(error.message);
          setLoading(false);
        });
    } else {
      setLoading(false);
      setError('No customerId provided');
    }
  }, []);

  if (loading) {
    return <div className="loading">Loading your profile...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!customer) {
    return <div className="not-found">No customer found.</div>;
  }

  return (
    <div className="profile-container">
      <h1 className="welcome-message">Welcome to  our Hungama Hub, {customer.firstName || 'Cinephile'}!</h1>
      <div className="customer-info">
        <p><strong>Name:</strong> {customer.firstName || 'N/A'}</p>
        <p><strong>Email:</strong> {customer.email}</p>
      </div>
      <div className="movie-info">
        <h2>Explore the World of Movies</h2>
        <p>Discover films from across the globe, from heartwarming animations to gripping dramas. Dive into behind-the-scenes content, read about the latest in the industry, and expand your movie knowledge with us.</p>
        <h2>TV Shows to Binge</h2>
        <p>Whether you're looking for a new series to binge or trying to keep up with your current shows, find out what's trending. Join discussions on your favorite TV moments and share your predictions for upcoming seasons.</p>
      </div>
    </div>
  );
};

export default ProfilePage;
