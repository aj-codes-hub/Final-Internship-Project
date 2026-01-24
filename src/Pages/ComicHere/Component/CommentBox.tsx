import React from 'react'
import { BiMessageRounded } from "react-icons/bi";
import { RiHeart3Line } from "react-icons/ri";



const CommentBox:React.FC = () => {
  return (
    <div>
      <div className='flex gap-[13px]'>
        <div>
          <div className='h-[30px] w-[30px] rounded-full overflow-hidden'>
            <img src="/Icons/UnknownPerson2.png" className='scale-[1.1]'/>
          </div>
         

        </div>
        <div>
         <div className='flex items-center h-[30px] gap-[13px]'>

           <h1 className='text-[15px] text-[#C0C0C0] font-bold'>Wanderer</h1>
           <p className='text-[15px] text-[#536471] font-normal flex items-center'>
             <span>@Lotus2051</span>
             <span className='h-[2px] rounded-full w-[2px] bg-[#536471] mx-[5px]'></span>
             <span>5h</span>
           </p>

         </div>

         <h1 className='text-[15px] text-[#BFBFBF]'>
            more power to you 
         </h1>

        </div>
      </div>

      <div className='ml-[33px] flex gap-[24px] text-[#B0B0B0] text-[13px] mt-[16px]'>
           <div className='flex gap-[14px]'>
               <RiHeart3Line size={22}/>
             <span>42</span>
            </div>
           <div className='flex gap-[14px]'>
            <BiMessageRounded size={22}/>
             <span>3</span>
           </div>
      </div>


      {/* Comment reply */}

    <div className='ml-[33px] gap-[24px] text-[#B0B0B0] text-[13px] mt-[16px] w-[237px]'> 

      <div className='bg-[#818181] w-[2px] h-[34px] ml-[14px] mb-[14px]' />

       <div className='flex gap-[13px]'>
        <div>
          <div className='h-[30px] w-[30px] rounded-full overflow-hidden'>
            <img src="/Icons/UnknownPerson2.png" className='scale-[1.1]'/>
          </div>

          <div className='bg-[#818181] w-[2px] h-[85px] ml-[14px] mt-[12px]' />

        </div>
        <div >
         <div className='flex items-center h-[30px] gap-[13px]'>

           <h1 className='text-[15px] text-[#C0C0C0] font-bold'>Wanderer</h1>
           <p className='text-[15px] text-[#536471] font-normal flex items-center'>
             <span>@Lotus2051</span>
             <span className='h-[2px] rounded-full w-[2px] bg-[#536471] mx-[5px]'></span>
             <span>5h</span>
           </p>

         </div>

         <h1 className='text-[15px] text-[#BFBFBF]'>
            more power to you 
         </h1>

          <div className='flex gap-[24px] text-[#B0B0B0] text-[13px] mt-[16px]'>
           <div className='flex gap-[14px]'>
               <RiHeart3Line size={22}/>
             <span>42</span>
            </div>
           <div className='flex gap-[14px]'>
            <BiMessageRounded size={22}/>
             <span>3</span>
           </div>
          </div>

        </div>
      </div>

      
       <div className='flex gap-[13px]'>
        <div>
          <div className='h-[30px] w-[30px] rounded-full overflow-hidden'>
            <img src="/Icons/UnknownPerson2.png" className='scale-[1.1]'/>
          </div>

        </div>
        <div >
         <div className='flex items-center h-[30px] gap-[13px]'>

           <h1 className='text-[15px] text-[#C0C0C0] font-bold'>Wanderer</h1>
           <p className='text-[15px] text-[#536471] font-normal flex items-center'>
             <span>@Lotus2051</span>
             <span className='h-[2px] rounded-full w-[2px] bg-[#536471] mx-[5px]'></span>
             <span>5h</span>
           </p>

         </div>

         <h1 className='text-[15px] text-[#BFBFBF]'>
            more power to you 
         </h1>

          <div className='flex gap-[24px] text-[#B0B0B0] text-[13px] mt-[16px]'>
           <div className='flex gap-[14px]'>
               <RiHeart3Line size={22}/>
             <span>42</span>
            </div>
           <div className='flex gap-[14px]'>
            <BiMessageRounded size={22}/>
             <span>3</span>
           </div>
          </div>

        </div>
      </div>


        
    </div>
        
          <div className='flex gap-[13px] mt-[16px]'>
        <div>
          <div className='h-[30px] w-[30px] rounded-full overflow-hidden'>
            <img src="/Icons/UnknownPerson2.png" className='scale-[1.1]'/>
          </div>
         

        </div>
        <div>
         <div className='flex items-center h-[30px] gap-[13px]'>

           <h1 className='text-[15px] text-[#C0C0C0] font-bold'>Wanderer</h1>
           <p className='text-[15px] text-[#536471] font-normal flex items-center'>
             <span>@Lotus2051</span>
             <span className='h-[2px] rounded-full w-[2px] bg-[#536471] mx-[5px]'></span>
             <span>5h</span>
           </p>

         </div>

         <h1 className='text-[15px] text-[#BFBFBF]'>
            more power to you 
         </h1>

        </div>
      </div>

      <div className='ml-[33px] flex gap-[24px] text-[#B0B0B0] text-[13px] mt-[16px]'>
           <div className='flex gap-[14px]'>
               <RiHeart3Line size={22}/>
             <span>42</span>
            </div>
           <div className='flex gap-[14px]'>
            <BiMessageRounded size={22}/>
             <span>3</span>
           </div>
      </div>    
        
       

    </div>
  )
}

export default CommentBox