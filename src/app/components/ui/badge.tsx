import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  const baseStyle = 'px-2 py-1 text-xs font-semibold rounded-full';
  const variantStyle = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-200 text-gray-800',
  };

  return (
    <span className={`${baseStyle} ${variantStyle[variant]} ${className}`}>
      {children}
    </span>
  );
}
