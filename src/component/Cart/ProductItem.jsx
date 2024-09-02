import React, { useState,useEffect,useContext } from "react";
import "./ProductItem.css";

const ProductItem = (props) => {
  const item= props.product
  console.log(item)

  return (
    <>
      <div className="pitem" >
        <div className="pimage">
          <img src={item.thumbnail}></img>
        </div>
        <div className="pdetails">
          <div className="title">
            <span>{item.title}</span>
          </div>
          <div className="rating">
            <span>
              <b>Rating:</b>
              <i>
                {item.rating}&nbsp;<i class="bi bi-star-fill"></i>
              </i>
            </span>
          </div>
          <div className="pricetag">
            <span className="priceitem">
            <i class="bi bi-tags-fill"></i> ${item.price}&nbsp;
            </span>
            <span className="priceinfo">
             Discount percentage : ${item.discountPercentage}
            </span>
          </div>
          <div className="other">
            <button type="button" className="btn btn-sm btn-warning">
              In Stock <span className="badge">{item.stock}</span>
            </button>
            
            <div><i class="bi bi-arrow-return-left"></i>Return Policy : {item.returnPolicy}</div>
            
          </div>
          <div className="addcart">
          <button  type="button" class="btn btn-sm  btn-dark ">Check out</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
