import ProductContext from './ProductContext';
import { useState } from 'react';
import { useIndexedDB } from "react-indexed-db-hook";
const ProductState = (props) => {
    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [productListByCategory, setProductListByCategory] = useState([]);
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const { add, clear, getAll, deleteRecord,getByIndex,update  } = useIndexedDB("cart");
   
   
    const GetQuantityByPid=(pid)=>{
      
      // getByIndex("pid", 78).then((data) => {
      //   setQuantity(data);
      // });
      GetAll();
      let quantityById=cart.filter(item=>{return item.pid===pid});
    
      setQuantity(quantityById);
      return quantityById;
       
      
    }
    const GetAll = () => {
        getAll().then((personsFromDB) => {
            setCart(personsFromDB);
        });
      };
      const AddtoCart = (product,Id,q) => {
        if (product !== "" && Id !== ""  ) {
          add({ name: product, pid: Id,quantity:q}).then(
            (event) => {   console.log("Added");
              GetAll();
            },
            (error) => {
              console.log("Error", error);
            }
          );
        }
      };
      const UpdatetoCart = (id,product,pId,q) => {
        if (product !== "" && pId !== ""  ) {
          update({ id:id,name: product, pid: pId,quantity:q}).then(
            (event) => {
              console.log("updated");
              GetAll();
            },
            (error) => {
              console.log("Error", error);
            }
          );
        }
      };

      const DeleteProduct = (id) => {
        deleteRecord(id).then((event) => {
          GetAll();
        });
      };
    
      const ClearAllProduct = () => {
        clear().then(() => {
            setCart([]);
            setQuantity([]);
        });
     
      };




    const FetchProduct = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products?limit=300");
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
    <ProductContext.Provider value={{ productList,FetchProduct,FetchProductsbyCategory,productListByCategory,categories,FetchCategories,GetAll,cart,AddtoCart,DeleteProduct,ClearAllProduct,AddtoCart,GetQuantityByPid,quantity,UpdatetoCart }}>
        {props.children}
    </ProductContext.Provider>
)
}
export default ProductState