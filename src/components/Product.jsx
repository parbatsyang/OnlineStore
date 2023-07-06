import React, { useContext,useState, useEffect} from "react";
import ProductCart from "./ProductCart";
import { ProductContext } from "../context/ProductContext";
import SearchPage from "./SearchPage";
import Loader from "./Loader";



const Product = () => {
  const [loading, setloading] = useState(false); 

  const { products,filteredProduct } = useContext(ProductContext);
  const projectData = filteredProduct.length ? filteredProduct : products;

  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },500)
  },[])
  return (
    <>
    {
      loading ? 
     ( 
      <div className="flex items-center justify-center h-[700px]">
     <Loader />
     </div>
     )
      
      :
      (<>
      <div className="text-3xl text-center font-serif mt-10">
      <span className="border-b">Product</span>
    </div>
    <SearchPage/>
    <div className="py-10">
      <div className="container mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          {projectData.map((product, i) => {
            return <ProductCart key={i} product={product} />;
          })}
        </div>
      </div>
    </div>
    </>)
    }
      
    </>
  );
};
export default Product;
