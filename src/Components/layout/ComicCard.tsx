import React, { useState } from "react";

interface ComicCardProps {
  image: string;
  title: string;
  category: string;
  author: string;
  authorImage: string;
  tickImage?: string;
  menuIcon: string; 
}

const ComicCard: React.FC<ComicCardProps> = ({
  image,
  title,
  category,
  author,
  authorImage,
  tickImage,
  menuIcon,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-[350px] h-[569px] rounded-[12px] bg-[#121721CC] opacity-100 overflow-hidden p-4 shadow-lg hover:scale-[1.02] transition relative">
      
      {/* Author Section */}
      <div className="flex items-center justify-between mb-10 relative">
        <div className="flex items-center">
          <div className="relative">
            <img
              src={authorImage}
              alt="author"
              className="w-[50px] h-[50px] rounded-full"
            />
            {tickImage && (
              <img
                src={tickImage}
                alt="tick"
                className="w-[20px] h-[20px] absolute -bottom-[5px] right-[-5px]"
              />
            )}
          </div>
          <p className="ml-3 font-['Exo_2'] font-semibold text-[18px] leading-[20px] text-white">
            {author}
          </p>
        </div>

        {/* Menu Icon */}
        <div className="relative">
          <img
            src={menuIcon}
            alt="menu"
            className="w-[25px] h-[5px] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <div className="absolute right-0 top-[25px] bg-[#121721CC] rounded-md shadow-lg w-40 text-white z-50">
              <button className="w-full text-left px-4 py-2 hover:bg-[#2e3b4c]">Add to Favorites</button>
              <button className="w-full text-left px-4 py-2 hover:bg-[#2e3b4c]">Share</button>
              <button className="w-full text-left px-4 py-2 hover:bg-[#2e3b4c]">Download</button>
              <button className="w-full text-left px-4 py-2 hover:bg-[#2e3b4c]">Report</button>
            </div>
          )}
        </div>
      </div>

      {/* Comic Image */}
      <img
        src={image}
        alt={title}
        className="w-[320px] h-[262px] rounded-[12px] object-cover"
      />

      {/* Title */}
      <h3 className="font-['Exo_2'] font-bold text-[26px] leading-[100%] text-white mt-4 w-[219px] h-[32px]">
        {title}
      </h3>

      {/* Ratings + Category */}
      <div className="flex items-center  mt-2">
        <img src="/Images/star.png" alt="star" className="w-[18.5px] h-[17px] mr-[5px]" />
        <img src="/Images/star.png" alt="star" className="w-[18.5px] h-[17px] mr-[5px]" />
        <img src="/Images/star.png" alt="star" className="w-[18.5px] h-[17px] mr-[5px]" />
        <img src="/Images/star.png" alt="star" className="w-[18.5px] h-[17px] mr-[5px]" />
        <img src="/Images/star.png" alt="star" className="w-[18.5px] h-[17px]" />

        <p className="ml-10 font-['Exo_2'] font-semibold text-[18px] leading-[100%] text-white">
          {category}
        </p>
      </div>

      {/* Read Now Button */}
      <button className="mt-15 w-[324px] cursor-pointer h-[45px] bg-[#33D6FF] rounded-[50px] flex items-center justify-center hover:bg-[#1bb7ef] transition">
        <span className="font-['Exo_2'] font-semibold text-[16px] leading-[100%] text-black text-center">
          Read Now
        </span>
      </button>
    </div>
  );
};

export default ComicCard;
