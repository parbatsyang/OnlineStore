import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { AiOutlineSearch } from "react-icons/ai";

const SearchPage = () => {
  const [term, setTerm] = useState("");


  const { products, setfilteredProduct } = useContext(ProductContext);

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setfilteredProduct(filteredProducts);
  }, [term]);

  return (
    <div>
      <div className="flex justify-center mt-3">
        <input
          type="text"
          placeholder="   lets Search..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="w-[350px] bg-transparent h-10 border border-spacing-1 border-slate-500 rounded-xl text-xl font-serif"
        />
      </div>
    </div>
  );
};

export default SearchPage;
