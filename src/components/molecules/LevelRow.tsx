import { SubjectCard } from '../atoms/SubjectCard';
import type { Subject } from '../../types/curriculum';

interface LevelRowProps {
  level: string;
  subjects: Subject[];
  credits: number;
  badge: number;
  onSubjectClick: (subject: Subject) => void;
  animationDelayMs?: number;
}

export const LevelRow: React.FC<LevelRowProps> = ({ level, subjects, credits, badge, onSubjectClick, animationDelayMs = 0 }) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center mb-4 animate-fade-in-up"
      style={{ animationDelay: `${animationDelayMs}ms` }}
    >
      {/* Materias */}
      <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
        {subjects.map((subject, index) => (
          <SubjectCard 
            key={index}
            name={subject.name}
            backgroundColor={subject.color}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 40}ms` }}
            onClick={() => onSubjectClick(subject)}
          />
        ))}
      </div>
      
      {/* Info del Nivel */}
      <div className="md:col-span-3 flex flex-col sm:flex-row md:flex-col gap-2 items-center justify-center">
        <div className="bg-gray-200 rounded-lg px-4 py-2 text-center min-w-[100px]">
          <span className="font-bold text-gray-800">{level}</span>
        </div>
        <div className="flex gap-2">
          <div className="bg-[#1E3374] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
            {credits}
          </div>
          <div className="bg-gray-400 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
            {badge}
          </div>
        </div>
      </div>
    </div>
  );
};
