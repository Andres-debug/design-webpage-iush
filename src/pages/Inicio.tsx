import { HomeHeroSection } from '../components/organisms/HomeHeroSection';
import { IntroSection } from '../components/organisms/IntroSection';
import { HighlightSection } from '../components/organisms/HighlightSection';
import { InfoSection } from '../components/organisms/InfoSection';
import { CTASection } from '../components/organisms/CTASection';
import { IUSHCtaBanner } from '../components/organisms/IUSHCtaBanner';

export const Inicio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero con mensaje principal */}
      <HomeHeroSection
        title="Crea diseños que inspiran y comunican asertivamente"
        subtitle="Resolución de Registro Calificado: 010827 07 Jul 2023 | Código SNIES: 105364"
      />

      {/* Sección de introducción */}
      <IntroSection
        content="Domina herramientas digitales avanzadas (realidad aumentada, 3D) y desarrolla identidades visuales memorables en un programa que integra creatividad, tecnología y gestión."
      />

      {/* Carrusel de imágenes destacadas */}
      <HighlightSection backgroundColor="bg-purple-700" />

      {/* Beneficios y características del programa */}
      <InfoSection />

      {/* Descripción del programa y CTA */}
      <CTASection />

      {/* CTA hacia el sitio institucional */}
      <IUSHCtaBanner />
    </div>
  );
};
