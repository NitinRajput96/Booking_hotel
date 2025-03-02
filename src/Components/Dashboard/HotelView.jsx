import React from 'react'
import { useCategory } from '../../context/Context'
import Hotel_data from "../Json-data/Hotel_data.json"



export const HotelView = () => {

    const {catagory,setCatagory}=useCategory()

   





  return (
   <>
     <div className=' w-full h-full flex justify-start items-center flex-col gap-5 p-2'>
           {
            Hotel_data.hotelDetails.map((item,i)=>{
                return item.hote_name===catagory?<>
                 <div className=' w-full  text-lg  px-2 font-bold p-3 '>{item.hote_name}</div>
                <div className=' w-full h-3/6 flex justify-center items-center '>
                    <img src={item.img} className=' w-full h-full rounded-md  shadow' alt="" />
               </div>
               <div className=' w-full h-3/6' ></div>
                </>:""
            })
           }
     </div>
    
   </>
  )
}
