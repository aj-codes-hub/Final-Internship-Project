import React from 'react'
import Button from '../../../Components/layout/Button'
import PublicCard from './PublicCard'



const Publications:React.FC = () => {


  return (
      <div className=''>

        <div className='grid grid-cols-3 mt-[40px] overflow-hidden max-w-[1170px] gap-[30px] mx-auto w-full'>
        
          <PublicCard cardImage='/AutherUser/publicCard1.jpg'
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

                      <PublicCard cardImage='/AutherUser/publicCard4.jpg'
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


                      <PublicCard cardImage='/AutherUser/publicCard5.jpg'
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


                      <PublicCard cardImage='/AutherUser/publicCard6.jpg'
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


                      <PublicCard cardImage='/AutherUser/publicCard7.jpg'
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


                      <PublicCard cardImage='/AutherUser/publicCard8.jpg'
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

                      <PublicCard cardImage='/AutherUser/publicCard9.jpg'
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

           <Button title='View More' 
                    className='text-[#FEB705] border w-[242px] mx-auto mt-[48px]'/>
    </div>
  )
}

export default Publications