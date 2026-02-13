import React, { useState } from 'react'
import { HiMiniCamera } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillGoogleCircle } from "react-icons/ai"
import AboutYourselfModal from '../../../Auth/template/AboutYourselfModal'
import UploadProfilePictureModal from '../../../Auth/template/UploadProfilePictureModal' 
import UploadProfileCoverModal from '../../../Auth/template/UploadProfileCoverModal'


interface ProfilePrps {
    CurrentUser: any | null ;
}


const Profile:React.FC<ProfilePrps> =  ({CurrentUser}) => {
    const [activeModal, setActiveModal] = useState<'none' | 'aboutYourself' | 'profilePicture' | 'profileCover' | 'signupSuccess'>('none');


  // Close all modals
  const closeAllModals = () => setActiveModal('none');


  // Handle about yourself completion
  const handleAboutYourselfComplete = () => {
    console.log('✅ About yourself completed');
    
    setTimeout(() => {
      setActiveModal('profilePicture');
    },);
  };

  // Handle about yourself skip
  const handleAboutYourselfSkip = () => {
    console.log('⏭️ Skipped about yourself');
    
    setTimeout(() => {
      setActiveModal('profilePicture');
    }, );
  };

  // Handle profile picture completion
  const handleProfilePictureComplete = () => {
    console.log('📸 Profile picture completed');
    
    setTimeout(() => {
      setActiveModal('profileCover');
    },);
  };

  // Handle profile picture skip
  const handleProfilePictureSkip = () => {
    console.log('⏭️ Skipped profile picture');
    
    setTimeout(() => {
      setActiveModal('profileCover');
    }, );
  };

  // Handle profile cover completion
  const handleProfileCoverComplete = () => {
    console.log('🖼️ Profile cover completed');
    
    setTimeout(() => {
      setActiveModal('signupSuccess');
    }, );
  };

  // Handle profile cover skip
  const handleProfileCoverSkip = () => {
    console.log('⏭️ Skipped profile cover');
    
    setTimeout(() => {
      setActiveModal('signupSuccess');
    },);
  };

  return (
    <div className=''>

        <div>
             
            <div className='rounded-[20px] w-[1170px] h-[300px] mx-auto relative overflow-hidden'>
                 
                 <img src={CurrentUser.coverPhoto} className='object-cover absolute left-0 bottom-[-30%] '/>

                <button  onClick={handleProfilePictureComplete}
                         className='absolute rounded-full bottom-[16px] flex items-center justify-center cursor-pointer
                                   gap-[8px] right-[16px] bg-[#272B34CC] h-[40px] w-[146px] text-[12px]'> 

                   <HiMiniCamera className='text-[#5C6272] text-[18px]'/>
                   
                    Edit cover photo
                </button>     

            </div>

            <div className='h-[152px] w-[1170px] mx-auto relative'>
               
               <div className='left-[48px] top-[-75px] absolute flex flex-col items-center'>
                
                <div className='h-[150px] w-[150px] rounded-full border-[5px] border-[#FEB705] bg-black relative'>
                   
                   <div className='h-full w-full overflow-hidden rounded-full flex justify-center items-center'>
                       <img src={CurrentUser.profileImg} className='object-cover scale-[1.4]'/>
                    </div>   
                      

                 <button   onClick={handleAboutYourselfComplete}
                           className='absolute rounded-full bottom-[9px] flex items-center justify-center cursor-pointer
                                   gap-[8px] right-[-2px] bg-[#272B34] h-[40px] w-[40px] text-[12px]'> 

                   <HiMiniCamera className='text-[#5C6272] text-[20px]'/>
                </button>
               </div>  

                <h1 className='mt-[26px] text-[24px] font-bold flex gap-[7px]'>
                    Anistage 
                    <img src="/Icons/check.png" className='h-[14px] w-[14px] mt-[10px]'/>
                </h1>
                <p className='mt-[11px] text-[16px] font-medium'>
                    @groupanistage
                </p>
              
              </div>

              <div className='flex gap-[24px] text-[16px] font-medium absolute left-1/2 -translate-x-1/2 bottom-0'>
                <p>Project Views 542.3k</p>
                <p>Appreciations 127.9k</p>
                <p>Followers 918</p>
                <p>Following 1326</p>
              </div>

              <div className='absolute right-0 top-1/2 -translate-y-1/2'>
                  <button className='cursor-pointer border text-[#FEB705] text-[16px] font-bold [word-spacing:2px] w-[146px] h-[50px] rounded-full'>
                        Edit Profile
                   </button>     

                   <div className='mt-[20px] h-[24px] flex gap-[16px]'>
                  
                    <FaFacebook className='h-[24px] w-[24px]'/>
                    <AiFillTwitterCircle className='h-[24px] w-[24px]'/>
                    <TiSocialLinkedin className='h-[24px] w-[24px] bg-[white] text-black rounded-full '/>
                    <AiFillGoogleCircle className='h-[24px] w-[24px]'/>

                   </div>
              </div>
 
            </div>

        </div>

          {/* 🔴 ABOUT YOURSELF MODAL */}
      {activeModal === 'aboutYourself' && (
        <AboutYourselfModal
          isOpen={true}
          onClose={closeAllModals}
          onContinue={handleAboutYourselfComplete}
          onSkip={handleAboutYourselfSkip}
        />
      )}

      {/* 📸 PROFILE PICTURE MODAL */}
      {activeModal === 'profilePicture' && (
        <UploadProfilePictureModal
          isOpen={true}
          onClose={closeAllModals}
          onContinue={handleProfilePictureComplete}
          onSkip={handleProfilePictureSkip}
        />
      )}

      {/* 🖼️ PROFILE COVER MODAL */}
      {activeModal === 'profileCover' && (
        <UploadProfileCoverModal
          isOpen={true}
          onClose={closeAllModals}
          onContinue={handleProfileCoverComplete}
          onSkip={handleProfileCoverSkip}
        />
      )}

        
    </div>
  )
}

export default Profile