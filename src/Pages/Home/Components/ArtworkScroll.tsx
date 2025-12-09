import card1 from "../../../assets/images/card-1.png";
import card2 from "../../../assets/images/card-2.png";
import card3 from "../../../assets/images/card-3.png";

const images = [card1, card2, card3];

const ArtworkScroll = () => {
  return (
    <div className="absolute md:bottom-10 bottom-30 w-full max-w-[1920px] mx-auto md:-mt-30  z-20 overflow-x-auto flex scrollbar-hide">
      

      <div className="flex md:gap-[34px] lg:gap-[40px] gap-[10px] sm:gap-[20px] overflow-hidden px-6 md:px-20 z-10">
        {images.map((img, i) => (
          <div
            key={i}
            className={`group relative rounded-3xl overflow-hidden shadow-xl flex-shrink-0 cursor-pointer ${
              i === 0 ? "md:-ml-[290px] lg:-ml-[325px] -ml-[120px]" : ""
            }`}
          >
            <img
              src={img}
              className="object-cover transition-all duration-700 group-hover:scale-110 rounded-3xl
                         w-[30vw]      h-[50vw]
                         sm:w-[200px]  sm:h-[300px]
                         md:w-[230px]  md:h-[350px]
                         lg:w-[300px]  lg:h-[430px]
                         xl:w-[350px]  xl:h-[480px]
                         2xl:w-[400px] 2xl:h-[530px]
              "
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-3xl" />

            <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-400/50 to-purple-500/50 bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-500 " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtworkScroll;
