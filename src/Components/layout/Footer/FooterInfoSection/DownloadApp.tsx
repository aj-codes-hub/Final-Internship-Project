import React from 'react'
import { FaPlus } from "react-icons/fa6";

const DownloadApp:React.FC  = () => {
const UerImage = [
  {image: "/Images/FooterUserImg4.png"},
  {image: "/Images/FooterUserImg3.png"},
  {image: "/Images/FooterUserImg1.png"},
  {image: "/Images/FooterUserImg2.png"},
  
];

  return (
    <div className='flex flex-col justify-center pr-6 ml-3 md:ml-0 z-[20]
                    gap-[5vw]
                    md:gap-2 
                    lg:gap-4
                    xl:gap-6 
                    2xl:gap-8 
    
    
    
    '>
               <a href='#' className='text-[5vw] font-semibold mt-9 
                                      md:text-[22px]
                                      lg:text-[27px]
                                      xl:text-[32px]
                                      2xl:text-[37px]
               '>
                  Download <br/>
                  <span className='font-normal'>
                   Our Mobile App
                  </span>
               </a>
             
         <div className='flex md:gap-3 gap-[2vw]'>
             {UerImage.map((item, index) =>(

               <div key={index} className='rounded-full overflow-hidden
                                           w-[10vw]      h-[10vw] 
                                           md:w-[25px]   md:h-[25px]
                                           lg:w-[35px]   lg:h-[35px]
                                           xl:w-[45px]   xl:h-[45px]
                                           2xl:w-[57px]  2xl:h-[57px]
               '>
                    <img src={item.image} 
                         alt="users" />
                </div>

            ))}
            
            <div className='font-bold border-2 border-dotted cursor-pointer
                            rounded-full flex items-center justify-center
                            w-[10vw]       h-[10vwpx]      text-[4.2vw]
                            md:w-[24px]    md:h-[24px]   md:text-[10px]
                            lg:w-[34px]    lg:h-[34px]   lg:text-[14px]
                            xl:w-[44px]    xl:h-[44px]   xl:text-[18px]
                            2xl:w-[54px]   2xl:h-[54px]  2xl:text-[22px]
            '>
                <FaPlus/>
            </div>
               
         </div>
   
    </div>
  )
}

export default DownloadApp