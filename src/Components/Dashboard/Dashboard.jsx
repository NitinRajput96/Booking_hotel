import React, { useEffect, useState } from 'react'
import Hotel_data from "../Json-data/Hotel_data.json"
import { IoLocationSharp } from "react-icons/io5";
import { RiHotelLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdLocationCity } from "react-icons/md";
import { useCategory } from '../../context/Context';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { LiaRupeeSignSolid } from "react-icons/lia";


export const Dashboard = () => {

     const {hotelData,setHotelData}=useCategory()
     const {searchItems,setSearchItems,setCatagory}=useCategory()
     const navigateH=useNavigate()
     const [newState,setNewState]=useState(
          
          {
               0: null,
               staylocation: null,
               checkingDate: null,
               checkoutDate: null,
               adults: null,
               childrens: null,
               rooms: 0
           }
     )


     const handler=(e)=>{
          const {name,value}=e.target
          setNewState({...newState,[name]:value})
        
          
     }

     const getallData=(e)=>{
          e.preventDefault();

          if(newState.staylocation===null){
             toast.error(" please enter your state location")
          }
          else if(newState.checkingDate===null){
               toast.error(" please enter your checking date ")
          }
          else if(newState.checkoutDate===null){
               toast.error(" please enter your checkout date ")
          }
          else if(newState.adults===null){
               toast.error(" please enter Adults ")
          }
          else if(newState.childrens===null){
               toast.error(" please enter Childrens ")
          }
          else if(newState.rooms===0){
               toast.error(" please enter Rooms ")
          }
          else{
              
               setHotelData(newState)  
               toast.success(" Done")
               setSearchItems(true)
               e.target.reset()
               navigateH("search") 
            
          
          }
      
     }

     
     useEffect(() => {
     
     }, [0])
     
     
    
  return (

    <>
     <Toaster/>
           <div className='w-full h-auto grid grid-cols-1  xl:grid-cols-7 grid-flow-row  m-0 border-none    '>
                <div className=' w-full h-44 xl:col-span-7 flex flex-wrap justify-center items-cente pt-3 bg-indigo-600 '>

                    <div className=' max-lg:w-full h-auto w-11/12  lg:px-10  px-4   '>
                            <span className=' text-[24px] font-sans font-extrabold text-white'>Find your next stay </span>
                            <p className=' text-[16px]   text-white'> Search low prices on hotels,homes and much more...</p>
                    </div>
            
                </div>


                  <form onSubmit={getallData} className=' absolute left-3 right-3 top-80     max-md:h-[262px] bg-yellow-500 rounded-md max-sm: p-1 flex justify-center max-lg:flex-wrap  flex-nowrap  max-md:gap-2 gap-0.5  sm:hidden  '>    
                                <div className='w-full h-14 rounded-md flex justify-center items-center  bg-white '>
                                     <span className='w-8 text-black text-md  font-semibold h-5/6 flex justify-center items-center'><IoSearchOutline/></span>
                                     <input className=' w-full text-[18px] font-sans font-bold outline-none' type="text" name='staylocation' onChange={(e)=>handler(e)} placeholder=' Location'  />
                                </div>
                                <div className=' w-full h-14 grid grid-cols-1 gap-1   ' >
                                       <div className=' h-full bg-white rounded-md   flex justify-center items-center flex-wrap '>
                                             <div className=' w-full h-2/5  rounded-md flex justify-evenly gap-12 items-center '>
                                                 <span className=' text-[13px]  font-sans font-bold' >Check in date </span>
                                                 <span className=' text-[13px]  font-sans font-bold' >Check out date </span>
                                             </div>
                                             <div className=' w-full flex h-3/5    rounded-md   justify-center items-center  bg-white'>
                                                    <input type="date"  className=' w-2/4    h-full  rounded-md  bg-white   text-[13px] font-sans px-5  font-semibold ' name='checkingDate'  onChange={(e)=> handler(e)}  />
                                                    <input type="date"  className=' w-2/4   h-full  rounded-md  bg-white  text-[13px] font-sans px-5  font-semibold ' name='checkoutDate'  onChange={(e)=> handler(e)}   />
                                             </div>
                                       </div>
                
                                    
                                </div>
                
                                <div className=' w-full h-14 grid grid-cols-3 max-md:gap-1  ' >
                                       <div        className='  w-full   bg-white max-md:rounded-md rounded-l-md  flex justify-center items-center flex-col flex-wrap '>
                                            <span  className= ' w-full   text-[13px] text-center font-bold   font-sans' >Adults</span>
                                            <input className='  w-full    text-[15px] font-bold font-sans outline-none  flex justify-center items-center text-center' type='text' name='adults' onChange={(e)=>handler(e)} placeholder='2'   ></input>
                                       </div>
                
                                       <div        className='  w-full   bg-white max-md:rounded-md flex justify-center items-center flex-col flex-wrap '>
                                            <span  className= ' w-full   text-[13px] text-center font-bold   font-sans' >Children</span>
                                            <input className='  w-full   text-[15px] font-bold font-sans outline-none  flex justify-center items-center text-center' type='text' name='childrens' onChange={(e)=>handler(e)} placeholder='0'   ></input>
                                       </div>
                
                                       <div        className='  w-full   bg-white max-md:rounded-md rounded-r-md flex justify-center items-center flex-col flex-wrap '>
                                            <span  className= ' w-full   text-[13px] text-center font-bold   font-sans' >Rooms</span>
                                            <input className='  w-full   text-[15px] font-bold font-sans outline-none  flex justify-center items-center text-center' type='text' name='rooms' onChange={(e)=>handler(e)} placeholder='1'   ></input>
                                       </div>
                
                                   
                                </div>
                
                                <div className=' max-lg:w-full  w-3/5 h-14 rounded-md flex justify-center bg-blue-700  items-center shadow-sm  '>
                                     <button type='submit' className=' w-full h-12 text-[20px] outline-none  font-semibold text-white font-sans' >Search</button>
                                </div>
                          </form>
                
                
                
                
                          <form onSubmit={getallData} className='absolute  md:left-24 md:right-24 top-[278px]     max-sm:h-[262px] bg-yellow-500 rounded-md max-sm:p-2 p-[4px] flex justify-center max-sm:flex-wrap  flex-nowrap  max-md:gap-2 gap-0.5  max-sm:hidden  '>    
                                <div className='w-full h-14 rounded-md flex justify-center items-center  bg-white '>
                                     <span className='w-8 text-black text-md  font-semibold h-5/6 flex justify-center items-center'><IoSearchOutline/></span>
                                     <input className=' w-full text-[18px]    font-sans font-bold outline-none' type="text" name='staylocation' onChange={(e)=>handler(e)} placeholder=' Location'  />
                                </div>
                                <div className=' w-full h-14 grid grid-cols-1 gap-1   ' >
                                       <div className=' h-full bg-white rounded-md   flex justify-center items-center flex-wrap '>
                                             <div className=' w-full h-2/5  rounded-md flex justify-evenly gap-12 items-center '>
                                                 <span className=' text-[10px]     font-sans font-bold' >Check in date </span>
                                                 <span className=' text-[10px]     font-sans font-bold' >Check out date </span>
                                             </div>
                                             <div className=' w-full flex h-3/5    rounded-md   justify-center items-center  bg-white'>
                                                    <input type="date"  className=' w-2/4      h-full  rounded-md  bg-white   text-[9px] font-sans px-5  font-semibold ' name='checkingDate'  onChange={(e)=> handler(e)}  />
                                                    <input type="date"  className=' w-2/4     h-full  rounded-md  bg-white  text-[9px] font-sans px-5  font-semibold ' name='checkoutDate'  onChange={(e)=> handler(e)}   />
                                             </div>
                                       </div>
                
                                    
                                </div>
                
                                <div className=' w-full h-14 grid grid-cols-3 max-md:gap-1  ' >
                                       <div        className='  w-full   bg-white max-md:rounded-md rounded-l-md  flex justify-center items-center flex-col flex-wrap '>
                                            <span  className= ' w-full   text-[10px] text-center font-bold     font-sans' >Adults</span>
                                            <input className='  w-full    text-[10px] font-bold font-sans outline-none  flex justify-center items-center text-center' type='text' name='adults' onChange={(e)=>handler(e)} placeholder='2'   ></input>
                                       </div>
                
                                       <div        className='  w-full   bg-white max-md:rounded-md flex justify-center items-center flex-col flex-wrap '>
                                            <span  className= ' w-full   text-[10px] text-center font-bold     font-sans' >Children</span>
                                            <input className='  w-full   text-[10px] font-bold font-sans outline-none  flex justify-center items-center text-center' type='text' name='childrens' onChange={(e)=>handler(e)} placeholder='0'   ></input>
                                       </div>
                
                                       <div        className='  w-full   bg-white max-md:rounded-md rounded-r-md flex justify-center items-center flex-col flex-wrap '>
                                            <span  className= ' w-full   text-[10px] text-center font-bold     font-sans' >Rooms</span>
                                            <input className='  w-full   text-[10px] font-bold font-sans outline-none  flex justify-center items-center text-center' type='text' name='rooms' onChange={(e)=>handler(e)} placeholder='1'   ></input>
                                       </div>
                
                                </div>
                
                                <div className='  w-3/5  h-14 rounded-md flex justify-center bg-blue-700  items-center shadow-sm  '>
                                     <button type='submit' className=' w-full h-12 text-[12px] sm:text-[20px] outline-none  font-semibold text-white font-sans' >Search</button>
                                </div>
                          </form>

                       
        </div>

        <div className=' w-full  h-[1000px] bg-gray-100 pt-12  max-sm:top-80  '>
              <div className=' w-full h-auto flex justify-center bg-white '>
                      <div className=' w-11/12 px-10  h-auto text-left'>
                            <h1 className=' text-lg font-bold '>Offers</h1>
                            <p className=' text-gray-600'> Promotions, deals and special offers for you</p>
                      </div>
              </div>


               <div className=' w-full h-auto flex justify-center items-center    bg-white '>
                      <div className=' max-sm:w-full sm:w-[85%] h-[500px]  pt-4   overflow-scroll overflow-y-hidden  flex justify-center  gap-2 items-center  flex-col flex-wrap  '>
                             {
                                Hotel_data.hotelDetails.map((item,i)=>
                              
                                         <div className=' max-sm:w-full  sm:w-[280px] h-[95%]  flex  items-center flex-wrap  rounded-t-lg shadow-lg '>
                                            <div className=' w-full h-2/4'>
                                                <img src={item.img} className=' w-[100%] shadow-lg rounded-t-lg  h-[100%]  ' alt="" />
                                            </div>
                                            <div className=' w-full h-[50%] p-2'>
                                               <h1 className=' text-md font-bold'>{item.hote_name}</h1>
                                               <p className=' text-gray-500 text-sm font-semibold  font-mono'>{item.hot_location},{item.hot_city}</p>
                                               <p className=' text-xs font-semibold text-gray-500'>Review score {item.hot_reviow}</p>
                                               <p className=' h-[50%] gap-3 text-sm flex justify-end items-center mt-14'>2 nights <span className=' text-xs text-red-600  flex justify-center items-center'><LiaRupeeSignSolid/>1999</span> <FaIndianRupeeSign/>{1900}</p>
                                            </div>
                                         </div>   
                                   
                                     
                                      )
                                
                             }
                             
                             
                                                  
                      </div>
               </div>





         
        </div>
 


                            
    </>
  )
}
