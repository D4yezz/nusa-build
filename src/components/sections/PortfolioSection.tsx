"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, ProjectItem } from "@/data/projects";
import { MapPin, Calendar, Maximize2, Clock, CheckCircle2, ArrowUpRight, X } from "lucide-react";

export default function PortfolioSection() {
  const t = useTranslations("Portfolio");
  const locale = useLocale() as "id" | "en";

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

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

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-blue-50/40 dark:bg-blue-950/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-500 font-jakarta-sans text-xs font-bold tracking-wider uppercase mb-3">
            {t("tag")}
          </span>
          <h2 className="font-jakarta-sans text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-white tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="font-inter text-base text-blue-900/80 dark:text-blue-200/80">
            {t("subtitle")}
          </p>
        </div>

        {/* Filter Tabs (Framer Motion AnimatePresence) */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-14">
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

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group rounded-3xl overflow-hidden bg-white dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative h-64 overflow-hidden bg-blue-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 dark:bg-blue-950/90 backdrop-blur-md font-jakarta-sans text-[11px] font-bold text-orange-500 uppercase tracking-wider shadow-sm">
                    {project.categoryName[locale]}
                  </span>

                  {/* Year Tag */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-950/80 backdrop-blur-md font-jakarta-sans text-[11px] font-bold text-white tracking-wider">
                    {project.year}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-jakarta-sans text-xl font-bold text-blue-950 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-inter text-xs text-blue-900/70 dark:text-blue-200/70 line-clamp-2 leading-relaxed mb-4">
                      {project.description[locale]}
                    </p>

                    <div className="flex items-center gap-4 text-xs font-semibold text-blue-900/60 dark:text-blue-300/60 mb-6">
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
                    className="w-full py-3 rounded-2xl bg-blue-50 dark:bg-blue-900/40 hover:bg-orange-500 hover:text-white text-blue-950 dark:text-white font-jakarta-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300"
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

      {/* Project Detail Pop-up Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-[#070f1e] border border-blue-100 dark:border-blue-900/80 rounded-3xl p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-blue-50 dark:bg-blue-900 text-blue-950 dark:text-white hover:bg-orange-500 hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Main Photo & Gallery */}
              <div className="rounded-2xl overflow-hidden mb-6 h-64 sm:h-80 bg-blue-950 relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-orange-500 text-white font-jakarta-sans text-xs font-bold uppercase tracking-wider">
                  {selectedProject.categoryName[locale]}
                </span>
              </div>

              <h3 className="font-jakarta-sans text-2xl sm:text-3xl font-extrabold text-blue-950 dark:text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="font-inter text-sm text-blue-900/80 dark:text-blue-200/80 leading-relaxed mb-6">
                {selectedProject.description[locale]}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 mb-6">
                <div>
                  <span className="text-[11px] font-semibold text-blue-900/60 dark:text-blue-300/60 uppercase block">
                    {t("modalLocation")}
                  </span>
                  <span className="font-jakarta-sans text-xs font-bold text-blue-950 dark:text-white">
                    {selectedProject.location}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-blue-900/60 dark:text-blue-300/60 uppercase block">
                    {t("modalYear")}
                  </span>
                  <span className="font-jakarta-sans text-xs font-bold text-blue-950 dark:text-white">
                    {selectedProject.year}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-blue-900/60 dark:text-blue-300/60 uppercase block">
                    {t("modalArea")}
                  </span>
                  <span className="font-jakarta-sans text-xs font-bold text-blue-950 dark:text-white">
                    {selectedProject.area}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-blue-900/60 dark:text-blue-300/60 uppercase block">
                    {t("modalDuration")}
                  </span>
                  <span className="font-jakarta-sans text-xs font-bold text-blue-950 dark:text-white">
                    {selectedProject.duration}
                  </span>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="mb-8">
                <h4 className="font-jakarta-sans text-sm font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-3">
                  {t("modalSpecs")}
                </h4>
                <ul className="space-y-2">
                  {selectedProject.specs.map((sp, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-blue-900 dark:text-blue-100">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
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
