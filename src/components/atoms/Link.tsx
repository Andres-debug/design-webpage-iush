import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ to, children, className = '', onClick }) => {
  return (
    <RouterLink 
      to={to} 
      onClick={onClick}
      className={`text-blue-600 hover:text-blue-800 transition-colors duration-200 ${className}`}
    >
      {children}
    </RouterLink>
  );
};
