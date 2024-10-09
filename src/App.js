import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PropertyListings from './Components/PropertyListings';
import PropertyDetail from './Components/PropertyDetail';
import PropertyForm from './Components/PropertyForm'; 
import { properties as initialProperties } from './Components/mock'; 

function App() {
  const [properties, setProperties] = useState(initialProperties);

  const handleAddProperty = (newProperty) => {
    newProperty.id = properties.length ? properties[properties.length - 1].id + 1 : 1;
    setProperties([...properties, newProperty]); 
  };

  const handleDeleteProperty = (id) => {
    setProperties(properties.filter(property => property.id !== id)); 
  };

  return (
    <Router>
      <div className="App">
        <h1>Real Estate Property Listings</h1>
        <Routes>
          <Route 
            path="/" 
            element={<PropertyListings properties={properties} onDelete={handleDeleteProperty} />} 
          />
          <Route path="/property/:id" element={<PropertyDetail properties={properties} />} />
          <Route path="/add-property" element={<PropertyForm onSubmit={handleAddProperty} />} />
          <Route path="/edit-property/:id" element={<PropertyForm onSubmit={handleAddProperty} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
