import React, { useEffect, useState } from 'react'
import { useCategory } from '../../context/Context'
import Hotel_data from "../Json-data/Hotel_data.json"
import { IoStar } from "react-icons/io5";
import { IoShareSocialSharp } from "react-icons/io5";
import toast, { Toaster } from 'react-hot-toast';




export const HotelView = () => {

    const {catagory,setCatagory}=useCategory()
    const [rating,setRating]=useState(0)
     
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
                     <div className=' w-full h-auto flex  justify-between items-center my-2'>
                                  <span className=' flex justify-center items-center  gap-[2px]'>
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
                                                          color:item<=rating?"gold":"gray"
                                                        }}
                                                      >
                                                          <IoStar/> 
                                              </span>
                                            </>
                                      }) 
                                         }
                                         <span className=' text-sm'>Rating..</span>
                                    </>:""
                                  }
                                  </span>
                                
                                
                                <span className=' text-[20px] text-indigo-600'>
                                      <IoShareSocialSharp/>
                                </span>
                                
                              </div>
                         
                        <div className=' w-full h-auto  text-lg   font-bold '>{item.hote_name}</div>
                            <div className=' w-full h-3/6 flex justify-center items-center '>
                                  <img src={item.img} className=' w-full h-full rounded-md  shadow' alt="" />
                            </div>
                            <div className=' w-full h-3/6' ></div>
                     </div>
                </>:""
            })
           }
     </div>
    
   </>
  )
}
