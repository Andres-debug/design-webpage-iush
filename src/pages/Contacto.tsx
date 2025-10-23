import { HeroSection } from '../components/organisms/HeroSection';
import { ContactSection } from '../components/organisms/ContactSection';
import contactoImg from '../assets/contacto.png';

export const Contacto: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection title="Contáctanos" backgroundImage={contactoImg} />
      <ContactSection />
    </div>
  );
};
