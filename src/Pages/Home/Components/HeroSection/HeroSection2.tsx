import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import "./../../../../assets/Styles/template/heroSection.css"
import "swiper/css";
import { Navigation } from "swiper/modules";
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import CircleShadow from '../../../../Components/layout/CircleShadow';


const cardAndData = [
  { id: 3, content: <Card3 />, AnimeImg: "/Images/AnimeCard3.jpg"},  
  { id: 1, content: <Card1 />, AnimeImg: "/Images/AnimeCard2.png"},
  { id: 2, content: <Card2 />, AnimeImg: "/Images/AnimeCard1.png"},
];


const HeroSection2:React.FC = () => {
   
     const prevRef = useRef<HTMLButtonElement | null>(null);
     const nextRef = useRef<HTMLButtonElement | null>(null);

     const [swiperInstance, setSwiperInstance] =  useState<any>(null);

     useEffect(()=>{
          
     if(
         swiperInstance &&
         prevRef.current &&
         nextRef.current &&
         !swiperInstance.destroyed
     ){

     swiperInstance.params.navigation.prevEl = prevRef.current
     swiperInstance.params.navigation.nextEl = nextRef.current

     swiperInstance.navigation.destroy()
     swiperInstance.navigation.init()
     swiperInstance.navigation.update()


     }   
     },[swiperInstance]);


   return (
     <div className='mt-[100px] relative'>

        <CircleShadow blurClass='blur-[150px]' className="top-1/2 -translate-y-1/2 left-65 z-[200] bg-[radial-gradient(circle_at_center,#159777,#7BA49A)]"/>

        <div className="w-full mx-auto">
        <Swiper
            modules={[Navigation]}
            slidesPerView={1.7250}
            centeredSlides={true}
            initialSlide={1}
            speed={800}
            onSwiper={setSwiperInstance}
        >

        {cardAndData.map((item)=>(

           <SwiperSlide key={item.id}>
                <div className='h-[750px] w-[1200px] flex justify-center items-end'>
                    <div className='flex h-[670px] w-[1170px] rounded-[20px] bg-[#FFFFFF0D] card duration-500 ease-out'>
                        
                        <div className='w-[512px] h-full relative'>
                            <div className='w-[482px] h-[685px] rounded-[20px] absolute left-[30px] top-[-64px] overflow-hidden cardImg'>

                                <div className={`bg-[#33d6ff46] play-Button rounded-full z-30 absolute items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                            h-[85px] w-[85px] 
                                            md:h-[95px] md:w-[95px] 
                                            lg:h-[105px] lg:w-[105px]
                                            xl:h-[115px] xl:w-[115px]`}>s

                                   <div className="h-[70%] w-[70%] bg-[#33D6FF] rounded-full flex items-center justify-center">
                                       <img src="/Icons/PlayVideo.png"/>
                                    </div>
                                </div>
                                
                               <img src={item.AnimeImg}
                                     className="h-full w-full object-cover"/>
                            </div>
                        </div>
                       
                      
                           {item.content}

                        
                    </div>
                </div>
            </SwiperSlide>
        
        ))}
            
        </Swiper>

        </div>

        <div className='flex gap-[45px] mx-auto  justify-center items-center mt-[65px]'>        
            <button ref={prevRef}
                    className='rounded-full border w-[80px] h-[80px] flex justify-center items-center cursor-pointer hover:bg-[#33d6ff2d]'>
                <FaChevronLeft className='text-[#33D6FF]'/>
            </button>

            <button ref={nextRef}
                    className='rounded-full border w-[80px] h-[80px] flex justify-center items-center cursor-pointer hover:bg-[#33d6ff2d]'>
                <FaChevronRight className='text-[#33D6FF]'/>
            </button>
        </div>

    </div>
  );
};

export default HeroSection2