import { ContactForm } from '../molecules/ContactForm';
import { Newsletter } from '../molecules/Newsletter';
import { Card } from '../atoms/Card';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import newsletterImg from '../../assets/newsletter.png';

export const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <FaPhone className="text-white" size={24} />,
      title: "Teléfono",
      content: "(604) 645 86 15",
      description: "Lunes a Viernes de 8:00 AM a 6:00 PM",
    },
    {
      icon: <FaEnvelope className="text-white" size={24} />,
      title: "Correo Electrónico",
      content: "info@iush.edu.co",
      description: "Escríbenos y te responderemos pronto",
      action: {
        label: "Enviar Email",
        href: "mailto:info@iush.edu.co"
      }
    },
    {
      icon: <FaMapMarkerAlt className="text-white" size={24} />,
      title: "Ubicación",
      content: "Cra 76 N° 105b-33",
      description: "Medellín, Antioquia - Colombia",
    },
    {
      icon: <FaWhatsapp className="text-white" size={24} />,
      title: "WhatsApp",
      content: "+57 300 123 4567",
      description: "Chatea con nosotros",
      action: {
        label: "Abrir Chat",
        href: "https://wa.me/573001234567"
      }
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de sección */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Estamos aquí para ayudarte
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestro programa? Contáctanos y con gusto te asesoraremos
          </p>
          <div className="h-1 w-24 bg-linear-to-r from-purple-600 to-pink-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Grid principal: Formulario y Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Formulario - Ocupa 3 columnas */}
          <div className="lg:col-span-3 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <Card className="p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-linear-to-r from-purple-600 to-pink-500 flex items-center justify-center">
                  <FaEnvelope className="text-white" size={20} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Envíanos un mensaje
                </h2>
              </div>
              <ContactForm />
            </Card>
          </div>
          
          {/* Newsletter - Ocupa 2 columnas */}
          <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Newsletter imageSrc={newsletterImg} />
          </div>
        </div>
        
        {/* Tarjetas de información de contacto (estilo sobrio con acento) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {/* Línea de acento superior */}
              <div className="absolute inset-x-6 top-0 h-1 bg-linear-to-r from-purple-600 to-pink-500 rounded-b-full" />

              {/* Icono */}
              <div className="w-14 h-14 bg-linear-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mb-4 text-white shadow-md">
                {info.icon}
              </div>

              {/* Título */}
              <h3 className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                {info.title}
              </h3>

              {/* Contenido principal */}
              <p className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                {info.content}
              </p>

              {/* Descripción */}
              <p className="text-sm text-gray-600 mb-4">
                {info.description}
              </p>

              {/* Botón de acción si existe */}
              {info.action && (
                <a
                  href={info.action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:opacity-90"
                >
                  {info.action.label} →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Mapa o información adicional */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
          <Card className="overflow-hidden shadow-xl border border-gray-100">
            <div className="aspect-video w-full bg-gray-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d-75.5812!3d6.2476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTQnNTEuNCJOIDc1wrAzNCw1Mi4zIlc!5e0!3m2!1sen!2sco!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Ubicación IUSH"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
