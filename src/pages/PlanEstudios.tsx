import { HeroSection } from '../components/organisms/HeroSection';
import { CurriculumGrid } from '../components/organisms/CurriculumGrid';

export const PlanEstudios: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection title="Plan de Estudios" />
      <CurriculumGrid />
    </div>
  );
};
