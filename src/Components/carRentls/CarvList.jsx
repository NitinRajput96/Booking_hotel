import React from 'react'
import Cars from "../Json-data/Cars.json"
import { LuUserRound } from "react-icons/lu";
import { TbAutomaticGearbox } from "react-icons/tb";
import { IoSpeedometerOutline } from "react-icons/io5";

export const CarvList = () => {
  return (
   <>
      <h3>Rent Cars</h3>
        <div className='w-full h-auto bg-gray-100 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 p-3 '>
            {
            Cars.CarsandBikes.map((item,i)=>
                <div className=' w-full h-64   bg-white shadow-md rounded-md p-4   ' key={i}>
                       <div className=''>
                                <span className='  text-[23px] font-bold '>Nissan Sentra</span>
                                <span className=' text-[13px] text-gray-600 px-2'>or similar larg car</span>
                       </div>

                       <div className=' w-full h-2/6  flex justify-center items-center  mt-3  '>
                             <div className=' w-3/5 h-full col-span-2border   '>
                                 <p className=' w-full h-auto  flex justify-start items-center gap-2 text-[14px] font-sans '><span><LuUserRound/></span>5 seats</p>
                                 <p className=' w-full h-auto  flex justify-start items-center gap-2 text-[14px] font-sans '><span><TbAutomaticGearbox/></span>Automatic</p>
                                 <p className=' w-full h-auto  flex justify-start items-center gap-2 text-[14px] font-sans '><span><IoSpeedometerOutline/></span>Unlimited mileage</p>
                             </div>
                             <div className=' w-2/5 h-full flex justify-center  items-center'>
                                 <img src={item.img} className=' w-full h-full rounded-md ' alt="cars img" />
                             </div>
                       </div>


                       <div className='w-full h-auto   flex justify-between items-center '>
                         <div className=' font-semibold text-[14px] shadow-black '> Car Rent price for 24 hour </div>
                         <div className=' text-lg text-green-600 font-bold '>4599 Rs</div>
                        </div>
                       
                </div>
            )
            }
        </div>
   </>
  )
}
