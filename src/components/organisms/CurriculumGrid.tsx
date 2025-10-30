import { useMemo, useState } from 'react';
import { LevelRow } from '../molecules/LevelRow';
import { SubjectDetailModal } from './SubjectDetailModal';
import rawCurriculumData from '../../data/curriculumData.json';
import type { Subject, Level } from '../../types/curriculum';

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

  // Orden de momentos formativos (referencia estable)
  const momentOrder = useMemo(
    () => ['Fundamentación', 'Estructuración', 'Profundización', 'Proyección'],
    []
  );

  // Normalizamos/Tipamos los datos importados del JSON
  const curriculumData = useMemo(() => rawCurriculumData as unknown as Level[], []);

  // Agrupamos niveles por momento formativo manteniendo el orden esperado
  const groupedByMoment = useMemo(() => {
    const groups = new Map<string, Level[]>();
    for (const level of curriculumData) {
      const key = level.moment ?? 'Otro';
      const arr = groups.get(key) ?? [];
      arr.push(level);
      groups.set(key, arr);
    }
    const orderedKeys = [
      ...momentOrder.filter((m) => groups.has(m)),
      ...[...groups.keys()].filter((k) => !momentOrder.includes(k)),
    ];
    return orderedKeys.map((k) => ({ moment: k, levels: groups.get(k)! }));
  }, [curriculumData, momentOrder]);

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

        {/* Malla Curricular seccionada por momento formativo */}
        <div className="space-y-8">
          {groupedByMoment.map(({ moment, levels }) => (
            <section key={moment} aria-labelledby={`moment-${moment}`}>
              <div className="flex items-center gap-3 mb-4 sticky top-16 bg-gray-50/80 backdrop-blur supports-backdrop-filter:bg-gray-50/60 py-2 z-10">
                <div className="h-0.5 flex-1 bg-gray-200" />
                <h3 id={`moment-${moment}`} className="text-xl font-semibold text-gray-900 whitespace-nowrap">
                  {moment}
                </h3>
                <div className="h-0.5 flex-1 bg-gray-200" />
              </div>

              <div className="space-y-4">
                {levels.map((levelData, index) => (
                  <LevelRow
                    key={`${moment}-${index}-${levelData.level}`}
                    level={levelData.level}
                    subjects={levelData.subjects as Subject[]}
                    credits={levelData.credits}
                    badge={levelData.badge}
                    animationDelayMs={index * 80}
                    onSubjectClick={handleSubjectClick}
                  />
                ))}
              </div>
            </section>
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
