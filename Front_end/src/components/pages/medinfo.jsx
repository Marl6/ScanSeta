// src/components/pages/dashboard1.jsx
import React from 'react';
import '../css/medinfo.css';
import back from '../assets/icons/medinfo/back.png'; // Ensure the path is correct

const Dashboard1 = ({ goToDashboard3 }) => (
  <div className="dashboard">
    <div className="header">
      <button className="back-button" onClick={goToDashboard3}>
        <img src={back} alt="Back" className="back-icon" />
      </button>
    </div>
  </div>
);

export default Dashboard1;

