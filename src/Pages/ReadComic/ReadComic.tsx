import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'; 
import Episodebutton from '../ComicHere/Component/Episodebutton'
import { FiMoreVertical } from "react-icons/fi";
import { TiHeartOutline } from "react-icons/ti";
import BtnWithIcon from './Component/BtnWithIcon';
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { SlControlForward } from "react-icons/sl";
import { GoScreenFull } from "react-icons/go";
import { TbMessage2 } from "react-icons/tb";
import { ComicData } from '../../ComicData';
import { ComicEpisode } from '../../ComicData/ComicEpisode';
import { MdOutlineFullscreenExit } from "react-icons/md";
import CommentBox from '../ComicHere/Component/CommentBox';

const ReadComic: React.FC = () => {
  const { episodeId } = useParams<{ episodeId?: string }>();
  const navigate = useNavigate();
  
  const [isActive, setIsActive] = useState<'list' | 'Comment'>('list')
  const [isLiked, SetIsLiked] = useState(false)
  const [currentEpisode, setCurrentEpisode] = useState<any>(null)
  const [ScreenSize, setScreenSize] = useState(false)

  const HandleScreenSize = () => {
    setScreenSize(!ScreenSize)
  }

  // Episode find karo
  useEffect(() => {
    if (episodeId) {
      const episode = ComicEpisode.find(ep => ep.id === episodeId);
      setCurrentEpisode(episode || ComicEpisode[0]);
    } else {
      setCurrentEpisode(ComicEpisode[0]);
    }
  }, [episodeId])

  // Prev button handler
  const handlePrevEpisode = () => {
    if (!currentEpisode) return;
    
    const currentIndex = ComicEpisode.findIndex(ep => ep.id === currentEpisode.id);
    
    if (currentIndex > 0) {
      const prevEpisode = ComicEpisode[currentIndex - 1];
      navigate(`/ReadComic/${prevEpisode.id}`);
    }
  }

  // Next button handler
  const handleNextEpisode = () => {
    if (!currentEpisode) return;
    
    const currentIndex = ComicEpisode.findIndex(ep => ep.id === currentEpisode.id);
    
    if (currentIndex < ComicEpisode.length - 1) {
      const nextEpisode = ComicEpisode[currentIndex + 1];
      navigate(`/ReadComic/${nextEpisode.id}`);
    }
  }

  // Disable check for Prev button
  const isPrevDisabled = () => {
    if (!currentEpisode) return true;
    const currentIndex = ComicEpisode.findIndex(ep => ep.id === currentEpisode.id);
    return currentIndex === 0;
  }

  // Disable check for Next button
  const isNextDisabled = () => {
    if (!currentEpisode) return true;
    const currentIndex = ComicEpisode.findIndex(ep => ep.id === currentEpisode.id);
    return currentIndex === ComicEpisode.length - 1;
  }

  // Agar episode load nahi hua
  if (!currentEpisode) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="text-xl text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className={`mb-[200px] relative  ${ScreenSize ? "w-screen h-full fixed left-0 top-0 z-[888]" : ""}`}>
      <div className='gap-[30px] px-[20px] 2xl:px-[0px] max-w-[1920px] mx-auto mt-[140px] flex lg:flex-row flex-col justify-end 2xl:pr-[100px]'>

        {/* PDF AREA */}
        <div className={`overflow-hidden ${ScreenSize ? "w-screen h-screen fixed left-0 top-0 z-[888] rounded-[0px]" : "rounded-[20px] h-[863px] lg:w-[1070px] relative w-full"}`}>
          <img 
            src={currentEpisode.pdfBackground} 
            className='z-[-10] h-full w-full md:h-auto md:w-auto '
            alt="PDF Background"
          />
          <div className='h-[90%] w-[90%] z-[40] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
            <h1 className='md:text-[50px] sm:text-[40px] text-[30px] font-bold text-center mt-[30px] text-black bg-white/20 backdrop-blur-2xl'>
              PDF EPISODE : {currentEpisode.episodeNumber}
            </h1>
          </div>
        </div>

        <div className='lg:w-[345px] w-full'>
          {/* TITLE IMAGE */}
          <div className='rounded-[20px] h-[221px] w-[332px] overflow-hidden hidden sm:block'>
            <img 
              src={currentEpisode.titleImage} 
              alt="Title"
            />
          </div>    

          {/* COMIC DETAILS */}
          <div className='mt-[16px] flex gap-[16px]'>
            <div className='overflow-hidden w-[87px] h-[122px] rounded-[10px]'>
              <img 
                src={currentEpisode.titleImage}
                className='scale-[3.2]'
                alt="titleImage"
              />
            </div>

            <div className='lg:w-[222px]  md:w-[422px] w-[70%]'>
              <h1 className='text-[20px]'>
                {ComicData.title}
              </h1>
              <div className='flex text-[12px] text-[#5C6272] gap-[4px]'>
                <span> {currentEpisode.views} views </span>
                |
                <span> {ComicData.subscribers} subscribers</span>
              </div>
              <p className='text-[12.3px] leading-[20px] '>
                {ComicData.smalldescription}
                <a href="" className='text-[12px] text-[#33D6FF] font-semibold'>
                  Read More
                </a>
              </p>
            </div>
          </div>

          {/* EPISODE LIST or COMMENTS - BAS ITNA CHANGE */}
          <div className='w-full h-[400px] mt-[32px] overflow-y-auto'>
            {isActive === 'list' ? (
              <Episodebutton />
            ) : (
              <div>
              <CommentBox />
              </div>
            )}
          </div>
        </div>
      </div>

      
     
      {/* BOTTOM BAR */}
      <div className={`bg-[#1D212B] lg:h-[101px] h-auto w-full transform duration-300 z-[999] bottom-0 ${ScreenSize ? "fixed": "sticky"}`}>
        
        <div className='max-w-[1920px] mx-auto h-full xl:px-[120px] lg:px-[100px] md:px-[60px] px-[20px] py-[20px]'>
          
          <div className='lg:flex-row flex-col flex justify-between'>
            
            {/* LEFT SECTION */}
            <div className='flex gap-[12px]'>
              {/* THUMBNAIL */}
              <div className='h-[60px] w-[60px] rounded-[10px] overflow-hidden'>
                <img 
                  src={currentEpisode.thumbnail} 
                  alt={`Episode ${currentEpisode.episodeNumber}`}
                />
              </div>
              
              {/* EPISODE INFO */}
              <div className='flex flex-col justify-center gap-[4px] lg:border-r xl:w-[340px] lg:w-[280px] md:w-[280px] xl:p-0 px-[10px] border-[#5C6272] h-[44px] my-auto'>
                <p className='text-[16px]'>
                  Episode {currentEpisode.episodeNumber}
                </p>
                <div className='flex gap-[4px] text-[12px] font-normal'>
                  <span>{currentEpisode.views} Views</span>
                  |
                   <span>{currentEpisode.episodeLikes} Likes</span>
                  |
                  <span>{currentEpisode.commentsQuantity} comments</span>
                </div>
              </div>
            </div>
             
             <div className='flex w-full'>

             <div className='lg:ml-[32px] mx-auto lg:mx-0'>
                <BtnWithIcon 
                  title="More"
                  className='gap-[8px] h-full text-[#5C6272]' 
                  icon={<FiMoreVertical className='text-[24px]'/>}
                />
              </div>

            {/* LIKE BUTTON */}
            <BtnWithIcon 
              onClick={() => SetIsLiked(!isLiked)}
              title="liked" 
              className='mx-auto'
              icon={
                <TiHeartOutline 
                  className={`text-[24px]  ${isLiked ? "text-red-600" : ""}`}
                />
              }
            />

             </div>

            {/* RIGHT SECTION */}
            <div className='flex justify-between'>
              {/* LIST/COMMENT TABS */}
              <div className='flex gap-[9px]'>   
                <div className={`rounded-[10px] h-[70px] ${isActive === 'list' ? "bg-[#303645] w-[70px]" : ""}`}>
                  <BtnWithIcon 
                    onClick={() => setIsActive('list')}
                    title="List" 
                    className='h-full w-full'
                    icon={<MdOutlineFormatListBulleted className='text-[24px]'/>}
                  />
                </div>

                <div className={`rounded-[10px] h-[70px] ${isActive === 'Comment' ? "bg-[#303645] w-[70px]" : ""}`}>
                  <BtnWithIcon 
                    onClick={() => setIsActive('Comment')}
                    title="Comment" 
                    className='h-full w-full'
                    icon={<TbMessage2 className='text-[24px]'/>}
                  />
                </div>
              </div>  

              <div className='h-[46px] w-[1px] bg-[#5C6272] my-auto md:mx-[24px] mx-[6px]'/>

              {/* PREV/NEXT BUTTONS */}
              <div className='flex md:gap-[44px] gap-[30px]'>   
                <div className={`rounded-[10px] h-[70px] ${isPrevDisabled() ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  <BtnWithIcon 
                    title="Prev" 
                    onClick={handlePrevEpisode}
                    disabled={isPrevDisabled()}
                    className={`h-full w-full ${isPrevDisabled() ? 'opacity-50' : ''}`}
                    icon={<SlControlForward className='text-[24px] rotate-180'/>}
                  />
                </div>
                
                <div className={`rounded-[10px] h-[70px] ${isNextDisabled() ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  <BtnWithIcon 
                    title="Next" 
                    onClick={handleNextEpisode}
                    disabled={isNextDisabled()}
                    className={`h-full w-full ${isNextDisabled() ? 'opacity-50' : ''}`}
                    icon={<SlControlForward className='text-[24px]'/>}
                  />
                </div>
              </div>  

              <div className='h-[46px] w-[1px] bg-[#5C6272] my-auto md:mx-[24px] mx-[6px]'/>

              {/* FULL SCREEN BUTTON */}
              <div>   
                <div className='rounded-[10px] h-[70px]'>
                  <BtnWithIcon 
                    title={`${ScreenSize ? "Exit" : "Full" }`}
                    onClick={HandleScreenSize}
                    className='h-full w-full'
                    icon={ScreenSize ? <MdOutlineFullscreenExit className='text-[24px]'/> : <GoScreenFull className='text-[24px]'/>}
                  />
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadComic;