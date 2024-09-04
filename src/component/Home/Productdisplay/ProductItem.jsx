import React, { useState, useEffect, useContext } from "react";
import "./ProductItem.css";
import { useNavigate } from "react-router-dom";
import ProductContext from "../../../Context/Product/ProductContext";
import Review from "./Review";

const ProductItem = (props) => {
  let navigate = useNavigate();

  const item = props.product;
  const { AddtoCart,GetQuantityByPid,quantity,GetAll ,UpdatetoCart} = useContext(ProductContext);

  
  const handleClick = (title, pid) => {
    
    const result=GetQuantityByPid(pid);
    
    if(result.length===0){  
      AddtoCart(title, pid, 1);
    }
    else{
      UpdatetoCart(result[0].id,title, pid, result[0].quantity+1);
    }
  
    props.ShowAlert("Successfully Added   " + title, "success");
  };
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
            <button type="button" className="btn btn-sm btn-info">
              In Stock <span className="badge">{item.stock}</span>
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
               <span style={{fontSize:'10px'}}>Add to cart</span>
            </button>
            <button
              onClick={(e)=>handleBuy(item.title, item.id)}
              type="button"
              className="btn btn-sm mx-3 btn-warning my-2"
            >
              <span style={{fontSize:'10px'}}>Buy Now</span>
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
