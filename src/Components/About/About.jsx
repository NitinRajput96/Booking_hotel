import React from 'react'
import Cars from "../Json-data/Cars.json"
import Item from 'antd/es/list/Item'


export const About = () => {
  
     

  return (
   <>
    <h3>Rent Cars</h3>
    <div className='w-full h-auto bg-gray-100 p-3 rounded-md flex justify-start items-center gap-5 flex-col'>
         {
          Cars.CarsandBikes.map((item)=>
             <div className=' w-full h-64  shadow-sm rounded-md flex flex-col justify-center items-center' key={item.i}>
                      <img src={item.img} className=' w-full p-5 h-5/6 bg-violet-100 rounded-md ' alt="" />
                      <div className=' w-full h-1/6'>{item.id}</div>
                      <div>{item.carName}</div>

             </div>
          )
         }
    </div>
   </>
  )
}
