import React, { useState } from 'react';
import { MdClose } from 'react-icons/md'; // Import the close icon
import "../App.css";
import axios from 'axios';

const RegisterForm = ({ onClose }) => {
  // Inside your RegisterForm component's state initialization
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowSuccessMessage(false);
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3030/api/customers/register', {
        firstName, 
        lastName,
        email,
        password,
      });

      if (response.data && response.data.message === 'Customer registered successfully') {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
          onClose();
        }, 2000); // Show success for 2 seconds before closing modal
      } else {
        setError('Failed to register. Please try again.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-form" style={{ position: 'relative' }}>
      <MdClose className="close-button" onClick={onClose} />
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        {showSuccessMessage && (
          <p className="success-message" style={{ color: 'black' }}>Registration successful!</p>
        )}
        {error && <p className="error-message">{error}</p>}
        {/* Inside the form in your RegisterForm component */}
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit">Register</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
