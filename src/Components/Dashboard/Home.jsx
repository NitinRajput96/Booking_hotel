import React, { useState } from 'react'
import Hotel_data from "../Json-data/Hotel_data.json"
import { IoLocationSharp } from "react-icons/io5";
import { RiHotelLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";

export const Home = () => {
    
 
  return (
<>
   
   <div className='w-full h-60 border bg-indigo-600'>

   </div>

     <div className='w-full h-auto  flex justify-center gap-8    border-black  '>
          <div className=' w-2/6 h-96   bg-slate-600'>

          </div>
     <div className=' w-3/6  grid max-[400px]:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 justify-items-center  gap-2'>{
            Hotel_data.hotelDetails.map((item,i)=>
                <div className=' w-full border h-auto flex   flex-col justify-center items-center  rounded-md bg-gray-100  gap-2'>

                  <img className='  sm:h-40 max-sm:96 border rounded-md   ' src={item.img} alt="" />
                  <div className=' w-72 font-mono text-md text-black font-bold flex flex-wrap flex-col '>
                      <span className=' flex items-center gap-1'><RiHotelLine /> {item.hote_name} </span>
                      <span className=' flex items-center gap-1'><MdLocationCity /> {item.hot_city}</span>
                      <span className=' flex items-center gap-1 '><IoLocationSharp /> {item.hot_location} </span>
                      <span className=' flex items-center gap-1 '><FaEye />{item.hot_reviow}</span>
                        
                  </div>
                </div>        
            )
          }</div>
     </div>
</>
  )
}
