import { ReactNode } from 'react';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  className = '',
  children = <></>,
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded bg-red-900 shadow-2xl text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
