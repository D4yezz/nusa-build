"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { servicesData, ServiceItem } from "@/data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  ArmchairIcon,
  Building05Icon,
  Cancel01Icon,
  HardHatIcon,
  RepairIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function ServicesSection() {
  const t = useTranslations("Services");
  const locale = useLocale() as "id" | "en";
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null,
  );

  const getIcon = (name: string) => {
    switch (name) {
      case "Building2":
        return Building05Icon;
      case "Compass":
        return ArmchairIcon;
      case "Wrench":
        return RepairIcon;
      default:
        return HardHatIcon;
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
    <section id="services" className="relative py-20 lg:py-28">
      <div className="px-5 mx-auto sm:px-18 lg:px-22">
        <div className="mx-auto mb-16 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-500 font-jakarta-sans text-xs font-bold tracking-wider uppercase mb-3">
            {t("tag")}
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight font-jakarta-sans text-balance sm:text-4xl text-blue-950 dark:text-white">
            {t("title")}
          </h2>
          <p className="text-base font-inter text-blue-900/80 dark:text-blue-200/80">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-24 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => {
            const IconComp = getIcon(service.iconName);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col justify-between p-8 transition-all duration-300 bg-white border border-blue-100 shadow-sm rounded-3xl dark:bg-blue-950/70 dark:border-blue-900/60 hover:shadow-xl dark:hover:border-orange-500/40 group"
              >
                <div>
                  <div className="flex items-center justify-center mb-6 text-orange-500 transition-colors duration-300 w-14 h-14 rounded-2xl bg-orange-500/10 dark:bg-orange-500/20 group-hover:bg-orange-500 group-hover:text-white">
                    <HugeiconsIcon icon={IconComp} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold transition-colors font-jakarta-sans text-blue-950 dark:text-white group-hover:text-orange-500">
                    {service.title[locale]}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed font-inter text-blue-900/70 dark:text-blue-200/70">
                    {service.shortDesc[locale]}
                  </p>

                  <ul className="mb-6 space-y-2">
                    {service.features[locale].slice(0, 3).map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center gap-2 text-xs font-semibold text-blue-950 dark:text-blue-100"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-orange-500 uppercase font-jakarta-sans hover:text-orange-600 group/btn"
                >
                  <span>{t("readMore")}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="relative p-8 overflow-hidden text-white bg-orange-500 border shadow-2xl rounded-3xl sm:p-12 border-blue-100/80">
          <div className="max-w-2xl mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white font-jakarta-sans text-xs font-bold tracking-wider uppercase mb-3">
              {t("workflowTag")}
            </span>
            <h3 className="text-2xl font-extrabold tracking-tight text-white font-jakarta-sans sm:text-3xl">
              {t("workflowTitle")}
            </h3>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-5 border rounded-2xl bg-blue-100/40 border-white/50 backdrop-blur-sm"
              >
                <div>
                  <span className="block mb-2 text-3xl font-extrabold text-white font-jakarta-sans">
                    {step.num}
                  </span>
                  <h4 className="mb-2 text-base font-bold text-white font-jakarta-sans">
                    {step.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-white font-inter /70">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedService && (
        <div
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue-950/70 dark:bg-white/40 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-blue-950 border border-blue-100 dark:border-blue-900/80 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
          >
            <Button
              onClick={() => setSelectedService(null)}
              className="absolute text-white transition-colors bg-orange-500 rounded-full cursor-pointer top-2 right-2 w-7 h-7 dark:bg-blue-900 dark:text-white hover:bg-blue-50 hover:text-dark-blue"
            >
              <HugeiconsIcon icon={Cancel01Icon} />
            </Button>

            <div className="w-full h-56 mb-6 overflow-hidden border-2 border-blue-100 rounded-2xl">
              <Image
                src={selectedService.image}
                alt={selectedService.title[locale]}
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
              />
            </div>

            <h3 className="mb-3 text-2xl font-bold font-jakarta-sans text-blue-950 dark:text-white">
              {selectedService.title[locale]}
            </h3>

            <p className="mb-6 text-sm leading-relaxed font-inter text-blue-900/80 dark:text-blue-200/80">
              {selectedService.fullDesc[locale]}
            </p>

            <h4 className="mb-3 text-sm font-bold tracking-wider uppercase font-jakarta-sans text-blue-950 dark:text-white">
              Cakupan Layanan:
            </h4>
            <ul className="grid grid-cols-1 gap-2 mb-8 sm:grid-cols-2">
              {selectedService.features[locale].map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-xs font-semibold text-blue-900 dark:text-blue-100"
                >
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
                className="flex-1 px-6 py-3 text-sm font-bold text-center text-white transition-colors bg-orange-500 shadow-md rounded-xl font-jakarta-sans hover:bg-orange-600"
              >
                {t("contactService")}
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="px-6 py-3 text-sm font-semibold rounded-xl bg-blue-50 dark:bg-blue-900/60 text-blue-950 dark:text-white font-jakarta-sans hover:bg-blue-100 dark:hover:bg-blue-900"
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
