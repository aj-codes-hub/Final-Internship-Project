
import React from "react";

const AuthorHeroSection: React.FC = () => {
  const avatars = [
    "/Images/user1.png",
    "/Images/user2.png",
    "/Images/user3.png",
  ];

  return (
    <section className="relative w-full bg-[#1B1813] py-16 md:py-24 overflow-hidden flex items-center justify-center">

      <span
        className="absolute w-72 h-72 md:w-[371px] md:h-[365px] bg-[#FEB705] rounded-full blur-[150px] opacity-70"
        style={{ top: "150px", left: "20%" }}
      />

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">

        <div className="text-center lg:text-left max-w-xl z-10">

          <div className="flex justify-center lg:justify-start gap-3 mb-10">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="avatar"
                className="w-12 h-12 rounded-full border border-white"
              />
            ))}
          </div>

          <h2 className="text-white text-3xl md:text-4xl font-light mb-2">
            Become an Author
          </h2>

          <h1 className="text-white text-4xl md:text-5xl font-semibold mb-10">
            Write something here
          </h1>

          <button className="relative w-full max-w-md h-[90px] mx-auto lg:mx-0 flex items-center justify-between px-6 bg-white/20 rounded-[50px]">
            <span className="text-white text-xl md:text-2xl font-medium">
              BECOME AUTHOR
            </span>

            <span className="w-14 h-14 md:w-20 md:h-20 bg-[#FEB705] rounded-full flex items-center justify-center hover:scale-110 transition">
              <svg width="42" height="38" viewBox="0 0 42 38" fill="none">
                <path d="M25 9.5L34 19L25 28.5" stroke="#040914" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6 19H34" stroke="#040914" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </button>

        </div>

        <div className="mt-14 lg:mt-0  w-full max-w-lg h-[300px] md:h-[400px] lg:h-[500px] rounded-xl ">

          <img
            src="Images/Group6785.png"
            alt="Group6785"

          />

        </div>

      </div>
    </section>
  );
};

export default AuthorHeroSection;