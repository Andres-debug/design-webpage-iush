import { HeroSection } from '../components/organisms/HeroSection';
import { ContactSection } from '../components/organisms/ContactSection';
import contactoImg from '../assets/contacto.png';

export const Contacto: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection 
        title="Contáctanos" 
        subtitle="Estamos aquí para resolver todas tus dudas sobre el programa de Diseño Gráfico"
        backgroundImage={contactoImg} 
      />
      <ContactSection />
    </div>
  );
};
