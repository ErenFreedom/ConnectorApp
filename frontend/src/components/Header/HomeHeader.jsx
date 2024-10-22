import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HomeHeader.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <h1>Connector App</h1>
        <ul>
          {/* Conditionally render Logout button on the dashboard page */}
          {location.pathname === '/dashboard' && (
            <li>
              <button className="button-81">Logout</button>
            </li>
          )}

          {/* Conditionally render the Login/Signup buttons based on the current route */}
          {location.pathname !== '/otp' && location.pathname !== '/login' && location.pathname !== '/localserver' && location.pathname !== '/cloudconnect' && location.pathname !== '/dashboard' && (
            <li>
              <Link to="/login">
                <button className="button-81">Login</button>
              </Link>
            </li>
          )}

          {location.pathname !== '/otp' && location.pathname !== '/localserver' && location.pathname !== '/cloudconnect' && location.pathname !== '/dashboard' && (
            <li>
              <button className="button-81">Signup</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
