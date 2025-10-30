import { useState } from 'react';
import { NavbarItem } from '../molecules/NavbarItem';
import { Link } from '../atoms/Link';
import { HiMenu, HiX } from 'react-icons/hi';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand con estilo mejorado */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                {/* Glow/halo detrás del logo */}
                <div className="absolute -inset-1  rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>

                {/* Contenedor del logo */}
                <div className="relative  px-2 py-1 select-none">
                  {logoError ? (
                    <div className="text-[#1E3374] font-bold text-xl px-2">IUSH</div>
                  ) : (
                    <img
                      src="/logo.png"
                      alt="IUSH"
                      className="h-10 w-auto object-contain block"
                      onError={() => setLogoError(true)}
                      draggable={false}
                    />
                  )}
                </div>
              </div>
              <span className="hidden sm:block text-2xl text-gray-600 font-bold">
                Diseño Gráfico
              </span>
            </Link>
          </div>
          
          {/* Navigation Items - Desktop */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-2">
              <NavbarItem to="/">Inicio</NavbarItem>
              <NavbarItem to="/plan-estudios">Plan de Estudios</NavbarItem>
              <NavbarItem to="/docentes">Docentes</NavbarItem>
              <NavbarItem to="/eventos">Eventos</NavbarItem>
              <NavbarItem to="/contacto">Contacto</NavbarItem>
            </ul>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-[#780D80] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#780D80] transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <HiX className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <HiMenu className="block h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-linear-to-b from-white to-gray-50 shadow-inner">
          <Link 
            to="/" 
            onClick={closeMenu}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-[#780D80] hover:bg-purple-50 transition-all duration-200"
          >
            Inicio
          </Link>
          <Link 
            to="/plan-estudios" 
            onClick={closeMenu}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-[#780D80] hover:bg-purple-50 transition-all duration-200"
          >
            Plan de Estudios
          </Link>
          <Link 
            to="/docentes" 
            onClick={closeMenu}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-[#780D80] hover:bg-purple-50 transition-all duration-200"
          >
            Docentes
          </Link>
          <Link 
            to="/eventos" 
            onClick={closeMenu}
            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-[#780D80] hover:bg-purple-50 transition-all duration-200"
          >
            Eventos
          </Link>
          <Link 
            to="/contacto" 
            onClick={closeMenu}
            className="block px-4 py-3 rounded-lg text-base font-medium text-white bg-linear-to-r from-[#780D80] to-[#1E3374] hover:from-[#6a0b70] hover:to-[#0f1f4a] transition-all duration-200 text-center shadow-md"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};
