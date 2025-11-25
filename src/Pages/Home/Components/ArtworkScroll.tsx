import card1 from "../../../assets/images/card-1.png";
import card2 from "../../../assets/images/card-2.png";
import card3 from "../../../assets/images/card-3.png";

const images = [card1, card2, card3];

const ArtworkScroll = () => {
  return (
    <div className="relative w-full -mt-56 z-20 overflow-x-auto flex scrollbar-hide">
      
      {/* EXTENDED TOP BACKGROUND */}
      <div className="absolute -top-10  z-0"></div>

      <div className="flex gap-8 scale-[0.8] origin-top px-6 md:px-20 z-10">
        {images.map((img, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden rounded-3xl shadow-xl flex-shrink-0 cursor-pointer ${
              i === 0 ? "-ml-[460px]" : ""
            }`}
          >
            <img
              src={img}
              className="w-[420px] h-[556px] object-cover transition-all duration-700 group-hover:scale-110 rounded-3xl"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-3xl" />

            <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-400/50 to-purple-500/50 bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtworkScroll;
