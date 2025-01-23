import React, { useState } from 'react'
import Hotel_data from "../Json-data/Hotel_data.json"


export const Home = () => {
    
 
  return (
    <div className=' w-full h-full grid max-[400px]:grid-cols-1 grid-cols-4 justify-items-center p-1
     gap-2'>{
      Hotel_data.hotelDetails.map((item,i)=>
          <>
            <img className=' w-96 h-72 border   ' src={item.img} alt="" />
            <span className=' font-mono text-md text-black font-bold'>{item.hote_name}</span>

          </>        
      )
    }</div>
  )
}
