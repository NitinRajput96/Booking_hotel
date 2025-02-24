import React from 'react'
import Cars from "../Json-data/Cars.json"
import { LuUserRound } from "react-icons/lu";
import { TbAutomaticGearbox } from "react-icons/tb";
import { IoSpeedometerOutline } from "react-icons/io5";
import toast, { Toaster } from 'react-hot-toast';



export const CarvList = () => {

    
      const viewcar=(e)=>{
               e.preventDefault()
              toast.success(" view page  ...")
      }

      const bookcar=(e)=>{
        e.preventDefault()
        toast.success(" Booking succes...")
}

  return (
   <>
      <Toaster/>
        <div className='w-full h-auto bg-gray-100 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 px-4  py-6 '>
            {
            Cars.CarsandBikes.map((item,i)=>
                <div className=' w-full h-auto   bg-white shadow-sm rounded-md py-3 px-6 hover:shadow-lg   ' key={i}>
                       <div className=''>
                                <span className='  text-[20px] font-bold '>{item.carName}</span>
                                <span className=' text-[12px] text-gray-600 pl-2'>or similar larg car</span>
                       </div>

                       <div className=' w-full h-2/6  flex justify-center items-center  mt-3  '>
                             <div className=' w-3/5 h-full col-span-2 ]   '>
                                 <p className=' w-full h-auto  flex justify-start items-center gap-2 text-[13px] font-sans '><span><LuUserRound/></span>5 seats</p>
                                 <p className=' w-full h-auto  flex justify-start items-center gap-2 text-[13px] font-sans '><span><TbAutomaticGearbox/></span>Automatic</p>
                                 <p className=' w-full h-auto  flex justify-start items-center gap-2 text-[13px] font-sans '><span><IoSpeedometerOutline/></span>Unlimited mileage</p>
                             </div>
                             <div className=' w-2/5 h-full flex justify-center  items-center'>
                                 <img src={item.img} className=' w-full h-full rounded-md ' alt="cars img" />
                             </div>
                       </div>


                       <div className='w-full h-auto   flex justify-between items-center my-4 '>
                         <div className=' font-semibold text-[13px] shadow-black '> Car Rent price for 24 hour </div>
                         <div className=' text-[14px] text-green-600 font-bold '>{item.rent_price} Rs</div>
                        </div>

                        <div  className=' w-full h-auto flex justify-between items-center'>
                            <button onClick={viewcar} className=' px-2 py-[1px]  hover:bg-indigo-700 shadow-md text-white rounded-md bg-indigo-500 font-sans font-semibold text-[12px]'  >Car view</button>
                            <button onClick={bookcar} className=' px-2 py-[1px]  hover:bg-indigo-700 shadow-md text-white rounded-md bg-indigo-500 font-sans font-semibold text-[12px]'  >Book car</button>
                        </div>
                    
                </div>
            )
            }
        </div>
   </>
  )
}
