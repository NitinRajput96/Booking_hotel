import React, { useState } from 'react'
import Hotel_data from "../Json-data/Hotel_data.json"


export const Home = () => {
    
 
  return (
    <div className=' w-full h-full grid max-[400px]:grid-cols-1 grid-cols-4 justify-items-center p-1
     gap-2'>{
      Hotel_data.hotelDetails.map((item,i)=>
          <div className='w-auto h-auto flex  flex-col justify-center items-center m-2 rounded-md bg-gray-100 p-2 gap-2'>

            <img className=' w-96 h-72 border rounded-md   ' src={item.img} alt="" />
            <div className=' w-72 font-mono text-md text-black font-bold flex flex-col  '>
                  {item.hote_name}
                  {item.hot_city}
                  {item.hot_location}
                  {item.hot_reviow}
                  
            </div>
          </div>        
      )
    }</div>
  )
}
