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
           <div className='w-full h-auto grid grid-cols-1  xl:grid-cols-7 grid-flow-row  m-0 border-none     '>
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
 

























































                               gridList===true?
                              
                                   {/* <div className=' max-sm:w-full w-[86%] h-screen max-lg:h-full flex justify-between items-center gap-2 xl:gap-5  max-xl:flex-col   '>


                                              <div className=' w-[25%] border h-full bg-gray-100  rounded-md'>
                                             
                                             </div>



                                             <div className=' w-full xl:w-[75%]  rounded-md h-full bg-gray-100 flex justify-evenly items-center flex-col xl:overflow-auto'>

                                             <div className=' w-full h-auto  gap-2 flex justify-center flex-wrap items-center    bg-slate-50  '>
                                             {
                                                  
                                                  Hotel_data.hotelDetails.map((item,i)=>
                                                       <div className=' w-11/12  xl:h-56 shadow-sm  h-36  px-2 gap-4 flex  justify-center items-center   rounded-md bg-white ' onClick={()=>{itemCatagory(item.hote_name)}} key={i}>
                                                            <div className='w-44 h-5/6 xl:w-2/5  xl:h-5/6'>
                                                                 <img className=' w-full h-full  border rounded-md   ' src={item.img} alt="" />
                                                            </div>
                                                            <div className=' h-5/6 xl:h-5/6  w-52 xl:w-3/5 font-serif text-[11px] xl:text-sm font-semibold flex flex-wrap  flex-col '>
                                                                 <span className=' flex items-center gap-1'><RiHotelLine /> {item.hote_name} </span>
                                                                 <span className=' flex items-center gap-1'><MdLocationCity /> {item.hot_city}</span>
                                                                 <span className=' flex items-center gap-1 '><IoLocationSharp /> {item.hot_location} </span>
                                                                 <span className=' flex items-center gap-1 '><FaEye />{item.hot_reviow}</span>
                                                                 <span className=' flex items-center gap-1 '><FaEye />{item.id}</span>
                                                            </div>
                                                  </div>  
                                                  )
                                             
                                             }
                                        </div>  

                                        </div>

                                        </div>:"" */}
                                  
                              

                              /* Normal List */
                              
                                   gridList===false? 
                                        {/* <div className=' w-full  xl:w-[86%] h-screen max-lg:h-full flex justify-between items-center gap-2 lg:gap-5  max-xl:flex-col   '>
                                            <div className=' w-[25%] border h-full bg-gray-100  rounded-md max-sm:hidden'>        
                                             </div>

                                             <div className=' w-full xl:w-[75%]  rounded-md h-full bg-gray-100 flex justify-evenly items-center flex-col flex-wrap xl:overflow-auto'>

                                             <div className=' w-full h-auto grid max-[400px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 justify-items-center items-center gap-2 px-2   bg-gray-50  '>
                                             {
                                                    Hotel_data.hotelDetails.map((item,i)=>
                                                       <div className=' w-full  xl:h-[450px]  shadow-sm  px-2 gap-4 flex  justify-center items-center flex-col   rounded-md bg-white ' onClick={()=>{itemCatagory(item.hote_name)}} key={i}>
                                                            <div className=' w-full h-5/6'>
                                                                 <img className=' w-full h-full  border rounded-md   ' src={item.img} alt="" />
                                                            </div>
                                                            <div className=' h-5/6 xl:h-5/6  w-52 xl:w-3/5 font-serif text-[11px] xl:text-sm font-semibold flex flex-wrap  flex-col '>
                                                                 <span className=' flex items-center gap-1'><RiHotelLine /> {item.hote_name} </span>
                                                                 <span className=' flex items-center gap-1'><MdLocationCity /> {item.hot_city}</span>
                                                                 <span className=' flex items-center gap-1 '><IoLocationSharp /> {item.hot_location} </span>
                                                                 <span className=' flex items-center gap-1 '><FaEye />{item.hot_reviow}</span>
                                                                 <span className=' flex items-center gap-1 '><FaEye />{item.id}</span>
                                                            </div>
                                                  </div>  
                                                  )
                                             }
                                        </div>  

                                        </div>
                                        </div>:""
                               */}
    </>
  )
}
