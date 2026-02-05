import React from "react";
import Container from "../../../Components/layout/Container";
import ComicCard from "../../../Components/layout/ComicCard";
import CircleShadow from "../../../Components/layout/CircleShadow";

const comics = [
  {
    image: "/Images/image1.png",
    title: "Metaverse Game",
    category: "Action",
    author: "The Salvaro",
    authorImage: "/Images/auther.png",
    tickImage: "/Images/tick.png",
    menuIcon: "/Images/dots.png",
  },
  {
    image: "/Images/image 2.png",
    title: "Metaverse Game",
    category: "Action",
    author: "The Salvaro",
    authorImage: "/Images/auther.png",
    menuIcon: "/Images/dots.png",
  },
  {
    image: "/Images/image 3.png",
    title: "Metaverse Game",
    category: "Action",
    author: "The Salvaro",
    authorImage: "/Images/auther.png",
    tickImage: "/Images/tick.png",
    menuIcon: "/Images/dots.png",
  },
  {
    image: "/Images/image 4.png",
    title: "Metaverse Game",
    category: "Action",
    author: "The Salvaro",
    authorImage: "/Images/auther.png",
    menuIcon: "/Images/dots.png",
  },
  {
    image: "/Images/image 5.png",
    title: "Metaverse Game",
    category: "Action",
    author: "The Salvaro",
    authorImage: "/Images/auther.png",
    menuIcon: "/Images/dots.png",
  },
  {
    image: "/Images/image 6.png",
    title: "Metaverse Game",
    category: "Action",
    author: "The Salvaro",
    authorImage: "/Images/auther.png",
    tickImage: "/Images/tick.png",
    menuIcon: "/Images/dots.png",
  },
];

const NewComics: React.FC = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
    <Container className=" text-white relative overflow-visible max-w-[1170px] xl:h-[1277px] h-auto mx-auto">
      
      <CircleShadow className="top-[-10%] right-[-42%]" />  

      {/* Heading + Button */}
      <div className="xl:w-full w-[90%] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4 md:gap-0 relative z-10">
        <h2 className="font-semibold text-[50px] leading-[100%] capitalize md:mx-0 mx-auto text-center md:mb-0 mb-5">
          New To Stagecomics
        </h2>
        <button
          className="w-[270px] h-[65px] bg-[#33D6FF] rounded-[40px] cursor-pointer
                     flex items-center justify-center md:mx-0 mx-auto
                     font-['Exo_2'] font-semibold text-[22px] leading-[100%] 
                     text-[#040914]"
        >
          See All
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center relative z-10">
        {comics.map((c, i) => (
          <ComicCard
            key={i}
            image={c.image}
            title={c.title}
            category={c.category}
            author={c.author}
            authorImage={c.authorImage}
            tickImage={c.tickImage}
            menuIcon={c.menuIcon}
          />
        ))}
      </div>
    </Container>
    </div>
  );
};

export default NewComics;
