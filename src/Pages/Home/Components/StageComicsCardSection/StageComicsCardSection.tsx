import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


const StageComicsCardSection:React.FC = () => {

const cardData = [
  { 
    id: 1, 
    imageUrl: "/Images/AnimeCard4.png",
    title: "The Last Samurai",
    genre: "Action · Fantasy",
    profileImage: "/Images/AnimeCardProFile.png",
    Styles:"left-1/2"
  },
  { 
    id: 2, 
    imageUrl: "/Images/AnimeCard4.png",
    title: "Dragon's Legacy",
    genre: "Adventure · Magic",
    profileImage: "/Images/Anime3.png",
    Styles:"top-[100%] left-1/2 rotate-180"
  },
  { 
    id: 3, 
    imageUrl: "/Images/AnimeCard6.png",
    title: "Cyber Shinobi",
    genre: "Sci-Fi · Ninja",
    profileImage: "/Images/Anime1.png",
    Styles:"top-[25%] left-[5%] rotate-300",
    imgStyle:"w-full h-[80%] scale-[1.3]"
  },
  { 
    id: 4, 
    imageUrl: "/Images/AnimeCard5.png",
    title: "The Last Samurai",
    genre: "Action · Fantasy",
    profileImage: "/Images/AnimeCardProFile.png",
    Styles:"top-[75%] left-[5%] rotate-240",
    imgStyle:"w-full h-[80%] transform scale-y-[1.3] -scale-x-[1.3]"
  },
  { 
    id: 5, 
    imageUrl: "/Images/AnimeCard6.png",
    title: "Dragon's Legacy",
    genre: "Adventure · Magic",
    profileImage: "/Images/Anime3.png",
    Styles:"top-[75%] rotate-120 left-[95%]",
    imgStyle:"w-full h-[80%] scale-[1.3]"
  },
  { 
    id: 6, 
    imageUrl: "/Images/AnimeCard5.png",
    title: "Cyber Shinobi",
    genre: "Sci-Fi · Ninja",
    profileImage: "/Images/Anime1.png",
    Styles:"left-[95%] top-[25%] rotate-60",
    imgStyle:"w-full h-[80%] transform scale-y-[1.3] -scale-x-[1.3]"
  },
];

    
const [rotateVal , setRotateVal] = useState(0)
const [ProfilleAndTitle , setProfilleAndTitle] = useState<number>(0)


const hangleRotateNext = () => {
      setRotateVal(rotateVal + 60);
      if(ProfilleAndTitle <= 4){
      setProfilleAndTitle(ProfilleAndTitle + 1)
      }
      else{
       setProfilleAndTitle(0)
      }
}


const hangleRotatePrev = () => {
      setRotateVal(rotateVal - 60);
      if(ProfilleAndTitle > 0){
      setProfilleAndTitle(ProfilleAndTitle - 1)
      }
      else{
       setProfilleAndTitle(5)
      }
}

  {}

  return (
    <div className='my-[100px]'>
   
       <div className="w-full max-w-[1230px] mx-auto">
        <h1 className="font-semibold text-center md:text-left text-[50px] ml-[15px] xl:ml-0">
          StageComics Originals
        </h1>
      </div>

      <div className='h-[750px] w-full relative pt-[200px] overflow-hidden'>

     <div className='absolute border-[3px] border-[#D3F85A] border-t-[0px] -translate-x-1/2 left-1/2 h-[1170px] w-[1170px] rounded-full transform duration-500 ' />

     <div className='absolute -translate-x-1/2 left-1/2 h-[1170px] w-[1170px] rounded-full transform duration-500'
          style={{rotate: `${rotateVal}deg`}}>
      

      {cardData.map((item,index)=>(
       <div key={index} 
            className={`w-[263px] h-[319px] flex items-center hover:scale-[1.04] transition duration-300 justify-center overflow-hidden border-white text-black absolute rounded-[20px] -translate-y-1/2 -translate-x-1/2 ${item.Styles}`}>
            <img src={item.imageUrl}
                 className={`${item.imgStyle}`}/>
        </div> 
      ))}
       

     </div>  

       
       <div className='rounded-full absolute overflow-hidden h-[80px] w-[80px] -translate-y-1/2 -translate-x-1/2 top-[46%] left-1/2'>
        <img src={cardData[ProfilleAndTitle].profileImage}/>
       </div>

      <div className='text-center absolute -translate-y-1/2 -translate-x-1/2 top-[62%] left-1/2'>
        <p className='text-[20px]'>
            {cardData[ProfilleAndTitle].genre} 
        </p>
        <h1 className='text-[32px] font-semibold'>
            {cardData[ProfilleAndTitle].title}
        </h1>
      </div>
        
      <div className='absolute flex gap-[45px] -translate-y-1/2 left-1/2 -translate-x-1/2 top-[80%] '>

      <button  onClick={hangleRotatePrev}
               className='border h-[80px] w-[80px] rounded-full flex items-center justify-center cursor-pointer transform duration-300 hover:bg-[#d3f85a29]'>
                <FaChevronLeft className='text-[#D3F85A]'/>
      </button>  

      <button  onClick={hangleRotateNext}
               className='border h-[80px] w-[80px] rounded-full flex items-center justify-center cursor-pointer transform duration-300 hover:bg-[#d3f85a29]'>
                <FaChevronRight className='text-[#D3F85A]'/>
      </button>

      </div>
      

      </div>
    </div>
  )
}

export default StageComicsCardSection