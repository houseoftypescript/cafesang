import { ChangeEvent } from 'react';

export type InputProps = {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
};

export const Input: React.FC<InputProps> = ({
  id = '',
  name = '',
  placeholder = '',
  value,
  onChange,
  required = false,
  disabled = false,
}) => {
  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className="px-4 py-2 rounded w-full shadow-2xl"
    />
  );
};

Input.displayName = 'Input';

export default Input;
