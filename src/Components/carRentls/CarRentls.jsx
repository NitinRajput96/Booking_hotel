import React, { useState } from 'react'
import { useCategory } from '../../context/Context';
import { IoSearchOutline } from "react-icons/io5";

export const CarRentls = () => {

    const {carRents,setCarRents}=useCategory()
    const [newState,setNewState]=useState()
    const [dropOffLOc,setDropOffLoc]=useState(false)

    const handler=(e)=>{
         const {name,value}=e.target;
         setCarRents({...carRents,[name]:value})
    }
  
   
  

    const carRentl=(e)=>{
         e.preventDefault();
        setNewState(carRents)  
    }
    
    console.log(newState);
    
    
   
  return (
    <>
         <div className='w-full h-auto grid grid-cols-1  xl:grid-cols-7 grid-flow-row   xl:p-3    '>
               <div className=' w-full h-auto flex flex-wrap justify-center items-center  gap-7'>
        
                  <div className=' w-full h-auto bg-indigo-600 px-4 pt-8'>
                         <span className=' text-[24px] font-sans text-white font-extrabold'>Find your rental Cars </span>
                         <p className=' text-[16px] text-white'> Search low prices on hotels,homes and much more...</p>

                         <div className=' w-full h-auto flex  justify-between items-center py-4'>
                             <input type="checkbox" className=' w-5 h-5 rounded-md text-white bg-blue-700 '  onChange={()=>setDropOffLoc(!dropOffLOc)} />
                             <p className=' w-full px-2 text-white font-semibold'>Drop car off at different location</p>
                         </div>
                  </div>

        

           
                  
                  
                   <form onSubmit={carRentl} className=' w-full h-auto bg-yellow-500 rounded-md p-2 flex justify-center flex-wrap gap-2  mx-4 mb-5   '>    
                        <div className='w-full h-14 rounded-md flex justify-center items-center  bg-white '>
                             <div className='w-9 text-black text-md  font-semibold h-5/6 flex justify-center items-center'><IoSearchOutline/></div>
                             <div className=' w-full h-full flex flex-col'>
                                 <span className=' text-[13px] text-gray-500'> Pick-up-location</span>
                                 <input className=' w-full text-[18px] font-sans font-bold outline-none' type="text" name='pick_up_location' onChange={(e)=>handler(e)}  />
                             </div>
                        </div>

                     {
                        dropOffLOc!=false?
                        <>
                        <div className='w-full h-14 rounded-md flex justify-center items-center  bg-white '>
                             <div className='w-9 text-black text-md  font-semibold h-5/6 flex justify-center items-center'><IoSearchOutline/></div>
                             <div className=' w-full h-full flex flex-col'>
                                 <span className=' text-[13px] text-gray-500'> Drop-off-location</span>
                                 <input className=' w-full text-[18px] font-sans font-bold outline-none' type="text" name='drop_Off_location' onChange={(e)=>handler(e)}  />
                             </div>
                        </div>
                        </>:""
                     }

                        <div className=' w-full h-14 grid grid-cols-5 gap-1  ' >
                               <div className=' h-full col-span-3 bg-white rounded-md flex justify-center items-center px-1   flex-wrap border-2'>
                                  <div className=' w-full h-2/5 text-[13px] pl-6 text-gray-500'>Pick-up-date</div>
                                 <input type="date"   className=' w-full   h-3/5  outline-none  bg-white  px-5 text-[15px] font-sans   font-semibold ' name='pick_up_date'  onChange={(e)=> handler(e)}  />
                               </div>

                               <div className=' col-span-2 h-full bg-white rounded-md flex justify-center items-center flex-wrap border-2'>
                               <div className=' w-full h-2/5 text-[13px] pl-6 text-gray-500'>Time</div>
                                 <input type="time"  className=' w-full rounded-sm outline-none    h-3/5  bg-white   text-[15px] font-sans pl-4 pr-1  font-semibold ' name='time'  onChange={(e)=> handler(e)}  />
                               </div>   
                        </div>

                        <div className=' w-full h-14 grid grid-cols-5 gap-1  ' >
                               <div className=' h-full col-span-3 bg-white rounded-md flex justify-center items-center px-1   flex-wrap border-2'>
                                  <div className=' w-full h-2/5 text-[13px] pl-6 text-gray-500'>Drop-off-date</div>
                                 <input type="date"   className=' w-full   h-3/5  outline-none  bg-white  px-5 text-[15px] font-sans   font-semibold ' name='drop_off_date'  onChange={(e)=> handler(e)}  />
                               </div>

                               <div className=' col-span-2 h-full bg-white rounded-md flex justify-center items-center flex-wrap border-2'>
                               <div className=' w-full h-2/5 text-[13px] pl-6 text-gray-500'>Time</div>
                               <input type="time"  className=' w-full rounded-sm outline-none    h-3/5   bg-white   text-[15px] font-sans pl-4 pr-1  font-semibold ' name='drop_off_time'  onChange={(e)=> handler(e)}  />
                               </div>   
                        </div>
        
                      
        
                        <div className='w-full h-14 rounded-md flex justify-center bg-blue-700  items-center shadow-sm  '>
                             <button type='submit' className=' w-full h-12 text-[20px]  font-semibold text-white font-sans' >Search</button>
                        </div>
                  </form> 
                
                   
               </div>
               </div>
    </>
  )
}
