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
import { useCategory } from '../../context/Context';



 



export const Header = () => {

       const {searchItems,setSearchItems}=useCategory()
       const [state,setState]=useState(false)
       
       

       



  return (
   <>
    <div className=' w-full  h-[70px]    m-0 border-none  flex justify-center items-center  bg-indigo-600  z-10 '>
          
    <div className='  max-[450px]:px-2  w-11/12 h-full   bg-indigo-600  flex  justify-between items-center border-b  '>
         
         {/* logo */}
         <div className=' max-sm:w-3/7 sm:w-40   lg:text-lg lg:font-bold px-2 text-white rounded-md font-semibold'>
              <span className=''> Booking-hotels</span>
         </div>

         <div className=' w-5/6  h-11 rounded-md  flex  justify-end gap-3 items-center max-[450px]:hidden '>
           
              <Link className=' w-12   hover:bg-indigo-500 hover:rounded-md h-11  flex justify-center items-center text-white font-sans font-semibold'>INR</Link>
              <Link className=' w-12   hover:bg-indigo-500 hover:rounded-md h-11  flex justify-center items-center'>
                 {
                   Hotel_data.logo.map((item,i)=>
                     <img className=' w-8 h-6' src={item.logoFlage} alt="" key={i} />
                   )
                 }</Link>

              <Link className=' w-12   hover:bg-indigo-500 hover:rounded-md h-11  flex justify-center items-center text-lg text-white'><span className=' text-[22px]'><FaRegQuestionCircle /></span></Link>
              <Link className='  px-2 py-1   rounded-md  text-white hover:bg-indigo-500 max-md:hidden'>List your property</Link>
              <Link to="login"  className=' text-sm w-auto px-3 py-[5px]  hover:bg-indigo-50 hover:rounded-md   rounded-md  flex justify-center items-center  text-indigo-600 font-sans bg-white font-semibold max-sm:hidden'>Register</Link>
              <Link to="login"  className=' text-sm w-auto px-3 py-[5px]  hover:bg-indigo-50 hover:rounded-md   rounded-md  flex justify-center items-center  text-indigo-600 font-sans bg-white font-semibold max-sm:hidden'>Sign in</Link>
         </div>

            <div className=' flex justify-center items-center gap-4 px-3 ' >
                  <div className=' flex justify-center items-center  text-lg text-white py-2 sm:hidden'>
                  <Link to="login"><FaRegUserCircle /> </Link>
                        
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
        <div className=' w-full h-full  fixed top-0 left-0 right-0 bottom-0 z-50   text-left min-[450px]:hidden'>
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
            <Link className='  py- px-2 text-left   hover:border text-white rounded-md hover:border-blue-900 text-[16px] font-mono   font-semibold  ' to="hotels">Booking..Rooms</Link>
            <Link className='  py- px-2 text-left   hover:border text-white rounded-md hover:border-blue-900 text-[16px] font-mono   font-semibold ' to="/">Home</Link>
            <Link className='  py- px-2 text-left   hover:border text-white rounded-md hover:border-blue-900 text-[16px] font-mono   font-semibold ' to="contact">Contact</Link>
            <Link className='  py- px-2 text-left   hover:border text-white rounded-md hover:border-blue-900 text-[16px] font-mono  font-semibold ' to="about">About</Link>
         </div>

         </div>
       </div>:""
     }








     <div className=' w-full h-auto    bg-indigo-600 flex justify-center  py-2 border   '>
          <div className=' w-11/12 h-auto md:h-12  bg-indigo-600  flex justify-start items-center min-[450]:gap-4 gap-2 flex-wrap '>
            <Link to="/"         className=' px-[5px] py-[5px]  sm:py-[6px] sm:px-[8px] max-[450px]:text-[12px] flex justify-center items-center   hover:bg-indigo-500   gap-1 text-white  rounded-lg ' onClick={()=>setSearchItems(false)} ><MdNightsStay/>Stays</Link>
            <Link to="contact"   className=' px-[5px] py-[5px]  sm:py-[6px] sm:px-[8px] max-[450px]:text-[12px] flex justify-center items-center   hover:bg-indigo-500   gap-1 text-white  rounded-lg ' ><PiAirplaneTakeoffLight/>Flights</Link>
            <Link to="about"     className=' px-[5px] py-[5px]  sm:py-[6px] sm:px-[8px] max-[450px]:text-[12px] flex justify-center items-center   hover:bg-indigo-500   gap-1 text-white  rounded-lg ' ><LiaHotelSolid/>Flights + Hotel</Link>
            <Link to="carsrentl" className=' px-[5px] py-[5px]  sm:py-[6px] sm:px-[8px] max-[450px]:text-[12px] flex justify-center items-center   hover:bg-indigo-500   gap-1 text-white  rounded-lg ' ><FaCar/>Car rentals</Link>
            <Link to="hotels"    className=' px-[5px] py-[5px]  sm:py-[6px] sm:px-[8px] max-[450px]:text-[12px] flex justify-center items-center   hover:bg-indigo-500   gap-1 text-white  rounded-lg ' ><MdOutlineAttractions/>Attractions</Link>
            <Link to="/"         className=' px-[5px] py-[5px]  sm:py-[6px] sm:px-[8px] max-[450px]:text-[12px] flex justify-center items-center   hover:bg-indigo-500   gap-1 text-white  rounded-lg ' ><MdOutlineLocalTaxi/>Airport taxis</Link>
         </div>
     </div>

  
      
   </>
  )
}
