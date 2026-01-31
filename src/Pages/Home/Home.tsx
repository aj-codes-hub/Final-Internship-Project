import React from 'react'
import HeroSection from './Components/HeroSection/HeroSection'
import StageComicsCardSection from './Components/StageComicsCardSection/StageComicsCardSection'
import CategorySection from './Components/CategorySection'
import TrendingSection from './Components/TrendingSection'
import NewComics from './Components/NewComic';
import MostRead from './Components/MostRead';
import AuthorHeroSection from './Components/AuthorHeroSection'
import TopAuthorSection from './Components/TopAuthorSections'
import PopularCategories from './Components/PopularCategories/PopularCategories'
import HeroSection2 from './Components/HeroSection/HeroSection2'

const Home: React.FC = () => {

  return (
    <div className='max-w-[1920px] w-full mx-auto overflow-hidden'>
      <HeroSection />
      <HeroSection2 />
      <CategorySection />
      <TrendingSection />
      <StageComicsCardSection />
      <NewComics />
      <MostRead />
      <PopularCategories />
      <AuthorHeroSection />
      <TopAuthorSection />
    </div>
  )
}

export default Home;