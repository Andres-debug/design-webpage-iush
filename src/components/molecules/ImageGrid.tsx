import { ImagePlaceholder } from "../atoms/ImagePlaceholder";

type ImageGridProps = {
  images?: number;
  layout?: "three-horizontal" | "custom";
  aspectRatio?: string;
  className?: string;
};

export const ImageGrid: React.FC<ImageGridProps> = ({
  images = 3,
  layout = "three-horizontal",
  aspectRatio = "aspect-square",
  className = "",
}) => {
  if (layout === "three-horizontal") {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 ${className}`}>
        {Array.from({ length: images }).map((_, i) => (
          <ImagePlaceholder
            key={i}
            aspectRatio={aspectRatio}
            text=""
            className={i === 1 ? "sm:col-span-1" : ""}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={`grid gap-4 ${className}`}>
      {Array.from({ length: images }).map((_, i) => (
        <ImagePlaceholder key={i} aspectRatio={aspectRatio} text="" />
      ))}
    </div>
  );
};
