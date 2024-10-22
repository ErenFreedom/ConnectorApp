import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/HomeHeader';
import Footer from '../../components/Footer/HomeFooter';
import './HomePage.css';

const images = [
  '/image1.png',
  '/image2.png',
  '/image3.png',
  '/image4.png',
  '/image5.png'
];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage-container">
      <Header />
      <main className="homepage-main">
        <div className="slideshow-container">
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="slideshow-image"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
