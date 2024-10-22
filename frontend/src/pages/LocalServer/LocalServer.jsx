import React, { useState } from 'react';
import Header from '../../components/Header/HomeHeader';
import Footer from '../../components/Footer/HomeFooter';
import './LocalServer.css';

const LocalServer = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleConnect = (e) => {
    e.preventDefault();
    // Handle the connection logic here
    console.log(`Connecting to Desigo CC with User ID: ${userId} and Password: ${password}`);
  };

  return (
    <div className="localserver-page-container">
      <Header />
      <div className="localserver-form-container">
        <h2>Connect to Local Server</h2>
        <form onSubmit={handleConnect}>
          <div className="input-container">
            <label htmlFor="userId">User ID</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter your User ID"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="button-27">Connect</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LocalServer;
