import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineCancel } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import Hotel_data from "../Json-data/Hotel_data.json"


 



export const Header = () => {

   
       const [state,setState]=useState(false)
       console.log(state);
       

       



  return (
   <>
      <div className=' max-[400px]:h-[70px] w-full  h-[80px] bg-indigo-600 shadow-xl flex  justify-between items-center   '>
         
         {/* logo */}
         <div className='   w-2/6 max-[400px]:w-3/6   flex justify-center items-center  '>
              <span className='   border max-[400px]:h-[30px] h-11 max-[400px]:text-[14px] max-[400px]:font-extrabold py-1 px-3  bg-transparent text-white font-mono text-2xl font-semibold  rounded-md justify-center items-center flex'> Booking-hotels</span>
         </div>

         <div className=' w-4/6 h-11 rounded-md  flex justify-center gap-3 items-center max-[450px]:hidden '>
           
              <Link className=' w-12   hover:bg-indigo-500 hover:rounded-md h-11  flex justify-center items-center text-white font-sans font-semibold'>INR</Link>
              <Link className=' w-12   hover:bg-indigo-500 hover:rounded-md h-11  flex justify-center items-center'>
                 {
                   Hotel_data.logo.map((item,i)=>
                     <img className=' w-8 h-6' src={item.logoFlage} alt="" />
                   )
                 }</Link>

              <Link className=' w-12   hover:bg-indigo-500 hover:rounded-md h-11  flex justify-center items-center text-lg text-white'><FaRegQuestionCircle /></Link>
              <Link className=' w-auto hover:bg-indigo-500 hover:rounded-md h-11 px-3   flex justify-center items-center text-white font-sans font-semibold '>List your property</Link>
              <Link className=' w-auto px-2  hover:bg-indigo-500 hover:rounded-md h-10  rounded-sm  flex justify-center items-center  text-indigo-600 font-sans bg-white '>Register</Link>
              <Link className=' w-auto px-2  hover:bg-indigo-500 hover:rounded-md h-10  rounded-sm flex justify-center items-center text-indigo-600 font-sans bg-white '>Sign in</Link>
         </div>

            <div className=' flex justify-center items-center  text-lg text-white py-2 px-3 min-[450px]:hidden'>
             <FaListCheck onClick={()=>{setState(!state)}}/>
            </div> 










    {/* Options

      <div className=' w-3/6 h-11 flex justify-evenly items-center max-[450px]:hidden'>
            <Link className=' py-1 px-6  hover:bg-indigo-500 hover:text-white rounded-full  animatedes text-[18px] font-mono text-white font-semibold' to="hotels">Booking..Rooms</Link>
            <Link className=' py-1 px-6  hover:bg-indigo-500 hover:text-white rounded-full  text-[18px] font-mono text-white font-semibold' to="/">Home</Link>
            <Link className=' py-1 px-6  hover:bg-indigo-500 hover:text-white rounded-full  text-[18px] font-mono text-white font-semibold' to="contact">Contact</Link>
            <Link className=' py-1 px-6  hover:bg-indigo-500 hover:text-white rounded-full  text-[18px] font-mono text-white font-semibold' to="about">About</Link>
         </div>

         <div className=' flex justify-center items-center  text-lg text-white py-2 px-3 min-[450px]:hidden'>
             <FaListCheck onClick={()=>{setState(!state)}}/>
         </div>  */}
      </div>






 
      {/* sidenavbar */}
     {
        state===true?
        <div className='trans w-full h-full bg-indigo-600  z-40 top-0  absolute  pb-14 px-3  text-left border min-[450px]:hidden'>
      
      <div className=' w-12 h-12 absolute top-0 right-0  z-50 flex justify-center items-center text-[30px]  text-black'>
      <MdOutlineCancel onClick={()=>{setState(!state)}} />
      </div>
           <div className=' w-full  h-8 mt-8  text-xl px-1  '>
                <span className=' text-white font-sans font-extrabold'>Booking hotels</span>
           </div>
        <div className=' w-full h-11 mt-2 flex flex-col justify-evenly items-start'>
            <Link className='  py- px-2 text-left   hover:border text-white rounded-md hover:border-blue-900 text-[16px] font-mono text-blue-800 font-semibold  ' to="hotels">Booking..Rooms</Link>
            <Link className='  py- px-2 text-left   hover:border text-white rounded-md hover:border-blue-900 text-[16px] font-mono text-blue-800 font-semibold ' to="/">Home</Link>
            <Link className='  py- px-2 text-left   hover:border text-white rounded-md hover:border-blue-900 text-[16px] font-mono text-blue-800 font-semibold ' to="contact">Contact</Link>
            <Link className='  py- px-2 text-left   hover:border text-white rounded-md hover:border-blue-900 text-[16px] font-mono text-blue-800 font-semibold ' to="about">About</Link>
         </div>
   
      </div>:""
     }
   </>
  )
}
