import React from 'react'
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import Button from '../../Components/layout/Button'
import { IoEye } from "react-icons/io5";
import Episodebutton from './Component/Episodebutton';
import { ComicData } from '../../ComicData/ComicData'
import CommentBox from './Component/CommentBox';

const CmmicFullEP:React.FC = () =>  {
  const navigate = useNavigate(); // ✅ useNavigate hook initialize karo

  // ✅ Function to navigate to first episode
  const handleReadFirstEpisode = () => {
    navigate('/read-comic/ep_001'); // ✅ First episode ka direct URL
  };

  return (
    <div className='max-w-[1920px] mx-auto mb-[200px]'>
      <div className='h-[393px] w-full overflow-hidden flex items-end justify-center xl:mt-[169px] lg:mt-[120px] md:mt-[129px]  mt-[109px]'>
       <img src={ComicData.coverImage} className='md:scale-[1] sm:scale-[2] scale-[3]'/>
      </div>
      
      <div className='flex justify-between'>

       <div className='h-[1718px] w-[311px] overflow-hidden xl:flex justify-center items-center hidden'>
        <img src={ComicData.backgroundLeft}
             className='scale-[10] ml-[440px]'/>
       </div>

       <div className='md:px-[64px] px-[20px] flex flex-col lg:flex-row gap-[30px] mx-auto'>

           {/* Comic Detail section */}
         <div className='w-full lg:w-[340px] xl:w-[400px] 2xl:w-[470px]'>
 
          <div className='rounded-[20px] h-[462px] sm:w-[325px] w-full overflow-hidden relative -mt-[250px]'>

           <div className='absolute h-full w-[135%] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
              <img src={ComicData.mainCharacterImage}
                className='h-full w-full'/>
          </div>
           
           <div className={`bg-[#33d6ff46] rounded-full z-30 absolute flex items-center justify-center
                            top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  
                                             h-[67px] w-[67px] 
                                             md:h-[67px] md:w-[67px] 
                                             lg:h-[67px] lg:w-[67px]
                                             xl:h-[67px] xl:w-[67px]`}>

                 <div className="h-[70%] w-[70%] bg-[#33D6FF] rounded-full flex items-center justify-center">
                    <img src="/Icons/PlayVideo.png"
                          className='h-[14px] w-[11px]'/>
                </div>
            </div>

          </div>

          <h1 className='text-[36px] font-bold mt-[30px]'>
            {ComicData.title}
          </h1> 
          
          <div className='text-[18px] font-semibold flex gap-[28px] items-center mt-[16px]'>
            <div className='flex gap-[6.9px]'>  
            {ComicData.StarRating.map((starImg, index) => (
          <img 
            key={index}
            src={starImg}
            alt={`Star ${index + 1}`}
            className="w-[18.56px] h-[17px] flex "
          />
         ))}
        </div>
         <span>Action</span>
          </div>

          <div className='flex gap-[24px] mt-[28px]'>
            <div className='gap-[9px]'>
                  <div className='flex gap-[10px]'>
                      <IoEye size={24} className='text-[#33D6FF]'/>
                      <p className='text-[16px] text-[#B0B0B0]'>{ComicData.views}</p>
                  </div>
                 <p className='text-[20px]'>Release</p> 
                 <p className='text-[20px]'>Status</p> 
                 <p className='text-[16px] text-[#FFFFFF]'>Alternative</p>  
            </div>
            <div className='gap-[9px]'> 
               <div className='flex gap-[10px]'>
                      <img src="/Icons/icons_heart.png" className='h-[22px] w-[24px]'/>
                      <p className='text-[16px] text-[#B0B0B0]'>{ComicData.likes}</p>
                </div>
              <p className='text-[20px]'>{ComicData.release}</p> 
              <p className='text-[20px]'>{ComicData.status}</p> 
              <p className='text-[16px] text-[#FFFFFF] font-thin'>{ComicData.alternativeTitle}</p>  
              
            </div>
          </div>

          <h1 className='font-semibold text-[28px] mt-[32px]'> 
            details
          </h1>
          <p className='text-[16px] leading-[25px] mt-[8px]'>
            {ComicData.description}
          </p>
           <a href=""
              className='text-[#33D6FF]'>
              READ MORE
           </a>

           <div className='flex gap-[95px]'> 
            <div>
            <h1 className="text-[20px] font-semibold mt-[24px]
                                 md:text-[16px]
                                 lg:text-[20px]
                                 xl:text-[26px]
                                 2xl:text-[28px]
                  ">
                    Author 
             </h1>
  
                  <div className="h-[38px]     w-[38px]   mt-[10px] rounded-full overflow-hidden
                                  md:h-[42px] md:w-[42px]
                                  lg:h-[46px] lg:w-[46px] 
                                  xl:h-[50px] xl:w-[50px] 
                                  2xl:h-[54px] 2xl:w-[54px] 
                  
                  ">
                     <img src={ComicData.authorImage} className='scale-125'/>
                  </div>
               </div>   
                <div>
            <h1 className="text-[20px] font-semibold mt-[24px]
                                 md:text-[16px]
                                 lg:text-[20px]
                                 xl:text-[26px]
                                 2xl:text-[28px]
                  ">
                    Illustration 
             </h1>
  
                  <div className="h-[38px]     w-[38px]   mt-[10px] rounded-full overflow-hidden
                                  md:h-[42px] md:w-[42px]
                                  lg:h-[46px] lg:w-[46px] 
                                  xl:h-[50px] xl:w-[50px] 
                                  2xl:h-[54px] 2xl:w-[54px] 
                  
                  ">
                     <img src={ComicData.illustrationImage} className='scale-125'/>
                  </div>
               </div>   
           </div>       

          {/* ✅ Read First Episode Button - with onClick */}
          <Button 
            title='Read First Episode'
            onClick={handleReadFirstEpisode} // ✅ Function attach karo
            className='bg-[#33D6FF] font-semibold text-black w-full h-[77px] text-[22px] mt-[32px] cursor-pointer hover:bg-[#29c4e5] transition'
          />

          <div className='mt-[70px]'>
            <h1 className='text-[36px] gap-[24px] flex font-bold'>
             <img src="/Icons/Commit.png"
                  className='h-[40px] w-[40px]'/>
              Forum Discussion
            </h1>

            <hr className='mt-[22px] text-[#DBDBDB]'/>

             <p className='text-[16px] font-thin mt-[19px]'>
              <span> {ComicData.ComicCommentsQuantity} </span>
              Comments
             </p>

            <hr className='mt-[19px] text-[#808080]'/>

            {/* Comment box */}
            <div className='h-[552px] mt-[22px] relative'> 
              
              <CommentBox />

              <input type='text'
                     placeholder='Comment...'
                     className='text-[#536471]  text-[16px] absolute bottom-0 left-0 rounded-full border border-[#536471] px-[25px] py-[16px] w-full font-semibold'>
              </input>
            </div>

          </div>



         </div>


             {/* episodes here */}     
          <div className='2xl:w-[670px] lx:w-[600px] lg:w-[550px] md:w-full w-full mt-[53px]'>
            <Episodebutton />
            <Button title='View More'
                    className='text-[#33D6FF] mt-[38px] text-[16px] h-[60px] lg:w-[242px] w-full border mx-auto'/>
          </div>


       </div>

       <div className='h-[1718px] w-[311px] overflow-hidden xl:flex justify-center items-center hidden'>
        <img src={ComicData.backgroundLeft}
             className='scale-[10] mr-[180px]'/>
       </div>

      </div>

    </div>
  )
}

export default CmmicFullEP