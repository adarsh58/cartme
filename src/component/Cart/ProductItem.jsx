import React, { useState, useEffect, useContext } from "react";
import "./ProductItemCart.css";

const ProductItem = (props) => {
  const item = props.products;
   const cart=props.cart.filter((e)=>{return e.pid===item.id });
   let quantity=cart[0].quantity
   console.log(cart)
   console.log(quantity)
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
             Quantity : {quantity}
                         </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
