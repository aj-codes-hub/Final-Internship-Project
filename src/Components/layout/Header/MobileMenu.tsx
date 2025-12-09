import React from 'react'
import Button from '../Button'
import Navbar from './navbar'
;

interface MobileMenuPrpos {
    className?:string
}

const MobileMenu:React.FC<MobileMenuPrpos> = ({className}) => {

  return (
     <div className={`bg-black overflow-hidden flex flex-col h-full transform duration-300 fixed top-0 left-0 ${className}`}>
     <div className='flex justify-between'>

         <img src="/Logo/header-Logo.png"
           alt="logo" 
           className='mt-8 mb-4 w-[170px] h-[20px] '
      />

    </div>
        <Navbar className='mt-10 mb-2 text-[24px] flex-col gap-6 '/>

         <hr className='my-5 mr-8' />

        <div className='flex flex-col gap-4 w-[90%]'>
           <Button title='Sign In'
                className='border bg-[#33D6FF] text-[#212A4D] font-bold' 
          />
      </div>
     </div>
  )
}

export default MobileMenu