import React from "react";
import SilSil from "../../../assets/images/SilSil.png";
import JerryM from "../../../assets/images/JerryM.png";
import FrozenPlayer from "../../../assets/images/frozen-player.png";
import Twitter from "../../../assets/images/twitter.jpg";
import Insta from "../../../assets/images/insta.jpg";
import Heart from "../../../assets/images/heart.jpg";
import Stars from "../../../assets/images/stars.jpg";

interface TrendingSectionProps { }

const IconButton: React.FC<{ imgSrc: string }> = ({ imgSrc }) => {
  return (
    <div className="relative w-[65.58px] h-[65.58px] rounded-full bg-white/10 flex items-center justify-center">
      <div className="w-[40px] h-[40px] rounded-full  flex items-center justify-center">
        <img src={imgSrc} className="w-6 h-6 object-contain" alt="icon" />
      </div>
    </div>
  );
};

const TrendingSection: React.FC<TrendingSectionProps> = () => {
  const users = [
    { name: "@SilSil", img: SilSil },
    { name: "@JerryM", img: JerryM },
  ];

  return (
 <section className="relative w-full h-[1038px]
bg-[#131822]
bg-gradient-to-b 
from-[#131822]
via-[#0b1522] 
to-[#0d1b2d] 
text-white px-20 py-28 pt-0 -mt-85 overflow-hidden">

  <div className="absolute bottom-0 left-[-1px] w-[293px] h-[288px] bg-gradient-to-br
     from-[rgba(51,214,255,0.5)]
     to-[rgba(207,245,255,0.5)]
     blur-[197px]
     rounded-full
     rotate-[177.74deg]"></div>
     <div className="
     absolute
     w-[292.9138px]
     h-[287.8050px]
     bottom-80
     left-[1088px]
     opacity-100
     rotate-[-177.74deg]
     bg-gradient-to-br
     from-[rgba(51,214,255,0.5)]
     to-[rgba(207,245,255,0.5)]
     blur-[197px]
     rounded-full"></div>


      {/* TRENDING TITLE */}
      <h2 className="text-[55px] ml-[850px] font-extrabold mb-50 mt-10 tracking-tight  gap-10px">
        Trending Now
      </h2>


      {/* MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row gap-5 ml-[250px] items-start justify-center ">
        {/* LEFT INFO COLUMN */}
        <div className="flex-1 space-y-6 mt-20">
          {/* USERS */}
          <div className="flex items-center gap-6">
            {users.map((user, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-26 py-3 rounded-full backdrop-blur-md bg-white/10 relative"
              >
                {/* INNER WRAPPER with negative margin to pull content to the left */}
                <div className="flex items-center gap-3 ml-[-95px]">
                  <img src={user.img} className="w-12 h-12 border-2 border-white rounded-full" />
                  <span className="font-semibold text-[20px]">{user.name}</span>
                </div>
              </div>
            ))}
          </div>


          {/* TITLE */}
          <h3 className="text-[40px] font-semibold leading-[70px]">
            The Frozen Player Returns
          </h3>

          {/* CATEGORY & STARS */}
          <div className="flex items-center gap-4">
            <img src={Stars} alt="Stars" className="w-[120px] h-[17px]" />
            <p className="text-white/90 font-semibold text-[18px]">Action · fantasy</p>

          </div>

          {/* STATS */}
          <div className="flex items-center gap-8 text-white/90 font-semibold">
            <span>1.6m views</span>
            <span>42.1k subscribers</span>
            <span>146k likes</span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-white/70 text-[20px] leading-[32px]">
            At the age of eight, Ijin Yu lost his parents in a plane crash and became stranded in a foreign land, forced to become a child mercenary in order to survive. He returns home ten years later to be ...
          </p>

          {/* BUTTON + SOCIAL ICONS */}
          <div className="flex items-center gap-8">
            <button className="px-10 py-3 rounded-full border border-[#33D6FF] text-[#33D6FF] hover:bg-[#0D2A45] transition text-lg">
              Read Now
            </button>

            <div className="flex items-center gap-4">
              <IconButton imgSrc={Twitter} />
              <IconButton imgSrc={Insta} />
              <IconButton imgSrc={Heart} />
            </div>
          </div>
        </div>

        {/* RIGHT MAIN IMAGE */}
        <div className="flex-1">
          <img
            src={FrozenPlayer}
            alt="Frozen Player"
            className="w-[886px] h-[709px] object-cover ml-[80px]  rounded-tl-[60px] shadow-[0_0_50px_rgba(0,0,0,0.7)]"
          />
        </div>
      </div>
    </section>
  );
};
export default TrendingSection;
