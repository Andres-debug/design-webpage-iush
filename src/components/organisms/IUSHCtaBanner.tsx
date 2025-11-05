type IUSHCtaBannerProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export const IUSHCtaBanner: React.FC<IUSHCtaBannerProps> = ({
  title = "¿Quieres conocer más?",
  description = "Visita el sitio oficial de la Institución Universitaria Salazar y Herrera y explora toda la oferta académica.",
  ctaLabel = "Ir al sitio IUSH",
  ctaHref = "https://www.iush.edu.co/",
  className = "",
}) => {
  return (
    <section className={`py-8 sm:py-10 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm">
          {/* Acento superior */}
          <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-purple-600 to-pink-500" />

          <div className="relative grid gap-4 sm:gap-6 sm:grid-cols-[1fr_auto] items-center p-6 sm:p-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-1">{description}</p>
            </div>

            <div className="flex sm:justify-end">
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold px-5 py-3 rounded-lg shadow hover:opacity-90 transition"
              >
                {ctaLabel}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v4.69a.75.75 0 001.5 0v-6.5A.75.75 0 0014.25 5h-6.5a.75.75 0 000 1.5h4.69L5.22 13.72a.75.75 0 000 1.06z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
