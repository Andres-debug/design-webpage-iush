import { HeroSection } from '../components/organisms/HeroSection';
import { ContactSection } from '../components/organisms/ContactSection';
import { IUSHCtaBanner } from '../components/organisms/IUSHCtaBanner';
import contactoImg from '../assets/contacto.png';

export const Contacto: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection 
        title="Contáctanos" 
        subtitle="Estamos aquí para resolver todas tus dudas sobre el programa de Diseño Gráfico"
        backgroundImage={contactoImg}
        ctaLabel="Ir al sitio IUSH"
        ctaHref="https://www.iush.edu.co/"
        ctaExternal
      />
      <ContactSection />
      <IUSHCtaBanner />
    </div>
  );
};
