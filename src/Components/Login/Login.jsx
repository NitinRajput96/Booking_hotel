import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Json-data/logo.json"


export const Login = () => {
  return (
    <>
        <div className=' w-full h-screen flex justify-center pt-2 '>
             
             <div className=' w-1/3 max-sm:w-full h-full   p-2 px-6 '>
                 
                    <h1 className=' font-bold text-xl'>Sign in or create an account</h1>
                    <p className=' text-sm mt-4'>You can sign in using your Booking.com account to access our services.</p>

                    
                    <div className=' mt-4'>
                         <label className=' text-sm font-semibold'>Email address</label>
                         <input type="email" name="email" className=' pl-2 text-sm  border border-gray-500  w-full h-9 rounded-md mt-1' placeholder='Enter your email address' id="" />
                    </div>

                     <div className=' border-2 border-blue-600 p-[2px] mt-4 rounded-lg'>
                           <button className=' w-full h-12 text-white font-semibold bg-blue-600 rounded-md' type="submit">Continue with email</button>
                     </div>

                     <div className=' w-full h-auto  mt-3 grid grid-cols-7  '>
                         <hr  className=' col-span-2   mt-3'/>
                         <p className=' text-[13px] text-center col-span-3  font-smibold'>or use one of these options</p>
                            <hr  className=' col-span-2 mt-3'/>
                     </div>

                     <div className=' w-full h-24  mt-3 mb-3 flex justify-center gap-7 items-center '>
                        {
                            logo.logos.map((item,i)=>{
                                return(
                                    <div className=' w-20 h-20 border  p-7 justify-center items-center rounded-sm'>
                                     <img src={item.img} className=' w-full h-full' alt="" />
                                    </div>

                                )
                            })
                        }
                       
                     </div>

                     <hr />

                     <p className=' text-[12px] text-center mt-3'>By signing in or creating an account, you agree with our <Link className=' text-blue-500' to="#">Terms & conditions</Link> and Privacy statement</p>

                    
             </div>

        </div>
    </>
  )
}
