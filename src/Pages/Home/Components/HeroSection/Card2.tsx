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
                                  
                  <h1 className="text-[22px]
                                 md:text-[20px]
                                 lg:text-[22px]
                                 xl:text-[24px]
                                 2xl:text-[26px]
                  ">
                    {item.CardName}
                  </h1>
                    
                  
                    
                        <div className="flex gap-[7px]">
                     {item.StarRate.map((star,i) => (       
                        <img key={i} 
                             src={star} 
                             className='w-[12px]         h-[12px]
                                        md:w-[14px]      md:h-[14px]
                                        lg:w-[16px]      lg:h-[16px]
                                        xl:w-[18px]      xl:h-[18px]
                                        2xl:w-[20px]     2xl:h-[20px]

                             '/> 
                        ))}       
                       <span className="text-[18px] ml-[11px]">Action</span>
                       </div>
                  
                  

                  <div className="w-[85%]">
                    <p className="text-[11px]       leading-[12px]
                                  md:text-[12px]   md:leading-[16px]
                                  lg:text-[14px]   lg:leading-[22px]
                                  xl:text-[16px]   xl:leading-[24px]
                                  2xl:text-[20px]  2xl:leading-[34px]
                                  
                    ">
                        {item.CardDetails}
                    </p>
                  </div>

                  <h1 className="text-[20px] font-semibold
                                 md:text-[22px]
                                 lg:text-[24px]
                                 xl:text-[26px]
                                 2xl:text-[28px]
                   
                  ">
                    Author
                  </h1>
  
                  <div className="rounded-full h-[54px] w-[54px] overflow-hidden">
                     <img src={item.characterImg} className='scale-125'/>
                  </div>

                   <div className="flex gap-[23px]">

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