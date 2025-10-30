import { useEffect, useState } from 'react';
import { HiX } from 'react-icons/hi';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  transitionMs?: number;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, transitionMs = 250 }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  // Manejo de montaje/desmontaje con animación
  useEffect(() => {
    let timeout: number | undefined;
    if (isOpen) {
      setShouldRender(true);
    } else {
      timeout = window.setTimeout(() => setShouldRender(false), transitionMs);
    }
    return () => {
      if (timeout) window.clearTimeout(timeout);
    };
  }, [isOpen, transitionMs]);

  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  return (
    <div 
      role="dialog" aria-modal="true"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}  bg-opacity-50 backdrop-blur-sm`}
      onClick={onClose}
    >
      <div 
        className={`relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          aria-label="Cerrar modal"
        >
          <HiX className="w-6 h-6 text-gray-600" />
        </button>

        {/* Contenido */}
        {children}
      </div>
    </div>
  );
};
