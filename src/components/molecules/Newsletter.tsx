import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

interface NewsletterProps {
  imageSrc: string;
}

export const Newsletter: React.FC<NewsletterProps> = ({ imageSrc }) => {
  return (
    <div 
      className="relative overflow-hidden bg-white shadow-lg"
      style={{ 
        borderRadius: '65px',
        aspectRatio: '589/585'
      }}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img 
          src={imageSrc} 
          alt="Newsletter" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Formulario flotante en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div 
          className=" shadow-xl p-8 space-y-4"
          style={{ borderRadius: '50px' }}
        >
          <Input 
            type="email" 
            placeholder="EMAIL" 
            className="w-full bg-white text-gray-900 placeholder-gray-800 border-0 text-center font-semibold border-purple-200"
            style={{ borderRadius: '50px' }}
          />
          <Button 
            className="w-full bg-[#780D80] text-white hover:bg-[#6a0b70] font-bold py-4 uppercase tracking-wide"
            style={{ borderRadius: '50px' }}
          >
            Suscribirse
          </Button>
        </div>
      </div>
    </div>
  );
};
