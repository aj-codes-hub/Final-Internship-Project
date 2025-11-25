import React from 'react';

interface CircleShadowProps {
  className?: string;
}

const CircleShadow: React.FC<CircleShadowProps> = ({ className = "" }) => {
  return (
    <div 
      className={`absolute rounded-full ${className}`}
      style={{
        width: '270px',
        height: '270px',
        background: 'radial-gradient(circle at center, #33D6FF, #CFF5FF)',
        filter: 'blur(180px)',
        opacity: 0.7
      }}
    ></div>
  );
};

export default CircleShadow;