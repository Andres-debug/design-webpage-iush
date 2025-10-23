interface HeroSectionProps {
  title: string;
  backgroundImage?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, backgroundImage }) => {
  return (
    <div 
      className="relative h-96 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: backgroundImage 
          ? `url(${backgroundImage})` 
          : 'linear-gradient(135deg, #780D80 0%, #1E3374 100%)'
      }}
    >
      {/* Overlay con color morado institucional */}
      <div className="absolute inset-0 bg-[#780D80] opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            {title}
          </h1>
        </div>
      </div>
      
      {/* Breadcrumb */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-white rounded-t-2xl px-8 py-4">
          <p className="text-gray-700 text-sm">
            Institución Universitaria Salazar y Herrera | <span className="font-semibold">CONTACTO</span>
          </p>
        </div>
      </div>
    </div>
  );
};
