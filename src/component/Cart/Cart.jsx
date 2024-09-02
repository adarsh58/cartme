import React, { useState, useEffect, useContext } from "react";
import "./Cart.css";
import { useIndexedDB } from "react-indexed-db-hook";
import nord from "../assets/nord.jpg";
import CartCrousel from "./CartCrousel";
import ProductContext from "../../Context/Product/ProductContext";
import ProductItem from "./ProductItem";
const Cart = (props) => {
  const [filteredProd, setfilteredProd] = useState([]);
  const { productList, FetchProduct } = useContext(ProductContext);
  const {  getAll } = useIndexedDB("cart");
  useEffect(() => {
    FetchProduct();
   
  },[]);
  useEffect(() => {
    
  },[]);
  useEffect(() => {
    getAll().then((personsFromDB) => {
        filterByCart(personsFromDB);
    });
  }, []);

  const [cartDb, setCartDb] = useState({ name: "", pid: "" });
  const filterByCart = (personsFromDB) => {
    const activeIDs=personsFromDB.map((e)=>{return e.pid});
    const test =
      productList.products && productList.products.length > 0
        ? productList.products.filter((p) =>{ return  activeIDs.includes(p.id)})
        : [];
     setfilteredProd(test);
    console.log(activeIDs)
    console.log(test)
  };
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
        {filteredProd &&
          filteredProd.length > 0 &&
          filteredProd.map((ele, index) => {
            return <ProductItem ShowAlert={props.ShowAlert} product={ele} />;
          })}
      </div>
    </div>
  );
};

export default Cart;
