import { Modal } from '../atoms/Modal';
import type { Subject } from '../../types/curriculum';

interface SubjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject: Subject | null;
}

export const SubjectDetailModal: React.FC<SubjectDetailModalProps> = ({ 
  isOpen, 
  onClose, 
  subject 
}) => {
  if (!subject) return null;

  const hasCompleteInfo = subject.description && subject.teacher;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8">
        {/* Encabezado con título de la materia */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-[#1E3374] mb-2">
            {subject.name}
          </h2>
          
          {/* Badges de tipo y créditos */}
          <div className="flex flex-wrap gap-3 items-center">
            {subject.type && (
              <span className="bg-[#780D80] text-white px-4 py-1 rounded-full text-sm font-semibold">
                {subject.type}
              </span>
            )}
            {subject.subjectCredits && (
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-sm font-medium">Taller central</span>
                <div className="bg-[#780D80] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {subject.subjectCredits}
                </div>
                <span className="text-gray-600 text-sm font-medium">créditos</span>
              </div>
            )}
          </div>
        </div>

        {/* Descripción */}
        {subject.description && (
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed text-justify">
              {subject.description}
            </p>
          </div>
        )}

        {/* Información del profesor */}
        {hasCompleteInfo && (
          <div className="bg-gray-50 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6">
            {/* Imagen del profesor */}
            {subject.teacherImage ? (
              <div className="shrink-0">
                <img 
                  src={subject.teacherImage} 
                  alt={subject.teacher}
                  className="w-32 h-32 rounded-lg object-cover shadow-md"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/150?text=Profesor';
                  }}
                />
              </div>
            ) : (
              <div className="shrink-0 w-32 h-32 rounded-lg bg-linear-to-br from-[#780D80] to-[#1E3374] flex items-center justify-center text-white text-4xl font-bold shadow-md">
                {subject.teacher?.charAt(0) || '?'}
              </div>
            )}

            {/* Información del profesor */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {subject.teacher}
              </h3>
              {subject.teacherRole && (
                <p className="text-gray-600 text-sm mb-3">
                  {subject.teacherRole}
                </p>
              )}
              <button className="text-[#780D80] hover:text-[#6a0b70] font-semibold text-sm underline transition-colors duration-200">
                Saber más
              </button>
            </div>
          </div>
        )}

        {/* Mensaje si no hay información completa */}
        {!hasCompleteInfo && (
          <div className="bg-blue-50 border-l-4 border-[#1E3374] p-4 rounded">
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Nota:</span> La información detallada de esta materia estará disponible próximamente.
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
};
