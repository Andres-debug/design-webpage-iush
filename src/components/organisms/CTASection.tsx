type CTASectionProps = {
  className?: string;
};

export const CTASection: React.FC<CTASectionProps> = ({ className = "" }) => {
  return (
    <section className={`py-12 sm:py-20 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Descripción del programa */}
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Tu camino profesional comienza aquí
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            El programa de Diseño Gráfico te prepara para ser un profesional completo en el mundo del diseño visual. 
            Combinando teoría y práctica, aprenderás a crear soluciones visuales innovadoras que comuniquen efectivamente, 
            utilizando tanto técnicas tradicionales como las últimas herramientas digitales. Desarrollarás un portafolio 
            competitivo mientras trabajas en proyectos reales que desafían tu creatividad.
          </p>
        </div>

        {/* CTA con imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          {/* Imagen */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-linear-to-r from-purple-600/20 to-pink-500/20 rounded-2xl blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop&q=80"
                alt="Estudiantes de diseño gráfico"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-purple-900/30 to-transparent" />
            </div>
          </div>

          {/* Contenido CTA */}
          <div className="order-1 lg:order-2">
            <div className="bg-linear-to-r from-purple-600 to-pink-500 rounded-2xl p-8 sm:p-10 text-white shadow-2xl">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                ¡Descubre más sobre nuestra oferta académica!
              </h3>
              <p className="text-base sm:text-lg mb-8 opacity-95 leading-relaxed">
                Únete a la comunidad de conocimiento que está cambiando el mundo. 
                Visita nuestro sitio web y comienza a crear tu futuro, hoy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contacto"
                  className="inline-block text-center bg-white text-purple-700 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Contáctanos
                </a>
                <a
                  href="/plan-estudios"
                  className="inline-block text-center bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-purple-700 transition-all duration-300"
                >
                  Ver Plan de Estudios
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
