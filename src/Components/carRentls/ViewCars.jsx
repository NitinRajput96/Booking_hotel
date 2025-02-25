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
        <div className=' w-full h-auto my-2 text-[20px] font-semibold px-6 flex justify-center items-center '>{viewState}  <span className=' p-2  text-orange-600 font-semibold '>{vehical} </span></div>

        <div className=' w-full  h-full flex justify-center items-center flex-col gap-4 py-5 '>
            {
                Cars.CarsandBikes.map((item,i)=>{
                    return item.carName===viewState?<>
                        {
                           <>
                          <div className=' w-full h-56 flex justify-center items-center '>
                             <img src={item.img} className=' w-11/12 h-11/12' alt="" />
                          </div>

                           <div className='w-full h-auto mb-2  p-7 text-[13px] font-sans font-semibold text-gray-600 '>{item.about}</div>

                           </>
                            
                        }
                    </>:""
                })
            }
        </div>
    </>
  )
}
