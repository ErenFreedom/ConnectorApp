import React, { useState } from 'react';
import Header from '../../components/Header/HomeHeader';
import Footer from '../../components/Footer/HomeFooter';
import './LoginPage.css';

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); // Hide the login button after logging in
  };

  return (
    <div className="loginpage-container">
      <Header />
      <main className="loginpage-main">
        <div className="login-form-container">
          <h2>Welcome Back! Please Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-container">
              <input
                type="text"
                id="username"
                placeholder="Username or Email"
                required
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            {!isLoggedIn && (
              <button type="submit" className="button-27">Login</button>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
