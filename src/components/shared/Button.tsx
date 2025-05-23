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
    primary: 'bg-accent-500 hover:bg-accent-600 text-primary-900 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40',
    secondary: 'bg-primary-800 hover:bg-primary-700 text-white border border-primary-700',
    accent: 'bg-accent-600 hover:bg-accent-700 text-white shadow-lg shadow-accent-600/25 hover:shadow-accent-600/40',
    outline: 'bg-transparent border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-primary-900'
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