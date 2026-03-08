"use client";

import { ShinyButton } from "@/components/ui/shiny-button";

export function MTP() {
  return (
    <>
      {/* Label: Inter SemiBold 12px / LH 16px / LS 2px / blanco — spec DS */}
      <span className="font-sans text-[12px] leading-[16px] tracking-[2px] font-semibold text-white uppercase block mb-3">
        OUR MASSIVE TRANSFORMATIONAL PURPOSE
      </span>
      {/* Heading: Ambit SemiBold 24px / LH 32px / LS 0px móvil+tablet → 32px/40px desktop */}
      <h2 className="font-title text-white font-semibold mb-6 max-w-3xl mx-auto tracking-[0px] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px]">
        Closing the GenAI talent gap in Mexico with 100,000 certified Rebels by 2030.{" "}
        <span className="inline-block align-middle animate-mtp-pulse">⚡</span>
      </h2>
      <ShinyButton href="#contact" variant="blue" className="px-10 py-4">
        Book a Meeting
      </ShinyButton>
    </>
  );
}
