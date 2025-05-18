
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-2xl font-space font-bold">
        <span className="text-synaptic-indigo">Synaptic</span>
        <span className="text-synaptic-teal">Web</span>
      </span>
    </div>
  );
};

export default Logo;
