import React,{useContext} from 'react'
import {ProductContext} from '../context/ProductContext'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const {products}=useContext(ProductContext);
  const { id } = useParams();

  const product = products.find((eachProduct)=>{
    return eachProduct.id === parseInt(id)
  });
   const {title,price,rating,description,image,category} = product;
  console.log(rating);
  return (
    <div className='bg-white '>
      <div className='text-4xl font-bold text-center capitalize py-10'>{category}</div>
      <div className='w-full h-full md:flex justify-evenly max-w-[1240px] mx-auto gap-10'>
        <div className='h-[400px] w-[350px] ms-16 bg-slate-100 flex items-center justify-center'>
          <div className='h-[300px] w-[200px] '>
            <img src={image} alt="product image"/>
            </div>
      </div>
      <div className='h-[300px] w-[415px] pt-5 bg-slate-100 md:me-10 md:h-[350px] md:w-[600px] flex flex-col gap-4'>
       <div className='text-3xl font-serif px-4'>
        {title}
       </div>
       <div className='text-green-500 text-xl px-4'>
        ${price}
       </div>
       <div className='px-4 text-sm font-semibold'>
        {description}
       </div>
       <div className='px-4 text-lg font-normal '>
        <span>Rating: </span><span className="text-green-500">{rating.rate}</span><span className='font-bold '> Out of </span><span className="text-green-500"> 5</span>
       </div>
      </div>
      </div>
    </div>
  )
}

export default ProductDetail
