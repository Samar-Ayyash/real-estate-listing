import React from 'react';
import { Link } from 'react-router-dom';

const PropertyListings = ({ properties, onDelete }) => { 
  return (
    <div className="property-list-container">
      <div className="property-list">
        {properties.map(property => (
          <div key={property.id} className="property-card">
            <Link to={`/property/${property.id}`}>
              <img src={property.thumbnail} alt={property.title} />
            </Link>
            <h3>{property.title}</h3>
            <p>{property.address}</p>
            <p>{property.price}</p>
            {/* Add a delete button */}
            <button 
              onClick={() => {
                if (window.confirm('Are you sure you want to delete this property?')) {
                  onDelete(property.id); 
                }
              }}
            >
              Delete Property
            </button>
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
