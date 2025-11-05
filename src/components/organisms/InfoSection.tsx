type InfoItem = {
  title?: string;
  content: string;
  icon?: string;
};

type InfoSectionProps = {
  items?: InfoItem[];
  className?: string;
};

export const InfoSection: React.FC<InfoSectionProps> = ({
  items = [
    {
      icon: "🎨",
      content:
        "Ilustración avanzada: Domina técnicas de ilustración digital y desarrollo de objetos gráficos con estándares profesionales.",
    },
    {
      icon: "🚀",
      content:
        "Tecnologías emergentes: Aprende realidad aumentada, virtual, video mapping y diseño 3D para proyectos innovadores.",
    },
    {
      icon: "💼",
      content:
        "Gestión de marcas: Desarrolla habilidades estratégicas para crear y administrar identidades visuales impactantes.",
    },
    {
      icon: "💻",
      content:
        "Plataformas digitales: Trabaja con los softwares más demandados en la industria del diseño gráfico.",
    },
    {
      icon: "🤝",
      content:
        "Enfoque multidisciplinar: Colabora con otros programas creativos para desarrollar proyectos integrales.",
    },
  ],
  className = "",
}) => {
  return (
    <section className={`py-12 sm:py-20 bg-linear-to-b from-gray-50 to-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Título de sección */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Qué aprenderás?
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-purple-600 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Grid de características */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icono */}
              {item.icon && (
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              )}

              {/* Título si existe */}
              {item.title && (
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
              )}

              {/* Contenido */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
