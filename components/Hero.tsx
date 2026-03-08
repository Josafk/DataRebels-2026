"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ShinyButton } from "@/components/ui/shiny-button";
import { useGSAP } from "@gsap/react";
import { HERO_SECTION_IMAGES } from "@/lib/hero-images";

gsap.registerPlugin(useGSAP);

const HERO_ALTS: Record<string, string> = {
  "/community-01-demoday.png": "Semillero de talento - Demoday",
  "/community-02-woman-presenting.png": "Presentación Machine Learning y análisis de datos",
  "/community-03-woman-portrait.png": "Rebel en espacio Data Rebels",
  "/community-04-man-presenting.png": "Presentación en evento Data Rebels",
  "/community-05-woman-red-glasses.png": "Análisis exploratorio y visualización - presentación",
  "/community-06-team-meeting.png": "Equipo Data Rebels en reunión colaborativa",
};

const rebelProfiles = HERO_SECTION_IMAGES.map((src) => ({
  src,
  alt: HERO_ALTS[src] ?? "Rebel Data Rebels",
}));

export function Hero() {
  const headerRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!headerRef.current) return;
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });
    },
    []
  );

  return (
    <>
      <h1
        ref={headerRef}
        className="font-title text-white text-[32px] sm:text-[40px] md:text-[32px] lg:text-[48px] lg:leading-[56px] font-semibold leading-tight mb-6 md:mb-10 max-w-3xl tracking-[0px]"
      >
        The Future of AI is Built Here. Become One of Our{" "}
        <span className="font-semibold">100K Rebels.</span>
      </h1>

      {/* FILA DE 6 IMÁGENES: scrollable en móvil, full-width en desktop */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 px-4 sm:px-6 lg:px-8 mb-6 md:mb-10 overflow-x-auto no-scrollbar">
        <div className="group flex items-stretch gap-3 sm:gap-4 w-max sm:w-full">
          {rebelProfiles.map((profile) => (
            <div
              key={profile.src}
              className="relative w-[120px] sm:flex-1 aspect-[3/4] overflow-hidden rounded-2xl transition-all duration-500 ease-in-out group-hover:scale-95 group-hover:opacity-50 hover:!scale-110 hover:!opacity-100"
            >
              <Image
                src={profile.src}
                alt={profile.alt}
                width={160}
                height={213}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-8 relative z-10">
        <p className="font-sans font-medium text-[14px] leading-[18px] sm:text-[20px] sm:leading-[24px] md:text-[14px] md:leading-[18px] lg:text-[16px] lg:leading-[24px] tracking-normal max-w-sm" style={{ color: "#F9F9F9" }}>
          The fastest, most cost-effective way to get your teams using AI.
        </p>

        <div className="flex flex-col md:flex-row w-full lg:w-auto gap-3 md:gap-4">
          <Link
            href="#programs"
            className="liquid-glass-btn outline-cta inline-flex md:flex-none items-center justify-center px-6 md:px-8 py-3 rounded-full hover:bg-[#EA366B]/10 transition-all duration-300 whitespace-nowrap"
          >
            Our programs
          </Link>
          <ShinyButton href="#contact" variant="blue" className="md:flex-none px-6 md:px-8 py-3">
            Enroll a Rebel Today
          </ShinyButton>
        </div>
      </div>
    </>
  );
}
