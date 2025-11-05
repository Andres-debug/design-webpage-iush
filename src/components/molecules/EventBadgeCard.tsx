type EventBadgeCardProps = {
  imageUrl: string;
  alt: string;
  label?: string;
  className?: string;
};

export const EventBadgeCard: React.FC<EventBadgeCardProps> = ({ imageUrl, alt, label, className = "" }) => {
  return (
    <div className={`relative select-none will-change-transform transition-transform duration-300 hover:-translate-y-1 hover:-rotate-1 ${className}`}>
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white aspect-4/5 sm:aspect-3/4">
        <img src={imageUrl} alt={alt} className="block w-full h-full object-cover" loading="lazy" />
      </div>
      {label && (
        <span className="absolute -top-3 left-4 inline-flex items-center rounded-full bg-white/95 text-[#1E3374] border border-[#1E3374]/20 px-3 py-1 text-xs font-bold shadow">
          {label}
        </span>
      )}
    </div>
  );
};
