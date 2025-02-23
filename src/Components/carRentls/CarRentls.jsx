import React, { useState } from 'react'
import { useCategory } from '../../context/Context';
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


export const CarRentls = () => {

    const {carRents,setCarRents}=useCategory()
    const [newState,setNewState]=useState({
      pick_up_location: null,
      drop_Off_location:null,
      pick_up_date: null,
      time: null,
      drop_off_date:null,
      drop_off_time: null
    })
    const [dropOffLOc,setDropOffLoc]=useState(false)
    const nevigate=useNavigate()

    const handler=(e)=>{
         const {name,value}=e.target;
         setNewState({...newState,[name]:value})
    }
  
   
  

    const carRentlFunction=(e)=>{
         e.preventDefault(); 

         if(newState.pick_up_location===null){
          toast.error("please fill Pickup location") 
       }else if(dropOffLOc===true){
        toast.error("please fill drop off location")
      } 
       
       else if(newState.pick_up_date===null){
          toast.error("please select your pick up date ")
        } else if(newState.time===null){
          toast.error("please select your pick up time ")
        } else if(newState.drop_off_date===null){
          toast.error("please select your drop off date ")
        } else if(newState.drop_off_time===null){
          toast.error("please select your drop off Time ")
        }
        else{
          toast.success("Success")
          setCarRents(newState)
          setTimeout(() => {
           nevigate("/carlist")
          },600);
       
       } 

      
    }
    
   
    
  
    
   
  return (
    <>
       <Toaster/>
         <div className='w-full h-auto grid grid-cols-1  xl:grid-cols-7 grid-flow-row   xl:p-3    '>
               <div className=' w-full h-auto flex flex-wrap justify-center items-center  gap-7'>
        
                  <div className=' w-full h-auto bg-indigo-600 px-4 pt-8'>
                         <span className=' text-[24px] font-serif text-white font-extrabold'>Car hire for any kind of trip </span>
                         <p className=' text-[16px] text-white'>Great cars at great prices ,from the biggest car rental companies</p>

                         <div className=' w-full h-auto flex  justify-between items-center py-4'>
                             <input type="checkbox" className=' w-5 h-5 rounded-md text-white bg-blue-700 '  onChange={()=>setDropOffLoc(!dropOffLOc)} />
                             <p className=' w-full px-2 text-white font-semibold'>Drop car off at different location</p>
                         </div>
                  </div>

        

           
                  
              <div className=' w-full h-auto flex justify-center items-center p-5 '>
                       
              <form onSubmit={carRentlFunction} className=' w-full h-auto bg-yellow-500 rounded-md p-2 flex justify-center flex-wrap gap-2  mb-5   '>    
                        <div className='w-full h-14 rounded-md flex justify-center items-center  bg-white '>
                             <div className='w-9 text-black text-md  font-semibold h-5/6 flex justify-center items-center'><IoSearchOutline/></div>
                             <div className=' w-full h-full flex flex-col py-2'>
                                 <span className=' text-[13px] text-gray-500'> Pick-up-location</span>
                                 <input className=' w-full text-[15px] font-sans font-bold outline-none' type="text" name='pick_up_location' onChange={(e)=>handler(e)}  />
                             </div>
                        </div>

                     {
                        dropOffLOc!=false?
                        <>
                        <div className='w-full h-14 rounded-md flex justify-center items-center  bg-white '>
                             <div className='w-9 text-black text-md  font-semibold h-5/6 flex justify-center items-center'><IoSearchOutline/></div>
                             <div className=' w-full h-full flex flex-col py-2 '>
                                 <span className=' text-[13px] text-gray-500'> Drop-off-location</span>
                                 <input className=' w-full text-[15px] font-sans font-bold outline-none' type="text" name='drop_Off_location' onChange={(e)=>handler(e)}  />
                             </div>
                        </div>
                        </>:""
                     }

                        <div className=' w-full h-14 grid grid-cols-5 gap-1  rounded-md ' >
                               <div className=' h-full col-span-3 bg-white rounded-md flex justify-center items-center px-1 py-1   flex-wrap'>
                                  <div className=' w-full h-2/5 text-[13px] pl-5 rounded-md  text-gray-600'>Pick-up-date</div>
                                 <input type="date"   className=' w-full   h-3/5 rounded-md   outline-none  bg-white  px-5 text-[15px] font-sans   font-semibold ' name='pick_up_date'  onChange={(e)=> handler(e)}  />
                               </div>

                               <div className=' col-span-2 py-1 h-full bg-white rounded-md flex justify-center items-center flex-wrap '>
                               <div className=' w-full h-auto text-[13px] pl-4 text-gray-600 rounded-md '>Time</div>
                                 <input type="time"  className=' w-full rounded-md outline-none    h-3/5  bg-white   text-[15px] font-sans pl-4 pr-1  font-semibold ' name='time'  onChange={(e)=> handler(e)}  />
                               </div>   
                        </div>

                        <div className=' w-full h-14 grid grid-cols-5 gap-1   rounded-md  ' >
                               <div className=' h-full col-span-3 py-1 bg-white rounded-md flex justify-center items-center px-1    flex-wrap'>
                                  <div className=' w-full h-auto text-[13px] rounded-md  pl-5 text-gray-600 '>Drop-off-date</div>
                                 <input type="date"   className=' w-full   h-auto  rounded-md  outline-none  bg-white  px-5 text-[15px] font-sans   font-semibold ' name='drop_off_date'  onChange={(e)=> handler(e)}  />
                               </div>

                               <div className=' col-span-2 h-full py-1 bg-white rounded-md flex justify-center items-center flex-wrap '>
                                    <div className=' w-full h-2/5 text-[13px] rounded-md  pl-4 text-gray-600 '>Time</div>
                                    <input type="time"  className=' w-full rounded-md outline-none    h-3/5   bg-white   text-[15px] font-sans pl-4 pr-1  font-semibold ' name='drop_off_time'  onChange={(e)=> handler(e)}  />
                               </div>   
                        </div>
        
                      
        
                        <div className='w-full h-14 rounded-md flex justify-center bg-blue-700  items-center shadow-sm  '>
                             <button type='submit' className=' w-full h-12 text-[20px]  font-semibold text-white font-sans' >Search</button>
                        </div>
                  </form> 
                
              </div>
                   
               </div>
               </div>

           {
            carRents!=null?
               <div className=' w-full h-auto flex justify-center items-center bg-gray-50 p-4 mb-7 '>
                 
                      <div className=' w-full bg-white shadow-md  px-2'>
                              <div className=' w-full h-auto flex justify-center  items-center  gap-4 '>
                                  <p className=' w-full font-semibold text-[15px]'>Pick-up-location</p>
                                  <span >:</span>
                                  <p className=' w-full text-[15px] pl-6'>{carRents.pick_up_location}</p>
                              </div>

                              {
                                newState.drop_Off_location!=null? <div className=' w-full h-auto flex justify-center  items-center  gap-4 '>
                                  <p className=' w-full font-semibold text-[15px]'>Drop-Off-location</p>
                                  <span >:</span>
                                  <p className=' w-full text-[15px] pl-6'>{carRents.drop_Off_location}</p>
                              </div>:""
                              }

                              <div className=' w-full h-auto flex justify-center  items-center  gap-4 '>
                                  <p className=' w-full font-semibold text-[15px]'>Pick-up-date</p>
                                  <span >:</span>
                                  <p className=' w-full text-[15px] pl-2 gap-3'> {carRents.pick_up_date}  : {carRents.time}</p>
                              </div>

                              <div className=' w-full h-auto flex justify-center  items-center gap-4 '>
                                  <p className=' w-full font-semibold text-[15px]'>Drop-Off-date and Time</p>
                                  <span >:</span>
                                  <p className=' w-full text-[15px] pl-2 flex  '>{carRents.drop_off_date}  : {carRents.drop_off_time}</p>
                              </div>
                      </div>
                      
               </div>:""
           }
    </>
  )
}
