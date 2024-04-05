import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginError('');
    try {
      const response = await axios.post('https://video-store-ffd8896e8ec4.herokuapp.com/api/customers/authenticate', {
        email,
        password,
      });
      console.log("Authentication successful", response.data);

      if (onLoginSuccess) {
        const customerId = response.data.customer.id;
        onLoginSuccess(customerId); // Pass the customer ID to onLoginSuccess
        console.log(customerId);
      }
      
      navigate('/profile'); // Navigate to the profile page

    } catch (error) {
      console.error('Error logging in:', error);
      setLoginError('Failed to log in. Please check your credentials and try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Sign In</h1>
        {loginError && <div className="login-error">{loginError}</div>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
