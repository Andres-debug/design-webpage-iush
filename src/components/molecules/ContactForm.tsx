import { Input } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';
import { Button } from '../atoms/Button';

export const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se manejaría el envío del formulario
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Input 
            type="email" 
            placeholder="EMAIL" 
            className="bg-[#A4B1D8] bg-opacity-20 border-2 border-[#A4B1D8] text-gray-800 placeholder-gray-600 font-medium focus:border-[#780D80] focus:ring-[#780D80] transition-all duration-300 hover:bg-opacity-30"
            style={{ borderRadius: '15px' }}
          />
        </div>
        <div className="relative">
          <Input 
            type="tel" 
            placeholder="TELEFONO" 
            className="bg-[#A4B1D8] bg-opacity-20 border-2 border-[#A4B1D8] text-gray-800 placeholder-gray-600 font-medium focus:border-[#780D80] focus:ring-[#780D80] transition-all duration-300 hover:bg-opacity-30"
            style={{ borderRadius: '15px' }}
          />
        </div>
      </div>
      
      <div className="relative">
        <Input 
          placeholder="NOMBRE" 
          className="bg-[#A4B1D8] bg-opacity-20 border-2 border-[#A4B1D8] text-gray-800 placeholder-gray-600 font-medium focus:border-[#780D80] focus:ring-[#780D80] transition-all duration-300 hover:bg-opacity-30"
          style={{ borderRadius: '15px' }}
        />
      </div>
      
      <div className="relative">
        <Textarea 
          placeholder="MENSAJE" 
          rows={5}
          className="bg-[#A4B1D8] bg-opacity-20 border-2 border-[#A4B1D8] text-gray-800 placeholder-gray-600 font-medium focus:border-[#780D80] focus:ring-[#780D80] transition-all duration-300 hover:bg-opacity-30"
          style={{ borderRadius: '15px' }}
        />
      </div>
      
      <div className="pt-2">
        <Button 
          type="submit"
          className="w-full bg-linear-to-r from-[#780D80] to-[#1E3374] text-white hover:from-[#6a0b70] hover:to-[#0f1f4a] font-bold py-4 uppercase tracking-wider shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
          style={{ borderRadius: '15px' }}
        >
          Enviar Mensaje
        </Button>
      </div>
    </form>
  );
};
