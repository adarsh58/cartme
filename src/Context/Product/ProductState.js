import ProductContext from './ProductContext';
import { useState } from 'react';

const ProductState = (props) => {
    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [productListByCategory, setProductListByCategory] = useState([]);
    
    const FetchProduct = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products");
            if (!response.ok) throw new Error(response.statusText);

            const result = await response.json();
            if (result) {
                setProductList(result);

            }
        } catch (error) {
            console.log(error);
      }
    }

    const FetchProductsbyCategory=async (cat,limit)=>
    {
        try {
            const response = await fetch(`https://dummyjson.com/products/category/${cat}?limit=${limit}`);
            if (!response.ok) throw new Error(response.statusText);

            const result = await response.json();
            if (result) {
                setProductListByCategory(result);
                console.log(result)
            }
        } catch (error) {
            console.log(error);
      }

    }

    const FetchCategories=async ()=>
        {
            try {
                const response = await fetch('https://dummyjson.com/products/category-list');
                if (!response.ok) throw new Error(response.statusText);
    
                const result = await response.json();
                if (result) {
                    setCategories(result);
                }
            } catch (error) {
                console.log(error);
          }
    
        }


return (
    <ProductContext.Provider value={{ productList,FetchProduct,FetchProductsbyCategory,productListByCategory,categories,FetchCategories }}>
        {props.children}
    </ProductContext.Provider>
)
}
export default ProductState