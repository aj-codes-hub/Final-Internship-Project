import React from "react";
import Container from "../../../Components/layout/Container";
import ComicCard from "../../../Components/layout/ComicCard";

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
    <Container className="py-10 text-white relative overflow-visible">
      
      {/* Top-right Bubble */}
      <div
        className="
          absolute
          w-[298px] h-[288px]
          top-0
          -right-40
          -translate-x-1/4 -translate-y-1/4
          rounded-full
          blur-[160px]
          z-0
        "
        style={{
          background:
            "linear-gradient(119.99deg, rgba(51,214,255,0.5) 21.9%, rgba(207,245,255,0.5) 125.17%)",
        }}
      />

      {/* Heading + Button */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4 md:gap-0 relative z-10">
        <h2 className="font-semibold text-[50px] leading-[100%] capitalize">
          New To Stagecomics
        </h2>
        <button
          className="w-[270px] h-[65px] bg-[#33D6FF] rounded-[40px] 
                     flex items-center justify-center
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
  );
};

export default NewComics;
