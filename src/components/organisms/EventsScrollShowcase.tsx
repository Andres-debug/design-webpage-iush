import { useEffect, useRef, useState } from "react";
import { EventBadgeCard } from "../molecules/EventBadgeCard";
import ilustronikImg from "../../assets/eventos/ilustronik.png";
import conexosImg from "../../assets/eventos/conexos.png";
import colombiaModaImg from "../../assets/eventos/colombiamoda.jpg";
import conexos1 from "../../assets/eventos/conexos1.png";
import conexos2 from "../../assets/eventos/conexos2.jpg";
import conexos3 from "../../assets/eventos/conexos3.png";

// Hook simple para progreso de scroll entre 0 y 1 dentro de un contenedor
function useScrollProgress(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh; // altura "scrollable" del contenedor
      const passed = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? passed / total : 0;
      setProgress(Math.max(0, Math.min(1, p)));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [containerRef]);

  return progress;
}

export const EventsScrollShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);

  // Definir opacidades y transformaciones básicas por progreso
  const scene1Opacity = 1 - Math.min(1, progress * 2);
  const scene2Opacity = Math.max(0, (progress - 0.35) * 1.6);
  const scene1Translate = `translateY(${progress * 30}px)`;
  const scene2Translate = `translateY(${(1 - scene2Opacity) * 30}px)`;

  const events = [
    { url: ilustronikImg, alt: "Ilustronik", label: "Ilustronik" },
    { url: conexosImg, alt: "Conexos", label: "Conexos" },
    { url: colombiaModaImg, alt: "Colombia Moda", label: "Colombia Moda" },
  ];

  const collage = [conexos1, conexos2, conexos3];

  return (
    <section ref={containerRef} className="relative" style={{ height: "220vh" }}>
      {/* elemento sticky que vive 100vh */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Scene 1: Hero tarjetas */}
        <div className="absolute inset-0" style={{ opacity: scene1Opacity, transform: scene1Translate as React.CSSProperties['transform'] }}>
          <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-center px-6 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#6b21a8] mb-8">
              Un lugar para exhibir tu arte
            </h2>
            <div className="flex items-end gap-6 md:gap-10">
              <EventBadgeCard className="w-36 sm:w-48 md:w-56 lg:w-64" imageUrl={events[0].url} alt={events[0].alt} label={events[0].label} />
              <EventBadgeCard className="w-44 sm:w-56 md:w-64 lg:w-72 -rotate-1" imageUrl={events[1].url} alt={events[1].alt} label={events[1].label} />
              <EventBadgeCard className="w-36 sm:w-48 md:w-56 lg:w-64 rotate-1" imageUrl={events[2].url} alt={events[2].alt} label={events[2].label} />
            </div>
            <p className="mt-8 max-w-2xl text-gray-600 text-lg md:text-xl">
              El arte no se queda en el escritorio. Descubre dónde puedes llevar tu proyecto.
            </p>
            <a
              href="#conexos"
              className="mt-6 inline-block rounded-full bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold px-8 py-3 shadow hover:opacity-90"
            >
              Conoce más
            </a>
          </div>
        </div>

        {/* Scene 2: Conexos panel */}
        <div
          id="conexos"
          className="absolute inset-0 px-0 sm:px-6 bg-purple-700"
          style={{ opacity: scene2Opacity, transform: scene2Translate as React.CSSProperties['transform'] }}
        >
          <div className="max-w-7xl mx-auto h-full grid lg:grid-cols-2 gap-10 items-center py-10 sm:py-14">
            {/* Collage */}
            <div className="relative h-[58vh] hidden md:block">
              <img
                src={collage[0]}
                alt="Conexos artwork 1"
                className="absolute z-10 w-[80%] md:w-[75%] rounded-xl shadow-2xl -top-16 -left-10 -rotate-6 ring-2 ring-white/80 cursor-pointer transition-transform duration-300 ease-out will-change-transform hover:scale-105 hover:-translate-y-1 hover:z-50 hover:ring-4 hover:ring-white hover:shadow-2xl"
              />
              <img
                src={collage[1]}
                alt="Conexos artwork 2"
                className="absolute z-20 w-[78%] md:w-[70%] rounded-xl shadow-2xl top-20 left-8 -rotate-2 ring-2 ring-white/80 cursor-pointer transition-transform duration-300 ease-out will-change-transform hover:scale-105 hover:-translate-y-1 hover:z-50 hover:ring-4 hover:ring-white hover:shadow-2xl"
              />
              <img
                src={collage[2]}
                alt="Conexos artwork 3"
                className="absolute z-30 w-[70%] md:w-[60%] rounded-xl shadow-2xl top-48 left-16 rotate-3 ring-2 ring-[#1E3374] cursor-pointer transition-transform duration-300 ease-out will-change-transform hover:scale-105 hover:-translate-y-1 hover:z-50 hover:ring-4 hover:ring-[#1E3374] hover:shadow-2xl"
              />
            </div>
            {/* Collage móvil simplificado */}
            <div className="md:hidden -mt-2 px-6">
              <img src={collage[0]} alt="Conexos artwork" className="w-full rounded-2xl shadow-2xl" />
            </div>
            
            {/* Texto panel morado */}
            <div className="rounded-3xl p-8 sm:p-10 text-white">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">Conexos</h3>
              <p className="text-white/95 leading-relaxed mb-4 text-base md:text-lg">
                Exposición de logros académicos semestrales. Este evento culminante es la recopilación más selecta de los proyectos desarrollados a lo largo del semestre en las disciplinas de Diseño Gráfico, Animación y Modas.
              </p>
              <p className="text-white/90 leading-relaxed text-base md:text-lg">
                Es una vitrina donde nuestros estudiantes demuestran su maestría técnica y sus habilidades creativas que definen sus carreras, validando ante la universidad y la comunidad académica sus capacidades y virtudes como futuros profesionales del diseño.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
