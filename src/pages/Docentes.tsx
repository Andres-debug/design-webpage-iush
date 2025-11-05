import { TeachersShowcase } from '../components/organisms/TeachersShowcase';
import { TeachersStorySection } from '../components/organisms/TeachersStorySection';
import { IUSHCtaBanner } from '../components/organisms/IUSHCtaBanner';

export const Docentes: React.FC = () => {
  return (
    <>
      <TeachersShowcase />
      <TeachersStorySection
        title="Cada Docente tiene una historia y está dispuesto a escribir la tuya"
        description="Detrás de cada clase hay años de experiencia, proyectos reales y una vocación por acompañarte. Conoce a quienes harán parte de tu proceso y descubre cómo su trayectoria puede potenciar la tuya."
        imageSrc="/teachers/Edison.png"
        imageAlt="Docente del programa de Diseño Gráfico"
        ctaLabel="Escríbenos"
        ctaHref="/contacto"
        className="bg-white"
      />
      <IUSHCtaBanner />
    </>
  );
};
