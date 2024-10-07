import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from './mock'; 

const PropertyDetail = () => {
  const { id } = useParams(); 
  const property = properties.find(prop => prop.id === parseInt(id)); 

  if (!property) {
    return <div>Property not found</div>; 
  }

  return (
    <div className="property-detail">
      <div className="property-images">
        <img src={property.thumbnail} alt={property.title} style={{ width: '300px', marginRight: '20px' }} />
        <div>
          <img src={property.thumbnail} alt={property.title} style={{ width: '100px', marginBottom: '10px' }} />
          <img src={property.thumbnail} alt={property.title} style={{ width: '100px', marginBottom: '10px' }} />
          <img src={property.thumbnail} alt={property.title} style={{ width: '100px', marginBottom: '10px' }} />
        </div>
      </div>
      <div className="property-info">
        <h2>{property.title}</h2>
        <p><strong>Address:</strong> {property.address}</p>
        <p><strong>Price:</strong> {property.price}</p>
        <h3>Property Information</h3>
        <div className="property-specs">
          <div><strong>Type:</strong> Villa</div>
          <div><strong>Purpose:</strong> For Sale</div>
          <div><strong>Bayut ID:</strong> Bayut - 87583339</div>
          <div><strong>Completion:</strong> Ready</div>
          <div><strong>Furnishing:</strong> Unfurnished</div>
          <div><strong>Added on:</strong> 30 July 2024</div>
        </div>
      </div>
      <Link to="/" style={{ marginTop: '20px', display: 'inline-block', textDecoration: 'none', padding: '10px', backgroundColor: '#ddd', borderRadius: '5px' }}>
        Back to Property Listings
      </Link>
    </div>
  );
};

export default PropertyDetail;
