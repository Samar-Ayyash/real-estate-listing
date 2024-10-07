import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PropertyListings from './Components/PropertyListings';
import PropertyDetail from './Components/PropertyDetail'; // Import the PropertyDetail component

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Real Estate Property Listings</h1> {/* Header */}
        <Routes>
          <Route path="/" element={<PropertyListings />} />
          <Route path="/property/:id" element={<PropertyDetail />} /> {/* Route for property details */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
