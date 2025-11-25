import React from 'react'
import PlatformFromJoin from './PlatformFromJoin'
import JoinNav from './JoinNav'
import CommunityNav from './CommunityNav'
import CountrySelector from './FoolerCuntrySelect'

const FooterLinksSection:React.FC = () => {


  return (
    <div className='2xl:h-[387px] w-full py-10
                    xl:h-[347px]
                    lg:h-[307px]
                    md:h-[267px]
                    sm:[22vw]
                    h-[auto]  
'>

        <div className='w-[86%] md:flex-row flex-col flex md:gap-0 gap-10 md:items-center items-start justify-between mx-auto h-full
                        md:w-[82%]  
                        lg:w-[78%]  
                        xl:w-[74%]  
                        2xl:w-[64%] 
        '>

           <PlatformFromJoin />

          <div className='flex justify-between md:w-[55%] w-[100%]'>
 
           <JoinNav />
           <CommunityNav />
           <CountrySelector />

           </div>
        </div>

    </div>
  )
}

export default FooterLinksSection