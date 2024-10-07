
import React from 'react';
import { properties } from './mock';  

const PropertyListings = () => {
  return (
    <div className="property-list">
      {properties.map(property => (
        <div key={property.id} className="property-card">
          <img src={property.thumbnail} alt={property.title} />
          <h3>{property.title}</h3>
          <p>{property.address}</p>
          <p>{property.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyListings;
