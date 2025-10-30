import React from 'react';

export interface Teacher {
  id: string;
  name: string;
  role?: string | null;
  image?: string | null;
}

interface TeacherAvatarProps {
  teacher?: Teacher | null;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export const TeacherAvatar: React.FC<TeacherAvatarProps> = ({ teacher, selected = false, onClick, className }) => {
  const hasImage = Boolean(teacher?.image);
  const initials = teacher?.name?.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() || '?';

  return (
    <button
      onClick={onClick}
      className={`group relative aspect-square w-full rounded-xl overflow-hidden ring-2 transition-all duration-200
        ${selected ? 'ring-[#780D80] scale-[1.03] animate-arcade-pop' : 'ring-transparent hover:ring-[#780D80]/40'}
        bg-white/5 backdrop-blur-sm ${className ?? ''}`}
      aria-pressed={selected}
    >
      {/* fondo rosado translúcido para simular los cuadros */}
      <div className="absolute inset-0 rounded-xl bg-pink-400/30" />

      {hasImage ? (
        <img
          src={teacher!.image!}
          alt={teacher!.name}
          className="absolute inset-0 w-full h-full object-cover object-center mix-blend-normal"
          draggable={false}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-white/90 font-bold text-2xl">
          {initials}
        </div>
      )}

      {/* borde brillante al hover */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-white/30 transition-colors" />

      {/* Aura y barrido estilo arcade cuando está seleccionado */}
      {selected && (
        <>
          <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-[#780D80] to-[#1E3374] opacity-50 blur animate-glow-pulse" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl" aria-hidden="true">
            <div className="scan-sweep absolute left-0 right-0 h-1/2 bg-white/20" />
          </div>
        </>
      )}
    </button>
  );
}
