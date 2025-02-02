import React, { useState } from 'react'
import Hotel_data from "../Json-data/Hotel_data.json"
import { IoLocationSharp } from "react-icons/io5";
import { RiHotelLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";

export const Home = () => {
    
 
  return (
<>
{/* <div className='w-full h-60  bg-indigo-600'>

</div> */}

  <div className='w-full h-auto grid grid-cols-1  xl:grid-cols-7 grid-flow-row   xl:p-3   '>
       <div className=' w-full  xl:col-span-2  h-full  bg-gray-200 rounded-md'>

          <div className=' w-full h-auto bg-white p-4 '>
                 <span className=' text-[24px] font-sans font-extrabold'>Find your next stay </span>
                 <p className=' text-[16px] text-gray-600'> Search low prices on hotels,homes and much more...</p>
          </div>
         

       </div>
         


       {/* <div className='  xl:col-span-4  gap-2 flex justify-center flex-wrap items-center '>
     
       {
         Hotel_data.hotelDetails.map((item,i)=>
             <div className=' w-11/12  xl:h-56 shadow-sm  h-36  px-2 gap-4 flex  justify-center items-center   rounded-md bg-gray-100 '>

               <img className=' w-32 h-5/6 xl:w-2/5  xl:h-5/6 border rounded-md   ' src={item.img} alt="" />
               <div className=' h-5/6 xl:h-5/6  w-60 xl:w-3/5 font-serif text-[11px] xl:text-sm font-semibold flex flex-wrap  flex-col '>
                   <span className=' flex items-center gap-1'><RiHotelLine /> {item.hote_name} </span>
                   <span className=' flex items-center gap-1'><MdLocationCity /> {item.hot_city}</span>
                   <span className=' flex items-center gap-1 '><IoLocationSharp /> {item.hot_location} </span>
                   <span className=' flex items-center gap-1 '><FaEye />{item.hot_reviow}</span>
                     
               </div>
             </div>        
         )
       }       
       </div> */}




  </div> 
  
</>
  )
}
