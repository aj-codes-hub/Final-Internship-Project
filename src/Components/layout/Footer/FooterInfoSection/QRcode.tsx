import React from 'react'



const QRcode:React.FC  = () => {
  return (
    <div className='border-[5px] mt-2 md:relative absolute md:right-[0] right-[6vw]
                   flex-col-reverse md:flex-col justify-center flex
                    items-center border-[#33D6FF] border-t-0 md:border-t-[5px] 
                    h-[38vw]      w-[26vw]      gap-[4vw]        md:rounded-t-[24px]   md:rounded-b-[0px]
                    md:h-[238px]   md:w-[200px]   md:gap-4       rounded-t-[0px]      rounded-b-[4vw]
                    lg:h-[270px]   lg:w-[226px]   lg:gap5
                    xl:h-[290px]   xl:w-[242px]   xl:gap-6
                    2xl:h-[346px]  2xl:w-[278px]  2xl:gap-7     
                    sm:h-[30vw]    sm:w-[20vw]
    '>

           <div className='h-[60%] w-[78%] flex justify-center
                           items-center md:rounded-[12px] rounded-[8px] bg-white'>
              
              <img src="/Images/QRcode.png"
                   alt="QRcode"
                   className='h-[78%] w-[78%]'
               />
               
           </div>

        <h1 className='text-white text-[2.6vw] font-semibold
                                    sm:text-[2.3vw]
                                    md:text-[14px]
                                    lg:text-[18px]
                                    xl:text-[22px]
                                    2xl:text-[26px]
        '>
                Scane Here
        </h1>   
     </div>
  )
}

export default QRcode