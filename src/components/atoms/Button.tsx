import React from 'react';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullWidth?: boolean;
}

export type ButtonProps<C extends React.ElementType> = BaseButtonProps & {
  as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, keyof BaseButtonProps | 'as'>;

export const Button = <C extends React.ElementType = 'button'>({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  as,
  ...props
}: ButtonProps<C>) => {
const Component = as || 'button';

  const baseStyles = "flex sm:inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-center";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20",
    secondary: "bg-zinc-800 text-zinc-50 hover:bg-zinc-700 border border-zinc-700",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/20",
    ghost: "bg-transparent text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800/50"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base", // Sedikit disesuaikan untuk kenyamanan touch target mobile
    lg: "px-7 py-3.5 text-lg"
  };

  const widthStyle = fullWidth ? "w-full sm:w-auto" : "";

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};