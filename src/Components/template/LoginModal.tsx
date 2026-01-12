import React, { useState, useEffect } from 'react';
import Input from './Input';
import Button from '../layout/Button';
import useSocialLogin from '../../hooks/useSocialLogin';
import SocialLoginButtons from './SocialMediaOptions';
import ModalContainer from './modalContainer';

interface LoginModalProps {
  onLoginSuccess?: (userData: any) => void;
  onClose: () => void;
  isOpen: boolean;
  onSwitchToSignup?: () => void;  
}

const LoginModal: React.FC<LoginModalProps> = ({ 
  onLoginSuccess, 
  onClose, 
  isOpen ,
  onSwitchToSignup
}) => {
  const { handleSocialLogin, isLoading } = useSocialLogin();
  const [activeProvider, setActiveProvider] = useState<string | null>(null);
  
  // State for email/password login
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  
  // Field-level errors
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  // Mock login function
  const mockLogin = (email: string, password: string) => {
    const mockUsers = [
      { email: 'user@example.com', password: 'password123', name: 'John Doe' },
      { email: 'test@gmail.com', password: 'test123', name: 'Test User' },
      { email: 'admin@example.com', password: 'admin123', name: 'Admin User' },
    ];
    
    const user = mockUsers.find(
      user => user.email === email && user.password === password
    );
    
    return user ? { success: true, user } : { success: false, error: 'Invalid email or password' };
  };

  // Validate email field
  const validateEmail = (email: string): boolean => {
    if (!email.trim()) {
      setEmailError('Email is required');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Wrong Email/User name');
      return false;
    }
    
    setEmailError('');
    return true;
  };

  // Validate password field
  const validatePassword = (password: string): boolean => {
    if (!password) {
      setPasswordError('Password is required');
      return false;
    }
    
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return false;
    }
    
    setPasswordError('');
    return true;
  };

  // Handle email change with validation
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    // Clear error when user starts typing
    if (emailError && value.trim()) {
      setEmailError('');
    }
  };

  // Handle password change with validation
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    
    // Clear error when user starts typing
    if (passwordError && value) {
      setPasswordError('');
    }
  };

  // Handle social login
  const handleSocialAuth = async (provider: string) => {
    setActiveProvider(provider);
    
    const result = await handleSocialLogin(provider);
    
    if (result.success && result.data) {
      localStorage.setItem('user', JSON.stringify(result.data));
      onLoginSuccess?.(result.data);
      onClose();
      alert(`Welcome ${result.data.name}!`);
    } else {
      alert(`${provider} login failed: ${result.error || 'Unknown error'}`);
    }
    
    setActiveProvider(null);
  };

  // Handle email/password login
  const handleEmailLogin = () => {
    // Reset errors
    setLoginError('');
    
    // Validate both fields
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    
    if (!isEmailValid || !isPasswordValid) {
      return;
    }
    
    setIsLoggingIn(true);
    
    setTimeout(() => {
      const result = mockLogin(email, password);
      
      if (result.success) {
        const userData = {
          id: Date.now(),
          name: result.user?.name || 'User',
          email: email,
          token: `mock-token-${Date.now()}`
        };
        
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', userData.token);
        onLoginSuccess?.(userData);
        onClose();
        alert(`Welcome ${userData.name}!`);
      } else {
        setLoginError(result.error || 'Invalid email or password');
        // Mark both fields as invalid
        setEmailError('Invalid email or password');
        setPasswordError('Invalid email or password');
      }
      
      setIsLoggingIn(false);
    }, 1000);
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEmailLogin();
    }
  };

  // ESC key se close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalContainer onClose={onClose}>
      <div className='flex'>
        <div className='flex justify-center items-center sm:py-[56px] py-[30px] md:px-[50px] px-[20px]'>
          <div className='sm:w-[374px] w-[80vw]'>
            <img 
              src="Logo/header-Logo.png" 
              className='sm:w-[137px] w-[130px] h-[14px] sm:mb-[60px] mb-[40px]' 
              alt="Logo"
            />

            <h1 className='sm:text-[25px] text-[22px] text-white sm:mb-[8px] mb-[6px]'>
              Welcome Back, User
            </h1>
            <p className='sm:text-[16px] text-[14px] text-[#5C6272] font-medium'>
              Welcome back. Please enter your details
            </p>

            <SocialLoginButtons 
              onSocialLogin={handleSocialAuth} 
              isLoading={isLoading} 
              activeProvider={activeProvider} 
            />

            <div className='flex justify-center items-center sm:my-6 my-3'>
              <hr className='text-[#5C6272] w-full h-[1px] border-t border-gray-700' />
              <p className='px-3 text-[16px] text-gray-400'>or</p>
              <hr className='text-[#5C6272] w-full h-[1px] border-t border-gray-700' />
            </div>

            {loginError && (
              <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-lg">
                <p className="text-red-400 text-sm">{loginError}</p>
              </div>
            )}

            <Input
              Title='Email/User name'
              Name='Email'
              Type='email'
              PlaceHolder='Your @Email Address'
              value={email}
              onChange={handleEmailChange}
              onKeyPress={handleKeyPress}
              error={emailError}
            />

            <Input
              Title='Password'
              Name='password'
              Type='password'
              PlaceHolder='Enter Your Password'
              PasswordEye={true}
              value={password}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
              error={passwordError}
            />

            <p className='text-[16px] mt-[12px] mb-[42px] text-[#5C6272]'>
              Forgot email or password?
              <a href="#" className='text-white hover:text-[#33D6FF] transition-colors ml-1'>
                Click Here
              </a>
            </p>

            <Button
              title='Login'
              onClick={handleEmailLogin}
              disabled={isLoggingIn}
              loading={isLoggingIn}
              loadingText='Logging in...'
              className='bg-[#33D6FF] w-full text-[#040914] sm:text-[20px] text-[18px] font-semibold mb-[16px] hover:bg-[#2bc4eb] transition-colors rounded-full'
            />

            <p className='text-[16px] text-gray-400'>
              Don't have an account?
              <button 
                      onClick={onSwitchToSignup}
                      className='text-[#33D6FF] hover:text-white transition-colors ml-1 font-medium'
                      >
                    SignUp
                   </button>
            </p>
          </div>
        </div>

        <div className='lg:block hidden overflow-hidden rounded-tr-[20px] rounded-br-[20px]'>
          <img
            src="Images/LoginDoll_IMG.jpg"
            className='h-full w-[470px] object-cover'
            alt="Login illustration"
          />
        </div>
      </div>
    </ModalContainer>
  );
};

export default LoginModal;