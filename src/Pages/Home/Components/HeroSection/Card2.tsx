import React from 'react'
import Button from '../../../../Components/layout/Button'

const Card2:React.FC = () => {
const CardContant = [
     {
      CardName: "children spicial",
      CardDetails: "At the age of eight, Ijin Yu lost his parents in a plane crash and became stranded in a foreign land, forced to become a child mercenary in order to stay alive. He returns home ten years later to be reunited with his family in Korea, where food and shelter are plenty and everything seems peaceful. But Ijin will soon learn that life as a teenager is a whole other feat of survival......",
      characterImg: "./Images/Anime1.png",
       StarRate: [
        "/Icons/starFill.png",
        "/Icons/starFill.png",
        "/Icons/starFill.png",
        "/Icons/StarUnFill.png",
        "/Icons/StarUnFill.png",
      ],
    },
]



return (
        <>
            {CardContant.map((item, index)=>(

             
                   <div key={index} 
                        className="w-[55%] h-[88%] flex mx-auto my-auto 
                                   flex-col justify-between px-[30px]">
                                  
                  <h1 className="text-[15px]
                                 sm:text-[19px]
                                 md:text-[20px]
                                 lg:text-[22px]
                                 xl:text-[24px]
                                 2xl:text-[26px]
                  ">
                    {item.CardName}
                  </h1>
                    
                  
                    
                        <div className="gap-[3px] flex items-center
                                        md:gap-[4px]
                                        lg:gap-[5px]
                                        xl:gap-[6px]
                                        2xl:gap-[7px]
                        ">
                     {item.StarRate.map((star,i) => (       
                        <img key={i} 
                             src={star} 
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
                  
                  

                  <div className="w-[60%] sm:w-[95%]">
                    <p className="text-[8px]       leading-[12px]  
                                 sm:text-[10px]   sm:leading-[14px]  
                                 md:text-[11px]   md:leading-[14px]
                                  lg:text-[12px]   lg:leading-[18px]
                                  xl:text-[16px]   xl:leading-[24px]
                                  2xl:text-[20px]  2xl:leading-[34px]
                    ">
                        {item.CardDetails}
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
                     <img src={item.characterImg} className='scale-125'/>
                  </div>

                   <div className="gap-[6px] flex
                                   md:gap-[14px]  
                                   lg:gap-[15px] 
                                   xl:gap-[20px] 
                                   2xl:gap-[23px] 
                   
                   ">

                     <Button title="Read Now"
                             className="border border-[#33D6FF] text-[#33D6FF] font-light"
                     />
                     <Button title="Get Premium"
                             className="bg-[#FEB705] text-black font-light"
                     />

                   </div>

               </div>
        ))}
   </>            
  )
}
export default Card2