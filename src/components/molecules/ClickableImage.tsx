"use client";

import { useSnowfall } from "@/app/contexts/SnowfallContext";
import Image from "next/image";

interface ClickableImageProps {
  src: string; // Image source
  alt: string; // Alt text for accessibility
  width?: number; // Optional width
  height?: number; // Optional height
  style?: React.CSSProperties; // Optional inline styles
  className?: string; // Optional additional classes
  tabindex?: number;
}

const ClickableImage: React.FC<ClickableImageProps> = ({
  src,
  alt,
  width = 10,
  height = 10,
  style,
  className,
}) => {
  const { toggleSnow } = useSnowfall(); // Access the toggleSnow function from context

  return (
    <div
      className="absolute shrink-0 z-40 cursor-pointer"
      style={{
        bottom: "110px", // Default position
        left: "200px", // Default position
        ...style, // Allow custom styles to override defaults
      }}
      onClick={toggleSnow} // Toggle snow on click
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          toggleSnow();
        }
      }}
      tabIndex={0}
    >
      <Image
        src={src}
        alt={alt}
        className={`w-[20vw] h-[20vw] max-w-[64px] max-h-[64px] md:max-w-[128px] md:max-h-[128px] lg:max-w-[128px] lg:max-h-[128px] ${className}`}
        width={width}
        height={height}
      />
    </div>
  );
};

export default ClickableImage;