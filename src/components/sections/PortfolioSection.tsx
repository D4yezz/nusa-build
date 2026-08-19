"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, ProjectItem } from "@/data/projects";
import { MapPin, Maximize2, CheckCircle2, ArrowUpRight, X } from "lucide-react";
import Image from "next/image";

export default function PortfolioSection() {
  const t = useTranslations("Portfolio");
  const locale = useLocale() as "id" | "en";

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  const categories = [
    { key: "all", label: t("all") },
    { key: "commercial", label: t("commercial") },
    { key: "residential", label: t("residential") },
    { key: "interior", label: t("interior") },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  return (
    <section
      id="portfolio"
      className="relative py-20 lg:py-28 bg-blue-50/40 dark:bg-blue-950/20"
    >
      <div className="px-5 mx-auto sm:px-18 lg:px-22">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-500 font-jakarta-sans text-xs font-bold tracking-wider uppercase mb-3">
            {t("tag")}
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight font-jakarta-sans sm:text-4xl text-blue-950 dark:text-white">
            {t("title")}
          </h2>
          <p className="text-base font-inter text-blue-900/80 dark:text-blue-200/80">
            {t("subtitle")}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative px-6 py-2.5 rounded-full font-jakarta-sans text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/25"
                    : "bg-white dark:bg-blue-950/70 text-blue-950 dark:text-blue-200 border border-blue-100 dark:border-blue-900/60 hover:border-orange-500/50"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="flex flex-col overflow-hidden transition-all duration-300 bg-white border border-blue-100 shadow-sm group rounded-3xl dark:bg-blue-950/70 dark:border-blue-900/60 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden bg-blue-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 transition-opacity bg-linear-to-t from-blue-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80" />

                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 dark:bg-blue-950/90 backdrop-blur-md font-jakarta-sans text-[11px] font-bold text-orange-500 uppercase tracking-wider shadow-sm">
                    {project.categoryName[locale]}
                  </span>

                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-950/80 backdrop-blur-md font-jakarta-sans text-[11px] font-bold text-white tracking-wider">
                    {project.year}
                  </span>
                </div>

                <div className="flex flex-col justify-between flex-1 p-6">
                  <div>
                    <h3 className="mb-2 text-xl font-bold transition-colors font-jakarta-sans text-blue-950 dark:text-white group-hover:text-orange-500">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-xs leading-relaxed font-inter text-blue-900/70 dark:text-blue-200/70 line-clamp-2">
                      {project.description[locale]}
                    </p>

                    <div className="flex items-center gap-4 mb-6 text-xs font-semibold text-blue-900/60 dark:text-blue-300/60">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-orange-500" />
                        {project.location.split(",")[0]}
                      </span>
                      <span className="flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5 text-orange-500" />
                        {project.area.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center justify-center w-full gap-2 py-3 text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded-2xl bg-blue-50 dark:bg-blue-900/40 hover:bg-orange-500 hover:text-white text-blue-950 dark:text-white font-jakarta-sans"
                  >
                    <span>{t("viewDetail")}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-dark-blue border border-blue-100 dark:border-blue-900/80 rounded-3xl p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-blue-50 dark:bg-blue-900 text-blue-950 dark:text-white hover:bg-orange-500 hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 mb-6 overflow-hidden rounded-2xl sm:h-80 bg-blue-950">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover w-full h-full"
                />
                <span className="absolute px-3 py-1 text-xs font-bold tracking-wider text-white uppercase bg-orange-500 rounded-full bottom-4 left-4 font-jakarta-sans">
                  {selectedProject.categoryName[locale]}
                </span>
              </div>

              <h3 className="mb-4 text-2xl font-extrabold font-jakarta-sans sm:text-3xl text-blue-950 dark:text-white">
                {selectedProject.title}
              </h3>

              <p className="mb-6 text-sm leading-relaxed font-inter text-blue-900/80 dark:text-blue-200/80">
                {selectedProject.description[locale]}
              </p>

              <div className="grid grid-cols-2 gap-4 p-4 mb-6 border border-blue-100 sm:grid-cols-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/60 dark:border-blue-900/60">
                <div>
                  <span className="text-[11px] font-semibold text-blue-900/60 dark:text-blue-300/60 uppercase block">
                    {t("modalLocation")}
                  </span>
                  <span className="text-xs font-bold font-jakarta-sans text-blue-950 dark:text-white">
                    {selectedProject.location}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-blue-900/60 dark:text-blue-300/60 uppercase block">
                    {t("modalYear")}
                  </span>
                  <span className="text-xs font-bold font-jakarta-sans text-blue-950 dark:text-white">
                    {selectedProject.year}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-blue-900/60 dark:text-blue-300/60 uppercase block">
                    {t("modalArea")}
                  </span>
                  <span className="text-xs font-bold font-jakarta-sans text-blue-950 dark:text-white">
                    {selectedProject.area}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-blue-900/60 dark:text-blue-300/60 uppercase block">
                    {t("modalDuration")}
                  </span>
                  <span className="text-xs font-bold font-jakarta-sans text-blue-950 dark:text-white">
                    {selectedProject.duration}
                  </span>
                </div>
              </div>
              <div className="mb-8">
                <h4 className="mb-3 text-sm font-bold tracking-wider uppercase font-jakarta-sans text-blue-950 dark:text-white">
                  {t("modalSpecs")}
                </h4>
                <ul className="space-y-2">
                  {selectedProject.specs.map((sp, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs font-semibold text-blue-900 dark:text-blue-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>{sp[locale]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/6281234567890?text=Halo%20NusaBuild,%20saya%20tertarik%20dengan%20proyek%20${encodeURIComponent(selectedProject.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-orange-500 text-white font-jakarta-sans font-bold text-center text-sm shadow-md hover:bg-orange-600 transition-colors"
                >
                  {t("modalConsult")}
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="py-3.5 px-6 rounded-xl bg-blue-50 dark:bg-blue-900/60 text-blue-950 dark:text-white font-jakarta-sans font-semibold text-sm hover:bg-blue-100 dark:hover:bg-blue-900"
                >
                  {t("modalClose")}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
