import React, { useEffect, useState } from 'react'
import { useCategory } from '../../context/Context'
import Cars from "../Json-data/Cars.json"
import { useNavigate } from 'react-router-dom'


export const ViewCars = () => {
       
         const {viewState,setViewState}=useCategory()
         const [vehical,setVehical]=useState()
         const navigate=useNavigate()

         const viehcil=()=>{
              Cars.CarsandBikes.filter((item)=> item.carName===viewState?setVehical(item.vehical_type):"")
         }

        const morecars=()=>{
            navigate("/carlist")
        }

        const bookcar=()=>{
             alert("By")
        }
         

         window.scroll(0,100)
         useEffect(() => {
            viehcil()
         },[viehcil])
         
  return (
    <>

        <div className=' w-full h h-full flex justify-start items-center flex-col p-5 bg-gray-50 '>
        <div className=' w-full  h-16 bg-indigo-400 rounded-sm mb-2 text-[22px] font-semibold  flex justify-center items-center  '>{viewState}  <span className=' p-2  text-orange-600 font-semibold '>{vehical} </span></div>

            {
                Cars.CarsandBikes.map((item,i)=>{
                    return item.carName===viewState?<>
                        { 
                           <>
                             <div className=' w-full h-full bg-white rounded-md shadow-sm flex justify-center gap-4 items-center flex-wrap '>
                                    <div className=' w-full h-auto  py-12   flex justify-center items-center shadow-sm '>
                                        <img src={item.img} className=' w-full xl:h-64 xl:w-2/4' alt="" />
                                    </div>

                                    <div  className=' w-full h-auto px-2 flex justify-between items-center'>
                                           <button onClick={morecars} className='  w-[70px] p-[3px] hover:bg-indigo-500 hover:text-black  text-white  bg-indigo-400 font-sans font-bold text-[12px]'  >More Car</button>
                                            <button onClick={bookcar} className='  w-[70px] p-[3px] hover:bg-indigo-500 hover:text-black  text-white  bg-indigo-400 font-sans font-bold text-[12px]'  >Book car</button>
                                    </div>
                                    
                                  
                    

                                    <div className='w-full  h-auto text-[12px] p-7 font-sans font-semibold text-gray-600 '>
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
