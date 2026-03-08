"use client";

import { CurriculumCard } from "@/components/ui/curriculum-card";

const curriculumCourses = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600",
    title: "Data Translator with GenAI",
    description:
      "Bridge the gap between business and data teams. Learn to translate insights into actionable strategies with GenAI-powered tools.",
    badges: [
      { icon: "clock" as const, label: "8 Weeks" },
      { icon: "video" as const, label: "Live Remote" },
    ],
    themeColor: "270 50% 30%",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600",
    title: "Data Product Owner with GenAI",
    description:
      "Lead data products from concept to delivery. Master the intersection of product management and GenAI for maximum impact.",
    badges: [
      { icon: "clock" as const, label: "6 Weeks" },
      { icon: "eye" as const, label: "On demand" },
      { icon: "building" as const, label: "Hybrid" },
    ],
    themeColor: "270 50% 30%",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600",
    title: "Python for Data Analysis with GenAI",
    description:
      "Unlock the power of Python and AI. Build real-world analytical skills with GenAI augmentation for faster, smarter insights.",
    badges: [
      { icon: "clock" as const, label: "8 Weeks" },
      { icon: "video" as const, label: "Live Remote" },
    ],
    themeColor: "270 50% 30%",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600",
    title: "Advanced Data Translator (Level 2) with GenAI",
    description:
      "Deepen your expertise. Advanced strategies for enterprise-scale data translation and GenAI-driven decision frameworks.",
    badges: [
      { icon: "clock" as const, label: "18 Weeks" },
      { icon: "video" as const, label: "Live Remote" },
    ],
    themeColor: "270 50% 30%",
  },
];

export function RebelCurriculum() {
  return (
    <section
      id="programs"
      className="relative z-10 py-20 bg-slate-50 scroll-mt-20"
      aria-label="The Rebel Curriculum"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-8">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8 mb-12 md:mb-14">
          <div className="max-w-[760px] md:pr-6">
            <h2 className="font-title text-slate-900 text-[24px] md:text-[24px] lg:text-[32px] font-semibold leading-[26px] md:leading-[26px] lg:leading-[34px] tracking-normal max-w-md">
              The Rebel Curriculum:
              <br />
              Master your future
            </h2>
            <p className="font-sans text-slate-600 text-[14px] leading-[18px] mt-5 text-left max-w-lg">
              We offer custom-engineered programs designed to close the GenAI
              talent gap and accelerate your career. Every course is
              project-based and anchored in real-world industry demands.
            </p>
          </div>
          <div className="md:pt-1 md:shrink-0">
            <a
              href="#contact"
              className="font-sans inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors"
            >
              Secure your spot now! →
            </a>
          </div>
        </div>

        {/* Grid de Cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {curriculumCourses.map((course, index) => (
            <div key={index} className="min-h-[420px]">
              <CurriculumCard
                imageUrl={course.imageUrl}
                title={course.title}
                description={course.description}
                badges={course.badges}
                href="#contact"
                themeColor={course.themeColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
