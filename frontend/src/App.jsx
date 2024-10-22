import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import LocalServer from './pages/LocalServer/LocalServer';
import CloudConnect from './pages/CloudConnect/CloudConnect';
import Dashboard from './pages/Dashboard/Dashboard';  // Import Dashboard component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          
          <Route path="/localserver" element={<LocalServer />} />
          <Route path="/cloudconnect" element={<CloudConnect />} />
          <Route path="/dashboard" element={<Dashboard />} />  {/* Add Dashboard route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
