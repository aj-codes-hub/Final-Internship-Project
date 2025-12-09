
import React from "react";

const AuthorHeroSection: React.FC = () => {
  const avatars = [
    "/Images/user1.png",
    "/Images/user2.png",
    "/Images/user3.png",
  ];

  return (
    <section className="relative xl:h-[700px] lg:h-[600px] h-auto py-10 lg:py-0 w-full max-w-[1920px] mx-auto bg-[#1B1813] flex justify-center items-center my-[200px]">
        <div className="flex lg:flex-row flex-col items-center justify-center md:w-full w-[90%] xl:gap-[100px] md:gap-[50px] max-w-[1170px]  px-10">
      <span
        className="absolute w-82 h-82 md:w-[371px] md:h-[365px] bg-[#FEB705] rounded-full blur-[150px] opacity-70"
        style={{ top: "180px", left: "22%" }}
      />

        <div className="text-center lg:text-left  z-10">

          <div className="flex justify-center lg:justify-start gap-3 xl:mb-[40px] mb-[20px]">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="avatar"
                className="xl:w-12 w-18 xl:h-12 h-18 rounded-full border border-white"
              />
            ))}
          </div>

          <h2 className="text-white text-[20px] md:text-[42px] xl:text-4xl font-light mb-[4px]">
            Become an Author
          </h2>

          <h1 className="text-white text-4xl md:text-[55px] font-semibold xl:mb-[63px] mb-[50px] lg:mb-[20px]">
            Write something here
          </h1>

          <button className="relative w-full lg:w-[90%] xl:h-[90px] h-[80px] mx-auto lg:mx-0 2xl:w-[570px] 2xl:h-[120px] flex items-center justify-between px-6 bg-white/20 rounded-full">
            <span className="text-white text-xl md:text-2xl 2xl:text-[30px] font-medium">
              BECOME AUTHOR
            </span>

            <span className="w-16 h-16 xl:w-20 xl:h-20  bg-[#FEB705] rounded-full flex items-center justify-center hover:scale-110 transition">
              <svg width="42" height="38" viewBox="0 0 42 38" fill="none">
                <path d="M25 9.5L34 19L25 28.5" stroke="#040914" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6 19H34" stroke="#040914" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </button>

        </div>

        <div className="mt-14 lg:mt-0 h-[350px] sm:h-[400px] md:h-[500px] lg:h-[500px] 2xl:h-[530px] lg:w-[45%] md:w-[60%] w-[75%] rounded-xl relative flex 2xl:justify-start justify-center">
          
          <div className="absolute h-[100%] w-[160%]">
          <img
            src="Images/Group6785.png"
            alt="Group6785"
            className="h-full w-full"
          />
          </div>

        </div>

        </div>
    </section>
  );
};

export default AuthorHeroSection;