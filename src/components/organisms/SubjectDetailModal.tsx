import { Modal } from '../atoms/Modal';
import type { Subject } from '../../types/curriculum';
import { HiAcademicCap, HiClock, HiUser, HiBadgeCheck } from 'react-icons/hi';

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
  const accentBgClass = subject.color || 'bg-[#780D80]';

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Barra de acento superior */}
      <div className={`${accentBgClass} h-1 rounded-t-2xl`} />

      <div className="p-6 sm:p-8 space-y-6">
        {/* Encabezado */}
        <header className="animate-fade-in-up">
          <div className="flex items-start gap-3">
            <span className={`${accentBgClass} inline-block w-3 h-8 rounded-full mt-1`} aria-hidden="true" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                {subject.name}
              </h2>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {subject.type && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-[#780D80] ring-1 ring-purple-200">
                    <HiAcademicCap className="w-4 h-4" /> {subject.type}
                  </span>
                )}
                {typeof subject.subjectCredits === 'number' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#1E3374] ring-1 ring-blue-200">
                    <HiClock className="w-4 h-4" /> {subject.subjectCredits} créditos
                  </span>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Descripción */}
        {subject.description && (
          <section className="animate-fade-in-up" style={{ animationDelay: '60ms' }}>
            <div className="prose prose-sm sm:prose-base max-w-none text-gray-700">
              <p className="leading-relaxed">{subject.description}</p>
            </div>
          </section>
        )}

        {/* Docente */}
        {hasCompleteInfo ? (
          <section className="animate-fade-in-up" style={{ animationDelay: '120ms' }}>
            <div className="p-px rounded-xl bg-linear-to-r from-[#780D80] to-[#1E3374]">
              <div className="bg-white rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5">
                {/* Imagen */}
                {subject.teacherImage ? (
                  <img
                    src={subject.teacherImage}
                    alt={subject.teacher || 'Docente'}
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-lg object-cover shadow-md"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Profesor';
                    }}
                  />
                ) : (
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-lg bg-linear-to-br from-[#780D80] to-[#1E3374] flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-md">
                    {subject.teacher?.charAt(0) || '?'}
                  </div>
                )}

                {/* Info */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center justify-center sm:justify-start gap-2">
                    <HiUser className="w-5 h-5 text-[#780D80]" /> {subject.teacher}
                    <HiBadgeCheck className="w-5 h-5 text-[#1E3374]" aria-hidden="true" />
                  </h3>
                  {subject.teacherRole && (
                    <p className="text-gray-600 text-sm mt-1">{subject.teacherRole}</p>
                  )}
                  <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2">
                    <button className="px-3 py-1.5 text-sm font-semibold rounded-lg bg-purple-50 text-[#780D80] hover:bg-purple-100 transition-colors">
                      Ver perfil
                    </button>
                    <button className="px-3 py-1.5 text-sm font-semibold rounded-lg bg-blue-50 text-[#1E3374] hover:bg-blue-100 transition-colors">
                      Ver otras materias
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="animate-fade-in-up" style={{ animationDelay: '120ms' }}>
            <div className="bg-blue-50 border-l-4 border-[#1E3374] p-4 rounded">
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Nota:</span> La información detallada de esta materia estará disponible próximamente.
              </p>
            </div>
          </section>
        )}
      </div>
    </Modal>
  );
};
