import React from 'react';

interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  children?: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  iconPosition?: 'left' | 'right';
  iconClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  className,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  loadingText = 'Loading...',
  children,
  icon: Icon,
  iconPosition = 'left',
  iconClassName = ''
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        rounded-full transform duration-200 hover:opacity-80
        button-custom-hover cursor-pointer
        px-[18px] py-[6px]
        md:text-[13px] md:px-[20px] md:py-[6px]
        lg:text-[14px] lg:px-[32px] lg:py-[8px]
        xl:text-[15px] xl:px-[46px] xl:py-[11px]
        2xl:text-[16px] 2xl:px-[56px] 2xl:py-[15px]
        flex items-center justify-center gap-2
        ${disabled || loading ? 'opacity-50 cursor-not-allowed hover:opacity-50' : ''}
        ${className}
      `}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <svg 
            className="animate-spin h-4 w-4 text-current" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10"   
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>{loadingText}</span>
        </div>
      ) : (
        <>
          {Icon && iconPosition === 'left' && (
            <Icon className={`w-4 h-4 ${iconClassName}`} />
          )}
          
          {children || title}
          
          {Icon && iconPosition === 'right' && (
            <Icon className={`w-4 h-4 ${iconClassName}`} />
          )}
        </>
      )}
    </button>
  );
};

export default Button;