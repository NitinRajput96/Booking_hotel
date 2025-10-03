import React, { useEffect, useState } from 'react'
import { useCategory } from '../../context/Context'
import Hotel_data from "../Json-data/Hotel_data.json"
import { IoStar } from "react-icons/io5";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { TiPlus } from "react-icons/ti";
import toast, { Toaster } from 'react-hot-toast';




export const HotelView = () => {

    const {catagory,setCatagory}=useCategory()
    const [rating,setRating]=useState(0)
    const [like,setLike]=useState(false)
     
    const ratingFunk =()=>{
         rating>0?toast.success("You rate "+rating+" Stars"):""
    }
  
       
    useEffect(() => {
      ratingFunk()
    }, [rating])
   





  return (
   <>
   <Toaster/>
     <div className=' w-full h-full flex justify-start items-center flex-col  p-2'>
    
     
           {
            Hotel_data.hotelDetails.map((item,i)=>{
                return item.hote_name===catagory?<>
                 <div className=' w-full h-full  p-1' key={i} >
                     <div className=' w-full h-auto flex  justify-between items-center mt-2 lg:px-4 mb-4'>
                                  <span className=' flex justify-center items-center  gap-[.5px]'>
                                  {
                                    item.stars!=null?
                                    <>
                                         {
                                            item.stars.map((item)=>{
                                            return<>
                                              <span className=' '
                                                        key={item}
                                                        onClick={()=>(setRating(item))}
                                                        style={{
                                                          cursor:"pointer",
                                                          fontSize:"18px",
                                                          font:"bold",
                                                          color:item<=rating?"gold":"gray"
                                                        }}
                                                      >
                                                          <IoStar/> 
                                              </span>
                                            </>
                                      }) 
                                         }
                                         <span className=' px-1 rounded-sm py-1 text-[17px] text-white flex jc items-center' style={{background:"gold"}}><BiSolidLike/><TiPlus/> </span>
                                    </>:""
                                  }
                                  </span>
                                
                                
                                <div className=' flex justify-center items-center '>
                                     {
                                      like!=false?<> <span className=' w-8  h-10 p-1 flex justify-center items-center text-[19px] text-red-600 ' onClick={()=>setLike(!like)} ><FaHeart/></span></>
                                      :<span className='w-8  h-10 p-1  flex justify-center items-center text-[23px] text-red-500'  onClick={()=>setLike(!like)}><IoMdHeartEmpty/></span>
                                     }
                                     <span className=' text-[21px] text-indigo-500'> <IoShareSocialSharp/></span>
                                </div>
                                
                              </div>
                         
                        <div className=' w-full h-auto  text-lg  shadow-sm mb-2  p-3 lg:p-5 flex justify-between items-center   font-bold '>{item.hote_name}</div>
                           <div className='  w-full h-auto  text-lg shadow-md p-2  lg:flex justify-center items-center'>
                                 <div className=' w-full lg:w-[50%] h-3/6 flex justify-center items-center '>
                                  <img src={item.img} className=' w-full h-full rounded-md  shadow' alt="" />
                                  </div>
                                  <div className=' w-full lg:w-[50%] border border-2 h-3/6' >

                                  </div>
                           </div>
                     </div>
                </>:""
            })
           }
     </div>
    
   </>
  )
}
