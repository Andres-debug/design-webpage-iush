import React from 'react';
import { Modal } from '../atoms/Modal';

export interface TeacherProfile {
  id: string;
  name: string;
  role?: string | null;
  image?: string | null;
  summary?: string | null;
  experience?: string | null;
}

interface TeacherProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  teacher: TeacherProfile | null;
}

export const TeacherProfileModal: React.FC<TeacherProfileModalProps> = ({ isOpen, onClose, teacher }) => {
  if (!teacher) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Borde superior institucional */}
      <div className="bg-linear-to-r from-[#1E3374] to-[#780D80] h-1 rounded-t-2xl" />

      <div className="p-6 sm:p-8 bg-white">
        {/* Encabezado superior pequeño */}
        <p className="text-[#1E3374] font-semibold text-sm tracking-wide mb-4">Planta Docentes Diseño Gráfico</p>

        {/* Cabecera con foto y nombre */}
        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-6 items-start mb-6">
          {/* Foto con marco orgánico */}
          <div className="relative">
            <div className="absolute -inset-2 rounded-[28px] bg-linear-to-br from-[#780D80]/20 to-[#1E3374]/20 blur" aria-hidden="true" />
            <div className="relative rounded-[28px] overflow-hidden ring-2 ring-[#1E3374]/20 shadow-xl">
              {teacher.image ? (
                <img src={teacher.image} alt={teacher.name} className="w-40 h-40 object-cover" />
              ) : (
                <div className="w-40 h-40 bg-linear-to-br from-[#780D80] to-[#1E3374] flex items-center justify-center text-white text-4xl font-extrabold">
                  {teacher.name?.charAt(0) || '?'}
                </div>
              )}
            </div>
          </div>

          {/* Nombre y rol */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E3374] leading-tight mb-2">{teacher.name}</h2>
            {teacher.role && (
              <div className="inline-block bg-[#1E3374] text-white px-4 py-2 rounded-lg font-semibold text-sm">{teacher.role}</div>
            )}
          </div>
        </div>

        {/* Resumen destacado */}
        {teacher.summary && (
          <div className="rounded-xl bg-[#780D80] text-white p-4 sm:p-5 mb-6">
            <p className="text-sm leading-relaxed">{teacher.summary}</p>
          </div>
        )}

        {/* Experiencia */}
        {teacher.experience && (
          <div className="rounded-2xl bg-[#1E3374]/90 text-white p-5 ring-1 ring-white/10">
            <p className="text-sm leading-relaxed">{teacher.experience}</p>
          </div>
        )}
      </div>
    </Modal>
  );
}
