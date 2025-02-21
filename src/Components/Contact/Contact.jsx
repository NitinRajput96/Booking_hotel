import React from 'react'
import { useCategory } from '../../context/context'


export const Contact = () => {

       const {categ,setCateg}=useCategory()
  return (
        <>
          <div>Contact {
            categ!=null?<div className=' w-full flex justify-center items-center h-auto bg-gray-50 py-4   '>
               {
                   
                    <div className=' w-11/12 p-5 flex justify-center items-center flex-col gap-1 shadow-sm bg-white py-2 hover:border-blue-800  '> 
                         <h1 className=' font-bold'>Recent Dates</h1>
                         <h4 className=' font-bold text-[13px] w-full flex  justify-between pl-5 pr-14 items-center  '> Adults    <span className=' text-sm px-[10px] bg-yellow-500' >{categ.adults} </span>          </h4>
                         <h4 className=' font-bold text-[13px] w-full flex  justify-between pl-5 pr-14 items-center  '> Childerns <span className=' text-sm px-[10px] bg-yellow-500' >{categ.childrens} </span>       </h4>
                         <h4 className=' font-bold text-[13px] w-full flex  justify-between pl-5 pr-14 items-center  '> Rooms     <span className=' text-sm px-[10px] bg-yellow-500' >{categ.rooms} </span>           </h4>
                         <h4 className=' font-bold text-[13px] w-full flex  justify-between pl-5 pr-14 items-center  '> Location  <span className=' text-sm px-[10px] bg-yellow-500' >{ categ.staylocation} </span>   </h4>

 
                    </div>  
                  
               } 
            </div>:""
          }</div>
        </>
  )
}
