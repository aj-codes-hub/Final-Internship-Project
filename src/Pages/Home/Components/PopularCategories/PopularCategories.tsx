import React from 'react'
import Container from '../../../../Components/layout/Container'
import ReadFullComicCard from './Component/ReadFullComicCard'
import PopularComics from './Component/PopularComics'
import CoverCmoic from './Component/CoverComic/CoverCmoic'



const PopularCategories:React.FC = () => {
  return (
       <div className="max-w-[1920px] mx-auto">
    <Container className=" text-white relative overflow-visible max-w-[1170px] h-auto mx-auto">
      

      <div className="xl:w-full w-[90%] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between
                      mb-[60px] gap-4 md:gap-0 relative z-10 md:px-[100px]">
        <h2 className="font-semibold text-[50px] leading-[100%] capitalize md:mx-0 mx-auto text-center md:mb-0 mb-5">
         Popular Categories
        </h2>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] justify-center items-center relative z-10 
                      md:px-[100px] 
                      sm:px-[50px] 
                      px-[20px]">
        
        <ReadFullComicCard />
        
        <PopularComics />
       
      </div>

        <CoverCmoic />
        

    </Container>
    </div>
  )
}

export default PopularCategories