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
    <div className=' w-full  h-[80px] flex justify-center items-center  bg-indigo-600 border'>
    <div className=' max-[400px]:h-[70px] max-[450px]:px-5  w-11/12 h-full  bg-indigo-600  flex  justify-between items-center   '>
         
         {/* logo */}
         <div className='   w-2/6 max-[400px]:w-3/6   flex  justify-between items-center  '>
              <span className='   border max-[400px]:h-[30px] h-11 max-[400px]:text-[14px] max-[400px]:font-extrabold py-1 px-3  bg-transparent text-white font-mono text-2xl font-semibold  rounded-md justify-center items-center flex'> Booking-hotels</span>
         </div>

         <div className=' w-4/6 h-11 rounded-md  flex  justify-end gap-3 items-center max-[450px]:hidden '>
           
              <Link className=' w-12   hover:bg-indigo-500 hover:rounded-md h-11  flex justify-center items-center text-white font-sans font-semibold'>INR</Link>
              <Link className=' w-12   hover:bg-indigo-500 hover:rounded-md h-11  flex justify-center items-center'>
                 {
                   Hotel_data.logo.map((item,i)=>
                     <img className=' w-8 h-6' src={item.logoFlage} alt="" />
                   )
                 }</Link>

              <Link className=' w-12   hover:bg-indigo-500 hover:rounded-md h-11  flex justify-center items-center text-lg text-white'><span className=' text-[22px]'><FaRegQuestionCircle /></span></Link>
              <Link className=' w-auto hover:bg-indigo-500 hover:rounded-md h-11 px-3 max-[750px]:hidden   flex justify-center items-center text-white font-sans font-semibold border rounded-md '>List your property</Link>
              <Link className=' w-auto px-2  hover:bg-indigo-50 hover:rounded-md h-10  rounded-md  flex justify-center items-center  text-indigo-600 font-sans bg-white  '>Register</Link>
              <Link className=' w-auto px-2  hover:bg-indigo-50 hover:rounded-md h-10  rounded-md flex justify-center items-center text-indigo-600 font-sans bg-white '>Sign in</Link>
         </div>

            <div className=' flex justify-center items-center gap-4 px-3'>
                  <div className=' flex justify-center items-center  text-lg text-white py-2  min-[450px]:hidden'>
                        <FaRegUserCircle />
                  </div>
                  <div className=' flex justify-center items-center  text-lg text-white py-2  min-[450px]:hidden'>
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








     <div className=' w-full h-56 bg-indigo-600 flex justify-center '>
         <div className=' w-11/12 h-24 bg-indigo-600  flex justify-start items-center gap-4'>
            <Link to="/" className=' py-2 px-3 flex justify-center items-center border gap-1 text-white rounded-lg ' ><MdNightsStay/>Stays</Link>
            <Link to="/" className=' py-2 px-3 flex justify-center items-center border gap-1 text-white rounded-lg ' ><PiAirplaneTakeoffLight/>Flights</Link>
            <Link to="/" className=' py-2 px-3 flex justify-center items-center border gap-1 text-white rounded-lg ' ><LiaHotelSolid/>Flights + Hotel</Link>
            <Link to="/" className=' py-2 px-3 flex justify-center items-center border gap-1 text-white rounded-lg ' ><FaCar/>Car rentals</Link>
            <Link to="/" className=' py-2 px-3 flex justify-center items-center border gap-1 text-white rounded-lg ' ><MdOutlineAttractions/>Attractions</Link>
            <Link to="/" className=' py-2 px-3 flex justify-center items-center border gap-1 text-white rounded-lg ' ><MdOutlineLocalTaxi/>Airport taxis</Link>
            
         </div>
     

     </div>
   </>
  )
}
