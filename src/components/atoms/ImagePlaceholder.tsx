type ImagePlaceholderProps = {
  aspectRatio?: string;
  className?: string;
  text?: string;
};

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  aspectRatio = "aspect-[4/3]",
  className = "",
  text = "FOTO DE FONDO",
}) => {
  return (
    <div
      className={`relative bg-gray-300 ${aspectRatio} flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* X diagonal */}
      <svg
        className="absolute inset-0 w-full h-full text-gray-400"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <line
          x1="100"
          y1="0"
          x2="0"
          y2="100"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </svg>
      
      {/* Texto opcional */}
      {text && (
        <span className="relative z-10 text-gray-600 font-semibold text-xs sm:text-sm tracking-wider">
          {text}
        </span>
      )}
    </div>
  );
};
