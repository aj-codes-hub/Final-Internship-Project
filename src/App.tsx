import React from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import './index.css';
import Home from "./Pages/Home/Home";
import CmmicFullEP from './Pages/ComicHere/ComicPage';
import Footer from './Components/layout/Footer/Footer';
import HeaderAndNav from './Pages/HeaderAndNav';
import ReadComic from './Pages/ReadComic/ReadComic';
import ScrollToTop from './hooks/NotScrolled';


const App:React.FC = () => {


  return (
    <div className='w-full max-w-[1920px] mx-auto overflow-hidden'>
    <BrowserRouter>
      <HeaderAndNav/>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path="/Comic" element={<CmmicFullEP /> } />
          <Route path="/ReadComic/:episodeId" element={<ReadComic />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App
