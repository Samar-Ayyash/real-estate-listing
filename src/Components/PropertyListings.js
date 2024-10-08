import React from 'react';
import { Link } from 'react-router-dom';  // For routing to the Add Property form
import { properties } from './mock';  

const PropertyListings = () => {
  return (
    <div className="property-list-container">
      <div className="property-list">
        {properties.map(property => (
          <div key={property.id} className="property-card">
            {/* Link added around the image to make it clickable */}
            <Link to={`/property/${property.id}`}>
              <img src={property.thumbnail} alt={property.title} />
            </Link>
            <h3>{property.title}</h3>
            <p>{property.address}</p>
            <p>{property.price}</p>
          </div>
        ))}
      </div>
      <div className="add-property-button">
        <Link to="/add-property">
          <button className="add-button">Add a Property</button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyListings;
