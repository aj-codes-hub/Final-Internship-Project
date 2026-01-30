import React from 'react'

const Error:React.FC = () => {
  return (
   <div className="p-8 text-white h-screen w-full flex justify-center items-center">
      
        <h1 className="font-bold text-[#4c4b4b] text-center uppercase">
          <span className="md:text-[80px] text-[50px] md:px-[70px] px-[30px]  bg-[#ff000041] rounde-full">ERROR !</span> <br/>
          <span className="md:text-[200px] text-[140px] border-b md:leading-60 leading-50">404</span> <br/>
          <span className="md:text-[50px] text-[30px] font-semibold">Page not found</span>
        </h1>
      
    </div>
  )
}

export default Error