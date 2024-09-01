import React, { useContext, useEffect } from "react";
import "./Home.css";
import ProductContext from "../../Context/Product/ProductContext";
import CatCard from "./CategoryCard/CatCard";
import mobilebanner from '../assets/mobilebanner.jpg'
import Crousel from "./Crousel";
import ProductItem from "./Productdisplay/ProductItem";
const Home = () => {
  const {
    productList,
    FetchProduct,
    categories,
    FetchCategories,
    FetchProductsbyCategory,
    productListByCategory,
  } = useContext(ProductContext);
  useEffect(() => {
    FetchProduct();
    FetchCategories();
    FetchProductsbyCategory("laptops", 200);
  }, []);

  const handleCategorySelect = (e) => {
    FetchProductsbyCategory(e, 200);
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="home">
       <div className="homebanner">
        <img className="banner" src={mobilebanner}></img>
        <Crousel/>
      </div>
      <div className="categoryselect">
        <select
          onChange={(event) => handleCategorySelect(event.target.value)}
          class="form-select"
          aria-label="Default select example"
        >
          {categories &&
            categories.map((e, i) => {
              return (
                <option selected={e==="laptops"} key={i} value={e}>
                  {capitalizeFirstLetter(e)}
                </option>
              );
             })}
        </select>
      </div>
      <div className="topcategories">
        {productListByCategory.products &&
          productListByCategory.products.slice(0, 5).map((ele, index) => {
            return <CatCard product={ele} />;
          })}
      </div>
     
      <div className="products">
      {productListByCategory.products &&
          productListByCategory.products.map((ele, index) => {
            return <ProductItem product={ele} />;
          })}
      </div>
    </div>
  );
};

export default Home;
