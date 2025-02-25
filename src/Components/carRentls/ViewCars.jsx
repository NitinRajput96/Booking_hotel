import React, { useEffect, useState } from 'react'
import { useCategory } from '../../context/Context'
import Cars from "../Json-data/Cars.json"

export const ViewCars = () => {
       
         const {viewState,setViewState}=useCategory()
         const [vehical,setVehical]=useState()

         const viehcil=()=>{
              Cars.CarsandBikes.filter((item)=> item.carName===viewState?setVehical(item.vehical_type):"")
         }

         console.log(vehical);
         

         useEffect(() => {
            viehcil()
         },[viehcil])
         
  return (
    <>
        <div className=' w-full h-full text-[20px] font-semibold  flex justify-center items-center  '>{viewState}  <span className=' p-2  text-orange-600 font-semibold '>{vehical} </span></div>

        <div className=' w-full h-full flex justify-center items-center p-5 bg-gray-50 '>
            {
                Cars.CarsandBikes.map((item,i)=>{
                    return item.carName===viewState?<>
                        { 
                           <>
                             <div className=' w-full h-full gap-7 bg-white rounded-md shadow-sm  grid grid-rows-2 grid-flow-row justify-items-center items-center'>
                                    <div className=' w-full  '>
                                        <img src={item.img} className=' w-full h-full' alt="" />
                                    </div>

                                    <div className='w-full  h-full  mb-2  p-7 text-[13px] font-sans font-semibold text-gray-600 '>
                                        {item.about}
                                    </div>
                             </div> 
                           </>
                            
                        }
                    </>:""
                })
            }
        </div>
    </>
  )
}
