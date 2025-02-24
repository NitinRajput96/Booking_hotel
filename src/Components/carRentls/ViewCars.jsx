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
        <div className=' w-full h-auto my-2 text-[20px] font-semibold px-6 '>{viewState}  <span className=' p-2  text-orange-600 font-semibold '>{vehical} </span></div>

        <div className=' w-full h-auto'>
            {
                Cars.CarsandBikes.map((item,i)=>{
                    return item.carName===viewState?<>
                        {
                           <>
                           <img src={item.img} className=' w-11/12 h-11/12' alt="" />

                           <div className='w-full h-auto p-5 text-[12px] font-sans font-semibold text-gray-400 '>{item.about}</div>

                           </>
                            
                        }
                    </>:""
                })
            }
        </div>
    </>
  )
}
