interface HeroSectionProps {
  title: string;
  backgroundImage?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaExternal?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  backgroundImage,
  subtitle,
  ctaLabel,
  ctaHref,
  ctaExternal = false,
}) => {
  return (
    <div 
      className="relative h-[50vh] sm:h-[60vh] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: backgroundImage 
          ? `url(${backgroundImage})` 
          : 'linear-gradient(135deg, #780D80 0%, #1E3374 100%)'
      }}
    >
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-linear-to-b from-purple-900/70 via-purple-900/50 to-purple-900/80"></div>
      
      {/* Pattern overlay opcional */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCA4LjcyLTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-white/90 drop-shadow-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      
      {/* Breadcrumb mejorado */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-white/95 backdrop-blur-sm rounded-t-3xl px-4 sm:px-8 py-4 sm:py-5 shadow-lg">
          <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
            <p className="text-gray-700 text-xs sm:text-sm font-medium">
              <span className="text-gray-500">Inicio</span>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-purple-700 font-bold">{title}</span>
            </p>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></div>
                <span className="text-xs text-gray-500">Institución Universitaria Salazar y Herrera</span>
              </div>
              {ctaHref && (
                <a
                  href={ctaHref}
                  {...(ctaExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-pink-500 text-white font-bold px-4 py-2 rounded-lg text-xs sm:text-sm shadow hover:opacity-90 transition"
                >
                  {ctaLabel ?? 'Ir al sitio IUSH'}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v4.69a.75.75 0 001.5 0v-6.5A.75.75 0 0014.25 5h-6.5a.75.75 0 000 1.5h4.69L5.22 13.72a.75.75 0 000 1.06z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
