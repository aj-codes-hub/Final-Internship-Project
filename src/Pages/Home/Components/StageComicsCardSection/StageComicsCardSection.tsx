import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface ComicSlide {
  id: number;
  imageUrl: string;
  title: string;
  genre: string;
  profileImage: string;
}

const comicSlides: ComicSlide[] = [
  { 
    id: 1, 
    imageUrl: "/Images/AnimeCard6.png",
    title: "The Last Samurai",
    genre: "Action · Fantasy",
    profileImage: "/Images/AnimeCardProFile.png"
  },
  { 
    id: 2, 
    imageUrl: "/Images/AnimeCard4.png",
    title: "Dragon's Legacy",
    genre: "Adventure · Magic",
    profileImage: "/Images/Anime3.png"
  },
  { 
    id: 3, 
    imageUrl: "/Images/AnimeCard5.png",
    title: "Cyber Shinobi",
    genre: "Sci-Fi · Ninja",
    profileImage: "/Images/Anime1.png"
  },
];

const StageComicsCardSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [radius, setRadius] = useState(700);
  const [scaleFactor, setScaleFactor] = useState(1);

  const currentComic = comicSlides[current];

  useEffect(() => {
    const updateResponsiveValues = () => {
      const screenWidth = window.innerWidth;
      
      const baseWidth = 1920;
      const scale = screenWidth / baseWidth;
      
      const clampedScale = Math.max(0.5, Math.min(1, scale));
      setScaleFactor(clampedScale);

      if (screenWidth < 768) {
        setRadius(220 * clampedScale);
      } else if (screenWidth < 1024) {
        setRadius(360 * clampedScale);
      } else {
        setRadius(480 * clampedScale);
      }
    };

    updateResponsiveValues();
    window.addEventListener('resize', updateResponsiveValues);
    return () => window.removeEventListener('resize', updateResponsiveValues);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % comicSlides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + comicSlides.length) % comicSlides.length);

  const getCircularPosition = (index: number) => {
    const totalSlides = comicSlides.length;
    const startAngle = -105;
    const endAngle = 105;
    const angleRange = endAngle - startAngle;
    const relativeIndex = (index - current + totalSlides) % totalSlides;
    const angle = startAngle + (angleRange / (totalSlides - 1)) * relativeIndex;
    const radian = (angle * Math.PI) / 180;
    
    // Base positions
    let x = Math.sin(radian) * radius;
    let y = -Math.cos(radian) * radius * 0.3 - (200 * scaleFactor);
    
    // Calculate scale - right ko normal, center aur left ko chota
    let scale = 1;
    if (relativeIndex === 0) {
      scale = 0.85; // Center image (chota)
      // Center ki position thodi adjust karein
      x = x * 1; // Center ko thoda right side shift
      y = y - (-50 * scaleFactor); // Center ko thoda upar shift
    } else if (relativeIndex === 1) {
      scale = 1; // Right image (normal)
      // Right ki position thodi adjust karein
      x = x * 0.9; // Right ko thoda left side shift
    } else if (relativeIndex === totalSlides - 1) {
      scale = 0.85; // Left image (chota)
      // Left ki position thodi adjust karein
      x = x * 1; // Left ko thoda right side shift
      y = y + (20 * scaleFactor); // Left ko thoda neeche shift
    }
    
    return { x, y, angle, scale };
  };

  const responsiveValues = {
    containerHeight: 716 * scaleFactor,
    arcHeight: 1500 * scaleFactor,
    arcTop: 230 * scaleFactor,
    
    titleSize: 50 * scaleFactor,
    comicTitleSize: 26 * scaleFactor,
    genreSize: 16 * scaleFactor,
    
    profileSize: 70 * scaleFactor,

    buttonSize: 80 * scaleFactor,
    buttonGap: 45 * scaleFactor,
    iconSize: 16 * scaleFactor,
    
    cardWidth: 264 * scaleFactor,
    cardHeight: 340 * scaleFactor,

    marginBottom: 6 * scaleFactor,
    gap: 4 * scaleFactor,
    buttonMarginBottom: 64 * scaleFactor,
    titleMarginTop: 24 * scaleFactor,
  };

  return (
    <div className="w-full flex flex-col items-center justify-center relative overflow-hidden py-10 my-[100px]">

      <div className="w-full max-w-[1230px]" style={{ marginBottom: `${responsiveValues.marginBottom}px` }}>
        <h1 className="font-semibold text-center md:text-left" style={{ fontSize: `${responsiveValues.titleSize}px` }}>
          StageComics Originals
        </h1>
      </div>

      <div 
        className="relative w-full max-w-[1920px] flex items-center justify-center mx-auto px-4"
        style={{ height: `${responsiveValues.containerHeight}px` }}
      >
        
        <div className="relative w-[68%] h-full flex items-end justify-center">

          <div className="w-full flex justify-center h-full absolute top-0 left-0 overflow-hidden">
            <div 
              className="w-[90%] border-[3px] border-t-[0px] border-[#D3F85A] rounded-full absolute"
              style={{ 
                height: `${responsiveValues.arcHeight}px`,
                top: `${responsiveValues.arcTop}px`
              }}
            ></div>
          </div>
          
          <div className="flex flex-col absolute top-[46%]">
            <div 
              className="rounded-full mx-auto z-[40] overflow-hidden"
              style={{
                width: `${responsiveValues.profileSize}px`,
                height: `${responsiveValues.profileSize}px`
              }}
            >
              <img 
                src={currentComic.profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div 
              className="text-center flex flex-col mb-[64px] mt-[24px]"
              style={{ 
                gap: `${responsiveValues.gap}px`,
                marginBottom: `${responsiveValues.buttonMarginBottom}px`,
                marginTop: `${responsiveValues.titleMarginTop}px`
              }}
            >
              <p style={{ fontSize: `${responsiveValues.genreSize}px` }}>{currentComic.genre}</p>
              <h1 className="font-semibold mt-10 md:mt-0" style={{ fontSize: `${responsiveValues.comicTitleSize}px` }}>
                {currentComic.title}
              </h1>
            </div>

            <div 
              className="flex z-50 mx-auto"
              style={{ gap: `${responsiveValues.buttonGap}px` }}
            >
              <button 
                onClick={prev} 
                className="text-[#D3F85A] flex rounded-full border border-white justify-center cursor-pointer items-center
                         hover:bg-[#d3f85a20] hover:scale-105 transform duration-200"
                style={{
                  width: `${responsiveValues.buttonSize}px`,
                  height: `${responsiveValues.buttonSize}px`
                }}
              >
                <FaChevronLeft size={responsiveValues.iconSize} />        
              </button>

              <button 
                onClick={next} 
                className="text-[#D3F85A] flex rounded-full border border-white justify-center cursor-pointer items-center
                          hover:bg-[#d3f85a20] hover:scale-105 transform duration-200"
                style={{
                  width: `${responsiveValues.buttonSize}px`,
                  height: `${responsiveValues.buttonSize}px`
                }}
              >
                <FaChevronRight size={responsiveValues.iconSize} />
              </button>
            </div>
          </div>

          {comicSlides.map((comic, index) => {
            const position = getCircularPosition(index);
            
            return (
              <motion.div
                key={comic.id}
                className="absolute cursor-pointer z-20"
                animate={{
                  x: position.x,
                  y: position.y,
                  scale: position.scale,
                  opacity: 1,
                  zIndex: index === current ? 30 : 20,
                  rotate: position.angle * 0.4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                  duration: 0.8
                }}
                whileHover={{ 
                  scale: position.scale * 1.05,
                }}
                onClick={() => setCurrent(index)}
                style={{
                  width: `${responsiveValues.cardWidth}px`,
                  height: `${responsiveValues.cardHeight}px`,
                }}
              >
                <div className="w-full h-full bg-white rounded-[20px] shadow-2xl overflow-hidden transform-gpu">
                  <div className="w-full h-full">
                    <img 
                      src={comic.imageUrl} 
                      alt={`Comic ${comic.title}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default StageComicsCardSection;

