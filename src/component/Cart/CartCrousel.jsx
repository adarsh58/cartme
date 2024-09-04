import React from "react";
import samsung1 from '../assets/samsung1.jpg'
import samsung2 from '../assets/samsung2.jpg'

import samsung3 from '../assets/samsung3.jpg'
import saumsung4 from '../assets/saumsung4.jpg'
const CartCrousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={samsung1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={samsung2} className="d-block w-100" alt="..." />
        </div>
 
        <div className="carousel-item">
          <img src={samsung3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={saumsung4} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CartCrousel;
