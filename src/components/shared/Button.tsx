import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  href,
  type = 'button',
  onClick
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-brand-primary hover:bg-brand-secondary text-white shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40',
    secondary: 'bg-primary-800 hover:bg-primary-700 text-white border border-primary-700',
    accent: 'bg-brand-secondary hover:bg-brand-text text-white shadow-lg shadow-brand-secondary/25 hover:shadow-brand-secondary/40',
    outline: 'bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white'
  };
  
  const sizeStyles = {
    small: 'text-sm px-4 py-2',
    medium: 'px-5 py-2.5',
    large: 'text-lg px-6 py-3'
  };

  const classes = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? 'w-full' : ''}
  `;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;