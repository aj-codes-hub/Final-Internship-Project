import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { TbThumbUpFilled } from "react-icons/tb";
import { RiEyeFill } from "react-icons/ri";
import "swiper/css";
import "swiper/css/navigation";

const CardCategory: React.FC = () => {

  const cardData = [
    { id: 1, cardImage: "Images/Girl-Sky.jpg",views:"63k",likes:"2.1k",authorName:"Authors name",CardTitle:"Product title goes here",comicType:"Action · fantasy" },
    { id: 2, cardImage: "Images/Girl-Sky.jpg",views:"63k",likes:"2.1k",authorName:"Authors name",CardTitle:"Product title goes here",comicType:"Action · fantasy" },
    { id: 3, cardImage: "Images/Girl-Sky.jpg",views:"63k",likes:"2.1k",authorName:"Authors name",CardTitle:"Product title goes here",comicType:"Action · fantasy" },
    { id: 4, cardImage: "Images/Girl-Sky.jpg",views:"63k",likes:"2.1k",authorName:"Authors name",CardTitle:"Product title goes here",comicType:"Action · fantasy" },
    { id: 5, cardImage: "Images/Girl-Sky.jpg",views:"63k",likes:"2.1k",authorName:"Authors name",CardTitle:"Product title goes here",comicType:"Action · fantasy" },
    { id: 6, cardImage: "Images/Girl-Sky.jpg",views:"63k",likes:"2.1k",authorName:"Authors name",CardTitle:"Product title goes here",comicType:"Action · fantasy" },
    { id: 7, cardImage: "Images/Girl-Sky.jpg",views:"63k",likes:"2.1k",authorName:"Authors name",CardTitle:"Product title goes here",comicType:"Action · fantasy" },
    { id: 8, cardImage: "Images/Girl-Sky.jpg",views:"63k",likes:"2.1k",authorName:"Authors name",CardTitle:"Product title goes here",comicType:"Action · fantasy" },
    { id: 8, cardImage: "Images/Girl-Sky.jpg",views:"63k",likes:"2.1k",authorName:"Authors name",CardTitle:"Product title goes here",comicType:"Action · fantasy" },
    { id: 10, cardImage: "Images/Girl-Sky.jpg",views:"63k",likes:"2.1k",authorName:"Authors name",CardTitle:"Product title goes here",comicType:"Action · fantasy" },
  ];

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const lastIndex = cardData.length - 1;

  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      !swiperInstance.destroyed
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className='w-full max-w-[1170px] mx-auto h-[680px] mt-[150px]'>

      <h1 className='text-[50px] font-semibold'>
        Most Popular By Genres
      </h1>

      <div className='w-full h-[388px] mt-[80px]'>

        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={30}
          initialSlide={3}
          speed={400}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {cardData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='w-[270px] overflow-hidden h-[388px] rounded-[20px] cursor-pointer flex items-center justify-center relative'>
                <img src={item.cardImage} className='z-[5]'/>
                <div className='absolute top-0 left-0 bg-gradient-to-t from-[#0A1838] z-[5] to-[#0A193900] h-full w-full'/>
              
              <div className='absolute z-[15] bottom-[24px]'>
                                 <p className='text-[#FEB705] text-[16px] font-normal'> {item.comicType}  </p>
                                 <h1 className='text-[20px] font-bold mt-[4px]'>{item.CardTitle}</h1>
                                 <p className='text-[16px] font-normal mt-[4px]'>{item.authorName}</p>
                                 <div className='flex justify-between mt-[16px]'>
                                 <p className='text-[16px] flex gap-[16px]'>
                                  <span className='flex items-center gap-[4px]'><TbThumbUpFilled size={21}/> {item.likes} </span>
                                  <span className='flex items-center gap-[4px]'><RiEyeFill size={21}/> {item.views} </span>
                                 </p>
                                 </div>
                               </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <div className='flex gap-[45px] mx-auto justify-center w-full mt-[65px] items-center'>

        <button
          ref={prevRef}
          disabled={activeIndex === 0}
          className={`rounded-full border w-[60px] h-[60px] flex justify-center items-center cursor-pointer hover:bg-[#d3f85a1e] transition-colors duration-300
            ${activeIndex === 0 ? "opacity-20 pointer-events-none" : "opacity-100"}`}
        >
          <FaChevronLeft className='text-[#D3F85A]' />
        </button>

        <button
          ref={nextRef}
          disabled={activeIndex >= lastIndex - 3}
          className={`rounded-full border w-[60px] h-[60px] flex justify-center items-center cursor-pointer hover:bg-[#d3f85a1e] transition-colors duration-300
            ${activeIndex >= lastIndex - 3 ? "opacity-20 pointer-events-none" : "opacity-100"}`}
        >
          <FaChevronRight className='text-[#D3F85A]' />
        </button>

      </div>

    </div>
  )
}

export default CardCategory;
