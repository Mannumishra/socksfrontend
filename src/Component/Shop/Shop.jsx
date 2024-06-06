import React, { useState } from 'react';
import "./Shop.css";
import mainImage from '../../Images/socks1.jpg';
import mainImage1 from '../../Images/socks2.jpg';

const Shop = () => {
  // State to track which product is hovered
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Function to handle mouse enter
  const handleMouseEnter = (index) => {
    setHoveredProduct(index);
  };

  // Function to handle mouse leave
  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  // Example product data
  const products = [
    {
      id: 1,
      name: 'Product 1',
      mainImage: mainImage,
      hoverImage: mainImage1,
      rating: 4.5,
      price: 29.99,
      newPrice: 24.99,
    },
    {
      id: 2,
      name: 'Product 2',
      mainImage: mainImage,
      hoverImage: mainImage1,
      rating: 4.2,
      price: 19.99,
      newPrice: 15.99,
    },
    {
      id: 3,
      name: 'Product 3',
      mainImage: mainImage,
      hoverImage: mainImage1,
      rating: 4.7,
      price: 39.99,
      newPrice: 34.99,
    },
    {
      id: 4,
      name: 'Product 4',
      mainImage: mainImage,
      hoverImage: mainImage1,
      rating: 4.3,
      price: 24.99,
      newPrice: 19.99,
    },
  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={product.id} className="product-card" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
          <div className="product-images">
            <img src={hoveredProduct === index ? product.hoverImage : product.mainImage} alt={product.name} />
          </div>
          <div className="product-info">
            <h2 className="product-name">{product.name}</h2>
            <div className="product-rating" style={{ backgroundColor: '#f1c40f' }}>
              <span>Rating: {product.rating}</span>
            </div>
            <div className="product-price">
              <span className="original-price">${product.price}</span>
              <span className="new-price">${product.newPrice}</span>
            </div>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
