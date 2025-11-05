import { HeroSection } from '../components/organisms/HeroSection';
import { CurriculumGrid } from '../components/organisms/CurriculumGrid';
import { IUSHCtaBanner } from '../components/organisms/IUSHCtaBanner';

export const PlanEstudios: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection title="Plan de Estudios" ctaLabel="Ir al sitio IUSH" ctaHref="https://www.iush.edu.co/" ctaExternal />
      <CurriculumGrid />
      <IUSHCtaBanner />
    </div>
  );
};
