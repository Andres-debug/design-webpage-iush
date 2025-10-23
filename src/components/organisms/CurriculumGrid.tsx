import { useState } from 'react';
import { LevelRow } from '../molecules/LevelRow';
import { SubjectDetailModal } from './SubjectDetailModal';
import curriculumData from '../../data/curriculumData.json';
import type { Subject } from '../../types/curriculum';

export const CurriculumGrid: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubjectClick = (subject: Subject) => {
    setSelectedSubject(subject);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSubject(null), 300); // Esperar animación
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Malla Curricular</h2>
          <p className="text-gray-600">Programa de Diseño Gráfico - IUSH</p>
        </div>
        
        {/* Leyenda */}
        <div className="mb-6 flex flex-wrap gap-4 items-center text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#780D80] rounded"></div>
            <span className="text-gray-700">65 Número de materias</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#1E3374] rounded-full"></div>
            <span className="text-gray-700">196 Créditos por nivel</span>
          </div>
        </div>

        {/* Malla Curricular */}
        <div className="space-y-4">
          {curriculumData.map((levelData, index) => (
            <LevelRow
              key={index}
              level={levelData.level}
              subjects={levelData.subjects as Subject[]}
              credits={levelData.credits}
              badge={levelData.badge}
              onSubjectClick={handleSubjectClick}
            />
          ))}
        </div>
      </div>

      {/* Modal de detalle de materia */}
      <SubjectDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        subject={selectedSubject}
      />
    </div>
  );
};
