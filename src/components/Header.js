import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalComponent from './ModalComponent';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Header = ({ isAuthenticated, onLogout }) => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  return (
    <header>
      <nav className="nav">
        <div className="nav-left">
          <img src="/images/logo.webp" alt="My Logo" className="logo" />
          <Link to={isAuthenticated ? "/home" : "/"} className="nav-link">Home</Link>
          <Link to="/movies" className="nav-link">Movies</Link>
          <Link to="/tvshows" className="nav-link">TV Shows</Link>
        </div>
        <div className="nav-right">
          {!isAuthenticated ? (
            <>
              <span className="nav-button" onClick={() => setRegisterOpen(true)}>Register</span>
            </>
          ) : (
            <>
              <span className="nav-button" onClick={onLogout}>Logout</span>
              <Link to="/profile" className="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
  <path d="M18 19v-1.5A2.5 2.5 0 0 0 15.5 15h-11a2.5 2.5 0 0 0-2.5 2.5V19M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM4 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>

              </Link>
            </>
          )}
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
};

export default Header;
