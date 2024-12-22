import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineCancel } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";


 



export const Header = () => {
  return (
   <>
      <div className=' max-[400px]:h-[70px] w-full  h-24 bg-gradient-to-t from-zinc-200 to-indigo-400 shadow-xl flex  justify-between items-center  px-1'>
         
         {/* logo */}
         <div className='  max-[400px]:w-32 max-[400px]:h-11 max-[400px]:text-[14px] max-[400px]:font-extrabold w-auto p-1 h-11 bg-transparent text-blue-800 font-mono text-2xl font-extrabold  flex justify-center items-center border rounded-md border-blue-700'>
             Booking-hotels
         </div>

         {/* Options */}

         <div className=' w-3/6 h-11 flex justify-evenly items-center max-[450px]:hidden'>
            <Link className=' py-1 px-2  hover:border hover:text-white rounded-md hover:border-blue-900 animatedes text-[16px] font-mono text-blue-800 font-semibold' to="hotels">Booking..Rooms</Link>
            <Link className=' py-1 px-2  hover:border hover:text-white rounded-md hover:border-blue-900 text-[16px] font-mono text-blue-800 font-semibold' to="home">Home</Link>
            <Link className=' py-1 px-2  hover:border hover:text-white rounded-md hover:border-blue-900 text-[16px] font-mono text-blue-800 font-semibold' to="contact">Contact</Link>
            <Link className=' py-1 px-2  hover:border hover:text-white rounded-md hover:border-blue-900 text-[16px] font-mono text-blue-800 font-semibold' to="about">About</Link>
         </div>

         <div className=''>
             <FaListCheck/>
         </div>
         

      </div>


      {/* sidenavbar */}
      <div className='trans w-full h-full bg-violet-400 z-40 top-0  absolute  pb-14 px-3  text-left border min-[450px]:hidden  '>
      
      <div className=' w-12 h-12 absolute top-0 right-0  z-50 flex justify-center items-center text-[30px]  text-black'>
      <MdOutlineCancel/>
      </div>

        <div className=' w-full h-11 mt-2 flex flex-col justify-evenly items-start'>
            <Link className='  py- px-2 text-left   hover:border hover:text-white rounded-md hover:border-blue-900 text-[20px] font-mono text-blue-500 font-semibold' to="hotels">Booking..Rooms</Link>
            <Link className='  py- px-2 text-left   hover:border hover:text-white rounded-md hover:border-blue-900 text-[20px] font-mono text-blue-500 font-semibold' to="home">Home</Link>
            <Link className='  py- px-2 text-left   hover:border hover:text-white rounded-md hover:border-blue-900 text-[20px] font-mono text-blue-500 font-semibold' to="contact">Contact</Link>
            <Link className='  py- px-2 text-left   hover:border hover:text-white rounded-md hover:border-blue-900 text-[20px] font-mono text-blue-500 font-semibold' to="about">About</Link>
         </div>
   
      </div>
   </>
  )
}
