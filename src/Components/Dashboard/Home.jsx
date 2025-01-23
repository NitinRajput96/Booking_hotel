import React, { useState } from 'react'
import Hotel_data from "../Json-data/Hotel_data.json"


export const Home = () => {
    
 
  return (
    <div>{
      Hotel_data.hotelDetails.map((item,i)=>{
        return <img src={item.img} alt="" />
      })
    }</div>
  )
}
