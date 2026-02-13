import React, { useEffect, useState } from 'react'
import Button from '../Button'
import Navbar from './navbar'
import { LuMenu } from "react-icons/lu";
import MobileMenu from './MobileMenu'
import { IoClose } from "react-icons/io5";
import SearchToggle from './SearchBar'
import { useNavigate } from 'react-router-dom';

interface HeaderProps{
  onClick?:() => void;
  currentUser?: any | null ;
}


const Header:React.FC<HeaderProps> = ({onClick,currentUser}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [IsShow, setIsShow] = useState(false);

  const handleMenuOpen = () => {

    setIsShow(!IsShow);
  }

 const navigate = useNavigate()

 const handleNavigateToHome = () => {
  navigate('/')
 }


const navigateToDashboard = () => {
  if(currentUser?.role === "author" ) {
    navigate('/author-dashboard')
  }

  else if(currentUser?.role === "user" ) {
    navigate('/')
  }
}


  return (
    <div className={`flex w-full lg:left-1/2 lg:-translate-x-1/2 max-w-[1950px] sm:h-[100px] h-[80px] md:h-[66px] z-[50] fixed
                     items-center px-[24px] md:px-[40px] lg:px-[70px] py-2 transform duration-500 ${
                     isSticky ? "top-0 bg-black" : "md:top-[23px] top-[3px] bg-transparent"
                     }`}>

      <img onClick={handleNavigateToHome}
           src="/Logo/header-Logo.png"
           alt="logo" 
           className='w-[134px] cursor-pointer pr-2 md:w-[164px] xl:w-[184px] h-[12px] md:h-[18px]  xl:h-[18px]'
      />
      
      <Navbar className='text-[.9rem] hidden lg:flex
                         ml-[31px]
                         md:ml-[41px] 
                         lg:ml-[51px] 
                         xl:ml-[61px] 
                         2xl:ml-[71px]
      '/>
     
      <div className='flex lg:ml-auto
                      gap-[6px] 
                      md:gap-[8px] 
                      lg:gap-[12px] 
                      xl:gap-[16px] 
       
      '>

        <SearchToggle/>
        
      {!currentUser && (
        <Button title='Sign In'
                className='border bg-[#33D6FF] text-[#212A4D] font-bold hidden lg:block'
                onClick={onClick}
        />
      )}

      {currentUser?.role === "author" && (
        <Button title='Publish your Work'
                className='border bg-[#FEB705] text-[#040914] font-bold hidden lg:block'
        />
      )}
      
      {currentUser && (
        <button className='h-[54px] w-[54px] rounded-full flex justify-center items-center overflow-hidden cursor-pointer'
                onClick={navigateToDashboard}>
            <img src={currentUser.profileImg} className='h-full w-full scale-[1.4]'/>   
        </button>          
      )}
      
      </div>

      <button onClick={handleMenuOpen} className='lg:hidden ml-auto block'>
          {IsShow ? <IoClose size={40}/> : <LuMenu size={30}/>}
      </button>

     <MobileMenu onClick={onClick} className={`${IsShow ? "w-[80%] px-6" : "w-0"}`}/>
     

    </div>
  )
}

export default Header