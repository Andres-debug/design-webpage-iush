import { Link } from '../atoms/Link';

interface NavbarItemProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ to, children, isActive = false }) => {
  return (
    <li className="mx-2">
      <Link 
        to={to}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
          isActive 
            ? 'bg-blue-100 text-blue-700' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
        }`}
      >
        {children}
      </Link>
    </li>
  );
};
