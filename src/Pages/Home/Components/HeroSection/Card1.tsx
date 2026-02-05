import React from 'react'
import Button from '../../../../Components/layout/Button'
import { useNavigate } from 'react-router-dom'
import { ComicData } from '../../../../ComicData/ComicData'





const Card1:React.FC = () => {

const navigate = useNavigate();

const handleNavigateTo = () =>{
  navigate('/comic');
}


  return (
        <>     
          
           <div 
                className="lg:w-[55%]  h-[88%] flex lg:mx-auto my-auto font-semibold
                           flex-col pl-[30px] 2xl:pr-[73px] xl:pr-[53px] lg:pr-[43px] pr-[33px]">
                                  
                  <h1 className="text-[30px]
                                 sm:text-[30px]
                                 md:text-[30px]
                                 2xl:text-[36px] 
                  ">
                    {ComicData.title}
                  </h1>
                    
                  
                    
                        <div className="gap-[3px] flex items-center lg:mt-[16px] mt-[10px]
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
                                        xl:w-[20px]      xl:h-[20px]
                                        2xl:w-[20px]     2xl:h-[20px]

                             '/> 
                       ))}
                        
                       <span className="text-[8px]      ml-[7px]
                                        md:text-[10px]   md:ml-[8px]
                                        lg:text-[16px]   lg:ml-[6px]
                                        xl:text-[16px]   xl:ml-[11px]
                                        2xl:text-[18px]  2xl:ml-[11px]
                       ">
                        Action
                        </span>
                       </div>
                  
                  

                  <div className="w-full opacity-[60%] lg:mt-[26px] mt-[13px] ">
                    <p className="text-[18px]       leading-[24px]  
                                 sm:text-[18px]   sm:leading-[24px]  
                                 md:text-[18px]   md:leading-[24px]
                                  lg:text-[18px]   lg:leading-[23px]
                                  xl:text-[18px]   xl:leading-[26px]
                                  2xl:text-[20px]  2xl:leading-[34px]
                    ">
                       {ComicData.description}
                    </p>
                  </div>

                <div className='flex flex-row md:flex-col items-center md:items-start gap-[10px] md:gap-[0px]'>
                  <h1 className="text-[20px] font-semibold lg:mt-[24px] mt-[18px]
                                 md:text-[20px]
                                 lg:text-[20px]
                                 xl:text-[26px]
                                 2xl:text-[28px]
                  ">
                    Author 
                  </h1>
  
                  <div className="h-[38px]     w-[38px]  lg:mt-[22px]  mt-[18px] rounded-full overflow-hidden
                                  md:h-[52px] md:w-[52px]
                                  lg:h-[46px] lg:w-[46px] 
                                  xl:h-[50px] xl:w-[50px] 
                                  2xl:h-[54px] 2xl:w-[54px] 
                  
                  ">
                     <img src={ComicData.authorImage} className='scale-125'/>
                  </div>
                 
                 </div>
                  
                   <div className="gap-[6px] flex 2xl:mt-[45px] xl:mt-[30px]  mt-[25px] 
                                   md:gap-[14px]  
                                   lg:gap-[15px] 
                                   xl:gap-[20px] 
                                   2xl:gap-[23px] 
                   
                   ">

                     <Button title="Read Now"
                             onClick={handleNavigateTo}
                             className="border border-[#33D6FF] text-[#33D6FF] font-medium text-[15px]"
                     />
                     <Button title="Get Premium"
                             className="bg-[#FEB705] text-black text-[15px]"
                     />

                   </div>

               </div>
   </>            
  )
}

export default Card1