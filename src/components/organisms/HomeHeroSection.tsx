type HomeHeroSectionProps = {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  className?: string;
};

export const HomeHeroSection: React.FC<HomeHeroSectionProps> = ({
  title = "Diseño Gráfico",
  subtitle = "El arte de comunicar visualmente",
  imageUrl = "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1920&h=1080&fit=crop&q=80",
  className = "",
}) => {
  return (
    <section className={`relative ${className}`}>
      {/* Imagen de fondo */}
      <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <img
          src={imageUrl}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Texto superpuesto */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl mb-4 max-w-5xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm sm:text-base md:text-lg text-white/95 drop-shadow-lg max-w-3xl font-medium">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
