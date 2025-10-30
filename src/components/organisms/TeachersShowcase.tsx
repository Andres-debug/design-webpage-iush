import React, { useMemo, useState } from 'react';
import teachersData from '../../data/teachers.json';
import { TeacherGrid } from '../molecules/TeacherGrid';
import type { Teacher } from '../atoms/TeacherAvatar';
import { TeacherProfileModal, type TeacherProfile } from './TeacherProfileModal';

export const TeachersShowcase: React.FC = () => {
  const teachers = useMemo(() => teachersData as unknown as Teacher[], []);
  const [selected, setSelected] = useState<Teacher | null>(teachers[0] ?? null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <section className="relative min-h-[70vh] py-12 sm:py-16 bg-linear-to-b from-[#2a0a3a] to-[#0d1436] text-white overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,rgba(120,13,128,0.35),transparent_50%)]"/>
  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[24px_24px]"/>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
          <p className="text-sm tracking-widest text-white/80 font-semibold">IUSH</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">DISEÑO <span className="text-white/90">GRÁFICO</span></h2>
          <p className="mt-2 text-white/75">Planta de Docentes</p>
        </div>

        {/* Grilla + Panel */}
        <div className="grid lg:grid-cols-[1fr_minmax(320px,520px)_1fr] gap-6 items-start">
          {/* Lado izquierdo */}
          <div className="hidden lg:block">
            <TeacherGrid
              teachers={teachers.slice(0, Math.ceil(teachers.length/2))}
              selectedId={selected?.id}
              onSelect={(_, t) => setSelected(t)}
              avatarSizeClasses="w-24 h-24 xl:w-28 xl:h-28"
            />
          </div>

          {/* Panel central */}
          <div key={selected?.id} className="relative rounded-3xl p-6 sm:p-8 bg-white/10 backdrop-blur-xl ring-1 ring-white/10 shadow-2xl animate-arcade-pop">
            <div className="flex flex-col items-center text-center gap-5">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden ring-2 ring-white/20 shadow-xl">
                {/* Flash neon al aparecer */}
                <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-linear-to-r from-[#780D80] to-[#1E3374] opacity-0 animate-neon-flash" />
                {selected?.image ? (
                  <img src={selected.image} alt={selected.name} className="w-full h-full object-cover animate-photo-reveal" />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-[#780D80] to-[#1E3374] flex items-center justify-center text-6xl font-extrabold animate-photo-reveal">
                    {selected?.name?.charAt(0) ?? '?'}
                  </div>
                )}
                {/* barrido al aparecer (más sutil) */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                  <div className="scan-sweep absolute left-0 right-0 h-1/3 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.3),rgba(255,255,255,0))]" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold animate-name-slide">{selected?.name ?? 'Selecciona un docente'}</h3>
                {selected?.role && (
                  <p className="text-white/80">{selected.role}</p>
                )}
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  className="px-4 py-2 rounded-lg bg-pink-500/30 hover:bg-pink-500/40 transition-colors font-semibold"
                  onClick={() => setIsProfileOpen(true)}
                >
                  Ver perfil
                </button>
              </div>
            </div>
          </div>

          {/* Lado derecho */}
          <div className="hidden lg:block">
            <TeacherGrid
              teachers={teachers.slice(Math.ceil(teachers.length/2))}
              selectedId={selected?.id}
              onSelect={(_, t) => setSelected(t)}
              avatarSizeClasses="w-24 h-24 xl:w-28 xl:h-28"
            />
          </div>
        </div>

        {/* En móviles, la grilla bajo el panel */}
        <div className="mt-8 lg:hidden">
          <TeacherGrid
            teachers={teachers}
            selectedId={selected?.id}
            onSelect={(_, t) => setSelected(t)}
            avatarSizeClasses="w-28 h-28"
          />
        </div>
      </div>

      {/* Modal de perfil */}
      <TeacherProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        teacher={selected as unknown as TeacherProfile}
      />
    </section>
  );
}
