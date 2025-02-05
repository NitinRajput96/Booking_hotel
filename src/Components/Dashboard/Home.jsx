import React, { useState } from 'react'
import Hotel_data from "../Json-data/Hotel_data.json"
import { IoLocationSharp } from "react-icons/io5";
import { RiHotelLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import moment from 'moment';
import { DatePicker } from 'antd';
const {RangePicker} = DatePicker;



export const Home = () => {

  
   

    
 
  return (
<>
{/* <div className='w-full h-60  bg-indigo-600'>

</div> */}

  <div className='w-full h-auto grid grid-cols-1  xl:grid-cols-7 grid-flow-row   xl:p-3    '>
       <div className=' w-full h-auto flex flex-wrap justify-center items-center p-4 gap-7'>

          <div className=' w-full h-auto bg-white'>
                 <span className=' text-[24px] font-sans font-extrabold'>Find your next stay </span>
                 <p className=' text-[16px] text-gray-600'> Search low prices on hotels,homes and much more...</p>
          </div>

          <div className=' w-full h-[262px] bg-yellow-500 rounded-md p-2 flex justify-center flex-wrap gap-2   '>    
                <div className='w-full h-14 rounded-md flex justify-center items-center  bg-white '>
                     <span className='w-8 text-black text-md  font-semibold h-5/6 flex justify-center items-center'><IoSearchOutline/></span>
                     <input className=' w-full text-[18px] font-sans font-bold outline-none' type="search" />
                </div>
                <div className=' w-full h-14 grid grid-cols-1 gap-1  ' >
                       <div className=' bg-white rounded-md flex justify-center items-center flex-wrap border'>
                             <div className=' w-full flex justify-between pl-8 pr-20 items-center border'>
                                 <span className=' text-[13px]  font-sans' >Check in date </span>
                                 <span className=' text-[13px]  font-sans' >Check out date </span>
                             </div>
                             <div className=' w-full flex  justify-center '>
                               
                            <RangePicker className=' w-11/12  outline-white border-none no-underline pl-8 gap-0'/>
                          

                                 Hello
                             </div>
                       </div>

                    
                </div>

                <div className=' w-full h-14 grid grid-cols-3 gap-1  ' >
                       <div className=' bg-white rounded-md flex justify-center items-center flex-col flex-wrap border'>
                            <span className=' text-[13px]  font-sans' >Adults</span>
                            <span className=' text-[16px] font-bold font-sans'>2</span>
                       </div>

                       <div className=' bg-white rounded-md flex justify-center items-center flex-col flex-wrap border'>
                            <span className=' text-[13px]  font-sans' >Children</span>
                            <span className=' text-[16px] font-bold font-sans'>0</span>
                       </div>  
                       <div className=' bg-white rounded-md flex justify-center items-center flex-col flex-wrap border'>
                            <span className=' text-[13px]  font-sans' >Rooms</span>
                            <span className=' text-[16px] font-bold font-sans'>1</span>
                       </div>  
                </div>

                <div className='w-full h-14 rounded-md flex justify-center bg-blue-700  items-center shadow-sm  '>
                     <button className=' w-full h-12 text-[20px]  font-semibold text-white font-sans' type="submit">Search</button>
                </div>
          </div>
       </div>

        



       <div className=' w-full h-auto bg-gray-50 mt-7 '>
               
               <div className=' w-full p-5 '>
               
                   
                   <h1 className=' font-bold'>Recent Dates</h1>
                   <h4 className=' font-semibold'>  to </h4>
                  
              
               </div>
                 
       </div>
         


       <div className='  xl:col-span-4  gap-2 flex justify-center flex-wrap items-center bg-slate-50 '>
     
       {
         Hotel_data.hotelDetails.map((item,i)=>
             <div className=' w-11/12  xl:h-56 shadow-sm  h-36  px-2 gap-4 flex  justify-center items-center   rounded-md bg-white '>

               <img className=' w-32 h-5/6 xl:w-2/5  xl:h-5/6 border rounded-md   ' src={item.img} alt="" />
               <div className=' h-5/6 xl:h-5/6  w-60 xl:w-3/5 font-serif text-[11px] xl:text-sm font-semibold flex flex-wrap  flex-col '>
                   <span className=' flex items-center gap-1'><RiHotelLine /> {item.hote_name} </span>
                   {/* <span className=' flex items-center gap-1'><MdLocationCity /> {item.hot_city}</span> */}
                   <span className=' flex items-center gap-1 '><IoLocationSharp /> {item.hot_location} </span>
                   <span className=' flex items-center gap-1 '><FaEye />{item.hot_reviow}</span>
                     
               </div>
             </div>        
         )
       }       
       </div> 

  </div> 

  
  
</>
  )
}




