import React, { useState,useEffect } from "react";
import "./ProductItem.css";
import Review from "./Review";
import { useIndexedDB } from "react-indexed-db-hook";
const ProductItem = (props) => {
  const item = props.product;

  const { add,clear,getAll  } = useIndexedDB("cart");
  useIndexedDB("cart");
  const [id, setId] = useState();
  const handleClick = (id) => {
   
    add({ name: "Adarsh", pid: id }).then(
      (event) => {
        console.log("ID Generated: ",event.target);
      },
      (error) => {
        console.log("Error",error);
      },
    );
  };
const ClearStore=()=>
{
  clear().then(() => {
    alert("All Clear!");
  });
}
  return (
    <>
      <div className="pitem" onClick={(e)=>handleClick(item.id)}>
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
          <button onClick={ClearStore} type="button" class="btn btn-sm  btn-dark">Add to Cart</button>
          </div>
          <div className="review">
            <h4>Reviews:</h4>
            {
                item.reviews && item.reviews.map((ele,index)=>{
                    return (<Review item={ele}/>);
                })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
