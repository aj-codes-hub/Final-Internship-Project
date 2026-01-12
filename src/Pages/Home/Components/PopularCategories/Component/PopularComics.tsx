import React from 'react'
import Button from '../../../../../Components/layout/Button'

const PopularComics:React.FC = () => {

const CardData = [
    {
      Name:"The Frozen Player...",
      Views:"1.6m views",
      StarRate:[
        "/Icons/starFill.png",
        "/Icons/starFill.png",
        "/Icons/starFill.png",
        "/Icons/starFill.png",
        "/Icons/starFill.png",
      ]
    },
    {
      Name:"The Frozen Player...",
      Views:"1.6m views",
      StarRate:[
        "/Icons/starFill.png",
        "/Icons/starFill.png",
        "/Icons/starFill.png",
        "/Icons/starFill.png",
        "/Icons/starFill.png",
      ]
    },
    {
      Name:"The Frozen Player...",
      Views:"1.6m views",
      StarRate:[
        "/Icons/starFill.png",
        "/Icons/starFill.png",
        "/Icons/starFill.png",
        "/Icons/starFill.png",
        "/Icons/starFill.png",
      ]
    },
]


  return (
    <div className='flex flex-col gap-[32px] w-full sm:h-[676px] rounded-[20px]'>
       
       {CardData.map((item, index) => (
         <div  key={index}
               className='w-full rounded-[20px] bg-[#0F141E] p-[16px] flex sm:flex-row flex-col gap-[16px] sm:h-[204px]'>
        
          <div className='rounded-[20px] sm:w-[220px] w-full h-[140px] sm:h-full overflow-hidden'>
           <img src="Images/GirlWithWings.jpg"
                className='h-full w-full scale-110' />
          </div>

          <div className='sm:h-full'>
            
           <div className='text-[12px] w-[94px] bg-[#202A3E] text-[#ffff] rounded-full px-[27px] py-[5px] mb-[8px]'>
                                Action
           </div>

            <h1 className='sm:text-[18px] text-[22px] font-medium mb-[2px]'>
                {item.Name}
            </h1>
            <p className='sm:text-[12px] text-[16px] mb-[8px]'>
                {item.Views}
            </p>
             
             <div className='flex gap-[4.6px]'>
             {item.StarRate.map((star, i)=>(
                 <img key={i}
                      src={star} 
                      className='mb-[20px] text-[12px]' />
             ))}
             </div>
                

            <Button title='Read'
                    className='bg-transparent border-2 sm:w-[202px] w-full border-[#33D6FF] text-[#33D6FF] font-semibold h-[48px]'
             />

          </div>
        </div>
       ))}

    </div>
  )
}

export default PopularComics