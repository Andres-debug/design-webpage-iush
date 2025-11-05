import { useState } from 'react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { FaBell } from 'react-icons/fa';

interface NewsletterProps {
  imageSrc: string;
}

export const Newsletter: React.FC<NewsletterProps> = ({ imageSrc }) => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Newsletter subscription:', email);
    setEmail('');
    setIsSubscribing(false);
  };

  return (
    <div className="relative overflow-hidden bg-white shadow-2xl rounded-3xl h-full min-h-[400px] flex flex-col">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0">
        <img 
          src={imageSrc} 
          alt="Newsletter" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-purple-900/60 via-purple-900/40 to-purple-900/80" />
      </div>
      
      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6 sm:p-8">
        {/* Header */}
        <div className="text-center mb-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <FaBell className="text-white text-2xl" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            ¡Mantente Informado!
          </h3>
          <p className="text-white/90 text-sm sm:text-base">
            Recibe noticias, eventos y novedades del programa
          </p>
        </div>
        
        {/* Formulario */}
        <form onSubmit={handleSubscribe} className="mt-auto space-y-3">
          <Input 
            type="email"
            name="newsletter-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
            className="w-full bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 border-2 border-white/50 text-center font-semibold focus:border-white focus:ring-2 focus:ring-white/50 rounded-full shadow-lg"
          />
          <Button 
            type="submit"
            disabled={isSubscribing}
            className="w-full bg-white text-purple-700 hover:bg-gray-100 font-bold py-4 uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
          >
            {isSubscribing ? 'Suscribiendo...' : 'Suscribirse'}
          </Button>
        </form>
        
        <p className="text-xs text-white/70 text-center mt-3">
          No spam. Cancela en cualquier momento.
        </p>
      </div>
    </div>
  );
};
