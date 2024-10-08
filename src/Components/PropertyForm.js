import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PropertyForm = ({ property = {}, onSubmit }) => {
  const [title, setTitle] = useState(property.title || '');
  const [address, setAddress] = useState(property.address || '');
  const [price, setPrice] = useState(property.price || '');
  const [thumbnail, setThumbnail] = useState(property.thumbnail || '');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation here if needed
    const newProperty = { title, address, price, thumbnail };
    onSubmit(newProperty);
    navigate('/');
  };

  return (
    <div className="property-form-container">
      <form className="property-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label htmlFor="thumbnail">Thumbnail:</label>
        <input
          type="file"
          id="thumbnail"
          onChange={(e) => setThumbnail(URL.createObjectURL(e.target.files[0]))}
        />

        <div className="property-form-buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
