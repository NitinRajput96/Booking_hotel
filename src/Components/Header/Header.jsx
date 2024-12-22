import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
   <>
      <div className=' max-[400px]:h-[70px] w-full  h-24 bg-gradient-to-t from-zinc-200 to-indigo-400 shadow-xl flex  justify-between items-center  px-1'>
         
         {/* logo */}
         <div className='  max-[400px]:w-32 max-[400px]:h-11 max-[400px]:text-[14px] max-[400px]:font-extrabold w-auto p-1 h-11 bg-transparent text-blue-800 font-mono text-2xl font-extrabold  flex justify-center items-center border rounded-md border-blue-700'>
             Booking-hotels
         </div>

         {/* Options */}

         <div className=' w-3/4 h-11 border flex justify-evenly items-center'>
            <Link to="home">Home</Link>
         </div>

      </div>
   </>
  )
}
