import React from "react";
import SilSil from "../../../assets/images/SilSil.png";
import JerryM from "../../../assets/images/JerryM.png";
import FrozenPlayer from "../../../assets/images/frozen-player.png";
import Stars from "../../../assets/images/stars.jpg";
import ArtworkScroll from '../Components/ArtworkScroll'
import CircleShadow from "../../../Components/layout/CircleShadow";


const TrendingSection: React.FC = () => {
  const users = [
    { name: "@SilSil", img: SilSil },
    { name: "@JerryM", img: JerryM },
  ];

  return (
 <section className="relative w-full h-auto md:h-[900px] xl:h-[1000px] 2xl:h-[1100px] max-w-[1920px] mx-auto bg-[#FFFFFF0F] flex flex-col gap-[68px] 
                  text-white  overflow-hidde">      

      <CircleShadow className="-bottom-20 left-0" />
      <CircleShadow className="top-[50%] left-[55%]" />

      <div className="h-[30%] border border-[#fff0] relative">
       
      <ArtworkScroll />  

      <h2 className=" font-extrabold tracking-tight text-center md:text-left
                        text-[35px]      ml-0         mt-[184px]
                     md:text-[45px]   md:ml-[600px]   md:mt-[84px]
                     lg:text-[55px]   lg:ml-[820px]
                     xl:text-[65px]   xl:ml-[990px]
                     2xl:text-[75px]  2xl:ml-[1090px]

      ">
        Trending Now
      </h2>
      </div>


      <div className="flex flex-col md:flex-row items-center justify-end overflow-hidden h-[70%] px-3 md:px-0
                      gap-[50px] 
                      md:gap-[50px] 
                      lg:gap-[88px] 
                      xl:gap-[98px] 
                      2xl:gap-[108px] 
      ">

        <div className="flex flex-col lg:w-[550px] md:w-[550px] w-[98%] md:ml-[30px] overflow-hidden">

          <div className="flex flex-col lg:flex-row items-center lg:gap-6  md:gap-2 sm:gap-4 gap-2 md:mr-auto mx-auto md:mx-0 w-[80%] lg:w-auto">
            {users.map((user, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-26 py-2 rounded-full backdrop-blur-md bg-white/10 relative w-full"
              >
                <div className="flex items-center gap-3 ml-[-95px]">
                  <img src={user.img} className="w-[59px] h-[59px] border-2 border-white rounded-full" />
                  <span className="font-semibold text-[20px]">{user.name}</span>
                </div>
              </div>
            ))}
          </div>

          <h3 className="2xl:text-[40px] text-[30px] text-center md:text-left font-semibold mt-[37px] md:mt-[17px] lg:mt-[37px]  mb-[27px] md:mb-[15px] lg:mb-[27px]">
            The Frozen Player Returns
          </h3>

          <div className="flex items-center gap-[28px] justify-center md:justify-start ">
            <img src={Stars} alt="Stars" className="w-[120px] h-[17px]" />
            <p className="text-white/90 font-semibold text-[18px]">Action · fantasy</p>
          </div> 

          <div className="flex items-center md:gap-[32px] sm:gap-[22px] gap-[14px] text-white/90 font-semibold text-[18px] my-2 justify-center md:justify-start ">
            <span className="text-center">1.6m views</span>
            <span className="text-center">42.1k subscribers</span>
            <span className="text-center">146k likes</span>
          </div>


          <p className="text-white/70 text-[20px] leading-[34px] text-center md:text-left">
            At the age of eight, Ijin Yu lost his parents in a plane crash and became stranded in a foreign land, forced to become a child
            mercenary in order to survive. He returns home ten years later to be ...
          </p>


          <div className="md:flex-row flex flex-col items-center justify-between mt-[28px] w-[95%] mx-auto">
            <button className="md:px-[27px] lg:px-[37px] px-[37px] md:py-[14px] lg:py-[24px] py-[24px] text-[20px] rounded-full border border-[#33D6FF] text-[#33D6FF] hover:bg-[#0D2A45] transition">
              Read Now
            </button>

            <div className="flex items-center gap-[21px] md:gap-[12px] lg:gap-[21px] mt-[30px] md:mt-0">

             <div className="rounded-full bg-[#FFFFFF17] flex justify-center items-center
                             h-[66px]    w-[66px] 
                             md:h-[60px] md:w-[60px] 
                             lg:h-[66px] lg:w-[66px] 
             
             ">
               <img src="/Icons/icons_heart.png" />
             </div>
             <div className="h-[66px] w-[66px] rounded-full bg-[#FFFFFF17] flex justify-center items-center">
               <img src="/Icons/icons_twitter.png" />
             </div>
             <div className="h-[66px] w-[66px] rounded-full bg-[#FFFFFF17] flex justify-center items-center">
               <img src="/Icons/icons_instagram.png" />
             </div>
             
            </div>
          </div>
        </div>


        <div className="md:w-[50vw] w-full max-w-[886px] md:h-full h-[600px] mt-[1px] rounded-tl-[60px] overflow-hidden">
          <img 
            src={FrozenPlayer}
            alt="Frozen Player"
            className="h-[170%] w-full shadow-[0_0_50px_rgba(0,0,0,0.7)]"
          />
        </div>
      </div>
    </section>
  );
};
export default TrendingSection;
