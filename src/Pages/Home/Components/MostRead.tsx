import { useState } from "react";
import Container from "../../../Components/layout/Container";
import CircleShadow from "../../../Components/layout/CircleShadow";

type TabType = "this Week" | "this Month" | "this year" | "All time";
type Comic = { title: string; views: string };

const dataByTab: Record<TabType, Comic[]> = {
  "this Week": [
    { title: "Comic 1", views: "55.2k Views" },
    { title: "Comic 2", views: "47.9k Views" },
    { title: "Comic 3", views: "39.1k Views" },
    { title: "Comic 4", views: "28.4k Views" },
    { title: "Comic 5", views: "19.7k Views" },
    { title: "Comic 6", views: "10.2k Views" },
  ],
  "this Month": [
    { title: "Comic 1", views: "443.4k Views" },
    { title: "Comic 2", views: "403.4k Views" },
    { title: "Comic 3", views: "333.4k Views" },
    { title: "Comic 4", views: "200.4k Views" },
    { title: "Comic 5", views: "123.5k Views" },
    { title: "Comic 6", views: "68.3k Views" },
  ],
  "this year": [
    { title: "Comic 1", views: "1.1M Views" },
    { title: "Comic 2", views: "940.3k Views" },
    { title: "Comic 3", views: "315.4k Views" },
    { title: "Comic 4", views: "600.4k Views" },
    { title: "Comic 5", views: "480.5k Views" },
    { title: "Comic 6", views: "320.3k Views" },
  ],
  "All time": [
    { title: "Comic 1", views: "5.2M Views" },
    { title: "Comic 2", views: "4.7M Views" },
    { title: "Comic 3", views: "4.3M Views" },
    { title: "Comic 4", views: "3.9M Views" },
    { title: "Comic 5", views: "3.2M Views" },
    { title: "Comic 6", views: "2.6M Views" },
  ],
};

const tabs: TabType[] = ["this Week", "this Month", "this year", "All time"];

const images = [
  "/Images/Read1.png",
  "/Images/Read2.png",
  "/Images/Read3.png",
];

const MostRead = () => {
  const [activeTab, setActiveTab] = useState<TabType>("this Month");
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);

  const ordered = [
    images[index],
    images[(index + 1) % 3],
    images[(index + 2) % 3],
  ];

  return (
    <Container className="w-full max-w-[1920px]  mx-auto my-[200px] px-3 xl:px-0">
      <div className="w-[full] max-w-[1274px] lg:h-[645px] h-auto text-white relative mx-auto overflow-visible ">


        <CircleShadow className="-left-10 top-[40%] z-[45] h-[10px] w-[10px]"/>

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[49px] mb-[49px] relative z-10 max-w-[1170px] mx-auto">
          <h2 className="text-[50px] font-semibold mx-auto md:mx-0">Most Read</h2>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-[37px]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[22px] font-medium transition-all ${
                  activeTab === tab
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-cyan-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="flex lg:flex-row flex-col gap-[45px] xl:gap-[91px] items-center relative z-10 max-w-[1170px] mx-auto">

          {/* LEFT SLIDER */}
          <div className="relative w-full max-w-[670px] h-[536px] overflow-visible">

{/* BUBBLE NEXT TO FIRST IMAGE */}
          <div
            className="
              absolute
              w-[298px] h-[150px]
              left-[10px]      /* adjust to position bubble horizontally next to first image */
              top-1/2
              -translate-y-1/2
              rounded-full
              flex justify-center
              blur-[130px] jk
              z-10            /* make sure it's above background but behind the image if needed */
            "
            style={{
              background: "linear-gradient(119.99deg, rgba(51,214,255,0.5) 21.9%, rgba(207,245,255,0.5) 125.17%)",
            }}
          />
            {/* BIG IMAGE */}
            <img
              key={ordered[0]}
              src={ordered[0]}
              className="absolute rounded-2xl object-cover shadow-xl transition-all duration-700 z-30
                         w-[252px] h-[426px]
                         sm:w-[352px] sm:h-[536px]
              "
            />

            {/* MIDDLE IMAGE */}
            <img
              key={ordered[1]}
              src={ordered[1]}
              className="absolute  top-[42px] rounded-2xl object-cover opacity-90 shadow-lg transition-all duration-700 z-20
                         w-[252px] h-[344px]         left-[16%]
                         sm:w-[352px] sm:h-[454px]   sm:left-[153px]
              "
            />

            {/* SMALL IMAGE */}
            <img
              key={ordered[2]}
              src={ordered[2]}
              className="absolute top-[68px] rounded-2xl object-cover transition-all duration-700 z-15
                         w-[252px] h-[287px]        left-[25%]
                         sm:w-[352px] sm:h-[397px]  sm:left-[284px]
              "
            />

            {/* NEXT BUTTON */}
            <button
              onClick={nextSlide}
              className="absolute md:top-1/2 top-[40%] -translate-y-1/2 sm:right-1 right-[25%] w-[64px] h-[64px] rounded-full bg-[#33D6FF] shadow-[20px_14px_60px_0px_rgba(0,0,0,0.05)] flex items-center justify-center z-40 hover:bg-cyan-300"
            >
              <img src="/Images/path.png" alt="Next" className="w-[15px] h-[24px]" />
            </button>
          </div>

          {/* RIGHT LIST */}
          <div className="flex flex-col h-[444px] text-white border-[#263556] px-4 md:px-0
                          w-[97%] 
                          md:w-[70%]
                          lg:w-[403px] 
          
          ">
            {dataByTab[activeTab].map((comic: Comic, index: number) => (
              <div key={index} className="flex items-center justify-between border-b py-[14px] border-gray-700">
                <span className="text-[24px] font-light">{comic.title}</span>
                <span className="text-[28px] font-semibold">{comic.views}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </Container>
  );
};

export default MostRead;
