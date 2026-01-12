import React from 'react'
import Button from '../../../../../Components/layout/Button'

const ReadFullComicCard:React.FC = () => {

  return (
     <div className='w-full sm:h-[676px] h-[620px] sm:rounded-[20px] rounded-[15px] overflow-hidden relative'>
            
                <img src="Images/Girl-Sky.jpg"
                      className='h-full w-full absolute top-0 left-0 -z-[10]'
                />

              <div className='bg-gradient-to-b from-[#0A193900] to-[#0A1838] w-full h-full'>
          
                    <div className='w-full sm:py-[43px] py-[30px] sm:px-[40px] px-[10px] flex justify-end flex-col h-full'>
                          
                          <div className='flex gap-[8px] mb-[8px]'>
                              <span className='text-[12px] bg-[#33D6FF]/40 rounded-full px-[20px] py-[5px]'>
                                Action
                              </span>
                            
                              <span className='text-[12px] bg-[#33D6FF]/40 rounded-full px-[20px] py-[5px]'>
                                Fantasy
                              </span>
                          </div>

                          <h1 className='font-medium sm:text-[24px] text-[20px] mb-[8px]'>
                            Comic Name Here
                          </h1>

                          <h2 className='sm:text-[24px] text-[20px] font-medium flex items-center gap-[12px] mb-[24px]'>
                          <span className='bg-[#7BFF70] h-[8px] w-[8px] rounded-full'> 
                          </span> 
                            4.9K Viewers
                          </h2>

                        <Button title='Read Full Comic'
                            className='bg-[#33D6FF] mx-auto w-full sm:h-[65px] h-[50px] text-[#040914] font-semibold text-[16px]'
                            />
                    </div>
         
          </div>
      </div>
  )
}

export default ReadFullComicCard;