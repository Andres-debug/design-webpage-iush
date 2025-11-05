import { ImagePlaceholder } from "../atoms/ImagePlaceholder";

type ContentBlockProps = {
  text: string;
  imagePlaceholders?: number;
  imageAspectRatio?: string;
  layout?: "text-left" | "text-right";
  className?: string;
};

export const ContentBlock: React.FC<ContentBlockProps> = ({
  text,
  imagePlaceholders = 2,
  imageAspectRatio = "aspect-square",
  layout = "text-left",
  className = "",
}) => {
  const isTextLeft = layout === "text-left";

  return (
    <div
      className={`grid gap-4 sm:gap-6 ${
        imagePlaceholders === 1
          ? "sm:grid-cols-2"
          : "grid-cols-1 sm:grid-cols-[1fr_2fr]"
      } items-center ${className}`}
    >
      {/* Texto */}
      {isTextLeft && (
        <div className="px-4">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {text}
          </p>
        </div>
      )}

      {/* Imágenes */}
      {imagePlaceholders === 1 ? (
        <ImagePlaceholder aspectRatio={imageAspectRatio} />
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {Array.from({ length: imagePlaceholders }).map((_, i) => (
            <ImagePlaceholder key={i} aspectRatio={imageAspectRatio} text="" />
          ))}
        </div>
      )}

      {!isTextLeft && (
        <div className="px-4">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {text}
          </p>
        </div>
      )}
    </div>
  );
};
