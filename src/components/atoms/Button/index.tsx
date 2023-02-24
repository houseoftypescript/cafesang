import { ReactNode } from 'react';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  children = <></>,
}) => {
  return (
    <button
      type={type}
      className="px-4 py-2 rounded bg-blue-900 shadow-2xl text-white"
    >
      {children}
    </button>
  );
};

export default Button;
