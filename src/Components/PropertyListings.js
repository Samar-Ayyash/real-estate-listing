
import React from 'react';
import { Link } from 'react-router-dom';
import { properties } from './mock';

const PropertyListings = () => {
  return (
    <div className="property-list">
      {properties.map(property => (
        <div key={property.id} className="property-card">
          <Link to={`/property/${property.id}`}>
            <img src={property.thumbnail} alt={property.title} />
          </Link>
          <h3>{property.title}</h3>
          <p>{property.address}</p>
          <p>{property.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyListings;
