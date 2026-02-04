
import React from 'react';
import { Wrench, Droplets } from 'lucide-react';

interface LogoProps {
  className?: string;
  light?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false, size = 'md' }) => {
  const iconSizes = {
    sm: 18,
    md: 24,
    lg: 32
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Visual Icon Mark */}
      <div className="relative group">
        <div className={`
          ${size === 'sm' ? 'p-1.5' : 'p-2.5'} 
          rounded-xl transition-transform duration-300 group-hover:rotate-12
          ${light ? 'bg-white shadow-lg shadow-white/10' : 'bg-plumbing-blue shadow-lg shadow-blue-900/20'}
        `}>
          <Wrench 
            size={iconSizes[size]} 
            className={light ? 'text-plumbing-blue' : 'text-white'} 
          />
        </div>
        <div className={`
          absolute -bottom-1 -right-1 
          bg-orange-500 p-1 rounded-full 
          border-2 ${light ? 'border-slate-900' : 'border-white'}
          animate-bounce
        `}>
          <Droplets size={iconSizes[size] / 2} className="text-white fill-current" />
        </div>
      </div>

      {/* Brand Name */}
      <div className={`font-black leading-none tracking-tighter ${textSizes[size]} ${light ? 'text-white' : 'text-plumbing-blue'}`}>
        <div className="flex flex-col">
          <span>ADITYA</span>
          <span className="text-orange-500">PLUMBING</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
