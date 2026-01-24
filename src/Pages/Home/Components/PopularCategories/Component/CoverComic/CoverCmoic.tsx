import React, { useState } from 'react'
import ComicSliderImages from './ComicSliderImages';

interface ComicData {
  id: number;
  Url: string;
  title?: string;
  rating?: number;
  genre?: string;
  views?: string;
  subscribers?: string;
  likes?: string;
  description?: string;
  bgImage?: string; // ✅ Background image property
}

const CoverComic: React.FC = () => {
  // Default comic data
  const defaultComicData: ComicData = {
    id: 2,
    Url: "Images/comicCover2.png",
    bgImage: "Images/FireFall.jpg", // ✅ Default background
    title: "Comic name goes here",
    rating: 5,
    genre: "Action · fantasy",
    views: "1.6m views",
    subscribers: "42.1k subscribers",
    likes: "146k likes",
    description: "At the age of eight, Ijin Yu lost his parents in a plane crash and became stranded in a foreign land, forced to become a child mercenary in order to stay alive. He returns home ten years later to be ....."
  };

  const [activeComic, setActiveComic] = useState<ComicData>(defaultComicData);

  // Handle when active image changes in slider
  const handleActiveImageChange = (comicData: ComicData) => {
    setActiveComic(comicData);
    console.log("Active comic changed to:", comicData.title);
    console.log("Background image:", comicData.bgImage);
  };

  // Render stars based on rating
  const renderStars = (rating: number = 5) => {
    return Array.from({ length: rating }).map((_, index) => (
      <img 
        key={index}
        src="Images/BlueStar.png"  
        className="w-[18px] h-[17px]" 
        alt="star"
      />
    ));
  };

  return (
    <div className='lg:h-[488px] mt-[134px] xl:rounded-[20px] overflow-hidden relative'>
      
      {/* ✅ DYNAMIC BACKGROUND IMAGE */}
      <img 
        src={activeComic.bgImage || "/Images/FireFall.jpg"} 
        className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-[10] w-full h-full object-cover'
        alt="comic background"
      />
      
      {/* Overlay gradient */}
      <div className='absolute inset-0 bg-gradient-to-l from-[#0C193A00] to-[#0C193A] -z-[5]'></div>
      
      <div className='bg-gradient-to-l flex-col flex lg:flex-row gap-[70px] from-[#0C193A00] to-[#0C193A] h-full w-full py-[44px] sm:px-[48px] px-[12px] relative z-10'>
              
        <div className='lg:h-full w-full lg:w-[550px] sm:h-[500px] h-[620px] md:h-[360px] relative'>

          
          <h1 className='text-[40px] font-semibold mb-[27px]'>
            {activeComic.title}
          </h1>
          
          {/* Rating and Genre - Dynamic */}
          <div className="flex items-center gap-[28px] justify-center md:justify-start mb-[14px]">
            <div className='flex gap-[7px]'>
              {renderStars(activeComic.rating)}
            </div>
            <p className="text-white/90 font-semibold text-[18px]">
              {activeComic.genre}
            </p>
          </div> 

          {/* Stats - Dynamic */}
          <div className="flex items-center md:gap-[32px] sm:gap-[22px] gap-[14px] text-white/90 font-semibold text-[18px] justify-center md:justify-start mb-[17px]">
            <span className="text-center">{activeComic.views}</span>
            <span className="text-center">{activeComic.subscribers}</span>
            <span className="text-center">{activeComic.likes}</span>
          </div>

          {/* Description - Dynamic */}
          <p className="text-white/50 text-[20px] leading-[34px] text-center md:text-left">
            {activeComic.description}
          </p>

          {/* Buttons */}
          <div className="md:flex-row flex flex-col items-center justify-between w-full absolute bottom-0">
            <button className="text-[20px] h-[75px] md:w-[200px] w-full rounded-full border border-[#33D6FF] text-[#33D6FF] hover:bg-[#0D2A45] transition">
              Read Now
            </button>

            <div className="flex items-center gap-[21px] md:gap-[12px] lg:gap-[18px] mt-[30px] md:mt-0">
              <div className="rounded-full bg-[#FFFFFF17] flex justify-center items-center h-[66px] w-[66px] md:h-[60px] md:w-[60px] lg:h-[66px] lg:w-[66px]">
                <img src="/Icons/icons_heart.png" alt="like" />
              </div>
              <div className="h-[66px] w-[66px] rounded-full bg-[#FFFFFF17] flex justify-center items-center">
                <img src="/Icons/icons_twitter.png" alt="share on twitter" />
              </div>
              <div className="h-[66px] w-[66px] rounded-full bg-[#FFFFFF17] flex justify-center items-center">
                <img src="/Icons/icons_instagram.png" alt="share on instagram" />
              </div>
            </div>
          </div>

        </div>

        {/* Slider Component - Pass callback function */}
        <div className='h-full lg:w-[444px] w-full flex flex-col'>
          <ComicSliderImages onActiveImageChange={handleActiveImageChange} />
        </div>

      </div>
    </div>
  )
}

export default CoverComic;