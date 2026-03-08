"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Clock, Video, Eye, Building2 } from "lucide-react";

export interface CurriculumBadge {
  icon: "clock" | "video" | "eye" | "building";
  label: string;
}

interface CurriculumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  description: string;
  badges: CurriculumBadge[];
  href: string;
  themeColor: string; // e.g., "270 50% 30%" for purple
}

const iconMap = {
  clock: Clock,
  video: Video,
  eye: Eye,
  building: Building2,
};

const CurriculumCard = React.forwardRef<HTMLDivElement, CurriculumCardProps>(
  (
    {
      className,
      imageUrl,
      title,
      description,
      badges,
      href,
      themeColor,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        style={
          {
            "--theme-color": themeColor,
          } as React.CSSProperties & { "--theme-color": string }
        }
        className={cn("group w-full h-full", className)}
        {...props}
      >
        <a
          href={href}
          className="relative block w-full h-full min-h-[420px] rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-[0_0_60px_-15px_hsl(var(--theme-color)/0.6)]"
          aria-label={`Explore ${title}`}
          style={{
            boxShadow: "0 0 40px -15px hsl(var(--theme-color) / 0.5)",
          }}
        >
          {/* Background Image with Parallax Zoom */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />

          {/* Doble capa: 1) Oscurecimiento base 2) Gradiente de marca #682AC6 (de abajo a arriba) */}
          <div className="absolute inset-0 z-0 bg-black/50" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#682AC6] via-[#682AC6]/60 to-transparent" />

          {/* Content */}
          <div className="relative z-20 flex flex-col justify-end h-full min-h-[420px] p-8 text-white">
            <div className="h-[104px] flex flex-col justify-start mb-4">
              <h3 className="font-title font-semibold text-[24px] leading-[26px] text-white">
                {title}
              </h3>
            </div>
            <p className="font-sans text-white/90 text-sm leading-relaxed min-h-[100px] mb-4">
              {description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {badges.map((badge, i) => {
                const Icon = iconMap[badge.icon];
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/90 text-[11px]"
                  >
                    <Icon className="w-3 h-3 flex-shrink-0 text-white/90" strokeWidth={2} />
                    {badge.label}
                  </span>
                );
              })}
            </div>
          </div>
        </a>
      </div>
    );
  }
);
CurriculumCard.displayName = "CurriculumCard";

export { CurriculumCard };
