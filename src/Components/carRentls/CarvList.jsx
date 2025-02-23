import React from 'react'
import Cars from "../Json-data/Cars.json"

export const CarvList = () => {
  return (
   <>
      <h3>Rent Cars</h3>
        <div className='w-full h-auto bg-gray-100 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 p-3 '>
            {
            Cars.CarsandBikes.map((item,i)=>
                <div className=' w-full h-64   bg-white shadow-md rounded-md p-2 ' key={i}>
                       <div className=' w-full h-3/6  grid grid-cols-2   '>
                             <div className=' w-auto h-full text-violet-800 text-[20px] font-bold flex justify-c items-start pt-5   '>Thar</div>
                             <div className=' pb-3'> <img src={item.img} className=' w-auto h-full rounded-md ' alt="" /></div>
                       </div>
                       <div className='w-full h-auto px-2  flex justify-evenly items-center'>
                         <span className=' font-semibold text-[14px] shadow-black '> Car Rent price for 24 hour </span>
                         <span className=' text-lg text-green-600 font-bold '>4599 Rs</span>
                        </div>
                       
                </div>
            )
            }
        </div>
   </>
  )
}
