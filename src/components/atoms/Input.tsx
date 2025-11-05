interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'password';
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  style?: React.CSSProperties;
}

export const Input: React.FC<InputProps> = ({ 
  type = 'text',
  name,
  placeholder, 
  value, 
  onChange, 
  className = '',
  required = false,
  style
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 ${className}`}
      style={style}
    />
  );
};
