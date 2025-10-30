import type { CSSProperties } from 'react';

interface SubjectCardProps {
  name: string;
  backgroundColor: string;
  textColor?: string;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ 
  name, 
  backgroundColor, 
  textColor = 'white',
  onClick,
  className,
  style
}) => {
  return (
    <button 
      onClick={onClick}
      style={style}
      className={`${backgroundColor} ${textColor === 'white' ? 'text-white' : 'text-gray-800'} rounded-lg px-4 py-3 text-center font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer min-h-[60px] flex items-center justify-center w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${className ?? ''}`}
    >
      {name}
    </button>
  );
};
