import React, { useState, useEffect, useContext } from "react";
import "./ProductItemCart.css";

const ProductItem = (props) => {
  const item = props.product;

  return (
    <>
      <div className="cartitem">
        <div className="cartimage">
          <img src={item.thumbnail}></img>
        </div>
        <div className="cartdetails">
          <div className="carttitle">
            <span>{item.title}</span>
          </div>
          <div className="cartpricetag">
            <span className="cartpriceitem">
              <i className="bi bi-tags-fill"></i> ${item.price}&nbsp;
            </span>
          </div>
          <div className="cartcheckout">
            <button type="button" className="btn btn-sm  btn-dark ">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
