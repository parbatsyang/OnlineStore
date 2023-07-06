import axios from "axios";
import React,{ createContext, useState } from "react";
import {  useQuery } from "@tanstack/react-query";


export const ProductContext=createContext();

const ProductProvider =({children})=>{
    const [products,setProducts] = useState([]);
    const [filteredProduct, setfilteredProduct] = useState([]);

    const postQuery = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
          const response = await axios.get('https://fakestoreapi.com/products');
          const data = await response.data;
          setProducts(data)
          return(data);
          ;
        }
      })
    

    return(
       
        <ProductContext.Provider value={{products,filteredProduct, setfilteredProduct}}>
            {children}
        </ProductContext.Provider>
    )
    }
export default ProductProvider