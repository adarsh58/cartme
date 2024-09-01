import React from "react";
import "../Home.css";
const CatCard = (props) => {
  return (
    <div className="carditem">
      <div>
        <img src={props.product.thumbnail} className="cardimg" alt="..." />
      </div>
      <div className="cardbody">
        <div className="cardtext">{props.product.title}</div>
        <div className="cardbadge">
          {" "}
          <button type="button" class="btn btn-danger">
            Limited Time Deal<span class="badge text-bg-warning"></span>
          </button>
        
        </div>
        <div className="cardprice">${props.product.price} <span className="cardpricediscount">(22% off)</span></div>
        
      </div>
    </div>
  );
};

export default CatCard;
