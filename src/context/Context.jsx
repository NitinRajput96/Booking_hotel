import { createContext, useContext, useState } from "react";

export const UseContext=createContext()

const UseContaxtProvider=({children})=>{

        const [catagory,setCatagory]=useState(null)
        const [hotelData,setHotelData]=useState([null])
        const [carRents,setCarRents]=useState(null)
        const [viewState,setViewState]=useState(null)
        const [searchItems,setSearchItems]=useState(false)
    
        
        
    return(
         <UseContext.Provider value={{
          hotelData,setHotelData,
          carRents,setCarRents,
          viewState,setViewState,
          searchItems,setSearchItems,
          catagory,setCatagory
      
         }}>
         {children}
         </UseContext.Provider>
    )
}

export const useCategory=()=>{
     return useContext(UseContext)
}

 
export default UseContaxtProvider;