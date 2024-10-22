import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/HomeHeader';
import Footer from '../../components/Footer/HomeFooter';
import './OtpPage.css';

const OtpPage = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(60); // 1 minute countdown

  // Handle OTP input change
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus on the next box if the current one has a value
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  // Timer countdown effect
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  // Format timer as MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="otp-page-container">
      <Header />
      <div className="otp-box">
        <img src="/otp.png" alt="OTP" className="otp-icon" />
        <h2>Enter OTP Code</h2>
        <p className="otp-message">Enter the OTP sent to your registered email</p>

        <div className="otp-inputs">
          {otp.map((data, index) => (
            <input
              type="text"
              name="otp"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
              className="otp-input-box"
            />
          ))}
        </div>

        <button className="button-27">Verify OTP</button>
        <p className="otp-timer">Expires in: {formatTime(timer)}</p>
      </div>
      <Footer />
    </div>
  );
};

export default OtpPage;
