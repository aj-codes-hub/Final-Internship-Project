import React from 'react'
import PublicCard from '../PublicCard';
import CardCategory from './CardCategory';




const AuthorDashboard:React.FC = () => {
  return (
    <div>
       <div className='grid grid-cols-3 mt-[40px] overflow-hidden max-w-[1170px] gap-[30px] mx-auto w-full'>
        
         <button className='rounded-[10px] h-[370px] w-[370px] p-[24px] overflow-hidden relative hover:scale-[0.98] transform duration-500
                            cursor-pointer bg-[#1D212B] text-[#5C6272] group'>

              <h1 className='text-[30px] font-semibold group-hover:scale-[1.02] transform duration-500'>
                Create Series <br/>
                <span className='text-[60px] font-normal'>
                    +
                </span>
              </h1>

         </button>

         <PublicCard cardImage='/AutherUser/publicCard2.jpg'
                      publishedDate='11 th June,2021'
                      comicType='Action · fantasy '
                      comicTitle='Product title goes here'
                      AuthorName='Authors name'
                      Views='63k'
                      Likes='2.1k'
                      stars={[ 
                              "/Icons/starFill.png" ,
                              "/Icons/starFill.png" ,
                              "/Icons/starFill.png" ,
                              "/Icons/starFill.png" ,
                              "/Icons/starFill.png" ,
                    ]}/>

         <PublicCard cardImage='/AutherUser/publicCard3.jpg'
                      publishedDate='11 th June,2021'
                      comicType='Action · fantasy '
                      comicTitle='Product title goes here'
                      AuthorName='Authors name'
                      Views='63k'
                      Likes='2.1k'
                      stars={[ 
                              "/Icons/starFill.png" ,
                              "/Icons/starFill.png" ,
                              "/Icons/starFill.png" ,
                              "/Icons/starFill.png" ,
                              "/Icons/starFill.png" ,
                    ]}/>

       </div>
 
         <CardCategory />

    </div>
  )
}

export default AuthorDashboard;