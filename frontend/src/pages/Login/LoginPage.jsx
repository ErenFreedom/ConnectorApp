import React, { useState } from 'react';
import Header from '../../components/Header/HomeHeader';
import Footer from '../../components/Footer/HomeFooter';
import './LoginPage.css';

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // To display error messages if login fails
  const [loading, setLoading] = useState(false); // For displaying loading state

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state while the request is being processed

    // Get the form data (username/email and password)
    const identifier = e.target.username.value;
    const password = e.target.password.value;

    try {
      // Call the cloud API directly using the /cloudlogin endpoint
      const response = await fetch(`${process.env.REACT_APP_CLOUD_API_URL}/api/cloudlogin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier, password }), // Send the form data
      });

      const data = await response.json();

      if (response.ok) {
        // If login is successful
        setIsLoggedIn(true);
        setErrorMessage(''); // Clear any error messages
        alert(data.message); // Show success message (or you can do something else here)
      } else {
        // If login fails, show error message
        setIsLoggedIn(false);
        setErrorMessage(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred during login. Please try again later.');
    } finally {
      setLoading(false); // Stop loading spinner or state
    }
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
                name="username"
                placeholder="Username or Email"
                required
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            {!isLoggedIn && !loading && (
              <button type="submit" className="button-27">Login</button>
            )}
            {loading && <p>Loading...</p>} {/* Display loading text */}
          </form>

          {/* Display error message if login fails */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
