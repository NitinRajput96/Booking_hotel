import React, { useState } from 'react'
import Hotel_data from "../Json-data/Hotel_data.json"
import { IoLocationSharp } from "react-icons/io5";
import { RiHotelLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";

export const Home = () => {
    
 
  return (
<>
    <div className=' w-full h-96 bg-gradient-to-t from-zinc-200 to-indigo-600'>
     

    </div>

      <div className=' w-full h-full grid max-[400px]:grid-cols-1 grid-cols-4 justify-items-center p-1
          gap-2'>{
            Hotel_data.hotelDetails.map((item,i)=>
                <div className='w-auto h-auto flex  flex-col justify-center items-center m-2 rounded-md bg-gray-100 p-2 gap-2'>

                  <img className=' w-96 h-72 border rounded-md   ' src={item.img} alt="" />
                  <div className=' w-72 font-mono text-md text-black font-bold flex flex-wrap flex-col '>
                      <span className=' flex items-center gap-1'><RiHotelLine /> {item.hote_name} </span>
                      <span className=' flex items-center gap-1'><MdLocationCity /> {item.hot_city}</span>
                      <span className=' flex items-center gap-1 '><IoLocationSharp /> {item.hot_location} </span>
                      <span className=' flex items-center gap-1 '><FaEye />{item.hot_reviow}</span>
                        
                  </div>
                </div>        
            )
          }</div>
</>
  )
}
