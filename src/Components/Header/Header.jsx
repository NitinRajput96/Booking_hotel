import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineCancel } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import Hotel_data from "../Json-data/Hotel_data.json"
import { FaRegUserCircle } from "react-icons/fa";

// 2kindbar
import { MdNightsStay } from "react-icons/md";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { LiaHotelSolid } from "react-icons/lia";
import { FaCar } from "react-icons/fa";
import { MdOutlineAttractions } from "react-icons/md";
import { MdOutlineLocalTaxi } from "react-icons/md";



 



export const Header = () => {

   
       const [state,setState]=useState(false)
       console.log(state);
       

       



  return (
   <>
    <div className=' w-full  h-[70px]     flex justify-center items-center  bg-indigo-600  z-10 '>
    <div className='  max-[450px]:px-2  w-11/12 h-full   bg-indigo-600  flex  justify-between items-center border-b '>
         
         {/* logo */}
         <div className=' max-sm:w-3/7 sm:w-40  border-b  lg:text-lg lg:font-bold px-2 text-white rounded-md font-semibold'>
              <span className=''> Booking-hotels</span>
         </div>

         <div className=' w-5/6  h-11 rounded-md  flex  justify-end gap-3 items-center max-[450px]:hidden '>
           
              <Link className=' w-12   hover:bg-indigo-500 hover:rounded-md h-11  flex justify-center items-center text-white font-sans font-semibold'>INR</Link>
              <Link className=' w-12   hover:bg-indigo-500 hover:rounded-md h-11  flex justify-center items-center'>
                 {
                   Hotel_data.logo.map((item,i)=>
                     <img className=' w-8 h-6' src={item.logoFlage} alt="" />
                   )
                 }</Link>

              <Link className=' w-12   hover:bg-indigo-500 hover:rounded-md h-11  flex justify-center items-center text-lg text-white'><span className=' text-[22px]'><FaRegQuestionCircle /></span></Link>
              <Link className=' border px-2   rounded-md  text-white hover:bg-indigo-500 max-md:hidden'>List your property</Link>
              <Link className=' w-auto px-2  hover:bg-indigo-50 hover:rounded-md   rounded-md  flex justify-center items-center  text-indigo-600 font-sans bg-white max-sm:hidden'>Register</Link>
              <Link className=' w-auto px-2  hover:bg-indigo-50 hover:rounded-md   rounded-md flex justify-center items-center text-indigo-600 font-sans bg-white  max-sm:hidden'>Sign in</Link>
         </div>

            <div className=' flex justify-center items-center gap-4 px-3 ' >
                  <div className=' flex justify-center items-center  text-lg text-white py-2 sm:hidden'>
                        <FaRegUserCircle /> 
                  </div>
                  <div className=' flex justify-center items-center  text-lg text-white py-2'>
                  <FaListCheck onClick={()=>{setState(!state)}}/>
                  </div> 
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
    </div>






 
      {/* sidenavbar */}
     {
        state===true?
        <div className=' w-full h-full  fixed top-0 left-0 right-0 bottom-0   text-left min-[450px]:hidden'>
         <div className=' trans w-full h-full p-5 bg-indigo-600  '>
           
            <div className=' w-full h-8  flex justify-between items-center'>
            <div className=' w-full  h-8   text-xl px-1   '>
                <span className=' text-white font-sans font-extrabold '>Booking hotels</span>
           </div>      
                  <div className=' w-12 h-8 text-[30px]  text-white'>
                  <MdOutlineCancel onClick={()=>{setState(!state)}} />
                  </div>
            </div>
      
          
        <div className=' w-full h-11 mt-2 flex flex-col justify-evenly items-start '>
            <Link className='  py- px-2 text-left   hover:border text-white rounded-md hover:border-blue-900 text-[16px] font-mono text-blue-800 font-semibold  ' to="hotels">Booking..Rooms</Link>
            <Link className='  py- px-2 text-left   hover:border text-white rounded-md hover:border-blue-900 text-[16px] font-mono text-blue-800 font-semibold ' to="/">Home</Link>
            <Link className='  py- px-2 text-left   hover:border text-white rounded-md hover:border-blue-900 text-[16px] font-mono text-blue-800 font-semibold ' to="contact">Contact</Link>
            <Link className='  py- px-2 text-left   hover:border text-white rounded-md hover:border-blue-900 text-[16px] font-mono text-blue-800 font-semibold ' to="about">About</Link>
         </div>

         </div>
       </div>:""
     }








     <div className=' w-full h-auto     bg-indigo-600 flex justify-center   '>
         <div className=' w-11/12 md:h-16  bg-indigo-600  flex justify-start items-center py-4 min-[450]:gap-4 gap-2 flex-wrap '>
            <Link to="/" className='  py-1 px-2 sm:py-[1px] sm:[1px] max-[450px]:text-[12px] max-[450px]:px-1 flex justify-center items-center   hover:border  gap-1 text-white  rounded-lg ' ><MdNightsStay/>Stays</Link>
            <Link to="contact" className='  py-1 px-2 sm:py-[1px] sm:[1px] max-[450px]:text-[12px] max-[450px]:px-1 flex justify-center items-center   hover:border  gap-1 text-white  rounded-lg ' ><PiAirplaneTakeoffLight/>Flights</Link>
            <Link to="about" className='  py-1 px-2 sm:py-[1px] sm:[1px] max-[450px]:text-[12px] max-[450px]:px-1 flex justify-center items-center   hover:border  gap-1 text-white  rounded-lg ' ><LiaHotelSolid/>Flights + Hotel</Link>
            <Link to="hotels" className='  py-1 px-2 sm:py-[1px] sm:[1px] max-[450px]:text-[12px] max-[450px]:px-1 flex justify-center items-center   hover:border  gap-1 text-white  rounded-lg ' ><FaCar/>Car rentals</Link>
            <Link to="/" className='  py-1 px-2 sm:py-[1px] sm:[1px] max-[450px]:text-[12px] max-[450px]:px-1 flex justify-center items-center   hover:border  gap-1 text-white  rounded-lg ' ><MdOutlineAttractions/>Attractions</Link>
            <Link to="/" className='  py-1 px-2 sm:py-[1px] sm:[1px] max-[450px]:text-[12px] max-[450px]:px-1 flex justify-center items-center   hover:border  gap-1 text-white  rounded-lg ' ><MdOutlineLocalTaxi/>Airport taxis</Link>
         </div>
     </div>

      
   </>
  )
}
