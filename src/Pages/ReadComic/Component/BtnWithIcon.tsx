import React from 'react';

interface BtnWithIconProps {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean; 
}

const BtnWithIcon: React.FC<BtnWithIconProps> = ({ 
  title, 
  icon, 
  onClick, 
  className = '',
  disabled = false
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex flex-col items-center justify-center gap-1
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {icon}
      <span className="text-[12px]">{title}</span>
    </button>
  );
};

export default BtnWithIcon;