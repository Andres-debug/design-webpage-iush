import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

type HighlightSectionProps = {
  backgroundColor?: string;
  className?: string;
};

export const HighlightSection: React.FC<HighlightSectionProps> = ({
  backgroundColor = "bg-purple-700",
  className = "",
}) => {
  // Imágenes de ejemplo relacionadas con diseño gráfico
  const images = [
    {
      url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
      alt: "Diseño gráfico en tablet"
    },
    {
      url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      alt: "Paleta de colores"
    },
    {
      url: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop",
      alt: "Diseño creativo"
    },
    {
      url: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&h=600&fit=crop",
      alt: "Ilustración digital"
    },
    {
      url: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
      alt: "Workspace creativo"
    },
  ];

  return (
    <section className={`py-12 sm:py-20 ${backgroundColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          loop={true}
          className="highlight-swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="w-[280px]! sm:w-[400px]!">
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
