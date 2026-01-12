import React, { useState, useEffect } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from 'react-icons/fa6';

interface Slide {
  id: number;
  Url: string;
  title?: string;
  rating?: number;
  genre?: string;
  views?: string;
  subscribers?: string;
  likes?: string;
  description?: string;
  bgImage?: string; // ✅ New property for background image
}

interface ComicSliderImagesProps {
  onActiveImageChange: (activeImage: Slide) => void;
}

const ComicSliderImages: React.FC<ComicSliderImagesProps> = ({ onActiveImageChange }) => {
  const images: Slide[] = [
    { 
      id: 1, 
      Url: "Images/comicCover1.png",
      bgImage: "Images/comicCover1.png", // ✅ Background image for comic 1
      title: "Comic name goes here",
      rating: 5,
      genre: "Action · fantasy",
      views: "1.6m views",
      subscribers: "42.1k subscribers",
      likes: "146k likes",
      description: "At the age of eight, Ijin Yu lost his parents in a plane crash and became stranded in a foreign land, forced to become a child mercenary in order to stay alive....."
    },
    { 
      id: 2, 
      Url: "Images/comicCover2.png",
      bgImage: "Images/FireFall.jpg", // ✅ Background image for comic 2
      title: "The Last Guardian",
      rating: 4,
      genre: "Adventure · Mystery",
      views: "2.3m views",
      subscribers: "58.7k subscribers",
      likes: "198k likes",
      description: "At the age of eight, Ijin Yu lost his parents in a plane crash and became stranded in a foreign land, forced to become a child mercenary in order to stay alive. He returns home ten years later to be ....."
    },
    { 
      id: 3, 
      Url: "Images/comicCover3.png",
      bgImage: "Images/comicCover3.png", // ✅ Background image for comic 3
      title: "Cyber Samurai",
      rating: 5,
      genre: "Sci-fi · Action",
      views: "3.1m views",
      subscribers: "75.2k subscribers",
      likes: "234k likes",
      description: "In a futuristic Tokyo, a samurai wields both katana and cybernetic enhancements to fight corruption....."
    },
    { 
      id: 4, 
      Url: "Images/comicCover4.png",
      bgImage: "Images/comicCover4.png", // ✅ Background image for comic 4
      title: "Starlight Odyssey",
      rating: 4,
      genre: "Space · Fantasy",
      views: "1.9m views",
      subscribers: "39.8k subscribers",
      likes: "167k likes",
      description: "A space explorer travels through galaxies discovering ancient alien civilizations and cosmic mysteries....."
    },
    { 
      id: 5, 
      Url: "Images/comicCover2.png",
      bgImage: "Images/comicCover2.png",
      title: "Comic name goes here",
      rating: 5,
      genre: "Action · fantasy",
      views: "1.6m views",
      subscribers: "42.1k subscribers",
      likes: "146k likes",
      description: "At the age of eight, Ijin Yu lost his parents in a plane crash and became stranded in a foreign land....."
    },
    { 
      id: 6, 
      Url: "Images/comicCover1.png",
      bgImage: "Images/comicCover1.png",
      title: "The Last Guardian",
      rating: 4,
      genre: "Adventure · Mystery",
      views: "2.3m views",
      subscribers: "58.7k subscribers",
      likes: "198k likes",
      description: "A young guardian discovers ancient powers while protecting a mystical village from dark forces....."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(1);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === images.length - 4 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 4 : prev - 1
    );
  };

  // Get 4 images to display
  const getVisibleImages = (): Slide[] => {
    let visibleImages = images.slice(currentIndex, currentIndex + 4);
    
    if (visibleImages.length < 4) {
      const remaining = 4 - visibleImages.length;
      const fromStart = images.slice(0, remaining);
      visibleImages = [...visibleImages, ...fromStart];
    }
    
    return visibleImages;
  };

  const visibleImages = getVisibleImages();

  // Handle image click
  const handleImageClick = (index: number) => {
    setActiveImageIndex(index);
    
    // Get the actual image from all images array
    const actualIndex = (currentIndex + index) % images.length;
    const activeImage = images[actualIndex];
    
    // Send active image data to parent (including bgImage)
    onActiveImageChange(activeImage);
  };

  // Send initial active image to parent on component mount
  useEffect(() => {
    const initialActiveImage = images[activeImageIndex];
    onActiveImageChange(initialActiveImage);
  }, []);

  return (
    <div className='w-[90%] md:w-full h-[68px] mt-auto mx-auto lg:mx-0 flex justify-between items-center px-[12px] relative'>
      
      {/* Images Container */}
      <div className='flex lg:gap-2 sm:gap-5 gap-2 justify-between items-center mx-auto w-[98%] md:w-full'>
        {visibleImages.map((image, index) => {
          const isActive = index === activeImageIndex;
          return (
            <div 
              key={`${image.id}-${currentIndex}-${index}`}
              onClick={() => handleImageClick(index)}
              className={`rounded-[8px] bg-[#242731] lg:h-[56px] lg:w-[96px] h-[106px] w-full overflow-hidden transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'p-[6px]' 
                  : ''
              }`}
            >
              <img 
                src={image.Url} 
                alt={`Comic Cover ${image.id}`}
                className='w-full h-full object-cover rounded-[8px]'
              />
            </div>
          );
        })}
      </div>

      {/* Left Button */}
      <button 
        onClick={prevSlide}
        className='lg:h-[24px] lg:w-[24px] sm:h-[44px] h-[34px] sm:w-[44px] w-[34px] flex justify-center items-center rounded-full bg-[#3F8CFF] -translate-y-1/2 absolute left-0 top-1/2 hover:bg-[#2b7cee] transition-colors'
      >
        <FaChevronLeft className='text-white text-xs' />
      </button>

      {/* Right Button */}
      <button 
        onClick={nextSlide}
        className='lg:h-[24px] lg:w-[24px] sm:h-[44px] h-[34px] sm:w-[44px] w-[34px] flex justify-center items-center rounded-full bg-[#3F8CFF] -translate-y-1/2 absolute right-0 top-1/2 hover:bg-[#2b7cee] transition-colors'
      >
        <FaChevronRight className='text-white text-xs' />
      </button>

    </div>
  )
}

export default ComicSliderImages;