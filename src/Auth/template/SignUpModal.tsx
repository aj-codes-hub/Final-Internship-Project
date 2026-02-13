import React, { useState, useEffect } from 'react';
import Input from './Input';
import Button from '../../Components/layout/Button';
import useSocialLogin from '../../hooks/useSocialLogin';
import SocialLoginButtons from './SocialMediaOptions';
import ModalContainer from './modalContainer';

interface SignupModalProps {
  onSignupSuccess?: (userData: any) => void;
  onClose: () => void;
  isOpen: boolean;
  onSwitchToLogin?: () => void;
}

interface UserData {
  id: number;
  name: string;
  email: string;
  phone: string;
  token: string;
}

interface MockSignupResult {
  success: boolean;
  user?: UserData;
  error?: string;
}

// Country codes data
const countryCodes = [
  { code: '+61', name: 'Australia' },  
  { code: '+880', name: 'Bangladesh' },  
  { code: '+86', name: 'China' },
  { code: '+20', name: 'Egypt' },
  { code: '+33', name: 'France' },
  { code: '+49', name: 'Germany' },
  { code: '+91', name: 'India' },
  { code: '+81', name: 'Japan' },
  { code: '+92', name: 'Pakistan' },
  { code: '+966', name: 'Saudi Arabia' },
  { code: '+1', name: 'USA' },
  { code: '+44', name: 'UK' },
  { code: '+971', name: 'UAE' },
];

const SignupModal: React.FC<SignupModalProps> = ({ 
  onSignupSuccess, 
  onClose, 
  isOpen,
  onSwitchToLogin 
}) => {
  const { handleSocialLogin, isLoading } = useSocialLogin();
  const [activeProvider, setActiveProvider] = useState<string | null>(null);
  
  // State for signup form
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>('+880');
  const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState<boolean>(false);
  
  // State for errors
  const [signupError, setSignupError] = useState<string>('');
  const [isSigningUp, setIsSigningUp] = useState<boolean>(false);
  
  // Field-level errors
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');
  const [termsError, setTermsError] = useState<string>('');

  // Mock signup function
  const mockSignup = (userData: {
    email: string;
    password: string;
    phone: string;
  }): MockSignupResult => {
    const existingUsers: UserData[] = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = existingUsers.some((user: UserData) => user.email === userData.email);
    
    if (userExists) {
      return { success: false, error: 'User already exists with this email' };
    }
    
    const newUser: UserData = {
      id: Date.now(),
      name: userData.email.split('@')[0],
      email: userData.email,
      phone: userData.phone,
      token: `mock-token-${Date.now()}`
    };
    
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    
    return { success: true, user: newUser };
  };

  // Validate email field
  const validateEmail = (email: string): boolean => {
    if (!email.trim()) {
      setEmailError('Email is required');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
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

  // Validate confirm password field
  const validateConfirmPassword = (password: string, confirmPassword: string): boolean => {
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      return false;
    }
    
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return false;
    }
    
    setConfirmPasswordError('');
    return true;
  };

  // Validate phone number field
  const validatePhoneNumber = (phone: string): boolean => {
    const phoneWithoutCode = phone.replace(/^\+[0-9]+/, '').trim();
    
    if (!phoneWithoutCode) {
      setPhoneError('Phone number is required');
      return false;
    }
    
    const phoneRegex = /^[0-9]{8,15}$/;
    if (!phoneRegex.test(phoneWithoutCode)) {
      setPhoneError('Please enter a valid phone number (8-15 digits)');
      return false;
    }
    
    setPhoneError('');
    return true;
  };

  // Validate terms checkbox
  const validateTerms = (isChecked: boolean): boolean => {
    if (!isChecked) {
      setTermsError('You must agree to the terms of service');
      return false;
    }
    
    setTermsError('');
    return true;
  };

  // Handle email change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    if (emailError && value.trim()) {
      setEmailError('');
    }
  };

  // Handle password change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    
    if (passwordError && value.length >= 6) {
      setPasswordError('');
    }
    
    if (confirmPassword && value !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else if (confirmPasswordError && value === confirmPassword) {
      setConfirmPasswordError('');
    }
  };

  // Handle confirm password change
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    
    if (confirmPasswordError && value === password) {
      setConfirmPasswordError('');
    }
  };

  // Handle phone number change
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
    
    if (phoneError && value.trim()) {
      setPhoneError('');
    }
  };

  // Handle country code change
  const handleCountryCodeChange = (code: string) => {
    setCountryCode(code);
    setIsCountryDropdownOpen(false);
  };

  // Get full phone number with country code
  const getFullPhoneNumber = () => {
    return `${countryCode} ${phoneNumber}`;
  };

  // Handle terms checkbox change
  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setAgreeToTerms(isChecked);
    
    if (termsError && isChecked) {
      setTermsError('');
    }
  };

  // Handle social signup
  const handleSocialAuth = async (provider: string) => {
    setActiveProvider(provider);
    
    const result = await handleSocialLogin(provider);
    
    if (result.success && result.data) {
      localStorage.setItem('user', JSON.stringify(result.data));
      onSignupSuccess?.(result.data);
      onClose();
      alert(`Welcome ${result.data.name}!`);
    } else {
      alert(`${provider} signup failed: ${result.error || 'Unknown error'}`);
    }
    
    setActiveProvider(null);
  };

  // Handle email/password signup - IMPORTANT: DOES NOT CLOSE MODAL
  const handleEmailSignup = () => {
    setSignupError('');
    
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(password, confirmPassword);
    const isPhoneValid = validatePhoneNumber(getFullPhoneNumber());
    const isTermsValid = validateTerms(agreeToTerms);
    
    if (!isEmailValid || !isPasswordValid || !isConfirmPasswordValid || !isPhoneValid || !isTermsValid) {
      return;
    }
    
    setIsSigningUp(true);
    
    setTimeout(() => {
      const result = mockSignup({
        email,
        password,
        phone: getFullPhoneNumber()
      });
      
      if (result.success && result.user) {
        // ✅ Save user data
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('token', result.user.token);
        
        // ✅ Call success callback - Home.tsx will handle modal switching
        onSignupSuccess?.(result.user);
        
        // ❌ DO NOT call onClose() here - let Home.tsx handle it
        console.log('🔄 Signup complete, waiting for Home.tsx to switch modals...');
        
      } else {
        setSignupError(result.error || 'Signup failed. Please try again.');
      }
      
      setIsSigningUp(false);
    }, 1000);
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEmailSignup();
    }
  };

  // Handle switch to login
  const handleSwitchToLogin = () => {
    if (onSwitchToLogin) {
      onSwitchToLogin();
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.country-dropdown')) {
        setIsCountryDropdownOpen(false);
      }
    };

    if (isCountryDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isCountryDropdownOpen]);

  // ESC key se close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isCountryDropdownOpen) {
          setIsCountryDropdownOpen(false);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, isCountryDropdownOpen]);

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
              Welcome to Stagecomics
            </h1>
            <p className='sm:text-[16px] text-[14px] text-[#5C6272] font-medium'>
              Sign up with your social media account or email            
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

            {signupError && (
              <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-lg">
                <p className="text-red-400 text-sm">{signupError}</p>
              </div>
            )}

            <div className="mb-4">
              <Input
                Title='Email/User name'
                Name='email'
                Type='email'
                PlaceHolder='your@email.com'
                value={email}
                onChange={handleEmailChange}
                onKeyPress={handleKeyPress}
                error={emailError}
              />
            </div>

            <div className="mb-4">
              <Input
                Title='Password'
                Name='password'
                Type='password'
                PlaceHolder='Create a strong password'
                PasswordEye={true}
                value={password}
                onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
                error={passwordError}
              />
            </div>

            <div className="mb-4">
              <Input
                Title='Confirm Password'
                Name='confirmPassword'
                Type='password'
                PlaceHolder='Re-enter your password'
                PasswordEye={true}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                onKeyPress={handleKeyPress}
                error={confirmPasswordError}
              />
            </div>

            {/* Phone Number Input with Country Code */}
            <div className="mb-6">
              <label className='text-[#5C6272] text-[16px] font-medium my-[8px] block'>
                Phone Number
              </label>
              
              <div className="flex">
                {/* Country Code Dropdown */}
                <div className="relative country-dropdown">
                  <button
                    type="button"
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                    className="flex items-center justify-between w-24 h-[48px] rounded-tl-[10px] rounded-bl-[10px] bg-transparent border border-[#5C6272] text-white px-3 hover:border-[#33D6FF] transition-colors"
                  >
                    <span>{countryCode}</span>
                    <svg 
                      className={`w-4 h-4 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu with Custom Scrollbar */}
                  {isCountryDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-[211px] bg-[#1D212B] rounded-[20px] shadow-lg z-50 overflow-hidden">
                      <p className='text-[16px] font-semibold border-b border-gray-600 text-center p-[16px] text-white bg-[#1D212B]'>
                        Select your Country Code
                      </p>
                      
                      {/* Custom Scrollbar Container */}
                      <div className="max-h-60 overflow-y-auto custom-scrollbar">
                        {countryCodes.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => handleCountryCodeChange(country.code)}
                            className={`flex items-center w-full px-4 py-3 text-white hover:bg-[#2a2f3d] transition-colors border-b border-gray-800 last:border-b-0 ${
                              countryCode === country.code ? 'bg-[#33D6FF]/20' : ''
                            }`}
                          >
                            <span className="mr-3 font-medium text-[15px]">{country.code}</span>
                            <span className="text-gray-400 text-sm">{country.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Phone Number Input */}
                <div className="flex-1">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    onKeyPress={handleKeyPress}
                    className="w-full h-[48px] rounded-tr-[10px] rounded-br-[10px] bg-transparent border border-[#5C6272] focus:bg-[#040914] text-white p-[15px] outline-none focus:outline-none focus:border-[#33D6FF] transition-colors"
                  />
                </div>
              </div>
              
              {phoneError && (
                <p className="text-red-400 text-sm mt-1 ml-1">{phoneError}</p>
              )}
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="mb-6">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeToTerms}
                  onChange={handleTermsChange}
                  className="mt-1 h-4 w-4 text-[#33D6FF] focus:ring-[#33D6FF] border-gray-600 rounded cursor-pointer"
                />
                <label htmlFor="terms" className="ml-3 text-[#5C6272] text-[14px] cursor-pointer">
                  I agree to the{' '}
                  <a href="#" className="text-[#5C6272] hover:text-white font-semibold underline text-[16px]">
                    Terms of Service
                  </a>
                </label>
              </div>
              
              {termsError && (
                <p className="text-red-400 text-sm mt-1 ml-7">{termsError}</p>
              )}
            </div>

            <Button
              title='Continue'
              onClick={handleEmailSignup}
              disabled={isSigningUp}
              loading={isSigningUp}
              loadingText='Creating account...'
              className='bg-[#33D6FF] w-full text-[#040914] text-[20px] font-semibold mb-[16px] hover:bg-[#2bc4eb] transition-colors rounded-full'
            />

            <p className='text-[16px] text-gray-400'>
              Already have an account?{' '}
              <button 
                onClick={handleSwitchToLogin}
                className='text-[#33D6FF] hover:text-[#2ebbde] cursor-pointer transition-colors font-medium'
              >
                Login here
              </button>
            </p>
          </div>
        </div>

        <div className='lg:block hidden overflow-hidden rounded-tr-[20px] rounded-br-[20px]'>
          <img
            src="Images/signupDoll_IMG.jpg"
            className='h-full w-[470px] object-cover'
            alt="Signup illustration"
          />
        </div>
      </div>
    </ModalContainer>
  );
};

export default SignupModal;