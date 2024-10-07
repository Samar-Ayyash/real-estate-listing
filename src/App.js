import React from 'react';
import './App.css';
import PropertyListings from './Components/PropertyListings'; 

function App() {
  return (
    <div className="App">
      <h1>Property Listings</h1> {/* Optional: Title for the listings */}
      <PropertyListings /> {/* Render the PropertyListings component */}
    </div>
  );
}

export default App;
