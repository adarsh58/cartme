import React, { useState, useEffect, useContext } from "react";
import "./ProductItemCart.css";
import ProductContext from "../../Context/Product/ProductContext";
const ProductItem = (props) => {
  const item = props.products;
  const { DeleteProduct,GetAll, UpdatetoCart } =
    useContext(ProductContext);
  const cart = props.cart.filter((e) => {
    return e.pid === item.id;
  });
  let _quantity =cart[0] && cart[0].quantity;
  let _dbIndex =cart[0] && cart[0].id;

  const IncQuantity = (pid, title) => {
    UpdatetoCart(_dbIndex, title, pid, _quantity + 1);
  };
  const DecQuantity = (pid, title) => {
    if (_quantity !== 1){ 
      UpdatetoCart(_dbIndex, title, pid, _quantity - 1)
    
    }else{
      props.DeletebyQuantity(_dbIndex);
      GetAll();
    };
  };
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
          <button type="button" className="btn btn-sm  btn-warning">
          <span  className="mx-2">Qty</span>
            <i
              class="bi bi-dash-circle-fill mx-2"
              onClick={() => DecQuantity(item.id, item.title)}
            ></i>
           
              {_quantity}
         
            <i
              onClick={() => IncQuantity(item.id, item.title)}
              class="bi bi-plus-circle-fill mx-2"
            ></i>
   </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
