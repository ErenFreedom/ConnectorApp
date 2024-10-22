import React, { useState } from 'react';
import Header from '../../components/Header/HomeHeader';
import Footer from '../../components/Footer/HomeFooter';
import './CloudConnect.css';

const CloudConnect = () => {
  const [activationKey, setActivationKey] = useState('');

  const handleConnect = (e) => {
    e.preventDefault();
    // Handle the cloud connection logic here
    console.log(`Connecting to the cloud with Activation Key: ${activationKey}`);
  };

  return (
    <div className="cloudconnect-page-container">
      <Header />
      <div className="cloudconnect-form-container">
        <h2>Enter Activation Key</h2>
        <p className="email-message">Enter the key sent to your registered email ******gmail.com</p>

        <form onSubmit={handleConnect}>
          <div className="input-container">
            <label htmlFor="activationKey"></label>
            <input
              type="text"
              id="activationKey"
              value={activationKey}
              onChange={(e) => setActivationKey(e.target.value)}
              placeholder="Enter activation key"
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

export default CloudConnect;
