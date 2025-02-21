import React, { useEffect, useState } from 'react'
import Hotel_data from "../Json-data/Hotel_data.json"
import { IoLocationSharp } from "react-icons/io5";
import { RiHotelLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdLocationCity } from "react-icons/md";
import { useCategory } from '../../Context/context';






export const Home = () => {

     const {categ,setCateg}=useCategory()
     const [newState,setNewState]=useState()

     const handler=(e)=>{
          const {name,value}=e.target
          setCateg({...categ,[name]:value})
     }
   
    
   

     const getallData=(e)=>{
          e.preventDefault();
         setNewState(categ)  
     }
     
    
        

     
     
     
   
     



  

    
 
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

          
         
           <form onSubmit={getallData} className=' w-full h-[262px] bg-yellow-500 rounded-md p-2 flex justify-center flex-wrap gap-2   '>    
                <div className='w-full h-14 rounded-md flex justify-center items-center  bg-white '>
                     <span className='w-8 text-black text-md  font-semibold h-5/6 flex justify-center items-center'><IoSearchOutline/></span>
                     <input className=' w-full text-[18px] font-sans font-bold outline-none' type="text" name='staylocation' onChange={(e)=>handler(e)} placeholder=' Location'  />
                </div>
                <div className=' w-full h-14 grid grid-cols-1 gap-1  ' >
                       <div className=' h-full bg-white rounded-md flex justify-center items-center flex-wrap border'>
                             <div className=' w-full h-2/5 flex justify-evenly gap-12 items-center '>
                                 <span className=' text-[13px]  font-sans font-bold' >Check in date </span>
                                 <span className=' text-[13px]  font-sans font-bold' >Check out date </span>
                             </div>
                             <div className=' w-full flex h-3/5 border   justify-center items-center  bg-white'>
                                    <input type="date"  className=' w-2/4   h-full  border bg-white   text-[13px] font-sans px-5  font-semibold ' name='checkingDate'  onChange={(e)=> handler(e)}  />
                                    <input type="date"  className=' w-2/4   h-full  border  bg-white  text-[13px] font-sans px-5  font-semibold ' name='checkoutDate'  onChange={(e)=> handler(e)}   />
                             </div>
                       </div>

                    
                </div>

                <div className=' w-full h-14 grid grid-cols-3 gap-1' >
                       <div        className='  w-full   bg-white rounded-md flex justify-center items-center flex-col flex-wrap '>
                            <span  className= ' w-full   text-[13px] text-center font-bold   font-sans' >Adults</span>
                            <input className='  w-full   text-[15px] font-bold font-sans outline-none  flex justify-center items-center text-center' type='text' name='adults' onChange={(e)=>handler(e)} placeholder='2'   ></input>
                       </div>

                       <div        className='  w-full   bg-white rounded-md flex justify-center items-center flex-col flex-wrap '>
                            <span  className= ' w-full   text-[13px] text-center font-bold   font-sans' >Children</span>
                            <input className='  w-full   text-[15px] font-bold font-sans outline-none  flex justify-center items-center text-center' type='text' name='childrens' onChange={(e)=>handler(e)} placeholder='0'   ></input>
                       </div>

                       <div        className='  w-full   bg-white rounded-md flex justify-center items-center flex-col flex-wrap '>
                            <span  className= ' w-full   text-[13px] text-center font-bold   font-sans' >Rooms</span>
                            <input className='  w-full   text-[15px] font-bold font-sans outline-none  flex justify-center items-center text-center' type='text' name='rooms' onChange={(e)=>handler(e)} placeholder='1'   ></input>
                       </div>

                       {/* <div        className=' w-full h-full bg-white rounded-md flex justify-center items-center flex-col flex-wrap border'>
                            <span  className=' w-full h-2/4 bg-slate-800 text-[13px]  font-sans' >Children</span>
                            <input className=' text-[16px] font-bold font-sans outline-none' type='text' name='childrens' onChange={(e)=>handler(e)}  ></input>
                       </div>  
                       <div        className=' w-full h-full bg-white rounded-md flex justify-center items-center flex-col flex-wrap border'>
                            <span  className=' w-full h-2/4 bg-slate-800 text-[13px]  font-sans' >Rooms</span>
                            <input className='  text-[16px] font-bold font-sans outline-none' type='text' name='room'  onChange={(e)=>handler(e)} ></input>
                       </div>   */}
                </div>

                <div className='w-full h-14 rounded-md flex justify-center bg-blue-700  items-center shadow-sm  '>
                     <button type='submit' className=' w-full h-12 text-[20px]  font-semibold text-white font-sans' >Search</button>
                </div>
          </form>
        
           
       </div>

        



     {
          newState!=null?<div className=' w-full flex justify-center items-center h-auto bg-gray-50 py-4   '>
               {
                   
                    <div className=' w-11/12 p-5 flex justify-center items-center flex-col gap-1 shadow-sm bg-white py-2 hover:border-blue-800  '> 
                         <h1 className=' font-bold'>Recent Dates</h1>
                         <h4 className=' font-bold text-[13px] w-full flex  justify-between pl-5 pr-14 items-center  '> Adults    <span className=' text-sm px-[10px] bg-yellow-500' >{newState.adults} </span>          </h4>
                         <h4 className=' font-bold text-[13px] w-full flex  justify-between pl-5 pr-14 items-center  '> Childerns <span className=' text-sm px-[10px] bg-yellow-500' >{newState.childrens} </span>       </h4>
                         <h4 className=' font-bold text-[13px] w-full flex  justify-between pl-5 pr-14 items-center  '> Rooms     <span className=' text-sm px-[10px] bg-yellow-500' >{newState.rooms} </span>           </h4>
                         <h4 className=' font-bold text-[13px] w-full flex  justify-between pl-5 pr-14 items-center  '> Location  <span className=' text-sm px-[10px] bg-yellow-500' >{ newState.staylocation} </span>   </h4>

 
                    </div>  
                  
               } 
            </div>:""
     }
         
         <div className=' w-full h-36 bg-gray-50 flex justify-center items-center py-5 rounded-sm'>
               <span className=' w-full  h-full flex justify-center items-center text-md bg-white  rounded-sm font-semibold '> Search Hotels near by your Location..</span>
         </div>


       <div className='  xl:col-span-4  gap-2 flex justify-center flex-wrap items-center bg-slate-50  '>
     
       {
         Hotel_data.hotelDetails.map((item,i)=>
             <div className=' w-11/12  xl:h-56 shadow-sm  h-36  px-2 gap-4 flex  justify-center items-center   rounded-md bg-white ' key={i}>

               <img className=' w-32 h-5/6 xl:w-2/5  xl:h-5/6 border rounded-md   ' src={item.img} alt="" />
               <div className=' h-5/6 xl:h-5/6  w-60 xl:w-3/5 font-serif text-[11px] xl:text-sm font-semibold flex flex-wrap  flex-col '>
                   <span className=' flex items-center gap-1'><RiHotelLine /> {item.hote_name} </span>
                   <span className=' flex items-center gap-1'><MdLocationCity /> {item.hot_city}</span>
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




