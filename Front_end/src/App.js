// src/App.js
import React, { useState } from 'react';
import Dashboard1 from './components/pages/dashboard1';
import Dashboard2 from './components/pages/scan_success';
import Dashboard3 from './components/pages/dashboard3';
import MedInfo from './components/pages/medinfo'; // Import your MedInfo component

function App() {
  const [currentDashboard, setCurrentDashboard] = useState(1);

  const goToDashboard1 = () => setCurrentDashboard(1);
  const goToDashboard2 = () => setCurrentDashboard(2); // Function to go to Dashboard2
  const goToDashboard3 = () => setCurrentDashboard(3); // Function to go to Dashboard3
  const goToMedInfo = () => setCurrentDashboard(4);    // New function for MedInfo

  return (
    <div className="App">
      {currentDashboard === 1 && (
        <Dashboard1 
          goToDashboard2={goToDashboard2}  // Passing goToDashboard2 to Dashboard1
          goToDashboard3={goToDashboard3}  // Passing goToDashboard3 to Dashboard1
        />
      )}
      {currentDashboard === 2 && <Dashboard2 goNext={goToDashboard3} goBack={goToDashboard1} />}
      {currentDashboard === 3 && <Dashboard3 goBack={goToDashboard1} goNext={goToMedInfo} />}
      {currentDashboard === 4 && <MedInfo goToDashboard3={goToDashboard3} />}
    </div>
  );
}

export default App;
