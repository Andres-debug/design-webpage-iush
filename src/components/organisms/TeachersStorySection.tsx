import { Link } from "../atoms/Link";

type TeachersStorySectionProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export const TeachersStorySection: React.FC<TeachersStorySectionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "Docente presentando su experiencia",
  ctaLabel = "Escríbenos",
  ctaHref = "/contacto",
  className = "",
}) => {
  return (
    <section className={`relative py-12 sm:py-16 ${className}`}>
  <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/60 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 animate-fade-in-up">
        <div className="grid items-center gap-8 sm:gap-12 sm:grid-cols-2">
          {/* Texto */}
          <div>
            <div className="h-1 w-16 rounded-full bg-linear-to-r from-purple-600 to-pink-500 mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {description}
            </p>

            <Link
              to={ctaHref}
              className="inline-flex items-center gap-2 rounded-md bg-purple-600 px-5 py-2 text-white shadow-md shadow-purple-600/30 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/40 transition"
            >
              {ctaLabel}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l6 6a.75.75 0 01-1.06 1.06L14.75 6.81v11.44a.75.75 0 01-1.5 0V6.81l-4.22 4.22a.75.75 0 11-1.06-1.06l6-6z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="absolute -inset-2 rounded-xl bg-linear-to-r from-purple-600/10 to-pink-500/10 blur-lg" />
            <div className="relative overflow-hidden rounded-xl ring-1 ring-black/5 shadow-xl bg-white/60 supports-backdrop-filter:backdrop-blur-sm">
              <img
                src={imageSrc}
                alt={imageAlt}
                loading="lazy"
                className="block w-full h-auto object-cover animate-photo-reveal"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
