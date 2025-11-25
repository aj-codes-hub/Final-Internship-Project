import React from 'react'

interface ButtonProps{
  title:string 
  className?:string
}

const Button:React.FC<ButtonProps> = ({title,className}) => {
  return (
    <button className={`rounded-full transform duration-200
                        button-custom-hover cursor-pointer
                        text-[12px]     px-[16px]      py-[6px]
                        md:text-[13px]  md:px-[20px]   md:py-[6px]
                        lg:text-[14px]  lg:px-[36px]   lg:py-[9px]
                        xl:text-[15px]  xl:px-[46px]   xl:py-[11px]
                        2xl:text-[16px] 2xl:px-[56px]  2xl:py-[15px]
                       
                       
                       ${className}`}>
       {title}
    </button>
  )
}

export default Button