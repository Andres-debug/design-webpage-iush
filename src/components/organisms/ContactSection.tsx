import { ContactForm } from '../molecules/ContactForm';
import { Newsletter } from '../molecules/Newsletter';
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import newsletterImg from '../../assets/newsletter.png';

export const ContactSection: React.FC = () => {

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Formulario principal y tarjeta de newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Formulario principal a la izquierda */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h2>
            <ContactForm />
          </Card>
          
          {/* Newsletter a la derecha */}
          <Newsletter imageSrc={newsletterImg} />
        </div>
        
        {/* Tarjetas de información de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tarjeta de Teléfono */}
          <Card className="bg-[#1E3374] text-white border-0 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <FaPhone className="text-[#A4B1D8]" size={24} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">(604) 645 86 15</h3>
                <p className="text-sm text-white opacity-90 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipiscing elit ad nulla leo in.
                </p>
              </div>
            </div>
          </Card>
          
          {/* Tarjeta de Email */}
          <Card className="bg-[#A4B1D8] text-white border-0 rounded-xl">
            <div className="flex items-start space-x-4 mb-6">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-[#1E3374]" size={24} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">Nuestro E-mail</h3>
                <p className="text-sm text-white opacity-90 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipiscing elit ad nulla leo in.
                </p>
              </div>
            </div>
            
            {/* Botón centrado */}
            <div className="flex justify-center">
              <div className="relative inline-block">
                {/* Triángulo pequeño arriba del botón */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-8 border-l-transparent border-r-transparent border-b-[#1E3374]"></div>
                <Button className="bg-[#1E3374] text-white hover:bg-[#0f1f4a] font-semibold py-2 px-8 rounded-lg">
                  IR A CORREO &gt;
                </Button>
              </div>
            </div>
          </Card>
          
          {/* Tarjeta de Dirección */}
          <Card className="bg-[#1E3374] text-white border-0 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-[#A4B1D8]" size={24} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">Cra 76 N° 105b-33</h3>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
