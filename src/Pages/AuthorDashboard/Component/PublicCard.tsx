import React from 'react'
import { TbThumbUpFilled } from "react-icons/tb";
import { RiEyeFill } from "react-icons/ri";

interface PublicCardProps {
     cardImage:string;
     publishedDate:string;
     comicType:string;
     comicTitle:string;
     AuthorName:string;
     Likes:string;
     Views:string;
     stars:string[];
}





const PublicCard:React.FC<PublicCardProps> = ({cardImage,publishedDate,comicType,comicTitle,AuthorName,Likes,Views,stars}) => {
  return (
        <div className='rounded-[10px] h-[370px] w-[370px] p-[24px] overflow-hidden relative cursor-pointer group'> 
               
              <img src={cardImage} className={`absolute z-[-10] left-0 top-0 h-full w-full scale-[1.1] transform duration-300 group-hover:scale-[1.2]`}/>

              <div className='bg-gradient-to-b from-[#0C0F1400] to-[#040914] h-full w-full absolute left-0 top-0 z-[-5] 
                              group-hover:bg-gradient-to-b group-hover:from-[#0C0F1400] group-hover:to-[#484848]
                              transition-colors duration-300
                             after:content-[" "] after:absolute after:rotate-315 
                              after:w-20 after:h-[160%] after:backdrop-blur after:bg-white/20 after:bottom-[-140%] group-hover:after:bottom-[100%]
                              group-hover:after:left-[70%] after:left-[15%] after:transform after:duration-500 '/>

              <div className='w-full h-full flex flex-col justify-between'>

                <div>
                   <p className='text-[#E1E1E1] text-[12px]'>
                      published on
                   </p>
                   <p className='text-[#FFFFFF] text-[15px] font-normal'>
                     {publishedDate}
                   </p>
                 </div>

                 <div>
                   <p className='text-[#FEB705] text-[16px] font-normal'> {comicType} </p>
                   <h1 className='text-[20px] font-bold mt-[4px]'>{comicTitle}</h1>
                   <p className='text-[16px] font-normal mt-[4px]'>{AuthorName}</p>
                   <div className='flex justify-between mt-[16px]'>
                   <p className='text-[16px] flex gap-[16px]'>
                    <span className='flex items-center gap-[4px]'><TbThumbUpFilled size={21}/> {Likes} </span>
                    <span className='flex items-center gap-[4px]'><RiEyeFill size={21}/> {Views} </span>
                   </p>

                    <div className='flex gap-[7px] items-center'>
                        {stars.map((item,index) => (
                          <img key={index}
                               src={item} className='h-[17px] w-[18.56]'/>
                        ))}
                    </div>

                   </div>
                 </div>

              </div>

            </div>
  )
}

export default PublicCard