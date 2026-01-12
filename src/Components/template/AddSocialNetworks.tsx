import React from 'react';
import { FaFacebookF, FaTwitter, FaDiscord } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsPlusLg } from "react-icons/bs";


const AddSocialNetworks: React.FC = ({

}) => {
  const socialButtons = [
    {
      id: 'facebook',
      icon: <FaFacebookF className='text-[#1877F2] text-[24px]' />,
      hoverClass: 'hover:border-blue-500 hover:bg-blue-500/10'
    },
    {
      id: 'twitter',
      icon: <FaTwitter className='text-[#1D9BF0] text-[20px]' />,
      hoverClass: 'hover:border-black hover:bg-black/10'
    },
    {
      id: 'google',
      icon: <FcGoogle className='text-[24px]' />,
      hoverClass: 'hover:border-red-500 hover:bg-red-500/10'
    },
    {
      id: 'discord',
      icon: <FaDiscord className='text-[#5865F2] text-[24px]' />,
      hoverClass: 'hover:border-[#5865F2] hover:bg-[#5865F2]/10'
    },
        {
      id: 'Add',
      icon: <BsPlusLg className='text-white text-[32px]' />,
      hoverClass: 'hover:border-white hover:bg-white/4'
    },
  ];

  return (
    <div className='flex w-full justify-between'>
      {socialButtons.map((button) => {
        
        return (
          <button
            key={button.id}
            className={`border border-gray-700 w-[48px] h-[48px] rounded-[8px] flex items-center justify-center transition-all duration-300  ${button.hoverClass}`}
          > 
            {button.icon}
          </button>
        );
      })}
    </div>
  );
};


export default AddSocialNetworks;