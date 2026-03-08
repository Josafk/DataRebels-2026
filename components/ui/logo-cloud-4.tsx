"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  boxClass?: string;
  imgClassName?: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
  gradientFrom?: string;
};

export function LogoCloud({
  logos,
  gradientFrom = "from-gray-100",
  className,
  ...props
}: LogoCloudProps) {
  return (
    <div
      className={`relative mx-auto max-w-5xl bg-gradient-to-r ${gradientFrom} via-transparent to-gray-100 py-6 ${className ?? ""}`}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-gray-200/50" />

      <InfiniteSlider
        gap={42}
        reverse
        duration={60}
        durationOnHover={20}
      >
        {logos.map((logo) => {
          const boxClass = logo.boxClass ?? "flex items-center justify-center w-[160px] h-[60px] flex-shrink-0";
          const imgClass = `pointer-events-none select-none max-w-full max-h-full object-contain grayscale ${logo.imgClassName ?? "opacity-50"}`;
          return (
            <div key={`logo-${logo.alt}`} className={boxClass}>
              <img
                alt={logo.alt}
                className={imgClass}
                height="auto"
                loading="lazy"
                src={logo.src}
                width="auto"
              />
            </div>
          );
        })}
      </InfiniteSlider>

      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 left-0 h-full w-[160px]"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 right-0 h-full w-[160px]"
        direction="right"
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-gray-200/50" />
    </div>
  );
}
