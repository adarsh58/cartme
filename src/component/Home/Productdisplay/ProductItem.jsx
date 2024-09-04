import React, { useState, useEffect, useContext } from "react";
import "./ProductItem.css";
import { useNavigate } from "react-router-dom";
import ProductContext from "../../../Context/Product/ProductContext";
import Review from "./Review";

const ProductItem = (props) => {
  let navigate = useNavigate();

  const item = props.product;
  
 
  const { AddtoCart, GetQuantityByPid, UpdatetoCart,cart } =
    useContext(ProductContext);
   
    const _cart = cart.filter((e) => {
      return e.pid === item.id;
    });
    let _quantity =_cart[0] && _cart[0].quantity;
    let inStock =item.stock-_quantity===0 ? false:true;
    

  const handleClick = (title, pid) => {
    console.log((isNaN(item.stock-_quantity) || item.stock-_quantity===0));
   
    if( item.stock-_quantity===0)
    {
      return props.ShowAlert("Out Of Stock" + title, "danger");
    }
    const result = GetQuantityByPid(pid);
    if (result.length === 0) {
      AddtoCart(title, pid, 1);
    
    } else {
      UpdatetoCart(result[0].id, title, pid, result[0].quantity + 1);
    
    }

    props.ShowAlert("Successfully Added   " + title, "success");
  };

  const CalStock=(pid)=>{
    const result = GetQuantityByPid(pid);
    console.log(item.stock + "-" + ( result && result.length>0 ?result[0].quantity:0));
   // console.log(item.Stock -  result[0].quantity)
  // return item.Stock -  result[0].quantity;

  }
  const handleBuy = (title, pid) => {
    handleClick(title, pid);
    navigate("/cart");
  };

  return (
    <>
      <div className="pitem">
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
                {item.rating}&nbsp;<i className="bi bi-star-fill"></i>
              </i>
            </span>
          </div>
          <div className="pricetag">
            <span className="priceitem">
              <i className="bi bi-tags-fill"></i> ${item.price}&nbsp;
            </span>
            <span className="priceinfo">
              Discount percentage : ${item.discountPercentage}
            </span>
          </div>
          <div className="other">
            <button type="button" className={`btn btn-sm btn-${inStock ?"info": "danger"}`}>
         {inStock ?"In Stock": "Out Of Stock"}      <span className="badge">{(!isNaN(item.stock-_quantity)?item.stock-_quantity:item.stock)}</span>
            </button>

            <div>
              <i className="bi bi-arrow-return-left"></i>Return Policy :{" "}
              {item.returnPolicy}
            </div>
          </div>
          <div className="addcart">
            <button
              onClick={(e) => handleClick(item.title, item.id)}
              type="button"
              className="btn btn-sm btn-warning mx-3"
            >
              <span style={{ fontSize: "10px" }}>Add to cart</span>
            </button>
            <button
              onClick={(e) => handleBuy(item.title, item.id)}
              type="button"
              className="btn btn-sm mx-3 btn-warning my-2"
            >
              <span style={{ fontSize: "10px" }}>Buy Now</span>
            </button>
          </div>
          <div className="review">
            <h4>Reviews:</h4>
            {item.reviews &&
              item.reviews.map((ele, index) => {
                return <Review item={ele} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
