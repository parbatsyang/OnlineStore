import React, { useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import {RxCross1} from "react-icons/rx"
import ProductCart from './Product';


const Navbar = () => {
    const [toggle,setToggle] = useState(false);
  return (
    <div className='bg-[#8ed8e3] py-5'>
        <div className='flex justify-between items-center max-w-[1000px] mx-auto'>
           <a href='/'> <div className='text-3xl font-bold ms-2'>OnlineStore</div></a>
            {
                toggle ? <RxCross1 onClick={()=>setToggle(!toggle)} className="block me-5  text-2xl md:hidden"/> : <AiOutlineMenu onClick={()=>setToggle(!toggle)} className="block me-5  text-2xl md:hidden"/>
            }

            <ul className='hidden md:flex gap-10'>
                <li className='text-xl font-serif cursor-pointer hover:underline'><a href='/'>Home</a></li>
                <li className='text-xl font-serif cursor-pointer hover:underline'><a href='/products'>Product</a></li>
            </ul>
            {/* Responsive */}
            <ul className={`flex flex-col absolute top-[75px] bg-black w-full h-[120px] ps-2 gap-5 pt-3 duration-300 text-white ${toggle ? 'left-[0]':'left-[-100%]'}`}>
                <li className='text-2xl cursor-pointer hover:underline'><a href='/'>Home</a></li>
                <li className='text-2xl cursor-pointer hover:underline'><a href='/products'>Product</a></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar
