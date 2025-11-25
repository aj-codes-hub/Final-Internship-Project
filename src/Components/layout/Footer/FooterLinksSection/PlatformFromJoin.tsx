import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";




const PlatformFromJoin:React.FC = () => {
const Platform = [
     {Platform: <FaGoogle/>},
     {Platform: <FaTwitter/>},
     {Platform: <AiFillInstagram/>},
     {Platform: <IoLogoLinkedin/>},
     {Platform: <FaYoutube/>},
];

  return (
     <div>
            <img src="/Logo/header-Logo.png"
                 alt="FooterLogo"
                 className='2xl:w-[276px] 2xl:h-[27px] 2xl:mb-10
                            xl:w-[250px]  xl:h-[24px]  xl:mb-10  
                            lg:w-[224px]  lg:h-[19px]  lg:mb-6
                            md:w-[198px]  md:h-[18px]  md:mb-4
                            w-[35vw]     h-[3vw]       mb-4
                '/>
            
            <div>
               <h1 className='text-[2.7vw] md:mb-7 mb-[4vw] font-semibold
                              md:text-[17px] 
                              lg:text-[19px] 
                              xl:text-[21px] 
                              2xl:text-[24px] 
                '>
                   Join the community
               </h1>
               
               <div className='flex gap-[2vw] 
                                    md:gap-[8px] 
                                    lg:gap-[14px] 
                                    xl:gap-[18px] 
                                    2xl:gap-[20px]'>
                
                {Platform.map((item, index)=>(

                    <div key={index} className='bg-[#FFFFFF0F] 
                                                   p-[10px]       rounded-[12px]
                                                   md:p-[12px]    md:rounded-[14px]
                                                   lg:p-[14px]    lg:rounded-[16px]
                                                   xl:p-[16px]    xl:rounded-[18px]
                                                   2xl:p-[18px]   2xl:rounded-[20px]
                                                                '>
                        <span className='text-[4vw] 
                                         md:text-[26px] 
                                         lg:text-[30px] 
                                         xl:text-[34px] 
                                         2xl:text-[40px]
                        '>
                           {item.Platform}
                        </span>
                    </div>

                ))}
                
               </div>    
            </div>

           </div>
  )
}

export default PlatformFromJoin