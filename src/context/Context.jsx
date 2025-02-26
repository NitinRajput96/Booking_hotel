import { createContext, useContext, useState } from "react";

export const UseContext=createContext()

const UseContaxtProvider=({children})=>{
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
      
         }}>
         {children}
         </UseContext.Provider>
    )
}

export const useCategory=()=>{
     return useContext(UseContext)
}

 
export default UseContaxtProvider;