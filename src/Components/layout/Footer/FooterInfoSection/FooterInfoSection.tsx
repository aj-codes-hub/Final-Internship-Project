import React from 'react';
import QRcode from './QRcode';
import DownloadApp from './DownloadApp';
import DownloadRating from './downloadRating';


const FooterInfoSection:React.FC = () => {
  return (
    <div className='w-full h-[110vw] relative flex overflow-hidden
                           sm:h-[90vw]
                           md:h-[240px]
                           lg:h-[260px]
                           xl:h-[280px]
                           2xl:h-[346px]    
    '>
      
      <div className='h-[120%] w-[101%] bg-[#FFFFFF0F] md:left-1/2 mt-10
                     md:-translate-x-1/2 absolute md:rotate-[-2.5deg] md:rounded-t-[60px]'>
      </div>

       <div className='w-[100%]   max-w-[1170px] flex-col md:flex-row flex justify-between mx-auto my-auto md:h-full h-[80%]
                       md:w-[77%]
                       lg:w-[73%]
                       xl:w-[69%]
                       2xl:w-full
       '>

       <QRcode />
       <DownloadApp />
       <DownloadRating />

       </div>
    </div>
  )
}

export default FooterInfoSection