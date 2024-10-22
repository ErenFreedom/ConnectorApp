import React from 'react';
import Header from '../../components/Header/HomeHeader';
import Footer from '../../components/Footer/HomeFooter';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page-container">
      <Header />
      <div className="dashboard-content">
        <h2>Welcome to the Dashboard</h2>
        {/* Dashboard content will be added here later */}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
