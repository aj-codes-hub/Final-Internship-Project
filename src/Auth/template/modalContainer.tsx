import React, { type ReactNode } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

interface modalContainerProps {
    className?:string;
    children?:ReactNode;
    onClose?:() => void;
}

const ModalContainer:React.FC<modalContainerProps> = ({className,children, onClose}) => {
  return (
    <div className={`fixed inset-0 overflow-y-auto z-50 overflow-hidden ${className}`}>
      <div 
        onClick={onClose}
        className='bg-black/10 backdrop-blur inset-0 fixed'
      />

      <div className='flex justify-center items-center min-h-screen p-4 relative z-50'>
        <div className='bg-[#1D212B] relative flex gap-4 transform transition-all sm:rounded-[20px] rounded-[15px]'>
          <button 
            onClick={onClose}
            className='text-[50px] absolute md:right-[-64px] p-4 md:p-0 right-0 top-0 cursor-pointer text-white transition-colors z-50'
          >
            <IoIosCloseCircleOutline className='md:block hidden'/> 
            <RxCross1 className='md:hidden block text-[30px]'/>
          </button>

          {children}
        </div>
      </div>
    </div>
  )
}

export default ModalContainer