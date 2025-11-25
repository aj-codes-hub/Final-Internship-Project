import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import CircleShadow from '../../../../Components/layout/CircleShadow'

interface Slide {
  id: number;
  content: React.ReactNode;
  AnimeImg: string;
}

const slides: Slide[] = [
  { id: 1, content: <Card1 />, AnimeImg: "/Images/AnimeCard2.png"},
  { id: 2, content: <Card2 />, AnimeImg: "/Images/AnimeCard1.png"},
  { id: 3, content: <Card3 />, AnimeImg: "/Images/AnimeCard3.jpg"},
];

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const baseWidth = 1920;
      const newScale = Math.max(0.5, Math.min(1, screenWidth / baseWidth));
      setScale(newScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const getX = (index: number) => {
    if (index === current) return 0; 
    if (index === (current + 1) % slides.length) return 1200 * scale;
    if (index === (current - 1 + slides.length) % slides.length) return -1200 * scale; 
    return 2000 * scale; 
  };

  const isLeftSlide = (index: number) => {
    return index === (current - 1 + slides.length) % slides.length;
  };

  const isRightSlide = (index: number) => {
    return index === (current + 1) % slides.length;
  };

  const getRotationY = (index: number) => {
    if (isLeftSlide(index)) return 10; 
    if (isRightSlide(index)) return -10; 
    return 0;
  };

  return (
    <div 
      className="w-full max-w-[1950px] mx-auto flex flex-col items-center justify-center relative"
      style={{ height: `${1000 * scale}px` }}
    >
      <CircleShadow className="left-20"/>

      <div 
        className="absolute bottom-2 z-50 flex"
        style={{ gap: `${45 * scale}px` }}
      >
        <button 
          onClick={next} 
          className="bg-black text-[#33D6FF] flex rounded-full border border-white justify-center items-center"
          style={{
            width: `${80 * scale}px`,
            height: `${80 * scale}px`
          }}
        >
          <FaChevronLeft size={16 * scale} />        
        </button>

        <button 
          onClick={prev} 
          className="bg-black text-[#33D6FF] flex rounded-full border border-white justify-center items-center"
          style={{
            width: `${80 * scale}px`,
            height: `${80 * scale}px`
          }}
        >
          <FaChevronRight size={16 * scale} />
        </button>
      </div>

      <div 
        className="relative w-[100%] overflow-hidden flex items-center justify-center"
        style={{ 
          height: `${800 * scale}px`,
          perspective: `${1200 * scale}px`
        }}
      >

        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            drag="x"
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) next();
              if (info.offset.x > 80) prev();
            }}
            animate={{
              x: getX(index),
              scale: index === current ? 1 : 0.90,
              zIndex: index === current ? 20 : 5,
              rotateY: getRotationY(index),
            }}
            transition={{ duration: 0.6 }}
            className="absolute shadow-2xl flex items-end justify-center text-3xl font-bold"
            style={{
              width: `${1170 * scale}px`,
              height: `${749 * scale}px`,
              transformStyle: "preserve-3d",
            }}
          >
            
            <div 
              className={`w-full flex ${isLeftSlide(index) ? 'flex-row-reverse' : 'flex-row'} bg-[#FFFFFF0D] rounded-[20px]`}
              style={{
                height: `${670 * scale}px`
              }}
            >
               <div className="w-[45%] h-full relative">
                  <div 
                    className={`rounded-[20px] absolute overflow-hidden flex items-center justify-center
                               ${isLeftSlide(index) ? 'right-[30px]' : 'left-[30px]'}`}
                    style={{
                      height: `${685 * scale}px`,
                      width: `${482 * scale}px`,
                      top: `${-64 * scale}px`
                    }}
                  >
                    <img 
                      src={slide.AnimeImg}
                      className="w-full h-full object-cover "
                      alt={`Slide ${slide.id}`}
                    />
                  </div>
               </div>
               
               {slide.content}
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;