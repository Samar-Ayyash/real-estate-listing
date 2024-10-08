import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PropertyListings from './Components/PropertyListings';
import PropertyDetail from './Components/PropertyDetail';
import PropertyForm from './Components/PropertyForm'; // Import PropertyForm

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Real Estate Property Listings</h1>
        <Routes>
          <Route path="/" element={<PropertyListings />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/add-property" element={<PropertyForm />} /> {/* Route for adding a property */}
          <Route path="/edit-property/:id" element={<PropertyForm />} /> {/* Route for editing a property */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
