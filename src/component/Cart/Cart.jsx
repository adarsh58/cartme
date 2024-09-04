import React, { useState, useEffect, useContext } from "react";
import "./Cart.css";
import { useIndexedDB } from "react-indexed-db-hook";
import nord from "../assets/nord.jpg";
import CartCrousel from "./CartCrousel";
import ProductContext from "../../Context/Product/ProductContext";
import ProductItem from "./ProductItem";
const Cart = (props) => {
  const [filteredProd, setfilteredProd] = useState([]);

  const { productList, FetchProduct,cart,DeleteProduct } = useContext(ProductContext);
  const {  getAll } = useIndexedDB("cart");
  console.log(cart)
  useEffect(() => {
    FetchProduct();
   
  },[]);
  useEffect(() => {
    
  },[]);
  useEffect(() => {
    getAll().then((personsFromDB) => {
        filterByCart(personsFromDB);
    });
  }, [cart]);

    const DeletebyQunatity=(_index)=>{
      DeleteProduct(_index);
    
    }

  const filterByCart = (personsFromDB) => {
    const activeIDs=personsFromDB.map((e)=>{return e.pid});

    const test =
      productList.products && productList.products.length > 0
        ? productList.products.filter((p) =>{ return  activeIDs.includes(p.id)})
        : [];
     setfilteredProd(test);
  };

  if(filteredProd &&
    filteredProd.length < 0 ){
        return <h2>Your Amazon Cart is empty.</h2>
    }
  return (
    <div className="cartContainer">
      <div className="adv">
        <div className="slider">
          <CartCrousel />
        </div>
        <div className="static">
          <img src={nord}></img>
        </div>
      </div>
      <div className="cartproducts">
        {
             filteredProd.length <= 0 && <div className="empty">Your Amazon Cart is empty.</div>
        }
        {filteredProd &&
          filteredProd.length > 0 &&
          filteredProd.map((ele, index) => {
            return <ProductItem key={index} ShowAlert={props.ShowAlert} products={ele} cart={cart} DeletebyQunatity={DeletebyQunatity} />;
          })}
      </div>
    </div>
  );
};

export default Cart;
