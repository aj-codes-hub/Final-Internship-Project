import React from 'react'
import Header from '../../Components/layout/Header/header'
import Footer from '../../Components/layout/Footer/Footer'
import HeroSection from './Components/HeroSection/HeroSection'
import StageComicsCardSection from './Components/StageComicsCardSection/StageComicsCardSection'
import CategorySection from './Components/CategorySection'
import TrendingSection from './Components/TrendingSection'
import NewComics from './Components/NewComic';
import MostRead from './Components/MostRead';
import AuthorHeroSection from './Components/AuthorHeroSection'
import TopAuthorSection from './Components/TopAuthorSections'


const Home:React.FC = () => {
  return (
    <div  className='max-w-[1920px] w-full mx-auto overflow-hidden'>
      <Header />
       <HeroSection />
        <CategorySection />
         <TrendingSection />

           <StageComicsCardSection />
           <NewComics />
         
         <MostRead />
        <AuthorHeroSection />
       <TopAuthorSection /> 
      <Footer /> 
    </div>
  )
}

export default Home