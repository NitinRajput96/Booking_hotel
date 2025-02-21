import { createContext, useContext, useState } from "react";

export const UseContext=createContext()

const UseContaxtProvider=({children})=>{
        const [categ,setCateg]=useState([null])
        const [carRents,setCarRents]=useState([null])
    
        
        
    return(
         <UseContext.Provider value={{
          categ,setCateg,
          carRents,setCarRents
      
         }}>
         {children}
         </UseContext.Provider>
    )
}

export const useCategory=()=>{
     return useContext(UseContext)
}

 
export default UseContaxtProvider;