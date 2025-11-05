interface TextareaProps {
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  rows?: number;
  required?: boolean;
  style?: React.CSSProperties;
}

export const Textarea: React.FC<TextareaProps> = ({
  name,
  placeholder, 
  value, 
  onChange, 
  className = '',
  rows = 4,
  required = false,
  style
}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      required={required}
      className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 resize-vertical ${className}`}
      style={style}
    />
  );
};
