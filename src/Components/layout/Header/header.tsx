import React, { useEffect, useState } from 'react'
import Button from '../Button'
import Navbar from './navbar'
import { LuMenu } from "react-icons/lu";
import MobileMenu from './MobileMenu'
import { IoClose } from "react-icons/io5";
import SearchToggle from './SearchBar'

const Header:React.FC = () => {
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

  const handleMenuOpen = () => {``

    setIsShow(!IsShow);
  }



  return (
    <div className={`flex w-full md:left-1/2 md:-translate-x-1/2 max-w-[1950px] h-[100px] md:h-[66px] z-[50] fixed
                     items-center px-[24px] md:px-[40px] lg:px-[70px] py-2 transform duration-500 ${
                     isSticky ? "top-0 bg-black" : "md:top-[23px] top-[3px] bg-transparent"
                     }`}>

      <img src="/Logo/header-Logo.png"
           alt="logo" 
           className='w-[134px] pr-2 md:w-[164px] xl:w-[184px] h-[12px] md:h-[18px]  xl:h-[18px]'
      />
      
      <Navbar className='text-[.9rem] hidden md:flex
                         ml-[31px]
                         md:ml-[41px] 
                         lg:ml-[51px] 
                         xl:ml-[61px] 
                         2xl:ml-[71px]
      '/>
     
      <div className='flex md:ml-auto
                      gap-[6px] 
                      md:gap-[8px] 
                      lg:gap-[12px] 
                      xl:gap-[16px] 
       
      '>
        <SearchToggle/>
        <Button title='Sign In'
                className='border bg-[#33D6FF] text-[#212A4D] font-bold hidden md:block'
        />
      </div>

      <button onClick={handleMenuOpen} className='md:hidden ml-auto block'>
          
          {IsShow ? <IoClose size={40}/> : <LuMenu size={30}/>}
      </button>

     <MobileMenu className={`${IsShow ? "w-[80%] px-6" : "w-0"}`}/>
     

    </div>
  )
}

export default Header