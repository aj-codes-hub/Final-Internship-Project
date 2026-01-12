import React, { useState } from 'react'
import Header from '../../Components/layout/Header/header'
import Footer from '../../Components/layout/Footer/Footer'
import HeroSection from './Components/HeroSection/HeroSection'
import StageComicsCardSection from './Components/StageComicsCardSection/StageComicsCardSection'
import CategorySection from './Components/CategorySection'
import TrendingSection from './Components/TrendingSection'
import NewComics from './Components/NewComic';
import MostRead from './Components/MostRead';
import AuthorHeroSection from './Components/AuthorHeroSection'
import TopAuthorSection from './Components/TopAuthorSections'
import LoginModal from '../../Components/template/LoginModal'
import SignupModal from '../../Components/template/SignUpModal'
import UserTypeModal from '../../Components/template/UeseOrAuthor'
import AboutYourselfModal from '../../Components/template/AboutYourselfModal'
import UploadProfilePictureModal from '../../Components/template/UploadProfilePictureModal' // New
import UploadProfileCoverModal from '../../Components/template/UploadProfileCoverModal' // New
import SignupSuccessModal from '../../Components/template/SignupSuccessModal' // New
import PopularCategories from './Components/PopularCategories/PopularCategories'

const Home: React.FC = () => {
  // Modal states
  const [activeModal, setActiveModal] = useState<'none' | 'login' | 'signup' | 'userType' | 'aboutYourself' | 'profilePicture' | 'profileCover' | 'signupSuccess'>('none');
  const [userType, setUserType] = useState<'author' | 'user' | null>(null);

  // Open modals
  const openLoginModal = () => setActiveModal('login');

  // Close all modals
  const closeAllModals = () => setActiveModal('none');

  // Switch from login to signup
  const handleSwitchToSignup = () => {
    setActiveModal('signup');
  };

  // Switch from signup to login
  const handleSwitchToLogin = () => {
    setActiveModal('login');
  };

  // Handle signup success
  const handleSignupSuccess = (userData: any) => {
    console.log('✅ Signup successful:', userData);
    setTimeout(() => {
      setActiveModal('userType');
    }, 300);
  };

  // Handle user type selection
  const handleUserTypeSelect = (type: 'author' | 'user') => {
    console.log('✅ User selected type:', type);
    setUserType(type);
    
    setTimeout(() => {
      setActiveModal('aboutYourself');
    }, 300);
  };

  // Handle about yourself completion
  const handleAboutYourselfComplete = () => {
    console.log('✅ About yourself completed');
    
    setTimeout(() => {
      setActiveModal('profilePicture');
    }, 300);
  };

  // Handle about yourself skip
  const handleAboutYourselfSkip = () => {
    console.log('⏭️ Skipped about yourself');
    
    setTimeout(() => {
      setActiveModal('profilePicture');
    }, 300);
  };

  // Handle profile picture completion
  const handleProfilePictureComplete = () => {
    console.log('📸 Profile picture completed');
    
    setTimeout(() => {
      setActiveModal('profileCover');
    }, 300);
  };

  // Handle profile picture skip
  const handleProfilePictureSkip = () => {
    console.log('⏭️ Skipped profile picture');
    
    setTimeout(() => {
      setActiveModal('profileCover');
    }, 300);
  };

  // Handle profile cover completion
  const handleProfileCoverComplete = () => {
    console.log('🖼️ Profile cover completed');
    
    setTimeout(() => {
      setActiveModal('signupSuccess');
    }, 300);
  };

  // Handle profile cover skip
  const handleProfileCoverSkip = () => {
    console.log('⏭️ Skipped profile cover');
    
    setTimeout(() => {
      setActiveModal('signupSuccess');
    }, 300);
  };

  // Handle signup success modal close
  const handleSignupSuccessClose = () => {
    console.log('🎉 Signup process completed');
    setActiveModal('none');
    
    // Show welcome message
    setTimeout(() => {
      alert(`🎉 Welcome to StageComics! Your ${userType === 'author' ? 'Author' : 'User'} account is ready.`);
    }, 500);
  };

  return (
    <div className='max-w-[1920px] w-full mx-auto overflow-hidden'>
      {/* Header */}
      <Header onClick={openLoginModal} />

      {/* 🔵 LOGIN MODAL */}
      {activeModal === 'login' && (
        <LoginModal 
          onClose={closeAllModals} 
          isOpen={true}
          onLoginSuccess={(userData) => {
            console.log('✅ Login successful:', userData);
            closeAllModals();
          }}
          onSwitchToSignup={handleSwitchToSignup}
        />
      )}

      {/* 🟢 SIGNUP MODAL */}
      {activeModal === 'signup' && (
        <SignupModal
          isOpen={true}
          onClose={closeAllModals}
          onSwitchToLogin={handleSwitchToLogin}
          onSignupSuccess={handleSignupSuccess}
        />
      )}

      {/* 🟡 USER TYPE MODAL */}
      {activeModal === 'userType' && (
        <UserTypeModal
          isOpen={true}
          onClose={closeAllModals}
          onUserTypeSelect={handleUserTypeSelect}
        />
      )}

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

      {/* 🎉 SIGNUP SUCCESS MODAL (Auto closes in 3 seconds) */}
      {activeModal === 'signupSuccess' && (
        <SignupSuccessModal
          isOpen={true}
          onClose={handleSignupSuccessClose}
        />
      )}

      {/* Page Content */}
      <HeroSection />
      <CategorySection />
      <TrendingSection />
      <StageComicsCardSection />
      <NewComics />
      <MostRead />
      <PopularCategories />
      <AuthorHeroSection />
      <TopAuthorSection />
      <Footer />
    </div>
  )
}

export default Home;