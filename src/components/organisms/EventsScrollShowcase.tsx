import { useEffect, useRef, useState } from "react";
import { EventBadgeCard } from "../molecules/EventBadgeCard";
import ilustronikImg from "../../assets/eventos/ilustronik.png";
import conexosImg from "../../assets/eventos/conexos.png";
import colombiaModaImg from "../../assets/eventos/colombiamoda.jpg";
import conexos1 from "../../assets/eventos/conexos1.png";
import conexos2 from "../../assets/eventos/conexos2.jpg";
import conexos3 from "../../assets/eventos/conexos3.png";
import moda1 from "../../assets/eventos/moda1.png";
import moda2 from "../../assets/eventos/moda2.png";
import moda3 from "../../assets/eventos/moda3.png";
import ilustronik1 from "../../assets/eventos/ilustronik1.jpg";
import ilustronik2 from "../../assets/eventos/ilustronik2.jpg";
import ilustronik3 from "../../assets/eventos/ilustronik3.jpg";

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
  // Escena 2: fade in entre 0.35 y 0.5, visible plena hasta 0.7, fade out hasta 0.78
  const scene2In = Math.max(0, Math.min(1, (progress - 0.35) / 0.15));
  const scene2Out = progress < 0.7 ? 1 : Math.max(0, Math.min(1, (0.78 - progress) / 0.08));
  const scene2Opacity = Math.min(scene2In, scene2Out);
  const scene1Translate = `translateY(${progress * 30}px)`;
  const scene2Translate = `translateY(${(1 - scene2Opacity) * 30}px)`;
  // Escena 3: aparece desde 0.8 para evitar mezcla con escena 2
  const scene3In = Math.max(0, Math.min(1, (progress - 0.8) / 0.12));
  const scene3Out = progress < 0.94 ? 1 : Math.max(0, Math.min(1, (1.0 - progress) / 0.06));
  const scene3Opacity = Math.min(scene3In, scene3Out);
  const scene3Translate = `translateY(${(1 - scene3Opacity) * 30}px)`;
  // Escena 4: Ilustronik, aparece al final
  const scene4Opacity = Math.max(0, Math.min(1, (progress - 0.93) / 0.07));
  const scene4Translate = `translateY(${(1 - scene4Opacity) * 30}px)`;

  const events = [
    { url: ilustronikImg, alt: "Ilustronik", label: "Ilustronik" },
    { url: conexosImg, alt: "Conexos", label: "Conexos" },
    { url: colombiaModaImg, alt: "Colombia Moda", label: "Colombia Moda" },
  ];

  const collage = [conexos1, conexos2, conexos3];
  const modaCollage = [moda1, moda2, moda3];
  const ilustronikCollage = [ilustronik1, ilustronik2, ilustronik3];

  return (
  <section ref={containerRef} className="relative" style={{ height: "440vh" }}>
      {/* elemento sticky que vive 100vh */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Scene 1: Hero tarjetas */}
  <div className={`absolute inset-0 ${scene1Opacity > 0.02 ? 'pointer-events-auto' : 'pointer-events-none'}`} style={{ opacity: scene1Opacity, transform: scene1Translate as React.CSSProperties['transform'] }} aria-hidden={scene1Opacity <= 0.02}>
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
          className={`absolute inset-0 px-0 sm:px-6 bg-purple-700 ${scene2Opacity > 0.02 ? 'pointer-events-auto' : 'pointer-events-none'}`}
          style={{ opacity: scene2Opacity, transform: scene2Translate as React.CSSProperties['transform'] }}
          aria-hidden={scene2Opacity <= 0.02}
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

        {/* Scene 3: Colombia Moda */}
        <div
          id="colombiamoda"
          className={`absolute inset-0 px-0 sm:px-6 bg-purple-700 ${scene3Opacity > 0.02 ? 'pointer-events-auto' : 'pointer-events-none'}`}
          style={{ opacity: scene3Opacity, transform: scene3Translate as React.CSSProperties['transform'] }}
          aria-hidden={scene3Opacity <= 0.02}
        >
          <div className="max-w-7xl mx-auto h-full grid lg:grid-cols-2 gap-10 items-center py-10 sm:py-14">
            {/* Collage */}
            <div className="relative h-[60vh] hidden md:block">
              <img
                src={modaCollage[0]}
                alt="Colombia Moda 1"
                className="absolute z-10 w-[78%] md:w-[70%] rounded-xl shadow-2xl -top-16 -left-6 -rotate-3 ring-2 ring-white/80 cursor-pointer transition-transform duration-300 ease-out will-change-transform hover:scale-105 hover:-translate-y-1 hover:z-50 hover:ring-4 hover:ring-white"
              />
              <img
                src={modaCollage[1]}
                alt="Colombia Moda 2"
                className="absolute z-20 w-[78%] md:w-[70%] rounded-xl shadow-2xl top-20 left-10 rotate-1 ring-2 ring-white/80 cursor-pointer transition-transform duration-300 ease-out will-change-transform hover:scale-105 hover:-translate-y-1 hover:z-50 hover:ring-4 hover:ring-white"
              />
              <img
                src={modaCollage[2]}
                alt="Colombia Moda 3"
                className="absolute z-30 w-[78%] md:w-[70%] rounded-xl shadow-2xl top-56 left-16 rotate-3 ring-2 ring-white/80 cursor-pointer transition-transform duration-300 ease-out will-change-transform hover:scale-105 hover:-translate-y-1 hover:z-50 hover:ring-4 hover:ring-white"
              />
            </div>
            {/* Collage móvil simplificado */}
            <div className="md:hidden -mt-2 px-6 flex flex-col gap-4">
              <img src={modaCollage[0]} alt="Colombia Moda 1" className="w-full rounded-2xl shadow-2xl" />
              <img src={modaCollage[1]} alt="Colombia Moda 2" className="w-11/12 rounded-2xl shadow-2xl self-center rotate-1" />
              <img src={modaCollage[2]} alt="Colombia Moda 3" className="w-10/12 rounded-2xl shadow-2xl self-end rotate-2" />
            </div>
            {/* Texto */}
            <div className="rounded-3xl p-8 sm:p-10 text-white">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">Colombia Moda</h3>
              <p className="font-semibold text-white/95 mb-4">El futuro del diseño en la vitrina nacional.</p>
              <p className="text-white/90 leading-relaxed text-base md:text-lg">
                Nuestra participación en Colombia Moda es el punto cumbre de la colaboración académica, uniendo el talento de Diseño Gráfico, Animación, Música y Modas para amplificar el impacto de la Pasarela de Modas. Este escenario de élite se convierte en la plataforma ideal para proyectar la identidad creativa de la universidad y de nuestros estudiantes a un público nacional e internacional. Las disciplinas convergen para crear una experiencia sensorial inmersiva, donde la forma de vestir es un manifiesto audaz del futuro del diseño.
              </p>
            </div>
          </div>
        </div>

        {/* Scene 4: Ilustronik (dentro del sticky) */}
        <div
          id="ilustronik"
          className={`absolute inset-0 px-0 sm:px-6 bg-purple-700 ${scene4Opacity > 0.02 ? 'pointer-events-auto' : 'pointer-events-none'}`}
          style={{ opacity: scene4Opacity, transform: scene4Translate as React.CSSProperties['transform'] }}
          aria-hidden={scene4Opacity <= 0.02}
        >
          <div className="max-w-7xl mx-auto h-full grid lg:grid-cols-2 gap-10 items-center py-10 sm:py-14">
            {/* Collage */}
            <div className="relative h-[60vh] hidden md:block">
              <img
                src={ilustronikCollage[0]}
                alt="Ilustronik 1"
                className="absolute z-10 w-[80%] md:w-[75%] rounded-xl shadow-2xl -top-16 -left-10 -rotate-6 ring-2 ring-white/80 cursor-pointer transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:z-50 hover:ring-4 hover:ring-white hover:shadow-2xl"
              />
              <img
                src={ilustronikCollage[1]}
                alt="Ilustronik 2"
                className="absolute z-20 w-[78%] md:w-[70%] rounded-xl shadow-2xl top-20 left-8 -rotate-2 ring-2 ring-white/80 cursor-pointer transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:z-50 hover:ring-4 hover:ring-white hover:shadow-2xl"
              />
              <img
                src={ilustronikCollage[2]}
                alt="Ilustronik 3"
                className="absolute z-30 w-[70%] md:w-[60%] rounded-xl shadow-2xl top-48 left-16 rotate-3 ring-2 ring-[#1E3374] cursor-pointer transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:z-50 hover:ring-4 hover:ring-[#1E3374] hover:shadow-2xl"
              />
            </div>
            {/* Collage móvil */}
            <div className="md:hidden -mt-2 px-6 flex flex-col gap-4">
             <img src={ilustronikCollage[0]} alt="Colombia Moda 1" className="w-full rounded-2xl shadow-2xl" />
              <img src={ilustronikCollage[1]} alt="Colombia Moda 2" className="w-11/12 rounded-2xl shadow-2xl self-center rotate-1" />
              <img src={ilustronikCollage[2]} alt="Colombia Moda 3" className="w-10/12 rounded-2xl shadow-2xl self-end rotate-2" />
            </div>
            {/* Texto */}
            <div className="rounded-3xl p-8 sm:p-10 text-white">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">Ilustronik</h3>
              <p className="font-semibold text-white/95 mb-4">Arte, técnica y emprendimiento estudiantil.</p>
              <p className="text-white/90 leading-relaxed text-base md:text-lg">
                Creado por y para nuestros estudiantes, Ilustronik es la celebración de la cultura del sticker dentro de nuestra universidad. Este encuentro permite a los participantes mostrar sus destrezas y dominio técnico mediante diversas metodologías de ilustración y diseño. Además de ser una valiosa vitrina para su arte, facilita la generación de ingresos, promoviendo el desarrollo de habilidades profesionales y de autonomía económica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
