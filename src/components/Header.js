import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalComponent from './ModalComponent';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Header = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

 // Header component

return (
  <header>
    <nav className="nav">
      <div className="nav-left">
        <img src="/images/logo.webp" alt="My Logo" className="logo" /> 
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/movies" className="nav-link">Movies</Link>
        <Link to="/tvshows" className="nav-link">TV Shows</Link>
      </div>
      <div className="nav-right">
        
        <span className="nav-button" onClick={() => setLoginOpen(true)}>Log In</span>
        <span className="nav-button" onClick={() => setRegisterOpen(true)}>Register</span>
      </div>
    </nav>
    <ModalComponent isOpen={isLoginOpen} closeModal={() => setLoginOpen(false)}>
      <LoginForm onClose={() => setLoginOpen(false)} />
    </ModalComponent>
    <ModalComponent isOpen={isRegisterOpen} closeModal={() => setRegisterOpen(false)}>
      <RegisterForm onClose={() => setRegisterOpen(false)} />
    </ModalComponent>
  </header>
);

}


export default Header;
