import React from 'react'





const DownloadRating:React.FC  = () => {
const RateFromApps = [
    {
      AppLogo: "/Logo/playStore.png",
      StarRate: [
        "/Icons/starFill.png",
        "/Icons/starFill.png",
        "/Icons/starFill.png",
        "/Icons/starFill.png",
        "/Icons/StarUnFill.png",
      ],
      NumberRate: "4.5/5",
    },
    {
      AppLogo: "/Logo/Apple.png",
      StarRate: [
        "/Icons/starFill.png",
        "/Icons/starFill.png",
        "/Icons/starFill.png",
        "/Icons/starFill.png",
        "/Icons/StarUnFill.png",
      ],
      NumberRate: "4.7/5",
    },
  ];
  return (
  
      <div className='gap-[20px] flex md:flex-row flex-col md:items-end'>
                       
           

           {RateFromApps.map((item, index) =>(
             <div key={index} className='bg-white flex flex-col justify-center md:items-center items-end 
                                         w-[60%]      h-[18vw]         md:rounded-tl-full rounded-tr-full
                                         md:w-[80px]    md:h-[110px]   rounded-br-full md:rounded-br-[0px] 
                                         lg:w-[100px]   lg:h-[130px]    
                                         xl:w-[120px]   xl:h-[150px]   
                                         2xl:w-[140px]  2xl:h-[170px]  
                                                        sm:h-[15vw]

             '>
               <div className='gap-[3.3vw] md:flex-col flex-row-reverse w-[100%] flex items-center mr-[6.5vw]
                               md:gap-2                         md:mr-0  
                               lg:gap-2
                               xl:gap-3 
                               2xl:gap-4 

               '>    
                    <img src={item.AppLogo}
                         alt="Applogo" 
                         className='h-[8vw]      w-[8vw]
                                    md:w-[25px]   md:h-[25px]
                                    lg:w-[30px]   lg:h-[30px]
                                    xl:w-[35px]   xl:h-[35px]
                                    2xl:w-[40px]  2xl:h-[40px]

                  '/>
 
                  <div className='flex gap-[2px]
                                       md:gap-[3px] 
                                       lg:gap-[4px] 
                                       xl:gap-[5px]  
                                       2xl:gap-1
                  
                  
                  
                  '>
                    {item.StarRate.map((star, i) => (
                      <img 
                        key={i}
                        src={star}
                        alt='Star'
                        className='h-[3vw]      w-[3vw]
                                   md:w-[9px]    md:h-[9px]
                                   lg:w-[11px]   lg:h-[11px]
                                   xl:w-[13px]   xl:h-[13px]
                                   2xl:w-[15px]  2xl:h-[15px]
                        
                        
                        '/>
                    ))}
                  </div>
                  
                  

                   <div className='text-[3.2vw] text-black font-bold
                                   md:text-[10px]
                                   lg:text-[12px]
                                   xl:text-[14px]
                                   2xl:text-[16px]
                   '>
                      {item.NumberRate}
                   </div>
                 </div>
               </div>
           ))}

         
      </div>
    
  )
}

export default DownloadRating