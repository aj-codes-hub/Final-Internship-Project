import React from 'react'
import FooterInfoSection from './FooterInfoSection/FooterInfoSection'
import FooterLinksSection from './FooterLinksSection/footerLinksSection'

const Footer:React.FC = () => {
  return (
    <div className='w-full max-w-[1950px] mx-auto'>
     
     <FooterInfoSection />

     <FooterLinksSection />


        <div id='copyRight' 
             className='bg-[#33D6FF] w-full flex items-center justify-center font-semibold
                         text-[#040914]   2xl:h-[50px] 
                         xl:text-[18px]     xl:h-[45px] 
                         lg:text-[16px]     lg:h-[40px] 
                         md:text-[14px]     md:h-[35px] 
                         text-[8px]        h-[30px] 
                         '>
          COPYRIGHT © 2022 STAGECOMICS, LTDA. All Rights Reserved
        </div>
        
    </div>
  )
}

export default Footer