import React from 'react';
import { FaFacebookF, FaApple, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface SocialLoginButtonsProps {
  onSocialLogin: (provider: string) => void;
  isLoading: boolean;
  activeProvider: string | null;
}

const SocialLoginButtons: React.FC<SocialLoginButtonsProps> = ({
  onSocialLogin,
  isLoading,
  activeProvider
}) => {
  const socialButtons = [
    {
      id: 'facebook',
      icon: <FaFacebookF className='text-[#1877F2] text-[24px]' />,
      label: 'Login with Facebook',
      hoverClass: 'hover:border-blue-500 hover:bg-blue-500/10'
    },
    {
      id: 'twitter',
      icon: <FaTwitter className='text-[#1D9BF0] text-[20px]' />,
      label: 'Login with X (Twitter)',
      hoverClass: 'hover:border-black hover:bg-black/10'
    },
    {
      id: 'github',
      icon: <FaGithub className='text-white text-[24px]' />,
      label: 'Login with GitHub',
      hoverClass: 'hover:border-gray-500 hover:bg-gray-500/10',
      bgClass: 'bg-[#040914]'
    },
    {
      id: 'google',
      icon: <FcGoogle className='text-[24px]' />,
      label: 'Login with Google',
      hoverClass: 'hover:border-red-500 hover:bg-red-500/10'
    },
    {
      id: 'discord',
      icon: <FaDiscord className='text-[#5865F2] text-[24px]' />,
      label: 'Login with Discord',
      hoverClass: 'hover:border-[#5865F2] hover:bg-[#5865F2]/10'
    },
    {
      id: 'apple',
      icon: <FaApple className='text-white text-[24px]' />,
      label: 'Login with Apple',
      hoverClass: 'hover:border-gray-800 hover:bg-gray-400/10'
    }
  ];

  const LoadingSpinner = () => (
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  );

  return (
    <div className='flex w-full justify-between sm:mt-[32px] mt-[26px]'>
      {socialButtons.map((button) => {
        const isActive = isLoading && activeProvider === button.id;
        
        return (
          <button
            key={button.id}
            onClick={() => onSocialLogin(button.id)}
            disabled={isLoading}
            className={`border border-gray-700 sm:w-[48px] w-[45px] sm:h-[48px] h-[45px] rounded-[8px] flex items-center justify-center transition-all duration-300 ${button.hoverClass} ${button.bgClass || ''} ${
              isActive ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            aria-label={button.label}
          >
            {isActive ? <LoadingSpinner /> : button.icon}
          </button>
        );
      })}
    </div>
  );
};

export default SocialLoginButtons;