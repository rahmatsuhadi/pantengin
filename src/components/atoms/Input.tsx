import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ icon, className = '', ...props }) => {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
          {icon}
        </div>
      )}
      <input
        className={`w-full bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-full text-zinc-50 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${icon ? 'pl-11 pr-4' : 'px-4'} py-3 ${className}`}
        {...props}
      />
    </div>
  );
};
