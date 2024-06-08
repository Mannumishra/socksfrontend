import React, { useEffect, useState } from 'react';
import './Singlepage.css';
import image1 from '../../Images/socks20.webp';
import image2 from '../../Images/socks19.webp';
import image3 from '../../Images/socks8.webp';
import image4 from '../../Images/socks4.webp';
import image5 from '../../Images/socks3.jpg';
import image6 from '../../Images/socks9.webp';
import image7 from '../../Images/socks22.webp';
import Shop from '../Shop/Shop';

const images = [image1, image2, image3, image4, image5, image6, image7];

const SinglePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className="custom-container-fluid productdetailsheight">
        <div className="custom-container py-5">
          <div className="custom-row g-5">
            <div className="custom-col-lg-6">
              <div className="carousel">
                <div className="carousel-inner">
                  {images.map((image, index) => (
                    <div
                      className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`}
                      key={index}
                    >
                      <img src={image} className="singlepageimage" alt={`Slide ${index}`} />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" onClick={handlePrevClick}>
                  <span className="carousel-control-prev-icon">&#9664;</span>
                </button>
                <button className="carousel-control-next" onClick={handleNextClick}>
                  <span className="carousel-control-next-icon">&#9654;</span>
                </button>
              </div>
              <div className="thumbnails">
                {images.map((image, index) => (
                  <img
                    src={image}
                    className={`singlepageimageslide ${index === currentImageIndex ? 'active' : ''}`}
                    alt={`Thumbnail ${index}`}
                    onClick={() => handleThumbnailClick(index)}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="custom-col-lg-6 productsecondcol">
              <p className="productname mb-2">Ultra Neyone Edition</p>
              <div className="stars">
                <i className="fa fa-star text-warning starticons"></i>
                <i className="fa fa-star text-warning starticons"></i>
                <i className="fa fa-star text-warning starticons"></i>
                <i className="fa fa-star text-warning starticons"></i>
                <i className="fa fa-star starticons"></i>
                <p className='starnumber'>(1210)</p>
              </div>
              <div className="sizes">
                <button className="btn size-btn">Pair: 10</button>
                <button className="btn size-btn">Pair: 15</button>
                <button className="btn size-btn">Pair: 20</button>
              </div>
              <div className="price-details">
                <div>
                  <del className="text-dark">Rs.1000</del>
                </div>
                <div className="text-danger final-price">Rs.800</div>
                <div>| Save 20%</div>
              </div>
              <div>
                <div className="custom-accordion" id="accordionExample">
                  <div className="custom-accordion-item">
                    <h2 className="custom-accordion-header" id="headingOne">
                      <button className="custom-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <p className='productdescription'>Description</p>
                      </button>
                    </h2>
                    <div id="collapseOne" className="custom-accordion-collapse collapse show" aria-labelledby="headingOne">
                      <div className="custom-accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.custom-accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                <strong>This Item:</strong> Product Name
              </p>
              <div className="quantity">
                <button className="btn btn-minus">-</button>
                <p className="qty">1</p>
                <button className="btn btn-plus">+</button>
              </div>
              <div className='buttondiv'>
                <button className="add-to-cart-btn">
                  <i className="fa fa-shopping-bag"></i> Add to cart
                </button>
                <button className="add-to-cart-btn">
                  <i className="fa fa-shopping-bag"></i> Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <Shop />
      </div>
    </>
  );
};

export default SinglePage;
