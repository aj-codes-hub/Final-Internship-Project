import React from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import './index.css';
import Home from "./Pages/Home/Home";
import CmmicFullEP from './Pages/ComicHere/ComicPage';
import Footer from './Components/layout/Footer/Footer';
import HeaderAndNav from './Pages/HeaderAndNav';
import ReadComic from './Pages/ReadComic/ReadComic';
import ScrollToTop from './hooks/NotScrolled';
import Explore from './Pages/Explore/Explore';
import AuthorProfilePage from './Pages/AuthorDashboard/AuthorProfilePage';


const App:React.FC = () => {


  return (
    <BrowserRouter>
      <HeaderAndNav/>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/explore' element={<Explore /> } />
          <Route path="/comic" element={<CmmicFullEP /> } />
          <Route path="/read-comic/:episodeId" element={<ReadComic />} />
          <Route path="/author-dashboard" element={<AuthorProfilePage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
5