type IntroSectionProps = {
  content?: string;
  className?: string;
};

export const IntroSection: React.FC<IntroSectionProps> = ({
  content = "Domina herramientas digitales avanzadas (realidad aumentada, 3D) y desarrolla identidades visuales memorables en un programa que integra creatividad, tecnología y gestión.",
  className = "",
}) => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80",
      alt: "Herramientas de diseño"
    },
    {
      url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop&q=80",
      alt: "Diseño digital"
    }
  ];

  return (
    <section className={`py-10 sm:py-16 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-[1fr_2fr] items-center">
          {/* Texto */}
          <div className="px-4 animate-fade-in-up">
            <div className="h-1 w-16 rounded-full bg-linear-to-r from-purple-600 to-pink-500 mb-6" />
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
              {content}
            </p>
          </div>

          {/* Imágenes */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg shadow-lg group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-auto aspect-3/2 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
