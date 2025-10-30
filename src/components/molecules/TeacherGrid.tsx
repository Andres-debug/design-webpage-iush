import React from 'react';
import { TeacherAvatar, type Teacher } from '../atoms/TeacherAvatar';

interface TeacherGridProps {
  teachers: Teacher[];
  selectedId?: string | null;
  onSelect?: (id: string, teacher: Teacher) => void;
  avatarSizeClasses?: string; // permite controlar el tamaño de los cuadros
}

// Versión compacta: solo muestra cuadros con información (docentes) y los hace más grandes.
export const TeacherGrid: React.FC<TeacherGridProps> = ({ teachers, selectedId, onSelect, avatarSizeClasses = 'w-24 h-24 sm:w-28 sm:h-28' }) => {
  const handleClick = (t?: Teacher) => t && onSelect?.(t.id, t);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full max-w-5xl mx-auto place-items-center">
      {teachers.map((t) => (
        <TeacherAvatar
          key={t.id}
          teacher={t}
          selected={selectedId === t.id}
          onClick={() => handleClick(t)}
          className={`${avatarSizeClasses}`}
        />
      ))}
    </div>
  );
}
