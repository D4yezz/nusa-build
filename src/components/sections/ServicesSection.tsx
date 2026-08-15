"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { servicesData, ServiceItem } from "@/data/services";
import { Building2, Compass, Wrench, ShieldCheck, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const t = useTranslations("Services");
  const locale = useLocale() as "id" | "en";
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case "Building2":
        return Building2;
      case "Compass":
        return Compass;
      case "Wrench":
        return Wrench;
      default:
        return ShieldCheck;
    }
  };

  const steps = [
    { num: "01", title: t("step1"), desc: t("step1Desc") },
    { num: "02", title: t("step2"), desc: t("step2Desc") },
    { num: "03", title: t("step3"), desc: t("step3Desc") },
    { num: "04", title: t("step4"), desc: t("step4Desc") },
    { num: "05", title: t("step5"), desc: t("step5Desc") },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {servicesData.map((service, index) => {
            const IconComp = getIcon(service.iconName);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/60 shadow-sm hover:shadow-xl dark:hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 dark:bg-orange-500/20 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-7 h-7 stroke-[2.2]" />
                  </div>

                  <h3 className="font-jakarta-sans text-xl font-bold text-blue-950 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {service.title[locale]}
                  </h3>

                  <p className="font-inter text-sm text-blue-900/70 dark:text-blue-200/70 leading-relaxed mb-6">
                    {service.shortDesc[locale]}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features[locale].slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-blue-950 dark:text-blue-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-xs font-jakarta-sans font-bold text-orange-500 hover:text-orange-600 uppercase tracking-wider group/btn"
                >
                  <span>{t("readMore")}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Project Workflow Timeline */}
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 border border-blue-900/80 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/20 text-orange-400 font-jakarta-sans text-xs font-bold tracking-wider uppercase mb-3">
              {t("workflowTag")}
            </span>
            <h3 className="font-jakarta-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {t("workflowTitle")}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-blue-900/40 border border-blue-800/50 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-jakarta-sans text-3xl font-extrabold text-orange-400 block mb-2">
                    {step.num}
                  </span>
                  <h4 className="font-jakarta-sans text-base font-bold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="font-inter text-xs text-blue-200/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Service Detail Pop-up Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/70 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-blue-950 border border-blue-100 dark:border-blue-900/80 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-blue-50 dark:bg-blue-900 text-blue-950 dark:text-white hover:bg-orange-500 hover:text-white transition-colors"
            >
              ✕
            </button>

            <div className="rounded-2xl overflow-hidden mb-6 h-56">
              <img
                src={selectedService.image}
                alt={selectedService.title[locale]}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-jakarta-sans text-2xl font-bold text-blue-950 dark:text-white mb-3">
              {selectedService.title[locale]}
            </h3>

            <p className="font-inter text-sm text-blue-900/80 dark:text-blue-200/80 leading-relaxed mb-6">
              {selectedService.fullDesc[locale]}
            </p>

            <h4 className="font-jakarta-sans text-sm font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-3">
              Cakupan Layanan:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {selectedService.features[locale].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-xs font-semibold text-blue-900 dark:text-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/6281234567890?text=Halo%20NusaBuild,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(selectedService.title[locale])}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 rounded-xl bg-orange-500 text-white font-jakarta-sans font-bold text-center text-sm shadow-md hover:bg-orange-600 transition-colors"
              >
                {t("contactService")}
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="py-3 px-6 rounded-xl bg-blue-50 dark:bg-blue-900/60 text-blue-950 dark:text-white font-jakarta-sans font-semibold text-sm hover:bg-blue-100 dark:hover:bg-blue-900"
              >
                Tutup
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
