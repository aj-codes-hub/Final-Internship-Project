import React from 'react';

interface CircleShadowProps {
  className?: string;
  blurClass?: string; 
}

const CircleShadow: React.FC<CircleShadowProps> = ({
  className = "",
  blurClass = "blur-[180px]", 
}) => {
  return (
    <div
      className={`
        absolute
        rounded-full
        h-[270px]
        w-[270px]
        pointer-events-none
        opacity-[0.7]
        bg-[radial-gradient(circle_at_center,#33D6FF,#CFF5FF)]
        ${blurClass}
        ${className}
      `}
    />
  );
};

export default CircleShadow;
