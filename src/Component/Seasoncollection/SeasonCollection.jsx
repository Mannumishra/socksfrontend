import React, { useState } from 'react'
import "./Season.css"
import socks1 from '../../Images/socks3.jpg'
import socks2 from '../../Images/socks4.webp';
import socks3 from '../../Images/socks5.webp';
import socks4 from '../../Images/socks6.webp';
import socks5 from '../../Images/socks7.jpg';
import socks6 from '../../Images/socks8.webp';
import socks7 from '../../Images/socks9.webp';
import socks8 from '../../Images/socks10.webp';
import socks9 from '../../Images/socks11.webp';
import socks10 from '../../Images/socks12.webp';
import socks11 from '../../Images/socks13.webp';
import socks12 from '../../Images/socks18.jpg';
import socks13 from '../../Images/socks19.webp';
import socks14 from '../../Images/socks20.webp';
import socks15 from '../../Images/socks21.webp';
import socks16 from '../../Images/socks22.webp';
import { Link } from 'react-router-dom';
const SeasonCollection = () => {
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredProduct(index);
    };

    const handleMouseLeave = () => {
        setHoveredProduct(null);
    };

    const products = [
        {
            id: 1,
            name: 'Product 1',
            image: socks1,
            hoverImage: socks2,
            rating: 4.5,
            price: 29.99,
            newPrice: 24.99,
        },
        {
            id: 2,
            name: 'Product 2',
            image: socks3,
            hoverImage: socks4,
            rating: 4.2,
            price: 19.99,
            newPrice: 15.99,
        },
        {
            id: 3,
            name: 'Product 3',
            image: socks5,
            hoverImage: socks6,
            rating: 4.7,
            price: 39.99,
            newPrice: 34.99,
        },
        {
            id: 4,
            name: 'Product 4',
            image: socks7,
            hoverImage: socks8,
            rating: 4.3,
            price: 24.99,
            newPrice: 19.99,
        },
        {
            id: 5,
            name: 'Product 5',
            image: socks9,
            hoverImage: socks10,
            rating: 4.6,
            price: 21.99,
            newPrice: 18.99,
        },
        {
            id: 6,
            name: 'Product 6',
            image: socks11,
            hoverImage: socks12,
            rating: 4.4,
            price: 25.99,
            newPrice: 22.99,
        },
        {
            id: 7,
            name: 'Product 7',
            image: socks13,
            hoverImage: socks14,
            rating: 4.8,
            price: 27.99,
            newPrice: 23.99,
        },
        {
            id: 8,
            name: 'Product 8',
            image: socks15,
            hoverImage: socks16,
            rating: 4.9,
            price: 30.99,
            newPrice: 26.99,
        }
    ];
    return (
        <>
            <div>
                <p className='shopheading'>season's favourive</p>
                <div className="product-list">
                    {products.map((product, index) => (
                        <div key={product.id} className="product-card" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                            <div className="product-images">
                                <img src={hoveredProduct === index ? product.hoverImage : product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <h2 className="product-name">{product.name}</h2>
                                <div className="product-rating">
                                    <span><i class="ri-star-fill"></i></span>
                                    <span><i class="ri-star-fill"></i></span>
                                    <span><i class="ri-star-fill"></i></span>
                                    <span><i class="ri-star-fill"></i></span>
                                    <span><i class="ri-star-fill"></i></span>
                                    <span style={{ color: "black" }}>(112)</span>
                                </div>
                                <div className="product-price">
                                    <span className="original-price">&#8377;{product.price}</span>
                                    <span className="new-price">&#8377;{product.newPrice}</span>
                                    <span className='text-danger'>Save 60%</span>
                                </div>
                                <Link to='/details/:_id'><button className="add-to-cart-button">View Details</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='viewbutton'>
                    <button className="viewallbutton">View All</button>
                </div>
            </div>
        </>
    )
}

export default SeasonCollection