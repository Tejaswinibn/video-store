import React, { useState } from 'react';
import { MdClose } from 'react-icons/md'; // Import the close icon
import '../App.css'; // Assuming your CSS styles are here

const LoginForm = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose(); // Close the modal after submission
  };

  return (
    <div className="login-form" style={{position: 'relative'}}>
     
        <MdClose className="close-button" onClick={onClose} /> {/* Use MdClose icon as the close button */}
      
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit">Log In</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
