import React from "react";

const authors = [
  {
    id: 1,
    images: ["/Images/a1.jpg", "/Images/a2.jpg", "/Images/a3.jpg"],
    profile: "/Images/a6.jpg",
    name: "Kristin Watson",
    rating: 5,
  },
  {
    id: 2,
    images: ["/Images/b1.jpg", "/Images/b2.jpg", "/Images/b3.jpg"],
    profile: "/Images/abc.png",
    name: "Kristin Watson",
    rating: 5,
  },
  {
    id: 3,
    images: ["/Images/c1.jpg", "/Images/c2.jpg", "/Images/c3.jpg"],
    profile: "/Images/xyz.png",
    name: "Kristin Watson",
    rating: 5,
  },
  {
    id: 4,
    images: ["/Images/d1.jpg", "/Images/d2.jpg", "/Images/d3.jpg"],
    profile: "/Images/efg.png",
    name: "Kristin Watson",
    rating: 5,
  },
  {
    id: 5,
    images: ["/Images/e1.jpg", "/Images/e2.jpg", "/Images/e3.jpg"],
    profile: "/Images/mno.png",
    name: "Kristin Watson",
    rating: 3,
  },
  {
    id: 6,
    images: ["/Images/f1.jpg", "/Images/f2.jpg", "/Images/f3.jpg"],
    profile: "/Images/cde.png",
    name: "Kristin Watson",
    rating: 3,
  },
  {
    id: 7,
    images: ["/Images/g1.jpg", "/Images/g2.jpg", "/Images/g3.jpg"],
    profile: "/Images/klm.png",
    name: "Kristin Watson",
    rating: 3,
  },
  {
    id: 8,
    images: ["/Images/h1.jpg", "/Images/h2.jpg", "/Images/h3.jpg"],
    profile: "/Images/opq.png",
    name: "Kristin Watson",
    rating: 3,
  },
];

const TopAuthorsSection : React.FC= () => {
  return (
    <section className="xl:w-full w-[90%] mx-auto bg-[#0B0E16] mt-[100px] md:mb-[200px] mb-[50px]">
      <div className="md:max-w-[1170px] mx-auto ">
        
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight">
            Top Authors
          </h2>
                     
          <button className="bg-[#FEB705] hover:bg-[#ffff] px-12 sm:px-16 lg:px-20 py-3 sm:py-3.5 lg:py-4 text-[#0B0E16] font-bold rounded-full transition-all duration-300 text-base sm:text-lg lg:text-xl w-full sm:w-auto hover:scale-105 shadow-lg">
 
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 gap-6 sm:gap-5 lg:gap-6">
          {authors.map((author) => (
            <div
              key={author.id}
              className="bg-[#11141D] md:rounded-lg rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
            >
              <div className="flex gap-2 w-full">
                <img
                  src={author.images[0]}
                  alt={`${author.name} artwork 1`}
                  className="flex-1 h-[210px] rounded-tl-lg object-cover hover:opacity-90 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                />

                <div className="flex flex-col gap-2 w-auto">
                  <img
                    src={author.images[1]}
                    alt={`${author.name} artwork 2`}
                    className="w-[90px] h-[100px] rounded-tr-lg object-cover hover:opacity-90 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                  />
                  <img
                    src={author.images[2]}
                    alt={`${author.name} artwork 3`}
                    className="w-[90px] h-[100px] object-cover hover:opacity-90 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                  />
                </div>
              </div>

              <div className="p-4 flex items-center gap-3">
                <img
                  src={author.profile}
                  alt={author.name}
                />

                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold text-[15px] leading-tight truncate hover:text-[#FEB705] transition-colors cursor-pointer">
                      {author.name}
                    </span>
                    <span className ="font-thin"> (24)  </span>
                  </div>

                  <div className="flex items-center gap-[4px] text-[#FEB705] text-[15px] mt-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className="transition-transform hover:scale-110 cursor-pointer leading-none">
                        {i < author.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopAuthorsSection;