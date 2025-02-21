import React from 'react'
import Cars from "../Json-data/Cars.json"



export const About = () => {
  
     

  return (
   <>
    <h3>Rent Cars</h3>
    <div className='w-full h-auto bg-gray-100 p-6 rounded-md flex justify-start items-center gap-5 flex-col'>
         {
          Cars.CarsandBikes.map((item,i)=>
             <div className=' w-full h-64  bg-white shadow-sm rounded-md flex flex-col justify-center items-center' key={i}>
                      <img src={item.img} className=' w-full p-2 h-5/6  rounded-md ' alt="" />
                     
                      <div>{item.carName}</div>

             </div>
          )
         }
    </div>
   </>
  )
}
