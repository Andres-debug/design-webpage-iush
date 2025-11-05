import { useState } from 'react';
import { Input } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';
import { Button } from '../atoms/Button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Aquí se manejaría el envío real del formulario
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ email: '', phone: '', name: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email y Teléfono en grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Correo Electrónico <span className="text-red-500">*</span>
          </label>
          <Input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            required
            className="w-full bg-purple-50 border-2 border-purple-200 text-gray-800 placeholder-gray-400 font-medium focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all duration-300 hover:border-purple-300 rounded-xl"
          />
        </div>
        
        <div className="relative group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Teléfono
          </label>
          <Input 
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="300 123 4567"
            className="w-full bg-pink-50 border-2 border-pink-200 text-gray-800 placeholder-gray-400 font-medium focus:border-pink-600 focus:ring-2 focus:ring-pink-600/20 transition-all duration-300 hover:border-pink-300 rounded-xl"
          />
        </div>
      </div>
      
      {/* Nombre */}
      <div className="relative group">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Nombre Completo <span className="text-red-500">*</span>
        </label>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Tu nombre completo"
          required
          className="w-full bg-blue-50 border-2 border-blue-200 text-gray-800 placeholder-gray-400 font-medium focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300 hover:border-blue-300 rounded-xl"
        />
      </div>
      
      {/* Mensaje */}
      <div className="relative group">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Cuéntanos cómo podemos ayudarte..."
          rows={5}
          required
          className="w-full bg-gray-50 border-2 border-gray-200 text-gray-800 placeholder-gray-400 font-medium focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all duration-300 hover:border-gray-300 rounded-xl resize-none"
        />
        <div className="absolute bottom-3 right-3 text-xs text-gray-400">
          {formData.message.length} caracteres
        </div>
      </div>
      
      {/* Botón de envío */}
      <div className="pt-2">
        <Button 
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-linear-to-r from-purple-600 to-pink-500 text-white font-bold py-4 uppercase tracking-wider shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 rounded-xl ${
            isSubmitting ? 'opacity-70 cursor-not-loading' : 'hover:from-purple-700 hover:to-pink-600'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Enviando...
            </span>
          ) : (
            'Enviar Mensaje'
          )}
        </Button>
      </div>
      
      {/* Nota de privacidad */}
      <p className="text-xs text-gray-500 text-center mt-4">
        Al enviar este formulario, aceptas nuestra política de privacidad y tratamiento de datos
      </p>
    </form>
  );
};
