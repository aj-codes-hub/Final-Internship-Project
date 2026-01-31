import React from 'react'
import Button from '../../../../Components/layout/Button'
import { useNavigate } from 'react-router-dom'
import { ComicData } from '../../../../ComicData'





const Card1:React.FC = () => {

const navigate = useNavigate();

const handleNavigateTo = () =>{
  navigate('/comic');
}


  return (
        <>     
           <div 
                className="w-[55%] h-[88%] flex mx-auto my-auto 
                           flex-col justify-between pl-[30px] pr-[73px]">
                                  
                  <h1 className="text-[15px]
                                 sm:text-[19px]
                                 md:text-[20px]
                                 lg:text-[22px]
                                 xl:text-[24px]
                                 2xl:text-[36px] 
                  ">
                    {ComicData.title}
                  </h1>
                    
                  
                    
                        <div className="gap-[3px] flex items-center
                                        md:gap-[4px]
                                        lg:gap-[5px]
                                        xl:gap-[6px]
                                        2xl:gap-[7px]
                        ">
                       {ComicData.StarRating.map((item,index) =>(
                        <img key={index}
                             src={item} 
                             className='w-[12px]         h-[12px]
                                        md:w-[12px]      md:h-[12px]
                                        lg:w-[13px]      lg:h-[13px]
                                        xl:w-[18px]      xl:h-[18px]
                                        2xl:w-[20px]     2xl:h-[20px]

                             '/> 
                       ))}
                        
                       <span className="text-[8px]      ml-[7px]
                                        md:text-[10px]   md:ml-[8px]
                                        lg:text-[16px]   lg:ml-[6px]
                                        xl:text-[15px]   xl:ml-[11px]
                                        2xl:text-[18px]  2xl:ml-[11px]
                       ">
                        Action
                        </span>
                       </div>
                  
                  

                  <div className="w-[60%] sm:w-[95%] opacity-[60%]">
                    <p className="text-[8px]       leading-[12px]  
                                 sm:text-[10px]   sm:leading-[14px]  
                                 md:text-[11px]   md:leading-[14px]
                                  lg:text-[12px]   lg:leading-[18px]
                                  xl:text-[16px]   xl:leading-[24px]
                                  2xl:text-[20px]  2xl:leading-[34px]
                    ">
                       {ComicData.description}
                    </p>
                  </div>

                  <h1 className="text-[20px] font-semibold
                                 md:text-[16px]
                                 lg:text-[20px]
                                 xl:text-[26px]
                                 2xl:text-[28px]
                  ">
                    Author 
                  </h1>
  
                  <div className="h-[38px]     w-[38px]     rounded-full overflow-hidden
                                  md:h-[42px] md:w-[42px]
                                  lg:h-[46px] lg:w-[46px] 
                                  xl:h-[50px] xl:w-[50px] 
                                  2xl:h-[54px] 2xl:w-[54px] 
                  
                  ">
                     <img src={ComicData.authorImage} className='scale-125'/>
                  </div>

                   <div className="gap-[6px] flex
                                   md:gap-[14px]  
                                   lg:gap-[15px] 
                                   xl:gap-[20px] 
                                   2xl:gap-[23px] 
                   
                   ">

                     <Button title="Read Now"
                             onClick={handleNavigateTo}
                             className="border border-[#33D6FF] text-[#33D6FF] font-light text-[8px]"
                     />
                     <Button title="Get Premium"
                             className="bg-[#FEB705] text-black font-light text-[8px]"
                     />

                   </div>

               </div>
   </>            
  )
}

export default Card1